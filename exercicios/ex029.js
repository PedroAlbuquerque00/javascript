//Verificando se o ano escolhido é bissexto
//Ano bissexto acontece a cada 4 anos, exceto nos anos múltiplos de 100 que não são múltiplos de 400

const data = new Date()

const anoAtual = data.getFullYear()

var ano = 2004

if(ano == 0){//Se caso o usuário colocar 0, será o ano atual
  ano = anoAtual
}

if(ano % 4 != 0  || ( ano % 100 == 0 && ano % 400 != 0)){
  console.log(`O ano escolhido não é Bissexto!`)
}else{
  console.log(`O ano escolhido é Bissexto!`)
}
