import './KeyRow.js';
import './KeyBoardKey.js';
import KEYS from '../keys.json';

class KeyBoard extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles () {
    return /* css */ `
     :host {
      --keyboard-width: 850px;
      --color-background1: #2c2c2e;
      --color-background2: #3a3a3c;
     }

    .keyboard {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 6px;
      width: var(--keyboard-width);
      margin: 30px 20px;
      padding: 10px;
      min-height: calc(var(--keyboard-width) / 3);
      border-radius: 10px;
      background: linear-gradient(to bottom right, var(--color-background1), var(--color-background2));
    }
   `;
  }

  connectedCallback () {
    this.render();
  }

  renderKeys () {
    const keysHtml = KEYS.map(({ keyCode, keys, style }) => {
      return `
        <keyboard-key keys="${keys}" class="key__${keyCode} key__${style}"></keyboard-key>`;
    });
    return keysHtml.join('');
  }

  render () {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${KeyBoard.styles}</style>
    <div class="keyboard">
     ${this.renderKeys()}
    </div>`;
  }
}

customElements.define('key-board', KeyBoard);
