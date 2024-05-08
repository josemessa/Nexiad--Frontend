import { registerSubmitListener } from "./events/register-submit"

export function userRegisterByAdmin(){  
    const pageElement= document.getElementById("aplication-box")
    pageElement.innerHTML=""
    pageElement.innerHTML= ` <div>  
    <h2 class="register-title">Registro de nuevo usuario</h2>
    <div class="register-box" id="register-box">
    <form class="user-form" action="submit" method="POST">
         <div class="firstname-surname"> 
            <div class="firstname-box">
                <label>Nombre:</label>
                <input type="firstname" id="firstname" required>
            </div>
            <div class="surname-box">
                <label>Apellidos:</label>
                 <input type="surname" id="surname" required>
            </div>
            </div>
         <div class="adress-city">
            <div class="adress-box">
                <label>Direccion:</label>
                 <input type="adress" id="adress" >
            </div>
            <div class="city">
                <label>Ciudad:</label>
                 <input type="city" id="city" >
            </div>
            </div>
            <div class="phone">
                <label>Numero de telefono:</label>
                 <input type="phone" id="phone" >
            </div>
           
            <div class="birthdate-box">
                <label for="birthdate">Fecha de Nacimiento:</label>
                <input type="date" id="birthdate" required>
            </div>
            <div class="email-password">
                <div class="email-box"><label >Email:</label>
                <input type="email" id="email" name="email" placeholder="Escribe aqui tu email" required>
            </div>
            <div class="pass-box">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" placeholder="Escribe aqui tu contraseña" required>
            </div> 
          </div>
            <div class="role-box">
            <label for="role">Selecciona el rol del nuevo usuario</label>
            <select id="rol" name="rol">
                <option value="usuario_estandar">Usuario Estándar</option>
                <option value="admin">Admin</option>
            </select>
            <div id="warning-box"></div>
            </div>
    <input class="register-submit" id="register-submit" type="button" value="Crear nuevo usuario">
</form>
</div>  
</div>  

`
registerSubmitListener()

    const roleSelect = document.getElementById("rol");
    const warningMessage = document.getElementById("warning-box");

    roleSelect.addEventListener("change", function () {
        if (roleSelect.value === "admin") {
            warningMessage.innerHTML=`<p class="admin-warning">ATENCION: Otorgar el rol ADMIN a un usuario le dará acceso a gestion y manipulacion de la base de datos</p>`
            console.log("hola")
        } else {
            warningMessage.innerHTML=`<p> Se creará un usuario estandar en la base de datos</p>`
            console.log("adios")
        }
    });

    
}
