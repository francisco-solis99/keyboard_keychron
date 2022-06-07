import './KeyBoardKey.js';

class KeyRow extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles () {
    return /* css */ `
     :host {
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
