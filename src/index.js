import './styles.css';
import menu from './menu.json';
import colorCard from '../templates/card.hbs';

const menuEl = document.querySelector('.js-menu');
const cardMurkup = creatMenuMurkUp(menu);
const body = document.querySelector('body');
const check = document.querySelector('.theme-switch__toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

onChecked();
check.addEventListener('change', onSwitchTheme);

menuEl.innerHTML = cardMurkup;

function creatMenuMurkUp(menu) {
  return colorCard(menu);
}

function onSwitchTheme(e) {
  const checked = e.target.checked;

  if (checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }

  const bodyEl = body.classList.value;
  localStorage.setItem('checks', bodyEl);
}

function onChecked() {
  const localTheme = localStorage.getItem('checks');
  if (localTheme) {
    body.classList.add(localTheme);
    if (body.classList.value === Theme.DARK) {
      check.checked = true;
    }
  }
}
