class Drop{
    constructor(x,y,radius)
    {
        var options = {
       friction : 0.1
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    update(){
        if(frameCount % 10===0){
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
                  
                  if(this.rain.position.y > height){
                      Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)});
                  }
                }
            }
        }
    }
}