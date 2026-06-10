const form = document.getElementById("loginForm");
const message = document.getElementById("message");

const password =
document.getElementById("password");

const showPassword =
document.getElementById("showPassword");

showPassword.addEventListener("change", function(){

    if(showPassword.checked){
        password.type = "text";
    }
    else{
        password.type = "password";
    }

});

form.addEventListener("submit", function(event){

    event.preventDefault();

    let email =
    document.getElementById("email").value.trim();

    let pass =
    document.getElementById("password").value.trim();

    if(email === ""){
        message.innerHTML =
        "Email is required";
        message.style.color = "red";
        return;
    }

    if(!email.includes("@")){
        message.innerHTML =
        "Enter valid email";
        message.style.color = "red";
        return;
    }

    if(pass === ""){
        message.innerHTML =
        "Password is required";
        message.style.color = "red";
        return;
    }

    if(pass.length < 6){
        message.innerHTML =
        "Password must be at least 6 characters";
        message.style.color = "red";
        return;
    }

    message.innerHTML =
    "Login Successful ";

    message.style.color = "green";

    setTimeout(function(){

        window.location.href =
        "hello.html";

    },1000);

});