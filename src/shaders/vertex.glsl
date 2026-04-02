// vertex.glsl
// Custom vertex shader for particle system
// Use with THREE.ShaderMaterial for more control

uniform float uTime;
uniform float uSize;

attribute float aScale;

varying vec3 vColor;

void main() {
  vColor = color;

  // Animate position with a gentle wave
  vec3 pos = position;
  pos.y += sin(uTime * 0.3 + position.x * 0.5) * 0.05;
  pos.x += cos(uTime * 0.2 + position.z * 0.5) * 0.05;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  gl_PointSize = uSize * aScale * (1.0 / -mvPosition.z);
  gl_Position  = projectionMatrix * mvPosition;
}
