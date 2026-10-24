# Oficios — Abonos y fertilizantes (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Siglas NPK

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "basico"
  tags: ["tema"]

enunciado: "¿Qué significa NPK en un fertilizante?"
tipo: mc
opciones_explicitas:
  - "Nitrógeno, fósforo y potasio"
  - "Nutrientes para kilos"
  - "Nitrato, perlita y carbón"
respuesta: "Nitrógeno, fósforo y potasio"

explicacion: |
  Los tres números son los porcentajes de cada nutriente.
```

### 2 — Nitrógeno

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "basico"
  tags: ["tema"]

enunciado: "¿Qué favorece principalmente el nitrógeno?"
tipo: mc
opciones_explicitas:
  - "El crecimiento de hojas y tallos"
  - "Solo la floración"
  - "La resistencia a heladas únicamente"
respuesta: "El crecimiento de hojas y tallos"

explicacion: |
  Por eso interesa para el césped.
```

### 3 — Fósforo

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "intermedio"
  tags: ["tema"]

enunciado: "¿Qué favorece el fósforo?"
tipo: mc
opciones_explicitas:
  - "Raíces y floración"
  - "Solo el verde de las hojas"
  - "Solo la altura"
respuesta: "Raíces y floración"

explicacion: |
  Es clave al plantar y para floración.
```

### 4 — Potasio

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "intermedio"
  tags: ["tema"]

enunciado: "¿Qué aporta el potasio?"
tipo: mc
opciones_explicitas:
  - "Resistencia general y calidad de flores y frutos"
  - "Reduce el pH"
  - "Solo humedad"
respuesta: "Resistencia general y calidad de flores y frutos"

explicacion: |
  Mejora la tolerancia al estrés.
```

### 5 — Estiércol

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "intermedio"
  tags: ["tema"]

enunciado: "¿Cómo debe estar el estiércol que se usa de abono?"
tipo: mc
opciones_explicitas:
  - "Maduro o compostado"
  - "Fresco"
  - "Mojado con agua"
respuesta: "Maduro o compostado"

explicacion: |
  El fresco quema las raíces y puede traer patógenos.
```

### 6 — Abono orgánico

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "basico"
  tags: ["tema"]

respuesta: verdadero
tipo: vf

enunciado: "Los abonos orgánicos liberan los nutrientes de forma lenta y mejoran la estructura del suelo."

explicacion: |
  Su composición es variable.
```

### 7 — Liberación lenta

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "intermedio"
  tags: ["tema"]

enunciado: "¿Qué ventaja tiene un fertilizante de liberación lenta?"
tipo: mc
opciones_explicitas:
  - "Cede nutrientes durante semanas o meses"
  - "Actúa en minutos"
  - "No contiene nitrógeno"
respuesta: "Cede nutrientes durante semanas o meses"

explicacion: |
  Se pierde menos por lavado.
```

### 8 — Más es mejor

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "basico"
  tags: ["tema"]

respuesta: falso
tipo: vf

enunciado: "Aplicar más fertilizante que el indicado en el envase da mejores resultados."

explicacion: |
  El exceso quema raíces y hojas.
```

### 9 — Síntoma de exceso

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "intermedio"
  tags: ["tema"]

enunciado: "¿Qué síntoma puede dar el exceso de fertilizante?"
tipo: mc
opciones_explicitas:
  - "Bordes de hojas secos y marrones"
  - "Más flores sanas"
  - "Raíces más fuertes"
respuesta: "Bordes de hojas secos y marrones"

explicacion: |
  Es una quemadura por exceso de sales.
```

### 10 — Época

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "basico"
  tags: ["tema"]

enunciado: "¿Cuándo conviene abonar?"
tipo: mc
opciones_explicitas:
  - "En crecimiento activo"
  - "En reposo invernal"
  - "Cuando la planta está seca y estresada"
respuesta: "En crecimiento activo"

explicacion: |
  En reposo no se abona.
```

### 11 — Riego posterior

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "intermedio"
  tags: ["tema"]

respuesta: verdadero
tipo: vf

enunciado: "Después de aplicar un fertilizante granulado conviene regar."

explicacion: |
  Así ingresa al suelo y no quema.
```

### 12 — Dosis de producto

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  nut: random(3, 8)
  pct: uno_de([10, 20, 25, 40])

respuesta: redondear(nut * 100 / pct, 1)
tipo: input
tolerancia_abs: 0.2
unidad: "g"

enunciado: "Querés aplicar {nut} gramos de nitrógeno por metro cuadrado con un fertilizante que tiene {pct}% de nitrógeno. ¿Cuántos gramos de producto necesitás por metro cuadrado?"

pasos:
  - "Producto = nutriente / (porcentaje / 100)"

explicacion: |
  Se divide el nutriente por la proporción de nitrógeno del producto.
```

