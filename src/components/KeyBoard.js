import './KeyRow.js';
import './KeyBoardKey.js';
import KEYS from '../keys.json';

class KeyBoard extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
    this.keySound = new Audio('keysound.mp3');
  }

  static get styles () {
    return /* css */ `
     :host {
      --keyboard-width: 850px;
      --color-background1: #2c2c2e;
      --color-background2: #3a3a3c;

      --color-keyboard-red: rgb(255, 0, 0);
      --color-keyboard-green: rgb(0, 255, 0);
      --color-keyboard-blue: rgb(0, 0, 255);
      --color-keyboard-yellow: rgb(255, 255, 0);
      --color-keyboard-cyan: rgb(0, 255, 255);
      --color-keyboard-magenta: rgb(255, 0, 255);
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
      box-shadow: 2px 2px 10px rgb(0 0 0 / 75%);
    }

    .keyboard__rgb {
      animation: shadow-pulse 10s infinite alternate;
    }

    @keyframes shadow-pulse{
      0% {
        box-shadow: 2px 2px 7px var(--color-keyboard-blue), -1px -1px 7px var(--color-keyboard-blue);
      }
      20% {
        box-shadow: 2px 2px 8px var(--color-keyboard-cyan), -1px -1px 8px var(--color-keyboard-cyan);
      }
      40% {
        box-shadow: 2px 2px 10px var(--color-keyboard-green), -1px -1px 10px var(--color-keyboard-green);
      }
      60% {
        box-shadow: 2px 2px 9px var(--color-keyboard-yellow), -1px -1px 9px var(--color-keyboard-yellow);
      }
      80% {
        box-shadow: 2px 2px 10px var(--color-keyboard-magenta), -1px -1px 10px var(--color-keyboard-magenta);
      }
      100% {
        box-shadow: 2px 2px 10px var(--color-keyboard-red), -1px -1px 10px var(--color-keyboard-red);
      }
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

  prepareKeyBoard () {
    document.addEventListener('keyup', (e) => {
      this.keySound.current = 0;
      this.keySound.play();
      const keyCode = e.code;
      const key = this.shadowRoot.querySelector(`.key__${keyCode}`);
      key.classList.add('key__active');
      setTimeout(() => {
        key.classList.remove('key__active');
      }, 100);
    });
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
