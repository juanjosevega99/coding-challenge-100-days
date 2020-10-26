import csv
import time

def read_csv():
    with open('names.csv', 'r') as file:
        names_list = []
        reader = csv.reader(file)
        for row in reader:
            names_list.append(row[0])
        return names_list

    
def bubble_sort(name_list):
    start = time.perf_counter()
    for num in range(len(name_list) - 1, 0, -1):
        for i in range(num):
            if name_list[i] > name_list[i+1]:
                name_list[i], name_list[i+1] = name_list[i+1], name_list[i]
    stop = time.perf_counter()
    total_time = (stop - start) * 1000
    print(name_list)
    print('Bubble sort takes {} ms to order your list'.format(total_time))


if __name__ == '__name__':
    name_list = read_csv()
    bubble_sort(name_list)