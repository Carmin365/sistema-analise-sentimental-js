document.getElementById('analisar-btn').addEventListener('click', function() {
    const texto = document.getElementById('texto-input').value;
    const resultadoDiv = document.getElementById('resultado');
    const titulo = document.getElementById('sentimento-titulo');
    const textoResultado = document.getElementById('sentimento-texto');

    if (texto.trim() === '') {
        alert('Por favor, digite um texto para analisar.');
        return;
    }
    
    
    const sentimento = analisarSentimento(texto);

    
    titulo.textContent = 'Resultado da Análise:';
    if (sentimento === 'positivo') {
        textoResultado.textContent = 'O sentimento é Positivo 😊';
        resultadoDiv.style.borderColor = '#28a745';
        textoResultado.style.color = '#28a745';
    } else if (sentimento === 'negativo') {
        textoResultado.textContent = 'O sentimento é Negativo 😠';
        resultadoDiv.style.borderColor = '#dc3545';
        textoResultado.style.color = '#dc3545';
    } else {
        textoResultado.textContent = 'O sentimento é Neutro 😐';
        resultadoDiv.style.borderColor = '#ffc107';
        textoResultado.style.color = '#ffc107';
    }
});

function analisarSentimento(texto) {
    texto = texto.toLowerCase();
    
    if (texto.includes('amo') || texto.includes('ótimo') || texto.includes('bom')) {
        return 'positivo';
    }
    if (texto.includes('odeio') || texto.includes('péssimo') || texto.includes('ruim')) {
        return 'negativo';
    }
    return 'neutro';
}