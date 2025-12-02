const changeBtn = document.getElementById('change-color-theme');

function changeColorTheme() {
  document.getElementsByTagName('html')[0].classList.toggle('is-cold');
  changeBtn.classList.toggle('is-cold');
}

changeBtn.addEventListener('click', changeColorTheme);