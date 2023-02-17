import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { useState } from 'haunted';

import { addStyles, component } from '../../util/util';
import { styles } from './styles';

const DEBOUNCE_TIMEOUT = 350;
const defaultHandleSearchInput = (value: string)=> value;
const defaultScrollBehavior: ScrollIntoViewOptions = {
  behavior: 'smooth',
  block: 'nearest',
};

/**
 * Properties for search-input element.
 */
export interface Props {
  keyWords: Set<string>,
  handleSearchInput: (value: string)=> void,
}

/**
 * An ARIA 1.1-compliant search input with dropdown of suggestions.
 */
function SearchInput(this: unknown, {keyWords = new Set(), handleSearchInput = defaultHandleSearchInput}: Props) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [inputDebounce, setInputDebounce] = useState<number|undefined>(undefined);
  const [optionIndex, setOptionIndex] = useState<number|null>(null);
  const [inputValue, setInputValue] = useState('');

  const listBox = (this as Element).shadowRoot?.querySelector('#listbox') as HTMLElement|null;

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleFocus = () => {
    setShowDropDown(true);
  };

  const handleArrowDown = () => {
    setShowDropDown(true);
    let localIndex;
    if (optionIndex == null || optionIndex === keyWords.size - 1) {
      localIndex = 0;
    } else {
      localIndex = optionIndex + 1;
    }
    if (listBox) {
      listBox.children[localIndex].scrollIntoView(defaultScrollBehavior);
    }
    setOptionIndex(localIndex);
  };

  const handleArrowUp = () => {
    let localIndex;
    if (optionIndex == null || optionIndex === 0) {
      localIndex = keyWords.size - 1;
    } else {
      localIndex = optionIndex - 1;
    }
    if (listBox) {
      listBox.children[localIndex].scrollIntoView(defaultScrollBehavior);
    }
    setOptionIndex(localIndex);
  };

  const handleInputKeyUp = (e: KeyboardEvent) => {
    const {key} = e;
    switch (key) {
    case 'ArrowDown':
      handleArrowDown();
      break;
    case 'ArrowUp':
      handleArrowUp();
      break;
    case 'Escape':
      handleSearchInput('');
      setOptionIndex(null);
      setShowDropDown(false);
      break;
    case 'Enter':
      if (optionIndex == null) break;
      setInputValue([...keyWords][optionIndex]);
      handleSearchInput([...keyWords][optionIndex]);
      setShowDropDown(false);
      break;

    default:
      break;
    }
  };

  const handleBlur = () => {
    setOptionIndex(null);
    if (showDropDown) {
      setShowDropDown(false);
    }
  };

  const handleInput = (e: InputEvent) => {
    const {value} = e.composedPath().find(
      el => ((el as HTMLElement).tagName === 'INPUT')) as HTMLInputElement;

    if (inputDebounce) {
      clearTimeout(inputDebounce);
    }
    setInputDebounce(window.setTimeout(()=> {
      handleSearchInput(value);
    }, DEBOUNCE_TIMEOUT));
  };

  const onOptionClick = (keyword: string)=> {
    setInputValue(keyword);
    toggleDropdown();
    handleSearchInput(keyword);
  };

  addStyles(this, styles);

  return html`
    <div
      id="combobox"
      role="combobox"
      aria-expanded=${showDropDown}
      aria-owns="listbox"
      aria-haspopup="true">
    <label for="search" class="hide">Search</label>
      <input
        type="search"
        placeholder="search"
        aria-label="Search through projects"
        aria-controls="listbox"
        aria-autocomplete="list"
        autocomplete="off"
        .value=${inputValue}
        @input=${handleInput}
        @focus=${handleFocus}
        @blur=${handleBlur}
        @keyup=${handleInputKeyUp}
      >
    </div>

    <ul
      id="listbox"
      role="listbox"
      aria-expanded=${showDropDown}
      class=${classMap({'show': showDropDown})}
    >${[...keyWords].map((keyword: string, index: number) => html`
        <li
          role="option"
          ?active=${index === optionIndex}
          @mousedown=${()=> onOptionClick(keyword)}>${keyword}</li>
      `)}
    </ul>
  `;
}

customElements.define('search-input', component<HTMLElement & Props>(SearchInput));

declare global {
  interface HTMLElementTagNameMap {
    'search-input': HTMLElement & Props,
  }
}
