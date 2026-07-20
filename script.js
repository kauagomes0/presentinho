const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const screen1 = document.getElementById('screen-1');
const screen2 = document.getElementById('screen-2');
const heartsContainer = document.getElementById('hearts-container');

// Movimento de fuga do botão "Não" (Mobile & PC)
function escapeButton(e) {
  if (e) e.preventDefault(); // Evita a seleção ou clique no celular

  const margin = 20;
  const maxX = window.innerWidth - btnNo.offsetWidth - margin;
  const maxY = window.innerHeight - btnNo.offsetHeight - margin;

  const randomX = Math.max(margin, Math.floor(Math.random() * maxX));
  const randomY = Math.max(margin, Math.floor(Math.random() * maxY));

  btnNo.style.position = 'fixed';
  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
}

btnNo.addEventListener('touchstart', escapeButton, { passive: false });
btnNo.addEventListener('mouseover', escapeButton);
btnNo.addEventListener('click', escapeButton);

// Transição ao clicar no "SIM"
btnYes.addEventListener('click', () => {
  screen1.classList.remove('active');
  screen2.classList.add('active');
  startHeartsAnimation();
});

// Chuva de corações no tema escuro
function startHeartsAnimation() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 1.2 + 0.8 + 'rem';
    
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 250);
}