import csv
import time

with open('nombres.csv', newline='') as File:
    nombre_lista=[]
    reader = csv.reader(File)
    for row in reader:
        nombre_lista.append(row[0])
        nombre_lista.append(row[1])
        nombre_lista.append(row[2])
    print(nombre_lista)
miLista = nombre_lista
#Por bublesort
print('La lista ordenada es: \n')
start = time.perf_counter()
for x in range(len(nombre_lista)-1,0,-1):
    for i in range(x):
        if nombre_lista[i]>nombre_lista[i+1]:
            nombre_lista[i], nombre_lista[i+1] = nombre_lista[i+1], nombre_lista[i]
stop = time.perf_counter()
total_time = (stop - start)*1000
print(nombre_lista)
print('Por bublesort se tartda {}.' .format(total_time))
#Por Quicksort
start = time.perf_counter()
defsort(lista):
    izquierda = []
    centro = []
    derecha = []
    if len(lista) > 1:
        pivote = lista[0]
        for i in lista:
            if i < pivote:
                izquierda.append(i)
            elif i == pivote:
                centro.append(i)
            elif i > pivote:
                derecha.append(i)
        #print(izquierda+["-"]+centro+["-"]+derecha)
        return sort(izquierda)+centro+sort(derecha)
    else:
      return lista
print(miLista)
print(sort(miLista))
stop = time.perf_counter()
total_time = (stop - start)*1000
print('Por Quicksort se tartda {}.' .format(total_time))