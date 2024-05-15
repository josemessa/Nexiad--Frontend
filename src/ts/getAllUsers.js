import { getUserById } from "../ts/getUserById";
import { loginPage } from "./login";
export function getAllUsers() {
  const authToken = localStorage.getItem("token");

  if (!authToken) {
    console.error(
      "No se encontró un token de autenticación. Inicie sesión para obtener acceso."
    );
    return;
  }

  fetch("http://localhost:3000/user/getusers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data.data)) {
        console.error("Expected an array of user data, but received:", data);
        return;
      }

      const usersData = data.data;

      const html = usersData
        .map((userData) => {
          return `
          <div class="user" id="user" data-user-id="${userData._id}">
            <div class="surname"><b>Apellidos:</b> ${userData.surname}</div>
            <div class="name"><b>Nombre:</b> ${userData.firstname}</div>
            <div id="subscription" class="subscription-name-list"><b>${userData.subscription.nombre}</b></div>
          </div>
        `;
        })
        .join("");
      const appSpace = document.getElementById("app-space");
      appSpace.innerHTML = `<h2>Lista de usuarios</h2>`;
      const containerUsers = document.getElementById("aplication-box");

      if (!containerUsers) {
        console.error("El elemento containerUsers no fue encontrado");
        return;
      }

      containerUsers.innerHTML = html;

      const users = document.querySelectorAll(".user");

      users.forEach((user) => {
        user.addEventListener("click", (event) => {
          event.stopPropagation();
          const userId = user.dataset.userId;
          if (userId) {
            getUserById(userId);
          }
        });
      });
    })
    .catch((error) => {
      const body = document.querySelector("body");
      const confirmationElement = document.createElement("div");
      confirmationElement.id = "confirmation";
      confirmationElement.innerHTML = `
                    <p>Su sesion ha caducado. Redirigiendo al login</p>
                    <img id="logo-confirmation" src="/nexiatransp.png" />
                `;
      body.appendChild(confirmationElement);

      setTimeout(() => {
        if (confirmationElement) {
          confirmationElement.remove();
        }
        loginPage();
      }, 3000);
    });
}
