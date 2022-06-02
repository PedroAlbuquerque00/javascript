//Analisando números

var num = 4213

var numStr = String(num)

console.log(`Analisando o número ${num}...`)



for(var i = 1; i <= 4; i++){
  if(numStr[numStr.length - i] === undefined){
    if(i == 1){
      console.log(`Unidade: 0`)
    }
    else if(i == 2){
      console.log(`Dezena: 0`)
    }
    else if(i == 3){
      console.log(`Centena: 0`)
    }else{
      console.log(`Mihar: 0`)
    }
  }else{
    if(i == 1){
      console.log(`Unidade: ${(numStr[numStr.length - 1])}`)
    }
    else if(i == 2){
      console.log(`Dezena: ${numStr[numStr.length - 2]}`)
    }
    else if(i == 3){
      console.log(`Centena: ${numStr[numStr.length - 3]}`)
    }else{
      console.log(`Mihar: ${numStr[numStr.length - 4]}`)
    }
  }
}