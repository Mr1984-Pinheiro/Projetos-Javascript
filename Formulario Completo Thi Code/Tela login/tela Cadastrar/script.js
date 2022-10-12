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
    
   })
}