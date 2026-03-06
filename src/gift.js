import confetti from 'canvas-confetti';

// Trigger confetti on load
window.addEventListener('load', () => {
  const duration = 5 * 1000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#f43f5e", "#a855f7", "#14b8a6"],
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#f43f5e", "#a855f7", "#14b8a6"],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
});
