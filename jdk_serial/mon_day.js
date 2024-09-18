// const sprintf = require("sprintf-js").sprintf;
let whiteboard = document.getElementById("whiteboard");
console.log(whiteboard);

case2();
// case3();

// Y + (2000 + mmdd) + ['01', '02']
function case2() {
  console.log("test");
  let output;
  const digit_6_7 = ["01", "02"];
  const mon = 12;
  const dd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const digit_2 = 2000;
  let mmdd;

  // month loop
  for (let m = 1; m <= mon; m++) {
    // days loop
    dd.forEach((d) => {
      if (dd.length < 2) {
        mmdd = String(m) + "0" + String(dd[d]);
      } else {
        mmdd = String(m) + String(d);
      }
      mmdd = String(Number(mmdd) + digit_2);

      // 6,7 loop
      digit_6_7.forEach((digit_6_7_ele) => {
        output = "Y" + mmdd + digit_6_7_ele;
        print_on_whiteboard(output);
      });
    });
  }
}

// 部署コード ＋　月
function case3() {
  let dept_cd = ["1000", "2000", "3000", "4000"];

  dept_cd.forEach((element) => {
    for (let month = 1; month < 13; month++) {
      if (String(month).length < 2) {
        print_on_whiteboard("Y" + element + "0" + String(month));
      } else {
        print_on_whiteboard("Y" + element + String(month));
      }
    }
  });
}

function print_on_whiteboard(str) {
  let text = document.createElement("div");
  text.textContent = str;

  console.log(whiteboard);

  whiteboard.appendChild(text);
}

function outter_list() {
  console.log(l);
}
