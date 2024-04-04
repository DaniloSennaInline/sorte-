//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 100';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag){
let campo = document.querySelector(tag);
campo.innerHTML = Texto;
}
function exibirMensagemInicial(){
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 100');
}

function verificarChute(){
    let chute = document.querySelector('input').value;
   
    let tentativas = 1
   
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    
    if (chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
       
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
       
        exibirTextoNaTela('p','Você descobriu o número secreto ');

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if(chute>numeroSecreto) {
        exibirTextoNaTela('h1','Errado');
        exibirTextoNaTela('p','O número secreto é menor');
        } else {
            exibirTextoNaTela('p','O número secreto é maior');
            exibirTextoNaTela('h1','Errado!');
        }
          limparCampo();
        
    }
    
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100 + 1);
}

function limparCampo(){
    chute = document>querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo()
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementByID('reiniciar').setAttribute('disabled',true)
}