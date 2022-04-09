const loginForm = document.getElementById("loginForm");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");

const expectedEmail = 'youremail@binar.co.id';
const expectedPassword = 'maulogindong';

loginForm.addEventListener("click", () => {
    
    const email = inputEmail.value;
    const password = inputPassword.value;

    if(email == expectedEmail && password == expectedPassword) {
        location.href = './game.html';
    } else {
        alert("email or password is wrong, try again!");
    }
});