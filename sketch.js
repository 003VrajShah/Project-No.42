const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunderbolt,thunderbolt1,thunderbolt2,thunderbolt3,thunderbolt4;
var walking,walking1,walking2,walking3,walking4,walking5,walking6,walking7,walking8;
var rain;
var umbrella;
function preload(){
    thunderbolt1=loadImage("images/thunderbolt/1.png");
    thunderbolt2=loadImage("images/thunderbolt/2.png");
    thunderbolt3=loadImage("images/thunderbolt/3.png");
    thunderbolt4=loadImage("images/thunderbolt/4.png");
    walking1=loadImage("images/Walking Frame/walking_1.png");
    walking2=loadImage("images/Walking Frame/walking_1.png");
    walking3=loadImage("images/Walking Frame/walking_1.png");
    walking4=loadImage("images/Walking Frame/walking_1.png");
    walking5=loadImage("images/Walking Frame/walking_1.png");
    walking6=loadImage("images/Walking Frame/walking_1.png");
    walking7=loadImage("images/Walking Frame/walking_1.png");
    walking8=loadImage("images/Walking Frame/walking_1.png");
}

function setup(){
    createCanvas(500,500);
    engine=Engine.create();
    world=engine.world;
    
}

function draw(){
    background("black");
    Engine.update(engine);
    var maxDrops = 100;
    for(var i=0;i<maxDrops ;i++){
     maxDrops.push(new createDrop(random(0,400), random(0,400)));
    }
    spawnThunder();
    drawSprites();
}   

function spawnThunder(){
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: thunderbolt.addImage(thunderbolt1);
              break;
      case 2: thunderbolt.addImage(thunderbolt2);
              break;
      case 3: thunderbolt.addImage(thunderbolt3);
              break;
      case 4: thunderbolt.addImage(thunderbolt4);
      break;
      default: break;
    }
}