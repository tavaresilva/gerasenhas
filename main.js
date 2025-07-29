const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function classificaSenha() {
    let entropia = tamanhoSenha * Math.log2(alfabeto.length);
    console.log(entropia);
}
function diminuiTamanho(){

    if (tamanhoSenha > 1){
   // tamanhoSenha = tamanhoSenha-1;
     tamanhoSenha--;
}
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){

     if (tamanhoSenha < 20){
   // tamanhoSenha = tamanhoSenha+1;
     tamanhoSenha++;
}
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

console.log(botoes)


for (i=0; i < checkbox.length;i++){
  checkbox[i].onclick = geraSenha;
}

geraSenha();

function geraSenha() {
    let alfabeto = '';
    classificaSenha(alfabeto.length);
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha();
}
function classificaSenha(tamanhoAlfabeto){
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);
    forcaSenha.classList.remove('fraca','media','forte');
    
    if (entropia > 11){
        forcaSenha.classList.add('forte');
    } else if (entropia > 5 && entropia < 12 ) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 5){
        forcaSenha.classList.add('fraca');
    }
}
