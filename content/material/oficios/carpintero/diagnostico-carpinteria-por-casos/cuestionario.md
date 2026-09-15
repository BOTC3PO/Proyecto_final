# Oficios — Carpintero — Diagnóstico de carpintería por casos (cuestionario, 18 preguntas VBLang)

> Cierre del oficio (`OF4`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de problemas
> en madera — cada pregunta validada con parse+lint+compile+generate
> real de packages/vblang antes de guardarse.

---

### 1 — La pregunta de fondo del diagnóstico

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "qué pasó con la humedad de esa pieza"
tipo: mc
opciones_explicitas: ["qué pasó con la humedad de esa pieza", "qué marca de madera se usó", "cuánto costó la madera original"]

enunciado: "Según el método resumido de la teoría, ¿cuál es la pregunta de fondo que casi siempre hay que hacerse ante un problema de madera en el tiempo?"

explicacion: |
  Casi todos los problemas de la madera en el tiempo tienen que ver,
  directa o indirectamente, con cómo absorbió, liberó o quedó expuesta
  a la humedad de forma despareja o excesiva.
```

### 2 — Por qué la madera se sigue moviendo

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "basico"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de un metal o un plástico, la madera sigue reaccionando a la humedad del ambiente durante toda su vida útil, expandiéndose y contrayéndose."

explicacion: |
  Es la propiedad de fondo que explica la mayoría de los problemas que
  aparecen meses después de terminado un mueble.
```

### 3 — Causa del alabeo

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "un secado desparejo de la humedad entre ambas caras de la pieza"
tipo: mc
opciones_explicitas: ["un secado desparejo de la humedad entre ambas caras de la pieza", "un exceso de lijado en una sola cara", "el tipo de herraje usado en la unión"]

enunciado: "Según la teoría, ¿cuál es la causa habitual de que una tabla o panel se alabee (curve o retuerza) con el tiempo?"

explicacion: |
  Suele deberse a un secado desparejo entre ambas caras, por ejemplo
  si una quedó expuesta al sol o se barnizó sólo de un lado.
```

### 4 — Cómo prevenir el alabeo

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, la prevención del alabeo es tratar o barnizar ambas caras de la pieza por igual, no sólo la cara visible."

explicacion: |
  Tratar sólo una cara deja que la humedad entre y salga a distinta
  velocidad por cada lado, generando la curvatura.
```

### 5 — Causa de la rajadura

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "una contracción de la madera al perder humedad más rápido de lo que puede acomodar sin tensión interna"
tipo: mc
opciones_explicitas: ["una contracción de la madera al perder humedad más rápido de lo que puede acomodar sin tensión interna", "el uso de un adhesivo de mala calidad, exclusivamente", "un corte hecho con una sierra desafilada"]

enunciado: "Según la teoría, ¿a qué suele deberse una rajadura que aparece con el tiempo en el sentido de la fibra?"

explicacion: |
  Suele deberse a una contracción de la madera al perder humedad más
  rápido de lo que el material puede acomodar sin generar tensión
  interna.
```

### 6 — La fijación rígida y las rajaduras

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Fijar una pieza de forma totalmente rígida en ambos extremos, sin dejar margen para que la madera se contraiga o expanda con los cambios estacionales de humedad, es un factor que favorece las rajaduras."

explicacion: |
  Es un factor mencionado explícitamente como agravante del caso 2.
```

### 7 — Causas de que una unión falle

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

variables:
  causa: uno_de(["un adhesivo inadecuado para el ambiente de uso", "una unión que no se prensó el tiempo suficiente durante el secado", "un tallado de la unión con juego excesivo desde el principio"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para que una unión de carpintería falle con el tiempo."

explicacion: |
  Las tres son causas mencionadas en el caso 3 de la teoría.
```

### 8 — Cola interior en una pieza de exterior

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, usar un adhesivo de interior en una pieza expuesta a humedad exterior no afecta la resistencia de la unión con el tiempo."

explicacion: |
  Falso. Usar cola interior en una pieza de exterior es mencionado
  como una de las causas de que la unión falle con el tiempo.
```

### 9 — Síntomas del caso 4 (humedad en la madera)

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "intermedio"
  tags: ["caso 4"]

variables:
  n: uno_de([1, 1])

respuesta: "sentirse pesada, con manchas oscuras o un olor a moho"
tipo: mc
opciones_explicitas: ["sentirse pesada, con manchas oscuras o un olor a moho", "un color más claro de lo normal, sin otro síntoma", "un sonido metálico al golpearla"]

enunciado: "Según la teoría, ¿qué síntomas indican que una pieza de madera tiene humedad acumulada en su interior?"

explicacion: |
  Sentirse pesada, con manchas oscuras o un olor a moho son los
  síntomas mencionados para el caso 4.
```

### 10 — Origen habitual de la humedad acumulada

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

variables:
  n: uno_de([1, 1])

respuesta: "estar en contacto directo con una superficie húmeda sin ventilación o sellado adecuados"
tipo: mc
opciones_explicitas: ["estar en contacto directo con una superficie húmeda sin ventilación o sellado adecuados", "haber sido cortada con una herramienta eléctrica en vez de manual", "usar maderas duras en vez de maderas blandas"]

enunciado: "Según la teoría, ¿cuál es el origen habitual de la humedad acumulada en una pieza de madera?"

explicacion: |
  Generalmente el contacto directo con una superficie húmeda (el
  suelo, una pared exterior) sin la ventilación o el sellado
  adecuados.
```

### 11 — Reparar sin corregir el origen

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

respuesta: verdadero
tipo: vf

enunciado: "Si no se corrige el origen de la humedad del caso 4 antes de reparar o reemplazar la pieza afectada, el problema simplemente vuelve a aparecer en la madera nueva."

explicacion: |
  Es la advertencia final del caso 4: reparar sin atacar la causa raíz
  no resuelve nada a largo plazo.
```

### 12 — Diferencia entre alabeo y rajadura

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "el alabeo es una curvatura por secado desparejo entre caras; la rajadura es una fisura por contracción excesiva de la fibra"
tipo: mc
opciones_explicitas: ["el alabeo es una curvatura por secado desparejo entre caras; la rajadura es una fisura por contracción excesiva de la fibra", "son exactamente el mismo fenómeno con dos nombres distintos", "el alabeo sólo ocurre en tableros, la rajadura sólo en madera maciza"]

enunciado: "¿Cuál es la diferencia entre el caso 1 (alabeo) y el caso 2 (rajadura), según la teoría?"

explicacion: |
  El alabeo es una curvatura causada por un secado desparejo entre
  caras; la rajadura es una fisura causada por una contracción de la
  fibra más rápida de lo que el material puede acomodar.
```

### 13 — Errores de fabricación vs. propiedad natural del material

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "basico"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, muchos de los problemas que aparecen meses después de terminado un mueble no son errores de fabricación, sino la reacción natural de la madera a la humedad del ambiente."

explicacion: |
  Es la idea central que introduce todo el tema de diagnóstico de
  carpintería.
```

### 14 — Diagnosticar empieza por la historia de humedad

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, diagnosticar bien un problema de carpintería empieza por entender la historia de humedad de la pieza, no sólo mirar el síntoma final."

explicacion: |
  Es la síntesis final del método de diagnóstico de todo el tema.
```

### 15 — Unión con juego excesivo desde el principio

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, una unión tallada con demasiada holgura desde el principio termina dependiendo únicamente del adhesivo para sostener lo que la geometría de la unión debería sostener por sí misma."

explicacion: |
  Es una de las tres causas mencionadas para que una unión falle con
  el tiempo (caso 3).
```

### 16 — Cuatro casos, un mismo hilo conductor

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "intermedio"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los cuatro casos de este tema (alabeo, rajadura, unión que falla, humedad acumulada) comparten un mismo hilo conductor relacionado con la humedad."

explicacion: |
  Aun siendo síntomas distintos, los cuatro se explican, directa o
  indirectamente, por cómo la pieza manejó la humedad del ambiente.
```

### 17 — Rajadura y estacionalidad

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Los cambios estacionales de humedad son un factor mencionado en la teoría como relevante para el riesgo de rajaduras en piezas fijadas de forma rígida."

explicacion: |
  La teoría menciona explícitamente \"los cambios estacionales de
  humedad\" como el contexto en el que una fijación rígida se vuelve
  un problema.
```

### 18 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "carpintero_diagnostico_carpinteria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los cuatro casos de este tema comparten la misma lógica: entender qué pasó con la humedad de la pieza antes de asumir un defecto de fabricación."

explicacion: |
  Es la síntesis final del método de diagnóstico de carpintería de
  todo el tema.
```
