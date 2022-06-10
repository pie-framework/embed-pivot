import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('embed-pivot')
export class EmbedPivot extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  // no shadow dom
  createRenderRoot() {
    return this;
  }

  render() {
    const url = this.getAttribute('data-pivot-url');
    const w = this.getAttribute('data-width') || 600;
    const h = this.getAttribute('data-height') || 600;
    const minH = this.getAttribute('data-min-height');
    const maxH = this.getAttribute('data-max-height');
    const minW = this.getAttribute('data-min-width');
    const maxW = this.getAttribute('data-max-width');

    const style = `
      ${minH ? `min-height: ${minH};` : ''}
      ${maxH ? `max-height: ${maxH};` : ''}
      ${minW ? `min-width: ${minW};` : ''}
      ${maxW ? `max-width: ${maxW};` : ''}
    `;

    if (url) {
      return html`<iframe
        frameborder="0"
        src="${url}"
        width="${w}"
        height="${h}"
        style="${style}"
      ></iframe>`;
    }
    return html`<div>empty</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'embed-pivot': EmbedPivot;
  }
}

export const definition = (): any => {
  return class extends EmbedPivot {
  };
};
