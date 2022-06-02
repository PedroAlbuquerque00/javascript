//Sorteando um nome na lista

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var primeiroAluno = 'Paulo'
var segundoAluno = 'Ana'
var terceiroAluno = 'Pedro'
var quartoAluno = 'Maria'

if(getRandomIntInclusive(1, 4) == 1){
  console.log(`O aluno escolhido foi ${primeiroAluno}`)
}else if(getRandomIntInclusive(1, 4) == 2){
  console.log(`O aluno escolhido foi ${segundoAluno}`)
}else if(getRandomIntInclusive(1, 4) == 3){
  console.log(`O aluno escolhido foi ${terceiroAluno}`)
}else{
  console.log(`O aluno escolhido foi ${quartoAluno}`)
}
