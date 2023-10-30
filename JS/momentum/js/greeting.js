const loginForm = document.querySelector("#login-form");
const loginName = document.querySelector("#login-form input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";

function loginSubmit(event) {
    event.preventDefault();    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginName.value;
    localStorage.setItem("username", username);
    paintGreeting(username);
}

const savedUsername = localStorage.getItem("username");

function paintGreeting (username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintGreeting(savedUsername);
}


