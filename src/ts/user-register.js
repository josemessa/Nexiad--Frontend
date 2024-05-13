import { registerSubmitListener } from "./events/user-register-Byadmin";

export function userRegisterByAdmin() {
  const pageElement = document.getElementById("aplication-box");
  let subscriptionsData;
  pageElement.innerHTML = "";
  pageElement.innerHTML = ` <div>  
    <h2 class="register-title">Registro de nuevo usuario</h2>
    <div class="register-container">
    <div class="register-box" id="register-box">
    <form class="user-form" action="submit" method="POST">       
            <div >
                <label>Nombre:</label>
                <input type="firstname" id="firstname" placeholder="ej. Jose Antonio" required>
            </div>
            <div >
                <label>Apellidos:</label>
                 <input type="surname" id="surname"  placeholder="ej. Plaza Martinez" required>
            </div>
            <div>
                <label>Direccion:</label>
                 <input type="adress" id="adress" placeholder="ej. Avda. Los Alamos">
            </div>
            <div>
                <label>Ciudad:</label>
                 <input type="city" id="city"  placeholder="ej. Málaga">
            </div>           
            <div>
                <label>Numero de telefono:</label>
                 <input type="phone" id="phone" placeholder="+34 6XX XXX XXX" >
            </div>           
            <div>
                <label for="birthdate">Fecha de Nacimiento:</label>
                <input type="date" id="birthdate" required>
            </div>
           
                <div><label >Email:</label>
                <input type="email" id="email" name="email" placeholder="Escribe aqui tu email" required>
            </div>
            <div>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" placeholder="Escribe aqui tu contraseña" required>
            </div>
            <div>
                <label for="password">Repite tu contraseña</label>
                <input type="password" id="password-confirmation" name="password" placeholder="Repite aqui la contraseña" >
            </div> 
            
            <div >
                <label for="role">Selecciona el rol del nuevo usuario</label>
                <select id="rol" name="rol">
                <option value="usuario_estandar">Usuario Estándar</option>
                <option value="admin">Admin</option>
            </select>
            <div>
            <label for="role">Selecciona el tipo de subscripcion</label>
            <select id="subscription-select"></select>
            </div>
            <div id="warning-box"></div>
            </div>
    <input class="register-submit" id="register-submit" type="button" value="Crear nuevo usuario">
</form>
</div>  
</div>
</div>  

`;
  registerSubmitListener();

  const roleSelect = document.getElementById("rol");
  const warningMessage = document.getElementById("warning-box");

  roleSelect.addEventListener("change", function () {
    if (roleSelect.value === "admin") {
      warningMessage.innerHTML = `<p class="admin-warning">ATENCION: Otorgar el rol ADMIN a un usuario le dará acceso a gestion y manipulacion de la base de datos</p>`;
      console.log("hola");
    } else {
      warningMessage.innerHTML = `<p> Se creará un usuario estandar en la base de datos</p>`;
      console.log("adios");
    }
  });
  
  fetch(`http://localhost:3000/subscription/getsubscriptions`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data.data);
            subscriptionsData = data.data;
            const containerSelectSubscriptions = document.getElementById("subscription-select")
            if(containerSelectSubscriptions){
              subscriptionsData.forEach(subscription => {
                const option = document.createElement("option")
                option.value = subscription._id;
                option.textContent = subscription.nombre;
                containerSelectSubscriptions.appendChild(option);
              })
            }
        })
        .catch((error) => {
            console.error(`Hubo un problema con la solicitud: ${error}`);
        });
}
