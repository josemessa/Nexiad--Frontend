import { loginPage } from "./login";
import { adminPage } from "./adminPage";
import { userPage } from "./userPage";

const token = localStorage.getItem("token");
const name = localStorage.getItem("name");
const surname = localStorage.getItem("surname");

if (token !== null) {
  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    console.log(decodedToken);

    if (decodedToken.role === "admin") {
      adminPage(name, surname);
    } else if (decodedToken.role === "user") {
      userPage(name, surname);
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    loginPage();
  }
} else {
  loginPage();
}
