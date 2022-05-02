import math


def media(X):
    return sum(X) / len(X)


def varianza(X):
    mu = media(X)
    aucmulator = 0
    for x in X:
        aucmulator = (x - mu)**2
    return aucmulator / len(x)


def desviacion_estandar(X):
    math.sqrt(varianza(X))
