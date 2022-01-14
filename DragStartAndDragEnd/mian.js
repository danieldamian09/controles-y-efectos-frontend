class DOMHelper{

}

class DragList{
  constructor(list_selector, items_selector="li"){
    // Nodo de la lista:
    this.list = document.querySelector(list_selector);
    // Todos los Nodos Hijos de la lista:
    this.items = this.list.querySelectorAll(items_selector);
    // cuidar que el valor de this no se modifique
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this)

    // colocar los correspodientes listener
    this.bindEvents();
  }

  //* colocar los correspodientes listener
  bindEvents(){
    // hacemos un forEach para todos los nodos hijos de la lista(en este caso)
    this.items.forEach(item => {
      console.log(item)
      item.addEventListener("dragstart", this.handleDragStart)
      item.addEventListener("drag", this.handleDrag)
      item.addEventListener("dragend", this.handleDragEnd)
    });
  }

  //* Metodo cuando el usuario inicie el drag and drop
  handleDragStart(e){
    // Obtener el elemento actual que se esta arrastrando
    let element = e.currentTarget;
    console.log(element)
    console.log(":)")
    element.classList.add("draggin");

  }

  //* Metodo mientras el usuario esta arrastrando
  handleDrag(){
    
  }

  //* Metodo cuando el usuario suelte el elemento
  handleDragEnd(e){
    let element = e.currentTarget;
    console.log(":(")
    element.classList.remove("draggin");
  }
}


// llamar a la libreria
(function(){
  new DragList("ul", "li");
})()