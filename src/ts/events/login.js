import { adminPage } from "../adminPage";
import { userPage } from "../userPage";

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
