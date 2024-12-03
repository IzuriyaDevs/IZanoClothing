// Adiciona um ouvinte de evento ao formulário de cadastro de vendedor para capturar a submissão do formulário
document.getElementById('vendedorForm').addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário de recarregar a página
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const fone = document.getElementById('fone').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;
    const fileInput = document.getElementById('cv');
    const file = fileInput.files[0];

    // Verifica se o arquivo anexado é um PDF
    if (file && file.type !== 'application/pdf') {
        alert('Por favor, anexe um arquivo PDF.');
        return;
    }

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

    // Obtém os vendedores existentes do localStorage ou inicializa um array vazio
    const vendedores = JSON.parse(localStorage.getItem('vendedores')) || [];

    // Verifica se o email, telefone ou CPF já existem
    const emailExistente = vendedores.find(vendedor => vendedor.email === email);
    const foneExistente = vendedores.find(vendedor => vendedor.fone === fone);
    const cpfExistente = vendedores.find(vendedor => vendedor.cpf === cpf);

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

    // Cria um objeto vendedor com os dados do formulário
    const vendedor = {
        nome: nome,
        email: email,
        senha: senha,
        fone: fone,
        cpf: cpf,
        endereco: endereco,
        curriculo: file.name
    };

    // Adiciona o novo vendedor ao array de vendedores
    vendedores.push(vendedor);

    // Armazena o array atualizado de vendedores no localStorage
    localStorage.setItem('vendedores', JSON.stringify(vendedores));

    // Exibe uma mensagem de sucesso
    alert('Cadastro realizado com sucesso!');

    // Reseta o formulário
    document.getElementById('vendedorForm').reset();
});

// Função para mostrar/ocultar senha
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('senha');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Mostrar Senha' : 'Ocultar Senha';
});
