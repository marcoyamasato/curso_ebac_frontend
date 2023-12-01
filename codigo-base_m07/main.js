const form = document.getElementById("form-deposito")

const nome = document.getElementById('nome-beneficiario');


function valida_nome(nome){
    const nome_completo = nome.split(' ')
    return nome_completo.length >= 2;
}

form.addEventListener('submit', function(e) {

    e.preventDefault(); /*fazer com que o comportamento padrão não ocorra. Que é: Recarregar a página*/

    const conta = document.getElementById('conta');
    const valor = document.getElementById('valor');
    const mensagem_sucesso =  `Deposito concluído. Conta ${conta.value} - Beneficiário ${nome.value} - valor R$${valor.value}`;



    if(valida_nome(nome.value)){

        const campo_msg_retorno = document.querySelector('.p-msg-retorno') 
        campo_msg_retorno.innerHTML = mensagem_sucesso;
        campo_msg_retorno.style.display = 'block'

        conta.value = ''
        valor.value = ''
        nome.value = ''
    }
    else{

    }

})

nome.addEventListener('keyup', function(e){ /* A opção "keyup" faz com que seja identifica cada tecla apertada*/
    if(!valida_nome(nome.value)){
        nome.classList.add('error') /*Essa parte está relacionada ao css "input.error". Ele aplicará aquelas estilização caso o campo nome apresente erro*/
        const msg_erro_nome = document.querySelector('.p-msg-erro-nome');
        msg_erro_nome.style.display = 'block';
    }
    else{
        nome.classList.remove('error') /*Se deu certo, iremos remover a estilização de erro do CSS*/
        const msg_erro_nome = document.querySelector('.p-msg-erro-nome')
        msg_erro_nome.style.display = 'none'
    }
})