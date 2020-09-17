function distance(x, y) {
  return Math.sqrt(Math.pow((y.x - x.x), 2) + Math.pow((x.y - x.y), 2))
}

const x = {
  x: 3,
  y: 4
}

const y = {
  x: 5,
  y: 7
}

console.log(distance(x, y).toFixed(6))