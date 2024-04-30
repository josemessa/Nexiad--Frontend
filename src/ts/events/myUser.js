import { getMyUser } from "../getMyUser"; 

export function getMyUserlistener(){
    const myUser = document.getElementById("my-user");
    if(myUser){
        myUser.addEventListener("click", (event) => {
            getMyUser()
        } 
        
    );
    }
}