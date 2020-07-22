const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,gamestate;
var box1;
var plinko=[]
var lilo=[]
var g=[]
var t=[]
var linko=[]
var ilo=[]
var go=[]
var to=[]
var score=100
var score1=100
var score2=100
var score3=100
var score4=100
var score5=100
var score6=100

function setup(){
    var canvas = createCanvas(500,565);
    engine = Engine.create();
    world = engine.world;
    gamestate=1
   ball=new Ball(100,100)
   re=new R(60,520,10,90)
   oe=new R(120,520,10,90)
   me=new R(180,520,10,90)
   he=new R(240,520,10,90)
   be=new R(300,520,10,90)
   de=new R(360,520,10,90)
   ue=new R(250,560,500,10)

   for(i=20;i<500;i=i+50){
    plinko.push(new Ball(i,100))

   }
   for(i=20;i<500;i=i+50){
    lilo.push(new Ball(i,200))

   }
   for(i=20;i<500;i=i+50){
    g.push(new Ball(i,300))

   }
   for(i=20;i<500;i=i+50){
    t.push(new Ball(i,400))

   }
  
   for(i=20;i<500;i=i+50){
    linko.push(new All(i,150))

   }
   for(i=20;i<500;i=i+50){
    ilo.push(new All(i,250))

   }
   for(i=20;i<500;i=i+50){
    go.push(new All(i,350))

   }
   for(i=20;i<500;i=i+50){
    to.push(new All(i,450))

   }
 
}

function draw(){
    background("white");
    Engine.update(engine);
    ball.display()
    re.display()
    oe.display()
    me.display()
    he.display()
    be.display()
    de.display()
    ue.display()
    

    for(var i=0;i<lilo.length;i++){
        a=lilo[i].display()
    }
    for(var i=0;i<plinko.length;i++){
        a=plinko[i].display()
    }

    for(var i=0;i<lilo.length;i++){
        a=g[i].display()
    }
    for(var i=0;i<lilo.length;i++){
        a=t[i].display()
    }
    for(var i=0;i<lilo.length;i++){
        a=ilo[i].display()
    }
    for(var i=0;i<plinko.length;i++){
        a=linko[i].display()
    }


    for(var i=0;i<lilo.length;i++){
        a=go[i].display()
    }
    for(var i=0;i<lilo.length;i++){
        a=to[i].display()
    }
if(linko[0]>=0) {
    score=score+1
}

   
    
    text(score,30,480)
    text(score1,90,480)
    text(score2,150,480)
    text(score3,210,480)
    text(score4,270,480)
    text(score5,330,480)
    text(score6,390,480)
}




