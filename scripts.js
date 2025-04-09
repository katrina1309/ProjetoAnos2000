const abrirMenu = document.getElementById('abrirMenu');
const fecharMenu = document.getElementById('fecharMenu');
const menuLateral = document.getElementById('menuLateral');

abrirMenu.addEventListener('click', () => {
  menuLateral.classList.add('active');
});

fecharMenu.addEventListener('click', () => {
  menuLateral.classList.remove('active');
});
