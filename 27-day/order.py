import time
import csv

defread_csv():
    with open('datos.csv', mode='r') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter = ',')  

        return list(csv_reader)


defordenamiento_burbuja(lista):
    n = len(lista)

    for i in range(n):
        for j in range(0, n - i - 1):

            if lista[j] > lista[j + 1]:
                lista[j], lista[j + 1] = lista[j + 1], lista[j]

    return lista
    

defordenamiento_insercion(lista):
    for indice in range(1, len(lista)):
        valor_actual = lista[indice]
        posicion_actual = indice

        while posicion_actual > 0and lista[posicion_actual - 1] > valor_actual:
            lista[posicion_actual] = lista[posicion_actual - 1]
            posicion_actual -= 1

        lista[posicion_actual] = valor_actual

    return lista


defrun():
    #Ordenamiento de burbuja
    comienzo = time.time()

    nombres = read_csv()
    print(f'Nombres: {nombres}')
    nombres_ordenados = ordenamiento_burbuja(nombres)
    print(f'\n\nNombres ordenados: {nombres_ordenados}')

    final = time.time()

    tiempo = final - comienzo
    print(f'\nDuración ordenamiento de burbuja: {tiempo} segundos')


    #Ordenamiento por inserción

    comienzo = time.time()

    nombres = read_csv()
    print(f'Nombres: {nombres}')
    nombres_ordenados = ordenamiento_insercion(nombres)
    print(f'\n\nNombres ordenados: {nombres_ordenados}')

    final = time.time()

    tiempo = final - comienzo
    print(f'\nDuración ordenamiento por inserción: {tiempo} segundos')

if __name__ == "__main__":
    run()