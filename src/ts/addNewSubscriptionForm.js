import { addNewSubscription } from "./addNewSubscription";

export function addNewSubscriptionForm(){
    const aplicationBox = document.getElementById("aplication-box");
    aplicationBox.innerHTML = `<div class="container-form-subscription"><form id="subscriptionForm" class="subscription-form">
    <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value="Basic" readonly>
    </div>
    <div>
        <label for="descripcion">Descripción:</label>
        <input type="text" id="descripcion" name="descripcion" value="Suscripción básica" readonly>
    </div>
    <div>
        <label for="duracion">Duración:</label>
        <input type="text" id="duracion" name="duracion" value="6 meses" readonly>
    </div>
    <div>
        <label for="precio">Precio:</label>
        <input type="number" id="precio" name="precio" value="10" readonly>
    </div>
    <div>
        <label for="beneficios">Beneficios:</label>
        <ul id="beneficiosList">
            <li contenteditable="true">Beneficio 1</li>
            <li contenteditable="true">Beneficio 2</li>
            <li contenteditable="true">Beneficio 3</li>
        </ul>
    </div>
    <button type="button" id="send-bottom-form-subscriptions" class="send-bottom-form-subscriptions">Enviar</button>
</form>
</div>`;
const sendBottomSubscription = document.getElementById("send-bottom-form-subscriptions");
if(sendBottomSubscription){
    sendBottomSubscription.addEventListener("click", (event) => {
        addNewSubscription()
    })
}
}