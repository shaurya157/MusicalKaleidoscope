class Kaleidoscope {
  constructor(canvasEl){
    this.stage = new createjs.Stage(canvasEl);
  }

  addChild(item){
    this.stage.addChild(item);
    this.stage.update();
  }
}

export default Kaleidoscope;
