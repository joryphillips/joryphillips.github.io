import { html, fixture, expect } from '@open-wc/testing';
import {Props} from '../src/components/search_input/search_input';
import '../src/components/search_input/search_input';
import { dispatchEvents } from './helpers';

const keyWords = new Set(['banana', 'blueberry', 'orange', 'raspberry']);


describe('search-input', ()=> {
  it('adds provided keywords', async ()=> {
    const el: HTMLElement & Props = await fixture(
      html`<search-input .keyWords=${keyWords}></search-input>`);

    expect(el.keyWords.size).to.equal(4);
  });

  it('uses handleSearchInput correctly', async ()=> {
    const handleInput = (value: string) => {
      expect(value).to.equal('Lemon');
    };

    const el: HTMLElement & Props = await fixture(
      html`<search-input .handleSearchInput=${handleInput}></search-input>`);

    const input = el.shadowRoot?.querySelector('input') as HTMLInputElement;
    input.value = 'Lemon';
    input.dispatchEvent(new Event('input'));
  });

  describe('input interaction behavior', ()=> {
    let el: HTMLElement & Props;
    let input: HTMLInputElement;

    beforeEach(async ()=> {
      el = await fixture(
        html`<search-input .keyWords=${keyWords}></search-input>`);
      input = el.shadowRoot?.querySelector('input');
    });

    it('dropdown value shows up in input on selection mousedown', async ()=> {
      const selectOption = el.shadowRoot?.querySelector('li[role="option"]') as HTMLInputElement;
      await dispatchEvents(selectOption, [new Event('mousedown')]);
      expect(input.value).to.equal('banana');
    });

    it('focus shows listbox', async ()=> {
      const listBox = el.shadowRoot.querySelector('#listbox') as HTMLElement;
      await dispatchEvents(input, [new Event('focus')]);
      expect(listBox.getAttribute('aria-expanded')).to.equal('true');
      expect(!!listBox.offsetParent).to.be.true;
    });

    it('escape key hides listbox', async ()=> {
      const listBox = el.shadowRoot.querySelector('#listbox') as HTMLElement;
      await dispatchEvents(input, [
        new Event('focus'),
        new KeyboardEvent('keyup', {key: 'ArrowDown'}),
      ]);
      expect(listBox.getAttribute('aria-expanded')).to.equal('true');
      expect(!!listBox.offsetParent).to.be.true;
      await dispatchEvents(input, [
        new KeyboardEvent('keyup', {key: 'Escape'}),
      ]);
      expect(listBox.getAttribute('aria-expanded')).to.equal('false');
      expect(listBox.offsetParent).to.be.null;
    });

    it('blur hides listbox', async ()=> {
      const listBox = el.shadowRoot.querySelector('#listbox') as HTMLElement;
      await dispatchEvents(input, [
        new Event('focus'),
        new KeyboardEvent('keyup', {key: 'ArrowDown'}),
      ]);
      expect(listBox.getAttribute('aria-expanded')).to.equal('true');
      expect(!!listBox.offsetParent).to.be.true;
      await dispatchEvents(input, [
        new Event('blur'),
      ]);
      expect(listBox.getAttribute('aria-expanded')).to.equal('false');
      expect(listBox.offsetParent).to.be.null;
    });

    it('down arrow when at beginning moves selection to beginning of list', async ()=> {
      await dispatchEvents(input, [
        new Event('focus'),
        new KeyboardEvent('keyup', {key: 'ArrowDown'}),
        new KeyboardEvent('keyup', {key: 'Enter'}),
      ]);
      expect(input.value).to.equal('banana');
    });

    it('two down arrows when at beginning moves selection to second in list', async ()=> {
      await dispatchEvents(input, [
        new Event('focus'),
        new KeyboardEvent('keyup', {key: 'ArrowDown'}),
        new KeyboardEvent('keyup', {key: 'ArrowDown'}),
        new KeyboardEvent('keyup', {key: 'Enter'}),
      ]);
      expect(input.value).to.equal('blueberry');
    });

    it('up arrow when at beginning moves selection to end of list', async ()=> {
      await dispatchEvents(input, [
        new Event('focus'),
        new KeyboardEvent('keyup', {key: 'ArrowUp'}),
        new KeyboardEvent('keyup', {key: 'Enter'}),
      ]);
      expect(input.value).to.equal('raspberry');
    });

    it('two up arrows when at beginning moves selection to second in list', async ()=> {
      await dispatchEvents(input, [
        new Event('focus'),
        new KeyboardEvent('keyup', {key: 'ArrowUp'}),
        new KeyboardEvent('keyup', {key: 'ArrowUp'}),
        new KeyboardEvent('keyup', {key: 'Enter'}),
      ]);
      expect(input.value).to.equal('orange');
    });

    it('down arrow when at end moves selection to beginning of list', async ()=> {
      await dispatchEvents(input, [
        new Event('focus'),
        new KeyboardEvent('keyup', {key: 'ArrowUp'}),
        new KeyboardEvent('keyup', {key: 'ArrowDown'}),
        new KeyboardEvent('keyup', {key: 'Enter'}),
      ]);
      expect(input.value).to.equal('banana');
    });
  });
});
