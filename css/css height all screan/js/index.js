const start = () => {
  const wheel = document.querySelector('.box')
  const deg = Math.floor(Math.random() * (1024 - 9999)) + 9999
  wheel.style.transform = `rotate(${deg}deg)`
}
