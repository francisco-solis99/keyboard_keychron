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
      --key-width: 50px;
      --key-height: 50px;
       width: var(--key-width);
       height: var(--key-height);
       box-sizing: border-box;
       border: inset 5px #44464D;
       border-left: inset 5px;
       border-top: inset 5px;
       cursor: pointer;
       transition: all 50ms ease-in;
       background-color: var(--color-key-medium);
     }

     :host(:active)  {
      border: inset 8px #44464D;
      border-left: inset 8px;
      border-top: inset 8px;
      transform: scale(0.9);
     }

    /* width special keys*/
     :host(.key__Backspace), :host(.key__ShiftLeft), :host(.key__ShiftRight){
       width: calc(var(--key-width) * 2);
       background: red;
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
