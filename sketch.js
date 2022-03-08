const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bg, ma, maImg;

function preload()
{
   bg = loadImage("assets/bg.png");
   maImg = loadImage("assets/standing.png") 
}

function setup()
{
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    var maOptions={
        isStatic: false, 
        restitution: 0.8
    }

    ma = Bodies.rectangle(100,355,20,20, maOptions);
    World.add(world, ma);
}

function draw()
{
    background(0,0,0);

    image(bg,0, 0, width, height);
    image(maImg,ma.position.x, ma.position.y, 70, 70)
}
