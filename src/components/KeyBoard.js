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

    /* Themes */
     :host(.keychron){
       --color-accent: #fd4523;
       --color-key-soft: #6b727a;
       --color-key-hard: #595a5f;
       --color-key-soft-border: #44464d;
       --color-key-accent-border: #d30500;
       --color-key-font: #fff;
       --color-key-hard-border: #7c7c7c;
     }

     :host(.hayabusa){
      --color-accent: #7c929e;
      --color-key-soft: #E6E6E6;
      --color-key-hard: #7c929e;
      --color-key-soft-border: #44464d;
      --color-key-accent-border: #7d7f84;
      --color-key-font: #4f4f52;
      --color-key-hard-border: #7c7c7c;
    }

    :host(.instago){
      --color-accent: #65646B;
      --color-key-soft: #DF555A;
      --color-key-hard: #65646B;
      --color-key-soft-border: #a74c52;
      --color-key-accent-border: #7d7f84;
      --color-key-font: #fff;
      --color-key-hard-border: #7c7c7c;
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
    this.classList.add('keychron');
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
