var car, wall;                                                                                                         

var speed,weight;

var safety;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 70, 35);
  wall=createSprite(1500,200,80,height/1.5);

  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;
  car.shapeColor=color(255,255,255);
}

function draw() {
  background(0,0,0);
text("Speed: "+speed,600,50,textSize(30));
text("Weight: "+weight,600,100,textSize(30));
text("Safety: "+safety,600,150,textSize(30));
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;

    if(deformation>180){
safety="Bad";
car.shapeColor=color(255,0,0);

    }

if(deformation<180 && deformation>100){
  safety="Okay";
car.shapeColor=color(230,230,0);

}

if(deformation<100){
  safety="Good";
car.shapeColor=color(0,255,0);
           
}


  }

  car.collide(wall);
  drawSprites();
}