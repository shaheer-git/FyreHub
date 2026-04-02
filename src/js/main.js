// =============================================
//  main.js — Entry Point
//  Imports and initialises all modules
// =============================================

import { initScene }    from './scene.js';
import { initParticles } from './particles.js';
import { initScroll }   from './scrollAnim.js';
import { initCursor }   from './cursor.js';

// Boot everything once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const { scene, camera } = initScene();
  const { particles, sphere, torus, torus2 } = initParticles(scene);
  initCursor();
  initScroll(scene, camera, { particles, sphere, torus, torus2 });
});
