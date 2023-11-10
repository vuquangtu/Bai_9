function yesAction() {
  alert("<3");
}

// function init() {
//   let x = document.getElementById("noID");
//   x.style.position = "Relative";
//   x.style.left = "0px";
//   x.style.top = "0px";
// }

function noAction() {
  let x = document.getElementById("noID");
  let height = window.innerHeight;
  let width = window.innerWidth;

  x.style.left =
    parseInt(x.style.left) + Math.floor(Math.random() * width) + "px";
  x.style.top =
    parseInt(x.style.top) + Math.floor(Math.random() * height) + "px";
}

// console.log(height, width);
// window.onload = init();
