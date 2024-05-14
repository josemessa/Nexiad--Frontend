import { submitAuthListener } from "./events/authorization";

export function adminAuthListener() {
  const adminAuth = document.getElementById("admin-auth");
  const emailInput = document.getElementById("email");
  const authSubmitButton = document.getElementById("auth-submit");

  adminAuth.addEventListener("click", () => {
    console.log("click");
    const application = document.getElementById("aplication-box");
    application.innerHTML = `
      <h2>Autorizar nuevo administrador</h2>
      <div class="auth-app">
        <div class="auth-input">
          <div>
            <label>Email para autorizar:</label><br>
            <input type="email" id="email" name="email" placeholder="Email" required>
            <span id="email-error" style="color: red; display: none;">Por favor, ingrese un correo electrónico válido.</span>
          </div>            
          <input class="register-submit" id="auth-submit" type="button" value="Enviar autorización">
        </div>
        <p>Al autorizar a un usuario para registrarse como administrador, éste recibirá las instrucciones de cómo realizarlo mediante el correo electrónico autorizado.</p>
      </div>`;

    submitAuthListener();
  });
}
