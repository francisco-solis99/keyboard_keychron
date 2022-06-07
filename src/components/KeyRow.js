import './Key.js';
class KeyRow extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles () {
    return /* css */ `
     :host {
      display: block;
      background-color: red;
      height: 50px;
     }
   `;
  }

  connectedCallback () {
    this.render();
  }

  render () {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${KeyRow.styles}</style>
    <div>
    </div>`;
  }
}

customElements.define('key-row', KeyRow);
