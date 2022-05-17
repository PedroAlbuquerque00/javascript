let amigo = {
  nome: 'Pedro', 
  peso: '85.5', 
  sexo: 'M',
  engordar(p = 0){
    console.log('engordou')
    this.peso += p
  }
}
amigo.engordar(2)
console.log(`O ${amigo.nome}, pesa ${amigo.peso}KG`)