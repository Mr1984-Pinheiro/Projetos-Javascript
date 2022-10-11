const showPassword = document.querySelector('#verSenha')

showPassword.addEventListener('click', () => {
    let inputPassword = document.querySelector('#senha')

    if (inputPassword.getAttribute('type') == 'password') {
        inputPassword.setAttribute('type', 'text' )
    } else {
        inputPassword.setAttribute('type', 'password' )
    }
})

const mostrarConfirmarSenha = document.querySelector('#verConfirmSenha')

mostrarConfirmarSenha.addEventListener('click', () => {
    let inputConfirmarSenha = document.querySelector('#confirmSenha')

    if( inputConfirmarSenha.getAttribute('type') == 'password' ) {
        inputConfirmarSenha.setAttribute('type', 'text')
    } else {
        inputConfirmarSenha.setAttribute('type', 'password')
    }
})