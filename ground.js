class Ground{
    constructor(x,y,w,h){
      var groundoptions = {
          isStatic: true
      }

      this.body = Bodies.rectangle(x,y,w,h,groundoptions);
      this.width = w;
      this.height = h;

      World.add(world, this.body);
    }

    display(){
      rectMode(CENTER);
      fill("#7a2222");
      var pos = this.body.position;
      rect(pos.x,pos.y,this.width,this.height);
    }
}