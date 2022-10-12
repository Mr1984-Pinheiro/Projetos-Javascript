let showPassword = document.querySelector('#verSenha')
let mostrarConfirmarSenha = document.querySelector('#verConfirmSenha')

let nome = document.getElementById('nome')
let labelNome = document.getElementById('labelNome')
let validNome = false

let usuario = document.getElementById('usuario')
let labelUsuario = document.getElementById('labelUsuario')
let validUsuario = false

let senha = document.getElementById('senha')
let labelSenha = document.getElementById('labelSenha')
let validSenha = false

let confirmSenha = document.getElementById('confirmSenha')
let labelConfirmSenha = document.getElementById('labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.getElementById('msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color:red' )
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color:red')
        validNome = false 
    } else {
        labelNome.setAttribute('style', 'color: green' )
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color:green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 5) {
        labelUsuario.setAttribute('style', 'color:red' )
        labelUsuario.innerHTML = 'Usuario *Insira no minimo 6 caracteres'
        usuario.setAttribute('style', 'border-color:red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green' )
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color:green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 7) {
        labelSenha.setAttribute('style', 'color:red' )
        labelSenha.innerHTML = 'Senha *Insira no minimo 8 caracteres'
        senha.setAttribute('style', 'border-color:red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green' )
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:green')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color:red' )
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color:red')
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green' )
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color:green')
        validConfirmSenha = true
    }
})


function cadastrar() {  
    if(validNome && validUsuario && validSenha && validConfirmSenha ){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
        listaUser.push(
        {
          nomeCad: nome.value,
          userCad: usuario.value,
          senhaCad: senha.value
        }
        )
        
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(()=>{
            window.location.href = 'http://127.0.0.1:5500/Tela%20login/tela%20Cadastrar/index.html'

        }, 3000)
    
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong> Um ou mais campos não foram preenchidos </strong>'
        msgSuccess.setAttribute('style', 'display: none')
        msgSuccess.innerHTML = ''
        
    }
    
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

