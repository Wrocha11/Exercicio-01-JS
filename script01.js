
let firtsNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

firtsNumber = Number(firtsNumber)
secondNumber = Number(secondNumber)

const sum = firtsNumber + secondNumber
const subtract = firtsNumber - secondNumber
const multiply = firtsNumber * secondNumber
const divide = firtsNumber / secondNumber
const rest = firtsNumber % secondNumber

alert("A soma dos dois números: " + sum)
alert("A subtração dos dois números: " + subtract)
alert("A multiplicação dos dois números: " + multiply)
alert("A divisão dos dois números: " + divide)
alert("O resto da divisão dos dois números: " + rest)

let result = sum === 0 || sum === 1 ? 'pares' : 'ímpares'
let total = result
alert(`A soma dos dois números inseridos é ${total}`)

if (firtsNumber == secondNumber) {
  alert("Os números inseridos são iguais!")
} else {
  alert("Os números inseridos são diferentes!")
}
