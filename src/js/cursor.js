// =============================================
//  cursor.js — Custom Cursor (dot + ring)
// =============================================

export function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  if (!dot || !ring) return;

  let curX = 0, curY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    curX = e.clientX;
    curY = e.clientY;

    // Dot follows instantly
    dot.style.left = curX + 'px';
    dot.style.top  = curY + 'px';
  });

  // Ring lags slightly for a smooth feel
  function animateRing() {
    ringX += (curX - ringX) * 0.12;
    ringY += (curY - ringY) * 0.12;

    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';

    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Expand ring on hoverable elements
  const hoverables = document.querySelectorAll('a, button, .work-card, .btn, .contact-link');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width  = '50px';
      ring.style.height = '50px';
      ring.style.borderColor = 'rgba(120, 200, 255, 0.7)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width  = '28px';
      ring.style.height = '28px';
      ring.style.borderColor = 'rgba(120, 200, 255, 0.3)';
    });
  });

  // Hide cursor when mouse leaves window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
}
