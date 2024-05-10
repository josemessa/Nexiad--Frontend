import { deleteListener } from "./events/delete";
import { disableAdminAccessListener, disableAccessListener } from "./events/disable"
import { patchUserByIdListener } from "./events/patch"

export function getUserById(userId) {
  const authToken = localStorage.getItem("token");

  if (!authToken) {
    console.error(
      "No se encontró un token de autenticación. Inicie sesión para obtener acceso."
    );
    return;
  }

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
      const userData = data.data;
      console.log("Usuario obtenido por ID:", userData);

      // Generar el HTML con la información del usuario obtenida
      const birthdate = new Date(userData.birthdate);
      const options = {
        timeZone: "Europe/Madrid",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const colorMap = {
        A: "#3498db",
        B: "#2ecc71",
        C: "#f1c40f",
        D: "#e67e22",
        E: "#e74c3c",
        F: "#9b59b6",
        G: "#1abc9c",
        H: "#16a085",
        I: "#f39c12",
        J: "#c0392b",
        K: "#8e44ad",
        L: "#34495e",
        M: "#27ae60",
        N: "#2980b9",
        O: "#d35400",
        P: "#2c3e50",
        Q: "#f7dc6f",
        R: "#7f8c8d",
        S: "#16a085",
        T: "#e74c3c",
        U: "#95a5a6",
        V: "#1abc9c",
        W: "#f1c40f",
        X: "#9b59b6",
        Y: "#8e44ad",
        Z: "#3498db",
      };

      const initial = userData.firstname.charAt(0).toUpperCase();
      const color = colorMap[initial] || getRandomColor();

      const formattedBirthdate = birthdate.toLocaleString("en-US", options);

      const html = `<div class="user-edit" id="user-edit">
            <div class="div-my-user" id="div-my-user">
                <div class="container-name">
                    <div class="profile-image" style="background-color: ${color};">
                        ${initial}
                    </div>
                    <div class="firstname">${userData.firstname}</div>
                    <div class="my-surname">${userData.surname}</div>
                    <div class="subscription-name">${userData.subscription.nombre}</div>
                </div>
                <div class="container-email">
                    <div class="email"><b>email:  </b>${userData.email}</div>
                    <div class="numero"><b>numero:  </b>${userData.phone}</div>
                </div>
                <div class="container-id-rol">
                <div class="user-id" id="user-id"><b>id:  </b>${userData._id}</div>
                <div class="user-rol" id="user-rol"><b>rol:  </b>${userData.role}</div>
                </div>
                <div class="container-adress">
                    <div class="adress"><b>direccion:</b>  ${userData.adress}</div>
                    <div class="birthdate"><b>fecha de nacimiento:</b>  ${formattedBirthdate}</div>
                </div>
            </div>
            <div class="edit-tools">
            <svg id="delete-svg" clip-rule="evenodd" width="50px" heigth="50px" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/></svg>
            <svg clip-rule="evenodd" fill-rule="evenodd" id="edit-admin-bottom" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.75c0-.414.336-.75.75-.75s.75.336.75.75v9.25c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm-2.011 6.526c-1.045 3.003-1.238 3.45-1.238 3.84 0 .441.385.626.627.626.272 0 1.108-.301 3.829-1.249zm.888-.889 3.22 3.22 8.408-8.4c.163-.163.245-.377.245-.592 0-.213-.082-.427-.245-.591-.58-.578-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245z" fill-rule="nonzero"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="disable-admin-bottom" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10 0-2.397.85-4.6 2.262-6.324l11.197 11.209.004-.008 2.861 2.861c-1.724 1.412-3.927 2.262-6.324 2.262zm7.738-3.676l-3.312-3.313c.61-1.215 1.393-2.768 1.478-2.97.066-.144.096-.278.096-.401 0-.81-1.276-1.127-1.697-.324-.007.01-.757 1.388-.872 1.604-.124.228-.494.18-.494-.118v-5.326c0-.839-1.348-.814-1.348 0v4.696l-.453-.451-.002-5.065c0-.44-.355-.656-.714-.656-.363 0-.729.222-.729.656v3.62l-.437-.437v-2.429c0-.861-1.476-.885-1.476 0v.954l-4.102-4.102c1.724-1.412 3.927-2.262 6.324-2.262 5.514 0 10 4.486 10 10 0 2.397-.85 4.6-2.262 6.324zm-11.736-7.483l6.768 6.769c-.35.236-.8.39-1.429.39h-2.935c-1.575 0-2.406-.85-2.406-2.337l.002-4.822z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="disable-access-bottom" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 50 50" version="1.1">
<g id="surface1">
<path style=" stroke:none;fill-rule:evenodd;fill-opacity:1;" d="M 10.023438 8.332031 L 37.492188 41.070312 L 34.324219 43.75 L 23.8125 31.25 L 18.75 31.25 L 15.613281 28.117188 L 12.5 31.25 L 9.417969 28.117188 L 6.25 31.25 L 0 24.933594 L 5.269531 18.75 L 13.324219 18.75 L 6.832031 11.011719 Z M 22.847656 18.75 L 26.675781 18.75 C 28.835938 15.015625 32.878906 12.5 37.5 12.5 C 44.398438 12.5 50 18.101562 50 25 C 50 31.546875 44.957031 36.925781 38.546875 37.457031 Z M 42.707031 21.875 C 44.433594 21.875 45.832031 23.273438 45.832031 25 C 45.832031 26.726562 44.433594 28.125 42.707031 28.125 C 40.984375 28.125 39.582031 26.726562 39.582031 25 C 39.582031 23.273438 40.984375 21.875 42.707031 21.875 Z M 42.707031 21.875 "/>
</g>
</svg>
            </div>`;

      const containerMyUser = document.getElementById("aplication-box");
      containerMyUser.innerHTML = html;
      deleteListener(userData._id)
      disableAdminAccessListener(userData._id)
      disableAccessListener(userData._id)
      patchUserByIdListener(userData._id)
      
    }
    
  )
    
    .catch((error) => {
      console.error("Hubo un problema con la solicitud:", error);
    });
}
