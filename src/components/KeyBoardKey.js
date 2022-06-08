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
       --color-accent: #fd4523;
       --color-key-soft: #6b727a;
       --color-key-hard: #595a5f;
       --color-key-soft-border: #44464d;
       --color-key-accent-border: #d30500;
       --color-key-font: #fff;
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

    /* Custom the keyboard */
     :host(.key__hard) {
       background-color: var(--color-key-hard);
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
   `;
  }

  connectedCallback () {
    this.keys = this.getAttribute('keys').split(',');
    this.render();
  }

  render () {
    const label = this.keys[0] || ','; // in case the comma is the label key
    this.shadowRoot.innerHTML = /* html */ `
    <style>${KeyBoardKey.styles}</style>
    <div class="key">
      <span>${label}</span>
    </div>`;
  }
}

customElements.define('keyboard-key', KeyBoardKey);
