const canvas = document.getElementById("cursor-glitter");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "9999";

let particles = [];

function createParticles(x, y) {
  for (let i = 0; i < 5; i++) {
    particles.push({
      x: x + Math.random() * 10 - 5,
      y: y + Math.random() * 10 - 5,
      size: Math.random() * 4 + 2, 
      alpha: 1,
      color: `hsl(${Math.random() * 360}, 100%, 80%)`,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    });
  }
}

document.addEventListener("mousemove", (e) => {
  createParticles(e.clientX, e.clientY);
});

function animateGlitter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.alpha -= 0.02;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
    } else {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  requestAnimationFrame(animateGlitter);
}

animateGlitter();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
