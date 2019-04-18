var mensagem = document.querySelector('.login__subtitle');



var botao = document.querySelector('.button.login__button')
botao.addEventListener('click', function (evento) {
    evento.preventDefault();
    var email = document.querySelector('#loginInputEmail');


    if (email.value == "" || email.value.length == 0) {
        mensagem.textContent = 'Digite um email'

    }
    else if (email.value.indexOf('@') <= 0 || email.value.indexOf('@') == email.value.length - 1) {
        mensagem.textContent = 'Não é um e-mail válido'
    }
    else {
        mensagem.textContent = 'O email ' + email.value + ' foi cadastrado com sucesso.'
        var password = document.querySelector('#loginInputPassword');
        if (password.value.length >= 6) {
            if (password.value.indexOf('@') != -1) {
                mensagem.textContent = 'Acesso com sucesso!'
            }
            else {
                mensagem.textContent = 'Não possui @ na senha'
            }
        } else {
            mensagem.textContent = 'Senha menor que 6 caracteres'
        }
    }
})