### 13 — Producto para una superficie

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  sup: random(20, 120)
  nut: random(2, 6)
  pct: uno_de([10, 20, 25])

respuesta: redondear(sup * nut * 100 / pct, 0)
tipo: input
tolerancia_abs: 1
unidad: "g"

enunciado: "Tenés {sup} m2 de césped y querés aplicar {nut} g de nitrógeno por m2 con un fertilizante al {pct}% de nitrógeno. ¿Cuántos gramos de producto necesitás en total?"

pasos:
  - "Gramos de nitrógeno totales = superficie × dosis"
  - "Producto = nitrógeno total / (porcentaje / 100)"

explicacion: |
  Se calcula el nutriente total y luego el producto.
```

### 14 — Humus

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "basico"
  tags: ["tema"]

enunciado: "¿Qué es el humus de lombriz?"
tipo: mc
opciones_explicitas:
  - "Un abono orgánico de acción suave y muy rico"
  - "Un fertilizante sintético"
  - "Una enmienda de cal"
respuesta: "Un abono orgánico de acción suave y muy rico"

explicacion: |
  Se obtiene de la transformación de residuos por lombrices.
```

### 15 — Efecto ambiental

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "avanzado"
  tags: ["tema"]

enunciado: "¿Qué problema ambiental puede provocar el exceso de fertilizante lavado?"
tipo: mc
opciones_explicitas:
  - "Proliferación de algas en cursos de agua"
  - "Mayor lluvia"
  - "Menos insectos"
respuesta: "Proliferación de algas en cursos de agua"

explicacion: |
  Los nutrientes que se lavan contaminan el agua.
```

### 16 — Exceso de nitrógeno

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "avanzado"
  tags: ["tema"]

enunciado: "¿Qué suele provocar un exceso de nitrógeno en una planta ornamental?"
tipo: mc
opciones_explicitas:
  - "Mucha hoja y pocas flores"
  - "Más flores"
  - "Raíces más profundas"
respuesta: "Mucha hoja y pocas flores"

explicacion: |
  Además deja la planta blanda y atractiva para plagas.
```

### 17 — Planta enferma

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "intermedio"
  tags: ["tema"]

respuesta: falso
tipo: vf

enunciado: "Una planta estresada por sequía debe abonarse enseguida."

explicacion: |
  Primero se corrige la causa del estrés.
```

### 18 — Guardado

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "basico"
  tags: ["tema"]

enunciado: "¿Cómo se guardan los fertilizantes?"
tipo: mc
opciones_explicitas:
  - "En su envase original, secos y fuera del alcance de niños y mascotas"
  - "Sueltos en un balde"
  - "En botellas de gaseosa"
respuesta: "En su envase original, secos y fuera del alcance de niños y mascotas"

explicacion: |
  Evita intoxicaciones.
```

### 19 — Rápida

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "intermedio"
  tags: ["tema"]

enunciado: "¿Qué desventaja tienen los fertilizantes de liberación rápida?"
tipo: mc
opciones_explicitas:
  - "Se pierden fácilmente por lavado"
  - "No actúan nunca"
  - "Siempre contaminan el compost"
respuesta: "Se pierden fácilmente por lavado"

explicacion: |
  Alimentan rápido pero poco tiempo.
```

### 20 — Compost

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "basico"
  tags: ["tema"]

tipo: completar
enunciado: "El ___ resulta de la descomposición controlada de restos orgánicos."
respuestas_validas:
  - "compost"

explicacion: |
  Es un excelente mejorador del suelo.
```

### 21 — Foliar

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "avanzado"
  tags: ["tema"]

respuesta: verdadero
tipo: vf

enunciado: "Los fertilizantes líquidos pueden aplicarse en forma foliar."

explicacion: |
  Se pulverizan sobre las hojas respetando la dosis.
```

### 22 — Dosis y envase

```
metadata:
  materia: "jardinero_paisajista"
  tema: "abonos_y_fertilizantes"
  nivel: "basico"
  tags: ["tema"]

enunciado: "¿De dónde se toma la dosis máxima de un fertilizante comercial?"
tipo: mc
opciones_explicitas:
  - "De la indicación del envase"
  - "De lo que dice un vecino"
  - "Siempre es 1 kg por m2"
respuesta: "De la indicación del envase"

explicacion: |
  El fabricante indica la dosis segura.
```
