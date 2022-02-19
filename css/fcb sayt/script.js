const openMenuBar = () => {
  const element = document.querySelector('.nav__menu')
  const open = document.getElementById('open')
  const close = document.getElementById('close')
  open.style.display = 'none'
  close.style.display = 'block'
  element.classList.add('nav__menu--active')
}

const closeMenuBar = () => {
  const element = document.querySelector('.nav__menu')
  const open = document.getElementById('open')
  const close = document.getElementById('close')
  open.style.display = 'block'
  close.style.display = 'none'
  element.classList.remove('nav__menu--active')
  element.classList.add('.nav__menu--isActive')
}
