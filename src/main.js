import confetti from 'canvas-confetti';

// Generate floating background bubbles
const floatingBg = document.getElementById('floating-bg');
const colors = ["#f43f5e", "#a855f7", "#14b8a6"];

for (let i = 0; i < 20; i++) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  
  const size = Math.random() * 100 + 50;
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.top = `${Math.random() * 100}%`;
  
  const duration = Math.random() * 10 + 10;
  const delay = Math.random() * 5;
  bubble.style.animationDuration = `${duration}s`;
  bubble.style.animationDelay = `-${delay}s`;
  
  if (floatingBg) {
    floatingBg.appendChild(bubble);
  }
}

// Confetti trigger
const giftBtn = document.getElementById('gift-btn');
if (giftBtn) {
  giftBtn.addEventListener('click', () => {
    const duration = 1.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 10,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff0000", "#00ff00", "#0000ff"],
      });
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff0000", "#00ff00", "#0000ff"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
    
    // Navigate to gift page after 1.5 seconds
    setTimeout(() => {
      window.location.href = 'gift.html';
    }, 1500);
  });
}

// Populate gallery
const photos = [
  {
    id: 1,
    url: "/image/WhatsApp Image 2026-02-23 at 5.02.01 PM.jpeg",
    caption: "Together, making beautiful memories"
  },
  {
    id: 2,
    url: "/image/WhatsApp Image 2026-02-23 at 5.02.02 PM.jpeg",
    caption: "Love that spans the world 🌍"
  },
  {
    id: 3,
    url: "/image/WhatsApp Image 2026-02-23 at 5.02.02 PM (1).jpeg",
    caption: "Special moments, Tuesday memories"
  },
  {
    id: 4,
    url: "/image/WhatsApp Image 2026-02-23 at 5.02.02 PM (2).jpeg",
    caption: "You looking absolutely gorgeous"
  }
];

const galleryGrid = document.getElementById('gallery-grid');

if (galleryGrid) {
  photos.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    item.innerHTML = `
      <img src="${photo.url}" alt="${photo.caption}" referrerpolicy="no-referrer" />
      <div class="gallery-caption">
        <p>${photo.caption}</p>
      </div>
    `;
    
    galleryGrid.appendChild(item);
  });
}

// Simple scroll animation observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add initial styles for animation
document.querySelectorAll('.message-header, .message-text, .message-image, .gallery-header, .gallery-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});
