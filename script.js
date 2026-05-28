// Sistema de navegação simples entre páginas
function showPage(pageId) {
    // Esconde todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Mostra a página selecionada
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }

    // Fecha menu mobile se necessário e rola para o topo
    window.scrollTo(0, 0);
}

// Lógica do Simulador Econômico e Sustentável
function calcularCOT() {
    // Pega os valores dos inputs
    const insumos = parseFloat(document.getElementById('insumos').value) || 0;
    const maodeobra = parseFloat(document.getElementById('maodeobra').value) || 0;
    const maquina = parseFloat(document.getElementById('maquina').value) || 0;

    // Fórmula: COT = Soma de todos os custos
    const cotTotal = insumos + maodeobra + maquina;

    if (cotTotal === 0) {
        alert("Por favor, insira os valores para calcular.");
        return;
    }

    // Exibe o resultado
    const resultBox = document.getElementById('resultado');
    const valorCotText = document.getElementById('valor-cot');
    const sugestaoText = document.getElementById('sugestao-text');

    resultBox.classList.remove('hidden');
    valorCotText.innerHTML = `<strong>Custo Operacional Total:</strong> R$ ${cotTotal.toFixed(2)} por hectare.`;

    // Lógica de "Inteligência" Sustentável
    if (insumos > 1200) {
        sugestaoText.innerHTML = "Seu custo com insumos está alto. Que tal usar <strong>Plantio Direto</strong> nesta safra? Isso pode reduzir sua perda de solo em até 90% e economizar combustível no preparo da terra.";
    } else {
        sugestaoText.innerHTML = "Parabéns pela gestão! Recomendamos o uso de <strong>Bioinsumos</strong> (controle biológico) para manter sua produção forte e reduzir o impacto ambiental na Gleba Norte.";
    }
}

// Simulação de alerta de clima ao carregar
window.onload = () => {
    console.log("AgroDecision 360 carregado com sucesso.");
};
