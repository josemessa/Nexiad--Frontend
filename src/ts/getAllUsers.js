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

    // Genera el HTML usando los datos de 'usersData'
    const html = usersData.map(userData => `
      <div class="user">
        <div>${userData.id}</div>
        <div>${userData.firstname}</div>
        <div>${userData.surname}</div>
        <div>${userData.birthdate}</div>
        <div>${userData.email}</div>
      </div>
    `).join('');

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
