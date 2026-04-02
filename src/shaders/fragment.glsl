// fragment.glsl
// Custom fragment shader — renders circular soft particles

varying vec3 vColor;

void main() {
  // Draw a soft circular point instead of a square
  float dist = distance(gl_PointCoord, vec2(0.5));
  if (dist > 0.5) discard;

  // Soft edge fade
  float alpha = 1.0 - smoothstep(0.3, 0.5, dist);

  gl_FragColor = vec4(vColor, alpha);
}
