
export function userPage(userName, userSurname){  
    const pageElement= document.getElementById("app")
    pageElement.innerHTML=""
    pageElement.innerHTML=`<header>
    <div class="header-bar">
    <img src="nexiatransp.png" alt=""><div class="user-line"><h2 class="page-title">ADMIN DASHBOARD</h2><h3>Admin: ${userName} ${userSurname}</h3></div>
    </div>
    </header>
    <main>
    <div>
      <div class="main-control-box">
      <div class="main-control">
         
      </div>
    </div>
    </div>
    </main>
    <footer></footer>`
}
