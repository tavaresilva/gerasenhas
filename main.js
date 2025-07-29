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
const forcaSenha = document.querySelector('.forca-senha'); // Assuming the element exists

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto += letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto += letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto += numeros;
    }
    if (checkbox[3].checked) {
        alfabeto += simbolos;
    }

    // Calculate the entropy based on the current alphabet
    const entropia = tamanhoSenha * Math.log2(alfabeto.length);
    classificaSenha(entropia);

    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[numeroAleatorio];
    }

    campoSenha.value = senha;
}

function classificaSenha(entropia) {
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = (Math.pow(2, entropia) / (100e6 * 60 * 60 * 24)).toFixed(2);

    // Assuming `forcaSenha` is an element that visualizes the password strength
    forcaSenha.classList.remove('fraca', 'media', 'forte');

    if (entropia > 11) {
        forcaSenha.classList.add('forte');
    } else if (entropia > 5 && entropia <= 11) {
        forcaSenha.classList.add('media');
    } else {
        forcaSenha.classList.add('fraca');
    }
}
