class AlertMessage extends HTMLElement {
    constructor() {
      super();
      this.type = ""; //Variable 1 de Alert
      this.message = ""; //Variable 2 de alert

      this.attachShadow( { mode: "open" } );
    }

    static get observedAttributes() { 
      return ["type","message"]; 
    }
    
    connectedCallback(){
      this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if(oldValue !== newValue){
        this.render();
      }
    }

    render(){
      const type = this.getAttribute("type") || "info";
      const message = this.getAttribute("message") || "";

      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: flex;
          }
          .error{
            background-color: var(--color-error, red);
        }

        .success{
            background-color: var(--color-success, green);
        }
        </style>
        <div class="alert ${type}">
          <p>${message}</p>
        </div>
      `;
    }

}
  
customElements.define('alert-message', AlertMessage);  