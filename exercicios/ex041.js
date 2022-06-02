//Pedra, papel e tesoura

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var escolhaComputador = getRandomIntInclusive(0, 2)
var escolhaPessoa = 2 // 0 = PEDRA, 1 = PAPEL, 2 = TESOURA
var escolhaP = ''
var escolhaC = ''

if(escolhaPessoa == 0){
  escolhaP = 'PEDRA'
}else if(escolhaPessoa == 1){
  escolhaP = 'PAPEL'
}else if(escolhaPessoa = 2){
  escolhaP = 'TESOURA'
}

if(escolhaComputador == 0){
  escolhaC = 'PEDRA'
}else if(escolhaComputador == 1){
  escolhaC = 'PAPEL'
}else if(escolhaComputador = 2){
  escolhaC = 'TESOURA'
}

if(escolhaPessoa <= 2){
  setTimeout(function(){
    console.log(`PEDRA...`)
    setTimeout(function(){
      console.log(`PAPEL...`)
      setTimeout(function(){
        console.log(`TESOURA...`)
          if(escolhaPessoa == escolhaComputador){
            console.log(`O jogo deu empate!`)
          }else if((escolhaPessoa == 0 && escolhaComputador == 1) || (escolhaPessoa == 1 && escolhaComputador == 2) || (escolhaPessoa == 2 && escolhaComputador == 0)){
            console.log(`Eu ganhei!`)
          }else if((escolhaPessoa == 1 && escolhaComputador == 0) || (escolhaPessoa == 2 && escolhaComputador == 1) || (escolhaPessoa == 0 && escolhaComputador == 2)){
            console.log(`Você ganhou!`)
          }
          console.log(`Eu escolhi ${escolhaC} e você, ${escolhaP}`)
        },500);
      },500);
    },1000);

}else{
  console.log(`Escoha um opção valida!`)
}

