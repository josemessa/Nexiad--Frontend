export function getAllUsers() {
  // Obtener el token de autenticación del localStorage
  const authToken = localStorage.getItem('token');

  // Verifica si el token existe antes de hacer la solicitud
  if (!authToken) {
      console.error('No se encontró un token de autenticación. Inicie sesión para obtener acceso.');
      return;
  }

  fetch('http://localhost:3000/user/getusers', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'auth-token': `${authToken}` 
      }
  })
  .then(response => {
      if (response.ok) {
          return response.json();
      } else {
          throw new Error(`Error en la respuesta de la red: ${response.status} ${response.statusText}`);
      }
  })
  .then(data => {
      if (data && data.data) {
          const usersData = data.data;

          // Generar HTML usando los datos de 'usersData'
          const html = usersData.map(userData => `
              <div class="user">
                  <div>${userData.id}</div>
                  <div>${userData.firstname}</div>
                  <div>${userData.surname}</div>
                  <div>${userData.birthdate}</div>
                  <div>${userData.email}</div>
              </div>
          `).join('');

          // Insertar el HTML generado en el contenedor
          const containerUsers = document.getElementById('user_list_box');
          if (containerUsers) {
              containerUsers.innerHTML = html;
          } else {
              console.error('El contenedor de usuarios no fue encontrado.');
          }
      } else {
          console.error('La respuesta no contiene los datos esperados.');
      }
  })
  .catch(error => {
      console.error('Hubo un problema con la solicitud:', error);
  });
}
