let password = document.getElementById("password");
let button = document.getElementById("button");

button.addEventListener("click" , showPassword);

function showPassword(){
    if (password.type === 'password') {
        password.type = 'text';
        button.textContent = 'Hide Password';
      } else {
        password.type = 'password';
        button.textContent = 'Show Password';
      }
}