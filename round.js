class Ball{
    constructor(x,y){
        var options={
     "restitution":0.3,
     "density":1.0,
     "isStatic":true




        }
  this.radius=10
this.body=Bodies.circle(x,y,this.radius,options)
World.add(world,this.body)


    }

display(){
 
  push()
fill("blue")
strokeWeight(0)
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
ellipseMode(CENTER)
ellipse(0,0,this.radius)
 pop()




}










}

