function inserir(valor) {
  const display = document.getElementById('display');
  display.value += valor;
}

function limpar() {
  document.getElementById('display').value = '';
}

function calcular() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Erro';
  }
}
