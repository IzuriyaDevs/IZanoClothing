// Adiciona um ouvinte de evento ao formulário de esqueci minha senha para capturar a submissão do formulário
document.getElementById('esqueciSenhaForm').addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário de recarregar a página
    event.preventDefault();
    // Exibe uma mensagem informando que, se houver uma conta associada ao email, o usuário receberá instruções para redefinir sua senha
    alert('Se houver uma conta associada a este email, você receberá instruções para redefinir sua senha.');
});
