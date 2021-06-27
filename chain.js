class Chain{
   constructor(bodya,bodyb){
       var options = {
           bodyA:bodya,bodyB:bodyb,length:10,stiffness:0.08
       }
       this.rope=Matter.Constraint.create(options)
       World.add(world,this.rope)
   }
   display(){
       strokeWeight(5)
       line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y
        )
   }
}
