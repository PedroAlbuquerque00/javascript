function gerar(){
  var numero = document.querySelector('#txtn')
  var res = document.querySelector('#tabuada')
  var n = Number(numero.value)

  if(numero.value.length == 0){
    window.alert('Digite um número!')
  }
  res.innerHTML = ''
  for(var i = 1; i <= 10; i++){
    var item = document.createElement('option')
    item.text = `${n} x ${i} = ${n*i}`
    item.value = `tab${i}`
    res.appendChild(item)
  }
}