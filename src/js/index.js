// Função para alternar o tema
function alternarTema() {
  const body = document.body;
  
  // Verifica se o tema atual é escuro
  const temaEscuro = body.classList.contains('modo-escuro');
  
  // Alterna as classes do body entre 'modo-escuro' e 'modo-claro'
  if (temaEscuro) {
    body.classList.remove('modo-escuro');
    body.classList.add('modo-claro');
  } else {
    body.classList.remove('modo-claro');
    body.classList.add('modo-escuro');
  }
}

// Evento de clique no botão de alteração de tema
const botaoAlterarTema = document.getElementById('botao-alterar-tema');
botaoAlterarTema.addEventListener('click', alternarTema);