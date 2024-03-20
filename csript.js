let name = "Alex"
let balance = 10000
let account = 7777


let namePrompt = prompt("Как вас зовут?")

if (namePrompt == name) {
    let accPrompt = prompt("номер счета?")


    if (accPrompt == account) {
        let money = prompt("Сколько обналичить?")

        if (money <= balance ) {
            console.log(alert("Снято:" + money +  " , Осталось: " + (balance - money)));
        } else {
            alert("Недостаточно средств")
        }
    } else {
        alert("Не найдено")
    }
} else {
    alert("Пользователь не найден")
}