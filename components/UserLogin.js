class UserLogin extends HTMLElement {
    constructor() {
      super();
      this.attachShadow( { mode: "open" } );
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: flex;
            flex-direction: column;
          }
        </style>
        <form id="loginForm">
          <h1>User Login</h1>
          <input type="text" id="username" placeholder="Username" required> <br /> <br />
          <input type="password" id="password" placeholder="Password" required> <br /> <br />
          <button id="btn" type="submit">Iniciar Sesión</button>
        </form>
      `;
      this.loginForm = this.shadowRoot.getElementById("btn");
      this.loginForm.addEventListener("click", this.submitForm.bind(this));
    }
  
    disconnectedCallback() {
      this.loginForm.removeEventListener("submit", this.submitForm.bind(this));
    }
  
    submitForm(event) {
      event.preventDefault();

      const username = this.shadowRoot.getElementById("username").value;
      const password = this.shadowRoot.getElementById("password").value;
      
      //Login Logic
      const loginSuccess = username === 'admin' && password === '123';
      const loginResult = loginSuccess ? 'success' : 'error';
      
      //Custom Event
      this.dispatchEvent(new CustomEvent('login-result', { detail: loginResult }));
    }

  }
  
customElements.define('user-login', UserLogin);