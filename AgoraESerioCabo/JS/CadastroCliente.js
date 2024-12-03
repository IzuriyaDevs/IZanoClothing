// Adiciona um ouvinte de evento ao formulário de cadastro para capturar a submissão do formulário
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário de recarregar a página
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const fone = document.getElementById('fone').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;

    // Verifica se a senha atende aos requisitos mínimos
    const senhaRequisitos = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!senhaRequisitos.test(senha)) {
        alert('A senha deve ter no mínimo 1 letra maiúscula, 1 caractere especial, 1 número e no mínimo 8 caracteres.');
        return;
    }

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        alert('O CPF deve ter 11 dígitos.');
        return;
    }

    // Obtém os clientes existentes do localStorage ou inicializa um array vazio
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    console.log('Clientes existentes:', clientes); // Adiciona log para debug

    // Verifica se o email, telefone ou CPF já existem
    const emailExistente = clientes.find(cliente => cliente.email === email);
    const foneExistente = clientes.find(cliente => cliente.fone === fone);
    const cpfExistente = clientes.find(cliente => cliente.cpf === cpf);

    // Exibe um alerta se o email já estiver cadastrado
    if (emailExistente) {
        alert('Email já cadastrado.');
        return;
    }

    // Exibe um alerta se o telefone já estiver cadastrado
    if (foneExistente) {
        alert('Telefone já cadastrado.');
        return;
    }

    // Exibe um alerta se o CPF já estiver cadastrado
    if (cpfExistente) {
        alert('CPF já cadastrado.');
        return;
    }

    // Cria um objeto cliente com os dados do formulário
    const cliente = {
        nome: nome,
        email: email,
        senha: senha,
        fone: fone,
        cpf: cpf,
        endereco: endereco
    };

    // Adiciona o novo cliente ao array de clientes
    clientes.push(cliente);

    // Armazena o array atualizado de clientes no localStorage
    localStorage.setItem('clientes', JSON.stringify(clientes));
    console.log('Clientes atualizados:', JSON.parse(localStorage.getItem('clientes'))); // Adiciona log para debug

    // Exibe uma mensagem de sucesso
    alert('Cadastro realizado com sucesso!');

    // Reseta o formulário
    document.getElementById('cadastroForm').reset();
});

// Função para mostrar/ocultar senha
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('senha');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Mostrar Senha' : 'Ocultar Senha';
});
