var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 60; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,50));
  }
  for (var j = 30; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,100));
  }
  for (var j = 60; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,150));
  }
  for (var j = 30; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,210));
  }
  for (var j = 60; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 30; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,350));
  }
  for (var j = 60; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,425));
  }

}
 
function draw() {
  background("black");
 
  Engine.update(engine);
  ground.display();
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-30,width/2+30),10,10));
    }

  for(var k = 0; k<particles.length; k++){
    particles[k].display();
  }

}