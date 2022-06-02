//Identificando triângulos

var r1 = 10
var r2 = 12
var r3 = 11

if(r1 < r2 + r3 && r2 < r1 + r3 && r3 < r1 + r2){
  console.log(`As retas formam um tringulo!`)
  if(r1 == r2 && r1 == r3 && r2 == r1 && r2 == r3 && r3 == r1 && r3 == r1){
    console.log(`O triangulo é Equilátero`)
  }else if(r1 != r2 && r1 != r3 && r2 != r1 && r2 != r3 && r3 != r1 && r3 != r1){
    console.log(`O triangulo é Escaleno!`)
  }else if(r1 == r2 != r3 || r1 == r3 != r2 || r2 == r1 != r3 || r2 == r3 != r1 || r3 == r1 != r2 || r3 == r2 != r1){
    console.log(`O triangulo é Isosceles`)
  }
}else{
  console.log(`As retas não formam um tringulo!`)
}