const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,pig1,pig2,ground,bird,log1,log2,log3,log4;

function preload() {
    dustbinImage = loadImage("images/dustbin.png")
}

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,height,1600,20)
    paper = new Paper(200,100)
    dustbin = new Dustbin(1000,380,200,20)

}

function keyPressed (){
    if (keyCode === UP_ARROW){
        
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

    }
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    paper.display();
    dustbin.display();
}