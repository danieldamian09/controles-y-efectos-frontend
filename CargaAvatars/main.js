(function(){
  document.querySelector('#file-uploader').addEventListener('change', function(e){
      let files = e.target.files;
    console.log(files)

    let image = files[0];

    let imageURL = URL.createObjectURL(image);
    console.log(imageURL)

    document.querySelector(".profile .img").style.backgroundImage = "url('"+imageURL+"')";


    });

})();