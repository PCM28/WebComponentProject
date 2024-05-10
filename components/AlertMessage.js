class AlertMessage extends HTMLElement {
    constructor() {
      super();
      this.type = ""; //Variable 1 de Alert
      this.message = "Message"; //Variable 2 de alert

      this.attachShadow( { mode: "open" } );
    }

    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: flex;
          }
        </style>
        <div class="alert" type="${this.type}">
          <h1>Alert</h1>
          <p>${this.message}</p>
        </div>
      `;
    }

    //Código restante, lógica

  }
  
  customElements.define('alert-message', AlertMessage);  