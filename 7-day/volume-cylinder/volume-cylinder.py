from math import pi

def area_circle(r):
    area = pi * (r ** 2)
    return area


def volume_cylinder(a, h):
    volume = a * h
    return volume


if __name__ == '__main__':

    radio = float(input('Enter the radio: '))
    height = float(input('Enter the height of cylinder: '))
    area = area_circle(radio)
    volume = volume_cylinder(area, height)
    volume = round(volume, 1)

    print(f'Volume of cylinder = {volume} cubic units')