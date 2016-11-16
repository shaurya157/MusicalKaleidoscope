
export const tick = (container, stage) => {
  return () => {
    container.rotation += 1;
    stage.update();
  };
};

export const keyCodes = {
  32: {color: "#A4F375", shape: 'circle'},
  65: {color: "#550000", shape: 'rectangle'}, // a
  66: {color: "#D46A6A", shape: 'rectangle'}, // b
  67: {color: "#FFAAAA", shape: 'rectangle'}, // c
  68: {color: "#801515", shape: 'rectangle'}, // d
  69: {color: "#AA7F39", shape: 'circle'}, // e
  70: {color: "#FFFF01", shape: 'circle'}, // f
  71: {color: "#C3FC44", shape: 'circle'}, // g
  72: {color: "#42F64E", shape: 'circle'}, // h
  73: {color: "#41F1B7", shape: 'circle'}, // i
  74: {color: "#40EEE7", shape: 'circle'}, // j
  75: {color: "#4BAFF0", shape: 'circle'}, // k
  76: {color: "#5386F1", shape: 'circle'}, // l
  77: {color: "#615BF2", shape: 'circle'}, // m
  78: {color: "#9B4FF1", shape: 'circle'}, // n
  79: {color: "#E043F0", shape: 'circle'}, // o
  80: {color: "#E3009F", shape: 'circle'}, // p
  81: {color: "#F00059", shape: 'circle'}, // q
  82: {color: "#FF3100", shape: 'circle'}, // r
  83: {color: "#807EE2", shape: 'circle'}, // s
  84: {color: "#71B2DC", shape: 'circle'}, // t
  85: {color: "#6BDEB8", shape: 'circle'}, // u
  86: {color: "#B9F676", shape: 'circle'}, // v
  87: {color: "#FFF96B", shape: 'circle'}, // w
  88: {color: "#BDA039", shape: 'circle'}, // x
  89: {color: "#FFC37B", shape: 'circle'}, // y
  90: {color: "#FF827B", shape: 'circle'} // z
};
