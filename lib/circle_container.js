class CircleContainer extends createjs.DisplayObject {
  constructor(){
    super();
    this.container = new createjs.Container();
    this.container.height = 400;
    this.container.width = 400;

// testing
    let circle1 = new createjs.Shape();
    // let circle2 = new createjs.Shape();
    let circle3 = new createjs.Shape();
    // let circle4 = new createjs.Shape();
    circle1.graphics.beginFill("DeepSkyBlue").drawCircle(20, 20, 20);
    // circle2.graphics.beginFill("red").drawCircle(150, 25, 50);
    circle3.graphics.beginFill("green").drawCircle(25, 25, 50);
    // circle4.graphics.beginFill("brown").drawCircle(200, 200, 50);
    this.container.addChild(circle3, circle1);
  }

// change this method later
  addChild(color, object){
    let shape = new createjs.Shape();
    let x = Math.floor(Math.random() * this.container.height) + 1;
    let y = Math.floor(Math.random() * this.container.width) + 1;
    let radius = Math.floor(Math.random() * 70) + 1;

    switch (object) {
      case 'circle':
        shape.graphics.beginFill(color).drawCircle(x, y, radius);
        break;
      case 'rectangle':
        shape.graphics.beginFill(color).drawRect(x, y, radius, radius);
        break;
      default:
        console.log('nothing');
    }

    this.container.addChild(shape);
  }
}

export default CircleContainer;
