import { getAllUsers } from "../getAllUsers"; 
import {  userRegisterByAdmin } from "../user-register";
import { getMyUser } from "../getMyUser";
import { disableAdminAccess } from "../disableAdminAccess";

export function getAllUserslistener(){
    const getUsers = document.getElementById("get-all-users");

    if(getUsers){
        getUsers.addEventListener("click", (event) => {
            getAllUsers()
        } 
        
    );
    }
}

export function getMyUserlistener(){
    const myUser = document.getElementById("my-user");
    if(myUser){
        myUser.addEventListener("click", (event) => {
            getMyUser()
        } 
        
    );
    }
}


export function addUserByAdminListener(){
    const getUsers = document.getElementById("add-user-by-admin");

    if(getUsers){
        getUsers.addEventListener("click", (event) => {
            userRegisterByAdmin()
        } 
        
    );
    }
}

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