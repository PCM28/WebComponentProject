class LoginPage extends HTMLElement {
    constructor(){
        super();
        this.attachShadow( { mode: "open" } );
        this.shadowRoot.innerHTML = /*html */`
            <user-login></user-login>
            <alert-message></alert-message>
        `;
    }

    handleLogin(event) { //Método creado
        const alertMessage = this.shadowRoot.querySelector("alert-message");//Preguntar si usar document o this
        alertMessage.setAttribute("type", event.detail === "success" ? "success" : "error");
        alertMessage.setAttribute("message", event.detail === "success" ? "!Login Successful!" : "Login Error!!");
        console.log("working...");
    }

    connectedCallback() {
        this.addEventListener("login-result", this.handleLogin.bind(this));
    }

    disconnectedCallback() {
        this.removeEventListener("login-result", this.handleLogin.bind(this));
    }

}

customElements.define("login-page", LoginPage);