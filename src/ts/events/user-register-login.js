import { loginPage } from "../login";

export function registerUserFromLoginListener() {
  const submit = document.getElementById("register-submit");
  if (submit) {
    submit.addEventListener("click", async (event) => {
      event.preventDefault();

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
      }
      if (
        firstnameValue &&
        surnameValue &&
        emailValue &&
        phoneValue &&
        passwordValue
      ) {
        try {
          const response = await fetch(
            "http://localhost:3000/user/signupuser",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
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
              }),
            }
          );

          if (response.ok) {
            const body = document.querySelector("body");
            const confirmationElement = document.createElement("div");
            confirmationElement.id = "confirmation";
            confirmationElement.innerHTML = `
                            <p>Usuario creado correctamente, por favor inicie sesión</p>
                            <img id="logo-confirmation" src="/nexiatransp.png" />
                        `;
            body.appendChild(confirmationElement);

            setTimeout(() => {
              if (confirmationElement) {
                confirmationElement.remove();
              }
              loginPage();
            }, 5000);
          } else {
            const errorData = await response.json();
            if (
              errorData.message.includes("correo electrónico ya está en uso")
            ) {
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
