$('#botao_enviar').click(function(){
    $('.formulario_dados').css('display', 'block') = 'block'
})

$('#input_cpf').mask('000.000.000-00')
$('#input_cep').mask('00000-000')
$('#input_telefone').mask('(00) 00000-0000')

$('.formulario_dados').validate({
    rules:{
        input_nome:{
            required: true
        },
        input_email:{
            required: true
        },
        input_telefone:{
            required: true
        },
        input_cpf:{
            required: true
        },
        input_endereco:{
            required: true
        },
        input_cep:{
            required: true
        }
    },

    messages:{
        input_nome: 'Informe seu nome', 
        input_email: 'Informe seu email'
    },

    submitHandler: function(){
        alert('Cadastro feito com sucesso')
    },

    invalidHandler: function(e, validador){
        var campos_incorretos = validador.numberOfInvalids();
        if (campos_incorretos){
            alert(`Temos ${campos_incorretos} campos incorretos`)
        }
    }
})