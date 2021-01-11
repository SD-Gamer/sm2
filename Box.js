class Box {
    constructor(x,y,width,height){
        var options= {
            restitution:0,
            friction:5,
            density:0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        }
        display(){
            fill("red");
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
        }
    }
