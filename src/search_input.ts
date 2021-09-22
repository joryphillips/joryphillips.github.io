import {html, render} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import haunted, {useState} from 'haunted';
import { Selector } from './selectors';

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

      div[role="listbox"] {
        display: none;
        background-color: #FFF;
        border: 1px solid #ccc;
      }

      div[role="listbox"], button[role="option"] {
        box-sizing: border-box;
        width: 100%;
      }

      div[role="listbox"].show {
        display: block;
        position: absolute;
        z-index: 10;
        max-height: 200px;
        overflow-y: scroll;
      }

      button[role="option"] {
        background-color: #FFF;;
        border: none;
        border-bottom: 1px solid #ccc;
        font-size: inherit;
        text-align: left;
        padding: .5rem;
      }

      button[role="option"]:last-of-type {
        border-bottom: none;
      }
    </style>
`;

function SearchBox({keyWords, handleSearchInput}: SearchBoxProps) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [inputDebounce, setInputDebounce] = useState(null);

  const searchInput = this.shadowRoot.querySelector(Selector.SEARCH_INPUT) as HTMLInputElement;

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleFocus = () => {
    toggleDropdown();
  };

  const handleBlur = (e: FocusEvent) => {
    e.preventDefault();
    if (showDropDown) {
      toggleDropdown();
    }
  };

  const handleInput = (e: InputEvent) => {
    const {value} = e.composedPath().find(
      el => ((el as HTMLElement).tagName === 'INPUT')) as HTMLInputElement;
    if (inputDebounce) {
      clearTimeout(inputDebounce);
    }
    setInputDebounce(setTimeout(()=> {
      handleSearchInput(value);
    }, DEBOUNCE_TIMEOUT));
  };

  const onDropdownButtonClick = (keyword: string)=> {
    searchInput.value = keyword;

    toggleDropdown();
    handleSearchInput(keyword);
  };

  return html`
    ${styles}

    <label for="search" class="hide">Search</label>
    <input
      type="search"
      placeholder="search"
      aria-label="Search through projects"
      autocomplete="off"
      @input=${handleInput}
      @focus=${handleFocus}
      @blur=${handleBlur}
    >
    <div role="listbox" class=${classMap({'show': showDropDown})}>
      ${[...keyWords].map(keyword => html`
        <button
          role="option"
          @mousedown=${()=> onDropdownButtonClick(keyword)}>${keyword}</button>
      `)}
    </div>
  `;
}

const {component} = haunted({render});

// any is needed to deal with typing issue in haunted
customElements.define('search-box', component(SearchBox as any));
