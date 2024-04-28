import { getAllUserslistener } from "../ts/events/usersList";


export function adminPage(){  
    const pageElement= document.getElementById("app")
    pageElement.innerHTML=""
    pageElement.innerHTML=`<header>
    <div class="header-bar">
      <img src="nexiatransp.png" alt=""><h2>ADMIN DASHBOARD</h2>
    </div>
    </header>
    <main>
    <div class="body-app">
      <div class="main-control-box">
      <div class="main-control">
      <h3 class="tool-user-list"><a href="#" id="get-all-users">Users</a></h3>
      </div>
      </div>
      <div class="list_box" id="user_list_box">
      </div>
    </div>
    </main>
    <footer></footer>`
    getAllUserslistener();
}

