class Chain
{
    constructor(body1,body2,offsetsx,offsetsy)
    {
        this.offsetX=offsetsx;
        this.offsetY=offsetsy;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX , y:this.offsetY},
            stiffness:1
        }
      this.chain= Matter.Constraint.create(options)
      World.add(world,this.chain);
     
    }
 display()
 {
    var posA=this.chain.bodyA.position;
    push()

        strokeWeight(15)
        line(posA.x,posA.y,this.offsetX,this.offsetY);
    pop()
 }
}