let numField = document.getElementById("numField")
let timeField = document.getElementById("timeField")
let cvvField = document.getElementById("cvvField")
let enterData = document.getElementById("enterData")

const messages = ["Введи данные от карточки пока я не сломал этот стол!", "Пожалуйста, введи данные!", "Я с тобой сюсюкаться не буду!", "Вводи говорю!", "Я просто хочу украсть твои деньги..."]



function login(){
    if(numField.value !== "" && timeField.value !== "" && cvvField.value !== ""){
        window.location.href = "public/site.html"
    }
    else{
        enterData.innerHTML = messages[Math.floor(Math.random() * messages.length)]
    }
}