function mostrartela(nome) {
   const tela = document.querySelectorAll('section');
   tela.forEach(tela => {
    tela.style.display = 'none';
   });

   const telaEscolhida = document.getElementById('tela-' + nome);
   telaEscolhida.style.display = 'block';
}