// Simple animated dots
const dots = document.getElementById('dots');
let dotCount = 1;
setInterval(() => {
  dots.textContent = '• '.repeat(dotCount).trim();
  dotCount = dotCount < 5 ? dotCount + 1 : 1;
}, 500); 