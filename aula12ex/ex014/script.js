function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = '#5D6A8F'
    }else if(hora <= 18){
        //BOA TARDE!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#8A3F18'
    } else{
        //BOA NOITE!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#1B525B'
    }
}
