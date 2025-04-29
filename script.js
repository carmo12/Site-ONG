const botaoContato = document.getElementById('btnContato');

if (botaoContato) {
  botaoContato.addEventListener('click', () => {
    if (window.location.pathname.includes('index.html')) {
      window.location.href = 'contato.html';
    } else if (window.location.pathname.includes('contato.html')) {
      mostrarMensagem();
    }
  });
}

function mostrarMensagem() {
  const mensagem = document.createElement('p');
  mensagem.textContent = 'Mensagem enviada! Obrigado por seu interesse.';
  mensagem.style.color = '#0077cc';
  mensagem.style.fontSize = '1.2rem';
  mensagem.style.marginTop = '1rem';

  const secaoContato = document.querySelector('.contato');
  secaoContato.appendChild(mensagem);
}
