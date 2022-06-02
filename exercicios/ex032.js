//Descobrindo se as retas a seguir formam um triangulo, uma reta precisa se menor do que a soma das outras duas

var r1 = 3
var r2 = 3
var r3 = 5

if(r1 < r2 + r3 && r2 < r1 + r3 && r3 < r2 + r1){
  console.log('As retas formam um triangulo!')
}else{
  console.log('As retas não formam um triangulo!')
}