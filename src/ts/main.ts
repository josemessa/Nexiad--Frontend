import { loginPage } from "./login";
import { adminPage } from "./adminPage";
import { userPage } from "./userPage";




// loginPage()



const token = localStorage.getItem("token");
const name= localStorage.getItem("name")
const surname= localStorage.getItem("surname")

if (token !== null) {
  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    console.log(decodedToken); // Mostrar el payload decodificado
 
    if (decodedToken.role === "admin") {
      adminPage(name, surname);
    } else if (decodedToken.role === "user") {
      userPage(name, surname);
    }
  } catch (error) {
    // El token no es válido o ha ocurrido un error al decodificarlo
    console.error("Error decoding token:", error);
    loginPage(); // Redirigir a la página de inicio de sesión
  }
} else {
  loginPage(); // Redirigir a la página de inicio de sesión si no hay token
}



