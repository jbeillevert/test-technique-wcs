// -------------------MENUBURGER-------------------

const iconMenuBurger = document.querySelector('#menuBurger')
const navlinks = document.querySelector('#navlinks')

iconMenuBurger.addEventListener('click', ()=> {
  navlinks.classList.toggle('mobile-menu')
})

