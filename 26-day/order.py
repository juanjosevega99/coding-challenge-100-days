import random
caracteres=['"','#','$','%','(',')','/','&']
mensaje='''Tenemos los siguientes caracteres 
            1-->"
            2-->#
            3-->$
            4-->%
            5-->(
            6-->)
            7-->/
            8-->& '''
seleccion=[]
for s in range(4):
    print(mensaje)
    elegido=int(input('Elige un numero: '))
    elegido=elegido-1
    elegi=caracteres[elegido]
    seleccion.append(elegi)
seleccion=''.join(seleccion)
print(f'Los caracteres elegidos por usted son: {seleccion}')    

nuevo=[]
cont=0
for i in range(4):
    cont=cont+1
    aleatorio=random.choice(caracteres)
    print(f'En la posicion {cont} se tiene el caracter: {aleatorio}')
    nuevo.append(aleatorio)
    caracteres.remove(aleatorio)
nuevo=''.join(nuevo)
print(f'Y los caracteres elegidos aleatoriamente son: {nuevo}')