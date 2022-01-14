class DOMHelper {
  static move(el, coords){
    el.style.top = coords.y - (el.clientHeight / 2) + "px"
    el.style.left = coords.x - (el.clientWidth / 2) + "px"
  }

}

class DragList {
  constructor(list_selector, items_selector = "li") {
    // Nodo de la lista:
    this.list = document.querySelector(list_selector);
    // Todos los Nodos Hijos de la lista:
    this.items = this.list.querySelectorAll(items_selector);
    // cuidar que el valor de this no se modifique
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this)

    // crear el canvas vacios para mostrar cuando movemos la imagen
    this.canvas = document.createElement("canvas");

    // colocar los correspodientes listener
    this.bindEvents();
  }

  //* colocar los correspodientes listener
  bindEvents() {
    // hacemos un forEach para todos los nodos hijos de la lista(en este caso)
    // console.log(this.items)
    this.items.forEach(item => {
      item.addEventListener("dragstart", this.handleDragStart)
      item.addEventListener("drag", this.handleDrag)
      item.addEventListener("dragend", this.handleDragEnd)
    });

  }

  //* Metodo cuando el usuario inicie el drag and drop
  handleDragStart(e) {
    // Obtener el elemento actual que se esta arrastrando
    let el = e.currentTarget;
    // console.log(":)")
    e.dataTransfer.setDragImage(this.canvas,0,0);
    el.classList.add("draggin");

  }

  //* Metodo mientras el usuario esta arrastrando
  handleDrag(e) {
    DOMHelper.move(e.currentTarget, {x: e.clientX, y: e.clientY})
  }

  //* Metodo cuando el usuario suelte el elemento
  handleDragEnd(e) {
    let el = e.currentTarget;
    // console.log(":(")
    el.style.top = "";
    el.style.left = "";
    el.classList.remove("draggin");
  }
}


// llamar a la libreria
(function () {
  new DragList("ul");
})()