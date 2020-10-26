const height = prompt('Enter height of cylinder: ')
const radio = prompt('Enter radio of cylinder: ')

function volumeCylinder(height, radio) {
  result = (Math.PI) * (radio ** 2) * (height)
  alert(`Result; ${result.toFixed(4)} m3`)
}

volumeCylinder(height, radio)