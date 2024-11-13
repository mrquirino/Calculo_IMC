// Ao carregar a página de resultados
document.addEventListener('DOMContentLoaded', function() {
    const resultado = localStorage.getItem('resultado');
    const dica = localStorage.getItem('dica');

    // Exibe os resultados e dicas
    document.getElementById('resultado').textContent = resultado;
    document.getElementById('dica').textContent = dica;
});
