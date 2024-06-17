const names = ["rock", "paper", "scissors"];

let cpuScore= 0;
let humanScore = 0;
let finished = false;

function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice <= 1) return 1; 
    if (choice <= 2) return 2;
    return 3;
}

function playRound(human_choice) {
    if (finished) return;

    let cpu = getComputerChoice();
    let human = human_choice;

    const cpu_html = document.querySelector("#cpu-option")
    const human_html = document.querySelector("#human-option")

    cpu_html.textContent = names[cpu-1];
    human_html.textContent = names[human-1];

    let option = 2;

    if (cpu > human) {
        if(cpu == 3 && human == 1) option = 1;
        else option = 0;
    }

    else if (human > cpu) {
        if(human == 3 && cpu == 1) option = 0;
        else option = 1;
    }
    
    winner(option);
    updateScore();

    if(cpuScore == 5 || humanScore == 5) matchWinner();
}

function updateScore() {
    const score = document.querySelector("#score");
    score.textContent = "You: " + humanScore + " CPU: " + cpuScore;
}

function winner(option) {
    const cpu_html = document.querySelector("#cpu-option")
    const human_html = document.querySelector("#human-option")

    if (option == 0) {
        cpu_html.style.backgroundColor = "#A6EB38";
        human_html.style.backgroundColor = "white";
        cpuScore++;
    }
    else if (option == 1) {
        human_html.style.backgroundColor = "#A6EB38";
        cpu_html.style.backgroundColor = "white";
        humanScore++;
    }
    else {
        cpu_html.style.backgroundColor = "white";
        human_html.style.backgroundColor = "white";
    }
}

function matchWinner() {
    const winner = document.querySelector("#winner");
    if(cpuScore == 5) winner.textContent = "CPU Wins.";
    else winner.textContent = "You Win!";
    finished = true;
}

const btn_rock = document.querySelector("#btn-rock");
btn_rock.addEventListener("click", () => {playRound(1)});

const btn_paper = document.querySelector("#btn-paper");
btn_paper.addEventListener("click", () => {playRound(2)});

const btn_scissors = document.querySelector("#btn-scissors");
btn_scissors.addEventListener("click", () => {playRound(3)});
