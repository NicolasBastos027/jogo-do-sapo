//Ator
let xAtor=85
let yAtor=360
let colisao= false 
let comprimentoCarro = 50;
let alturaCarro = 20;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 50, 50)
}
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor-=3;
  }
    if (keyIsDown(DOWN_ARROW)){
      if (podeSeMover()){
    yAtor+=3;
    }
  }
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      somColisao.play();
      voltaAtorParaPosicaoInicial();
      if (meusPontos > 0){
      meusPontos-=1;
        
        }
    }
  }
}
function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}
  function incluiPontos(){
    textAlign(CENTER)
    textSize(25)
    fill(230, 56, 19);
    text(meusPontos, width / 5, 26)
  }
function marcaPontos(){
  if (yAtor < 15){
    somPontos.play();
    voltaAtorParaPosicaoInicial();
    meusPontos += 1;
    
  }
}
function podeSeMover(){
  return yAtor < 366;
}