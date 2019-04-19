// Adivinhe o numero

//Gerar número aleatório entre 0 e 10
var numeroOculto = Math.round(Math.random() * 10);
var acertou = false;

var chute;

while (acertou == false) {
    chute = parseInt(prompt('Tente adivinhar o número'));
    if (chute == numeroOculto) {
        acertou = true;
        alert('Parabéns, você acertou!');
    }
}

//Contar de 10 a 0

var numero = 0;

while (numero <= 10) {

    console.log(numero);
    numero++;

}

// Contar de 0 a 10
var numero = 10;

while (numero >= 0) {

    console.log(numero);
    numero--;
}