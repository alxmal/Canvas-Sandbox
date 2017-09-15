var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// var x = 300;
// var y = 300;
// var velocityMultX = 10;
// var velocityMultY = 10;
// var radius = 50;
// var randomPositionX = getRandomNumber(radius, innerWidth);
// var randomPositionY = getRandomNumber(radius, innerHeight);
// var dx = velocityMultX * getRandomBoolean();
// var dy = velocityMultY * getRandomBoolean();
var strokeColor = "#fe34a5";

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = strokeColor;
		c.stroke();
	}

	this.animate = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

var circle = new Circle(200, 200, 2, 2, 30);

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBoolean() {
	return Math.random() - 0.5;
}

(function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	circle.animate();
})();