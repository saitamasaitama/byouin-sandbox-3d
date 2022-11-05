
const camera = new THREE.PerspectiveCamera( 60, 
  window.innerWidth / window.innerHeight,
   0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const dom=renderer.domElement;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement);

//const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = GameObject({x:4,y:0,z:0});
const scene = Scene()
scene.add( cube );

camera.position.z = 5;


function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.013;
  cube.rotation.y += 0.011;
	renderer.render( scene, camera );
}
animate();
camera.position.z = 5;