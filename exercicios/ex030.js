//Descobrindo o maior e o menor valor digitado

var primeiroNum = 1
var segundoNum = 2
var terceiroNum = 3

var menor = 100
var maior = 0

if(primeiroNum < menor){
  menor = primeiroNum
}
if(segundoNum < menor){
  menor = segundoNum
}
if(terceiroNum < menor){
  menor = terceiroNum
}

if(primeiroNum > maior){
  maior = primeiroNum
}
if(segundoNum > maior){
  maior = segundoNum
}
if(terceiroNum > maior){
  maior = terceiroNum
}

console.log(`O maior número digitado foi ${maior}`)
console.log(`O menor número digitado foi ${menor}`)