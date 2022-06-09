// const specialKeys = {
//   Escape: 'Esc',
//   Backspace: '←',
//   CapsLock: 'Caps',
//   ShiftLeft: 'Shift',
//   ShiftRight: 'Shift',
//   ControlLeft: 'Ctrl',
//   ControlRight: 'Ctrl',
//   AltLeft: 'Alt',
//   AltRight: 'Alt',
//   ArrowUp: '↑',
//   ArrowDown: '↓',
//   ArrowLeft: '←',
//   ArrowRight: '→',
//   Function: 'Fn',
//   MetaLeft: '⊞',
//   Backslash: '\\',
//   Slash: '/',
//   BracketLeft: '[',
//   BracketRight: ']'
// };
class KeyBoardKey extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles () {
    return /* css */ `
     :host {
       /*varriables*/
       --key-width: 50px;
       --key-height: 50px;


       width: var(--key-width);
       height: var(--key-height);
       box-sizing: border-box;
       border: inset 5px var(--color-key-soft-border);
       border-left: inset 5px;
       border-top: inset 5px;
       cursor: pointer;
       transition: all 50ms ease-in;
       background-color: var(--color-key-soft);
     }

     :host(.keyboard__rgb){
       animation: shadow-pulse 10s infinite alternate;
     }

    /* Custom the keyboard */
     :host(.key__hard) {
       background-color: var(--color-key-hard);
       border-color: var(--color-key-hard-border);
     }

     :host(.key__accent) {
       background-color: var(--color-accent);
       border-color: var(--color-key-accent-border);
     }

     :host(:active), :host(.key__active)  {
      transform: scale(0.9);
     }

    /* width to the special keys*/
     :host(.key__Backspace), :host(.key__ShiftLeft), :host(.key__ShiftRight){
       width: calc(var(--key-width) * 2);
     }

     :host(.key__CapsLock) {
      width: calc(var(--key-width) * 1.8);
     }

     :host(.key__Enter) {
      width: calc(var(--key-width) * 2.5);
     }

     :host(.key__Space) {
       width: calc(var(--key-width) * 7.5);
     }

     :host(.key__Tab), :host(.key__Backslash)  {
       width: calc(var(--key-width) * 1.5);
     }

     /* General styls for the key */
     .key {
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100%;
       color: var(--color-key-font);
     }

     .key__label-secundary {
      margin-left: 5px;
      font-size: 0.8rem;
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
    this.keys = this.getAttribute('keys').split(',');
    this.render();
  }

  renderSecundaryLabel (secondaryLabel) {
    const regex = /[^a-zA-Z]/;

    return regex.test(secondaryLabel)
      ? /* html */`<span class="key__label-secundary">${secondaryLabel}</span>`
      : '';
  }

  render () {
    const label = this.keys[0] || ','; // in case the comma is the label key
    const secondaryLabel = this.keys[1] || '';
    this.shadowRoot.innerHTML = /* html */ `
    <style>${KeyBoardKey.styles}</style>
    <div class="key">
      <span>${label}</span>
      ${this.renderSecundaryLabel(secondaryLabel)}
    </div>`;
  }
}

customElements.define('keyboard-key', KeyBoardKey);
