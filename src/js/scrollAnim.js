// =============================================
//  scrollAnim.js — Animation Loop + Scroll FX
// =============================================

export function initScroll(scene, camera, { particles, sphere, torus, torus2 }) {

  // Track mouse position
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Scroll position
  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; });

  // Animate skill bars when About section is visible
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.skill-fill').forEach(el => {
          el.style.width = el.dataset.w + '%';
        });
        skillsObserver.disconnect(); // only once
      }
    });
  }, { threshold: 0.3 });

  const skillsList = document.getElementById('skillsList');
  if (skillsList) skillsObserver.observe(skillsList);

  // FPS counter
  const fpsEl  = document.getElementById('fps');
  let frames   = 0;
  let lastTime = performance.now();

  // Three.js clock
  const clock  = new THREE.Clock();

  // ----- Render loop -----
  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // Smooth mouse follow
    targetX += (mouseX - targetX) * 0.03;
    targetY += (mouseY - targetY) * 0.03;

    // Rotate particles
    particles.rotation.y = elapsed * 0.03  + targetX * 0.15;
    particles.rotation.x = elapsed * 0.015 + targetY * 0.10;

    // Sphere breathe + mouse tilt
    sphere.rotation.y = elapsed * 0.12;
    sphere.rotation.x = elapsed * 0.05 + targetY * 0.3;
    const breathe = 1 + Math.sin(elapsed * 0.8) * 0.05;
    sphere.scale.setScalar(breathe);

    // Torus rings
    torus.rotation.z  = elapsed * 0.08;
    torus.rotation.y  = elapsed * 0.04 + targetX * 0.2;
    torus2.rotation.x = elapsed * 0.06;
    torus2.rotation.z = elapsed * 0.05 + targetY * 0.1;

    // Camera scroll + mouse parallax
    camera.position.y = -scrollY * 0.0015;
    camera.position.x =  targetX * 0.3;

    // Update renderer (scene & camera passed from scene.js;
    // get renderer from canvas directly)
    const canvas   = document.getElementById('canvas3d');
    const renderer = canvas.__renderer;
    if (renderer) renderer.render(scene, camera);

    // FPS display
    frames++;
    const now = performance.now();
    if (now - lastTime >= 800) {
      const fps = Math.round(frames * 1000 / (now - lastTime));
      if (fpsEl) fpsEl.textContent = 'FPS: ' + fps;
      frames = 0;
      lastTime = now;
    }
  }

  // Store renderer on canvas so animate() can access it
  // (renderer was created in scene.js; we retrieve it here via a small trick)
  // Alternatively, pass renderer as a parameter — refactor freely.
  const canvas = document.getElementById('canvas3d');

  // Re-create renderer reference (simpler approach for standalone use)
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvas.__renderer = renderer;

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate();
}
