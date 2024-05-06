import { getAllUsers } from "../getAllUsers"; 
import {  userRegisterByAdmin } from "../user-register";
import { getMyUser } from "../getMyUser"; 
import { disableAdminAccess } from "../disableAdminAccess";

export function getAllUserslistener(){
    const getUsers = document.getElementById("get-all-users");

    if(getUsers){
        getUsers.addEventListener("click", (event) => {
            getAllUsers()
        } 
        
    );
    }
}

export function getMyUserlistener(){
    const myUser = document.getElementById("my-user");
    if(myUser){
        myUser.addEventListener("click", (event) => {
            getMyUser()
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

export function disableAdminAccessListener(idUser){
    const disableAdminBottom = document.getElementById("disable-admin-bottom");
    const userId = idUser;

    if(disableAdminBottom){
        disableAdminBottom.addEventListener("click", (event) => {
            console.log(userId);
            disableAdminAccess(userId);
        })
    }
}