
import { loginPage } from "./login";
import { adminPage } from "./adminPage";
import { userPage } from "./userPage";
loginPage()
// const token= localStorage.getItem("token")
// console.log()
//     if(!token){
//         loginPage()}
//     else if(token){
//         const userLoged= JSON.parse(token)
//         console.log(userLoged)
//     if(userLoged.role === "admin"){
//         adminPage(userLoged.firstname, userLoged.surname)
//     } else if(userLoged.role === "user"){
//         userPage(userLoged.firstname, userLoged.surname)
//     }
//     }else{
//         loginPage()
//     }