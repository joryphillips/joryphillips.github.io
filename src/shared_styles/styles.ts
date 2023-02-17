import { css } from 'lit';

export const cssVariables = css`
  :root, :host {
    --focus-outline: 2px solid hsl(211deg 100% 40% / 90%);
    --hover-background: rgb(115 179 221 / 17%);
    --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1.000);
    --border-color: rgba(0, 0, 0, .125);
  }
`;

export const sharedStyles = css`
  .border-bottom {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: var(--border-color);
  }

  .border-top {
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: var(--border-color);
  }
`;
