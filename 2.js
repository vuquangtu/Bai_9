let objImg;
objImg = document.getElementById("imgNobita");

function init() {
  objImg.style.position = "relative";
  objImg.style.left = "500px";
  objImg.style.top = "200px";
}
// // cách 1
// document.addEventListener("keydown", function (x) {
//   if (x.keyCode === 39) {
//     objImg.style.left = parseInt(objImg.style.left) + 10 + "px";
//   } else if (x.keyCode === 37) {
//     objImg.style.left = parseInt(objImg.style.left) - 10 + "px";
//   } else if (x.keyCode === 38) {
//     objImg.style.top = parseInt(objImg.style.top) - 10 + "px";
//   } else if (x.keyCode === 40) {
//     objImg.style.top = parseInt(objImg.style.top) + 10 + "px";
//   }
// });

// cách 2
document.addEventListener("keydown", function (x) {
  if (x.key === "ArrowLeft") {
    turnLeft();
  } else if (x.key === "ArrowRight") {
    turnRight();
  } else if (x.key === "ArrowUp") {
    turnUp();
  } else if (x.key === "ArrowDown") {
    turnDown();
  }
});

function turnRight() {
  objImg.style.left = parseInt(objImg.style.left) + 10 + "px";
}
function turnLeft() {
  objImg.style.left = parseInt(objImg.style.left) - 10 + "px";
}
function turnUp() {
  objImg.style.top = parseInt(objImg.style.top) - 10 + "px";
}
function turnDown() {
  objImg.style.top = parseInt(objImg.style.top) + 10 + "px";
}

window.onload = init();

// // cách 2

// function moveSel(evt) {
//   switch (evt.keycode){
//     case
//   }

// }
