import { loginButtonListener } from "./events/login";
import { subscribeEventlistener } from "./events/login";

export function loginPage() {
  const pageElement = document.getElementById("app");
  pageElement.innerHTML = `<div class="main-section">
    <div class="login-box" id="login-box">
      <img class="logo-login" src="nexiatransp.png" alt="">
      
      <form class="login-form" action="submit" method="POST">
        <div class="email-box"><label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Escribe aqui tu email" required>
        <span id="email-error" style="color: red; display: none;">Por favor, ingrese un correo electrónico válido.</span>
      </div>
       <div class="pass-box"><label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" placeholder="Escribe aqui tu contraseña" required>
        <span id="password-error" style="color: red; display: none;">La contraseña debe tener al menos 8 caracteres y un número</span>
      </div> 
        <input class="login-button" id="login-button" type="button" value="Login">
        <div class="suscribe"><p>¿Aun no disfrutas de nuestras ventajas?</p><a href="#" class="subscribe-button" id="subscribe">Suscribete aquí</a></div>
    </form>

    </div>
    </div>`;
  loginButtonListener();
  subscribeEventlistener();
}
