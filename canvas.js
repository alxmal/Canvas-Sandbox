var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var velocityMultX = 5;
var velocityMultY = 5;
var strokeColor = "#fe34a5";
var fillColor = "#fe34a5";

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = fillColor;
		c.strokeStyle = strokeColor;
		c.stroke();
		c.fill();
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

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBoolean() {
	return Math.random() - 0.5;
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
	var radius = getRandomNumber(1, 20);
	// var randomPositionX = getRandomNumber((radius * 2), (innerWidth - (radius * 2)) + radius);
	// var randomPositionY = getRandomNumber((radius * 2), (innerHeight - (radius * 2)) + radius);
	var randomPositionX = getRandomNumber(radius, innerWidth - radius);
	var randomPositionY = getRandomNumber(radius, innerHeight - radius);
	var dx = velocityMultX * getRandomBoolean();
	var dy = velocityMultY * getRandomBoolean();

	circleArray.push(new Circle(randomPositionX, randomPositionY, dx, dy, radius));
}

(function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].animate();
	}
})();