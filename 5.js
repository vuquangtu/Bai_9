function addValue(value) {
  let giatribandau = document.getElementById("result").value;
  if (giatribandau == 0) {
    document.getElementById("result").value = value;
  } else {
    document.getElementById("result").value = giatribandau + value;
  }
}
function clearData() {
  document.getElementById("result").value = "0";
}
function tinhketqua() {
  let x = eval(document.getElementById("result").value);
  document.getElementById("result").value = x;
  // console.log(x);
}
