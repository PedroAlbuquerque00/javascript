//Jogo de adivinhação, aonde você precisa acertar o número que o computador "pensou"

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} //Função para sortear um número aleatório

var numEscolhido = 2

var numPC = getRandomIntInclusive(0, 5)

console.log('-=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--')

console.log('- PC Falando - Vou pensar em um número entre 0 e 5, tente adivinhar...')

console.log('-=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--')

console.log(`- Pessoa Falando - Você pensou no número ${numEscolhido}`)

console.log('-=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--')

setTimeout(function(){
  console.log(`- PC Falando - Pensando...`)

  console.log('-=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--')
  
  setTimeout(function(){
  
    if(numEscolhido == numPC){
      console.log(`Você acertou, eu pensei no número ${numPC} mesmo!`)
    }else{
      console.log(`Voce errou, eu pensei no número ${numPC} e não no ${numEscolhido}!`)
    }
  },4000);
},1000);

