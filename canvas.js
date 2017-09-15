var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x = 300;
var y = 300;
var VelocityMultX = 10;
var VelocityMultY = 10;
var radius = 30;

var randomPositionX = getRandomNumber(radius, innerWidth);
var randomPositionY = getRandomNumber(radius, innerHeight);
var randomVelocityX = VelocityMultX * getRandomBoolean();
var randomVelocityY = VelocityMultY * getRandomBoolean();


(function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	c.beginPath();
	c.arc(randomPositionX, randomPositionY, radius, 0, Math.PI * 2, false);
	c.strokeStyle = "#fe34a5";
	c.stroke();

	if (randomPositionX + radius > innerWidth || randomPositionX - radius < 0) {
		randomVelocityX = -randomVelocityX;
	}

	 if (randomPositionY + radius > innerHeight || randomPositionY - radius < 0) {
	 	randomVelocityY = -randomVelocityY;
	 }

	randomPositionX += randomVelocityX;
	randomPositionY += randomVelocityY;
})();

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBoolean() {
	return Math.random() - 0.5;
}