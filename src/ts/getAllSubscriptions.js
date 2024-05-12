import { addNewSubscriptionListener } from "./events/tools";

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
        const html = subscriptionsData.map((subscription) => {
            const beneficios = subscription.beneficios.map((beneficio) => `<div>${beneficio}.</div>`).join('');
            return `<div class="subscription-plan">
                        <div class="container-subscription-name">
                        <h2 class="subscription-name-subscritions">${subscription.nombre}</h2>
                        </div>
                        <ul class="ul-subscription">
                            <li><b>descripcion:  </b>${subscription.descripcion}</li>
                            <li><b>duracion:  </b>${subscription.duracion}</li>
                            <li><b>precio:  </b>${subscription.precio}$</li>
                            <li>
                            <b>beneficios:  </b>${beneficios}
                            </li>
                        </ul>
                    </div>`;
        }).join('');
        const aplicationBox = document.getElementById("aplication-box");
        if(aplicationBox){
            aplicationBox.innerHTML = `<div class="container-bottom-subscription"><div class="container-bottom-add-subscription"><button class="bottom-add-subscription" id="bottom-add-subscription">crear subscripcion</button></div><div class="container-subscriptions">${html}</div></div>`;
            addNewSubscriptionListener();
        }
    })
    .catch((error) => {
        console.error(`Hubo un problema con la solicitud: ${error}`);
    })
}