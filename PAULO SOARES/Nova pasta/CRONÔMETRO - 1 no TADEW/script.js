window.onload = function () {

  var mile = 00;
  var segundos = 00;
  var addMile = document.getElementById("mile")
  var addSegundos = document.getElementById("segundos")
  var botaoStart = document.getElementById("botao-start")
  var botaoPause = document.getElementById("botao-pause")
  var botaoReset = document.getElementById("botao-reset")
  var Intervalo;

  botaoStart.onclick = function () {
    clearInterval(Intervalo)
    Intervalo = setInterval(startTimer, 10)
  }
  botaoPause.onclick = function () {
    clearInterval(Intervalo)
  }
  botaoReset.onclick = function () {
    clearInterval(Intervalo)
    segundos = "00";
    mile = "00";
    addMile.innerHTML = mile;
    addSegundos.innerHTML = segundos;
  }
  
  function startTimer() {
    mile++;

    if (mile <= 9) {
      addMile.innerHTML = "0" + mile;
    }
    if (mile > 9) {
      addMile.innerHTML = mile;
    }
    if (mile > 99) {
      console.log("segundos")
      mile = 0;
      segundos++;
      addMile.innerHTML = mile;
      addSegundos.innerHTML = segundos;
    }
    if (segundos < 9) {
      addSegundos.innerHTML = "0" + segundos;
    }
  }
}