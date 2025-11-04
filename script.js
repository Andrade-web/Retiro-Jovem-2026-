document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe 'menu-button'
    const menuButtons = document.querySelectorAll('.menu-button');

    // Adiciona um 'listener' de clique para cada botão
    menuButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Pega o valor do atributo 'data-action' de cada botão
            const action = event.target.dataset.action;

            // Usa uma estrutura switch para lidar com diferentes ações
            switch (action) {
                case 'fazer-inscricao':
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLScrxDnotwoXZbxPsyz4d6edHXUMx7RZdjRPCBzc-_Yed7B0nA/viewform?usp=header', '_blank');
                    // **AQUI você adicionaria a lógica real para a inscrição:**
                    // Ex: window.location.href = 'https://link-para-formulario-de-inscricao.com';
                    // Ex: Abrir um modal com o formulário
                    break;
                    case 'fazer-pagamento':
                    window.location.href = 'https://linknabio.gg/osconectados';
                    // **AQUI você adicionaria a lógica real para a inscrição:**
                    // Ex: window.location.href = 'https://link-para-formulario-de-inscricao.com';
                    // Ex: Abrir um modal com o formulário
                    break;
                case 'informacoes-basicas':
                    window.location.href = 'detalhes_acampamento.html';
                    // Lógica para exibir informações básicas do acampamento
                    // Ex: window.location.href = 'informacoes-basicas.html';
                    break;
                case 'baixar-documento-permissao':
                    window.open('aut.pdf', '_blank');
                    break;
                case 'proibicoes':
                    window.location.href = 'proibicoes.html';
                    // Lógica para exibir lista de proibições
                    // Ex: Abrir um modal ou exibir texto na própria página
                    break;
                case 'local-evento':
                    window.open('https://maps.app.goo.gl/R8yjAkBbxkFhFebA6', '_blank');
                    // Lógica para mostrar o endereço ou mapa do local do evento
                    // Ex: window.open('https://maps.app.goo.gl/SEU_ENDERECO_AQUI', '_blank');
                    break;
                    case 'entrar-grupo':
                    window.open('https://chat.whatsapp.com/LkICPE0yUZ42Kjwku3F2sf?mode=wwt', '_blank');
                    // Lógica para mostrar o endereço ou mapa do local do evento
                    // Ex: window.open('https://maps.app.goo.gl/SEU_ENDERECO_AQUI', '_blank');
                    break;
                default:
                    console.warn('Ação desconhecida para o botão:', action);
            }
        });
    });
});
