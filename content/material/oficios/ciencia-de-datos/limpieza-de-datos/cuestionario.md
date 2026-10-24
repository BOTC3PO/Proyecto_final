# Ciencia de datos — Limpieza de datos (cuestionario, 25 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Por qué

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Porque los datos reales llegan con errores y un análisis sobre datos sucios da resultados falsos", "Por estética", "Por costumbre", "Para hacerlos más grandes"]
respuesta: "Porque los datos reales llegan con errores y un análisis sobre datos sucios da resultados falsos"

enunciado: "¿Por qué se limpian los datos?"

explicacion: |
  Basura entra, basura sale.
```

### 2 — Original

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["original"]

tipo: mc
opciones_explicitas: ["Modificarlo", "Leerlo", "Copiarlo", "Guardarlo"]
respuesta: "Modificarlo"

enunciado: "¿Qué no se hace nunca con el archivo original?"

explicacion: |
  Se trabaja sobre una copia.
```

### 3 — Script

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["script"]

tipo: mc
opciones_explicitas: ["Para que sea repetible y quede documentado", "Porque es más largo", "Porque es obligatorio", "Porque no se equivoca nunca"]
respuesta: "Para que sea repetible y quede documentado"

enunciado: "¿Por qué conviene limpiar con un script y no a mano?"

explicacion: |
  Se puede volver a ejecutar.
```

### 4 — Conocer

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["conocer"]

tipo: mc
opciones_explicitas: ["Conocer los datos: filas, columnas, tipos y vacíos", "Borrar datos", "Ordenar al azar", "Cambiar la fuente"]
respuesta: "Conocer los datos: filas, columnas, tipos y vacíos"

enunciado: "¿Qué se hace antes de limpiar?"

explicacion: |
  Se usa un resumen.
```

### 5 — Diccionario

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "intermedio"
  tags: ["diccionario"]

tipo: mc
opciones_explicitas: ["Un documento que explica el significado de cada columna", "Un diccionario de palabras", "Un gráfico", "Una copia"]
respuesta: "Un documento que explica el significado de cada columna"

enunciado: "¿Qué es un diccionario de datos?"

explicacion: |
  Incluye fuente y fecha.
```

### 6 — Faltantes

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["faltantes"]

tipo: mc
opciones_explicitas: ["Una celda sin dato", "Un dato repetido", "Un número grande", "Un texto largo"]
respuesta: "Una celda sin dato"

enunciado: "¿Qué es un valor faltante?"

explicacion: |
  Puede aparecer como vacío, NA o -.
```

### 7 — Centinela

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "intermedio"
  tags: ["centinela"]

tipo: mc
opciones_explicitas: ["Un valor centinela, que hay que tratar como faltante", "Un número real", "Un error de impresión", "Un promedio"]
respuesta: "Un valor centinela, que hay que tratar como faltante"

enunciado: "¿Qué es un \"999\" usado para indicar que no hay dato?"

explicacion: |
  Si se promedia, distorsiona.
```

### 8 — Cero

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["cero"]

tipo: mc
opciones_explicitas: ["No: es un valor real", "Sí", "A veces siempre", "Siempre"]
respuesta: "No: es un valor real"

enunciado: "¿Es el cero un valor faltante?"

explicacion: |
  Hay que distinguirlos.
```

### 9 — Por qué faltan

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "intermedio"
  tags: ["sesgo"]

tipo: mc
opciones_explicitas: ["Porque si no faltan al azar, eliminarlos o completarlos sesga el resultado", "Por curiosidad", "Para ahorrar tiempo", "No importa"]
respuesta: "Porque si no faltan al azar, eliminarlos o completarlos sesga el resultado"

enunciado: "¿Por qué importa saber por qué faltan los datos?"

explicacion: |
  Por ejemplo, ingresos altos que no responden.
```

### 10 — Mediana

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "intermedio"
  tags: ["imputar"]

tipo: mc
opciones_explicitas: ["La mediana", "La media", "El máximo", "El mínimo"]
respuesta: "La mediana"

enunciado: "¿Qué valor suele ser preferible para imputar, si hay valores extremos?"

explicacion: |
  La media se distorsiona.
```

### 11 — Duplicados

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["duplicados"]

tipo: mc
opciones_explicitas: ["Una fila repetida que representa lo mismo", "Una fila vacía", "Una fila nueva", "Un error de formato"]
respuesta: "Una fila repetida que representa lo mismo"

enunciado: "¿Qué es un duplicado?"

explicacion: |
  Se identifica con una clave.
```

### 12 — Parcial

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "intermedio"
  tags: ["duplicados"]

tipo: mc
opciones_explicitas: ["Normalizando antes de comparar", "Comparando tal cual", "Ignorándolos", "Borrando todo"]
respuesta: "Normalizando antes de comparar"

enunciado: "¿Cómo se detecta un duplicado parcial, como `Ana Pérez` y `ana perez`?"

explicacion: |
  Se unifican mayúsculas, espacios y acentos.
```

### 13 — Clave

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["clave"]

tipo: mc
opciones_explicitas: ["Una columna o combinación que identifica una fila de forma única", "Una contraseña", "Un tipo de gráfico", "Un promedio"]
respuesta: "Una columna o combinación que identifica una fila de forma única"

