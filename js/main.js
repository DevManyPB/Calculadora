

/// CAMBIO DE COLOR ///

const main = document.getElementById("main")
const check = document.getElementById("check")

check.addEventListener("change", function() {
    if (this.checked) {
        main.setAttribute("class", "main-oscuro")
    } else {
        main.setAttribute("class", "main")
    }
})

/// SUMA ///
const button = document.getElementById("cal")
const result = document.getElementById("result")

button.addEventListener("click", function(){
    var number1 = parseInt(document.getElementById("number1").value)
    var number2 = parseInt(document.getElementById("number2").value)

    var suma = number1 + number2

    result.innerText = `Tu resultado es ${suma}`

})