//Verificando se a pessoa tem Albuquerque no nome

var nome = 'Pedro Henrique Rodrigues De Albuquerque'

var nomeSemEspaco = nome.trim().toLowerCase()

var separador = nomeSemEspaco.split(' ')

function verdadeiro(){
  for(var i = 0; i <= separador.length; i++){
    if(separador[i] == 'albuquerque'){
      return true
    }
  }
}

if(verdadeiro()){
  console.log(`Seu nome tem Albuquerque`)
}else{
  console.log(`Seu nome não tem Albuquerque`)
}