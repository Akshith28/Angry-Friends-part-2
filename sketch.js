const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/SCHOOL.jpg";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(500,320,70,70);
    box2 = new Box(720,320,70,70);
    friend1 = new Friend1(610, 350);
    log1 = new Log(610,260,300, PI/2);

    box3 = new Box(500,240,70,70);
    box4 = new Box(720,240,70,70);
    friend2 = new Friend2(610, 220,50,50);

    log3 =  new Log(610,180,300, PI/2);

    box5 = new Box(610,160,70,70);
    log4 = new Log(560,120,150, PI/7);
    log5 = new Log(670,120,150, -PI/7);

    akshith = new Akshith(200,50);

    box6 = new Box(800,320,70,70);
    box7 = new Box(1020,320,70,70);
    friend3 = new Friend3(910, 350);
    log6 = new Log(910,260,300, PI/2);
    log7 = new Log(910,180,300,PI/2);

    box8 = new Box(800,240,70,70);
    box9 = new Box(1020,240,70,70);
    friend4 = new Friend2(910, 220,50,50);

   

    box10 = new Box(910,160,70,70);
    log8 = new Log(860,120,150, PI/7);
    log9 = new Log(970,120,150, -PI/7);


   
    slingshot = new SlingShot(akshith.body,{x:200, y:50});
    
}

function draw(){
    if (backgroundImg) {
        background(backgroundImg);   
    }

    noStroke();
    textSize(35);
    fill("white");
    text("score"+score,width-300,50);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    friend1.display();
    friend1.score();
    log1.display();

    box3.display();
    box4.display();
    friend2.display();
    friend2.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    akshith.display();
    platform.display();
    
    slingshot.display(); 
    
    box6.display();
    box7.display();
   
    friend3.display();
    friend3.score();
    log6.display();
    log7.display();

    box8.display();
    box9.display();
    friend4.display();
    friend4.score();
    

    box5.display();
    log8.display();
    log9.display();
    box10.display();
    
}

function mouseDragged(){
    
        Matter.Body.setPosition(akshith.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && akshith.body.speed<1){
        akshith.trajectory = [];
        Matter.Body.setPosition(akshith.body,{x:200,y:50});
        slingshot.attach(akshith.body);
    }
}

async function getBackgroundImg () {
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var jsonResponse = await response.json();
    var dateTime = jsonResponse.datetime;
    var hour = dateTime.slice(11,13);
    if (hour>17) {
        bg = "sprites/NIGHT IMG.jpg";
    } else {
        bg = "sprites/SCHOOL.jpg";
    }
    backgroundImg = loadImage(bg);
}