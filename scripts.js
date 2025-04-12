const questions = [
    {
        question: "Kuri šalis labiausiai vertina eilės laikymąsi ir tikslumą, ypač viešosiose vietose?",
        answers: [
            {text: "JK", correct: true},
            {text: "Pietų Afrika", correct: false},
            {text: "Kanada", correct: false},
            {text: "JAV", correct: false},
        ]
    },
    {
        question: "Kuri šalis žinoma dėl savo griežtų maisto kultūros normų, kuriose būtina laikytis tam tikrų taisyklių, pvz., maistą valgyti tik su dešinėmis rankomis?",
        answers: [
            {text: "Indija", correct: true},
            {text: "Kanada", correct: false},
            {text: "Airija", correct: false},
            {text: "Pietų Afrika", correct: false},
        ]
    },
    {
        question: "Kuri šalis mini Padėkos dieną lapkričio mėnesį?",
        answers: [
            {text: "Kanada", correct: false},
            {text: "Australija", correct: false},
            {text: "JAV", correct: true},
            {text: "Airija", correct: false},
        ]
    },
    {
        question: "Kuri šalis garsėja Braai?",
        answers: [
            {text: "Kanada", correct: false},
            {text: "Pietų Afrika", correct: true},
            {text: "Australija", correct: false},
            {text: "Indija", correct: false},
        ]
    },
    {
        question: "Kuri šalis žinoma dėl „No worries“ požiūrio į gyvenimą?",
        answers: [
            {text: "JAV", correct: false},
            {text: "Kanada", correct: false},
            {text: "Airija", correct: false},
            {text: "Australija", correct: true},
        ]
    },
    {
        question: "Kurioje šalyje „Namaste“ yra įprastas pasisveikinimo būdas?",
        answers: [
            {text: "Pietų Afrika", correct: false},
            {text: "Indija", correct: true},
            {text: "Airija", correct: false},
            {text: "Australija", correct: false},
        ]
    },
    {
        question: "Ką reiškia frazė „We're suckin' diesel“ Airijoje?",
        answers: [
            {text: "Viskas klostosi sklandžiai", correct: true},
            {text: "Traukiu dyzelį", correct: false},
            {text: "Viskas klostosi prastai", correct: false},
            {text: "Noriu išgerti", correct: false},
        ]
    },
    {
        question: "Kurioje šalyje įprasta sveikintis su visais kambaryje esančiais žmonėmis?",
        answers: [
            {text: "Pietų Afrika", correct: true},
            {text: "Airija", correct: false},
            {text: "JK", correct: false},
            {text: "Indija", correct: false},
        ]
    },
    {
        question: "Kuri šalis garsėja savo „sugar shacks“ tradicija?",
        answers: [
            {text: "JAV", correct: false},
            {text: "Kanada", correct: true},
            {text: "Airija", correct: false},
            {text: "JK", correct: false},
        ]
    },
    {
        question: "Kurioje šalyje „small talk“ prieš verslo susitikimus yra įprasta praktika?",
        answers: [
            {text: "JAV", correct: false},
            {text: "Kanada", correct: true},
            {text: "Pietų Afrika", correct: false},
            {text: "Australija", correct: false},
        ]
    },
    {
        question: "Kurioje šalyje populiarus patiekalas yra „bunny chow“ - duona, pripildyta kario?",
        answers: [
            {text: "Indija", correct: false},
            {text: "Australija", correct: false},
            {text: "Kanada", correct: false},
            {text: "Pietų Afrika", correct: true},
        ]
    },
    {
        question: "Kurioje šalyje „shoey“ - gėrimas iš bato - yra populiari tradicija?",
        answers: [
            {text: "Australija", correct: true},
            {text: "JAV", correct: false},
            {text: "Airija", correct: false},
            {text: "Kanada", correct: false},
        ]
    },
    {
        question: "Kurioje šalyje karvės laikomos šventomis ir laisvai vaikšto gatvėse?",
        answers: [
            {text: "Pietų Afrika", correct: false},
            {text: "Kanada", correct: false},
            {text: "Airija", correct: false},
            {text: "Indija", correct: true},
        ]
    },
    {
        question: "Kurioje šalyje laikoma nemandagu priimti ką nors iš pirmo pasiūlymo?",
        answers: [
            {text: "Kanada", correct: false},
            {text: "JAV", correct: false},
            {text: "Airija", correct: true},
            {text: "Indija", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backToHomeBtn = document.createElement("a");
backToHomeBtn.href = "index.html";
backToHomeBtn.textContent = "Grįžti į pradžią";
backToHomeBtn.classList.add("back-home-btn");
backToHomeBtn.style.display = "none";

document.querySelector(".app").appendChild(backToHomeBtn);

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Toliau";
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
    questionElement.innerHTML = `Tu surinkai ${score} iš ${questions.length}!`;
    nextButton.innerHTML = "Bandyk dar kartą";
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
