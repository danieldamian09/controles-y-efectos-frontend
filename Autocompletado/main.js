// Clase para hacer la peticion AJAX
class Search {
  // Vamos a tener un metodo estatico get
  static get(url) {

    // Creamos el Objeto XMLHttpRequest que es con el cual se hacen las peticiones AJAX
    let xhr = new XMLHttpRequest();

    // Abrimos la peticion hacia donde indique la "URL"
    xhr.open("GET", url);

    xhr.send();

    // Devolvemos la promesa cuando ejecutamos resolve(salio bien) y cunado ejecutamos reject(algo salio mal)
    return new Promise((resolve, reject) => {

      // Validar si se completo bien la paticion o de manera fallida
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          //* Todo salio bien
          if (xhr.status === 200) return resolve(JSON.parse(xhr.responseText));

          //! Algo salio mal
          reject(xhr.status)

        }
      }
    });

  }

}

// Aca vamos a llamar hacia que direccion queremos que se genere la peticion (va a retornar un promesa)
// Search.get("").then(data => {})

// Clase de Autocompletar
class Autocomplete {
  
  constructor(input_selector, base_url){
    // Creamos un metodo que nos va a crear una datalist
    this.input = document.querySelector(input_selector);
    this.url = base_url;
    this.buildDataList();
  }

  
    // Construir el node (datalist)
    buildDataList(){
      // creamos datalist
      this.dataList = document.createElement("datalist");
      // asignamos un id
      this.dataList.id = "datalist-autocomplete";
      // le agregamos al input el atributo "list" y lo enlazamos con el nombre que esta en el atributo ID "esto para enlazar el input con el data list"
      this.input.setAttribute("list", "datalist-autocomplete");
      // insetar este elemento que acabamos de crear en el body (datalist)
      document.querySelector("body").appendChild(this.dataList);
    }

    // Construir todos los options que van dentro de datalist por medio de la respuesta que recibimos del servidor (JSON)
    build(response){
      // reiniciamos el datalist por si tiene opciones viejas
      this.dataList.innerHTML = "";
      // despues iteramos la respuesta y por cada uno creamos los options (items viene de la respuesta JSON)
      response.items.forEach(item => {
        //? creamos el nuevo nodo del DOM (options)
        let optionEl = document.createElement("option");
        // ? le asignamos a optionEl como valor las siguientes opciones
        optionEl.value = item.volumeInfo.title;
        // ? validamos si el item tiene un subtitulo para utilizarlo en optionEl
        if(item.volumeInfo.title) optionEl.innerHTML = item.volumeInfo.title;

        // insertamos dentro del datalist estas opciones (optionEl)
        this.dataList.appendChild(optionEl);

      });

    }

    search(){
      Search.get(this.url+"harry")
      .then(results => this.build(results));
      this.url = "https://www.googleapis.com/books/v1/volumes?q=;"
    }

}

(function () {
  const GoogleBooksApiURL = "https://www.googleapis.com/books/v1/volumes?q=;"

  // instanciamos un nuevo objeto de la clase autocomplete
  let automcomplete = new Autocomplete("#searcher", GoogleBooksApiURL);
  automcomplete.search();

})();

















/*
Les comparto mi JavaScript, sólo adapte unas líneas para usar Fetch API y async await:

class Search {
    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(json =>  resolve(json))
                .catch(error => reject(error));
        });
    }
}
(async function () {
    const GoogleBooksApiURL = "https://www.googleapis.com/books/v1/volumes?q=";
    console.log(await Search.get(GoogleBooksApiURL + "harry"));
})();

*/

