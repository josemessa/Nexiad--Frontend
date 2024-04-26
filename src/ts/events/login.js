export function loginButtonListener() {
  const loginButton = document.getElementById("login-button");
  if (loginButton) {
    loginButton.addEventListener("click", async function (event) {
      console.log("click");

      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      if (emailInput && passwordInput) {
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;
        if (emailValue && emailInput) {
          console.log(emailValue);
          console.log(passwordValue);
          try {
            const response = await fetch("http://localhost:3000/user/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: emailValue,
                password: passwordValue,
              }),
            });
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error("error", error);
          }
        } else {
          alert("Cumplimenta todos los campos");
        }
      } else {
      }
    });
  }
}
