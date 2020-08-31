var imgs = document.getElementById('img');
var images = ['Image/afii.png','Image/afi2.png','Image/afi3.png'];
var x = 0;

setInterval(slider, 2000);


function slider() {
  if (x < images.length) {
    x = x + 1;
  } else {
    x = 1;
  }
  imgs.innerHTML = "<img src=" + images[x - 1] + ">";
}


// const nextImageDelay = 3000;
// let currentImageCounter = 0;

// slideShowImg[currentImageCounter].style.display = "block";
// setInterval(nextImage, nextImageDelay);

// function nextImage(){
//     slideShowImg[currentImageCounter].display = "none"
//     currentImageCounter = currentImageCounter + 1;
//     slideShowImg[currentImageCounter].display = "block"
// }

// var start=1;
// function set_time()
// {
//     setInterval(image_show,2000);
// }

// function image_show()
// {
//     var image_data;

// }