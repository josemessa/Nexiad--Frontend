export function patchUserById(userId) {
    const authToken = localStorage.getItem("token");

    if (!authToken) {
        console.error(
            "No se encontró un token de autenticación. Inicie sesión para obtener acceso."
        );
        return;
    }

    let user; // Definir la variable user aquí

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
        console.log(user);
        // Ahora puedes acceder a user aquí dentro de la función
    })
    .catch((error) => {
        console.error("Error al obtener el usuario:", error);
    });
}
