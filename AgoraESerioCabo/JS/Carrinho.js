let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; // Obtém o carrinho do localStorage ou inicializa um array vazio

// Função para exibir os itens no carrinho
function exibirCarrinho() {
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.innerHTML = '';
    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    let total = 0;
    carrinho.forEach(produto => {
        carrinhoDiv.innerHTML += `
            <div class="item-carrinho">
                <img src="${produto.imagem}" alt="${produto.nome}" style="width: 50px; height: 50px;">
                <p>${produto.nome} - R$${produto.preco.toFixed(2)}</p>
            </div>
        `;
        total += produto.preco;
    });

    carrinhoDiv.innerHTML += `<h4>Total: R$${total.toFixed(2)}</h4>`;
}

// Função para gerar um código de rastreio único de 15 dígitos numéricos aleatórios
function gerarCodigoRastreio() {
    let codigo;
    let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    let existe;

    do {
        codigo = Math.floor(Math.random() * 1000000000000000).toString().padStart(15, '0');
        existe = pedidos.find(pedido => pedido.codigoRastreio === codigo);
    } while (existe);

    return codigo;
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Você não pode finalizar a compra sem adicionar produtos ao carrinho.');
        return; 
    }

    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Verifica se o usuário está logado
    if (!isLoggedIn) {
        alert('Você precisa estar logado para finalizar a compra.');
        window.location.href = '/HTML/CadastroCliente.html'; // Redireciona para a página de cadastro se não estiver logado
        return;
    }

    const metodoPagamentoSelecionado = document.querySelector('input[name="pagamento"]:checked'); // Verifica se um método de pagamento foi selecionado
    if (!metodoPagamentoSelecionado) {
        alert('Por favor, selecione um método de pagamento.');
        return;
    }

    const transportadoraSelecionada = document.querySelector('input[name="transportadora"]:checked'); // Verifica se uma transportadora foi selecionada
    if (!transportadoraSelecionada) {
        alert('Por favor, selecione uma transportadora.');
        return;
    }

    const codigoRastreio = gerarCodigoRastreio(); // Gera um código de rastreio único
    alert(`Compra aprovada - IZano agradece a preferência! Seu código de rastreio é: ${codigoRastreio}`);

    // Salva o pedido com o código de rastreio
    let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.push({codigoRastreio, carrinho});
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    localStorage.removeItem('carrinho'); // Remove o carrinho do localStorage
    window.location.href = '/HTML/Home.html'; // Redireciona para a página inicial
}

// Função para limpar o carrinho
function limparCarrinho() {
    carrinho = []; // Limpa o array do carrinho
    localStorage.removeItem('carrinho'); // Remove o carrinho do localStorage
    exibirCarrinho(); // Exibe o carrinho vazio
    alert('O carrinho foi limpo.');
}

exibirCarrinho(); // Exibe o carrinho ao carregar a página
