/**
 * Faria Tasnim Portfolio - Interactive Scripts
 */

// === Floating Math Symbols ===
const symbols = ['∈', 'φ', '⊂', 'K₄', 'μ', '∃', '∑', '∞', '∂', 'ε', 'λ', 'π', 'Δ'];

function spawnSymbol() {
  const bg = document.getElementById('mathBg');
  if (!bg) return;
  
  const el = document.createElement('span');
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (24 + Math.random() * 60) + 'px';
  const dur = 18 + Math.random() * 22;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay = Math.random() * -dur + 's';
  bg.appendChild(el);
  setTimeout(() => el.remove(), (dur + 5) * 1000);
}

function initMathBackground() {
  const bg = document.getElementById('mathBg');
  if (!bg) return;
  
  for (let i = 0; i < 15; i++) spawnSymbol();
  setInterval(spawnSymbol, 3000);
}

// === Initialize on DOM Ready ===
document.addEventListener('DOMContentLoaded', () => {
  initMathBackground();
  
  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.pointerEvents = 'auto';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.pointerEvents = 'none';
      }
    });
    backToTop.style.opacity = '0';
    backToTop.style.pointerEvents = 'none';
    backToTop.style.transition = 'opacity 0.3s ease';
  }
});