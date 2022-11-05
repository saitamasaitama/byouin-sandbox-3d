class Scene{
  constructor(){
    this.scene=new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    const canvas=$(this.renderer.domElement);
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    $("body").append(canvas);
    this.camera = new THREE.PerspectiveCamera(60, 
    window.innerWidth / window.innerHeight,0.1, 1000 );
    
  } 
  static CreateScene(){
    const result=new Scene();
    return result;
  }
  
  Animation(){
 	  requestAnimationFrame( this.Animation );
   // G.rotation.x += 0.013;
   // G.rotation.y += 0.011;
	  this.renderer.render( this.scene, this.camera );
  }
  

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
/*
function CreateScene(){
  SceneData.camera = new THREE.PerspectiveCamera( 60, 
  window.innerWidth / window.innerHeight,
   0.1, 1000 );
  const renderer = new THREE.WebGLRenderer();
  const canvas=$(renderer.domElement);

  renderer.setSize( window.innerWidth, window.innerHeight );
  $("body").append(canvas);
  canvas.on("click",function(){alert(66)});
  SceneData.scene= Scene()
  
}
*/