const h= 12;
const w= 12;
const scene=Scene.CreateScene()


const G=Group();
const Table=[];
for(let y=0;y<h;y++){
  const row =[];
  for(let x=0;x<w;x++){
  
    const xp= -1.1*(w/2) + 1.1*x
    const yp= -1.1*(h/2) + 1.1*y
    
    const info={
      x:x,
      y:y,
      now:true,
      next:false,
      object:GameObject({x:xp,y:0,z:yp})
    };
     //scene.append(info.object);
     G.add(info.object);
     row.push[info];
   }
   Table.push(row);
}
scene.append(G);
setInterval(function(){scene.Animation()},33)
//scene.Animation()
alert(88)