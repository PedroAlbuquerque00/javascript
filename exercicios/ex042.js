//Contador

var cont = 10
var interval = setInterval(contador, 1000)


function contador(){
  if(cont > 0){
    console.log(cont)
    cont--
  }else{
    console.log(`BUM! BUM! POOW!`)
    clearInterval(interval)
  }
}