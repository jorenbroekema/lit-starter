import { html, LitElement } from "lit-element";

class CustomElement extends LitElement {
  render() {
    return html`<h1>Hello, World!</h1>`;
  }
}
customElements.define("custom-element", CustomElement);
