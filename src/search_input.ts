import {html, render} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import haunted, {useState} from 'haunted';

import { Selector } from './selectors';
import { elementSelector } from './util';

const DEBOUNCE_TIMEOUT = 350;

interface SearchBoxProps {
  keyWords: Set<string>,
  handleSearchInput: (value: string)=> void,
}

const styles = html`
    <style>
      :host {
        position: relative;
        flex: 2 1 auto;
        min-width: 200px;
      }

      :host label.hide {
        position: absolute!important;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px,1px,1px,1px);
      }

      input[type="search"] {
        font-family: inherit;
        font-size: inherit;
        display: block;
        width: 100%;
        padding: .5rem;
        border: 1px solid #ccc;
        border-radius: 3px;
      }

      input[type="search"]:focus {
        outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
      }

      ul,
      ul li,
      ul ul li {
        margin:0;
        padding: 0;
        text-indent: 0;
        list-style-type: none;
      }

      ul[role="listbox"] {
        display: none;
        background-color: #FFF;
        border: 1px solid #ccc;
      }

      ul[role="listbox"], button[role="option"] {
        box-sizing: border-box;
        width: 100%;
      }

      ul[role="listbox"].show {
        display: block;
        position: absolute;
        z-index: 10;
        max-height: 200px;
        overflow-y: scroll;
      }

      li[role="option"] {
        background-color: #FFF;;
        border: none;
        border-bottom: 1px solid #ccc;
        font-size: inherit;
        text-align: left;
        padding: .5rem;
      }

      li[role="option"][active], li[role="option"]:hover {
        background-color: rgb(115 179 221 / 17%);
      }

      li:last-of-type  button[role="option"] {
        border-bottom: none;
      }
    </style>
`;

function SearchBox(this: unknown, {keyWords, handleSearchInput}: SearchBoxProps) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [inputDebounce, setInputDebounce] = useState<number|undefined>(undefined);
  const [optionIndex, setOptionIndex] = useState<number|null>(null);

  const searchInput = elementSelector(Selector.SEARCH_INPUT, this as HTMLElement) as HTMLInputElement;
  const listBox = elementSelector('#listbox', this as HTMLElement);

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
    listBox.children[localIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
      listBox.children[localIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
      if (optionIndex == null || !searchInput) break;
      searchInput.value = [...keyWords][optionIndex];
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
    if (searchInput) {
      searchInput.value = keyword;
    }

    toggleDropdown();
    handleSearchInput(keyword);
  };

  return html`
    ${styles}
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

type TemporaryRenderFunction = (result: unknown, container: DocumentFragment | Element)=> void;
const {component} = haunted({render: render as TemporaryRenderFunction});

customElements.define('search-box', component<HTMLElement & SearchBoxProps>(SearchBox));

declare global {
  interface HTMLElementTagNameMap {
    'search-box': HTMLElement & SearchBoxProps,
  }
}
