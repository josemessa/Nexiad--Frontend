import { adminPage } from "../adminPage";
import { userPage } from "../userPage";

export function loginButtonListener() {
  const loginButton = document.getElementById("login-button");
  if (loginButton) {
    loginButton.addEventListener("click", async function (event) {
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
            console.log(data)
            
            if (data.token) {
              const token=localStorage.setItem("token", data.token);
              const tokenRefresh =localStorage.setItem("tokenRefresh", data.token);
              console.log("token guardado en local-storage")
              console.log("tokenRefresh guardado en local-storage") 

            } else {
              // Manejo de errores de respuesta
              console.log("Error en la respuesta:", data.message);
            }
            if(data.data.role==="admin"){
              console.log("admin access")
              adminPage()
            }else if(data.data.role==="user"){
              console.log("user access")
              userPage()
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
