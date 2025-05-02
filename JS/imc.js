const calcular = document.getElementById('calcular');
const refazer = document.getElementById('refazer');
const overlay = document.getElementById('overlay');
const fechar = document.getElementById('fechar');

function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';
  document.getElementById('resultado-text').textContent = '';
  overlay.style.display = 'none';
}

function imc () {
  const nome = document.getElementById('nome').value;
  const altura = +document.getElementById('altura').value;
  const peso = +document.getElementById('peso').value;

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';
    if (valorIMC < 18.5) {
      classificacao = 'abaixo do peso.';
    } else if (valorIMC < 25) {
      classificacao = 'com peso ideal. Parabéns!';
    } else if (valorIMC < 30) {
      classificacao = 'levemente acima do peso.';
    } else if (valorIMC < 35) {
      classificacao = 'com obesidade grau I.';
    } else if (valorIMC < 40) {
      classificacao = 'com obesidade grau II.';
    } else {
      classificacao = 'com obesidade grau III. Cuidado!';
    }

    const resultado = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
    document.getElementById('resultado-text').textContent = resultado;
    overlay.style.display = 'flex';
  } else {
    document.getElementById('resultado-text').textContent = 'Preencha todos os campos!';
    overlay.style.display = 'flex';
  }
}

calcular.addEventListener('click', imc);

fechar.addEventListener('click', limparCampos);
