# Diseño gráfico — Diagnóstico de diseño por casos (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta.

---
### 1 — Metodo

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Describir el síntoma, ubicar la etapa, comprobar y corregir", "Cambiar todo al azar", "Esperar a que se arregle", "Imprimir sin revisar"]
respuesta: "Describir el síntoma, ubicar la etapa, comprobar y corregir"

enunciado: "¿Cuál es el método de diagnóstico de un problema de diseño?"

explicacion: |
  Se corrige donde nace el problema.
```

### 2 — Metodo

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: vf
respuesta: verdadero

enunciado: "Muchos defectos se detectan mirando la pieza en condiciones reales de uso."

explicacion: |
  No solo en el entorno cómodo del diseñador.
```

### 3 — Logo

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "basico"
  tags: ["logo"]

tipo: mc
opciones_explicitas: ["Demasiados detalles o líneas muy finas", "El papel es muy blanco", "Tiene pocos colores", "Es demasiado simple"]
respuesta: "Demasiados detalles o líneas muy finas"

enunciado: "El logo se ve mal al reducirlo. ¿Cuál es una causa probable?"

explicacion: |
  No resiste la reducción.
```

### 4 — Logo

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "intermedio"
  tags: ["logo"]

tipo: mc
opciones_explicitas: ["Se diseñó como imagen de píxeles y no como vector", "Es demasiado grande", "Tiene mucho vector", "Está en CMYK"]
respuesta: "Se diseñó como imagen de píxeles y no como vector"

enunciado: "Un logo que se pixela al agrandarlo probablemente..."

explicacion: |
  Debe entregarse en formato vectorial.
```

### 5 — Logo

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "basico"
  tags: ["logo"]

tipo: mc
opciones_explicitas: ["Verlo al tamaño mínimo y en blanco y negro", "Solo en pantalla grande", "Solo en color", "No se verifica"]
respuesta: "Verlo al tamaño mínimo y en blanco y negro"

enunciado: "¿Cómo se verifica que un logo escala bien?"

explicacion: |
  Si falla, se simplifica.
```

### 6 — Logo

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "intermedio"
  tags: ["logo"]

tipo: vf
respuesta: verdadero

enunciado: "Una solución para el logo pequeño es preparar una versión reducida."

explicacion: |
  Sin el texto secundario.
```

### 7 — Legibilidad

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "basico"
  tags: ["legibilidad"]

tipo: mc
opciones_explicitas: ["Contraste insuficiente entre texto y fondo", "Demasiado espacio en blanco", "Un tamaño exageradamente grande", "Un buen interlineado"]
respuesta: "Contraste insuficiente entre texto y fondo"

enunciado: "¿Qué puede causar que un texto no se lea?"

explicacion: |
  Es la causa más frecuente.
```

### 8 — Legibilidad

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "intermedio"
  tags: ["legibilidad"]

tipo: mc
opciones_explicitas: ["Con una herramienta que calcula la razón de contraste", "A ojo solamente", "Con una regla", "Con un termómetro"]
respuesta: "Con una herramienta que calcula la razón de contraste"

enunciado: "¿Cómo se mide el contraste de forma objetiva?"

explicacion: |
  Se compara con los mínimos de accesibilidad.
```

### 9 — Legibilidad

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "intermedio"
  tags: ["legibilidad"]

tipo: mc
opciones_explicitas: ["Oscurecer o aplicar una capa sobre la imagen", "Reducir el tamaño del texto", "Cambiar a una letra decorativa", "Quitar el contraste"]
respuesta: "Oscurecer o aplicar una capa sobre la imagen"

enunciado: "Texto sobre una foto con zonas claras y oscuras. ¿Qué ayuda?"

explicacion: |
  Se sostiene el texto con un fondo.
```

### 10 — Legibilidad

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "basico"
  tags: ["legibilidad"]

tipo: vf
respuesta: verdadero

enunciado: "Probar la pieza al tamaño real y a la distancia de uso ayuda a detectar problemas de lectura."

explicacion: |
  El tamaño real revela lo que la pantalla esconde.
```

### 11 — Legibilidad

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "intermedio"
  tags: ["legibilidad"]

tipo: completar
enunciado: "Una tipografía ___ no es adecuada para un texto largo."
respuestas_validas:
  - "decorativa"

explicacion: |
  Cansa la lectura.
```

### 12 — Color

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "basico"
  tags: ["color"]

tipo: mc
opciones_explicitas: ["Conversión de RGB a CMYK sin revisión", "Demasiada tinta negra", "Un logotipo", "Un margen amplio"]
respuesta: "Conversión de RGB a CMYK sin revisión"

enunciado: "Los colores impresos salen distintos a los de pantalla. ¿Cuál es una causa?"

explicacion: |
  Algunos tonos vivos no se pueden imprimir.
```

