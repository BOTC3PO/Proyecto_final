# Dibujo técnico — Rugosidad y acabado superficial (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Rugosidad

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La rugosidad es..."
tipo: mc
opciones_explicitas:
  - "El conjunto de irregularidades finas de una superficie"
  - "El color de la pieza"
  - "El peso de la pieza"
respuesta: "El conjunto de irregularidades finas de una superficie"

explicacion: |
  Dejadas por el proceso de fabricación.
```

### 2 — Origen

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La rugosidad proviene principalmente de..."
tipo: mc
opciones_explicitas:
  - "El proceso de fabricación"
  - "El color"
  - "La iluminación"
respuesta: "El proceso de fabricación"

explicacion: |
  Marcas de herramienta, abrasión, fundición.
```

### 3 — Por qué importa

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La rugosidad influye en..."
tipo: mc
opciones_explicitas:
  - "Rozamiento, desgaste, estanqueidad y fatiga"
  - "Solo el color"
  - "Solo el costo"
respuesta: "Rozamiento, desgaste, estanqueidad y fatiga"

explicacion: |
  Es una propiedad funcional.
```

### 4 — Estanqueidad

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Un asiento de válvula debe tener rugosidad..."
tipo: mc
opciones_explicitas:
  - "Lo bastante baja para sellar"
  - "Máxima"
  - "Indistinta"
respuesta: "Lo bastante baja para sellar"

explicacion: |
  La estanqueidad depende del acabado.
```

### 5 — Fatiga

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Las marcas profundas de una superficie pueden..."
tipo: mc
opciones_explicitas:
  - "Concentrar tensiones y originar fisuras"
  - "Aumentar la resistencia siempre"
  - "No afectar nada"
respuesta: "Concentrar tensiones y originar fisuras"

explicacion: |
  Por eso se pulen piezas sometidas a fatiga.
```

### 6 — Afinar siempre

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: falso
tipo: vf

enunciado: "Conviene siempre especificar la menor rugosidad posible."

explicacion: |
  Cada mejora cuesta más: se especifica la necesaria.
```

### 7 — Ra

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Ra significa..."
tipo: mc
opciones_explicitas:
  - "Rugosidad media aritmética"
  - "Radio de la arista"
  - "Rotación angular"
respuesta: "Rugosidad media aritmética"

explicacion: |
  Es el parámetro más usado.
```

### 8 — Unidad

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La rugosidad Ra se expresa en..."
tipo: mc
opciones_explicitas:
  - "Micrómetros (µm)"
  - "Metros"
  - "Kilogramos"
respuesta: "Micrómetros (µm)"

explicacion: |
  Un micrómetro es una milésima de milímetro.
```

### 9 — µm a mm

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  ra: uno_de([0.8, 1.6, 3.2, 6.3, 12.5])

respuesta: ra / 1000
tipo: input
tolerancia_abs: 0.0001

enunciado: "Una superficie tiene Ra = {ra} µm. ¿Cuántos milímetros son?"

pasos:
  - "1 µm = 0,001 mm"

explicacion: |
  Se divide por mil.
```

### 10 — mm a µm

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  mm: uno_de([0.0004, 0.0008, 0.0016, 0.0032])

respuesta: mm * 1000
tipo: input
tolerancia_abs: 0.01

enunciado: "Una rugosidad media de {mm} mm, ¿cuántos micrómetros son?"

pasos:
  - "1 mm = 1000 µm"

explicacion: |
  Se multiplica por mil.
```

### 11 — Menor Ra

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Un Ra menor significa una superficie..."
tipo: mc
opciones_explicitas:
  - "Más lisa"
  - "Más rugosa"
  - "Más pesada"
respuesta: "Más lisa"

explicacion: |
  La rugosidad es la altura media de las irregularidades.
```

### 12 — Cuál es más lisa

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "¿Qué superficie es más lisa?"
tipo: mc
opciones_explicitas:
  - "Ra 0,4 µm"
  - "Ra 3,2 µm"
  - "Ra 12,5 µm"
respuesta: "Ra 0,4 µm"

explicacion: |
  El menor valor indica mayor suavidad.
```

### 13 — Rz

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Rz describe..."
tipo: mc
opciones_explicitas:
  - "La altura promedio de crestas a valles"
  - "El peso de la pieza"
  - "El color"
respuesta: "La altura promedio de crestas a valles"

explicacion: |
  Complementa a Ra.
```

### 14 — Mismo Ra

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "avanzado"
  tags: ["dibujo"]

respuesta: falso
tipo: vf

enunciado: "Dos superficies con igual Ra siempre se comportan igual."

explicacion: |
  La forma de las irregularidades puede ser distinta.
```

### 15 — Proceso fino

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Para lograr acabados muy finos se usan procesos como..."
tipo: mc
opciones_explicitas:
  - "Rectificado, lapeado y pulido"
  - "Fundición en arena"
  - "Corte con soplete"
respuesta: "Rectificado, lapeado y pulido"

explicacion: |
  Son más lentos y más caros.
```

### 16 — Símbolo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El símbolo básico de rugosidad en un plano se parece a..."
tipo: mc
opciones_explicitas:
  - "Una 'V' a modo de visto"
  - "Un círculo"
  - "Una estrella"
respuesta: "Una 'V' a modo de visto"

explicacion: |
  Con el valor del parámetro cuando corresponde.
```

### 17 — Círculo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Un círculo dentro del símbolo de rugosidad indica que la superficie se obtiene..."
tipo: mc
opciones_explicitas:
  - "Sin arranque de material"
  - "Con arranque de material"
  - "Pintada"
respuesta: "Sin arranque de material"

explicacion: |
  Por ejemplo, fundición o forja.
```

### 18 — General

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Cuando la mayoría de las superficies tienen el mismo acabado..."
tipo: mc
opciones_explicitas:
  - "Se indica el valor general y se destacan las excepciones"
  - "Se repite en cada superficie"
  - "No se indica"
respuesta: "Se indica el valor general y se destacan las excepciones"

explicacion: |
  Evita recargar el plano.
```

### 19 — Rugosímetro

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El rugosímetro es un instrumento que..."
tipo: mc
opciones_explicitas:
  - "Recorre la superficie con un palpador y registra el perfil"
  - "Pesa la pieza"
  - "Mide la temperatura"
respuesta: "Recorre la superficie con un palpador y registra el perfil"

explicacion: |
  También hay métodos ópticos.
```

### 20 — Patrón

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Las muestras patrón de rugosidad sirven para..."
tipo: mc
opciones_explicitas:
  - "Comparar visual y táctilmente"
  - "Cortar"
  - "Pintar"
respuesta: "Comparar visual y táctilmente"

explicacion: |
  Son referencias de rugosidad conocida.
```

### 21 — Rozamiento

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: verdadero
tipo: vf

enunciado: "Dos superficies que deslizan necesitan un acabado controlado."

explicacion: |
  Influye en rozamiento y desgaste.
```

### 22 — Adherencia

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Para que una pintura se adhiera bien, la superficie puede requerir..."
tipo: mc
opciones_explicitas:
  - "Algo de rugosidad"
  - "Pulido espejo"
  - "Aceite"
respuesta: "Algo de rugosidad"

explicacion: |
  No siempre lo más liso es lo mejor.
```

### 23 — Textura

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

tipo: completar
enunciado: "La suma de rugosidad, ondulación y errores de forma se llama textura ___."
respuestas_validas:
  - "superficial"

explicacion: |
  Descripción completa del acabado.
```
