document.addEventListener('DOMContentLoaded', (event) => {
    // Verifica se o usuário está logado quando a página é carregada
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        alert('Você precisa estar logado para rastrear um pedido.');
        window.location.href = '/HTML/Login.html'; // Redireciona para a página de login se o usuário não estiver logado
    }
});

// Função para rastrear o pedido
function rastrearPedido() {
    // Obtém o código de rastreio inserido pelo usuário
    const codigoRastreio = document.getElementById('codigoRastreio').value;

    // Obtém os pedidos do localStorage
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    // Verifica o status do pedido com base no código de rastreio
    const pedido = pedidos.find(pedido => pedido.codigoRastreio === codigoRastreio);
    if (pedido) {
        // Gera um status aleatório para simular o rastreamento
        const statusOptions = [
            'Aguardando pagamento',
            'Pedido em separação',
            'Pedido em transporte',
            'Pedido em rota de entrega'
        ];
        const status = statusOptions[Math.floor(Math.random() * statusOptions.length)];
        // Exibe o status do pedido na div
        document.getElementById('statusPedido').textContent = `Status do pedido: ${status}`;
    } else {
        document.getElementById('statusPedido').textContent = 'Código de rastreio não encontrado';
    }
}
