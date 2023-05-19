window.addEventListener('resize', resizeText);

function resizeText() {
  const container = document.getElementById('bg-text');
  const text = document.getElementById('text');
  const fontSize = 50; // Initial font size
  text.style.fontSize = fontSize + 'px';

  while (text.offsetWidth > container.offsetWidth) {
    fontSize--;
    text.style.fontSize = fontSize + 'px';
  }
}

// Call the resizeText function initially
resizeText();
