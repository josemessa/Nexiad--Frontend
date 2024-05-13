import { getallSubscriptions } from "./getAllSubscriptions";

export function addNewSubscription(){
    const nombreValue = document.getElementById("nombre").value;
    const descripcionValue = document.getElementById("descripcion").value;
    const duracionValue = document.getElementById("duracion").value;
    const precioValue = document.getElementById("precio").value;
    const beneficiosValue = document.getElementById("beneficiosList").value;
    const authToken = localStorage.getItem("token");
    if(!authToken){
        console.error("No se encontró un token de autenticación. Inicie sesión para obtener acceso.");
    }
    fetch("http://localhost:3000/subscription/addsubscription", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
        },
        body: JSON.stringify({
            nombre: nombreValue,
            descripcion: descripcionValue,
            duracion: duracionValue,
            precio: precioValue,
            beneficios: beneficiosValue,
        })
    })
    .then((response) => {
        if(!response.ok){
            return new Error((`Error: ${response.statusText}`));
        }
        return response.json();
    })
    .then((data) => {
        const subscriptionData = data.data;
        console.log(subscriptionData)
        getallSubscriptions()
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
    })
}