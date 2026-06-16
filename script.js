const gameBoard = document.getElementById("gameBoard");

const movesText = document.getElementById("moves");
const matchedText = document.getElementById("matched");
const message = document.getElementById("message");

const bestScoreText = document.getElementById("bestScore");
const leastMovesText = document.getElementById("leastMoves");
const winsText = document.getElementById("wins");
const bestTimeText = document.getElementById("bestTime");

const timerText = document.getElementById("timer");
const resetBtn = document.getElementById("resetBtn");

let cards = ["🐶","🐱","🍎","🍌","🐶","🐱","🍎","🍌"];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

let moves = 0;
let matchedPairs = 0;

let seconds = 0;

let timer = setInterval(() => {
    seconds++;
    timerText.innerText = seconds;
},1000);

cards.sort(() => Math.random() - 0.5);

function createBoard(){

    gameBoard.innerHTML = "";

    cards.forEach((emoji)=>{

        const card = document.createElement("div");

        card.classList.add("card");

        card.dataset.value = emoji;

        card.innerText = "?";

        card.addEventListener("click",flipCard);

        gameBoard.appendChild(card);

    });

}

function flipCard(){

    if(lockBoard) return;

    if(this === firstCard) return;

    this.innerText = this.dataset.value;
    this.classList.add("flipped");

    if(!firstCard){

        firstCard = this;
        return;

    }

    secondCard = this;

    moves++;
    movesText.innerText = moves;

    checkMatch();

}

function checkMatch(){

    if(firstCard.dataset.value === secondCard.dataset.value){

        matchedPairs++;

        matchedText.innerText = matchedPairs;

        firstCard.removeEventListener("click",flipCard);
        secondCard.removeEventListener("click",flipCard);

        resetCards();

        if(matchedPairs === 4){

            winGame();

        }

    }
    else{

        lockBoard = true;

        setTimeout(()=>{

            firstCard.innerText = "?";
            secondCard.innerText = "?";

            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            resetCards();

        },1000);

    }

}

function resetCards(){

    firstCard = null;
    secondCard = null;
    lockBoard = false;

}

function winGame(){

    clearInterval(timer);

    message.innerText = "🎉 Congratulations! You Won!";

    let bestScore =
        Number(localStorage.getItem("bestScore")) || 0;

    bestScore += 10;

    localStorage.setItem("bestScore",bestScore);

    let wins =
        Number(localStorage.getItem("wins")) || 0;

    wins++;

    localStorage.setItem("wins",wins);

    let leastMoves =
        Number(localStorage.getItem("leastMoves"));

    if(!leastMoves || moves < leastMoves){

        localStorage.setItem(
            "leastMoves",
            moves
        );

    }

    let bestTime =
        Number(localStorage.getItem("bestTime"));

    if(!bestTime || seconds < bestTime){

        localStorage.setItem(
            "bestTime",
            seconds
        );

    }

    loadRecords();

}

function loadRecords(){

    bestScoreText.innerText =
        localStorage.getItem("bestScore") || 0;

    leastMovesText.innerText =
        localStorage.getItem("leastMoves") || 0;

    winsText.innerText =
        localStorage.getItem("wins") || 0;

    bestTimeText.innerText =
        localStorage.getItem("bestTime") || 0;

}

resetBtn.addEventListener("click",()=>{

    location.reload();

});

createBoard();
loadRecords();