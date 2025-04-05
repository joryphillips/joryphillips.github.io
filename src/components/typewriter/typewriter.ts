import { html, css, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

export class TypeWriter extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    .cursor {
      display: inline-block;
      width: 2px;
      height: 1em;
      background-color: currentColor;
      margin-left: 2px;
      animation: blink 1s step-end infinite;
    }
    @keyframes blink {
      from, to { opacity: 1; }
      50% { opacity: 0; }
    }
  `;

  @property({ type: Array })
  strings: string[] = [];

  @property({ type: Number })
  typeSpeed = 50;  // ms per character while typing

  @property({ type: Number })
  eraseSpeed = 30;  // ms per character while erasing

  @property({ type: Number })
  delayAfterType = 1000;  // ms to wait after typing before erasing

  @state()
  private currentText = '';

  @state()
  private currentIndex = 0;

  @state()
  private isTyping = true;

  @state() 
  private commonPrefixLength = 0;

  @state()
  private targetString = '';

  private timer?: number;

  connectedCallback() {
    super.connectedCallback();
    this.startAnimation();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.timer) {
      window.clearTimeout(this.timer);
    }
  }

  startAnimation() {
    if (this.strings.length === 0) return;
    
    if (this.isTyping) {
      const target = this.targetString || this.strings[this.currentIndex];
      
      // If we still have characters to type
      if (this.currentText.length < target.length) {
        this.currentText = target.substring(0, this.currentText.length + 1);
        this.timer = window.setTimeout(() => this.startAnimation(), this.typeSpeed);
      } else {
        // Finished typing, wait before erasing
        this.timer = window.setTimeout(() => {
          this.isTyping = false;
          
          const currentString = this.strings[this.currentIndex];
          const nextIndex = (this.currentIndex + 1) % this.strings.length;
          const nextString = this.strings[nextIndex];
          
          // Find the common prefix
          let i = 0;
          while (i < currentString.length && 
                 i < nextString.length && 
                 currentString[i] === nextString[i]) {
            i++;
          }
          this.commonPrefixLength = i;
          
          // Set target string for next phase
          this.targetString = nextString;
          
          this.startAnimation();
        }, this.delayAfterType);
      }
    } else {
      // Erasing phase
      // If we still have characters to erase to reach the common prefix
      if (this.currentText.length > this.commonPrefixLength) {
        this.currentText = this.currentText.substring(0, this.currentText.length - 1);
        this.timer = window.setTimeout(() => this.startAnimation(), this.eraseSpeed);
      } else {
        // Finished erasing, start typing the next string from the common prefix
        this.currentIndex = (this.currentIndex + 1) % this.strings.length;
        this.isTyping = true;
        this.timer = window.setTimeout(() => this.startAnimation(), this.typeSpeed);
      }
    }
  }

  render() {
    return html`
      <span>${this.currentText}</span>
      <span class="cursor"></span>
    `;
  }
}

customElements.define('type-writer', TypeWriter);

declare global {
  interface HTMLElementTagNameMap {
    'type-writer': TypeWriter;
  }
}