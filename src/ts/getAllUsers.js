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
          let subscriptionClass = "";
          if (userData.subscription === "premium") {
            subscriptionClass = "premium";
          } else if (userData.subscription === "basic") {
            subscriptionClass = "basic";
          }

          return `
          <div class="user">
            <div class="surname"><b>Apellidos:</b> ${userData.surname}</div>
            <div class="name"><b>Nombre:</b> ${userData.firstname}</div>
            <div id="subscription" class="${subscriptionClass}"><b>${userData.subscription}</b></div>
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
    })
    .catch((error) => {
      console.error("Hubo un problema con la solicitud:", error);
    });
}
