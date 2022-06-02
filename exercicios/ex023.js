//Vereficando quantos A tem na palavra, primeira vez que apareceu e a ultima

var frase = 'Arara Azul'

var fraseSemEspaco = frase.trim().toUpperCase()

var separador = fraseSemEspaco.split('')

var cont = 0

var menor = 100

var maior = 0

var letra = 'a'.toUpperCase()

for(var i = 0; i <= separador.length; i++){
  if(separador[i] == letra){
    cont++
    if(menor > i){
      menor = i
    }
    if(maior < i){
      maior = i
    }
  }
}

console.log(`A letra ${letra} aparece ${cont} vezes na frase`)

console.log(`A primeira vez que o ${letra} apareceu do na posição ${menor + 1}`)

console.log(`A primeira vez que o ${letra} apareceu do na posição ${maior + 1}`)