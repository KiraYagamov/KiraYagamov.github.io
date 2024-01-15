let numField = document.getElementById("numField")
let timeField = document.getElementById("timeField")
let cvvField = document.getElementById("cvvField")
let enterData = document.getElementById("enterData")



function login(){
    if(numField.value !== "" && timeField.value !== "" && cvvField.value !== ""){
        window.location.href = "public/site.html"
    }
    else{
        enterData.innerHTML = "Вы не ввели данные!"
    }
}