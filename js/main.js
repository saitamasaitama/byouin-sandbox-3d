
const camera = new THREE.PerspectiveCamera( 60, 
  window.innerWidth / window.innerHeight,
   0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const dom=renderer.domElement;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement);
function Group(){
  return new THREE.Group();
}

//const group=Group();

alert(2);
const scene = new THREE.Scene();
alert(9);

//const cube=GameObject();
//scene.add( cube );
//acene.add(GameObject({x:3,y:0,z:0}));
/*
function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.013;
  cube.rotation.y += 0.011;
	renderer.render( scene, camera );
}
animate();
camera.position.z = 5;
}
*/