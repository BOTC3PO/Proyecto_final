# Diseño gráfico — Edición de imagen (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Mapa de bits

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["raster"]

tipo: mc
opciones_explicitas: ["Una cuadrícula de píxeles, cada uno con un color", "Un dibujo hecho con fórmulas", "Un texto", "Un sonido"]
respuesta: "Una cuadrícula de píxeles, cada uno con un color"

enunciado: "¿Qué es una imagen de mapa de bits?"

explicacion: |
  También se llama raster.
```

### 2 — Pixelada

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["resolucion"]

tipo: mc
opciones_explicitas: ["Se ve pixelada", "Mejora", "Se vuelve vectorial", "No cambia"]
respuesta: "Se ve pixelada"

enunciado: "¿Qué le pasa a una imagen de mapa de bits al ampliarla mucho?"

explicacion: |
  Los píxeles se agrandan.
```

### 3 — Impresión

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["ppp"]

tipo: mc
opciones_explicitas: ["Unos 300 ppp al tamaño final", "10 ppp", "30 ppp", "3 ppp"]
respuesta: "Unos 300 ppp al tamaño final"

enunciado: "¿Qué densidad se usa habitualmente para imprimir?"

explicacion: |
  Para pantalla alcanza con menos.
```

### 4 — RGB

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["color"]

tipo: mc
opciones_explicitas: ["RGB", "CMYK", "Escala de grises", "Indexado"]
respuesta: "RGB"

enunciado: "¿Qué modo de color se usa para pantallas?"

explicacion: |
  Rojo, verde y azul.
```

### 5 — CMYK

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["color"]

tipo: mc
opciones_explicitas: ["CMYK", "RGB", "HSV", "Binario"]
respuesta: "CMYK"

enunciado: "¿Qué modo de color se usa para impresión?"

explicacion: |
  Cian, magenta, amarillo y negro.
```

### 6 — JPEG

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["jpeg"]

tipo: mc
opciones_explicitas: ["Compresión con pérdida, sin transparencia", "Sin pérdida", "Con transparencia siempre", "Solo para dibujos"]
respuesta: "Compresión con pérdida, sin transparencia"

enunciado: "¿Qué característica tiene el formato JPEG?"

explicacion: |
  Se usa para fotos.
```

### 7 — PNG

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["png"]

tipo: mc
opciones_explicitas: ["Sin pérdida y con transparencia", "Es siempre más liviano", "Tiene animación compleja", "Es vectorial"]
respuesta: "Sin pérdida y con transparencia"

enunciado: "¿Qué ventaja tiene PNG?"

explicacion: |
  Ideal para logotipos y capturas.
```

### 8 — Original

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["original"]

tipo: mc
opciones_explicitas: ["Porque cada guardado puede perder calidad", "Por costumbre", "Porque es obligatorio", "Porque pesa menos"]
respuesta: "Porque cada guardado puede perder calidad"

enunciado: "¿Por qué se conserva el original al guardar como JPEG?"

explicacion: |
  Se exporta una copia.
```

### 9 — Capas

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["capas"]

tipo: mc
opciones_explicitas: ["Para tener cada elemento en una hoja separada y editarlo sin afectar el resto", "Para comprimir", "Para imprimir", "Para cifrar"]
respuesta: "Para tener cada elemento en una hoja separada y editarlo sin afectar el resto"

enunciado: "¿Para qué sirven las capas?"

explicacion: |
  Permiten cambiar sin dañar.
```

### 10 — No destructiva

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["no destructiva"]

tipo: mc
opciones_explicitas: ["Editar sin dañar el original, pudiendo volver atrás", "Borrar el original", "Guardar solo en JPEG", "Trabajar sin capas"]
respuesta: "Editar sin dañar el original, pudiendo volver atrás"

enunciado: "¿Qué es la edición no destructiva?"

explicacion: |
  Se usan capas, ajustes y máscaras.
```

### 11 — Ajuste

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["ajuste"]

tipo: mc
opciones_explicitas: ["Cambia el color sin alterar los píxeles y se puede editar después", "Es más rápida de imprimir", "Reduce el peso", "Cambia el formato"]
respuesta: "Cambia el color sin alterar los píxeles y se puede editar después"

