const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', ()=>{
    navlinks.classList.toggle('mobile-menu')
})

function register() {
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;

    alert("Registered successfully!");
}

function login() {
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;

    alert("Login successful!");
}

function message() {
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;

    alert("Submitted successfully!");
}
