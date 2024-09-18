let whiteboard = document.getElementById("whiteboard");
console.log(whiteboard);

// case2();
case3();

// Y + (2000 + mmdd) + ['01', '02']
function case2() {
  console.log("test");

  let output;
}

// 部署コード ＋　月
function case3() {
  let dept_cd = ["1000", "2000", "3000", "4000"];

  dept_cd.forEach((element) => {
    for (let month = 1; month < 13; month++) {
      print_on_whiteboard(element + String(month));
    }
  });
}

function print_on_whiteboard(str) {
  let text = document.createElement("div");
  text.textContent = str;

  console.log(whiteboard);

  whiteboard.appendChild(text);
}
