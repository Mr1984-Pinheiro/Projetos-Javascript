let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let logado = document.getElementById('logado')

logado.innerHTML = `Olá ${userLogado.nome}`

if(localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'http://127.0.0.1:5500/Tela%20login/tela%20Cadastrar/index.html'
    
}

function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'http://127.0.0.1:5500/Tela%20login/tela%20Cadastrar/index.html'
}