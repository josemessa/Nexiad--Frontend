import { validateEmail, validatePassword } from "../../utils/utils";
import { getAllUsers } from "../getAllUsers";

export function registerSubmitListener() {
  const submit = document.getElementById("register-submit");
  if (submit) {
    submit.addEventListener("click", async (event) => {
      event.preventDefault();
      const emailInput = document.getElementById("email");
      const emailError = document.getElementById("email-error");
      const emailCheck = emailInput.value.trim();

      if (!validateEmail(emailCheck)) {
        emailError.style.display = "block";
        return;
      }
      const passwordValidation = document
        .getElementById("password")
        .value.trim();
      const passwordValidation2 = document
        .getElementById("password-confirmation")
        .value.trim();
      const passwordError = document.getElementById("password-error");
      if (
        !validatePassword(passwordValidation) ||
        !validatePassword(passwordValidation2)
      ) {
        passwordError.style.display = "block";
        return;
      } else {
        passwordError.style.display = "none";
      }
      const firstnameValue = document.getElementById("firstname").value;
      const surnameValue = document.getElementById("surname").value;
      const adressValue = document.getElementById("adress").value;
      const cityValue = document.getElementById("city").value;
      const phoneValue = document.getElementById("phone").value;
      const emailValue = document.getElementById("email").value;
      const birthdateValue = document.getElementById("birthdate").value;

      const firstPassword = document.getElementById("password").value;
      const passwordConfirmation = document.getElementById(
        "password-confirmation"
      ).value;
      let passwordValue = "";
      if (firstPassword === passwordConfirmation) {
        passwordValue = document.getElementById("password").value;
      } else {
        const body = document.querySelector("body");
        const confirmationElement = document.createElement("div");
        confirmationElement.id = "confirmation";
        confirmationElement.innerHTML = `
                <p>Las contraseñas no coinciden, intentalo de nuevo</p>
                <img id="logo-confirmation" src="/nexiatransp.png" />
            `;
        body.appendChild(confirmationElement);

        setTimeout(() => {
          if (confirmationElement) {
            confirmationElement.remove();
          }
        }, 3000);
        return;
      }

      const roleValue = document.getElementById("rol").value;

      if (
        firstnameValue &&
        surnameValue &&
        emailValue &&
        phoneValue &&
        firstPassword &&
        passwordConfirmation
      ) {
        try {
          const token = localStorage.getItem("token");
          const response = await fetch("http://localhost:3000/user/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": token,
            },
            body: JSON.stringify({
              firstname: firstnameValue,
              surname: surnameValue,
              adress: adressValue,
              city: cityValue,
              phone: phoneValue,
              email: emailValue,
              password: passwordValue,
              birthdate: birthdateValue,
              role: roleValue,
            }),
          });

          if (response.ok) {
            const body = document.querySelector("body");
            const confirmationElement = document.createElement("div");
            confirmationElement.id = "confirmation";
            confirmationElement.innerHTML = `
                            <p>Usuario creado correctamente</p>
                            <img id="logo-confirmation" src="/nexiatransp.png" />
                        `;
            body.appendChild(confirmationElement);

            setTimeout(() => {
              if (confirmationElement) {
                confirmationElement.remove();
              }
              getAllUsers();
            }, 5000);
          } else {
            const errorData = await response.json();
            if (errorData.message.includes("El email ya está autorizado")) {
              const body = document.querySelector("body");
              const confirmationElement = document.createElement("div");
              confirmationElement.id = "confirmation";
              confirmationElement.innerHTML = `
                            <p>El email ya se encuentra registrado en nuestra base de datos<br> Por favor intentelo con otro Email</p>
                            <img id="logo-confirmation" src="/nexiatransp.png" />
                        `;
              body.appendChild(confirmationElement);

              setTimeout(() => {
                if (confirmationElement) {
                  confirmationElement.remove();
                }
              }, 3000);
            }
          }
        } catch (error) {
          alert(`Error: ${error.message}`);
        }
      } else {
        alert("Por favor, completa todos los datos del formulario.");
      }
    });
  }
}
