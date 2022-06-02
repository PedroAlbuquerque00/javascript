//Radar de velocidade, se for maior que 80KM/H vai ser multado

var velocidade = 50

console.log(`Qual a velocidade atual do carro? ${velocidade}`)

if(velocidade > 80){
  console.log(`Você foi MULTADO por excesso de velocidade! Pague a multa de R$300,00`)
}else{
  console.log(`Tenha um bom dia! Dirija com segurança!`)
}