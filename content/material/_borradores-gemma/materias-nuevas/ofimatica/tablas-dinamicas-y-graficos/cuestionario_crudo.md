### 1 — Agrupación de campos en tabla dinámica
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "agrupacion", "excel"]
respuesta: verdadero
tipo: vf
enunciado:
- "En una tabla dinámica de Excel, para agrupar fechas que están en formato de número de serie (entero), es necesario primero convertir la columna a formato de Fecha antes de usar la función 'Agrupar'."
pasos:
- "Seleccionar la columna de fechas en la fuente de datos."
- "Verificar si Excel detecta automáticamente el formato de fecha."
- "Si no lo detecta, aplicar formato de fecha antes de crear la tabla dinámica."
explicacion: "Excel agrupa correctamente solo cuando la fuente de datos tiene un formato de fecha reconocido. Si los datos son números de serie sin formato de fecha, la agrupación por meses/años fallará o no estará disponible."
```

### 2 — Cálculo de porcentaje del total
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "mostrar-valores-como", "porcentaje"]
respuesta: "Mostrar valores como"
tipo: completar
enunciado:
- "Para visualizar las ventas como porcentaje del total general en una tabla dinámica, en el menú contextual del campo de valores, se debe seleccionar la opción: {respuesta} > 'Porcentaje del total general'."
pasos:
- "Hacer clic derecho sobre un valor numérico en la tabla dinámica."
- "Seleccionar 'Mostrar valores como'."
- "Elegir 'Porcentaje del total general'."
explicacion: "Esta configuración cambia la fórmula subyacente del campo para dividir el valor actual entre la suma total de todos los valores en el campo, independientemente de los filtros de fila/columna."
```

### 3 — Tipo de gráfico para composición
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["graficos", "composicion", "torta"]
opciones_explicitas:
  - "Gráfico de líneas"
  - "Gráfico circular (torta)"
  - "Gráfico de dispersión"
  - "Gráfico de barras agrupadas"
respuesta: "Gráfico circular (torta)"
tipo: mc
enunciado:
- "Para mostrar la contribución porcentual de cada región de ventas sobre el total global, el tipo de gráfico más adecuado y comúnmente utilizado es:"
pasos:
- "Analizar la naturaleza de los datos: partes de un todo."
- "Seleccionar un gráfico que resalte proporciones."
- "Evitar gráficos de tendencia o correlación."
explicacion: "Los gráficos circulares están diseñados específicamente para mostrar cómo se compone un todo (100%) a partir de sus partes, facilitando la comparación visual de proporciones relativas."
```

### 4 — Actualización de datos fuente
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "actualizacion", "datos"]
respuesta: falso
tipo: vf
enunciado:
- "Si se agregan nuevas filas de datos a la fuente de datos original de una tabla dinámica, esta se actualizará automáticamente en tiempo real sin necesidad de ninguna acción del usuario."
pasos:
- "Agregar datos a la hoja de cálculo fuente."
- "Observar la tabla dinámica."
- "Intentar actualizar manualmente."
explicacion: "Las tablas dinámicas no se actualizan automáticamente al modificar la fuente. Es necesario hacer clic derecho y seleccionar 'Actualizar' o usar el botón 'Actualizar todo' en la pestaña Análisis."
```

### 5 — Slicer como filtro de gráfico
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["slicer", "conectar", "grafico-dinamico"]
respuesta: "Conectar informes"
tipo: completar
enunciado:
- "Para que un Slicer (segmentación de datos) controle tanto una tabla dinámica como un gráfico dinámico por separado, se debe usar la opción del menú contextual del Slicer llamada: {respuesta}."
pasos:
- "Clic derecho sobre el Slicer."
- "Seleccionar 'Conectar informes'."
- "Marcar las casillas de la tabla y el gráfico."
explicacion: "Por defecto, un Slicer solo se conecta al primer objeto dinámico creado. La opción 'Conectar informes' permite vincularlo a múltiples tablas y gráficos dinámicos en el libro."
```

### 6 — Operación de valor predeterminada
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "campo-numerico", "suma"]
respuesta: suma
tipo: completar
enunciado:
- "Al arrastrar un campo numérico (ej. 'Importe') al área de 'Valores' de una tabla dinámica, la operación de resumen predeterminada que Excel aplica automáticamente es la {respuesta}."
pasos:
- "Arrastrar campo numérico a valores."
- "Verificar la fórmula en 'Configuración de campo de valor'."
- "Observar que dice 'SUMA de...'."
explicacion: "Excel asume que para datos numéricos se desea calcular la suma total. Para cambiarlo (ej. a promedio o conteo), debe modificarse explícitamente en la configuración del campo."
```

