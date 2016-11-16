class Kaleidoscope extends createjs.DisplayObject {
  constructor(radius, source, slices, pattern){
    super();
    this.radius = radius;
    // what is source - the source is a DisplayObject that gets rendered
    this.source = source;
    // to make sure the seams are not visible
    this.seam = 0;
    let l = pattern.length;
    // ttl - to calculate symmetricity
    let ttl = 0;
		for (let i = 0; i < slices; i++) {
      ttl += pattern[i%l];
    }
    // slices - for symmetricity
		this.slices = [];
		for (let i=0; i < slices; i++) {
      this.slices[i] = pattern[i%l]/ttl*Math.PI;
    }

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
}

export default Kaleidoscope;
