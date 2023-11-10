let ojMyimage;
// console.log(ojMyimage);
ojMyimage = document.getElementById("myImage");
function init() {
  // ojMyimage = document.getElementById("myImage");
  ojMyimage.style.position = "relative";
  ojMyimage.style.left = "500px";
}
ojMyimage.style.left = "0px";
function moveRight() {
  ojMyimage.style.position = "relative";

  ojMyimage.style.left = parseInt(ojMyimage.style.left) + 10 + "px";
}

window.onload = init();
