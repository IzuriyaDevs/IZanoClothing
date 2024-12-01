let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoCount = document.getElementById('carrinho-count');
    carrinhoCount.textContent = carrinho.length; 
}


function exibirCarrinho() {
    
    console.log(carrinho); 
}