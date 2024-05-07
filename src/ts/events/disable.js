import { disableAdminAccess } from "../disableAdminAccess"
import { disableAccess } from "../disableAccess"

export function disableAdminAccessListener(idUser) {
    const disableAdminBottom = document.getElementById("disable-admin-bottom");
    const userId = idUser;
  
    if (disableAdminBottom) {
      disableAdminBottom.addEventListener("click", () => {
        const body = document.querySelector("body");
        let confirmationElement = document.getElementById("confirmation");
        if (confirmationElement) {
          confirmationElement.remove();
        }
        confirmationElement = document.createElement("div");
        confirmationElement.id = "confirmation";
        confirmationElement.innerHTML = `
          <p>¿Estás seguro de quitar los permisos de administrador a este usuario?</p>
          <div class="buttons">
            <button id="cancel">Cancelar</button>
            <button id="confirm">Sí, quitar permisos</button>
          </div>
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
            disableAdminAccess(userId);
            if (confirmationElement) {
              confirmationElement.remove();
            }
          } catch (error) {
            console.error("Error al quitar permisos de administrador:", error);
          }
        });
      });
    }
  }




  export function disableAccessListener(idUser) {
    const disableAdminBottom = document.getElementById("disable-access-bottom");
    const userId = idUser;
  
    if (disableAdminBottom) {
      disableAdminBottom.addEventListener("click", () => {
        const body = document.querySelector("body");
        let confirmationElement = document.getElementById("confirmation");
        if (confirmationElement) {
          confirmationElement.remove();
        }
        confirmationElement = document.createElement("div");
        confirmationElement.id = "confirmation";
        confirmationElement.innerHTML = `
          <p>¿Estás seguro de quitar los permisos de acceso a este usuario?</p>
          <div class="buttons">
            <button id="cancel">Cancelar</button>
            <button id="confirm">Sí, quitar permisos</button>
          </div>
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
            disableAccess(userId);
            if (confirmationElement) {
              confirmationElement.remove();
            }
          } catch (error) {
            console.error("Error al quitar permisos de administrador:", error);
          }
        });
      });
    }
  }