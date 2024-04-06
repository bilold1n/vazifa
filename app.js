let btn = document.querySelector("#pouse");
let btn2 = document.querySelector(".container");
let btn1 = document.querySelector(".sts");
let title = document.querySelector("#id");
let pouse = document.querySelector("#pouse");
let start = document.querySelector("#start");
let idd = document.querySelector(".idd");
let minute = +prompt("son kiriting");
let secund = 0;
let soat = 0;

start.addEventListener("click", () => {
  const interval = setInterval(() => {
    let son = Math.floor(minute / 60);
    if (son > 0) {
      soat = son;
      minute = minute - son * 60;
    }
    if (minute >= 1 && secund == 0) {
      secund = 60;
      minute -= 1;
    }
    if (minute == 0 && secund == 0) {
      minute = 59;
      secund = 60;
      soat -= 1;
    }
    if (secund == 0) {
      alert("sonlar tugadi");
    } else {
      secund -= 1;
    }
    title.textContent = `${soat < 10 ? `0${soat}` : soat}:${
      minute < 10 ? `0${minute}` : minute
    }:
            ${secund < 10 ? `0${secund}` : secund}`;
  }, 1000);
  start.disabled = true;
  pouse.disabled = false;
  pouse.addEventListener("click", () => {
    start.disabled = false;
    pouse.disabled = true;

    clearInterval(interval);
  });
  let simbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  function randomColor() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * 15);
      hex += simbols[index];
    }
    return hex;
  }
  btn1.addEventListener("click", () => {
    let deg = Math.floor(Math.random() * 180);
    let gradiend = `linear-gradient(${deg}deg,${randomColor()},${randomColor()},${randomColor()})`;
    btn2.style.backgroundColor = randomColor();
    btn2.style.backgroundImage = gradiend;
  });
  btn.addEventListener("click", () => {
    let deg = Math.floor(Math.random() * 180);
    let gradiend = `linear-gradient(${deg}deg,${randomColor()},${randomColor()},${randomColor()})`;
    btn2.style.backgroundColor = randomColor();
    btn2.style.backgroundImage = gradiend;
  });
  btn2.addEventListener("click", () => {
    let deg = Math.floor(Math.random() * 180);
    let gradiend = `linear-gradient(${deg}deg,${randomColor()},${randomColor()},${randomColor()})`;
    document.body.style.backgroundColor = randomColor();
    document.body.style.backgroundImage = gradiend;
    idd.textContent = "";
  });
});
