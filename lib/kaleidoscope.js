class Kaleidoscope extends createjs.DisplayObject {
  constructor(radius, source, slices, pattern){
    super();
    this.radius = radius;
    this.source = source;
    this.pattern = pattern;
    this.seam = 1;
    this.slices = [];

    let patternLength = pattern.length;
    let sym = 0;
		for (let i = 0; i < slices; i++) {
      sym += pattern[i % patternLength];
    }

		for (let i = 0; i < slices; i++) {
      this.slices[i] = pattern[i % patternLength] / sym * Math.PI;
    }

    $('#seam').change((event) => {
      this.changeSeams(event.currentTarget.value);
    });

    $('#mirror').change((event) => {
      this.changeSlices(event.currentTarget.value);
    });
  }

  draw(ctx){
		let seam = this.seam/(Math.PI*this.radius*2);
		let slices = this.slices;
    let length = slices.length;
		let radius = -slices[0];
		for (let i = 0; i < length; i++) {
			let a = slices[i];
			this.drawSlice(ctx, radius + a, a, true, seam);
			this.drawSlice(ctx, radius - a, a, false, seam);
			radius += a * 2;
		}
  }

  drawSlice (context, radius, a, mirror, seam){
    context.save();
    context.rotate(radius + a);
		if (mirror) { context.scale(1,-1); }
		context.beginPath();
		context.moveTo(-this.seam, -this.seam);
		context.arc(0,
            0,
            this.radius,
            0 - (mirror ? 1 : 0) * seam,
            a + (mirror ? 1 : 0) * seam);
		context.lineTo(-this.seam, this.seam);
		context.closePath();
		context.clip();
		this.source.updateContext(context);
		this.source.draw(context);

		context.restore();
  }

  changeSeams(val){
    this.seam = parseInt(val);
  }

  changeSlices(num){
    let patternLength = this.pattern.length;
    let slices = [];
    num = parseInt(num);

    let sym = 0;
		for (let i = 0; i < num; i++) {
      sym += this.pattern[i % patternLength];
    }

		for (let i = 0; i < num; i++) {
      slices[i] = this.pattern[i % patternLength] / sym * Math.PI;
    }

    this.slices = slices;
  }
}

export default Kaleidoscope;
