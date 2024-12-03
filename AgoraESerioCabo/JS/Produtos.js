let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; // Obtém o carrinho do localStorage ou inicializa um array vazio

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Verifica se o usuário está logado
    if (!isLoggedIn) {
        alert('Você precisa estar logado para adicionar produtos ao carrinho.');
        window.location.href = '/HTML/Login.html'; // Redireciona para a página de login se não estiver logado
        return;
    }
    
    const produto = { nome: nomeProduto, preco: precoProduto }; // Cria um objeto produto com os dados fornecidos
    carrinho.push(produto); // Adiciona o produto ao array do carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o carrinho no localStorage
}
