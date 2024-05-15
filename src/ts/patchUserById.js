import { patchUser } from "./patchUser";

export function patchUserById(userId) {
    const authToken = localStorage.getItem("token");

    if (!authToken) {
        console.error(
            "No se encontró un token de autenticación. Inicie sesión para obtener acceso."
        );
        return;
    }

    let user;

    fetch(`http://localhost:3000/user/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
        },
    })
    .then((response) => {
        if (!response.ok) {
            return new Error(`Error: ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        user = data.data;
        const userId = user._id
        const html = `
        <div class="div-form-patch">
        <form class="user-form-patch" action="submit" method="POST">
        <div class="container-name-adress">
             <div class="firstname-surname"> 
                <div class="firstname-box">
                    <label>Nombre:</label>
                    <input type="firstname" id="firstname" value="${user.firstname}" required>
                </div>
                <div class="surname-box">
                    <label>Apellidos:</label>
                     <input type="surname" id="surname" value="${user.surname}" required>
                </div>
                </div>
             <div class="adress-city">
                <div class="adress-box">
                    <label>Direccion:</label>
                     <input type="adress" id="adress" value="${user.adress}" >
                </div>
                <div class="city">
                    <label>Ciudad:</label>
                     <input type="city" id="city" value="${user.city}" >
                </div>
                </div>
                </div>
                <div class="phone">
                    <label>Numero de telefono:</label>
                     <input type="phone" id="phone" value="${user.phone}" >
                </div>
               
                <div class="birthdate-box">
                    <label for="birthdate">Fecha de Nacimiento:</label>
                    <input type="date" id="birthdate" value="${user.birthdate}" required>
                </div>
                <div class="email-password">
                    <div class="email-box"><label >Email:</label>
                    <input type="email" id="email" name="email" value="${user.email}" required>
                </div>
                </div>
                </div>
        <input class="patch-submit" id="patch-user-bottom" type="button" value="editar usuario">
    </form> `
    const userContainer = document.getElementById("div-my-user")

    userContainer.innerHTML = html;
    const patchUserBottom = document.getElementById("patch-user-bottom")
  
    if (patchUserBottom) {
        patchUserBottom.addEventListener("click", () => {
        const body = document.querySelector("body");
        let confirmationElement = document.getElementById("confirmation");
        if (confirmationElement) {
          confirmationElement.remove();
        }
        confirmationElement = document.createElement("div");
        confirmationElement.id = "confirmation";
        confirmationElement.innerHTML = `
          <p>¿Estás seguro de actualizar los datos de este usuario?</p>
          <div class="buttons">
            <button id="cancel">Cancelar</button>
            <button id="confirm">Sí, quiero actualizar</button>
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
           patchUser(userId);
            if (confirmationElement) {
              confirmationElement.remove();
            }
          } catch (error) {
            console.error("Error al quitar permisos de administrador:", error);
          }
        });
      });
    }
    })

    .catch((error) => {
        console.error("Error al obtener el usuario:", error);
    });
}
