function contar(){
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'//se não colocar nenhum dado, vai dar erro
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)//Transformando a variável em número
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido, considerando PASSO 1')
            p = 1
        }

        if (i < f){ //Se o i for maior que f, faz esse comando
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} &#x1F449`
            }
        } else { //Se for menor, faz esse
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} &#x1F449`
            }
        }
        res.innerHTML += `&#x1F3C1`
        }
        window.setInterval(contar(), 1000)
}