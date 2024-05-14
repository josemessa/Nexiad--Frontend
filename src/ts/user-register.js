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
    <div class="inputs">
            <div >
                <label>Nombre:</label><br>
                <input type="firstname" id="firstname" placeholder="ej. Jose Antonio" required>
            </div>
            <div >
                <label>Apellidos:</label><br>
                 <input type="surname" id="surname"  placeholder="ej. Plaza Martinez" required>
            </div>
            <div>
                <label>Direccion:</label><br>
                 <input type="adress" id="adress" placeholder="ej. Avda. Los Alamos">
            </div>
            <div>
                <label>Ciudad:</label><br>
                 <input type="city" id="city"  placeholder="ej. Málaga">
            </div>           
            <div>
                <label>Numero de telefono:</label><br>
                 <input type="phone" id="phone" placeholder="+34 6XX XXX XXX" >
            </div>           
            <div>
                <label for="birthdate">Fecha de Nacimiento:</label><br>
                <input type="date" id="birthdate" required>
            </div>
           
                <div><label >Email:</label><br>
                <input type="email" id="email" name="email" placeholder="Escribe aqui tu email" required>
                <span id="email-error" style="color: red; display: none;">Por favor, ingrese un correo electrónico válido.</span>
            </div>
            <div>
                <label for="password">Contraseña:</label><br>
                <input type="password" id="password" name="password" placeholder="Escribe aqui tu contraseña" required>
                <span id="password-error" style="color: red; display: none;">La contraseña debe tener al menos 8 caracteres y un número</span>
            </div>
            <div>
                <label for="password">Repite tu contraseña</label><br>
                <input type="password" id="password-confirmation" name="password" placeholder="Repite aqui la contraseña" >
            </div> 
        </div>     
        <div class="selectors">    
          <div >
          <label for="role">Selecciona el rol del nuevo usuario</label><br>
          <select id="rol" name="rol">
          <option value="usuario_estandar">Usuario Estándar</option>
          <option value="admin">Admin</option>
            </select>
            <div id="warning-box"></div>
            <div>
            <label for="role">Selecciona el tipo de subscripcion</label><br>
            <select id="subscription-select"></select>
            </div>
            <input class="register-submit" id="register-submit" type="button" value="Crear nuevo usuario">
            </div>
        </div>
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
    } else {
      warningMessage.innerHTML = "";
    }
  });

  fetch(`http://localhost:3000/subscription/getsubscriptions`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
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
      const containerSelectSubscriptions = document.getElementById(
        "subscription-select"
      );
      if (containerSelectSubscriptions) {
        subscriptionsData.forEach((subscription) => {
          const option = document.createElement("option");
          option.value = subscription._id;
          option.textContent = subscription.nombre;
          containerSelectSubscriptions.appendChild(option);
        });
      }
    })
    .catch((error) => {
      console.error(`Hubo un problema con la solicitud: ${error}`);
    });
}
