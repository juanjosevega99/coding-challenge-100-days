from math import pi

class cylinder():
    def __init__(self):
        self.height = float(input('Cylinder height? '))
        self.ratio = float(input('radius of the cylinder bases? '))

    def getVolume(self):
        return pi * self.ratio ** 2 * self.height

class cube ():
    def __init__(self):
        self.side = float(input('Side of the cube? '))
    def getVolume(self):
        return self.side ** 3

class sphere():
    def __init__(self):
        self.ratio = float(input('Ratio of the sphere? '))
    def getVolume(self):
        return (4/3) * pi * self.ratio ** 3

    option = input('Select: cylinder, cube, sphere ').lower()
    if option == 'cylinder':
        cylinder = cylinder()
        print('The volume of the cylinder is: {}'.format(round(cylinder.getVolume(), 2)))
    elif option == 'cube':
        cube = cube()
        print('The volume of the cube is: {}'.format(round(cube.getVolume(), 2)))
    elif option == 'sphere':
        sphere = sphere()
        print('The volume of the sphere is: {}'.format(round(sphere.getVolume(), 2)))
    else:
        print('Unrecognizable figure')