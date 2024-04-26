interface User {
    id: string;
    name: string;
    email: string;
    birthdate?: string; // Se puede agregar si es necesario
    subscriptionDetails: string;
    role: string;
  }
  
  const fetchUsers = async (): Promise<User[]> => {
    // Supongamos que aquí se hace la llamada a la API para obtener los usuarios
    // Por simplicidad, aquí solo se retorna un array de usuarios estático
    return [
      {
        id: "662a600bee31a021984f1082",
        name: "Jose Manuel Mesa Marin",
        email: "josemesamarin@gmail.com",
        subscriptionDetails: "premium",
        role: "admin",
      },
      {
        id: "662a600bee31a021984f1083",
        name: "Alejandro García Martínez",
        email: "alejandro.garcia@example.com",
        subscriptionDetails: "basic",
        role: "user",
      },
      {
        id: "662a600bee31a021984f1084",
        name: "Beatriz Fernández González",
        email: "beatriz.fernandez@example.com",
        subscriptionDetails: "premium",
        role: "user",
      },
      {
        id: "662a600bee31a021984f1085",
        name: "Carlos López Rodríguez",
        email: "carlos.lopez@example.com",
        subscriptionDetails: "basic",
        role: "user",
      },
    ];
  };
  
  const displayUsers = async (): Promise<void> => {
    const userList = document.getElementById("user-list");
    if (!userList) {
      console.error("Element #user-list not found");
      return;
    }
    const users = await fetchUsers();
    userList.innerHTML = users
      .map(
        (user) => `
          <div class="user-item" data-userid="${user.id}">
              ${user.name}</div> `
      )
      .join("");
  
    document.querySelectorAll(".user-item").forEach((item) => {
      item.addEventListener("click", function () {
        const userId = this.getAttribute("data-userid");
        if (userId) {
          displayUserDetails(userId);
        } else {
          console.error("User ID attribute not found");
        }
      });
    });
  };
  
  const displayUserDetails = async (userId: string): Promise<void> => {
    const userDetails = document.getElementById("user-details");
    if (!userDetails) {
      console.error("Element #user-details not found");
      return;
    }
    const users = await fetchUsers();
    const user = users.find((user) => user.id === userId);
    if (user) {
      userDetails.innerHTML = `
              <div>Name: ${user.name}</div>
              <div>Email: ${user.email}</div>
              <div>Birthdate: ${user.birthdate}</div>
              <div>Subscription: ${user.subscriptionDetails}</div>
              <div>Role: ${user.role}</div>
          `;
    } else {
      console.error("User not found with ID:", userId);
    }
  };
  
  displayUsers();
  