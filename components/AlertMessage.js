class AlertMessage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
        }
        .success { background-color: #5cb85c; color: #fff; }
        .warning { background-color: #f0ad4e; color: #fff; }
        .error { background-color: #d9534f; color: #fff; }
        .info { background-color: #5bc0de; color: #fff; }
      </style>
      <div class="alert"></div>
    `;
  }

  static get observedAttributes() {
    return ['type', 'message'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'type') {
      this.shadowRoot.querySelector('.alert').className = newValue;
    } else if (name === 'message') {
      if (!newValue) {
        this.style.display = 'none';
      } else {
        this.style.display = 'block';
        this.shadowRoot.querySelector('.alert').textContent = newValue;
      }
    }
  }
}

customElements.define('alert-message', AlertMessage);
