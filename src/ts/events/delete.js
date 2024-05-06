import { getAllUsers } from "../getAllUsers";

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

          if (response.ok) {
            const deletedAdvice = document.createElement("div");
            deletedAdvice.classList="deleted"
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
            }, 5000);
          } else {
            console.error(`Error al eliminar el usuario con el ID ${userId}`);
          }
        } catch (error) {
          console.error("error", error);
        }
      });
    });
  }
}
