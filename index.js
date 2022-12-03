const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
var main = document.querySelector("#main");
var clock = document.querySelector(".clock");
var chWhite = document.querySelector(".ch-white");
var choriginal = document.querySelector(".ch-original");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000);

chWhite.addEventListener("click", function () {
  main.style.backgroundColor = "#fff";
  clock.style.backgroundColor = "#091921";
});
choriginal.addEventListener("click", function () {
  main.style.backgroundColor = "#091921";
  clock.style.backgroundColor = "#fff";
});
