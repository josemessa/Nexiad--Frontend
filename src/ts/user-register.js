export function userRegisterByAdmin(){  
    const pageElement= document.getElementById("aplication-box")
    pageElement.innerHTML=""
    pageElement.innerHTML= `     
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
            </div>
    <input class="login-button" id="login-button" type="button" value="Crear nuevo usuario">
</form>
</div>  
`

}
