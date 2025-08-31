document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();
  const status = document.getElementById('mensagem-status');
  status.textContent = 'Mensagem enviada com sucesso!';
  status.style.color = '#00bcd4';

  // Limpa os campos
  this.reset();

  // Remove a mensagem após 5 segundos
  setTimeout(() => {
    status.textContent = '';
  }, 5000);
});
