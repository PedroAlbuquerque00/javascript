//Calculando o aumento de salário

var salario = 5000
var aumento = 0
var salarioA = 0

if(salario <= 1250){
  aumento = 15
}else{
  aumento = 10
}

salarioA = salario + (salario / 100 * aumento)

console.log(`O salario antes era ${salario.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} e depois do aumento ficou, ${salarioA.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)