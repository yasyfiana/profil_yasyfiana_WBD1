var imgs = document.getElementById('img');
var images = ['Image/afii.png','Image/afi2.png', 'Image/afi1.png', 'Image/afi3.png'];
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