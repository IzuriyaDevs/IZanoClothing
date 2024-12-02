// Recupera o carrinho do localStorage, ou inicializa um array vazio se não houver carrinho salvo
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    // Cria um objeto representando o produto com nome e preço
    const produto = { nome: nomeProduto, preco: precoProduto };
    // Adiciona o produto ao array do carrinho
    carrinho.push(produto);
    // Atualiza o localStorage com o novo carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}
