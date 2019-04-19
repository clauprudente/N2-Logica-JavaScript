// Coletar o elemento botão

var botao = document.querySelector('.transacao__button');

botao.addEventListener('click', function (evento) {
    evento.preventDefault();

    //Inputs (elementos no DOM)

    var inputTransacao = document.querySelector('#transacaoInputName');
    var inputValor = document.querySelector('#transacaoInputMoney');
    var inputData = document.querySelector('#transacaoInputDate');

    //Valores no Input

    var valorTransacao = inputTransacao.value;
    var valorValor = inputValor.value;
    var valorData = inputData.value;

    var linha = document.createElement('tr');

    var colunaTransacao = document.createElement('td');
    colunaTransacao.textContent = valorTransacao;

    linha.appendChild(colunaTransacao);

    var colunaValor = document.createElement('td');
    colunaValor.textContent = valorValor;

    linha.appendChild(colunaValor);

    var colunaData = document.createElement('td');
    colunaData.textContent = valorData;

    linha.appendChild(colunaData);

    var extratoBody = document.querySelector('.extrato__body');

    extratoBody.appendChild(linha);

    document.querySelector('.transacao__form').reset();

    if (valorValor <= 10) {
        linha.style.backgroundColor = 'green';
    }
    else if (valorValor > 10 && valorValor <= 50) {
        linha.style.backgroundColor = 'orange';
    } else if (valorValor > 50) {
        linha.style.backgroundColor = 'red';
    }
});

