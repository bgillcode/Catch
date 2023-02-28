const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let bX = 50;
let bY = 50;
let gX = 350;
let gY = 350;

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(bX, bY, 10, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(gX - 25, gY - 25, 200, 10);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
};

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      bX -= 5;
      break;
    case 'ArrowUp':
      bY -= 5;
      break;
    case 'ArrowRight':
      bX += 5;
      break;
    case 'ArrowDown':
      bY += 5;
      break;
  }

  if (bX >= gX - 25 && bX <= gX + 25 && bY >= gY - 25 && bY <= gY + 25) {
    alert('Captured');
  }

  draw();
});
draw();
