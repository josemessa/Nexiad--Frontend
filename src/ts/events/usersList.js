import { getAllUsers } from "../getAllUsers"; 


export function getAllUserslistener(){
    const getUsers = document.getElementById("get-all-users");

    if(getUsers){
        getUsers.addEventListener("click", getAllUsers());
    }
}