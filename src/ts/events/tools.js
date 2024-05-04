import { getAllUsers } from "../getAllUsers"; 
import {  userRegisterByAdmin } from "../user-register"; 

export function getAllUserslistener(){
    const getUsers = document.getElementById("get-all-users");

    if(getUsers){
        getUsers.addEventListener("click", (event) => {
            getAllUsers()
        } 
        
    );
    }
}

export function addUserByAdminListener(){
    const getUsers = document.getElementById("add-user-by-admin");

    if(getUsers){
        getUsers.addEventListener("click", (event) => {
            userRegisterByAdmin()
        } 
        
    );
    }
}