export function getMyUser() {
  const authToken = localStorage.getItem("token");

  if (!authToken) {
    console.error(
      "No se encontró un token de autenticación. Inicie sesión para obtener acceso."
    );
    return;
  }

  fetch("http://localhost:3000/user/getmyuser", {
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
      const myUser = data.data;
      console.log("Datos del usuario:", myUser);

      const birthdate = new Date(myUser.birthdate);
      const options = {
        timeZone: "Europe/Madrid",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };

      const formattedBirthdate = birthdate.toLocaleString("en-US", options);
      console.log(formattedBirthdate);

      const html = `<div class="div-my-user">
        <div class="firstname">${myUser.firstname}</div>
        <div class="my-surname">${myUser.surname}</div>
        <div class="email">${myUser.email}</div>
        <div class="user-id">${myUser._id}</div>
        <div class="birthdate">${formattedBirthdate}</div>
        <div id="my-subscription">${myUser.subscription}</div>
      </div>`;

      console.log(html);

      const containerMyUser = document.getElementById("container-my-user");

      containerMyUser.innerHTML = html;
    });
}
