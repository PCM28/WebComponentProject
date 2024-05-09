class AlertMessage extends HTMLElement {
    constructor() {
      super();
      this.type = ""; //Variable 1 de Alert
      this.message = ""; //Variable 2 de alert

      this.attachShadow( { mode: "open" } );
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: flex;
          }
        </style>
        <div class="alert">
          <h1>Alert</h1>
          <p>Message</p>
        </div>
      `;
    }

    //Código restante

  }
  
  customElements.define('alert-message', AlertMessage);
  