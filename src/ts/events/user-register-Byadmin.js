

const token = localStorage.getItem("token");

export function registerSubmitListener() {
    const submit = document.getElementById("register-submit");
    if (submit) {
        submit.addEventListener("click", async (event) => {
            event.preventDefault();
            
            const firstnameValue = document.getElementById("firstname").value;
            const surnameValue = document.getElementById("surname").value;
            const adressValue = document.getElementById("adress").value;
            const cityValue = document.getElementById("city").value;
            const phoneValue = document.getElementById("phone").value;
            const emailValue = document.getElementById("email").value;
            const birthdateValue = document.getElementById("birthdate").value;
            const passwordValue = document.getElementById("password").value;
            const roleValue = document.getElementById("rol").value;
            
            if (firstnameValue && surnameValue && emailValue && phoneValue && passwordValue) {
                try {
                    const response = await fetch("http://localhost:3000/user/signup", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "auth-token": token,
                        },
                        body: JSON.stringify({
                            firstname: firstnameValue,
                            surname: surnameValue,
                            adress: adressValue,
                            city: cityValue,
                            phone: phoneValue,
                            email: emailValue,
                            password: passwordValue,
                            birthdate: birthdateValue,
                            role: roleValue,
                        }),
                    });
                    
                    if (response.ok) {
                        const body = document.querySelector('body');
                        const confirmationElement = document.createElement("div");
                        confirmationElement.id = "confirmation";
                        confirmationElement.innerHTML = `
                            <p>Usuario creado correctamente</p>
                            <img id="logo-confirmation" src="/nexiatransp.png" />
                        `;
                        body.appendChild(confirmationElement);

                        setTimeout(() => {
                            if (confirmationElement) {
                                confirmationElement.remove();
                            }
                            getAllUsers();
                        }, 5000);
                    } else {
                        const errorData = await response.json();
                        alert(`Error: ${errorData.message}`);
                    }
                } catch (error) {
                    alert(`Error: ${error.message}`);
                }
            } else {
                alert("Por favor, completa todos los datos del formulario.");
            }
        });
    }
}
