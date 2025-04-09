// Seleciona o canvas e define o contexto 2D
const canvas = document.getElementById("cursor-glitter");
const ctx = canvas.getContext("2d");

// Ajusta o tamanho do canvas para cobrir toda a tela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "9999";

// Array para armazenar partículas
let particles = [];

// Função para criar partículas de glitter
function createParticles(x, y) {
  for (let i = 0; i < 5; i++) {
    particles.push({
      x: x + Math.random() * 10 - 5, // Pequena variação na posição
      y: y + Math.random() * 10 - 5,
      size: Math.random() * 4 + 2, // Tamanho aleatório entre 2 e 6
      alpha: 1, // Opacidade inicial
      color: `hsl(${Math.random() * 360}, 100%, 80%)`, // Cores vibrantes
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    });
  }
}

// Detecta o movimento do mouse e cria glitter
document.addEventListener("mousemove", (e) => {
  createParticles(e.clientX, e.clientY);
});

// Função de animação do glitter
function animateGlitter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.alpha -= 0.02; // Partículas desaparecem aos poucos

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

// Inicia a animação
animateGlitter();

// Ajusta o tamanho do canvas se a janela for redimensionada
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
