// // html code

// <header>
// <div class="header-bar">
//   <img src="logo-2.png" alt="">
// </div>
// </header>
// <main>
// <div>
//   <div class="main-control-box">
//   <div class="main-control">
//       <h2 class="tools">TOOLS</h2>
//   </div>
// </div>
// </div>
// </main>
// <footer></footer>

const userListBox = document.getElementById("user_list_box");
const table = document.createElement("table");
table.classList.add("user-table");
const headerRow = table.insertRow();
const headers = ["Firstname", "Surname", "Birthdate", "Email", "Password", "Subscription", "Role"];

headers.forEach(headerText => {
  const headerCell = document.createElement("th");
  headerCell.textContent = headerText;
  headerRow.appendChild(headerCell);
});

const getUsers = [
        { Firstname: "Juan", Surname: "García", Birthdate: "1990-01-01", Email: "juan@example.com", Password: "*****", Subscription: "Premium", Role: "Admin" },
        { Firstname: "María", Surname: "López", Birthdate: "1985-05-15", Email: "maria@example.com", Password: "*****", Subscription: "Basic", Role: "User" },
        { Firstname: "José", Surname: "Martínez", Birthdate: "1987-03-20", Email: "jose@example.com", Password: "*****", Subscription: "Premium", Role: "Admin" },
        { Firstname: "Ana", Surname: "Sánchez", Birthdate: "1992-11-10", Email: "ana@example.com", Password: "*****", Subscription: "Basic", Role: "User" },
        { Firstname: "Carlos", Surname: "Gómez", Birthdate: "1988-09-05", Email: "carlos@example.com", Password: "*****", Subscription: "Premium", Role: "Admin" },
        { Firstname: "Laura", Surname: "Pérez", Birthdate: "1994-07-25", Email: "laura@example.com", Password: "*****", Subscription: "Basic", Role: "User" },
        { Firstname: "David", Surname: "Rodríguez", Birthdate: "1983-12-30", Email: "david@example.com", Password: "*****", Subscription: "Premium", Role: "Admin" },
        { Firstname: "Sara", Surname: "Hernández", Birthdate: "1986-06-18", Email: "sara@example.com", Password: "*****", Subscription: "Basic", Role: "User" },
        { Firstname: "Manuel", Surname: "Gutiérrez", Birthdate: "1991-04-17", Email: "manuel@example.com", Password: "*****", Subscription: "Premium", Role: "Admin" },
        { Firstname: "Elena", Surname: "Molina", Birthdate: "1989-08-08", Email: "elena@example.com", Password: "*****", Subscription: "Basic", Role: "User" },
        { Firstname: "Javier", Surname: "Jiménez", Birthdate: "1984-02-14", Email: "javier@example.com", Password: "*****", Subscription: "Premium", Role: "Admin" },
        { Firstname: "Isabel", Surname: "Ruiz", Birthdate: "1993-10-23", Email: "isabel@example.com", Password: "*****", Subscription: "Basic", Role: "User" },
        { Firstname: "Pedro", Surname: "Díaz", Birthdate: "1982-07-12", Email: "pedro@example.com", Password: "*****", Subscription: "Premium", Role: "Admin" },
        { Firstname: "Carmen", Surname: "Fernández", Birthdate: "1987-05-03", Email: "carmen@example.com", Password: "*****", Subscription: "Basic", Role: "User" },
        { Firstname: "Miguel", Surname: "Álvarez", Birthdate: "1990-03-29", Email: "miguel@example.com", Password: "*****", Subscription: "Premium", Role: "Admin" },
        { Firstname: "Raquel", Surname: "Torres", Birthdate: "1985-09-21", Email: "raquel@example.com", Password: "*****", Subscription: "Basic", Role: "User" },
        { Firstname: "Antonio", Surname: "Navarro", Birthdate: "1988-11-14", Email: "antonio@example.com", Password: "*****", Subscription: "Premium", Role: "Admin" },
        { Firstname: "Natalia", Surname: "Ortega", Birthdate: "1995-01-05", Email: "natalia@example.com", Password: "*****", Subscription: "Basic", Role: "User" },
        { Firstname: "Francisco", Surname: "Reyes", Birthdate: "1986-04-07", Email: "francisco@example.com", Password: "*****", Subscription: "Premium", Role: "Admin" },
        { Firstname: "Patricia", Surname: "Sanz", Birthdate: "1991-08-19", Email: "patricia@example.com", Password: "*****", Subscription: "Basic", Role: "User" }
      ];
      

getUsers.forEach(userData => {
  const row = table.insertRow();
  Object.values(userData).forEach(value => {
    const cell = row.insertCell();
    cell.textContent = value;
  });
});

userListBox?.appendChild(table);
