# Informática — Ofimática: Planilla de cálculo (teoría)

> Tema del MAPA: `informatica/ofimatica-planilla-de-calculo`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría

**Presentación** — Introducción al uso de planillas de cálculo como herramientas para organizar, calcular y analizar datos.

---

## 1. La celda: unidad básica de la planilla

En una planilla de cálculo, la información se organiza en **celdas**, que son los espacios donde se ingresan datos numéricos, textuales o fórmulas. Cada celda está definida por la **intersección de una fila y una columna** (por ejemplo, la celda A1 corresponde a la columna A y la fila 1). Esta identificación permite ubicar rápidamente cualquier dato dentro del documento. Las celdas son el punto de partida para realizar operaciones matemáticas, crear listas o estructurar información compleja.

[IMAGEN: Cuadrícula con filas numeradas y columnas etiquetadas con letras, destacando una celda específica como A1]

---

## 2. Referencias absolutas, relativas y mixtas

Las **referencias de celda** son clave para hacer fórmulas dinámicas. Una referencia puede ser:

- **Relativa**: Se ajusta automáticamente cuando se copia la fórmula a otra celda. Por ejemplo, si en B2 escribís `=A1` y arrastrás la fórmula hacia abajo, se convertirá en `=A3`, manteniendo la relación entre columnas.
- **Absoluta**: Fija tanto la columna como la fila. Se escribe con el símbolo `$` antes de la letra y el número (ej: `$A$1`). Es útil cuando necesitás que una celda referenciada no cambie al copiar fórmulas.
- **Mixta**: Combina ambas, como `$A1` (columna fija, fila relativa) o `A$1` (fila fija, columna relativa).

[IMAGEN: Comparación entre referencias relativas y absolutas en una planilla con ejemplos de copiado]

---

## 3. Estructura básica de las fórmulas

Toda operación en una planilla comienza con el **signo igual (=)**, que informa al programa que se está ingresando una fórmula y no un texto o número común. Por ejemplo:  
- `=A1+B2` suma el contenido de A1 y B2.  
- `=C3*2` multiplica el valor de C3 por 2.

Las fórmulas pueden incluir **operadores aritméticos** como la suma (+), resta (–), multiplicación (*), división (/) o potenciación (^). Siempre se deben respetar las reglas de precedencia: operaciones entre paréntesis primero, luego multiplicaciones/divisiones y finalmente sumas/restas.

[IMAGEN: Ejemplo de fórmula en una celda con los símbolos mencionados]

---

## 4. Uso práctico de las funciones

Las **funciones** son herramientas predefinidas que simplifican cálculos complejos, como sumar un rango, calcular promedios o buscar datos. Para usar una función, se escribe el signo igual (=) seguido del nombre de la función y sus parámetros entre paréntesis. Por ejemplo:  
- `=SUMA(A1:A10)` calcula la suma de las celdas desde A1 hasta A10.  
- `=PROMEDIO(B2:B5)` obtiene el promedio del rango B2 a B5.

Las funciones suelen combinarse con referencias y operadores para realizar análisis más avanzados, como filtrar datos o aplicar condiciones específicas.

---

## N. Conexión con lo que sigue

Este tema es base para entender cómo se construyen **tablas dinámicas**, se aplican **condiciones lógicas** (como SI o Y) y se generan gráficos a partir de los datos procesados en ofimatica graficos.