// let titulo = document.querySelector('h1');
// titulo.innerHTML = "Jogo do Número Secreto";

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = "Insira um numero de 1 a 10";
let numeroAleatorio = gerarNumeroSecreto();
let tentativa = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial(){
    //fazendo a chamada da função
    exibirTextoNaTela('h1','Jogo do Numero Secreto');
    exibirTextoNaTela('p','insira um numero de 1 a 10');
}
exibirTextoInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio){
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você Acertou O Numero Secreto com ${tentativa} tentativas`;
        exibirTextoNaTela('h1','Parabéns');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        alterarImagem('img','./img/oficial.png')
    } else {
        if (chute > numeroAleatorio){
            exibirTextoNaTela ('p','O Numero Secreto É Menor');
        } else {
            exibirTextoNaTela('p','O Numero Secreto É Maior');
        }
    }
    tentativa++
    limparCampo();
}

function gerarNumeroSecreto(){
    return parseInt(Math.random()*10+1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroSecreto();
    limparCampo();
    tentativa = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    alterarImagem('img','./img/ia.png')
}

function alterarImagem(tag, caminhoImagem){
    document.getElementById(tag).src = caminhoImagem;
}