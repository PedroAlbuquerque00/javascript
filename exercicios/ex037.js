//Classificação de Alunos

var anoNascimento = 1994
var anoAtual = new Date().getFullYear()
var idade = anoAtual - anoNascimento

if(idade <= 9){
  console.log(`O aluno tem ${idade} anos`)
  console.log(`Classificação - Mirim`)
}else if(idade <= 14){
  console.log(`O aluno tem ${idade} anos`)
  console.log(`Classificação - Infantil`)
}else if(idade <= 19){
  console.log(`O aluno tem ${idade} anos`)
  console.log(`Classificação - Junior`)
}else if(idade <= 25){
  console.log(`O aluno tem ${idade} anos`)
  console.log(`Classificação - Sênior`)
}else{
  console.log(`O aluno tem ${idade} anos`)
  console.log(`Classificação - Master`)
}
