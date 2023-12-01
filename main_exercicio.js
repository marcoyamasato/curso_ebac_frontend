const valor1 = document.getElementById('input_number1')
const valor2 = document.getElementById('input_number2')

const msg_erro_um = document.querySelector('.msg_erro_1')

const form = document.querySelector('.form-inputs')

const campo_msg_sucesso = document.querySelector('.msg_sucesso')


let inputs_valores = document.querySelectorAll('input')

function verifica_numeros(num1, num2){
    if(num2 > num1){
        console.log(num1)
        return num2 > num1
    }
    else{
        console.log('erro')
        return false
    }
}


form.addEventListener('submit', function(e){
    if(verifica_numeros(valor1.value, valor2.value)){
        alert('Verificação feita com sucesso! Parabéns!')
    }
    else{
        alert('Por favor verificar os campos')
        e.preventDefault();
    }
})




inputs_valores.forEach((item) => {
    item.addEventListener("keyup", function(e){
        if(verifica_numeros(valor1.value, valor2.value)){

            const msg_sucesso = `Boa, o segundo número (${valor2.value}) é maior que o primeiro número (${valor1.value})`;
            
            campo_msg_sucesso.innerHTML = msg_sucesso
            campo_msg_sucesso.style.display = 'block'

            valor1.classList.remove('error')
            msg_erro_um.style.display = 'none'
        }

        else{
            campo_msg_sucesso.style.display = 'none'
            valor1.classList.add('error')

            msg_erro_um.style.display = 'block'
        }
    })
});