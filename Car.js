class Car {
  constructor(x, y, width = 50, height = 60, color = "red") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = 0;
    this.angle = 0;
    this.maxSpeed = 5;
    this.accleration = 0.5;
    this.friction = 0.1;

    this.controls = new Controls();
  }
  Update() {
    
    if (this.controls.forward) {
      this.speed -= this.accleration;
    }
    if (this.controls.reverse) {
      this.speed += this.accleration;
    }

    if (this.controls.left) {
      this.angle -= 0.03;
    }
    if (this.controls.right) {
      this.angle += 0.03;
    }
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    if(this.speed < -this.maxSpeed) {
      this.speed = -this.maxSpeed
    }

    if(this.speed > 0) {
      this.speed -= this.friction
    }
    if(this.speed < 0) {
      this.speed += this.friction
    }

    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    } 
    this.y += Math.cos(this.angle) * this.speed;
     this.x -= Math.sin(this.angle) * this.speed;
  }
  draw(ctx,img=null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = this.color;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    if(img) {
      ctx.drawImage(img,-this.width/2,-this.height/2,this.width,this.height)
    }
    else {

      ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    }

    ctx.restore();
  }
}