enunciado: "¿Qué ventaja tiene una capa de ajuste?"

explicacion: |
  Es reversible.
```

### 12 — Máscara

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "intermedio"
  tags: ["mascara"]

tipo: mc
opciones_explicitas: ["Oculta esa parte de la capa", "La muestra", "La borra para siempre", "La duplica"]
respuesta: "Oculta esa parte de la capa"

enunciado: "En una máscara de capa, ¿qué hace el negro?"

explicacion: |
  El blanco la muestra.
```

### 13 — Smart

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "intermedio"
  tags: ["smart"]

tipo: mc
opciones_explicitas: ["Para escalar o filtrar sin perder el original", "Para imprimir", "Para cifrar", "Para animar"]
respuesta: "Para escalar o filtrar sin perder el original"

enunciado: "¿Para qué sirven los objetos inteligentes?"

explicacion: |
  Conservan los datos originales.
```

### 14 — Proporción

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["proporcion"]

tipo: mc
opciones_explicitas: ["Shift", "Alt", "Tab", "Esc"]
respuesta: "Shift"

enunciado: "¿Qué tecla suele mantener la proporción al escalar?"

explicacion: |
  Evita deformar.
```

### 15 — Balance

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["balance"]

tipo: mc
opciones_explicitas: ["Las dominantes de color para que el blanco se vea blanco", "El tamaño", "El ruido", "El formato"]
respuesta: "Las dominantes de color para que el blanco se vea blanco"

enunciado: "¿Qué corrige el balance de blancos?"

explicacion: |
  Evita imágenes amarillentas o azuladas.
```

### 16 — Histograma

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "intermedio"
  tags: ["histograma"]

tipo: mc
opciones_explicitas: ["La distribución de luces y sombras", "La resolución", "El peso", "Los colores del texto"]
respuesta: "La distribución de luces y sombras"

enunciado: "¿Qué muestra el histograma?"

explicacion: |
  Sombras a la izquierda, luces a la derecha.
```

### 17 — Quemadas

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "intermedio"
  tags: ["histograma"]

tipo: mc
opciones_explicitas: ["Luces quemadas (pérdida de detalle en las partes claras)", "Imagen perfecta", "Sombras tapadas", "Resolución alta"]
respuesta: "Luces quemadas (pérdida de detalle en las partes claras)"

enunciado: "¿Qué indica un histograma pegado al extremo derecho?"

explicacion: |
  El detalle perdido no se recupera.
```

### 18 — Nitidez

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "intermedio"
  tags: ["nitidez"]

tipo: mc
opciones_explicitas: ["Al final, con moderación", "Al principio y mucho", "Nunca", "Antes de recortar"]
respuesta: "Al final, con moderación"

enunciado: "¿Cuándo conviene aplicar la nitidez?"

explicacion: |
  Un exceso genera halos.
```

### 19 — Derechos

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["derechos"]

tipo: mc
opciones_explicitas: ["Propias, con licencia o con permiso", "Cualquiera de internet", "Las que se ven bien", "Las de buscadores"]
respuesta: "Propias, con licencia o con permiso"

enunciado: "¿Qué imágenes se pueden usar?"

explicacion: |
  El derecho de autor protege las imágenes.
```

### 20 — Ética

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "basico"
  tags: ["etica"]

tipo: mc
opciones_explicitas: ["Engañar o editar sin su consentimiento", "Recortarlas", "Corregir el color", "Guardarlas"]
respuesta: "Engañar o editar sin su consentimiento"

enunciado: "¿Qué no se debe hacer al manipular fotos de personas?"

explicacion: |
  Importa el respeto y la veracidad.
```

### 21 — Resolución

```
metadata:
  materia: "diseno-grafico"
  tema: "edicion_de_imagen"
  nivel: "intermedio"
  tags: ["resolucion"]

tipo: mc
opciones_explicitas: ["Trabajar con la mayor posible y reducir al final", "Reducir al principio", "Ampliar al final", "Ignorarla"]
respuesta: "Trabajar con la mayor posible y reducir al final"

enunciado: "¿Qué conviene hacer con la resolución al trabajar?"

explicacion: |
  Reducir pierde menos que ampliar.
```

