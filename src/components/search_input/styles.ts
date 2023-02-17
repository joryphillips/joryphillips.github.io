import { css } from 'lit';

export const styles = [css`
  :host {
    --input-border: 1px solid #ccc;
    --input-border-radius: 3px;
    --combo-padding: .5rem;
    --combo-background: #FFF;

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
    padding: var(--combo-padding);
    border: var(--input-border);
    border-radius: var(--input-border-radius);
  }

  input[type="search"]:focus {
    outline: var(--focus-outline)!important;
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
    background-color: var(--combo-background);
    border: var(--input-border);
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
    background-color: var(--combo-background);
    border: none;
    border: var(--input-border);
    font-size: inherit;
    text-align: left;
    padding: var(--combo-padding);
  }

  li[role="option"][active], li[role="option"]:hover {
    background-color: var(--hover-background);
  }

  li:last-of-type  button[role="option"] {
    border-bottom: none;
  }
`];
