var readlineSync = require("readline-sync")
var userName = readlineSync.question("Your name please: ");
console.log("Welcome " + userName + "! Let's see how well do you know mamta");
console.log("---------------------------------")

var score = 0;

function game(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        score = score + 1;
        console.log("Your answer is absoultly right!\nYour current score is: " + score);

    }
    else {
        console.log("You don't know me man!\nYour current score is: " + score)

    }
}

var questions = [
    {
        question: "Where do I live? ",
        answer: "Sakinaka"
    },

    {
        question: "Which is my favourite song?",
        answer: "Lag jaa gale"
    },
    {
        question: "What is my favourite color? ",
        answer: "black"
    },
    {
        question: "Who is my favourite player? ",
        answer: "Dhoni"
    },
    {
        question: "What is my favourite food? ",
        answer: "Pav bhaji"
    },
    {
        question: "Do i like oggy and the cockroaches? ",
        answer: "No"
    },
]

for (var i = 0; i < questions.length; i++) {
    game(questions[i].question, questions[i].answer)
    console.log("---------------------------------")
}

console.log("Your final score is: " + score)


