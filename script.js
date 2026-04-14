let started = false;
let index = 0;

const questions = [
  "Are you happy to go through this session?",
  "Am I lovable?",
  "Do you think this birthday will be happier than previous years?",
  "Do you think this will be a good surprise for you?"
];

const question = document.getElementById("question");
const giftImg = document.getElementById("giftImg");
const fightGif = document.getElementById("fightGif");
const noText = document.getElementById("noText");
const finalMessage = document.getElementById("finalMessage");
const buttons = document.getElementById("buttons");
const music = document.getElementById("bgMusic");
const photoSection = document.getElementById("photoSection");

function startMusic() {
  if (!started) {
    music.play();
    started = true;
  }
}

function answerYes() {
  startMusic();

  fightGif.classList.add("hidden");
  noText.innerText = "";

  giftImg.classList.remove("hidden");

  setTimeout(() => {
    giftImg.classList.add("hidden");
    index++;

    if (index < questions.length) {
      question.innerText = questions[index];
    } else {
      question.style.display = "none";
      buttons.style.display = "none";
      finalMessage.style.display = "block";
      photoSection.style.display = "block";
    }
  }, 1500);
}

function answerNo() {
  startMusic();
  giftImg.classList.add("hidden");
  fightGif.classList.remove("hidden");
  noText.innerText = "hey dog, go and click the yes";
}
