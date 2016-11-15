class CircleContainer extends createjs.DisplayObject {
  constructor(){
    super();
    this.container = new createjs.Container();
    this.container.height = 200;
    this.container.width = 200;

    // this.container.regX = container.width/2;
    // this.container.regY = container.height/2;
    // this.container.scaleX = radius/container.width*2;
    // this.container.scaleY = radius/container.height*2;
  }

// change this method later
  addChild(shape){
    this.container.addChild(shape);
  }
}

export default CircleContainer;
