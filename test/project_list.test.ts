import { html, fixture, expect } from '@open-wc/testing';
import { listHasSearchValues } from '../src/components/project_list/project_list';
import '../src/components/project_list/project_list';
import { dispatchEvents } from './helpers';

describe('project_list', ()=> {
  let el: HTMLElement;
  let cards: NodeListOf<HTMLElement>;

  beforeEach(async ()=> {
    el = await fixture(html`<project-list></project-list>`);
    cards = el.shadowRoot.querySelectorAll('project-card');
  });

  describe('card', ()=> {
    let selectedCard: HTMLElement;
    let infoButton: HTMLButtonElement;

    beforeEach(()=> {
      [, selectedCard] = cards;
      infoButton = selectedCard.shadowRoot.querySelector('button.image-container');
    });

    describe('selection', ()=> {
      it('selected card has selected attribute', async ()=> {
        await dispatchEvents(infoButton, [new Event('click')]);
        expect(selectedCard.hasAttribute('selected')).to.be.true;
      });

      it('selected card does not have hidden attribute', async ()=> {
        await dispatchEvents(infoButton, [new Event('click')]);
        expect(selectedCard.hasAttribute('hidden')).to.be.false;
      });

      it('non-selected cards have hidden attribute', async ()=> {
        await dispatchEvents(infoButton, [new Event('click')]);
        const nonSelectedCards = [...cards].filter(
          card => !card.hasAttribute('selected'));
        for (const hiddenCard of nonSelectedCards) {
          expect(hiddenCard.hasAttribute('hidden')).to.be.true;
        }
      });
    });
    describe('deselection', ()=> {
      it('reverts all cards to not selected and not hidden', async ()=> {
        await dispatchEvents(infoButton, [new Event('click')]);
        expect(selectedCard.hasAttribute('selected')).to.be.true;

        const closeButton = selectedCard.shadowRoot.querySelector('button.close');
        await dispatchEvents(closeButton, [new Event('click')]);
        for (const card of cards) {
          expect(card.hasAttribute('selected')).to.be.false;
          expect(card.hasAttribute('hidden')).to.be.false;
        }
      });
    });
  });
});

describe('listHasSearchValues', ()=> {
  describe('single serach value', ()=> {
    it('returns false if search value not present', ()=> {
      const searchValue = 'boop';
      const stringsToSearch = 'boo radley oop';
      expect(listHasSearchValues(searchValue, stringsToSearch)).to.be.false;
    });

    it('returns true if search value is a substring of listed words', ()=> {
      const searchValue = 'boop';
      const stringsToSearch = 'boo radley boopsies';
      expect(listHasSearchValues(searchValue, stringsToSearch)).to.be.true;
    });

    it('returns true if search value present', ()=> {
      const searchValue = 'boop';
      const stringsToSearch = 'boo radley boop';
      expect(listHasSearchValues(searchValue, stringsToSearch)).to.be.true;
    });

    it('returns true if search value present in different casing', ()=> {
      const searchValue = 'boop';
      const stringsToSearch = 'boo radley BOop';
      expect(listHasSearchValues(searchValue, stringsToSearch)).to.be.true;
    });
  });

  describe('multiple search values', ()=> {
    it('returns true if all search values have matches ', ()=> {
      const searchValue = 'radley oop';
      const stringsToSearch = 'boo radley grep oop lee';
      expect(listHasSearchValues(searchValue, stringsToSearch)).to.be.true;
    });

    it('returns false if not all search values have matches ', ()=> {
      const searchValue = 'radley boop';
      const stringsToSearch = 'boo radley grep oop lee';
      expect(listHasSearchValues(searchValue, stringsToSearch)).to.be.false;
    });
  });
});
