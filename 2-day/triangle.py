def calculate_area(side1, side2, side3):
    area_calculated = (side1 + side2 + side3) / 2
    return area_calculated


def compare_triangle(side1, side2, side3):
    lis = [side1, side2, side3]
    count = 0
    comparator = side1
    for element in lis:
        if comparator == element:
            count += 1
    if side1 != side2 and side2 == side3:
        count += 1
    if count == 3:
        print('Triangle equilateral')
    elif count == 2:
        print('Triangle scalene')
    if count == 1:
        print('Triangle isosceles')


def run():
    side1 = int(input('Enter side 1: '))
    side2 = int(input('Enter side 2: '))
    side3 = int(input('Enter side 3: '))
    area = calculate_area(side1, side2, side3)
    print('The area of the triangle is: ' + str(area))
    compare_triangle(side1, side2, side3)


if __name__ == "__main__":
    run()