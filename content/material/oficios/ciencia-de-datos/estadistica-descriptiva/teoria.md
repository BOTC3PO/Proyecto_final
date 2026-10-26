# Ciencia de datos — Estadística descriptiva (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../../informatica/variables-y-tipos-de-dato/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ciencia-de-datos/estadistica-descriptiva/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué hace la estadística descriptiva

La **estadística descriptiva** **resume y describe** un conjunto de datos con **números** y **gráficos**, sin sacar conclusiones sobre algo más grande (eso es la **inferencia**).

- **Población:** **todos** los casos de interés. **Muestra:** una **parte** de la población que se estudia.
- **Individuo** (unidad): cada elemento observado; **variable:** la característica que se mide; **dato:** el valor medido.

---

## 2. Tipos de variables

| Tipo | Ejemplos | Qué se puede hacer |
|:--|:--|:--|
| **Categórica nominal** | color, ciudad, sexo | contar, **moda** |
| **Categórica ordinal** | nivel (bajo, medio, alto), talle | contar, ordenar, **mediana** |
| **Numérica discreta** | cantidad de hijos, goles | todo lo anterior y **promedio** |
| **Numérica continua** | altura, peso, temperatura | todo, con **decimales** |

El **tipo** determina **qué cálculo y qué gráfico** tienen sentido (no se calcula el promedio de "ciudades").

---

## 3. Frecuencias

- **Frecuencia absoluta:** cuántas veces aparece un valor.
- **Frecuencia relativa:** la absoluta ÷ el total (**proporción**; × 100 = **porcentaje**).
- **Frecuencia acumulada:** suma hasta ese valor.

Si en 20 estudiantes, 5 usan bicicleta: **frecuencia absoluta** 5; **relativa** 5/20 = 0,25 = **25 %**.

---

## 4. Medidas de tendencia central

- **Media (promedio):** suma de los valores ÷ cantidad. **Sensible a valores extremos.**
- **Mediana:** el valor **del medio** al ordenar los datos (si hay cantidad par, el **promedio de los dos centrales**). **Resistente** a extremos.
- **Moda:** el valor **más frecuente** (puede haber **varias** o ninguna).

Ejemplo: **2, 4, 4, 6, 9**.

- Media: (2+4+4+6+9) / 5 = **5**.
- Mediana: **4** (el del medio).
- Moda: **4**.

Si un valor extremo aparece (**2, 4, 4, 6, 90**), la **media** sube a 21,2 y la **mediana** sigue en 4: **para ingresos, precios de viviendas** (con extremos), **la mediana describe mejor lo "típico"**.

---

## 5. Medidas de dispersión

Indican **cuánto se separan** los datos del centro.

- **Rango:** máximo − mínimo (**sensible a extremos**). En el ejemplo: 9 − 2 = **7**.
- **Varianza:** promedio de los **cuadrados** de las diferencias con la media. En una **muestra** se divide por **n − 1** (en una población, por n).
- **Desviación estándar:** la **raíz cuadrada** de la varianza, en la **misma unidad** que los datos.
- **Cuartiles:** dividen los datos ordenados en **cuatro** partes (**Q1**: 25 %, **Q2**: mediana, **Q3**: 75 %). **Rango intercuartílico (IQR)** = Q3 − Q1.
- **Percentiles:** el valor bajo el cual está un porcentaje de los datos.

Cálculo (datos 2, 4, 4, 6, 9; media 5; **muestra**):

| Dato | Desvío (dato − 5) | Cuadrado |
|:--|:--|:--|
| 2 | −3 | 9 |
| 4 | −1 | 1 |
| 4 | −1 | 1 |
| 6 | 1 | 1 |
| 9 | 4 | 16 |
| **Suma** | 0 | **28** |

Varianza muestral = 28 / (5 − 1) = **7**. Desviación estándar = √7 ≈ **2,65**.

Los **desvíos siempre suman cero**: por eso se elevan al cuadrado.

---

## 6. Valores atípicos (outliers)

Un dato **muy alejado** del resto. Una regla común: está **fuera** de **[Q1 − 1,5 × IQR , Q3 + 1,5 × IQR]**. **No se borran sin pensar**: pueden ser **errores** (hay que corregirlos) o **casos reales importantes** (hay que **entenderlos**).

---

## 7. Forma de la distribución

- **Simétrica:** media ≈ mediana.
- **Asimétrica a la derecha** (cola larga hacia valores altos): **media > mediana** (ingresos).
- **Asimétrica a la izquierda:** media < mediana.
- **Distribución normal:** campana simétrica. Aproximadamente **68 %** de los datos está a **±1 desviación**, **95 %** a **±2**, **99,7 %** a **±3**.

---

## 8. Cuidados

- **Un número no cuenta toda la historia:** mirar también el **gráfico**. Conjuntos muy distintos pueden tener la **misma media y desviación** (**cuarteto de Anscombe**).
- **Promedio de promedios** no es el promedio general si los grupos tienen **tamaños distintos**.
- **Correlación no es causalidad.**
- **Muestras sesgadas** dan resultados engañosos.
- Informar la **cantidad de datos** y las **unidades**.
