
export function getAllUsers(){

  fetch('http://localhost:3000/user/getusers')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      const usersData = data.data;
      console.log(usersData);
  
      const html = usersData.map(userData => {
        let subscriptionClass = "";
      
        if (userData.subscription === "premium") {
          subscriptionClass = "premium"; 
        } else if (userData.subscription === "basic") {
          subscriptionClass = "basic"; 
        }
      
        return `
          <div class="user">
            <div class="name">${userData.firstname}</div>
            <div class="name">${userData.surname}</div>
            <div id="subscription" class="${subscriptionClass}">${userData.subscription}</div>
          </div>
        `;
      }).join('');
  
      const containerUsers = document.getElementById('user_list_box');
  
      if (!containerUsers) {
        console.log("El elemento containerUsers no fue encontrado");
      } else {
        containerUsers.innerHTML = html;
  
      }
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud:', error);
    });
  }