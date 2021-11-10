import { expect } from '@open-wc/testing';
import { listHasSearchValues } from '../src/components/project_list/project_list';

describe('listHasSearchValues', ()=> {
  describe('single search value', ()=> {
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
