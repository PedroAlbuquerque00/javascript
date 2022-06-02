//Calculando o preço da viagem de acordo com a distância

var distancia = 1000
var preco = 0

if(distancia <= 200){
  preco = distancia * 0.50
}else{
  preco = distancia * 0.45
}

console.log(`O preço da viagem ficou ${preco.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)