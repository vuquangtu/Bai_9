let weight;
let height;
weight = parseInt(prompt("Cân nặng của bạn là bao nhiêu?"));
height = parseInt(prompt("Chiều cao của bạn là bao nhiêu?"));
let bmi;
bmi = weight / (height * 2);
console.log(bmi);
if (bmi < 18.5) {
  alert("Underweight");
} else if (bmi < 25) {
  alert("Normal");
} else if (bmi < 30) {
  alert("Overweight");
} else {
  alert("Obese");
}
