class ViewPort{
  static visible(el){
    let coords = el.getBoundingClientRect();
    // Para obtener el alto de la ventana
    let windowHeight = document.documentElement.clientHeight;


    // Esta condicion valida (coords.top < windowHeight) que nos estamos acercando
    // Esta consicion valida que nos estamos alejando ((coords.top * -1) < windowHeight)

    return (coords.top < windowHeight && (coords.top * -1) < windowHeight)
  }
}

class PlayViewPort{
  constructor(video_selector){
    this.video = document.querySelector(video_selector);
    this.evaluate = this.evaluate.bind(this);
    this.bindEvents();
  }

  bindEvents(){
    window.addEventListener('scroll',this.evaluate)
  }

  evaluate(){
    if(ViewPort.visible(this.video)){
      this.video.play();
    }else{
      this.video.pause();
    }
  }
}


(function(){

  // Inicializamos la libreria
  new PlayViewPort("video");

})();