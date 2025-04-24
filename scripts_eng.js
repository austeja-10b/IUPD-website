const questions = [
    {
        question: "Which country values queuing and punctuality the most, especially in public places?",
        answers: [
            {text: "UK", correct: true},
            {text: "South Africa", correct: false},
            {text: "Canada", correct: false},
            {text: "USA", correct: false},
        ],
        explanation: "The British absolutely love standing in queues - it's their quirky tradition. Read more in The UK 'characteristics' section."
    },
    {
        question: "Which country is known for its strict food culture norms, where it's required to follow certain rules, such as eating food only with the right hand?",
        answers: [
            {text: "India", correct: true},
            {text: "Canada", correct: false},
            {text: "Ireland", correct: false},
            {text: "South Africa", correct: false},
        ],
        explanation: "The left hand in India is considered unclean due to hygiene customs. Read more in India 'Don'ts' section."
    },
    {
        question: "Which country celebrates Thanksgiving in November?",
        answers: [
            {text: "Canada", correct: false},
            {text: "Australia", correct: false},
            {text: "USA", correct: true},
            {text: "Ireland", correct: false},
        ],
        explanation: "Thanksgiving day in the USA is celebrated on the fourth Thursday of November. Read more in the USA 'Holidays' section."
    },
    {
        question: "Which country is famous for Braai?",
        answers: [
            {text: "Canada", correct: false},
            {text: "South Africa", correct: true},
            {text: "Australia", correct: false},
            {text: "India", correct: false},
        ],
        explanation: "'Braai' - the real heart of the culture in South Africa. Read more in South Africa 'characteristics' section."
    },
    {
        question: "Which country is known for its 'No worries' attitude towards life?",
        answers: [
            {text: "USA", correct: false},
            {text: "Canada", correct: false},
            {text: "Ireland", correct: false},
            {text: "Australia", correct: true},
        ],
        explanation: "Australians are known for their relaxed approach to life. Read more in Australia 'characteristics' section."
    },
    {
        question: "In which country is 'Namaste' a common greeting?",
        answers: [
            {text: "South Africa", correct: false},
            {text: "India", correct: true},
            {text: "Ireland", correct: false},
            {text: "Australia", correct: false},
        ],
        explanation: "In India, people commonly greet each other by pressing their palms together at chest level and slightly bowing the head. Read more in India 'characteristics' section."
    },
    {
        question: "What does the phrase 'We're suckin' diesel' mean in Ireland?",
        answers: [
            {text: "Everything is going smoothly", correct: true},
            {text: "I'm sucking diesel", correct: false},
            {text: "Everything is going poorly", correct: false},
            {text: "I want to drink", correct: false},
        ],
        explanation: "Read more in Ireland 'phrases' section."
    },
    {
        question: "In which country is it customary to greet all the people in the room?",
        answers: [
            {text: "South Africa", correct: true},
            {text: "Ireland", correct: false},
            {text: "UK", correct: false},
            {text: "India", correct: false},
        ],
        explanation: "In South Africa, it is customary to greet with everyone in the room. Read more in South Africa 'characteristics' section."
    },
    {
        question: "Which country is famous for its 'sugar shacks' tradition?",
        answers: [
            {text: "USA", correct: false},
            {text: "Canada", correct: true},
            {text: "Ireland", correct: false},
            {text: "UK", correct: false},
        ],
        explanation: "In the spring, when sap collection begins, people flock to 'sugar shacks'. Read more in Canada 'characteristics' section."
    },
    {
        question: "In which country is 'small talk' before business meetings a common practice?",
        answers: [
            {text: "USA", correct: false},
            {text: "Canada", correct: true},
            {text: "South Africa", correct: false},
            {text: "Australia", correct: false},
        ],
        explanation: "Canadians love to small talk before business or work meetings. Read more in Canada 'characteristics' section."
    },
    {
        question: "In which country is a popular dish 'bunny chow' - bread filled with curry?",
        answers: [
            {text: "India", correct: false},
            {text: "Australia", correct: false},
            {text: "Canada", correct: false},
            {text: "South Africa", correct: true},
        ],
        explanation: "Read more in South Africa 'food' section."
    },
    {
        question: "In which country is 'shoey' - drinking from a shoe - a popular tradition?",
        answers: [
            {text: "Australia", correct: true},
            {text: "USA", correct: false},
            {text: "Ireland", correct: false},
            {text: "Canada", correct: false},
        ],
        explanation: "Australian tradition is to drink beer from a shoe. Read more in Australia 'characteristics' section."
    },
    {
        question: "In which country are cows considered sacred and freely walk in the streets?",
        answers: [
            {text: "South Africa", correct: false},
            {text: "Canada", correct: false},
            {text: "Ireland", correct: false},
            {text: "India", correct: true},
        ],
        explanation: "Cows are considered sacred in India and hold a special place in the culture. Read more in India 'characterstics' section."
    },
    {
        question: "In which country is it considered impolite to accept something at the first offer?",
        answers: [
            {text: "Canada", correct: false},
            {text: "USA", correct: false},
            {text: "Ireland", correct: true},
            {text: "India", correct: false},
        ],
        explanation: "The Irish appreciate it when you politely refuse the first offer and only accept help later. Read more in Ireland 'Don'ts' section."
    },
    {
        question: "Who said this quote? 'It always seems impossible until it's done'",
        answers: [
            {text: "Barack Obama", correct: false},
            {text: "Elvis Presley", correct: false},
            {text: "Nelson Mandela", correct: true},
            {text: "Mahatma Gandhi", correct: false},
        ],
        explanation: "Read more in South Africa 'celebs' section."
    },
    {
        question: "Which nationality is the 'Deadpool' actor Ryan Reynolds?",
        answers: [
            {text: "USA", correct: false},
            {text: "Canadian", correct: true},
            {text: "Australian", correct: false},
            {text: "Irish", correct: false},
        ],
        explanation: "Read more in Canada 'celebs' section."
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backToHomeBtn = document.createElement("a");

backToHomeBtn.href = "index_eng.html";
backToHomeBtn.textContent = "Back to Home";
backToHomeBtn.classList.add("back-home-btn");
backToHomeBtn.style.display = "none";

document.querySelector(".app").appendChild(backToHomeBtn);

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestion = 0;
    score = 0;
    shuffleQuestions();
    nextButton.innerHTML = "Next";
    showQuestion();
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}


function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    document.getElementById("explanation").innerText = "";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    selectedBtn.classList.add(isCorrect ? "correct" : "incorrect");

    if (isCorrect) score++;

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    const explanation = questions[currentQuestionIndex].explanation;
    document.getElementById("explanation").innerText = explanation || "";
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
    backToHomeBtn.style.display = "inline-block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
