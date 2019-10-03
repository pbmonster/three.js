export default /* glsl */ `
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	vUv.y = 1.0-vUv.y;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`;
