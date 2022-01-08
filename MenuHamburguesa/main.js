//(function(){})() Closure
(function () {

  // Bandera
  let pinged = false;
  // Navegacio
  let nav = document.querySelector('.nav');
  // console.log(nav)

  // Punto de refencia para colocar el menu
  let stickyScrollPoint = document.querySelector(".hero-image").clientHeight;




  // Coordenadas (getBoundingClientRect()) nos va a retornar la altura del elemento, la anchura del elemento, y la distancia que tiene el elemento con la esquina superior y con la esquina de la izquierda
  //let coords = nav.getBoundingClientRect();

  //console.log(coords)

  // funcion para fijar la navegacion a la parte top
  function pingToTop() {
    if(pinged) return;

    nav.classList.add("pined");

    pinged = true;
  }

  function unPingFromTop(){
    if(!pinged) return;

    nav.classList.remove("pined");

    pinged = false;
  }

  window.addEventListener('scroll', function (e) {

    if(window.scrollY < stickyScrollPoint) return unPingFromTop();


    let coords = nav.getBoundingClientRect();
    // console.log(coords)
    // coords.top es la propiedad del objeto llamamos el metodo para que quede fija a medida que hacenmos scroll
    if (coords.top <= 0) return pingToTop();

    // metodo para fijarla arriba desde que se carga la pagina
    unPingFromTop();

  })

})();