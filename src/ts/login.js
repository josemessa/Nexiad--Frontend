import { loginButtonListener } from "./events/login"

export function loginPage(){
  
    const pageElement= document.getElementById("app")
    pageElement.innerHTML=`<div class="main-section">
    <div class="login-box">
      <img class="logo-login" src="nexiatransp.png" alt="">
      
      <form class="login-form" action="submit" method="POST">
        <div class="email-box"><label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Escribe aqui tu email" required>
      </div>
       <div class="pass-box"><label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" placeholder="Escribe aqui tu contraseña" required>
      </div> 
        <input class="login-button" id="login-button" type="button" value="Login">
        <div class="suscribe"><p>Aun no disfrutas de nuestras ventajas?</p><a href="#" class="subscribe-button">Suscribete aquí</a></div>
    </form>

    </div>
    </div>`   
    loginButtonListener() 
}
