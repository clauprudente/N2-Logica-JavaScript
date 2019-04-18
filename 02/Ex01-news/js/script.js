var mensagem = document.querySelector('.mensagem');



var botao = document.querySelector('.button.news__button')
botao.addEventListener('click', function (evento) {
    evento.preventDefault();
    var email = document.querySelector('#newsInputEmail');


    if (email.value == "" || email.value.length == 0) {
        mensagem.textContent = 'Digite um email'

    }
    else if (email.value.indexOf('@') <= 0 || email.value.indexOf('@') == email.value.length - 1) {
        mensagem.textContent = 'Não é um e-mail válido'
    }
    else {
        mensagem.textContent = 'O email ' + email.value + ' foi cadastrado com sucesso.'
    }
    console.log(email.value.length + ('     ') + email.value.indexOf('@'))
})


