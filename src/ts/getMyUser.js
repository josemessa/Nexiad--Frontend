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
        if(!response.ok){
            return new Error(`Error: ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        const myUser = data.data;
        console.log("Datos del usuario:", myUser);
    })
}