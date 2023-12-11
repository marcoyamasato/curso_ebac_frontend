const input_nome_atividade = $('#input_nome_atividade')
const input_url_atividade = $('#input_url_atividade')
const textarea_retorno = $('#textarea_retorno')

$('form').on('submit', function(e){

    e.preventDefault();

    valor_nome = input_nome_atividade.val();
    valor_url = input_url_atividade.val();

    valor_adicionar = $('<li></li>')
    $(`<p>${valor_nome}</p>`).appendTo(valor_adicionar)
    $(`<img src=${valor_url}>`).appendTo(valor_adicionar)

    valor_adicionar.appendTo('ul')

    textarea_retorno.val(`Atividade ${valor_nome} adicionada com sucesso.`)
    
    $('#botao_slide').addClass('button_adjust')
})



$('#botao_slide').on('click', function(e){
    $('.div_form').fadeIn()
})


$('#lista_valores').on('click', 'li', function(){
    $(this).addClass('item_selecionado')
})


