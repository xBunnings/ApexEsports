const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//Display Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// Show active

const highlightMenu = () => {
  const element = document.querySelector('.highlight')
  const aboutMenu = document.querySelector('#about-page')
  const squadMenu = document.querySelector('#squads-page')
  const liveMenu = document.querySelector('#live-page')
  let scrollPos = window.scrollY

  // adds highlight class to my menu items
  if(window.innerWidth>500 && scrollPos <400) {
    aboutMenu.classList.add('highlight')
    squadMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth>500 && scrollPos <600) {
    squadMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    liveMenu.classList.remove('highlight')
    return
  }else if (window.innerWidth>500 && scrollPos <2345) {
    squadMenu.classList.remove('highlight')
    liveMenu.classList.add('highlight')
    return
  }
  if((element && window.innerWidth < 500 && scrollPos < 600) || element) {
    element.classList.remove('highlight')
  }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Hide Mobile menu on click

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 500 && menuBars) {
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
  }
};

menuLinks.addEventListener('click', hideMobileMenu)