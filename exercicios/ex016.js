//Sorteando um nome na lista de outro jeito do ex015

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var alunos = ['Paulo', 'Ana', 'Pedro', 'Maria']

console.log(`O aluno escolhido foi ${alunos[getRandomIntInclusive(0, 3)]}`)