// Verifica se o usuário já está logado quando a página é carregada
window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        alert('Você já está logado!');
        window.location.href = '/HTML/Home.html'; // Redireciona para a página inicial se o usuário já estiver logado
    }
};

// Adiciona um ouvinte de evento ao formulário de login para capturar a submissão do formulário
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página

    const identificador = document.getElementById('identificador').value; // Pode ser CPF ou e-mail
    const senha = document.getElementById('senha').value;

    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    const cliente = clientes.find(cliente => (cliente.email === identificador || cliente.cpf === identificador) && cliente.senha === senha);

    console.log('Identificador:', identificador, 'Senha:', senha); // Adiciona log para debug
    console.log('Cliente encontrado:', cliente); // Adiciona log para debug

    if (cliente) {
        localStorage.setItem('isLoggedIn', true);
        alert('Login realizado com sucesso!');
        window.location.href = '/HTML/Home.html'; // Redireciona para a página inicial após o login bem-sucedido
    } else {
        alert('Identificador ou senha incorretos. Por favor, tente novamente.');
    }
});

// Função para mostrar/ocultar senha
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('senha');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Mostrar Senha' : 'Ocultar Senha';
});
