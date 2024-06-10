document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM completamente carregado e analisado');
    
    const portfolioButton = document.querySelector('.botao');
    
    if (portfolioButton) {
        console.log('Botão encontrado');
        portfolioButton.addEventListener('click', () => {
            console.log('Botão clicado');
            window.location.href = 'https://gabrielborn5.wixsite.com/the-portf-lio---gabr';
        });
    } else {
        console.log('Botão não encontrado');
    }
});
