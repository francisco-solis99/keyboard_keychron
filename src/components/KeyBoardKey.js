const specialKeys = {
  Escape: 'Esc',
  Backspace: '←',
  CapsLock: 'Caps',
  ShiftLeft: 'Shift',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  ControlRight: 'Ctrl',
  AltLeft: 'Alt',
  AltRight: 'Alt',
  ArrowUp: '↑',
  ArrowDown: '↓',
  ArrowLeft: '←',
  ArrowRight: '→',
  Function: 'Fn',
  MetaLeft: 'Cmd',
  Backslash: '\\',
  Slash: '/'
};
class KeyBoardKey extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles () {
    return /* css */ `
     :host {
      background-color: var(--color-key-medium);
      border: inset 5px #44464D;
       border-left: inset 5px;
       border-top: inset 5px;
       box-sizing: border-box;
       cursor: pointer;
       transition: all 50ms ease-in;
     }

     :host(:active)  {
      border: inset 8px #44464D;
      border-left: inset 8px;
      border-top: inset 8px;
     }

    /*special keys*/
     :host(.key__Backspace), :host(.key__CapsLock), :host(.key__Enter), :host(.key__ShiftLeft), :host(.key__ShiftRight){
      grid-column: span 2;
      background: red;
     }

     :host(.key__Space) {
      grid-column: span 7;
     }

     :host(.key__Tab) {
     }

     .key {
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100%;
       color: #fff;
     }
   `;
  }

  connectedCallback () {
    this.keyCode = this.getAttribute('key-code').split(',');
    this.render();
  }

  render () {
    const label = specialKeys[this.keyCode[0]] ?? this.keyCode[0];
    this.shadowRoot.innerHTML = /* html */ `
    <style>${KeyBoardKey.styles}</style>
    <div class="key">
      <span>${label}</span>
    </div>`;
  }
}

customElements.define('keyboard-key', KeyBoardKey);
