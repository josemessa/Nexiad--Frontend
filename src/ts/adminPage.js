import { getAllUserslistener, addUserByAdminListener } from "../ts/events/tools";
import { getUserById } from "../ts/getUserById";


export function adminPage(userName, userSurname) {
  const pageElement = document.getElementById("app");
  pageElement.innerHTML = "";
  pageElement.innerHTML = `   
    <main>     
      <div class="dashboard"> <img src="nexiatransp.png" alt=""> 
      <div class="tools-bar">  
          <a href="#" id="get-all-users"><div class="tool">Usuarios
          <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px"  fill="white" viewBox="0 0 24 24"><path d="M23 18h-5v-1h5v1zm-15.998-10c-2.494 0-4.227 2.383-1.867 6.839.775 1.464-.826 1.812-2.545 2.209-1.491.345-1.59 1.074-1.59 2.337l.002.615h1.33c0-1.918-.186-1.385 1.824-1.973 1.014-.295 1.91-.723 2.316-1.612.211-.463.355-1.22-.162-2.197-.953-1.798-1.219-3.374-.713-4.215.547-.909 2.27-.908 2.82.015.935 1.567-.794 3.982-1.021 4.982h1.396c.442-1 1.208-2.208 1.208-3.9 0-2.01-1.312-3.1-2.998-3.1zm7.754-1.556c.895-1.487 3.609-1.494 4.512.022.77 1.291.422 3.484-.949 6.017-.098.18-.17.351-.232.517h1.463c3.057-5.744.816-9-2.547-9-3.324 0-5.635 3.177-2.488 9.119 1.033 1.952-1.102 2.416-3.395 2.946-1.986.459-2.118 1.429-2.118 3.111l.003.825h1.33c0-2.069-.08-2.367 1.174-2.657 1.918-.442 3.729-.86 4.389-2.305.242-.527.402-1.397-.205-2.543-1.363-2.573-1.705-4.778-.937-6.052z"/></svg></div></a></h3>

         <a href="#" id="add-user-by-admin"><div class="tool"> Nuevo usuario
              <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px"  fill="white" viewBox="0 0 24 24"><path d="M9.602 3.7c-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 3.321 0 5.97 2.117 5.97 6.167 0 3.555-1.949 6.833-2.383 7.833h-2.115c.392-1.536 2.499-4.366 2.499-7.842 0-5.153-5.867-4.985-7.369-2.458zm13.398 15.3h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/></svg></div></a>
              </div>     
      </div> 
      <div class="app-space">
      <div class="top-bar">
          <h3>Admin: ${userName} ${userSurname}</h3>
      </div>    
      
       <div class="aplication-box" id="aplication-box">
      <div class="welcome">
        <p class="welcome-message">Bienvenido a <b>Nexiad</b></h2>
        <p class="page-message">En nuestra plataforma podrás gestionar,consultar y editar los usuarios de tu plataforma</p>
        <p></p>
        </div>
 
    </div>
    </div>
   `;
  getAllUserslistener();
  addUserByAdminListener();
}
