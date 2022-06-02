//Simulação de sistema de pagamento!

var valorCompra = 1000
var escolha = 5

console.log(`O valor total da sua compra foi ${valorCompra.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(`FORMAS DE PAGAMENTO`)
console.log(`[ 1 ] à vista no dinheiro/cheque`)
console.log(`[ 2 ] à vista no cartão`)
console.log(`[ 3 ] 2x no cartão`)
console.log(`[ 4 ] 3x ou mais no cartão`)

if(escolha == 1){
  console.log(`Sua escolha foi à vista no dinheiro/cheque`)
  console.log(`A compra no valor de ${valorCompra.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} vai custar ${(valorCompra - (valorCompra / 100 * 10)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
}else if(escolha == 2){
  console.log(`Sua escolha foi à vista no cartão`)
  console.log(`A compra no valor de ${valorCompra.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} vai custar ${(valorCompra - (valorCompra / 100 * 5)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
}else if(escolha == 3){
  console.log(`Sua compra será parcelada em 2x de ${valorCompra / 2}`)
  console.log(`A compra no valor de ${valorCompra.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, sairá com preço normal`)
}else if(escolha == 4){
  console.log(`Escolha a quantidade de parcelas`)
  var parcelas = 8
  console.log(`Sua compra será parcelada em ${parcelas}x de ${((valorCompra + (valorCompra / 100 * 20)) / parcelas).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
  console.log(`A compra no valor de ${valorCompra.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} vai custar ${(valorCompra + (valorCompra / 100 * 20)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
}else{
  console.log(`Digite um valor válido!`)
}