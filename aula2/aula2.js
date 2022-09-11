const INPUT_ID = "value"
const RESULT_ID = "convertValue"

function Converter() {  
    var inputValue = document.getElementById(INPUT_ID).value 
    var convertValue = parseFloat(inputValue * 5.40)
    console.log(convertValue)
    var resultValue = document.getElementById(RESULT_ID)

    resultValue.innerHTML = "O valor em real é de : " + convertValue.toFixed(2)
}


