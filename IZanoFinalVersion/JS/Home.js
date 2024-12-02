// Inicializa o carrinho como um array vazio
let carrinho = [];
// Inicializa a variável total com 0
let total = 0;

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    // Adiciona um objeto com nome e preço ao array carrinho
    carrinho.push({ nome, preco });
    // Adiciona o preço do produto ao total
    total += preco;
    // Chama a função para atualizar a contagem do carrinho
    atualizarCarrinho();
}

// Função para atualizar a contagem do carrinho
function atualizarCarrinho() {
    // Seleciona o elemento que exibe a contagem do carrinho
    const carrinhoCount = document.getElementById('carrinho-count');
    // Atualiza o texto do elemento com o número de itens no carrinho
    carrinhoCount.textContent = carrinho.length; 
}

// Função para exibir o conteúdo do carrinho no console
function exibirCarrinho() {
    // Exibe o array carrinho no console
    console.log(carrinho); 
}
