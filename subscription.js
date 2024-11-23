document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function(){
        menu.classList.toggle('show');
    });
});

function validateData(){
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const male = document.getElementById("male")
    const female = document.getElementById("female")
    const pass = document.getElementById("password").value
    const confirm = document.getElementById("confirm").value
    const month = document.getElementById("month").value
    const day = document.getElementById("day").value
    const year = document.getElementById("year").value
    const older = document.getElementById("older")
    const agree = document.getElementById("agree")

    console.log(month);
    if(name.length <= 0){
        alert("Please enter your name.")
    }
    else if(email.length <= 0){
        alert("Please enter your email address.")
    }
    else if(!email.endsWith("@gmail.com")){
        alert(`Email must end with "@gmail.com".`)
    }
    else if(pass.length <= 0){
        alert("Please enter your password.")
    }
    else if(confirm != pass){
        alert("Please make sure both passwords are the same.")
    }
    else if(!male.checked && !female.checked){
        alert("Please select a gender.")
    }
    else if(month == "month"){
        alert("Please select your birth month.")
    }
    else if(day == "day"){
        alert("Please select your birth day.")
    }
    else if(year == "year"){
        alert("Please select your birth year.")
    }
    else if(!older.checked){
        alert("You must be over 13 years old to sign up.")
    }
    else if(!agree.checked){
        alert("You must agree to the Terms and Conditions and read the Privacy Policy.")
    }
}

const button = document.getElementById("submitbtn")
button.addEventListener("click", validateData)