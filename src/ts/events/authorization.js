import { adminPage } from "../adminPage";

const token = localStorage.getItem("token");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
export function submitAuthListener() {
  const adminAuth = document.getElementById("auth-submit");
  adminAuth.addEventListener("click", async () => {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailValue = emailInput.value.trim();

    if (!validateEmail(emailValue)) {
      emailError.style.display = "block";
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/authorization/inviteadmin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
          body: JSON.stringify({
            email: emailValue,
          }),
        }
      );

      if (response.ok) {
        const confirmationElement = document.createElement("div");
        confirmationElement.id = "confirmation";
        confirmationElement.innerHTML = `
              <p>Autorización realizada con éxito</p>
              <img id="logo-confirmation" src="/nexiatransp.png" />
            `;
        document.body.appendChild(confirmationElement);

        setTimeout(() => {
          if (confirmationElement) {
            confirmationElement.remove();
          }

          adminPage();
        }, 5000);
      } else {
        if (response.status === 400) {
          const confirmationElement = document.createElement("div");
          confirmationElement.id = "confirmation";
          confirmationElement.innerHTML = `
              <p>Error al enviar la solicitud de autorización: Token inválido</p>
            `;
          document.body.appendChild(confirmationElement);

          setTimeout(() => {
            if (confirmationElement) {
              confirmationElement.remove();
            }
          }, 5000);
        } else {
          const errorData = await response.json();
          if (errorData.message.includes("El email ya está autorizado")) {
            const confirmationElement = document.createElement("div");
            confirmationElement.id = "confirmation";
            confirmationElement.innerHTML = `
                <p>El email que ha ingresado ya está autorizado</p>
                <img id="logo-confirmation" src="/nexiatransp.png" />
              `;
            document.body.appendChild(confirmationElement);

            setTimeout(() => {
              if (confirmationElement) {
                confirmationElement.remove();
              }
            }, 5000);
          }
        }
      }
    } catch (error) {
      console.error("Error al enviar la solicitud de autorización:", error);
    }
  });
}
