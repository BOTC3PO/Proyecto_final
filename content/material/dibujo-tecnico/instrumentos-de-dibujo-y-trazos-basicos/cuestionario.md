# Dibujo técnico — Instrumentos de dibujo y trazos básicos (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — H y B

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "En la dureza de los lápices, la letra H indica una mina..."
tipo: mc
opciones_explicitas:
  - "Dura, que deja un trazo fino y claro"
  - "Blanda, que deja un trazo oscuro"
  - "Sin grafito"
respuesta: "Dura, que deja un trazo fino y claro"

explicacion: |
  La B indica una mina blanda.
```

### 2 — B

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La letra B en un lápiz indica una mina..."
tipo: mc
opciones_explicitas:
  - "Blanda, de trazo oscuro y grueso"
  - "Dura"
  - "De color azul"
respuesta: "Blanda, de trazo oscuro y grueso"

explicacion: |
  Viene de 'black'.
```

### 3 — Más dura

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "¿Qué lápiz es más duro?"
tipo: mc
opciones_explicitas:
  - "4H"
  - "2H"
  - "HB"
respuesta: "4H"

explicacion: |
  A mayor número con H, más dura la mina.
```

### 4 — Más blanda

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "¿Qué lápiz es más blando?"
tipo: mc
opciones_explicitas:
  - "4B"
  - "2B"
  - "HB"
respuesta: "4B"

explicacion: |
  A mayor número con B, más blanda la mina.
```

### 5 — Construcción

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Para las líneas finas de construcción se usan lápices..."
tipo: mc
opciones_explicitas:
  - "H o 2H"
  - "6B"
  - "De color"
respuesta: "H o 2H"

explicacion: |
  Dejan un trazo suave que se borra.
```

### 6 — Escuadras

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Las dos escuadras normalizadas son las de..."
tipo: mc
opciones_explicitas:
  - "45° y de 30°-60°"
  - "90° y 180°"
  - "10° y 20°"
respuesta: "45° y de 30°-60°"

explicacion: |
  Combinadas permiten ángulos de 15° en 15°.
```

### 7 — Ángulos combinados

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Combinando las dos escuadras se pueden trazar ángulos de..."
tipo: mc
opciones_explicitas:
  - "15°, 30°, 45°, 60°, 75° y 90°"
  - "Cualquier ángulo"
  - "Solo 90°"
respuesta: "15°, 30°, 45°, 60°, 75° y 90°"

explicacion: |
  Por ejemplo, 75° = 45° + 30°.
```

### 8 — Suma de escuadras

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  a: uno_de([45, 60, 30])
  b: uno_de([30, 45])

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Combinando una escuadra de {a}° y otra de {b}° se puede lograr un ángulo de ___°."

pasos:
  - "Sumar los ángulos"

explicacion: |
  Las escuadras se combinan por suma o resta de sus ángulos.
```

### 9 — Escalímetro

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El escalímetro es..."
tipo: mc
opciones_explicitas:
  - "Una regla con varias escalas para medir directamente a escala"
  - "Un tipo de compás"
  - "Un lápiz"
respuesta: "Una regla con varias escalas para medir directamente a escala"

explicacion: |
  Evita calcular a mano.
```

### 10 — Compás

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El compás se usa para..."
tipo: mc
opciones_explicitas:
  - "Trazar circunferencias y arcos, y transportar medidas"
  - "Medir ángulos"
  - "Borrar"
respuesta: "Trazar circunferencias y arcos, y transportar medidas"

explicacion: |
  Existen de punta seca, de lápiz y de precisión.
```

### 11 — Transportador

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El transportador sirve para..."
tipo: mc
opciones_explicitas:
  - "Medir y trazar ángulos"
  - "Medir longitudes"
  - "Trazar círculos"
respuesta: "Medir y trazar ángulos"

explicacion: |
  Se gradúa en grados.
```

### 12 — Regla T

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "La regla T o la regla paralela se usan para..."
tipo: mc
opciones_explicitas:
  - "Guiar el trazado de las horizontales"
  - "Medir el peso"
  - "Cortar papel"
respuesta: "Guiar el trazado de las horizontales"

explicacion: |
  Sobre ellas se apoyan las escuadras.
```

### 13 — Paralelas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Para trazar paralelas con las escuadras se..."
tipo: mc
opciones_explicitas:
  - "Apoya una escuadra en la regla y se desliza"
  - "Gira el papel al azar"
  - "Usa solo el compás"
respuesta: "Apoya una escuadra en la regla y se desliza"

explicacion: |
  Para perpendiculares se gira la escuadra 90°.
```

### 14 — Primero contorno

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: falso
tipo: vf

enunciado: "Conviene trazar primero el contorno definitivo y después las líneas de construcción."

explicacion: |
  Primero van las líneas finas de construcción; el contorno al final.
```

### 15 — Mano alzada

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Un croquis a mano alzada es..."
tipo: mc
opciones_explicitas:
  - "Un dibujo hecho sin instrumentos"
  - "Un plano normalizado"
  - "Una impresión"
respuesta: "Un dibujo hecho sin instrumentos"

explicacion: |
  Sirve para ideas rápidas o relevamientos.
```

### 16 — Para qué croquis

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Un croquis sirve especialmente para..."
tipo: mc
opciones_explicitas:
  - "Anotar ideas, relevar una pieza o comunicar un concepto"
  - "Fabricar en serie"
  - "Calcular tensiones"
respuesta: "Anotar ideas, relevar una pieza o comunicar un concepto"

explicacion: |
  No requiere la prolijidad de un plano.
```

### 17 — Papel cuadriculado

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "En un croquis, el papel cuadriculado ayuda a..."
tipo: mc
opciones_explicitas:
  - "Guiar las proporciones"
  - "Cambiar la escala"
  - "Reducir el tiempo de secado"
respuesta: "Guiar las proporciones"

explicacion: |
  Y a mantener las líneas rectas.
```

### 18 — Brazo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "avanzado"
  tags: ["dibujo"]

respuesta: verdadero
tipo: vf

enunciado: "Para trazar rectas a mano alzada conviene mover el brazo y no solo los dedos."

explicacion: |
  Da líneas más firmes y rectas.
```

### 19 — Giro del lápiz

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Girar el lápiz mientras se traza sirve para..."
tipo: mc
opciones_explicitas:
  - "Mantener un grosor uniforme"
  - "Gastar la mina"
  - "Hacer líneas intermitentes"
respuesta: "Mantener un grosor uniforme"

explicacion: |
  Se desgasta de manera pareja.
```

### 20 — Orden

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "basico"
  tags: ["dibujo"]

tipo: completar
enunciado: "El trabajo se hace de lo general a lo particular y de lo fino a lo ___."
respuestas_validas:
  - "grueso"

explicacion: |
  Las líneas definitivas son las más gruesas.
```

### 21 — Cuidado

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Mantener limpios los instrumentos y el papel evita..."
tipo: mc
opciones_explicitas:
  - "Manchas y errores"
  - "Que la regla se corte"
  - "Que baje la escala"
respuesta: "Manchas y errores"

explicacion: |
  Un buen hábito de trabajo.
```

### 22 — Hoy

```
metadata:
  materia: "dibujo-tecnico"
  tema: "instrumentos_de_dibujo_y_trazos_basicos"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Aunque hoy se dibuja con computadora, conocer los instrumentos clásicos sirve para..."
tipo: mc
opciones_explicitas:
  - "Entender qué se busca con cada trazo"
  - "Reemplazar el CAD"
  - "Evitar medir"
respuesta: "Entender qué se busca con cada trazo"

explicacion: |
  Los fundamentos son los mismos.
```
