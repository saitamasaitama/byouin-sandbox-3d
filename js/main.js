const h= 12;
const w= 12;

const G=Group();
const Table=[];
for(let y=0;y<h;y++){
  const row =[];
  for(let x=0;x<w;x++){
    const info={
      x:x,
      y:y,
      now:true,
      next:false,
      object:GameObject({x:x,y:0,z:y})
    };
     G.add(info.object);
     row.push[info];
   }
   Table.push(row);
}

const scene=Scene.CreateScene()
scene.Animation()
alert(88)