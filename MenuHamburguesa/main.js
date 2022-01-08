//(function(){})() Closure
(function () {

  document.querySelector(".toggle-menu").addEventListener('click', function(){
    document.querySelector(".main-container").classList.toggle("go");
    console.log("hola")
  })

})();