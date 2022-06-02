//Analisando o nome

var nome = 'Pedro Henrique Rodrigues De Albuquerque'

var primeiraPalavra = nome.split(' ')[0]; //O metodo split serve para separar palavras de uma string
var segundaPalavra = nome.split(' ')[1];
var terceiraPalavra = nome.split(' ')[2];
var quartaPalavra = nome.split(' ')[3];
var quintaPalavra = nome.split(' ')[4];

console.log(`O seu nome é ${nome}`)

console.log(`Anlisando seu nome...`)

console.log(`Seu nome em maiúsculas é ${nome.toUpperCase()}`)

console.log(`Seu nome em minúsculas é ${nome.toLowerCase()}`)

console.log(`Seu nome tem ao todo ${primeiraPalavra.length + segundaPalavra.length + terceiraPalavra.length + quartaPalavra.length + quintaPalavra.length} letras`)

console.log(`Seu primeiro nome é ${primeiraPalavra} e ele tem ${primeiraPalavra.length} letras`)

