import {
  getAllUserslistener,
  addUserByAdminListener,
  closeSessionListener,
  getallSubscriptionsListener,
} from "../ts/events/tools";
import { adminAuthListener } from "./events/admin-authorization";

export function adminPage(userName, userSurname) {
  const pageElement = document.getElementById("app");
  pageElement.innerHTML = "";
  pageElement.innerHTML = `   
    <main>     
      <div class="dashboard">
      <img src="nexiatransp.png" alt=""> 
      <div class="tools-bar">  
          <a href="#" id="get-all-users"><div class="tool">Usuarios
          <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px"  fill="white" viewBox="0 0 24 24"><path d="M23 18h-5v-1h5v1zm-15.998-10c-2.494 0-4.227 2.383-1.867 6.839.775 1.464-.826 1.812-2.545 2.209-1.491.345-1.59 1.074-1.59 2.337l.002.615h1.33c0-1.918-.186-1.385 1.824-1.973 1.014-.295 1.91-.723 2.316-1.612.211-.463.355-1.22-.162-2.197-.953-1.798-1.219-3.374-.713-4.215.547-.909 2.27-.908 2.82.015.935 1.567-.794 3.982-1.021 4.982h1.396c.442-1 1.208-2.208 1.208-3.9 0-2.01-1.312-3.1-2.998-3.1zm7.754-1.556c.895-1.487 3.609-1.494 4.512.022.77 1.291.422 3.484-.949 6.017-.098.18-.17.351-.232.517h1.463c3.057-5.744.816-9-2.547-9-3.324 0-5.635 3.177-2.488 9.119 1.033 1.952-1.102 2.416-3.395 2.946-1.986.459-2.118 1.429-2.118 3.111l.003.825h1.33c0-2.069-.08-2.367 1.174-2.657 1.918-.442 3.729-.86 4.389-2.305.242-.527.402-1.397-.205-2.543-1.363-2.573-1.705-4.778-.937-6.052z"/></svg></div></a></h3>

         <a href="#" id="add-user-by-admin"><div class="tool"> Nuevo usuario
              <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px"  fill="white" viewBox="0 0 24 24"><path d="M9.602 3.7c-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 3.321 0 5.97 2.117 5.97 6.167 0 3.555-1.949 6.833-2.383 7.833h-2.115c.392-1.536 2.499-4.366 2.499-7.842 0-5.153-5.867-4.985-7.369-2.458zm13.398 15.3h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/></svg></div></a>
              
          <a href="#" id="type-subscriptions"><div class="tool"> Subscripciones
          <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px"  fill="white" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 14.083c0-2.145-2.232-2.742-3.943-3.546-1.039-.54-.908-1.829.581-1.916.826-.05 1.675.195 2.443.465l.362-1.647c-.907-.276-1.719-.402-2.443-.421v-1.018h-1v1.067c-1.945.267-2.984 1.487-2.984 2.85 0 2.438 2.847 2.81 3.778 3.243 1.27.568 1.035 1.75-.114 2.011-.997.226-2.269-.168-3.225-.54l-.455 1.644c.894.462 1.965.708 3 .727v.998h1v-1.053c1.657-.232 3.002-1.146 3-2.864z"/></svg></div></a>

          <a href="#" id="admin-auth"><div class="tool"> Autorizar admin
          <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px"  fill="white" viewBox="0 0 24 24"><path d="M5 6v8h14v-8h-14zm13 7h-12v-6h12v6zm-8-3c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm-16-10v19h24v-19h-24zm22 17h-20v-15h20v15zm-6.599 4l2.599 3h-12l2.599-3h6.802z"/></svg></div></a>
              </div>
          
            <div class="user-info">
              <h3>Admin: <br>${userName} ${userSurname}</h3>
              <a id="close-session">Cerrar sesion<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 13v-4l8 7-8 7v-4h-6v-6h6zm0-6v-6h-16v18l8-7v-9h6v4h2z"/></svg></a>   
            </div>
          
      </div> 
      <div class="app-space">  
      
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
  closeSessionListener();
  getallSubscriptionsListener();
  adminAuthListener();
}
