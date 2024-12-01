let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(nomeProduto, precoProduto) {
const produto = { nome: nomeProduto, preco: precoProduto };
carrinho.push(produto);
localStorage.setItem('carrinho', JSON.stringify(carrinho));
} 