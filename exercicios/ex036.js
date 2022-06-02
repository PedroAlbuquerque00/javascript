//Calculando média 

var n1 = 7
var n2 = 8
var media = (n1 + n2)/2

if(media > 7){
  console.log(`A sua nota final foi ${media}, portando está Aprovado!`)
}else if( media >= 5){
  console.log(`A sua nota final foi ${media}, portanto está de Recuperação!`)
}else{
  console.log(`A sua nota final foi ${media}, portanto está Reprovado!`)
}