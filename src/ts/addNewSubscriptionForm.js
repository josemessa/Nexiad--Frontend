import { addNewSubscription } from "./addNewSubscription";

export function addNewSubscriptionForm(){
    const aplicationBox = document.getElementById("aplication-box");
    aplicationBox.innerHTML = `<div class="container-form-subscription"><div class="form-contain"><form id="subscriptionForm" class="subscription-form">
    <div>
        <label for="nombre">Nombre:  </label>
        <input type="text" id="nombre" class="inputs-add-subscriptions" name="nombre" >
    </div>
    <div>
        <label for="descripcion">Descripción:  </label>
        <input type="text" id="descripcion" class="inputs-add-subscriptions" name="descripcion" >
    </div>
    <div>
        <label for="duracion">Duración:  </label>
        <input type="text" id="duracion" class="inputs-add-subscriptions" name="duracion">
    </div>
    <div>
        <label for="precio">Precio:  </label>
        <input type="number" id="precio" class="inputs-add-subscriptions" name="precio">
    </div>
    <div>
    <br>
        <label for="beneficios">Beneficios:</label>
        <ul id="beneficiosList" class="inputs-add-subscriptions">
            <li contenteditable="true">Beneficio 1</li>
            <li contenteditable="true">Beneficio 2</li>
            <li contenteditable="true">Beneficio 3</li>
        </ul>
    </div>
    <button type="button" id="send-bottom-form-subscriptions" class="send-bottom-form-subscriptions">Enviar</button>
</form>
</div>
</div>`;
const sendBottomSubscription = document.getElementById("send-bottom-form-subscriptions");
if(sendBottomSubscription){
    sendBottomSubscription.addEventListener("click", (event) => {
        addNewSubscription()
    })
}
}