// como va a ser lo global lo vamos a encerrar dentro de un Closures

// Creamos una clase para poder reutilizar el slider
class Slider {
  constructor(selector) {
    this.move = this.move.bind(this);
    this.slider = document.querySelector(selector);
    this.interval = null;
    this.contador = 0;
    this.start();
  }

  start() {
    this.interval = window.setInterval(this.move, 5000)
  }

  move() {
    // Seleccionamos los hijos directos del container para saber cuantas imagenes tenemos
    let itemsCount = document.querySelectorAll(".container > *").length;
    // console.log(itemsCount)
    this.contador++;
    // Para resetear el contador
    if(this.contador > itemsCount - 1) this.contador = 0;
    this.moveTo(this.contador);
  }

  moveTo(index) {
    let left = index * 100;

    this.slider.querySelector(".container").style.left = "-" + left + "%";
  }

}


(function () {
  new Slider(".slider")
})();