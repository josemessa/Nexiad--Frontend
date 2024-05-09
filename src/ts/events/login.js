import { adminPage } from "../adminPage";
import { loginPage } from "../login";
import { userPage } from "../userPage";
import { registerUserFromLoginListener } from "./user-register-login"

export function loginButtonListener() {
  const loginButton = document.getElementById("login-button");
  if (loginButton) {
    loginButton.addEventListener("click", async (event) => {
      console.log("click");

      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      if (emailInput && passwordInput) {
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;
        if (emailValue && passwordValue) {
          console.log(emailValue);
          console.log(passwordValue);
          try {
            const response = await fetch("http://localhost:3000/user/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: emailValue,
                password: passwordValue,
              }),
            });
            const data = await response.json();

            const welcomeName = data.data.firstname;
            const welcomeSurname = data.data.surname;
            const name= localStorage.setItem("name", data.data.firstname);
            const surname= localStorage.setItem("surname", data.data.surname);
            if (data.token) {
              const token = localStorage.setItem("token", data.token);
              const tokenRefresh = localStorage.setItem(
                "tokenRefresh",
                data.token_refresh
              );
            } else {
              // Manejo de errores de respuesta
              console.log("Error en la respuesta:", data.message);
            }
            if (data.data.role === "admin") {
              console.log("admin access");
              adminPage(welcomeName, welcomeSurname);
            } else if (data.data.role === "user") {
              console.log("user access");
              userPage(welcomeName, welcomeSurname);
            } else {
              alert("Tu cuenta esta desabilitada, contacta con los administradores");
            }
          } catch (error) {
            console.error("error", error);
          }
        } else {
          alert("Cumplimenta todos los campos");
        }
      } else {
      }
    });
  }
}
 function backToLogin(){
  const back=document.getElementById("back-to-login")
 back.addEventListener("click", ()=>{
    console.log("click")
    loginPage()
  })
}

export function subscribeEventlistener(){
    const subscribe= document.getElementById("subscribe")

    subscribe.addEventListener("click", (event)=>{
        const loginBox= document.getElementById("login-box")
        loginBox.innerHTML=""
        loginBox.innerHTML=` <div class="login-reg-form">
        <div class="reg-logo">
        <img class="logo-login" src="nexiatransp.png" alt="" />
        <p>Completa el formulario y comienza a disfrutar de nuestros servicios</p>
        <a class="back-to-login" id="back-to-login" ><svg clip-rule="evenodd" height="40" width="" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z"/></svg><p>Volver al Login</p></a>
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
      backToLogin()
    })
}
