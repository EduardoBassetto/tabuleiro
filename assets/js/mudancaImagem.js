//início algoritmo para variar imagem de tabuleiro
var indiceImagemTabuleiro = 0;
const imagensTabuleiro = document.querySelectorAll(".imagemTabuleiro");
const buttonLeft = document.querySelector(".buttonLeft");
const buttonRight = document.querySelector(".buttonRight");
buttonLeft.addEventListener("click", left)
buttonRight.addEventListener("click", right)

function left(){
    if(indiceImagemTabuleiro === 0){
        return null
    }
    imagensTabuleiro[indiceImagemTabuleiro].classList.add("displayNone")
    indiceImagemTabuleiro -= 1
    imagensTabuleiro[indiceImagemTabuleiro].classList.remove("displayNone")


    console.log("left")
}

function right(){
    if(indiceImagemTabuleiro == imagensTabuleiro.length - 1){
        return null
    }
    imagensTabuleiro[indiceImagemTabuleiro].classList.add("displayNone")
    indiceImagemTabuleiro += 1
    imagensTabuleiro[indiceImagemTabuleiro].classList.remove("displayNone")


    console.log("right")
    console.log(indiceImagemTabuleiro)
}





/*
var temporizadorIndiceImagem = imagensTabuleiro[indiceImagemTabuleiro]
temporizadorIndiceImagem.classList.remove("displayNone");

const tempo = setInterval(temporizadorImagem, 2000);

function temporizadorImagem(){
temporizadorIndiceImagem.classList.add("displayNone");
indiceImagemTabuleiro += 1;
temporizadorIndiceImagem = imagensTabuleiro[indiceImagemTabuleiro]
temporizadorIndiceImagem.classList.remove("displayNone");
if (indiceImagemTabuleiro === 5){
    indiceImagemTabuleiro = -1 ;
}
}*/