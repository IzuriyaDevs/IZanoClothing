function loginLogout() {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Verifica se o usuário está logado
    if (isLoggedIn) {
        localStorage.removeItem('isLoggedIn'); // Remove a chave 'isLoggedIn' do localStorage
        window.location.href = '/HTML/Login.html'; // Redireciona para a página de login
    } else {
        window.location.href = '/HTML/Login.html'; // Redireciona para a página de login
    }
}

// Função para atualizar o texto do botão de login/logout
function atualizarBotao() {
    const loginLogoutBtn = document.getElementById('loginLogoutBtn');
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Verifica se o usuário está logado
    if (isLoggedIn) {
        loginLogoutBtn.textContent = 'Logout'; // Altera o texto do botão para 'Logout'
    } else {
        loginLogoutBtn.textContent = 'Fazer Login'; // Altera o texto do botão para 'Fazer Login'
    }
}

// Função para exibir o histórico de compras
function exibirHistorico() {
    const historicoDiv = document.getElementById('historico');
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || []; // Obtém os pedidos do localStorage
    
    if (pedidos.length === 0) {
        historicoDiv.innerHTML = '<p>Você não tem compras registradas.</p>';
        return;
    }

    pedidos.forEach(pedido => {
        let itensComprados = '';
        pedido.carrinho.forEach(item => {
            itensComprados += `
                <li>
                    <img src="${item.imagem}" alt="${item.nome}" style="width: 50px; height: 50px;">
                    ${item.nome} - R$${item.preco.toFixed(2)}
                </li>`;
        });

        historicoDiv.innerHTML += `
            <div class="compra">
                <p><strong>Itens comprados:</strong></p>
                <ul>${itensComprados}</ul>
                <p><strong>Código de rastreio:</strong> ${pedido.codigoRastreio}</p>
            </div>
        `;
    });
}

atualizarBotao(); // Atualiza o texto do botão de login/logout ao carregar a página
exibirHistorico(); // Exibe o histórico de compras ao carregar a página
