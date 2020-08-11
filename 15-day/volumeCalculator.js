class cylinder {
  constructor() {
    this.height = parseFloat(prompt('Cylinder height? '))
    this.ratio = parseFloat(prompt('Cylinder radius? '))
  }
  getVolume() {
    return Math.PI * Math.pow(this.ratio, 2) * this.height
  }
}

class cube {
  constructor() {
    this.side = parseFloat(prompt('Side of the cube? '))
  }
  getVolume() {
    return Math.pow(this.side, 3)
  }
}

class sphere {
  constructor() {
    this.ratio = parseFloat(prompt('Ratio of the sphere? '))
  }
  getVolume() {
    return (4 / 3) * Math.PI * Math.pow(this.ratio, 3)
  }
}

const option = prompt('Select: cylinder, cube, sphere ').toLowerCase()
switch (option) {
  case 'cylinder':
    const volumeCylinder = new cylinder()
    alert(`The volume of the cylinder is: ${volumeCylinder.getVolume().toFixed(2)}`)
    break
  case 'cube':
    const volumeCube = new cube()
    alert(`The volume of the cube is: ${volumeCube.getVolume().toFixed(2)}`)
    break
  case 'sphere':
    const volumeSphere = new sphere()
    alert(`The volume of the sphere is: ${volumeSphere.getVolume().toFixed(2)}`)
    break
}