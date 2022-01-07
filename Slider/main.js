// como va a ser lo global lo vamos a encerrar dentro de un Closures

// Creamos una clase para poder reutilizar el slider
class Slider {
  constructor(selector) {
    this.move = this.move.bind(this);
    this.slider = document.querySelector(selector);
    this.interval = null;
    this.contador = 0;
    // Seleccionamos los hijos directos del container para saber cuantas imagenes tenemos
    this.itemsCount = this.slider.querySelectorAll(".container > *").length;
    this.start();

    // Crear los controles
    this.buildControls();
  }

  start() {
    this.interval = window.setInterval(this.move, 2000)
  }

  buildControls(){
    for (let i = 0; i < this.itemsCount; i++) {
      let control = document.createElement('li');

      // Agregar la clase active al primer control
      if (i === 0) control.classList.add('active')

      this.slider.querySelector(".controls ul").appendChild(control)
      
    }
  }

  move() {
    this.contador++;
    // Para resetear el contador
    if(this.contador > this.itemsCount - 1) this.contador = 0;
    this.moveTo(this.contador);
  }

  // Selecionamos todos los elementos que tiene la clase active y los iteramos
  resetIndicador(){
    this.slider.querySelectorAll(".controls .active")
      .forEach(item => item.classList.remove("active"));
  }

  moveTo(index) {
    let left = index * 100;

    // Reinicar el indicador para que uno permanezca activo
    this.resetIndicador();


    // Agregar la clase active el control en el cual se encuentra la imagen
    this.slider.querySelector(`.controls li:nth-child(${index+1})`).classList.add("active");

    console.log(index);

    this.slider.querySelector(".container").style.left = "-" + left + "%";
  }

}


(function () {
  new Slider(".slider")
})();