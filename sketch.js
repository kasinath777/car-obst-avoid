var car, carImg, track, trackImg, ground, groundImg, obstacle, obstacleImg, obstacleGroup;

function preload(){
carImg = loadImage("car1.png");
trackImg = loadImage("track.png");
obstacleImg = loadImage("wall.png");
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
track = createSprite(800, 350);
track.addImage("avoid", trackImg);
track.scale = 1.2
car = createSprite(800, 600);
car.addImage("race", carImg);

obstacleGroup=createGroup();



}

function draw(){
background("white");

if(keyDown("LEFT_ARROW")){
car.x = car.x-3
}
if(keyDown("RIGHT_ARROW")){
car.x = car.x+3
}

if(car.x <500 || car.x > windowWidth- 400 || car.isTouching(obstacleGroup)){
car.destroy();
obstacleGroup.setVelocityYEach(0);
obstacleGroup.visibleEach = false;
}
spawnObstacles();
drawSprites();

}


function spawnObstacles(){
if(frameCount % 50 === 0){
obstacle = createSprite(Math.round(random(500, windowWidth- 400)), 70);
obstacle.scale = 0.2
obstacle.addImage("wall", obstacleImg);
obstacle.velocityY = 4
obstacleGroup.add(obstacle);
}
}