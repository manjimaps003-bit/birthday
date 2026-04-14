<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>A Little Birthday Surprise 🌸</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to bottom, #ffeef3, #fff7fb);
  color: #5a3e4c;
  text-align: center;
  overflow-x: hidden;
}

section {
  padding: 40px 20px;
  display: none;
}

h1, h2 {
  font-weight: 500;
}

button {
  background: #f6b7c1;
  border: none;
  padding: 12px 22px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  color: #5a3e4c;
}

button:hover {
  background: #f2a9b5;
}

.question {
  margin: 25px 0;
}

.options label {
  margin: 0 10px;
  cursor: pointer;
}

.fade {
  opacity: 0;
  animation: fadeIn 2s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* Images */
.gallery img {
  width: 85%;
  max-width: 300px;
  border-radius: 20px;
  margin: 15px 0;
  opacity: 0;
  animation: fadeIn 2s forwards;
}

/* Confetti */
.confetti {
  position: fixed;
  width: 8px;
  height: 8px;
  background: pink;
  top: -10px;
  animation: fall 4s linear infinite;
  opacity: 0.6;
}

@keyframes fall {
  to { transform: translateY(110vh) rotate(360deg); }
}
</style>
</head>

<body>

<!-- 🎵 Background Music -->
<audio id="bgMusic" autoplay loop>
  <source src="everlasting.mp3" type="audio/mpeg">
</audio>

<!-- 🎉 Confetti -->
<script>
for (let i = 0; i < 40; i++) {
  let c = document.createElement("div");
  c.className = "confetti";
  c.style.left = Math.random() * 100 + "vw";
  c.style.animationDelay = Math.random() * 4 + "s";
  c.style.background = ["#f6b7c1","#f9d5e5","#ffdce5"][Math.floor(Math.random()*3)];
  document.body.appendChild(c);
}
</script>

<!-- 📝 Questionnaire -->
<section id="quiz" style="display:block">
  <h2>🌸 Before We Begin… 🌸</h2>

  <div class="question">
    <p>Are you happy to go through this little surprise session? 💕</p>
    <div class="options">
      <label><input type="radio" name="q1"> Yes</label>
      <label><input type="radio" name="q1"> No</label>
    </div>
  </div>

  <div class="question">
    <p>Am I someone you truly love and care about? 🥹💖</p>
    <div class="options">
      <label><input type="radio" name="q2"> Yes</label>
      <label><input type="radio" name="q2"> No</label>
    </div>
  </div>

  <div class="question">
    <p>Do you feel this birthday will be happier than the previous years? 🎂✨</p>
    <div class="options">
      <label><input type="radio" name="q3"> Yes</label>
      <label><input type="radio" name="q3"> No</label>
    </div>
  </div>

  <div class="question">
    <p>Do you think this will be a good surprise for you? 🎁🌺</p>
    <div class="options">
      <label><input type="radio" name="q4"> Yes</label>
      <label><input type="radio" name="q4"> No</label>
    </div>
  </div>

  <button onclick="showSurprise()">Continue 💗</button>
</section>

<!-- 💌 Message Section -->
<section id="message" class="fade">
  <h1>💖 Happy Birthday My Best Friend 💖</h1>
  <p>
    Your answers already made me smile.  
    This little page is just a reminder of how special you are,  
    how loved you are, and how grateful I am to have you.
    <strong>Many more happy returns of the day, Alliiii 🤍</strong><br><br>
    I don’t really know how to express all this love on your birthday.<br>
    I know it’s your special day, but for me, I’ve been excited about this day for a long time.<br><br>
    I just want to fill this birthday with happiness and smiles for you.<br>
    Stay happy always.<br><br>
    Whatever happens, I’ll be there for you whenever you need me. 🌷
  </p>
  <button onclick="showGallery()">See Something Sweet 🌸</button>
</section>

<!-- 🖼️ Photo Gallery -->
<section id="gallery" class="gallery fade">
  <h2>🌺 Moments That Feel Like Home 🌺</h2>
  <img src="photo1.jpeg" style="animation-delay:0.5s">
  <img src="photo2.jpeg" style="animation-delay:1.5s">
  <img src="photo3.jpeg" style="animation-delay:2.5s">
  <img src="photo4.jpeg" style="animation-delay:3.5s">
  <p>May this year wrap you in peace, smiles, and soft happiness 💕</p>
</section>

<script>
function showSurprise() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("message").style.display = "block";
}

function showGallery() {
  document.getElementById("message").style.display = "none";
  document.getElementById("gallery").style.display = "block";
}
</script>

</body>
</html>