### 13 — Color

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "intermedio"
  tags: ["color"]

tipo: mc
opciones_explicitas: ["Una tinta plana", "Otro tamaño de papel", "Más margen", "Otra tipografía"]
respuesta: "Una tinta plana"

enunciado: "Un color de marca que debe ser exacto quizá requiera..."

explicacion: |
  Por ejemplo, un color Pantone.
```

### 14 — Color

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "basico"
  tags: ["color"]

tipo: mc
opciones_explicitas: ["Una prueba de color", "Más sangrado", "Otro logo", "Un video"]
respuesta: "Una prueba de color"

enunciado: "¿Qué conviene pedir antes de imprimir un tiraje grande?"

explicacion: |
  Evita sorpresas en toda la tirada.
```

### 15 — Color

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "intermedio"
  tags: ["color"]

tipo: vf
respuesta: verdadero

enunciado: "Registrar los valores de color de marca en el manual evita diferencias entre piezas."

explicacion: |
  Todos usan los mismos valores.
```

### 16 — Impresion

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "basico"
  tags: ["impresion"]

tipo: mc
opciones_explicitas: ["Falta de sangrado", "Exceso de sangrado", "Demasiada resolución", "Un margen de seguridad grande"]
respuesta: "Falta de sangrado"

enunciado: "Aparece un filo blanco en el borde de la pieza impresa. ¿Cuál es la causa?"

explicacion: |
  El refilado deja ver el papel.
```

### 17 — Impresion

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "intermedio"
  tags: ["impresion"]

tipo: mc
opciones_explicitas: ["Su resolución efectiva al tamaño final", "El nombre del archivo", "El color del fondo", "La licencia de la fuente"]
respuesta: "Su resolución efectiva al tamaño final"

enunciado: "Una imagen impresa se ve borrosa. ¿Qué se revisa?"

explicacion: |
  Debe rondar los 300 ppp.
```

### 18 — Impresion

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "intermedio"
  tags: ["impresion"]

tipo: mc
opciones_explicitas: ["Estaba fuera del margen de seguridad", "Tenía poco contraste", "Estaba en CMYK", "Tenía demasiado sangrado"]
respuesta: "Estaba fuera del margen de seguridad"

enunciado: "Un texto quedó cortado en la impresión. ¿Qué pasó probablemente?"

explicacion: |
  Se mueve hacia adentro.
```

### 19 — Impresion

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "basico"
  tags: ["impresion"]

tipo: vf
respuesta: verdadero

enunciado: "Una lista de control (preflight) previa ayuda a evitar errores de impresión."

explicacion: |
  Es una verificación de minutos.
```

### 20 — Sistema

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "basico"
  tags: ["sistema"]

tipo: mc
opciones_explicitas: ["Un sistema de diseño con componentes y tokens", "Más colores", "Más fuentes", "Más efectos"]
respuesta: "Un sistema de diseño con componentes y tokens"

enunciado: "Las pantallas de una app tienen botones con tamaños y colores ligeramente distintos. ¿Qué falta?"

explicacion: |
  Cada persona diseña desde cero.
```

### 21 — Sistema

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "intermedio"
  tags: ["sistema"]

tipo: mc
opciones_explicitas: ["Listando y contando las variantes de botón y de color que existen", "Mirando solo una pantalla", "Preguntando el color favorito", "Imprimiendo todo"]
respuesta: "Listando y contando las variantes de botón y de color que existen"

enunciado: "¿Cómo se verifica la falta de sistema?"

explicacion: |
  Se ve la inconsistencia con datos.
```

### 22 — Sistema

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "intermedio"
  tags: ["sistema"]

tipo: mc
opciones_explicitas: ["Tokens, componentes con variantes y documentación de uso", "Retoques de gusto en cada pantalla", "Agregar más efectos", "Cambiar el logo"]
respuesta: "Tokens, componentes con variantes y documentación de uso"

enunciado: "¿Cuál es la solución a la desprolijidad sistemática?"

explicacion: |
  Se resuelve con criterios y sistemas.
```

### 23 — Cierre

```
metadata:
  materia: "diseno_grafico"
  tema: "diagnostico_diseno_por_casos"
  nivel: "intermedio"
  tags: ["cierre"]

tipo: mc
opciones_explicitas: ["Los problemas de diseño se resuelven con criterios, mediciones y sistemas", "Todo es cuestión de gusto", "Nada se puede medir", "La técnica no importa"]
respuesta: "Los problemas de diseño se resuelven con criterios, mediciones y sistemas"

enunciado: "¿Qué idea cierra la ruta de diseño gráfico?"

explicacion: |
  Se apoya en lo visto en todos los temas.
```
