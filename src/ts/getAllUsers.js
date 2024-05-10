import { getUserById } from "../ts/getUserById";
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

      const html = usersData.map((userData) => {
          let subscriptionClass = "";
          if (userData.subscription._id === "663e18c3862df917fabb5543") {
            subscriptionClass = "premium";
          }if (userData.subscription._id === "663e18c3862df917fabb5541") {
            subscriptionClass = "free";
          }  else if (userData.subscription._id === "663e18c3862df917fabb5542") {
            subscriptionClass = "basic";
          }

          return `
          <div class="user" id="user" data-user-id="${userData._id}">
            <div class="surname"><b>Apellidos:</b> ${userData.surname}</div>
            <div class="name"><b>Nombre:</b> ${userData.firstname}</div>
            <div id="subscription" class="${subscriptionClass}"><b>${userData.subscription.nombre}</b></div>
          </div>
        `;
        })
        .join("");

      const containerUsers = document.getElementById("aplication-box");

      if (!containerUsers) {
        console.error("El elemento containerUsers no fue encontrado");
        return;
      }

      containerUsers.innerHTML = html;

      const users = document.querySelectorAll('.user');

      users.forEach(user => {
        user.addEventListener('click', (event) => {
            event.stopPropagation();
            const userId = user.dataset.userId;
            if (userId) {
                getUserById(userId);
            }
        });
    });
    

    })
    .catch((error) => {
      console.error("Hubo un problema con la solicitud:", error);
    });
}
