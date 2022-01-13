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

}

(function () {
  const GoogleBooksApiURL = "https://www.googleapis.com/books/v1/volumes?q=;"
  Search.get(GoogleBooksApiURL+"harry")
    .then(results => console.log(results));
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