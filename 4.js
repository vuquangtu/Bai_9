let monTh;
let numOfmonth;
function sumDays() {
  monTh = parseInt(document.getElementById("month").value);
  console.log(monTh);
  if (monTh < 1 || monTh > 12) {
    document.getElementById("kq").innerHTML =
      "Thang khong hop le vui long nhap thang tu 1 toi 12";
    return;
  }
  switch (monTh) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      numOfmonth = "31";
      break;
    case 2:
      numOfmonth = "28 hoặc 29";
      break;
    default:
      numOfmonth = "30";
      break;
  }
  document.getElementById("kq").innerHTML =
    "Tháng " + monTh + " có " + numOfmonth + " ngày";
}
