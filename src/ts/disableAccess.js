export function disableAccess(userId) {
  console.log(userId);
  console.log(`final ${userId}`);
  const authToken = localStorage.getItem("token");

  if (!authToken) {
    console.error(
      "No se encontró un token de autenticación. Inicie sesión para obtener acceso."
    );
    return;
  }

  fetch(`http://localhost:3000/user/${userId}/disableaccess`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return new Error(`Error: ${response.statusText}`);
      }
    })
    .then((data) => {
      console.log("Rol actualizado correctamente:", data);
      // Actualizar solo la parte necesaria del HTML
      const userRoleElement = document.getElementById("user-rol");
      if (userRoleElement) {
        userRoleElement.innerHTML = `<b>rol:  </b>${data.data.role}`;
      }
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
        localStorage.clear();
        loginPage();
      }, 3000);
    });
}
