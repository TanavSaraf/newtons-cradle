class Bob
{
    constructor(x,y,r,options)
    {
       
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r=r;
    }
    display()
    {
        var pos=this.body.position;
        push()
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        
        pop()
    }
}