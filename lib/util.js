
export const tick = (container, stage) => {
  return () => {
    let radioButtons = $('input:radio[name=rotation]');
    if(radioButtons[0].checked){
      container.rotation += 1;
    } else {
      container.rotation += 2;
    }

    stage.update();
  };
};

export const keyCodes = {
  32: {color: "#A4F375", shape: 'circle', pianoSound: 'assets/sounds/piano/space.wav', violinSound: 'assets/sounds/violin/:space.wav'},
  65: {color: "#550000", shape: 'circle', pianoSound: 'assets/sounds/piano/a.wav', violinSound: 'assets/sounds/violin/a.wav'}, // a
  66: {color: "#D46A6A", shape: 'circle', pianoSound: 'assets/sounds/piano/b.wav', violinSound: 'assets/sounds/violin/b.wav'}, // b
  67: {color: "#FFAAAA", shape: 'circle', pianoSound: 'assets/sounds/piano/c.wav', violinSound: 'assets/sounds/violin/c.wav'}, // c
  68: {color: "#801515", shape: 'circle', pianoSound: 'assets/sounds/piano/d.wav', violinSound: 'assets/sounds/violin/d.wav'}, // d
  69: {color: "#AA7F39", shape: 'circle', pianoSound: 'assets/sounds/piano/e.wav', violinSound: 'assets/sounds/violin/e.wav'}, // e
  70: {color: "#FFFF01", shape: 'circle', pianoSound: 'assets/sounds/piano/f.wav', violinSound: 'assets/sounds/violin/f.wav'}, // f
  71: {color: "#C3FC44", shape: 'circle', pianoSound: 'assets/sounds/piano/g.wav', violinSound: 'assets/sounds/violin/g.wav'}, // g
  72: {color: "#42F64E", shape: 'circle', pianoSound: 'assets/sounds/piano/h.wav', violinSound: 'assets/sounds/violin/h.wav'}, // h
  73: {color: "#41F1B7", shape: 'circle', pianoSound: 'assets/sounds/piano/i.wav', violinSound: 'assets/sounds/violin/i.wav'}, // i
  74: {color: "#40EEE7", shape: 'circle', pianoSound: 'assets/sounds/piano/j.wav', violinSound: 'assets/sounds/violin/j.wav'}, // j
  75: {color: "#4BAFF0", shape: 'circle', pianoSound: 'assets/sounds/piano/k.wav', violinSound: 'assets/sounds/violin/k.wav'}, // k
  76: {color: "#5386F1", shape: 'circle', pianoSound: 'assets/sounds/piano/l.wav', violinSound: 'assets/sounds/violin/l.wav'}, // l
  77: {color: "#615BF2", shape: 'circle', pianoSound: 'assets/sounds/piano/m.wav', violinSound: 'assets/sounds/violin/m.wav'}, // m
  78: {color: "#9B4FF1", shape: 'circle', pianoSound: 'assets/sounds/piano/n.wav', violinSound: 'assets/sounds/violin/n.wav'}, // n
  79: {color: "#E043F0", shape: 'circle', pianoSound: 'assets/sounds/piano/o.wav', violinSound: 'assets/sounds/violin/o.wav'}, // o
  80: {color: "#E3009F", shape: 'circle', pianoSound: 'assets/sounds/piano/p.wav', violinSound: 'assets/sounds/violin/p.wav'}, // p
  81: {color: "#F00059", shape: 'circle', pianoSound: 'assets/sounds/piano/q.wav', violinSound: 'assets/sounds/violin/q.wav'}, // q
  82: {color: "#FF3100", shape: 'circle', pianoSound: 'assets/sounds/piano/r.wav', violinSound: 'assets/sounds/violin/r.wav'}, // r
  83: {color: "#807EE2", shape: 'circle', pianoSound: 'assets/sounds/piano/s.wav', violinSound: 'assets/sounds/violin/s.wav'}, // s
  84: {color: "#71B2DC", shape: 'circle', pianoSound: 'assets/sounds/piano/t.wav', violinSound: 'assets/sounds/violin/t.wav'}, // t
  85: {color: "#6BDEB8", shape: 'circle', pianoSound: 'assets/sounds/piano/u.wav', violinSound: 'assets/sounds/violin/u.wav'}, // u
  86: {color: "#B9F676", shape: 'circle', pianoSound: 'assets/sounds/piano/v.wav', violinSound: 'assets/sounds/violin/v.wav'}, // v
  87: {color: "#FFF96B", shape: 'circle', pianoSound: 'assets/sounds/piano/w.wav', violinSound: 'assets/sounds/violin/w.wav'}, // w
  88: {color: "#BDA039", shape: 'circle', pianoSound: 'assets/sounds/piano/x.wav', violinSound: 'assets/sounds/violin/x.wav'}, // x
  89: {color: "#FFC37B", shape: 'circle', pianoSound: 'assets/sounds/piano/y.wav', violinSound: 'assets/sounds/violin/y.wav'}, // y
  90: {color: "#FF827B", shape: 'circle', pianoSound: 'assets/sounds/piano/z.wav', violinSound: 'assets/sounds/violin/z.wav'} //  z
};

export const addKeyDownListener = (container) => {
  const handleKeyPress = (event) => {
    let string = "";
    string += event.key;
    if(string.includes('dimpykiki')){
      alert('ANTS!');
    }

    let info = keyCodes[event.keyCode];
    let instrument = $('input:radio[name=instrument]');
    let sound;
    if(instrument[0].checked){
      sound = info.pianoSound;
    } else {
      sound = info.violinSound;
    }

    if(info){
      container.addChild(info.color, info.shape);
      new Howl({
        src: [sound]
      }).play();
    }
  };
  document.addEventListener('keydown', handleKeyPress);
};

export const addMenuListener = () => {
  let menuButton = $('#controls-icon');
  let controls = $('.controls');
  menuButton.on('click', () => {
    if(controls.hasClass('showing')){
      controls.removeClass('showing');
    } else {
      controls.addClass('showing');
    }
  });
};
