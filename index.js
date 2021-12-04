var the_choices = ["r" , "p" , "s"]


var the_wins_of_user = 0;
var the_wins_of_pc = 0;
var draws_of_both = 0;
var the_choice_of_user = null;
var the_choice_of_pc = null;


function range (max, min) {
    return Math.floor (Math.random() * (max - min) + min)
}
function pc_row () {
    var t = range(0, 3);
    the_choice_of_pc = the_choices[t];
}
var playerWinOrLose = document.getElementById('playerWinOrLose')
var pcWinOrLose = document.getElementById('pcWinOrLose')
var pScore = document.getElementById('pScore')
var cScore = document.getElementById('cScore')
var pChoice = document.getElementById('pChoice')
var cChoice = document.getElementById('cChoice')
var pImages = document.getElementById('pImages')
var cImages = document.getElementById('cImages')


function congralutations(win) {
    if (win === 'playerWin') {
        playerWinOrLose.innerText = "Win"
        pcWinOrLose.innerText = "Lose"
        playerWinOrLose.style.color = "#28a745"
        pcWinOrLose.style.color = "#dc3545"
        the_wins_of_user++;
    } else if (win === 'pcWin') {
        playerWinOrLose.innerText = "Lose"
        pcWinOrLose.innerText = "Win"
        playerWinOrLose.style.color = "#dc3545"
        pcWinOrLose.style.color =  "#28a745"
        the_wins_of_pc++;
    } else {
        playerWinOrLose.innerText = "DRAW"
        pcWinOrLose.innerText = "DRAW"
        pcWinOrLose.style.color = "#000"
        playerWinOrLose.style.color = "#000"
    }
}

window.onkeyup = function (e) {
    pc_row();

     if (e.key != 'r' && e.key != 'p' && e.key != 's') {
      alert("You choose wrong!")
      return;
    }
    the_choice_of_user = e.key;
    if (the_choice_of_pc === 'r' && the_choice_of_user === 'p') {
        congralutations('playerWin')
    } else if (the_choice_of_pc === 'p' && the_choice_of_user === 'r') {
      congralutations('pcWin')

    } else if (the_choice_of_pc === 's' && the_choice_of_user === 'r') {
      congralutations('playerWin')
    } else if (the_choice_of_pc === 'r' && the_choice_of_user === 's') {
        congralutations('pcWin')
    } else if (the_choice_of_pc === 'p' && the_choice_of_user === 's') {
        congralutations('playerWin')
    } else if (the_choice_of_pc === 's' && the_choice_of_user === 'p') {
        congralutations('pcWin')
    } else if (the_choice_of_pc === the_choice_of_user) {
       
        alert("Choices are equal")
       
    }
    pScore.innerHTML = `Point: ${the_wins_of_user}`;
    cScore.innerHTML = `Point: ${the_wins_of_pc}`;

    if(the_choice_of_user === 'r') {
        pImages.src = "./assets/img/r.png";
        pChoice.innerText = 'Rock';
    }else if (the_choice_of_user === 'p') {
        pImages.src = './assets/img/p.png';
        pChoice.innerText = 'Paper'
    } else if (the_choice_of_user === 's') {
        pImages.src = './assets/img/s.png';
        pChoice.innerText = 'Scissors' }


  if (the_wins_of_pc === 'r') {
  cImages.src = './assets/img/r.png';
  cChoice.innerText = 'Rock'
  } else if (the_choice_of_pc === 's') {
  cImages.src = './assets/img/s.png';
  cChoice.innerText = 'Scissors'
 } else if (the_choice_of_pc === 'p') {
   cImages.src = './assets/img/p.png';
   cChoice.innerText = 'Paper' }
}