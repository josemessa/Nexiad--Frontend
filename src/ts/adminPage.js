import { getAllUserslistener } from "../ts/events/usersList";


export function adminPage(userName, userSurname){  
    const pageElement= document.getElementById("app")
    pageElement.innerHTML=""
    pageElement.innerHTML=`<header>
    <div class="header-bar">
      <img src="nexiatranspblack.png" alt=""><div class="user-line"><h2 class="page-title">ADMIN DASHBOARD</h2><h3>Admin: ${userName} ${userSurname}</h3></div>
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
      <div class="welcome">
        <p class="welcome-message">Welcome to <b>Nexiad Web Admin</b></h2>
        <p class="page-message">In this app you can manage, consult, and create users from your platform.</p>
        <p></p>
        </div>
      </div>
    </div>
    </main>
    <footer></footer>`
    getAllUserslistener();
}

