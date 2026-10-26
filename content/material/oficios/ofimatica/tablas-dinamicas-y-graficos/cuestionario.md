# Ofimática — Tablas dinámicas y gráficos (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Datos

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["datos"]

tipo: mc
opciones_explicitas: ["Una fila por registro y una columna por dato, con encabezados", "Con celdas combinadas", "Con filas vacías en el medio", "Mezclados con subtotales"]
respuesta: "Una fila por registro y una columna por dato, con encabezados"

enunciado: "¿Cómo deben estar los datos para armar una tabla dinámica?"

explicacion: |
  Una buena estructura es la base.
```

### 2 — Encabezados

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["datos"]

tipo: mc
opciones_explicitas: ["Estar en la primera fila y no repetirse", "Estar combinados", "Estar vacíos", "Estar al final"]
respuesta: "Estar en la primera fila y no repetirse"

enunciado: "¿Qué requieren los encabezados de una tabla de datos?"

explicacion: |
  Sirven como nombres de campo.
```

### 3 — Tabla

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "intermedio"
  tags: ["tabla"]

tipo: mc
opciones_explicitas: ["Que los datos nuevos se incorporan automáticamente", "Que cambia el idioma", "Que oculta columnas", "Que cifra"]
respuesta: "Que los datos nuevos se incorporan automáticamente"

enunciado: "¿Qué ventaja da convertir el rango en una \"Tabla\"?"

explicacion: |
  Facilita actualizar los resúmenes.
```

### 4 — Qué hace

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["dinamica"]

tipo: mc
opciones_explicitas: ["Resume muchas filas agrupando y calculando sin escribir fórmulas", "Borra datos", "Corrige errores", "Cifra la hoja"]
respuesta: "Resume muchas filas agrupando y calculando sin escribir fórmulas"

enunciado: "¿Qué hace una tabla dinámica?"

explicacion: |
  Se arma eligiendo campos.
```

### 5 — Valores

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["valores"]

tipo: mc
opciones_explicitas: ["Lo que se calcula: suma, cuenta, promedio...", "Los encabezados", "Los títulos", "Los comentarios"]
respuesta: "Lo que se calcula: suma, cuenta, promedio..."

enunciado: "¿Qué se coloca en el área de Valores?"

explicacion: |
  Se elige la función de resumen.
```

### 6 — Filas y columnas

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["areas"]

tipo: mc
opciones_explicitas: ["Las categorías por las que se agrupa", "Los números a sumar", "Las fórmulas", "Las imágenes"]
respuesta: "Las categorías por las que se agrupa"

enunciado: "¿Qué se pone en las áreas de Filas y Columnas?"

explicacion: |
  Por ejemplo, vendedor en filas y mes en columnas.
```

### 7 — Ejemplo

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["uso"]

tipo: mc
opciones_explicitas: ["Las ventas totales por vendedor y por mes", "Solo el primer registro", "Un correo", "Una imagen"]
respuesta: "Las ventas totales por vendedor y por mes"

enunciado: "¿Qué puede obtener una tabla dinámica de 5000 filas de ventas?"

explicacion: |
  Es su uso típico.
```

### 8 — Actualizar

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "intermedio"
  tags: ["actualizar"]

tipo: mc
opciones_explicitas: ["Actualizarla (refrescar)", "Nada: se actualiza sola", "Borrarla", "Reescribirla"]
respuesta: "Actualizarla (refrescar)"

enunciado: "Cambiaron los datos de origen. ¿Qué hay que hacer con la tabla dinámica?"

explicacion: |
  No se refresca automáticamente.
```

### 9 — Modificar

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "intermedio"
  tags: ["dinamica"]

tipo: mc
opciones_explicitas: ["Cambiando su diseño, no escribiendo sobre los valores", "Escribiendo encima", "Con una macro", "No se puede"]
respuesta: "Cambiando su diseño, no escribiendo sobre los valores"

enunciado: "¿Cómo se cambia el contenido de una tabla dinámica?"

explicacion: |
  Los valores son resultado del cálculo.
