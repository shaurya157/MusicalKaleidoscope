import Kaleidoscope from './kaleidoscope';
import {tick} from './util';
import CircleContainer from './circle_container';
import {Howler} from 'howler';
import {addKeyDownListener,
        addMenuListener} from './util';

document.addEventListener('DOMContentLoaded', () => {
  let stage = new createjs.Stage("canvas");
  let stageWidth = stage.canvas.width;
  let stageHeight = stage.canvas.height;
  let radius = stageWidth/2-10;

  let container = new CircleContainer();
  let kaleidoscope = stage.addChild(new Kaleidoscope(radius, container.container, 6, [10]));
  kaleidoscope.x = stageWidth/2;
  kaleidoscope.y = stageHeight/2;

	createjs.Ticker.addEventListener("tick", tick(container.container, stage));
  createjs.Ticker.setFPS(70);
  addKeyDownListener(container);
  addMenuListener();

  let resetButton = $('#reset');

  resetButton.click(() => {

    stage.removeAllChildren();
    container = new CircleContainer();
    kaleidoscope = stage.addChild(new Kaleidoscope(radius, container.container, 6, [10]));
    kaleidoscope.x = stageWidth/2;
    kaleidoscope.y = stageHeight/2;

    createjs.Ticker.removeEventListener('tick', tick);
    createjs.Ticker.addEventListener('tick', tick(container.container, stage));
    addKeyDownListener(container);
  });
});
