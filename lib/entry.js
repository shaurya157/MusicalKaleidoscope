import Kaleidoscope from './kaleidoscope';

document.addEventListener('DOMContentLoaded', () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width  = window.innerWidth;
  canvasEl.height = window.innerHeight;
  const kaleidoscope = new Kaleidoscope(canvasEl);

});
