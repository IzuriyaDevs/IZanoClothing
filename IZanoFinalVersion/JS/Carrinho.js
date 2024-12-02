// Obtém o carrinho de compras armazenado no localStorage, ou inicializa um array vazio se não houver nada armazenado
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    // Cria um objeto representando o produto com nome e preço
    const produto = { nome: nomeProduto, preco: precoProduto };
    
    // Adiciona o produto ao array do carrinho
    carrinho.push(produto);
    
    // Armazena o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Exibe um alerta informando que o produto foi adicionado ao carrinho
    alert(`${nomeProduto} adicionado ao carrinho!`);
}
