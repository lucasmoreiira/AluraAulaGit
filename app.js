let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', "Acertou");
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', "Chute foi maior que o numero secreto");
            
        }else{
            exibirTextoNaTela('h1',"Chute foi menor que o numero secreto");
        }
        tentativas= tentativas+1;
        limparCampo();
    }
}

function gerarNumeroSecreto(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite+1);
    let quantidadeDeElementos = listaNumerosSorteados.length;
    if(quantidadeDeElementos == numeroLimite){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute= document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    let tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'JOGO DO NUMERO SECRETO');
    exibirTextoNaTela('p', 'Digite um numero de 1 a 10:');
}

mensagemInicial();