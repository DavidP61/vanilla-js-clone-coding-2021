const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";

function loginBtnClick (event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem("username", username);
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
   
} 

loginForm.addEventListener("submit", loginBtnClick);