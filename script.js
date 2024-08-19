const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: "Paris"
    },
    {
        question: "Which language is used for web development?",
        choices: ["Python", "JavaScript", "C++", "Java"],
        correct: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        correct: "Cascading Style Sheets"
    },
    {
        question: "Who is the President of the US in 2024?",
        choices: ["Joe Biden", "Donald Trump", "Barack Obama", "Kamala Harris"],
        correct: "Joe Biden"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = '';

    const questionElement = document.createElement("h2");
    questionElement.textContent = quizData[currentQuestionIndex].question;
    quizContainer.appendChild(questionElement);

    quizData[currentQuestionIndex].choices.forEach(choice => {
        const choiceElement = document.createElement("div");
        choiceElement.className = "choice";

        const radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "answer";
        radioElement.value = choice;
        choiceElement.appendChild(radioElement);

        const labelElement = document.createElement("label");
        labelElement.textContent = choice;
        choiceElement.appendChild(labelElement);

        quizContainer.appendChild(choiceElement);
    });
}

function nextQuestion() {
    const selectedChoice = document.querySelector('input[name="answer"]:checked');
    if (selectedChoice) {
        if (selectedChoice.value === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            document.getElementById("next").disabled = true;
            document.getElementById("submit").disabled = false;
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
}

function submitQuiz() {
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = `You scored ${score} out of ${quizData.length}`;
    document.getElementById("quiz").style.display = "none";
    document.getElementById("submit").style.display = "none";
}

document.getElementById("submit").disabled = true;
loadQuestion();
