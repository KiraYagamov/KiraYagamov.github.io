let input_text = document.getElementById("input-text")
let message = document.getElementById("message")

const phrases = ["OK", "Ладно", "Красава", "Рандомная фраза", "Не повезло...", "Введи свое настоящее имя!", "А теперь введи в это же поле код, который придет тебе в уведомлении от банка", "Справедливо..."]

function checkName(){
    if(input_text.value !== ""){
        message.innerHTML = phrases[Math.floor(Math.random() * phrases.length)]
    }
    else{
        message.innerHTML = "Введи имя сказал!"
    }
}
function order(){
    window.location.href = "https://www.youtube.com/watch?v=byYkk8e0ipY"
}