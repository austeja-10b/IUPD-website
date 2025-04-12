const questions = [
    {
        question: "Which country values queuing and punctuality the most, especially in public places?",
        answers: [
            {text: "UK", correct: true},
            {text: "South Africa", correct: false},
            {text: "Canada", correct: false},
            {text: "USA", correct: false},
        ]
    },
    {
        question: "Which country is known for its strict food culture norms, where it's required to follow certain rules, such as eating food only with the right hand?",
        answers: [
            {text: "India", correct: true},
            {text: "Canada", correct: false},
            {text: "Ireland", correct: false},
            {text: "South Africa", correct: false},
        ]
    },
    {
        question: "Which country celebrates Thanksgiving in November?",
        answers: [
            {text: "Canada", correct: false},
            {text: "Australia", correct: false},
            {text: "USA", correct: true},
            {text: "Ireland", correct: false},
        ]
    },
    {
        question: "Which country is famous for Braai?",
        answers: [
            {text: "Canada", correct: false},
            {text: "South Africa", correct: true},
            {text: "Australia", correct: false},
            {text: "India", correct: false},
        ]
    },
    {
        question: "Which country is known for its 'No worries' attitude towards life?",
        answers: [
            {text: "USA", correct: false},
            {text: "Canada", correct: false},
            {text: "Ireland", correct: false},
            {text: "Australia", correct: true},
        ]
    },
    {
        question: "In which country is 'Namaste' a common greeting?",
        answers: [
            {text: "South Africa", correct: false},
            {text: "India", correct: true},
            {text: "Ireland", correct: false},
            {text: "Australia", correct: false},
        ]
    },
    {
        question: "What does the phrase 'We're suckin' diesel' mean in Ireland?",
        answers: [
            {text: "Everything is going smoothly", correct: true},
            {text: "I'm sucking diesel", correct: false},
            {text: "Everything is going poorly", correct: false},
            {text: "I want to drink", correct: false},
        ]
    },
    {
        question: "In which country is it customary to greet all the people in the room?",
        answers: [
            {text: "South Africa", correct: true},
            {text: "Ireland", correct: false},
            {text: "UK", correct: false},
            {text: "India", correct: false},
        ]
    },
    {
        question: "Which country is famous for its 'sugar shacks' tradition?",
        answers: [
            {text: "USA", correct: false},
            {text: "Canada", correct: true},
            {text: "Ireland", correct: false},
            {text: "UK", correct: false},
        ]
    },
    {
        question: "In which country is 'small talk' before business meetings a common practice?",
        answers: [
            {text: "USA", correct: false},
            {text: "Canada", correct: true},
            {text: "South Africa", correct: false},
            {text: "Australia", correct: false},
        ]
    },
    {
        question: "In which country is a popular dish 'bunny chow' - bread filled with curry?",
        answers: [
            {text: "India", correct: false},
            {text: "Australia", correct: false},
            {text: "Canada", correct: false},
            {text: "South Africa", correct: true},
        ]
    },
    {
        question: "In which country is 'shoey' - drinking from a shoe - a popular tradition?",
        answers: [
            {text: "Australia", correct: true},
            {text: "USA", correct: false},
            {text: "Ireland", correct: false},
            {text: "Canada", correct: false},
        ]
    },
    {
        question: "In which country are cows considered sacred and freely walk in the streets?",
        answers: [
            {text: "South Africa", correct: false},
            {text: "Canada", correct: false},
            {text: "Ireland", correct: false},
            {text: "India", correct: true},
        ]
    },
    {
        question: "In which country is it considered impolite to accept something at the first offer?",
        answers: [
            {text: "Canada", correct: false},
            {text: "USA", correct: false},
            {text: "Ireland", correct: true},
            {text: "India", correct: false},
        ]
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
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
    backToHomeBtn.style.display = "inline-block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
