// Get DOM elements
const pumpButton = document.getElementById('pumpButton');
const balloon = document.getElementById('ballon');

// Variables for balloon animation
let balloonSize = 0;
let balloonText = '';
let balloonInterval = null;
let isPumped = false;

// Pump button click event listener
pumpButton.addEventListener('click', function() {
  if (!isPumped) {
    // Inflate the balloon
    balloonSize += 100;
    balloon.style.width = balloonSize + 'px';
    balloon.style.height = balloonSize + 'px';

    // Update pump status
    if (balloonSize === 100) {
      isPumped = true;
      pumpButton.disabled = true;

      // Assign random alphabet
      balloonText = getRandomAlphabet();
      balloon.textContent = balloonText;

      // Start moving balloon
      balloonInterval = setInterval(moveBalloon, 200);
    }
  }
});

// Balloon click event listener
balloon.addEventListener('click', function() {
  burstBalloon();
});

// Function to generate a random alphabet
function getRandomAlphabet() {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * alphabets.length);
  return alphabets[randomIndex];
}

// Function to move the balloon around the screen
function moveBalloon() {
  const maxX = window.screen - balloonSize;
  const maxY = window.screen - balloonSize;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  balloon.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Function to burst the balloon
function burstBalloon() {
  if (isPumped) {
    balloon.textContent = '';
    clearInterval(balloonInterval);
    balloon.style.backgroundColor = 'gray';
    balloon.style.cursor = 'default';
    pumpButton.disabled = true;
  }
}
