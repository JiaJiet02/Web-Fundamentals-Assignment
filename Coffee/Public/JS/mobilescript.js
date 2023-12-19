const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', ()=>{
    navlinks.classList.toggle('mobile-menu')
})

function feedbackmessage() {
    alert("Feedback submitted!");
}

function validateRegistration() {
    const regist = document.forms["regform"];
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(!regist['registerpass'].value.match(lowerCaseLetters)){
      alert ("No lowercase letters in your password!");
      return false;
    }
    if(!regist['registerpass'].value.match(upperCaseLetters)){
      alert ("No uppercase letters in your password!");
      return false;
    }
    if(regist['registerpass'].value.match(numbers) === false){
      alert ("No numbers in your password!");
      return false;
    }
    if(regist['registerpass'].value.length <= 7) {
      alert("Password not long enough!");
      return false;
    }
    if (regist['registerpass'].value != regist['registerpassconfirm'].value) {
      alert("Passwords must be the same!");
      return false;
    }
    alert("Successfully registered as " + regist['registerusername'].value);
    window.location.replace("valid.html");
    window.location.href = "valid.html";
    event.preventDefault()
    return false;

  } 


function validateLogin() {
    var email= document.getElementById("loginemail").value;
    var password= document.getElementById("loginpass").value;

    alert("Successfully logged in!");
    window.location.replace("valid.html");
    window.location.href = "valid.html";
    event.preventDefault()
    return false;
}
