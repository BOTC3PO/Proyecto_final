# PSeInt — Tablas y arreglos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../estructuras-de-control/`, `../../../informatica/estructuras-de-datos-listas-pilas-colas/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/pseint/tablas-arreglos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es un arreglo

Un **arreglo** (o **vector**) guarda **varios valores del mismo tipo bajo un solo nombre**, ordenados por una **posición** (**índice**). Sirve cuando hay que guardar 30 notas sin crear 30 variables.

```
Definir notas Como Real
Dimension notas[5]
notas[1] <- 8
notas[2] <- 6.5
Escribir notas[1]
```

- **`Dimension nombre[tamaño]`** reserva el espacio.
- Se accede con **corchetes**: `notas[3]`.
- En PSeInt, **los índices empiezan en 1** (en la configuración por defecto; en muchos lenguajes reales empiezan en 0).
- Salirse del rango (`notas[6]` en un arreglo de 5) es un **error**.

---

## 2. Recorrer un arreglo

Se usa un `Para` con el índice:

```
Para i <- 1 Hasta 5 Hacer
    Escribir "Nota ", i, ": "
    Leer notas[i]
FinPara

suma <- 0
Para i <- 1 Hasta 5 Hacer
    suma <- suma + notas[i]
FinPara
Escribir "Promedio: ", suma / 5
```

Patrón: **cargar**, **recorrer para calcular** (suma, máximo, mínimo, cantidad), **mostrar**.

**Máximo:**

```
mayor <- notas[1]
Para i <- 2 Hasta 5 Hacer
    Si notas[i] > mayor Entonces
        mayor <- notas[i]
    FinSi
FinPara
```

---

## 3. Búsqueda y ordenamiento

- **Búsqueda lineal:** recorrer elemento por elemento hasta encontrar el buscado (con una **bandera** para saber si se halló).
- **Ordenamiento** (por ejemplo, **burbuja**): comparar pares vecinos e intercambiar si están desordenados; se repite hasta que no haya cambios.
- Para **intercambiar** dos valores se necesita una **variable auxiliar**: `aux <- a[i]; a[i] <- a[j]; a[j] <- aux`.

---

## 4. Matrices (tablas de dos dimensiones)

```
Dimension tabla[3, 4]       // 3 filas y 4 columnas
tabla[2, 3] <- 10
Para f <- 1 Hasta 3 Hacer
    Para c <- 1 Hasta 4 Hacer
        Escribir tabla[f, c]
    FinPara
FinPara
```

Una **matriz** es una tabla con **filas** y **columnas**; se recorre con **dos `Para` anidados**. Se usa para planillas, tableros de juego, calificaciones por materia y por alumno.

---

## 5. Cuidados

- **El tamaño** se fija al declarar: planificar cuántos elementos se necesitan.
- **Inicializar** (por ejemplo, poner en 0) antes de acumular.
- Usar una **constante** para el tamaño en lugar de repetir el número.
- **Errores "por uno"** al recorrer (`1 Hasta n`, no `0 Hasta n`).
- **Dos arreglos paralelos** (nombres y notas con el mismo índice) funcionan, pero cuesta mantenerlos sincronizados.
