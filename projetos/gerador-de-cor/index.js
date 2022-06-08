generator.addEventListener('click', function mudar() {
  function random(number) {
    return Math.floor(Math.random() * (number + 1))
  }

  const generator = document.querySelector('#generator')

  r = random(255)
  g = random(255)
  b = random(255)

  var aleatorio = 'rgb( ' + r + ', ' + g + ', ' + b + ' )'

  document.querySelector('#color-place').style.background = aleatorio

  function componentToHex(c) {
    var hex = c.toString(16)
    return hex.length == 1 ? '0' + hex : hex
  }

  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
  }

  document.querySelector('#rgb').innerHTML = aleatorio

  document.querySelector('#hex').innerHTML = rgbToHex(r, g, b)
})
