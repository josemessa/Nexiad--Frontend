import { registerUserFromLoginListener } from "./user-register-login"

export function subscribeEventlistener(){
    const subscribe= document.getElementById("subscribe")

    subscribe.addEventListener("click", (event)=>{
        const loginBox= document.getElementById("login-box")
        loginBox.innerHTML=""
        loginBox.innerHTML=` <div class="login-reg-form">
        <div class="reg-logo">
        <img class="logo-login" src="nexiatransp.png" alt="" />
        <p>Completa el formulario y comienza a disfrutar de nuestros servicios</p>
      </div>
        <form class="user-form-login" action="submit" method="POST">
          <div class="firstname-box">
            <label>Nombre:</label>
            <input type="firstname" id="firstname"  class="reg-input" required />
          </div>
          <div class="surname-box">
            <label>Apellidos:</label>
            <input type="surname" id="surname" class="reg-input" required />
          </div>
          <div class="adress-box">
            <label>Direccion:</label>
            <input type="adress" id="adress" class="reg-input"/>
          </div>
          <div class="city">
            <label>Ciudad:</label>
            <input type="city" id="city" class="reg-input"/>
          </div>

          <div class="phone">
            <label>Telefono:</label>
            <input type="phone" id="phone" class="reg-input"/>
          </div>

          <div class="birthdate-box">
            <label for="birthdate">Fecha de Nacimiento:</label>
            <input type="date" id="birthdate" requiredclass="reg-input" />
          </div>

          <div class="email-box">
            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              class="reg-input"
              placeholder="Escribe aqui tu email"
              required
            />
          </div>
          <div class="pass-box">
            <label for="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Escribe aqui tu contraseña"
              class="reg-input"
              required
            />
          </div>

          <input
            class="register-submit"
            id="register-submit"
            type="button"
            value="Crear nuevo usuario"
          />
        </form>
      </div>`
      registerUserFromLoginListener()
    })
}