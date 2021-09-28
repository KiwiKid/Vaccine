
  let colorArray = ['#F6C5C0','#B1A692','#B4BABA','#F2F2F2', '#C1A29B']

  function Ball(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  Ball.prototype.draw = function(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.strokeStyle = this.color;
    // c.stroke();
    c.fillStyle = this.color;
    c.fill();
  }
  
  let gravity = 1;
  let friction = 0.90;

  Ball.prototype.update = function(c) {
    if (this.y + this.radius + this.dy > c.height) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity; // adding gravity 
      //console.log(this.dy)
    }

    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) { 
      this.dx = -this.dx;
    }
    
    this.y += this.dy;

    if (this.dy.toFixed(3) == '0.000' || this.dy.toFixed(3) == "-0.000") {
      this.dx = 0;
    }
    this.x += this.dx;
  }

  export default Ball