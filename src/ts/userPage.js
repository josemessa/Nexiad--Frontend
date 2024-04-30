import { getMyUserlistener } from "./events/myUser";

export function userPage(userName, userSurname){  
  const pageElement= document.getElementById("app")
  pageElement.innerHTML=""
  pageElement.innerHTML=`<header>
  <div class="header-bar">
  <img src="nexiatransp.png" alt=""><div class="user-line"><h2 class="page-title">USER DASHBOARD</h2><h3>User: ${userName} ${userSurname}</h3></div>
  </div>
  </header>
  <main>
  <div>
    <div class="main-control-box">
    <div class="main-control">
    <h3 class="my-user"><a href="#" id="my-user">My users</a></h3>
       
    </div>
  </div>
  </div>
  </main>
  <footer></footer>`
  getMyUserlistener();
}
