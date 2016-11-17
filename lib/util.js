
export const tick = (container, stage) => {
  return () => {
    container.rotation += 1;
    stage.update();
  };
};

export const keyCodes = {
  32: {color: "#A4F375", shape: 'circle', sound: 'assets/sounds/piano/space.mp3'},
  65: {color: "#550000", shape: 'circle', sound: 'assets/sounds/piano/a.mp3'}, // a
  66: {color: "#D46A6A", shape: 'circle', sound: 'assets/sounds/piano/b.mp3'}, // b
  67: {color: "#FFAAAA", shape: 'circle', sound: 'assets/sounds/piano/c.mp3'}, // c
  68: {color: "#801515", shape: 'circle', sound: 'assets/sounds/piano/d.mp3'}, // d
  69: {color: "#AA7F39", shape: 'circle', sound: 'assets/sounds/piano/e.mp3'}, // e
  70: {color: "#FFFF01", shape: 'circle', sound: 'assets/sounds/piano/f.mp3'}, // f
  71: {color: "#C3FC44", shape: 'circle', sound: 'assets/sounds/piano/g.mp3'}, // g
  72: {color: "#42F64E", shape: 'circle', sound: 'assets/sounds/piano/h.mp3'}, // h
  73: {color: "#41F1B7", shape: 'circle', sound: 'assets/sounds/piano/i.mp3'}, // i
  74: {color: "#40EEE7", shape: 'circle', sound: 'assets/sounds/piano/j.mp3'}, // j
  75: {color: "#4BAFF0", shape: 'circle', sound: 'assets/sounds/piano/k.mp3'}, // k
  76: {color: "#5386F1", shape: 'circle', sound: 'assets/sounds/piano/l.mp3'}, // l
  77: {color: "#615BF2", shape: 'circle', sound: 'assets/sounds/piano/m.mp3'}, // m
  78: {color: "#9B4FF1", shape: 'circle', sound: 'assets/sounds/piano/n.mp3'}, // n
  79: {color: "#E043F0", shape: 'circle', sound: 'assets/sounds/piano/o.mp3'}, // o
  80: {color: "#E3009F", shape: 'circle', sound: 'assets/sounds/piano/p.mp3'}, // p
  81: {color: "#F00059", shape: 'circle', sound: 'assets/sounds/piano/q.mp3'}, // q
  82: {color: "#FF3100", shape: 'circle', sound: 'assets/sounds/piano/r.mp3'}, // r
  83: {color: "#807EE2", shape: 'circle', sound: 'assets/sounds/piano/s.mp3'}, // s
  84: {color: "#71B2DC", shape: 'circle', sound: 'assets/sounds/piano/t.mp3'}, // t
  85: {color: "#6BDEB8", shape: 'circle', sound: 'assets/sounds/piano/u.mp3'}, // u
  86: {color: "#B9F676", shape: 'circle', sound: 'assets/sounds/piano/v.mp3'}, // v
  87: {color: "#FFF96B", shape: 'circle', sound: 'assets/sounds/piano/w.mp3'}, // w
  88: {color: "#BDA039", shape: 'circle', sound: 'assets/sounds/piano/x.mp3'}, // x
  89: {color: "#FFC37B", shape: 'circle', sound: 'assets/sounds/piano/y.mp3'}, // y
  90: {color: "#FF827B", shape: 'circle', sound: 'assets/sounds/piano/z.mp3'} //  z
};
