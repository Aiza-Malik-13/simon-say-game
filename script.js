let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];

let h2 = document.querySelector("h2");
let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is stated");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
    userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIndex = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIndex];
  let randomBtn = document.querySelector(`.${randomColor}`);
  gameSeq.push(randomColor);
  console.log(gameSeq);
  gameFlash(randomBtn);
}

function checkAnswer(index) {
  if (userSeq[index] === gameSeq[index]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over.... <b>Your score is ${level}</b> <br> Press any key to start again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 500)
    reset();
  }
}
function btnPress() {
  let btn = this;
  userFlash(btn);

  let usercolor = btn.getAttribute("id");
  console.log(usercolor);
  userSeq.push(usercolor);

  checkAnswer(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}
