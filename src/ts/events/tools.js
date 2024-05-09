import { getAllUsers } from "../getAllUsers";
import { userRegisterByAdmin } from "../user-register";
import { getMyUser } from "../getMyUser";
import { loginPage } from "../login";

export function getAllUserslistener() {
  const getUsers = document.getElementById("get-all-users");

  if (getUsers) {
    getUsers.addEventListener("click", (event) => {
      getAllUsers();
    });
  }
}

export function getMyUserlistener() {
  const myUser = document.getElementById("my-user");
  if (myUser) {
    myUser.addEventListener("click", (event) => {
      getMyUser();
    });
  }
}

export function addUserByAdminListener() {
  const getUsers = document.getElementById("add-user-by-admin");

  if (getUsers) {
    getUsers.addEventListener("click", (event) => {
      userRegisterByAdmin();
    });
  }
}
export function closeSessionListener() {
  const close = document.getElementById("close-session");
  close.addEventListener("click", () => {
    const body = document.querySelector("body");
    let confirmationElement = document.getElementById("confirmation");
    if (confirmationElement) {
      confirmationElement.remove();
    }
    confirmationElement = document.createElement("div");
    confirmationElement.id = "confirmation";
    confirmationElement.innerHTML = `
                
                    <p>¿Está seguro que desea cerrar sesion?</p>
                    <div class="buttons">
                        <button id="cancel">Cancelar</button>
                        <button id="confirm">Sí, estoy seguro</button>
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
      confirmationElement.remove();
      localStorage.clear();
      loginPage();
    });
  });
}
