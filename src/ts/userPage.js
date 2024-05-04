
export function userPage(userName, userSurname){  
    const pageElement= document.getElementById("app")
    pageElement.innerHTML=""
    pageElement.innerHTML=`   <main>     
    <div class="dashboard"> <img src="nexiatransp.png" alt="">
    <h3 class="tool-user-list">
        </h3>
    </div> 
    <div class="app-space">
    <div class="top-bar">
        <h3>Usuario: ${userName} ${userSurname}</h3>
    </div>    
    
     <div class="list_box" id="user_list_box">
    <div class="welcome">
      <p class="welcome-message">Bienvenido a <b>Nexiad</b></h2>
      <p class="page-message">En nuestra plataforma podrás gestionar,consultar y editar los usuarios de tu plataforma</p>
      <p></p>
      </div>

  </div>
  </div>
 `
}
