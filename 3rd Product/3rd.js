
const Rock = document.getElementById("Rock");
const Scissors = document.getElementById("Scissors");
const Paper = document.getElementById("Paper");
const Player = document.getElementById("Player");
const Computer = document.getElementById("Computer");
const Result = document.getElementById("Result");

let playerChoice;
let actionNumber;
let result;
let computerChoice;

Rock.addEventListener('click', () => {
    playerChoice = "Rock";
    computerChoice = randomAction();
    Start();
    Notify();
})
Scissors.addEventListener('click', () => {
    playerChoice = "Scissors";
    computerChoice = randomAction();
    Start();
    Notify();

})
Paper.addEventListener('click', () => {
    playerChoice = "Paper";
    computerChoice = randomAction();
    Start();
    Notify();
})

function randomAction() {
    actionNumber = Math.floor((Math.random() * 3) + 1);
    switch(actionNumber){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Scissors";
            break;
        case 3:
            return "Paper";
            break;
    }
};
function Start() {
    switch(playerChoice){
        case "Rock":
            switch(computerChoice){
                case "Rock":
                    result = "Draw";
                    break;
                case "Scissors":
                    result = "Player win";
                    break;
                case "Paper":
                    result = "Computer win";
                    break;
            }
            break;
        case "Scissors":
            switch(computerChoice){
                case "Rock":
                    result = "Computer win";
                    break;
                case "Scissors":
                    result = "Draw";
                    break;
                case "Paper":
                    result = "Player win";
                    break;
            }
            break;
        case "Paper":
            switch(computerChoice){
                case "Rock":
                    result = "Player win";
                    break;
                case "Scissors":
                    result = "Computer win";
                    break;
                case "Paper":
                    result = "Draw";
                    break;
            }
            break;    
    }
}
function Notify() {
    Player.innerHTML = `Player: ${playerChoice}`;
    Computer.innerHTML = `Computer: ${computerChoice}`;
    Result.innerHTML = `Player: ${result}`;
    
    document.createElement('button');
}
                        // Example Js //
// const playerText = document.querySelector("#playerText");
// const computerText = document.querySelector("#computerText");
// const resultText = document.querySelector("#resultText");
// const choiceBtns = document.querySelectorAll(".choiceBtn");
// let player;
// let computer;
// let result;

// choiceBtns.forEach(button => button.addEventListener("click", () => {

//     player = button.textContent;
//     computerTurn();
//     playerText.textContent = `Player: ${player}`;
//     computerText.textContent = `Computer: ${computer}`;
//     resultText.textContent = checkWinner();
// }));

// function computerTurn(){

//     const randNum = Math.floor(Math.random() * 3) + 1;

//     switch(randNum){
//       case 1:
//         computer = "ROCK";
//         break;
//       case 2:
//         computer = "PAPER";
//         break;
//       case 3:
//         computer = "SCISSORS";
//         break;
//     }
// }
// function checkWinner(){
//     if(player == computer){
//       return "Draw!";
//     }
//     else if(computer == "ROCK"){
//       return (player == "PAPER") ? "You Win!" : "You Lose!"
//     }
//     else if(computer == "PAPER"){
//       return (player == "SCISSORS") ? "You Win!" : "You Lose!"
//     }
//     else if(computer == "SCISSORS"){
//       return (player == "ROCK") ? "You Win!" : "You Lose!"
//     }
// }