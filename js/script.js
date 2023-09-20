function alfabeto(x){
    let letra = document.querySelector('.pLetra');
    let Imagem = document.querySelector('.pImagem');
    let MaoL = document.querySelector('.pMaoL');
    let MaoP = document.querySelector('.pMaoP');
    let Som = document.querySelector('.Som');

    letra.textContent = x;
    Imagem.setAttribute('src', 'img/'+x+'/img.gif')
    MaoL.setAttribute('src', 'img/'+x+'/Mao_L.gif')
    MaoP.setAttribute('src', 'img/'+x+'/Mao_P.gif')
}

function btnMenu(){
    return
}