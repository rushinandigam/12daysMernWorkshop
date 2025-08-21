let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let gender = document.getElementById("gender");
let form = document.getElementById("formapp");
form.addEventListener("keyup" , ()=>{
    console.log(firstname.value , lastname.value , email.value , gender );
})