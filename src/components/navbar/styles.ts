import { css } from 'lit';
import { cssVariables } from '../../shared_styles/styles';

export const styles = [cssVariables, css`
  :host {
    z-index: 2;
    height: 3.25rem;
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    background-color: #f0f0f0;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, .125);
  }

  nav {
    display: flex;
    flex: 1 1 auto;
    max-width: 40rem;
    margin: 0 auto;
  }

  .navy {
    color: rgba(0, 32, 66, 0.9);
  }

  a {
    position: relative;
    float: left;
    z-index: 2;
    padding: 1rem;
    font-family: inherit;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    line-height: 1.125rem;
    vertical-align: middle;
    -webkit-appearance: none;
    transition: background-color .15s var(--ease-in-out-cubic);
    color: inherit;
    background-color: transparent;
    border-radius: 0;
    border: 1px solid transparent;
  }

  a:focus {
    background-color: var(--hover-background);
    outline: var(--focus-outline)!important;
    outline-offset: -2px!important;
  }
`];
