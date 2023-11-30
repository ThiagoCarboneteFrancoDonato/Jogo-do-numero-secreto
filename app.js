let listaDeNumerosSorteados = [];
let numeroLimite = parseInt(Math.random() * 10 + 1);
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
};

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10!');
};

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'acertou');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTetativas = `Você descobriu o número secreto com ${tentativa} tentativas!`;
        exibirTextoNaTela('p', mensagemTetativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número informado é maior que o número secreto!');
        }else{
            exibirTextoNaTela('p', 'O número informado é menor que o número secreto!');
        };
        tentativa++
        limparCampo();
    };
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;
    
    if(quantidadeDeElementosNalista == numeroEscolhido){
        listaDeNumerosSorteados = [];
    };

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    };
};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
};
