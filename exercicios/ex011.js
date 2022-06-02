//Calculando o valor do aluguel do carro, sendo R$60 a diária, e R$0,15 por KM rodado.

var dias = 8
var kmRodado = 720
var valorDia = dias * 60
var valorKM = kmRodado * 0.15
var valorTotal = valorDia + valorKM

console.log(`O total a pagar é ${valorTotal}`)
