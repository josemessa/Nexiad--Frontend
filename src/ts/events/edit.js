import { patchUserById } from "../patchUserById"

export function patchUserByIdListener(idUser){
    const editUser = document.getElementById("edit-admin-bottom");
    const userId = idUser;

    if(editUser){
        editUser.addEventListener("click", (event) => {
            patchUserById(userId);
        } 
        
    );
    }
}