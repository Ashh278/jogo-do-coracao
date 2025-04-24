const heart = document.getElementById("heart");
const message = document.getElementById("message");

let canEscape = true;

// Move para uma posição aleatória na tela
function moveHeart() {
  const x = Math.random() * (window.innerWidth - 60);
  const y = Math.random() * (window.innerHeight - 60);
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
}

// Quando o mouse chega muito perto
document.addEventListener("mousemove", (event) => {
  const heartRect = heart.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const dx = mouseX - (heartRect.left + heartRect.width / 2);
  const dy = mouseY - (heartRect.top + heartRect.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 50 && canEscape) {
    moveHeart();
    canEscape = false;
    setTimeout(() => canEscape = true, 1000); // só foge de novo depois de 1 segundo
  }
});

// Quando clicar com sucesso
heart.addEventListener("click", () => {
  message.innerText = "Você pegou meu coração! 💘 Bilu Bilu!";
  setTimeout(() => {
    message.innerText = "";
  }, 2500);
});

// Movimento automático
setInterval(moveHeart, 1000);

// Primeira posição
moveHeart();
