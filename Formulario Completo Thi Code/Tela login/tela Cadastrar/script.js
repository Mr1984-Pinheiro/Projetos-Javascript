const showPassword = document.querySelector('.fa-eye')

showPassword.addEventListener('click', () => {
    let inputPassword = document.querySelector('#senha')

    if (inputPassword.getAttribute('type') == 'password') {
        inputPassword.setAttribute('type', 'text' )
    } else {
        inputPassword.setAttribute('type', 'password' )
    }
})

function entrar() {
   let usuario = document.querySelector('#usuario')
   let userLabel = document.querySelector('#userLabel')

   let senha = document.querySelector('#senha')
   let senhaLabel = document.querySelector('#senhaLabel')

   let msgError = document.querySelector('#msgError')
   let listaUser = []

   let userValid = {
    nome: '',
    user: '',
    senha: ''
   }

   listaUser = JSON.parse(localStorage.getItem('listaUser'))
   
   listaUser.forEach((item) => {

        if (usuario.value == item.userCad && senha.value == item.senhaCad ) {
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }    
   })

   if (usuario.value === userValid.user && senha.value == userValid.senha) {
    window.location.href = 'http://127.0.0.1:5500/page%20logado/index.html'
    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
    localStorage.setItem('token', token)

    localStorage.setItem('userLogado', JSON.stringify(userValid))
   } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'usuario ou senha incorretos'
    usuario.focus()
}
}