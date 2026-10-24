# Ciencia de datos — Visualización de datos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../limpieza-de-datos/`, `../estadistica-descriptiva/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ciencia-de-datos/visualizacion-de-datos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Para qué se visualiza

Una **visualización** convierte datos en **imagen** para **ver patrones**, **comparar**, **encontrar errores** y **comunicar** hallazgos. Se usa en dos momentos:

- **Exploración:** para **entender los datos** uno mismo (muchos gráficos rápidos).
- **Comunicación:** para **contar un mensaje** a otras personas (pocos gráficos, **cuidados**).

Los números pueden **engañar** y los gráficos **revelan**: el **cuarteto de Anscombe** muestra **cuatro conjuntos** con **los mismos promedios y correlación** pero **formas totalmente distintas**.

---

## 2. Antes de graficar

1. **¿Qué pregunta** quiero responder?
2. **¿A quién** se lo voy a mostrar?
3. **¿Qué tipo de variables** tengo? (categóricas, numéricas, temporales)
4. **¿Qué mensaje** quiero que quede?

La **pregunta** determina el gráfico.

---

## 3. Elegir el gráfico

| Quiero mostrar... | Gráfico |
|:--|:--|
| **comparar** categorías | **barras** (horizontales si los nombres son largos) |
| **evolución en el tiempo** | **líneas** |
| **distribución** de una variable numérica | **histograma**, **diagrama de caja** (*boxplot*) |
| **relación** entre dos variables numéricas | **dispersión** (*scatter*) |
| **partes de un todo** (pocas categorías) | **barras apiladas**, **circular** (con pocas porciones) |
| **dos variables categóricas** | **mapa de calor**, barras agrupadas |
| **datos geográficos** | **mapa** |
| **ranking** | **barras ordenadas** |

**Evitar:** gráficos **3D**, **circulares** con muchas porciones, **doble eje** confuso, **exceso de colores**.

---

## 4. Gráficos clave

- **Histograma:** agrupa valores en **intervalos** y muestra **cuántos hay** en cada uno. Se ve **la forma** (simétrica, asimétrica, con dos picos). **El ancho de los intervalos** cambia la imagen.
- **Diagrama de caja:** muestra **mediana**, **Q1**, **Q3** (la caja), los **bigotes** y los **atípicos**. Útil para **comparar grupos**.
- **Dispersión:** cada punto es un **caso**; se ve **tendencia** (positiva, negativa, ninguna) y **atípicos**. Una **línea de tendencia** resume.
- **Barras:** la **altura** representa el valor; **siempre empiezan en cero**.
- **Líneas:** **puntos unidos en orden temporal**; el eje no necesariamente empieza en cero, pero **hay que ser honesto**.

---

## 5. Principios de buen diseño

1. **Claridad:** que se **entienda en segundos**.
2. **Título que diga el mensaje** ("Las ventas crecieron 12 % en 2026"), no solo el tema.
3. **Ejes con nombre y unidad.** **Fuente y fecha** de los datos.
4. **Eje de barras desde cero** (cortarlo **exagera** diferencias).
5. **Pocos colores**, con **significado**; destacar **lo importante** y **atenuar el resto** (gris).
6. **Accesibilidad:** **no depender solo del color** (muchas personas **no distinguen** rojo y verde: usar **paletas aptas para daltonismo**, formas, etiquetas); **contraste** suficiente.
7. **Ordenar** las categorías (por valor, salvo un orden natural).
8. **Etiquetar directamente** en vez de leyendas complicadas.
9. **Mínima tinta:** quitar lo que **no aporta** (bordes, sombras, cuadrículas fuertes).
10. **Escala consistente** al comparar gráficos.

---

## 6. Gráficos que mienten

- **Ejes cortados** (barras que arrancan en 50).
- **Escalas distintas** en gráficos comparados.
- **Áreas y volúmenes** que **exageran** (íconos 3D).
- **Elegir el período** que conviene.
- **Doble eje** que sugiere una relación falsa.
- **Correlación presentada como causa.**
- **Muestras pequeñas** sin avisar.
- **Porcentajes** sin la **cantidad** que hay detrás.

**Visualizar con honestidad** es una cuestión **ética**: el gráfico **no debe hacer decir a los datos lo que no dicen**.

---

## 7. Contar con datos (narrativa)

Una buena presentación **tiene una historia**: **contexto**, **hallazgo**, **qué significa**, **qué hacer**. **Un gráfico, un mensaje**. **Anotaciones** que guían la mirada (una flecha, un dato resaltado). **Menos es más.**

---

## 8. Herramientas

- **Planillas de cálculo** (gráficos básicos).
- **Python:** **matplotlib**, **seaborn**, **plotly**.
- **R:** **ggplot2**.
- **Herramientas de tableros** (BI): **Power BI**, **Tableau**, **Looker Studio**, **Metabase**, **Apache Superset**.
- **Mapas:** **QGIS**, **Leaflet**.

```python
import matplotlib.pyplot as plt

ventas.groupby("mes")["total"].sum().plot(kind="bar")
plt.title("Ventas por mes, 2026")
plt.xlabel("Mes")
plt.ylabel("Pesos")
plt.show()
```

---

## 9. Tableros

Un **tablero** (*dashboard*) reúne **indicadores** y **gráficos** para **seguir** algo. **Buenas prácticas:** **pocos indicadores clave**, **jerarquía visual**, **filtros simples**, **actualización clara** (¿hasta cuándo son los datos?), **sin sobrecarga**.