### 7 — Gráfico de dispersión para correlación
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["graficos", "dispersion", "correlacion"]
opciones_explicitas:
  - "Gráfico de barras"
  - "Gráfico de dispersión (XY)"
  - "Gráfico de áreas"
  - "Gráfico de radar"
respuesta: "Gráfico de dispersión (XY)"
tipo: mc
enunciado:
- "Para analizar la relación o correlación entre dos variables numéricas continuas (ej. horas de estudio vs. nota obtenida), el gráfico más adecuado es:"
pasos:
- "Identificar dos ejes numéricos."
- "Buscar gráfico que mapee puntos individuales."
- "Descartar gráficos categóricos."
explicacion: "El gráfico de dispersión permite visualizar cómo una variable afecta a otra, mostrando la densidad de datos y posibles tendencias lineales o no lineales entre dos conjuntos numéricos."
```

### 8 — Línea de tendencia en gráfico dinámico
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["graficos", "tendencia", "regresion"]
respuesta: verdadero
tipo: vf
enunciado:
- "En un gráfico dinámico de líneas, es posible agregar una línea de tendencia polinómica para suavizar fluctuaciones de datos y visualizar una tendencia subyacente a largo plazo."
pasos:
- "Seleccionar la serie de datos en el gráfico."
- "Agregar línea de tendencia."
- "Elegir tipo polinómico."
explicacion: "Excel permite agregar líneas de tendencia (lineal, exponencial, polinómica, etc.) a series de gráficos dinámicos para predecir valores futuros o suavizar el ruido de los datos."
```

### 9 — Filtrado de elementos nulos
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "filtro", "nulos"]
respuesta: "Filtro de campo"
tipo: completar
enunciado:
- "Para excluir los registros donde falta el valor del campo 'Cliente' en la tabla dinámica, se debe acceder al {respuesta} de la columna y desmarcar la opción '(vacío)' o '(nulo)'."
pasos:
- "Clic en la flecha de filtro de la columna."
- "Buscar la opción de nulos."
- "Desmarcarla para filtrar."
explicacion: "Los campos vacíos en la fuente de datos aparecen como '(vacío)' en los filtros de la tabla dinámica. Desmarcar esta opción elimina esos registros del resumen."
```

### 10 — Gráfico de cascada para variaciones
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["graficos", "cascada", "variacion"]
opciones_explicitas:
  - "Gráfico de barras apiladas"
  - "Gráfico de cascada"
  - "Gráfico de superficie"
  - "Gráfico de mapa"
respuesta: "Gráfico de cascada"
tipo: mc
enunciado:
- "Para visualizar cómo una serie de valores positivos y negativos contribuyen a un total final (ej. flujo de caja mensual), el gráfico especializado disponible en Excel es:"
pasos:
- "Identificar necesidad de mostrar inicio, cambios y fin."
- "Seleccionar gráfico de efecto 'puente'."
- "Asignar datos de variación."
explicacion: "El gráfico de cascada (o waterfall) es ideal para mostrar el impacto secuencial de valores intermedios en un resultado final, distinguiendo claramente entre ganancias y pérdidas."
```

### 11 — Cálculo de campo calculado
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "campo-calculado", "formula"]
respuesta: verdadero
tipo: vf
enunciado:
- "Una tabla dinámica permite crear 'Campos calculados' que ejecutan fórmulas basadas en otros campos de la tabla (ej. Margen = Ventas - Costos), aunque no existan en la fuente de datos original."
pasos:
- "Ir a Análisis > Campos, elementos y conjuntos."
- "Seleccionar 'Campo calculado'."
- "Escribir fórmula."
explicacion: "Los campos calculados permiten realizar operaciones aritméticas o lógicas dentro de la tabla dinámica sin modificar la fuente de datos, siempre que los campos referenciados ya estén en la tabla."
```

### 12 — Formato condicional en gráfico
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["graficos", "formato-condicional", "reglas"]
opciones_explicitas:
  - "Reglas de formato de celda"
  - "Reglas de formato de serie de datos"
  - "Filtros de gráfico"
  - "Estilos rápidos"
respuesta: "Reglas de formato de serie de datos"
tipo: mc
enunciado:
- "Para cambiar el color de una barra específica en un gráfico dinámico basándose en si su valor supera un umbral, se debe aplicar formato condicional a:"
pasos:
- "Seleccionar la serie de barras."
- "Usar formato condicional para series."
- "Definir regla basada en valor."
explicacion: "El formato condicional en gráficos dinámicos se aplica a las series de datos (o puntos), permitiendo cambiar colores o estilos basados en valores numéricos, a diferencia del formato de celda que es para tablas."
```

