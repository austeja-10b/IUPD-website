const questions = [
    {
        question: "Kuri šalis labiausiai vertina eilės laikymąsi ir tikslumą, ypač viešosiose vietose?",
        answers: [
            {text: "JK", correct: true},
            {text: "Pietų Afrika", correct: false},
            {text: "Kanada", correct: false},
            {text: "JAV", correct: false},
        ],
        explanation: "Britai tiesiog dievina stovėti eilėse - tai jų savotiška tradicija. Daugiau paskaitykte apie tai JK „požymiai“ skiltyje."
    },
    {
        question: "Kuri šalis žinoma dėl savo griežtų maisto kultūros normų, kuriose būtina laikytis tam tikrų taisyklių, pvz., maistą valgyti tik su dešinėmis rankomis?",
        answers: [
            {text: "Indija", correct: true},
            {text: "Kanada", correct: false},
            {text: "Airija", correct: false},
            {text: "Pietų Afrika", correct: false},
        ],
        explanation: "Kairė ranka Indijoje laikoma nešvaria - tai susiję su higienos įpročiais. Daugiau paskaitykite apie tai Indijos „negalima“ skiltyje."
    },
    {
        question: "Kuri šalis mini Padėkos dieną lapkričio mėnesį?",
        answers: [
            {text: "Kanada", correct: false},
            {text: "Australija", correct: false},
            {text: "JAV", correct: true},
            {text: "Airija", correct: false},
        ],
        explanation: "Padėkos diena JAV švenčiama lapkričio ketvirtąjį ketvirtadienį. Daugiau apie tai paskaitykite JAV „šventės“ skiltyje."
    },
    {
        question: "Kuri šalis garsėja Braai?",
        answers: [
            {text: "Kanada", correct: false},
            {text: "Pietų Afrika", correct: true},
            {text: "Australija", correct: false},
            {text: "Indija", correct: false},
        ],
        explanation: "„Braai“ - tai tikra kultūros širdis Pietų Afrikoje. Daugiau apie tai paskaitykite Pietų Afrikos „požymiai“ skiltyje."
    },
    {
        question: "Kuri šalis žinoma dėl „No worries“ požiūrio į gyvenimą?",
        answers: [
            {text: "JAV", correct: false},
            {text: "Kanada", correct: false},
            {text: "Airija", correct: false},
            {text: "Australija", correct: true},
        ],
        explanation: "Australai garsėja savo atsipalaidavusiu požiūriu į gyvenimą. Daugiau apie tai paskaitykite Australijos „požymiai“ skiltyje."
    },
    {
        question: "Kurioje šalyje „Namaste“ yra įprastas pasisveikinimo būdas?",
        answers: [
            {text: "Pietų Afrika", correct: false},
            {text: "Indija", correct: true},
            {text: "Airija", correct: false},
            {text: "Australija", correct: false},
        ],
        explanation: "Indijoje dažniausiai sveikinamasi sudėjus delnus prie krūtinės ir lengvai linktelint galvą. Daugiau apie tai paskaitykite Indijos „požymiai“ siltyje."
    },
    {
        question: "Ką reiškia frazė „We're suckin' diesel“ Airijoje?",
        answers: [
            {text: "Viskas klostosi sklandžiai", correct: true},
            {text: "Traukiu dyzelį", correct: false},
            {text: "Viskas klostosi prastai", correct: false},
            {text: "Noriu išgerti", correct: false},
        ],
        explanation: "Daugiau paskaitykite apie tai Airijos „frazės“ skiltyje."
    },
    {
        question: "Kurioje šalyje įprasta sveikintis su visais kambaryje esančiais žmonėmis?",
        answers: [
            {text: "Pietų Afrika", correct: true},
            {text: "Airija", correct: false},
            {text: "JK", correct: false},
            {text: "Indija", correct: false},
        ],
        explanation: "Pietų Afrikoje įprasta pasisveikinti su kiekvienu kambaryje. Daugiau paskaitykite apie tai Pietų Afrikos „požymiai“ skiltyje."
    },
    {
        question: "Kuri šalis garsėja savo „sugar shacks“ tradicija?",
        answers: [
            {text: "JAV", correct: false},
            {text: "Kanada", correct: true},
            {text: "Airija", correct: false},
            {text: "JK", correct: false},
        ],
        explanation: "Pavasarį, kai prasideda sulos rinkimas, visoje šalyje žmonės plūsta į „sugar shacks“. Daugiau paskaitykite apie tai Kanados „požymiai“ skiltyje."
    },
    {
        question: "Kurioje šalyje „small talk“ prieš verslo susitikimus yra įprasta praktika?",
        answers: [
            {text: "JAV", correct: false},
            {text: "Kanada", correct: true},
            {text: "Pietų Afrika", correct: false},
            {text: "Australija", correct: false},
        ],
        explanation: "Kanadiečiai mėgsta prieš verslo ar darbo susitikimus trumpai pasikalbėti. Daugiau paskaitykite apie tai Kanados „požymiai“ skiltyje."
    },
    {
        question: "Kurioje šalyje populiarus patiekalas yra „bunny chow“ - duona, pripildyta kario?",
        answers: [
            {text: "Indija", correct: false},
            {text: "Australija", correct: false},
            {text: "Kanada", correct: false},
            {text: "Pietų Afrika", correct: true},
        ],
        explanation: "Daugiau apie tai paskaitykite Pietų Afrikos „maistas“ skiltyje."
    },
    {
        question: "Kurioje šalyje „shoey“ - gėrimas iš bato - yra populiari tradicija?",
        answers: [
            {text: "Australija", correct: true},
            {text: "JAV", correct: false},
            {text: "Airija", correct: false},
            {text: "Kanada", correct: false},
        ],
        explanation: "Australų tradicija yra gerti alų iš bato, dažniausiai po pergalės. Daugiau paskaitykite apie tai Australijos „požymiai“ skiltyje."
    },
    {
        question: "Kurioje šalyje karvės laikomos šventomis ir laisvai vaikšto gatvėse?",
        answers: [
            {text: "Pietų Afrika", correct: false},
            {text: "Kanada", correct: false},
            {text: "Airija", correct: false},
            {text: "Indija", correct: true},
        ],
        explanation: "Karvės Indijoje yra laikomos šventomis ir turi ypatingą vietą kultūroje. Daugiau paskaitykite apie tai Indijos „požymiai“ skiltyje."
    },
    {
        question: "Kurioje šalyje laikoma nemandagu priimti ką nors iš pirmo pasiūlymo?",
        answers: [
            {text: "Kanada", correct: false},
            {text: "JAV", correct: false},
            {text: "Airija", correct: true},
            {text: "Indija", correct: false},
        ],
        explanation: "Airiai vertina, kai pirmą kartą atsisakai ir tik vėliau priimi pasiūlymą. Daugiau paskaitykite apie tai Airijos „negalima“ skiltyje."
    },
    {
        question: "Kieno ši citata? „It always seems impossible until it's done“",
        answers: [
            {text: "Barack Obama", correct: false},
            {text: "Elvis Presley", correct: false},
            {text: "Nelson Mandela", correct: true},
            {text: "Mahatma Gandhi", correct: false},
        ],
        explanation: "Daugiau paskaitykite apie tai Pietų Afrikos „įžymybės“ skiltyje."
    },
    {
        question: "Kokios tautybės yra „Deadpool“ aktorius Ryan Reynolds?",
        answers: [
            {text: "JAV", correct: false},
            {text: "Kanadietis", correct: true},
            {text: "Australas", correct: false},
            {text: "Airis", correct: false},
        ],
        explanation: "Daugiau paskaitykite apie tai Kanados „įžymybės“ skiltyje."
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
    shuffleQuestions();
    nextButton.innerHTML = "Toliau";
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
    questionElement.innerHTML = `Tu surinkai ${score} iš ${questions.length}!`;
    nextButton.innerHTML = "Bandyk dar kartą";
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