enunciado: "¿Qué es una clave?"

explicacion: |
  Por ejemplo, el DNI.
```

### 14 — Tipo

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["Convertirlo al tipo correcto", "Dejarlo", "Borrarlo", "Sumarlo como texto"]
respuesta: "Convertirlo al tipo correcto"

enunciado: "`\"1.250\"` guardado como texto en una columna numérica. ¿Qué se hace?"

explicacion: |
  Cuidado con separadores de miles y decimales.
```

### 15 — Fechas

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["fechas"]

tipo: mc
opciones_explicitas: ["ISO 8601: 2026-10-14", "14/10/26", "Oct 14", "14-oct"]
respuesta: "ISO 8601: 2026-10-14"

enunciado: "¿Qué formato de fecha conviene para unificar?"

explicacion: |
  No es ambiguo y se ordena bien.
```

### 16 — Texto

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["texto"]

tipo: mc
opciones_explicitas: ["Normalizar mayúsculas, espacios y sinónimos", "Dejarlos", "Contarlos como distintos", "Borrarlos"]
respuesta: "Normalizar mayúsculas, espacios y sinónimos"

enunciado: "¿Qué se hace con `Buenos Aires`, `bs as` y `BUENOS AIRES `?"

explicacion: |
  Si no, se cuentan como categorías distintas.
```

### 17 — Unidades

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["unidades"]

tipo: mc
opciones_explicitas: ["Convertir todo a una misma unidad", "Sumarlos", "Ignorarlos", "Dejarlos"]
respuesta: "Convertir todo a una misma unidad"

enunciado: "¿Qué se hace con metros y centímetros mezclados?"

explicacion: |
  Una unidad mezclada produce errores.
```

### 18 — Imposibles

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["imposibles"]

tipo: mc
opciones_explicitas: ["Corregir si se puede o marcarla como faltante", "Dejarla", "Convertirla en positivo siempre", "Duplicarla"]
respuesta: "Corregir si se puede o marcarla como faltante"

enunciado: "¿Qué se hace con una edad de −5?"

explicacion: |
  Es un valor imposible.
```

### 19 — Atípicos

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["atipicos"]

tipo: mc
opciones_explicitas: ["Investigar si es un error o un caso real", "Borrarlo siempre", "Dejarlo siempre", "Multiplicarlo"]
respuesta: "Investigar si es un error o un caso real"

enunciado: "¿Qué se hace con un valor atípico?"

explicacion: |
  No se decide sin entenderlo.
```

### 20 — Validar

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["validar"]

tipo: mc
opciones_explicitas: ["Rangos, categorías, consistencia entre columnas y totales", "El color", "El tamaño de letra", "El nombre del archivo"]
respuesta: "Rangos, categorías, consistencia entre columnas y totales"

enunciado: "¿Qué se valida tras limpiar?"

explicacion: |
  Por ejemplo, fecha de egreso posterior a la de ingreso.
```

### 21 — Filas

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["documentar"]

tipo: mc
opciones_explicitas: ["Explicar por qué cambió la cantidad", "Ocultarlo", "Ignorarlo", "Cambiar la fuente"]
respuesta: "Explicar por qué cambió la cantidad"

enunciado: "Después de limpiar hay menos filas. ¿Qué conviene?"

explicacion: |
  Se documenta lo que se eliminó.
```

### 22 — Herramientas

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["herramientas"]

tipo: mc
opciones_explicitas: ["Python con pandas o R", "Una calculadora", "Lápiz y papel", "Un procesador de texto"]
respuesta: "Python con pandas o R"

enunciado: "¿Qué herramienta es adecuada para procesos de limpieza repetibles y de gran volumen?"

explicacion: |
  Se pueden volver a ejecutar.
```

### 23 — Pandas

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "intermedio"
  tags: ["pandas"]

tipo: mc
opciones_explicitas: ["Elimina las filas duplicadas", "Duplica filas", "Ordena", "Suma"]
respuesta: "Elimina las filas duplicadas"

enunciado: "¿Qué hace `df.drop_duplicates()`?"

explicacion: |
  Es una operación de pandas.
```

### 24 — Datos personales

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["privacidad"]

tipo: mc
opciones_explicitas: ["Pedir solo lo necesario, protegerlos y anonimizarlos cuando sea posible", "Publicarlos", "Compartirlos", "Ignorarlos"]
respuesta: "Pedir solo lo necesario, protegerlos y anonimizarlos cuando sea posible"

enunciado: "¿Qué conviene hacer con los datos personales?"

explicacion: |
  En Argentina rige la Ley 25.326.
```

### 25 — No inventar

```
metadata:
  materia: "ciencia-de-datos"
  tema: "limpieza_de_datos"
  nivel: "basico"
  tags: ["etica"]

tipo: mc
opciones_explicitas: ["Inventar datos", "Corregir errores evidentes", "Documentar", "Normalizar"]
respuesta: "Inventar datos"

enunciado: "¿Qué no se debe hacer al limpiar datos?"

explicacion: |
  Una imputación se informa y se justifica.
```

