// Para conocer la posicion del elemento que estamos haciendo click en referencia a sus hermanos utilizamos
class IndexSibling{
  static get(el){
    let children = el.parentNode.children;

    for(let i = 0; i < children.length; i++){
      let child = children[i];
      if(child == el) return i;
    }
  }
}



class TabsManager{
  constructor(selector_tabs, controls_selector, indicador_selector){
    this.tabs = document.querySelector(selector_tabs);
    this.controls = document.querySelectorAll(controls_selector);
    this.indicator = document.querySelector(indicador_selector);
    this.handleClick = this.handleClick.bind(this)

    this.setIndicatorWidth()
    this.bindEvents();
  }

  // enviarle el ancho al elemento indicator
  setIndicatorWidth(){
    this.indicator.style.width = this.controls[0].clientWidth + "px";
  }

  bindEvents(){
    this.controls.forEach(button => {
      button.addEventListener('click', this.handleClick);
    })
  }

  handleClick(e){
    e.preventDefault();

    let button = e.currentTarget;

    let position = IndexSibling.get(button);
    // console.log(position);

    this.indicator.style.left = (position * this.indicator.clientWidth)+"px";

    this.openTab(button.hash);
  }

  openTab(hash){
    let tab = document.querySelector(hash)

    let position = IndexSibling.get(tab);

    this.tabs.querySelector(".container").style.left = -(position * 100)+"%";

  }
  
}




new TabsManager(".tabs", ".tabs-control a", ".indicator");