```

### 10 — Agrupar

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "intermedio"
  tags: ["agrupar"]

tipo: mc
opciones_explicitas: ["Por mes, trimestre y año", "Por color", "Por fuente", "Por idioma"]
respuesta: "Por mes, trimestre y año"

enunciado: "¿Qué permite agrupar una tabla dinámica con fechas?"

explicacion: |
  Es muy útil para series de tiempo.
```

### 11 — Barras

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["graficos"]

tipo: mc
opciones_explicitas: ["Barras o columnas", "Líneas", "Dispersión", "Circular siempre"]
respuesta: "Barras o columnas"

enunciado: "¿Qué gráfico sirve para comparar categorías?"

explicacion: |
  Facilita comparar alturas.
```

### 12 — Líneas

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["graficos"]

tipo: mc
opciones_explicitas: ["Líneas", "Circular", "Barras apiladas", "Dispersión"]
respuesta: "Líneas"

enunciado: "¿Qué gráfico muestra la evolución en el tiempo?"

explicacion: |
  Une los puntos a lo largo del tiempo.
```

### 13 — Torta

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["graficos"]

tipo: mc
opciones_explicitas: ["Para mostrar partes de un todo con pocas categorías", "Con 20 categorías", "Para series de tiempo", "Para valores negativos"]
respuesta: "Para mostrar partes de un todo con pocas categorías"

enunciado: "¿Cuándo es adecuado un gráfico circular?"

explicacion: |
  No más de unas 5 porciones.
```

### 14 — Dispersión

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "intermedio"
  tags: ["graficos"]

tipo: mc
opciones_explicitas: ["La relación entre dos variables numéricas", "La evolución en el tiempo", "Partes de un todo", "Un mapa"]
respuesta: "La relación entre dos variables numéricas"

enunciado: "¿Qué muestra un gráfico de dispersión?"

explicacion: |
  Cada punto es un par de valores.
```

### 15 — Eje

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["ejes"]

tipo: mc
opciones_explicitas: ["En cero", "En cualquier número", "En el menor valor", "No tiene eje"]
respuesta: "En cero"

enunciado: "¿Dónde conviene que empiece el eje de un gráfico de barras?"

explicacion: |
  Cortar el eje exagera las diferencias.
```

### 16 — Título

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["titulo"]

tipo: mc
opciones_explicitas: ["El mensaje principal, por ejemplo \"Las ventas crecieron 12 % en 2026\"", "\"Gráfico 1\"", "\"Datos\"", "Nada"]
respuesta: "El mensaje principal, por ejemplo \"Las ventas crecieron 12 % en 2026\""

enunciado: "¿Qué conviene que diga el título de un gráfico?"

explicacion: |
  Orienta la lectura.
```

### 17 — 3D

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["3d"]

tipo: mc
opciones_explicitas: ["Porque distorsiona la lectura de los valores", "Porque ocupa más", "Porque no se imprime", "Porque es lento"]
respuesta: "Porque distorsiona la lectura de los valores"

enunciado: "¿Por qué se evita el efecto 3D en los gráficos?"

explicacion: |
  Las alturas y áreas se perciben mal.
```

### 18 — Orden

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["orden"]

tipo: mc
opciones_explicitas: ["De mayor a menor", "Al azar", "Alfabéticamente siempre", "Por color"]
respuesta: "De mayor a menor"

enunciado: "Con barras sin orden natural, ¿cómo conviene ordenarlas?"

explicacion: |
  Facilita comparar.
```

### 19 — Fuente

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "basico"
  tags: ["fuente"]

tipo: mc
opciones_explicitas: ["La fuente y la fecha de los datos", "El nombre del programa", "Nada", "El tamaño de letra"]
respuesta: "La fuente y la fecha de los datos"

enunciado: "¿Qué conviene indicar al pie de un gráfico?"

explicacion: |
  Da transparencia.
```

### 20 — Correlación

```
metadata:
  materia: "ofimatica"
  tema: "tablas_dinamicas_y_graficos"
  nivel: "intermedio"
  tags: ["correlacion"]

tipo: mc
opciones_explicitas: ["Que están relacionadas, no que una cause la otra", "Que una causa la otra", "Que son iguales", "Que son errores"]
respuesta: "Que están relacionadas, no que una cause la otra"

enunciado: "Dos líneas suben a la vez. ¿Qué se puede afirmar?"

explicacion: |
  Correlación no es causalidad.
```

