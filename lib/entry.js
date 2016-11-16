import Kaleidoscope from './kaleidoscope';
import {tick} from './util';
import CircleContainer from './circle_container';
import {keyCodes} from './util.js';

document.addEventListener('DOMContentLoaded', () => {
  let stage = new createjs.Stage("canvas");
  let stageWidth = stage.canvas.width;
  let stageHeight = stage.canvas.height;
  let radius = stageWidth/2-10;

  let container = new CircleContainer();
  const kaleidoscope = stage.addChild(new Kaleidoscope(radius, container.container, 6, [10]));
  kaleidoscope.x = stageWidth/2;
  kaleidoscope.y = stageHeight/2;

	createjs.Ticker.addEventListener("tick", tick(container.container, stage));
  createjs.Ticker.setFPS(60);

  const handleKeyPress = (event) => {
    let info = keyCodes[event.keyCode];

    if(info){
      container.addChild(info.color, info.shape);
    }
  };
  document.addEventListener('keydown', handleKeyPress);
});
