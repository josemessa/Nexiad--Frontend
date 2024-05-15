import { getAllUsers } from "../getAllUsers";
import { loginPage } from "../login";

export async function deleteListener(userId) {
  const authToken = localStorage.getItem("token");
  const deleteSvg = document.getElementById("delete-svg");
  if (deleteSvg) {
    deleteSvg.addEventListener("click", () => {
      const body = document.querySelector("body");
      let confirmationElement = document.getElementById("confirmation");
      if (confirmationElement) {
        confirmationElement.remove();
      }
      confirmationElement = document.createElement("div");
      confirmationElement.id = "confirmation";
      confirmationElement.innerHTML = `
        <p>El usuario con el ID ${userId} será eliminado de la base de datos de NEXIAD.</p>
        <p>¿Desea continuar?</p>
        <div class="buttons">
            <button id="cancel">Cancelar</button>
            <button id="confirm">Sí, eliminar usuario</button>
        </div>
        <img id="logo-confirmation" src="/nexiatransp.png"></img>
      `;
      body.appendChild(confirmationElement);
      const cancelButton = document.getElementById("cancel");
      const confirmButton = document.getElementById("confirm");
      cancelButton.addEventListener("click", () => {
        if (confirmationElement) {
          confirmationElement.remove();
        }
      });
      confirmButton.addEventListener("click", async () => {
        try {
          const response = await fetch(`http://localhost:3000/user/${userId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken,
            },
          });
          const errorData = await response.json();
          if (response.ok) {
            const deletedAdvice = document.createElement("div");
            deletedAdvice.classList = "deleted";
            deletedAdvice.textContent = `El usuario con el ID ${userId} ha sido eliminado. Redirigiendo a Listado de usuarios`;
            body.appendChild(deletedAdvice);
            if (confirmationElement) {
              confirmationElement.remove();
            }
            setTimeout(() => {
              if (deletedAdvice) {
                deletedAdvice.remove();
              }
              getAllUsers();
            }, 4000);
          } else {
            console.error(`Error al eliminar el usuario con el ID ${userId}`);
          }
        } catch (error) {
          if (confirmationElement) {
            confirmationElement.remove();
          }
          const body = document.querySelector("body");
          const sessionExpiredElement = document.createElement("div");
          sessionExpiredElement.id = "confirmation";
          sessionExpiredElement.innerHTML = `
            <p>Su sesion ha caducado. Redirigiendo al login</p>
            <img id="logo-confirmation" src="/nexiatransp.png" />
          `;
          body.appendChild(sessionExpiredElement);

          setTimeout(() => {
            if (sessionExpiredElement) {
              sessionExpiredElement.remove();
            }
            localStorage.clear();
            loginPage();
          }, 3000);
          console.log(error);
        }
      });
    });
  }
}
