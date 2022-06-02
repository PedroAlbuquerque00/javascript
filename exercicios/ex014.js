//Calculando seno, cosseno e tangente

var graus = 30

var seno = 0
var cosseno = 0
var tangente = 0

if(graus == 30){
  seno = 1/2
  cosseno = (3 ** (1/2)) / 2
  tangente = (3 ** (1/2)) / 3
}


if(graus == 45){
  seno = (2 ** (1/2)) / 2
  cosseno = (2 ** (1/2)) / 2
  tangente = 1
}

if(graus == 60){
  seno = (3 ** (1/2)) / 2
  cosseno = 1/2
  tangente = 3 ** (1/2)
}

console.log(`o ângulo de ${graus} tem o seno de ${seno}`)
console.log(`o ângulo de ${graus} tem o cosseno de ${cosseno}`)
console.log(`o ângulo de ${graus} tem o tangente de ${tangente}`)