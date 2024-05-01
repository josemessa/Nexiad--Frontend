import { getMyUserlistener } from "./events/myUser";

export function userPage(userName, userSurname) {
  const pageElement = document.getElementById("app");
  pageElement.innerHTML = "";
  pageElement.innerHTML = `<header>
  <div class="header-bar">
  <img src="nexiatransp.png" alt=""><div class="user-line"><h2 class="page-title">USER DASHBOARD</h2><h3>User: ${userName} ${userSurname}</h3></div>
  </div>
  </header>
  <main>
  <div class="body-app">
      <div class="main-control-box">
      <div class="main-control">
      <h3 class="my-user"><a href="#" id="my-user">Users</a></h3>
      </div>
      </div>
      <div class="container-my-user" id="container-my-user">
      <div class="welcome">
        <p class="welcome-message">Welcome to <b>Nexiad Web User</b></h2>
        <p class="page-message">In this app you can manage, consult your user.</p>
        <p></p>
        </div>
      </div>
    </div>
  </main>
  <footer></footer>`;
  getMyUserlistener();
}
