///Sistema para aprovação de emprestimo, com base no salário, anos de pagamento, valor da casa e etc...
//As parcelas não podem ser maior que 30% do sálario

var valorCasa = 100000
var salario = 3000
var anosPagamento = 10
var valorMensal = valorCasa / (anosPagamento * 12)

if(valorMensal > (salario / 100 * 30)){
  console.log(`Emprestimo não concedido!`)
}else{
  console.log(`Emprestimo Concedido com sucesso!`)
}