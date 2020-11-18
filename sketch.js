const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,970,50,50);
    box2 = new Box(1100,970,50,50);
    box3 = new Box(800,890,50,50);
    box4 = new Box(1100,890,50,50);
    box5 = new Box(950,820,50,50);

    ground = new Ground(600,height,1200,20);

    pig1 = new Pig(950,940);
    pig2 = new Pig(950,880);

    log1 = new Log(950,920,350,10,PI);
    log2 = new Log(950,870,350,10, PI);
    log3 = new Log(880,600,100,10, -PI/3);
    log4 = new Log(960,600,100,10, PI/3);

    bird = new Bird(50,70);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig2.display();

    bird.display();

    ground.display();
}