### 13 — Agrupación manual de números
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "agrupacion-numeros", "rangos"]
respuesta: "Agrupar"
tipo: completar
enunciado:
- "Para agrupar valores numéricos continuos (ej. ventas de $10 a $1000) en rangos de $100 en $100 dentro de una tabla dinámica, se debe seleccionar los valores y usar la opción {respuesta}."
pasos:
- "Seleccionar celdas de la columna de valores."
- "Clic derecho."
- "Elegir 'Agrupar'."
explicacion: "La función 'Agrupar' permite crear intervalos definidos por el usuario para datos numéricos, facilitando el análisis por rangos en lugar de por valores individuales."
```

### 14 — Gráfico de mapa para datos geográficos
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["graficos", "mapa", "geografia"]
opciones_explicitas:
  - "Gráfico de burbujas"
  - "Gráfico de mapa"
  - "Gráfico de anillo"
  - "Gráfico de dendrograma"
respuesta: "Gráfico de mapa"
tipo: mc
enunciado:
- "Para visualizar datos de ventas distribuidos por países o estados de forma geográfica, el tipo de gráfico moderno integrado en Excel es:"
pasos:
- "Preparar datos con nombres de regiones."
- "Seleccionar gráfico geográfico."
- "Asignar campos de región y valor."
explicacion: "El gráfico de mapa (disponible en Excel 365/2019+) permite representar datos geográficos directamente, coloreando regiones según la magnitud de los datos asociados."
```

### 15 — Actualización automática al abrir
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "propiedades", "actualizacion"]
respuesta: verdadero
tipo: vf
enunciado:
- "En las propiedades de la tabla dinámica, se puede configurar para que se actualice automáticamente cada vez que se abra el libro de Excel."
pasos:
- "Clic derecho en la tabla dinámica."
- "Seleccionar 'Propiedades de tabla dinámica'."
- "Marcar 'Actualizar al abrir'."
explicacion: "La opción 'Actualizar al abrir' asegura que la tabla dinámica refleje los datos más recientes de la fuente sin intervención manual del usuario al cargar el archivo."
```

### 16 — Gráfico de área apilada
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["graficos", "area-apilada", "total"]
opciones_explicitas:
  - "Gráfico de líneas"
  - "Gráfico de área apilada"
  - "Gráfico de columnas"
  - "Gráfico de torta"
respuesta: "Gráfico de área apilada"
tipo: mc
enunciado:
- "Para mostrar cómo se acumulan las contribuciones de múltiples categorías para formar un total común a lo largo del tiempo, el gráfico más apropiado es:"
pasos:
- "Identificar necesidad de mostrar acumulación y tiempo."
- "Seleccionar gráfico de área apilada."
- "Asignar categorías y eje X."
explicacion: "El gráfico de área apilada combina la visualización de tendencias temporales con la composición de partes de un todo, mostrando tanto el total como la contribución de cada categoría."
```

### 17 — Ordenamiento personalizado
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "ordenamiento", "valor"]
respuesta: "Más pequeño a más grande"
tipo: completar
enunciado:
- "Para ordenar los elementos de un campo de fila en una tabla dinámica de menor a mayor valor numérico, se debe usar el ordenamiento {respuesta} del campo de valores."
pasos:
- "Clic en el filtro del campo de fila."
- "Seleccionar 'Más orden'."
- "Elegir orden ascendente del valor."
explicacion: "El ordenamiento basado en valores permite organizar la tabla dinámica según la magnitud de los datos resumidos, facilitando la identificación de los más altos o bajos."
```

### 18 — Gráfico de radar para rendimiento multidimensional
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["graficos", "radar", "comparacion"]
opciones_explicitas:
  - "Gráfico de radar"
  - "Gráfico de barras"
  - "Gráfico de líneas"
  - "Gráfico de dispersión"
respuesta: "Gráfico de radar"
tipo: mc
enunciado:
- "Para comparar el rendimiento de varios empleados en múltiples criterios simultáneos (ej. velocidad, precisión, puntualidad) en una sola visualización, se utiliza:"
pasos:
- "Identificar múltiples ejes de evaluación."
- "Seleccionar gráfico radial."
- "Asignar datos por eje."
explicacion: "El gráfico de radar (o de araña) es ideal para comparar perfiles multidimensionales, mostrando cómo se distribuyen los valores en distintos ejes desde un punto central."
```

