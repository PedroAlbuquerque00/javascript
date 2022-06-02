//Validando se a primeira palavra da cidade é santo, se for retornará true, se não, false

var cidade = '        SaNtO Inácio'

var cidadeSemEspaco = cidade.trim() //O metodo trim() remove espaços desnecessários na string

var separador = cidadeSemEspaco.split(' ');

var cidadeTrue = separador[0].toLowerCase() //O lowercase serve para deixar a string padronizada, para não dar erro depois

if(cidadeTrue == 'santo'){
  console.log('true')
}else{
  console.log('false')
}
