// NAV-BAR
const navButton = document.getElementsByClassName('nav-button')[0]
const items = document.getElementsByClassName('items')[0]

navButton.addEventListener('click', () => {
    items.classList.toggle('active')
});

// BURGER ANIMATION
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
