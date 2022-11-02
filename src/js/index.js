const enviar = document.querySelector('.submit')
const campo = document.querySelectorAll('.input')
const validacao = document.querySelectorAll('li')

enviar.addEventListener('click', () => {
    campo.forEach((item, indice) => {
        if (item.value === '') {
            validacao[indice].classList.add('invalido')
        } else if (item.value !== '') {
            validacao[indice].classList.remove('invalido')
        }
    })
})