const INPUT_ID = "value"
const RESULT_ID = "result"
var randomNumber = parseInt(Math.random() * 11)
var attempt = 3

function tryToHit() {
    var inputNumber = parseInt(document.getElementById(INPUT_ID).value)
    var resultElement = document.getElementById(RESULT_ID)
    
    
    if(attempt == 0){
        resultElement.innerHTML = "Suas tentativas acabaram! O numero era:" + randomNumber
    }else{
        if(inputNumber == randomNumber){
            resultElement.innerHTML = "VOCÊ ACERTOU!!!"
        }else if(inputNumber<0 || inputNumber>10){
            resultElement.innerHTML = "Você deve digitar um numero de 0 a 10!!!"
        }else{
            attempt--
            if(inputNumber> randomNumber){
                resultElement.innerHTML = "Você errou!! O número é menor que o digitado!"
            }else{
                resultElement.innerHTML = "Você errou!! O número é maior que o digitado!"
            }
        }
    
    } 
}



