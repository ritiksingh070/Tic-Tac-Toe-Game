let btn = document.querySelectorAll("button");
let turnO = true;
let newGame = document.querySelector(".newGame");
let winMsg = document.querySelector("h2");
let btnClicks = 0;

btn.forEach((Element) => {
  Element.addEventListener("click", () => {
    if (turnO == true) {
      Element.innerText = "0";
      turnO = false;
    } else {
      Element.innerText = "X";
      turnO = true;
    }
    Element.disabled = true;
    checkWinner();
  });
});
newGame.addEventListener("click", () => {
  btn.forEach((Element) => {
    Element.disabled = false;
    Element.innerText = "";
    turn0 = true;
  });
  newGame.innerText = "New Game";
  winMsg.innerText = "";
});

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  btnClicks = btnClicks + 1;
  for (let pattern of winPattern) {
    let p1 = btn[pattern[0]].innerText;
    let p2 = btn[pattern[1]].innerText;
    let p3 = btn[pattern[2]].innerText;
    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 == p2 && p2 == p3) {
        console.log("Winner", p1);
        winMsg.innerText = `Congratulations ,${p1} is the Winner !`;

        btn.forEach((Element) => {
          Element.disabled = true;
        });
        newGame.disabled = false;
      } else if (btnClicks == 9) {
        winMsg.innerText = `Match Draw,Please Play again !`;
      }
    }
  }
};
