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

      const color = getRandomColor(); // Función para generar un color aleatorio
      const initial = myUser.firstname.charAt(0); // Obtener la primera letra del nombre

      const html = `<div class="div-my-user">
        <div class="container-name">
        <div class="profile-image" style="background-color: ${color};">
          ${initial}
        </div>
          <div class="firstname">${myUser.firstname}</div>
          <div class="my-surname">${myUser.surname}</div>
        </div>
        <div class="container-email">
          <div class="email">${myUser.email}</div>
          <div class="user-id">${myUser._id}</div>
        </div>
        <div class"container-adress">
          <div class="adress"><p>Calle de la Luna, 15<br>28001 Madrid, Spain</p></div>
          <div class="birthdate">${formattedBirthdate}</div>
        </div>
        <div id="my-subscription" class="${myUser.subscription}">${myUser.subscription}</div>
      </div>`;

      console.log(html);

      const containerMyUser = document.getElementById("container-my-user");

      containerMyUser.innerHTML = html;
    });
}

function getRandomColor() {
  const colors = [
    "#3498db",
    "#2ecc71", 
    "#f1c40f", 
    "#e67e22", 
    "#e74c3c", 
    "#9b59b6", 
    "#1abc9c", 
    "#16a085", 
    "#f39c12",
    "#c0392b", 
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

