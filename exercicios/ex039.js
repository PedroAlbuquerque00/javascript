//Calculando IMC

var peso = 85
var altura = 1.73
var imc = peso / (altura) ** 2


console.log(`O seu IMC é ${imc.toFixed(1)}`)

if(imc <= 18.5){
  console.log(`Você está abaixo do peso ideal!`)
}else if(imc <= 25){
  console.log(`Você está no peso ideal!`)
}else if(imc <= 30){
  console.log(`Você está com sobrepeso!`)
}else if(imc <= 40){
  console.log(`Você está com obesidade!`)
}else if(imc > 40){
  console.log(`Você está com obesidade mórbita, CUIDADO!`)
}