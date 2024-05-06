
export function disableAdminAccess(userId){
    console.log(userId);
    console.log(`final ${userId}`);
    const authToken = localStorage.getItem("token");
  
    if (!authToken) {
      console.error(
        "No se encontró un token de autenticación. Inicie sesión para obtener acceso."
      );
      return;
    }

    fetch(`http://localhost:3000/user/${userId}/disableadmin`,{
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
            "auth-token": authToken,
        }
    })
    .then((response) => {
        if(response.ok){
            return response.json();
        } else{
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
        console.error("Error al intentar deshabilitar el acceso de administrador:", error);
    });
}