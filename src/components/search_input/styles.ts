import { css } from 'lit';

export const styles = css`
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
`;
