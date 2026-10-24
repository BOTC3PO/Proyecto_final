# Ofimática — Tablas dinámicas y gráficos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../formulas-y-referencias/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ofimatica/tablas-dinamicas-y-graficos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Datos bien armados

Una tabla dinámica y un gráfico necesitan **datos ordenados**:

- **Una fila por registro** y **una columna por dato**.
- **Encabezados** en la primera fila, sin repetir y sin celdas combinadas.
- Sin filas o columnas **vacías** en el medio, y sin **subtotales** mezclados.
- El **mismo tipo** de dato en cada columna (fechas como fechas, números como números).

Convertir el rango en **"Tabla"** hace que se agreguen los datos nuevos automáticamente.

---

## 2. Tabla dinámica

Una **tabla dinámica** **resume** muchas filas sin escribir fórmulas: elegís qué agrupar y qué calcular, y se arma sola.

| Área | Función |
|:--|:--|
| **Filas** | categorías que quedan hacia abajo (producto, vendedor) |
| **Columnas** | categorías hacia la derecha (mes, región) |
| **Valores** | lo que se calcula: **suma**, **cuenta**, **promedio**, mínimo, máximo |
| **Filtros** | para recortar el análisis (un año, una sucursal) |

Ejemplo: de 5000 filas de ventas obtener las **ventas totales por vendedor y por mes**.

- **No se actualiza sola:** al cambiar los datos hay que **actualizar** (refrescar).
- **No se modifica a mano**: se cambia el diseño.
- Se puede **agrupar** fechas (por mes, trimestre, año) y números (por rangos).
- Se puede mostrar el valor como **porcentaje del total**.

---

## 3. Qué gráfico elegir

| Quiero mostrar | Gráfico |
|:--|:--|
| **comparar** categorías | **barras** o columnas |
| **evolución en el tiempo** | **líneas** |
| **partes de un todo** (pocas categorías) | **circular** (torta) o barras apiladas |
| **relación entre dos variables** | **dispersión** |
| **distribución** de valores | **histograma** |

---

## 4. Buenas prácticas de gráficos

1. **Un mensaje** por gráfico, con un **título** que lo diga ("Las ventas crecieron 12 % en 2026").
2. **Ejes** con nombre y unidad; el eje de las barras **empieza en cero** (si no, se exagera la diferencia).
3. **Pocos colores**, con significado; **leyenda** solo si hace falta.
4. Evitar el efecto **3D**, las sombras y los adornos que distorsionan.
5. La torta, **pocas porciones** (no más de 5) y que sumen 100 %.
6. **Ordenar** las barras (de mayor a menor) cuando no hay un orden natural.
7. Indicar la **fuente** y la **fecha** de los datos.

---

## 5. Cuidados

- Un gráfico puede **mentir sin querer**: ejes cortados, escalas distintas, muestras chicas.
- Revisar que los datos no tengan **errores o duplicados** antes de resumir.
- **Correlación no es causalidad**: que dos líneas suban juntas no prueba que una cause la otra.
