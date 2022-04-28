function verificar() {
    var data = new Date()
    var ano = data.getFullYear()//pegar o ano inteiro, 2022, não só 22
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if(fano.value.lenght == 0 || Number(fano.value) > ano){//se o ano digitado for menor que 0 e maior que o ano
        window.alert('Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')//pegando o valor do radio no formulário
        var idade = ano - Number(fano.value)
        var genero = ''//deixando a variável vazia para colocar os dados depois
        var img = document.createElement('img')//criando o elemento imagem
        img.setAttribute('id', 'foto')//setando o id da img para foto

        if(fsex[0].checked){//se o primeiro radio estiver marcado(checked), será homem
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')//colocando a imagem conforme a idade digitada
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked){//se o segundo radio estiver marcado(checked), será mulher
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança!
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if(idade < 50){
                //Adulta
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                //Idosa
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero}, com ${idade} anos!`
        res.appendChild(img)//mandando a imagem aparecer na tela
    }
}