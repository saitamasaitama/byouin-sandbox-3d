function Scene(){
  return new THREE.Scene();
}

function Group(){
  return new THREE.Group();
}

function Vector3(x=0,y=0,z=0){
  return new THREE.Vector3(x,y,z);
}
function V(x=0,y=0,z=0){
  return Vector3(x,y,z);
}

function GameObject(
  position={x:0,y:0,z:0},
  rotation={x:0,y:0,z:0},
  scale={x:0,y:0,z:0}
){
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const mesh= new THREE.Mesh( geometry, material );
  mesh.position.x=position.x;
  mesh.position.y=position.y;
  mesh.position.z=position.z;
  return mesh;
}