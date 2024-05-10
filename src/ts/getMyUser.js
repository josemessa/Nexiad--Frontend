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
      };

      const colorMap = {
        "A": "#3498db",
        "B": "#2ecc71",
        "C": "#f1c40f",
        "D": "#e67e22",
        "E": "#e74c3c",
        "F": "#9b59b6",
        "G": "#1abc9c",
        "H": "#16a085",
        "I": "#f39c12",
        "J": "#c0392b",
        "K": "#8e44ad",
        "L": "#34495e",
        "M": "#27ae60",
        "N": "#2980b9",
        "O": "#d35400",
        "P": "#2c3e50",
        "Q": "#f7dc6f",
        "R": "#7f8c8d",
        "S": "#16a085",
        "T": "#e74c3c",
        "U": "#95a5a6",
        "V": "#1abc9c",
        "W": "#f1c40f",
        "X": "#9b59b6",
        "Y": "#8e44ad",
        "Z": "#3498db"
      };
      
      const initial = myUser.firstname.charAt(0).toUpperCase();
      const color = colorMap[initial] || getRandomColor(); 

      const formattedBirthdate = birthdate.toLocaleString("en-US", options);
      console.log(formattedBirthdate);

      const html = `<div class="div-my-user">
        <div class="container-name">
        <div class="profile-image" style="background-color: ${color};">
          ${initial}
        </div>
          <div class="firstname">${myUser.firstname}</div>
          <div class="my-surname">${myUser.surname}</div>
          <div class="subscription-name">${myUser.subscription.nombre}</div>
        </div>
        <div class="container-email">
          <div class="email"><b>email:  </b>${myUser.email}</div>
          <div class="numero"><b>numero:  </b>${myUser.phone}</div>
        </div>
        <div class="user-id"><b>id:  </b>${myUser._id}</div>
        <div class="container-adress">
          <div class="adress"><b>direccion:</b>  ${myUser.adress}</div>
          <div class="birthdate"><b>fecha de nacimiento:</b>  ${formattedBirthdate}</div>
        </div>
       
      </div>`;

      console.log(html);

      const containerMyUser = document.getElementById("aplication-box");

      containerMyUser.innerHTML = html;
    });
}


