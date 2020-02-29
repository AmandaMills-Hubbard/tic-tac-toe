function checkWin() {
  let win =[[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];

  for (let i = 0; i < win.length; i++){
    // is equal to combo we are atV
    const currentCombo = win[i];

    const firstBox = document.getElementById(win[i][0]).innerHTML;
    const secondBox = document.getElementById(win[i][1]).innerHTML;
    const thirdBox = document.getElementById(currentCombo[2]).innerHTML;

    if(firstBox === "O" || firstBox === "X")
    {
      if(firstBox === secondBox && firstBox === thirdBox){
        return true;
      }
    }
  }
  return false;
}

// forEach((win, i) => document.getElementById("1").addEventListener("click" {
//   document.getElementById("1").innerHTML = "'<img src = "images/ex.png"/>';"
const tacs = document.querySelectorAll(".tac")

let TURN = 'X';//replace with img tag?
"X".innerHtml = '<img src = "images/ex.png"/>'
tacs.forEach((tacElm, i) => {
  tacElm.addEventListener("click", function (event) {
    const tacClicked = event.target;
    if (tacElm.innerHTML.length > -1) {
      tacElm = "";
}
    tacClicked.innerHTML = TURN;
    const isWinner = checkWin();
    if (isWinner) {
      alert("WINNER 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉")
    } else {

      if (TURN === 'X') {
        TURN = 'O';
      } else if (TURN == true) {
        document.querySelectorAll(".tac").style.pointerEvents = "none";
      } else{
        TURN = "X";
      }
    }
  })
  clear.addEventListener("click", function () {
      for(let i = 0; i < tacs.length; i++) {
          tacs[i].innerHTML = ""
      }
  });
});
