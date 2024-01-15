let input_text = document.getElementById("input-text")
let message = document.getElementById("message")

function checkName(){
    if(input_text.value !== ""){
        if(input_text.value === "Светлана" || input_text.value === "Рома"){
            message.innerHTML = "Иди нахуй"
        }
        else{
            message.innerHTML = "Красава"
        }
    }
    else{
        message.innerHTML = "Введи имя!"
    }
}
function order(){
    window.location.href = "https://www.youtube.com/watch?v=byYkk8e0ipY"
}