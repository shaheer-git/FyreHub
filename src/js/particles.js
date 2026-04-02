// =============================================
//  particles.js — Particle System & 3D Objects
// =============================================

export function initParticles(scene) {

  // ----- Particle cloud -----
  const count = 4000;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors    = new Float32Array(count * 3);

  // #AFFC41 = rgb(175, 252, 65) = (0.686, 0.988, 0.255)
for (let i = 0; i < count; i++) {
  const i3 = i * 3;
  positions[i3]     = (Math.random() - 0.5) * 12;
  positions[i3 + 1] = (Math.random() - 0.5) * 12;
  positions[i3 + 2] = (Math.random() - 0.5) * 12;

  // #AFFC41 lime-green palette with natural variation
  colors[i3]     = 0.55 + Math.random() * 0.25; // R: 0.55–0.80  (anchor ~0.686)
  colors[i3 + 1] = 0.85 + Math.random() * 0.15; // G: 0.85–1.00  (anchor ~0.988)
  colors[i3 + 2] = 0.10 + Math.random() * 0.20; // B: 0.10–0.30  (anchor ~0.255)
}

  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(colors,    3));

  const mat = new THREE.PointsMaterial({
    size: 0.018,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
  });

  const particles = new THREE.Points(geo, mat);
  scene.add(particles);

  // ----- Wireframe icosahedron (centre) -----
  const sphere = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.9, 2),
    new THREE.MeshBasicMaterial({
      color: 0x78c8ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    })
  );
  // scene.add(sphere);

  // ----- Torus ring 1 -----
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(1.4, 0.004, 8, 80),
    new THREE.MeshBasicMaterial({
      color: 0x78c8ff,
      transparent: true,
      opacity: 0.15,
    })
  );
  torus.rotation.x = Math.PI / 3;
  // scene.add(torus);

  // ----- Torus ring 2 -----
  const torus2 = new THREE.Mesh(
    new THREE.TorusGeometry(1.7, 0.003, 8, 100),
    new THREE.MeshBasicMaterial({
      color: 0xaaccff,
      transparent: true,
      opacity: 0.08,
    })
  );
  torus2.rotation.x = -Math.PI / 4;
  torus2.rotation.z =  Math.PI / 6;
  // scene.add(torus2);

  return { particles, sphere, torus, torus2 };
}
