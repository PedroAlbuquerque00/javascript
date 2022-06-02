//Simulando um alistamento militar

var anoNascimento = 2017

var anoAtual = new Date().getFullYear()
var idade = anoAtual - anoNascimento
var faltamAnos = 18 - idade
var sobramAnos = idade - 18


if(idade == 18){
  console.log(`Você tem ${idade} anos, portanto deve se alistar imediatamente!`)
}else if(idade < 18){
  console.log(`Você ainda não está na idade para se alistar, faltam ${faltamAnos} anos`)
  console.log(`Você vai se alistar no ano de ${anoAtual + faltamAnos}`)
}else{
  console.log(`Você deveria ter se alistado há ${sobramAnos} anos`)
  console.log(`Seu alistamento foi em ${anoAtual - sobramAnos}`)
}