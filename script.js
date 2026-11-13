// Observa quando cada seção entra na área visível da tela
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('ativo');
        } else {
            // Remove a classe ao sair da tela para repetir a animação ao rolar novamente
            entrada.target.classList.remove('ativo');
        }
    });
}, {
    threshold: 0.25 // Dispara o movimento quando 25% da seção aparece
});

// Aplica o observador nas 3 seções
const secoes = document.querySelectorAll('.revelar');
secoes.forEach((secao) => {
    observador.observe(secao);
});