let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was drawn. Play again.";
};

const showWinner = (userwin, choiceId, compChoice) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (choiceId) => {
    console.log("User choice =", choiceId);
    const compChoice = genComputerChoice();
    console.log("Comp choice =", compChoice);
    if (choiceId === compChoice) {
        drawGame();
    } else {
        let userwin = true;
        if (choiceId === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (choiceId === "paper") {
            userwin = compChoice === "scissor" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, choiceId, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});
