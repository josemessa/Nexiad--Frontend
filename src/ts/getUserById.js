export function getUserById(userId) {
    const authToken = localStorage.getItem("token");

    if (!authToken) {
        console.error(
            "No se encontró un token de autenticación. Inicie sesión para obtener acceso."
        );
        return;
    }

    fetch(`http://localhost:3000/user/${userId}/getuserbyid/`, {
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
              

            const initial = userData.firstname.charAt(0).toUpperCase();
            const color = colorMap[initial] || getRandomColor();

            const formattedBirthdate = birthdate.toLocaleString("en-US", options);
            console.log(formattedBirthdate);

            const html = `<div class="div-my-user">
                <div class="container-name">
                    <div class="profile-image" style="background-color: ${color};">
                        ${initial}
                    </div>
                    <div class="firstname">${userData.firstname}</div>
                    <div class="my-surname">${userData.surname}</div>
                    <div class="subscription-name">${userData.subscription}</div>
                </div>
                <div class="container-email">
                    <div class="email"><b>email:  </b>${userData.email}</div>
                    <div class="numero"><b>numero:  </b>${userData.phone}</div>
                </div>
                <div class="user-id"><b>id:  </b>${userData._id}</div>
                <div class="container-adress">
                    <div class="adress"><b>direccion:</b>  ${userData.adress}</div>
                    <div class="birthdate"><b>fecha de nacimiento:</b>  ${formattedBirthdate}</div>
                </div>
            </div>`;

            console.log(html);

            const containerMyUser = document.getElementById("aplication-box");
            containerMyUser.innerHTML = html;
        })
        .catch((error) => {
            console.error("Hubo un problema con la solicitud:", error);
        });
}