### 19 — Campo de cálculo de porcentaje
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "porcentaje", "campo-calculado"]
respuesta: verdadero
tipo: vf
enunciado:
- "Es posible crear un campo calculado en una tabla dinámica que calcule el porcentaje de un campo respecto a otro campo de la misma fila (ej. Margen / Ventas)."
pasos:
- "Crear campo calculado."
- "Escribir fórmula '= Margen / Ventas'."
- "Verificar resultado."
explicacion: "Los campos calculados permiten operaciones entre campos de la misma fila de la tabla dinámica, facilitando cálculos derivados como ratios o porcentajes sin modificar la fuente."
```

### 20 — Gráfico de columnas agrupadas
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["graficos", "columnas", "comparacion"]
opciones_explicitas:
  - "Gráfico de columnas agrupadas"
  - "Gráfico de líneas"
  - "Gráfico de torta"
  - "Gráfico de burbujas"
respuesta: "Gráfico de columnas agrupadas"
tipo: mc
enunciado:
- "Para comparar valores de diferentes categorías (ej. productos) en períodos distintos (ej. meses) lado a lado, el gráfico estándar es:"
pasos:
- "Identificar categorías y períodos."
- "Seleccionar gráfico de columnas."
- "Agrupar por categoría."
explicacion: "El gráfico de columnas agrupadas permite comparar valores entre categorías dentro de cada grupo de tiempo, facilitiendo la identificación de diferencias y patrones."
```

### 21 — Filtro de informe
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "filtro", "alcance"]
respuesta: "Filtro de informe"
tipo: completar
enunciado:
- "Para filtrar todos los campos de la tabla dinámica simultáneamente (ej. por año), se utiliza el {respuesta} ubicado en la esquina superior de la tabla."
pasos:
- "Ubicar el filtro en la esquina superior."
- "Seleccionar valores deseados."
- "Aplicar a toda la tabla."
explicacion: "El filtro de informe afecta a toda la tabla dinámica, excluyendo filas y columnas que no coincidan con los criterios seleccionados, a diferencia de los filtros de campo que solo afectan un eje."
```

### 22 — Gráfico de líneas con marcadores
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["graficos", "lineas", "marcadores"]
opciones_explicitas:
  - "Gráfico de líneas con marcadores"
  - "Gráfico de líneas sin marcadores"
  - "Gráfico de área"
  - "Gráfico de barras"
respuesta: "Gráfico de líneas con marcadores"
tipo: mc
enunciado:
- "Para visualizar una tendencia temporal pero resaltar los valores exactos de cada punto de datos, se debe usar:"
pasos:
- "Seleccionar gráfico de líneas."
- "Activar marcadores de datos."
- "Personalizar estilo."
explicacion: "Los marcadores en un gráfico de líneas permiten identificar con precisión los valores en cada punto de tiempo, combinando la claridad de la tendencia con la especificidad de los datos."
```

### 23 — Ocultar elementos vacíos
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "opcion", "vacios"]
respuesta: verdadero
tipo: vf
enunciado:
- "En las opciones de diseño de la tabla dinámica, existe una casilla para 'Ocultar elementos con datos nulos', que elimina las filas/columnas vacías de la visualización."
pasos:
- "Ir a Diseño > Opciones."
- "Buscar 'Ocultar elementos con datos nulos'."
- "Activar la opción."
explicacion: "Esta opción limpia la visualización al eliminar filas o columnas que no tienen datos asociados, reduciendo el ruido visual en tablas con muchos registros vacíos."
```

### 24 — Gráfico de burbujas para 3 variables
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["graficos", "burbujas", "3d"]
opciones_explicitas:
  - "Gráfico de dispersión"
  - "Gráfico de burbujas"
  - "Gráfico de líneas"
  - "Gráfico de columnas"
respuesta: "Gráfico de burbujas"
tipo: mc
enunciado:
- "Para representar tres variables numéricas en un gráfico (dos en ejes X/Y y una en el tamaño de la burbuja), se utiliza:"
pasos:
- "Preparar tres columnas de datos numéricos."
- "Seleccionar gráfico de burbujas."
- "Asignar ejes y tamaño."
explicacion: "El gráfico de burbujas extiende el gráfico de dispersión añadiendo una tercera dimensión (tamaño), permitiendo comparar magnitudes adicionales además de la relación entre dos variables."
```

### 25 — Actualización manual de conexiones
```yaml
metadata:
  materia: "ofimatica"
  tema: "tablas-dinamicas-y-graficos"
  nivel: "intermedio"
  tags: ["tabla-dinamica", "conexion", "actualizacion"]
respuesta: "Actualizar"
tipo: completar
enunciado:
- "Si la tabla dinámica se conecta a una fuente de datos externa (ej. SQL o otra hoja), el botón en la pestaña Análisis para refrescar los datos se llama {respuesta}."
pasos:
- "Ir a la pestaña Análisis de la tabla dinámica."
- "Buscar el botón de actualización."
- "Clic para refrescar."
explicacion: "El botón 'Actualizar' fuerza la recarga de datos desde la fuente externa, asegurando que la tabla dinámica muestre la información más reciente disponible en la conexión."
```