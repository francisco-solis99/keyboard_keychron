class Key extends HTMLElement {
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
    <style>${Key.styles}</style>
   <div>
   </div>`;
  }
}

customElements.define('keyboard-key', Key);
