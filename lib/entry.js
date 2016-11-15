import Kaleidoscope from './kaleidoscope';
import {tick} from './util';
import CircleContainer from './circle_container';

document.addEventListener('DOMContentLoaded', () => {
  let stage = new createjs.Stage("canvas");
  let stageWidth = stage.canvas.width;
  let stageHeight = stage.canvas.height;
  let radius = stageWidth/2-10;
  window.stage = stage;

  let container = new CircleContainer();

  const kaleidoscope = stage.addChild(new Kaleidoscope(radius, container, 6, [10]));
  kaleidoscope.rotation = 18;
  kaleidoscope.x = stageWidth/2;
  kaleidoscope.y = stageHeight/2;

	createjs.Ticker.addEventListener("tick", tick(container.container, stage));
  createjs.Ticker.setFPS(40);
});
