function adicionarEvento() {
  const dataInput = document.getElementById('data');
  const tituloInput = document.getElementById('titulo');
  const listaEventos = document.getElementById('listaEventos');

  const data = dataInput.value;
  const titulo = tituloInput.value.trim();

  if (data === '' || titulo === '') {
    alert('Preencha a data e o título do evento!');
    return;
  }

  const li = document.createElement('li');
  li.className = 'evento';
  li.innerHTML = `<strong>${data}:</strong> ${titulo}`;
  listaEventos.appendChild(li);

  // Limpar os campos
  dataInput.value = '';
  tituloInput.value = '';
}
