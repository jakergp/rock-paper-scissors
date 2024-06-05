const names = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice <= 1) return 1; 
    if (choice <= 2) return 2;
    return 3;
}

function getHumanChoice() {
    let choice = prompt("Choose: 1)Rock 2)Paper 3)Scissors");
    if (choice == '1') return 1;
    if (choice == '2') return 2;
    if (choice == '3') return 3;
    console.log("Invalid choice.");
    return getHumanChoice();
}

function playRound() {
    let cpu = getComputerChoice();
    let human = getHumanChoice();

    console.log("cpu chose: " + names[cpu-1]);
    console.log("you chose:" +  names[human-1]);

    if(cpu == human) {
        console.log("Tie. \nPlay again.");
         return playRound();
    }

    if (cpu > human) {
        if(cpu == 3 && human == 1) return 1;
        return 0;
    }

    if (human > cpu) {
        if(human == 3 && cpu == 1) return 0;
        return 1;
    }
}

let cpuScore= 0;
let humanScore = 0;

while(humanScore < 3 && cpuScore < 3) {
    winner = playRound();
    winner ? console.log("You win!") : console.log("Cpu Wins!");
    winner ? humanScore++ : cpuScore++;

    console.log("Score");
    console.log("You: " + humanScore);
    console.log("CPU: " + cpuScore);
} 

