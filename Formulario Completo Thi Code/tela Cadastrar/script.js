const showPassword = document.querySelector('#verSenha')
const mostrarConfirmarSenha = document.querySelector('#verConfirmSenha')

const nome = document.getElementById('nome')
const labelNome = document.getElementById('labelNome')

const usuario = document.getElementById('usuario')
const labelUsuario = document.getElementById('labelUsuario')

const senha = document.getElementById('senha')
const labelSenha = document.getElementById('labelSenha')

const confirmSenha = document.getElementById('confirmSenha')
const labelConfirmSenha = document.getElementById('labelConfirmSenha')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color:red' )
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color:red')
    } else {
        labelNome.setAttribute('style', 'color: green' )
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color:green')
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 5) {
        labelUsuario.setAttribute('style', 'color:red' )
        labelUsuario.innerHTML = 'Usuario *Insira no minimo 6 caracteres'
        usuario.setAttribute('style', 'border-color:red')
    } else {
        labelUsuario.setAttribute('style', 'color: green' )
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color:green')
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 7) {
        labelSenha.setAttribute('style', 'color:red' )
        labelSenha.innerHTML = 'Senha *Insira no minimo 8 caracteres'
        senha.setAttribute('style', 'border-color:red')
    } else {
        labelSenha.setAttribute('style', 'color: green' )
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:green')
    }
})

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color:red' )
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color:red')
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green' )
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color:green')
    }
})


function cadastrar() {
    alert('Botão clicado!')
}

showPassword.addEventListener('click', () => {
    let inputPassword = document.querySelector('#senha')

    if (inputPassword.getAttribute('type') == 'password') {
        inputPassword.setAttribute('type', 'text' )
    } else {
        inputPassword.setAttribute('type', 'password' )
    }
})



mostrarConfirmarSenha.addEventListener('click', () => {
    let inputConfirmarSenha = document.querySelector('#confirmSenha')

    if( inputConfirmarSenha.getAttribute('type') == 'password' ) {
        inputConfirmarSenha.setAttribute('type', 'text')
    } else {
        inputConfirmarSenha.setAttribute('type', 'password')
    }
})

