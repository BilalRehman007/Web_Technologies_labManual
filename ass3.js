const questions = [
  { q: "What does CPU stand for?", options: ["Central Performance Unit", "Central Processing Unit"], answer: 1 },
  { q: "Which of the following is a web browser?", options: ["Google Chrome", "Window"], answer: 0 },
  { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Transfer Markup Language"], answer: 0 },
  { q: "Flexbox helps in creating responsive layouts.", options: ["True", "False"], answer: 0 },
  { q: "Which language is used to style web pages?", options: ["Python", "CSS"], answer: 1 }
];

let index = 0;
let score = 0;
let locked = false;

// Buttons
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

// Screens
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

// Events
startBtn.onclick = startQuiz;
nextBtn.onclick = nextQuestion;
restartBtn.onclick = restartQuiz;

function startQuiz() {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  loadQuestion();
}

function loadQuestion() {
  locked = false;
  nextBtn.style.display = "none";

  const q = questions[index];
  document.getElementById("questionText").textContent = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i, btn);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected, btnElement) {
  if (locked) return;
  locked = true;

  const correctIndex = questions[index].answer;
  const options = document.querySelectorAll('.option');

  if (selected === correctIndex) {
    btnElement.classList.add('correct');
    score++;
  } else {
    btnElement.classList.add('wrong');
    options[correctIndex].classList.add('correct');
  }

  nextBtn.style.display = "block";
}

function nextQuestion() {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  document.getElementById("scoreDisplay").textContent = `${score} / ${questions.length}`;
  document.getElementById("finalMessage").textContent =
    score >= 4 ? "Great Job!" : "Try Again!";
}

function restartQuiz() {
  index = 0;
  score = 0;
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
}
