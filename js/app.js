// Função para adicionar usuário ao array e armazenar no localStorage
let arrUser = JSON.parse(localStorage.getItem('arrUser')) || [];

function adicionarAoArrUser(user) {
    arrUser.push(user);
    localStorage.setItem('arrUser', JSON.stringify(arrUser));
}

// Função para limpar o formulário de login
function limparLogin() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Código para exibir o nome do usuário logado
document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        document.getElementById('userName').textContent = loggedInUser.nome;
    } else {
        document.getElementById('userName').textContent = 'Visitante';
    }
});

// Código da página de login
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        
        if (username === "" || password === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const user = arrUser.find(user => user.nome === username && user.senha === password);

        
        if (user) {
            alert("Login realizado com sucesso!\nNome de usuário: " + username);
            localStorage.setItem('loggedInUser', JSON.stringify(user));

            
            window.location.href = '../../home-pos/index.html';
        } else {
            alert("Nome de usuário ou senha incorretos.");
        }

        limparLogin();
    });
});

// Código da página de registro
document.addEventListener('DOMContentLoaded', function() {
    const efetuarRegistro = document.getElementById('efetuarRegistro');

    efetuarRegistro.addEventListener('click', function(event) {
        event.preventDefault(); 

        
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const cpf = document.getElementById('cpf').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const confirmaSenha = document.getElementById('confirmaSenha').value;

        
        if (!nome || !sobrenome || !dataNascimento || !cpf || !telefone || !email || !senha || !confirmaSenha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (senha !== confirmaSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        
        alert("Registro efetuado com sucesso!\n" + nome + " " + sobrenome);
        window.location.href = '../login/index.html'
        adicionarAoArrUser({ nome: nome, sobrenome: sobrenome, senha: senha });

        
        limparFormulario();
    });
});

// Função de limpar usuário
function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('confirmaSenha').value = '';
}
