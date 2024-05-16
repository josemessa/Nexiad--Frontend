import {
  closeSessionListener,
  getMyUserlistener,
  getallSubscriptionsListener,
} from "./events/tools";

export function userPage(userName, userSurname) {
  const pageElement = document.getElementById("app");
  pageElement.innerHTML = "";
  pageElement.innerHTML = `   
    <main>     
      <div class="dashboard"> <img src="nexiatransp.png" alt=""><div>
      <h3 class="tool-user-list">
      <a href="#" id="my-user"><div class="tool-users">Usuarios
      <svg class="svg-users" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm7.5 17v-.5a7.5 7.5 0 0 0 -15 0v.5a1 1 0 0 0 2 0v-.5a5.5 5.5 0 0 1 11 0v.5a1 1 0 0 0 2 0zm9-5a7 7 0 0 0 -11.667-5.217 1 1 0 1 0 1.334 1.49 5 5 0 0 1 8.333 3.727 1 1 0 0 0 2 0zm-6.5-9a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5z"/></svg></div></a></h3>
            
      <a href="#" id="type-subscriptions"><div class="tool"> Subscripciones

      <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px"  fill="white" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 14.083c0-2.145-2.232-2.742-3.943-3.546-1.039-.54-.908-1.829.581-1.916.826-.05 1.675.195 2.443.465l.362-1.647c-.907-.276-1.719-.402-2.443-.421v-1.018h-1v1.067c-1.945.267-2.984 1.487-2.984 2.85 0 2.438 2.847 2.81 3.778 3.243 1.27.568 1.035 1.75-.114 2.011-.997.226-2.269-.168-3.225-.54l-.455 1.644c.894.462 1.965.708 3 .727v.998h1v-1.053c1.657-.232 3.002-1.146 3-2.864z"/></svg></div></a>
                      </div>

            <div class="user-info">
              <h3>Usuario: ${userName} ${userSurname}</h3>
              <a id="close-session">Cerrar sesion<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21h8v-2l1-1v4h-9v2l-10-3v-18l10-3v2h9v5l-1-1v-3h-8v18zm10.053-9l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z"/></svg></a> </div>   
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
  getMyUserlistener();
  closeSessionListener();
  getallSubscriptionsListener();
}
