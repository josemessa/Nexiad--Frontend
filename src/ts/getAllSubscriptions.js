
export function getallSubscriptions(){
    const authToken = localStorage.getItem("token");
    if(!authToken){
        console.error("No se encontró un token de autenticación. Inicie sesión para obtener acceso.");
        return;
    }
    fetch(`http://localhost:3000/subscription/getsubscriptions`,{
        method: "GET",
        headers: {
            "content-type": "application/json",
            "auth-token": authToken,
        },
    })
    .then((response) => {
        if(!response.ok) {
            return new Error(`Error: ${response.statusText}`)
        }
        
        return response.json();
        
    })
    .then((data) => {
        const subscriptionsData = data.data;
        console.log(subscriptionsData);
    })
    .catch((error) => {
        console.error(`Hubo un problema con la solicitud: ${error}`);
    })
}