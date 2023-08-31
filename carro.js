let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 3, 2.5, 5, 3, 2];
let xCarros = [600, 600, 600, 600, 600, 600];
let imagemCarros;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltarCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -50;
}