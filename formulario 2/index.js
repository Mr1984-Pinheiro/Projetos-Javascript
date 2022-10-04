const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
}) 

function checkInputs() {
    const usernameValue = username.value.trim() // trim remove os espaços em brancos
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if (usernameValue === '')  {        
        // mostrar o erro
        // adicionar a classe error
        errorValidation(username, 'Preencha esse campo')        
    } else {
        //adicionar a classe de sucesso
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}