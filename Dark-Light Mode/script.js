function changeMode() {
  changeClass()
  changeText()
}

function changeClass() {
  button.classList.toggle(darkClass)
  h1.classList.toggle(darkClass)
  body.classList.toggle(darkClass)
  footer.classList.toggle(darkClass)
}

function changeText() {
  const ligthText = "Light Mode"
  const darkText = "Dark Mode"

  if(body.classList.contains(darkClass)) {
    button.innerHTML = ligthText
    h1.innerHTML = darkText + " ON"
    return
  }
  button.innerHTML = darkText
  h1.innerHTML = ligthText + " ON"
}

const darkClass = 'dark-mode'
const button = document.getElementById('mode-selec')
const h1 = document.getElementById('page-title')
const body = document.getElementById('page-body')
const footer = document.getElementById('page-footer')

button.addEventListener('click', changeMode)