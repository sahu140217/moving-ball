
const ball = document.querySelector('.ball');
let x = 0;
let y = 0;
let vx = 2;
let vy = 2;

function animate() {
	x += vx;
	y += vy;

	if (x + 50 > window.innerWidth || x < 0) {
		vx = -vx;
	}

	if (y + 50 > window.innerHeight || y < 0) {
		vy = -vy;
	}

	ball.style.top = `${y}px`;
	ball.style.left = `${x}px`;

	requestAnimationFrame(animate);
}

animate();