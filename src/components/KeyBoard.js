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
     }

    .keyboard {
      display: grid;
      grid-template-columns: repeat(15, minmax(50px, 1fr));
      grid-auto-rows: 50px;
      gap: 5px;
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
    const keysHtml = KEYS.map(key => {
      const classKey = key[0];
      return `
        <keyboard-key key-code="${key}" class="key__${classKey}"></keyboard-key>`;
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
