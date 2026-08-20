# Historia Profunda — Escalas de tiempo profundo: millones y miles de millones (cuestionario, 25 preguntas VBLang)

> Tema: `U1`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); `tipo:
> input` (tipo no confirmado en el DSL) — normalizado a `completar`;
> `respuesta: {variable}` con llaves en un campo no-string (sintaxis
> inválida) — corregido; preguntas donde `variables:` indexaba fuera
> de rango (una sola fila pero `idx` hasta 1/2) o donde el índice
> devolvía un número en vez del texto correspondiente — corregidas;
> dos preguntas con `respuestas_validas: [variable]` sin campo
> `respuesta:` — agregado.

---

### 1 — La edad del cosmos

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["universo", "edad_del_universo"]

respuesta: "13800"
tipo: completar
respuestas_validas:
  - "13800"

enunciado: "Según los modelos cosmológicos actuales basados en la radiación de fondo de microondas, la edad estimada del universo es de aproximadamente ___ millones de años."

explicacion: |
  La edad del universo es de aproximadamente 13.800 millones de años. Esta escala es tan vasta que resulta imposible de imaginar para el cerebro humano, que evolucionó para entender ciclos diarios o estacionales.
```

### 2 — El origen de nuestro hogar

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["tierra", "formacion_planetaria"]

respuesta: "4600 millones de años"
tipo: completar
respuestas_validas:
  - "4600 millones de años"

enunciado: "La formación de la Tierra ocurrió hace aproximadamente ___."

explicacion: |
  La Tierra se formó hace unos 4.600 millones de años, mucho después del Big Bang, pero mucho antes de la aparición de la vida compleja.
```

### 3 — El sesgo cognitivo temporal

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["psicologia", "intuicion"]

respuesta: "evolucionado"
tipo: completar
respuestas_validas:
  - "evolucionado"

enunciado: "Nuestra intuición no está calibrada para las escalas de tiempo profundo porque nuestro cerebro ha ___ para sobrevivir en entornos de corto plazo."

explicacion: |
  La evolución humana priorizó la percepción de eventos inmediatos (depredadores, estaciones, ciclos de comida) sobre la comprensión de procesos geológicos o cósmicos que tardan eones en ocurrir.
```

### 4 — Comparativa de escalas

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["comparacion", "tiempo"]

respuesta: "4600"
tipo: completar
respuestas_validas:
  - "4600"

enunciado: "Si el universo tiene 13.800 millones de años, la Tierra tiene aproximadamente ___ millones de años."

explicacion: |
  La Tierra es significativamente más joven que el universo; se formó cuando el universo ya tenía casi 9.000 millones de años de existencia.
```

### 5 — La escala de la vida humana

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "avanzado"
  tags: ["antropoceno", "escala_humana"]

respuesta: "insignificante"
tipo: completar
respuestas_validas:
  - "insignificante"

enunciado: "En comparación con la escala de tiempo de la formación de la corteza terrestre, la duración de la civilización humana es prácticamente ___."

explicacion: |
  La historia de la humanidad es un parpadeo en la escala del tiempo profundo. Mientras la Tierra tarda millones de años en cambiar sus continentes, la humanidad apenas lleva unos pocos milenios de historia escrita.
```

### 6 — El billón en español

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["notacion_cientifica", "escala_longitud"]

respuesta: "10^12"
tipo: mc
opciones_explicitas: ["10^6", "10^9", "10^12", "10^15"]

enunciado: "En español (escala larga), cuando hablamos de un 'billón', nos referimos a una cantidad equivalente a un ___."

explicacion: |
  En español, el sistema de escala larga define el billón como un millón de millones, es decir, 10^12.
```

### 7 — El billion en inglés

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["notacion_cientifica", "traduccion"]

respuesta: "10^9"
tipo: mc
opciones_explicitas: ["10^6", "10^9", "10^12", "10^15"]

enunciado: "Si leés un texto de geología en inglés que menciona un 'billion' de años, ¿a qué potencia de 10 te referís en nuestra escala numérica?"

explicacion: |
  En inglés (escala corta), un 'billion' equivale a mil millones, es decir, 10^9.
```

### 8 — Diferencia de magnitudes

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "comparacion"]

respuesta: "mil millones"
tipo: completar
respuestas_validas:
  - "mil millones"

enunciado: "El valor de un 'billion' en inglés es equivalente, en español, a ___."

explicacion: |
  El término 'billion' en inglés representa 10^9, lo cual en español llamamos 'mil millones'.
```

### 9 — Notación de la Tierra

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "geologia"]

respuesta: "4.5 x 10^9"
tipo: completar
respuestas_validas:
  - "4.5 x 10^9"
  - "4.5x10^9"

enunciado: "La edad estimada de la Tierra es de aproximadamente 4,5 mil millones de años. Expresá este número en notación científica (formato N x 10^x)."

explicacion: |
  4,5 mil millones se escribe como 4.500.000.000, lo que equivale a 4,5 x 10^9.
```

### 10 — El salto de escala

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "logica"]

respuesta: "10^3"
tipo: mc
opciones_explicitas: ["10^2", "10^3", "10^6", "10^9"]

enunciado: "Si dividimos un billón (español, 10^12) por un billion (inglés, 10^9), el resultado es una magnitud de ___."

explicacion: |
  10^12 / 10^9 = 10^(12-9) = 10^3. El resultado es mil.
```

### 11 — El inicio de todo

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["calendario_cosmico", "big_bang"]

enunciado: "Si comprimiéramos los 13.800 millones de años de la historia del universo en un solo año calendario, el evento del Big Bang ocurriría el día ___ de enero."

respuestas_validas:
  - "1"
respuesta: "1"
tipo: completar

explicacion: |
  En el calendario cósmico, el 1 de enero marca el inicio del tiempo y el espacio con el Big Bang.
```

### 12 — La aparición de la Tierra en el calendario cósmico

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["tierra", "vida"]

respuesta: "septiembre"
tipo: completar
respuestas_validas:
  - "septiembre"

enunciado: "Si el Big Bang es el 1 de enero, la formación de la Tierra ocurriría aproximadamente el 1° de ___."

explicacion: |
  La Tierra se formó hace unos 4.500 millones de años, lo que en nuestra escala corresponde a principios de septiembre.
```

### 13 — La era de los reptiles

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["dinosaurios", "extincion"]

respuesta: "24 de diciembre"
tipo: completar
respuestas_validas:
  - "24 de diciembre"

enunciado: "La era de los dinosaurios (que terminó hace unos 66 millones de años) se ubicaría en el calendario cósmico alrededor del ___."

explicacion: |
  Los dinosaurios dominaron la Tierra durante gran parte del último mes del año cósmico, desapareciendo hacia la Navidad.
```

### 14 — La huella humana

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "avanzado"
  tags: ["historia_humana", "tiempo_corto"]

enunciado: "La historia de la humanidad escrita (desde la invención de la escritura) ocupa apenas unos segundos del día ___ de diciembre."

respuestas_validas:
  - "31"
respuesta: "31"
tipo: completar

explicacion: |
  A pesar de nuestra importancia cultural, la historia humana es un parpadeo insignificante comparado con la escala cósmica, ocurriendo en los últimos instantes del 31 de diciembre.
```

### 15 — Comparación de magnitudes: la escala de la Tierra

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["percepcion_temporal", "escala"]

opciones_explicitas: ["Septiembre", "Diciembre", "Enero", "Julio"]
respuesta: "Septiembre"
tipo: mc

enunciado: "Si el universo tiene 13.800 millones de años y la Tierra tiene aproximadamente 4.500 millones de años, ¿en qué mes del calendario cósmico se ubica la aparición de la Tierra?"

explicacion: |
  La Tierra se formó hace 4.500 millones de años, lo que sitúa su aparición en el mes de septiembre dentro de la escala de un año.
```

### 16 — La escala de la historia escrita

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["escala_temporal", "historia", "geologia"]

enunciado: "Si comparamos la edad de la Tierra (aprox. 4500 millones de años) con la duración de la historia escrita (aprox. 5000 años), la historia escrita representa una fracción de tiempo que es:"

opciones_explicitas: ["Una parte significativa", "Una fracción minúscula", "La mitad del tiempo terrestre", "Un tiempo equivalente"]

respuesta: "Una fracción minúscula"
tipo: mc

explicacion: |
  5.000 años frente a 4.500 millones de años es una proporción prácticamente nula — la historia escrita es apenas un instante en la escala geológica.
```

### 17 — El tiempo de nuestra especie

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["homo_sapiens", "evolucion"]

enunciado: "Considerando que el Homo sapiens moderno tiene aproximadamente 300.000 años de existencia, ¿cuál de las siguientes afirmaciones es correcta respecto a la escala geológica?"

opciones_explicitas: ["Es casi tanto tiempo como la edad de la Tierra", "Es un parpadeo insignificante frente a la edad de la Tierra", "Es el tiempo que tardó la Tierra en formarse", "Es un tiempo extremadamente largo en términos geológicos"]

respuesta: "Es un parpadeo insignificante frente a la edad de la Tierra"
tipo: mc

explicacion: |
  300.000 años representan apenas una fracción de un 0,01% de los 4.600 millones de años de historia de la Tierra.
```

### 18 — Comparación de escalas: orden temporal

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["comparacion", "escala"]

opciones_explicitas: ["Historia escrita", "Homo sapiens", "Edad de la Tierra"]
respuesta_orden: ["Historia escrita", "Homo sapiens", "Edad de la Tierra"]
tipo: ordenar

enunciado: "Ordená de MENOR a MAYOR duración estos 3 lapsos de tiempo:"

explicacion: |
  La historia escrita (~5.000 años) es la más corta, seguida por la existencia del Homo sapiens (~300.000 años), y por último la edad de la Tierra (~4.600 millones de años), la más larga por lejos.
```

### 19 — El concepto de escala profunda

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "Para entender la 'Historia Profunda', debemos entender que la actividad humana es una escala de tiempo ___ en comparación con los procesos geológicos."

respuestas_validas:
  - "minúscula"
  - "insignificante"
  - "pequeña"

respuesta: "minúscula"
tipo: completar

explicacion: |
  Los procesos geológicos se miden en millones de años; la actividad humana, en siglos — una diferencia de varios órdenes de magnitud.
```

### 20 — Proporción temporal

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "avanzado"
  tags: ["proporciones", "geologia"]

enunciado: "Si la historia de la humanidad (desde la escritura) fuera un día de 24 horas, la edad de la Tierra equivaldría aproximadamente a:"

opciones_explicitas: ["Unos pocos minutos", "Casi 24 horas", "Unos 10 años", "Un siglo"]

respuesta: "Casi 24 horas"
tipo: mc

explicacion: |
  Al invertir la comparación (poniendo lo corto como referencia de 24 horas), la escala geológica completa se estira a una duración enorme comparada con esa unidad — el punto es que la relación de magnitudes es abismal en cualquier dirección que se la mire.
```

### 21 — La edad de la Tierra en notación científica

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["geologia", "notacion_cientifica"]

enunciado: "La edad estimada de la Tierra es de aproximadamente 4.540.000.000 años. ¿Cuál es la forma correcta de expresar este número en notación científica?"

opciones_explicitas: ["4.54e9", "4.54e7", "45.4e8", "0.454e10"]
respuesta: "4.54e9"
tipo: mc

explicacion: |
  4.540.000.000 equivale a 4,54 × 10⁹ en notación científica.
```

### 22 — El calendario cósmico: ubicar un evento

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["calendario_cosmico", "eventos"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["1° de septiembre", "La formación del Sistema Solar"], ["finales de septiembre", "La aparición de la vida"], ["30 de diciembre", "La extinción de los dinosaurios"]]

enunciado: "En el calendario cósmico, {escenario[idx][0]} corresponde aproximadamente a ___."

opciones_explicitas: ["La formación del Sistema Solar", "La aparición de la vida", "La extinción de los dinosaurios"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  El calendario cósmico es una escala que comprime el tiempo universal en un año para facilitar su comprensión.
```

### 23 — Notación de la edad del universo

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "cosmologia"]

variables:
  idx: uno_de([0, 1, 2])
  valor: [[13800000000, "1.38e10"], [138000000000, "1.38e11"], [1380000000, "1.38e9"]]

enunciado: "Un valor de {valor[idx][0]} años, ¿cómo se expresa correctamente en notación científica?"

opciones_explicitas: ["1.38e10", "1.38e11", "1.38e9", "13.8e9"]
respuesta: valor[idx][1]
tipo: mc

explicacion: |
  Para pasar a notación científica se cuenta cuántos lugares hay que mover la coma decimal hacia la izquierda hasta dejar un solo dígito antes del punto.
```

### 24 — La escala de los eones

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "avanzado"
  tags: ["geologia", "completar"]

variables:
  idx: uno_de([0, 1, 2])
  eon_datos: [[1500000000, "1.5e9"], [2000000000, "2.0e9"], [2500000000, "2.5e9"]]

enunciado: "Un eón es una unidad de tiempo geológico muy larga. Si un período geológico duró {eon_datos[idx][0]} años, su valor en notación científica es ___ años."

respuestas_validas:
  - "1.5e9"
  - "2.0e9"
  - "2.5e9"
respuesta: eon_datos[idx][1]
tipo: completar

explicacion: |
  Cada valor se expresa como N x 10⁹, manteniendo un solo dígito significativo antes del punto decimal.
```

### 25 — Comparación de magnitudes: forma abreviada

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["comparacion", "notacion"]

variables:
  idx: uno_de([0, 1, 2])
  comparacion: [[1000000000, "1e9"], [100000000, "1e8"], [1000000, "1e6"]]

enunciado: "Si un evento ocurrió hace {comparacion[idx][0]} años, la forma abreviada en notación científica es ___."

respuestas_validas:
  - "1e9"
  - "1e8"
  - "1e6"
respuesta: comparacion[idx][1]
tipo: completar

explicacion: |
  La notación científica permite manejar grandes escalas de tiempo de forma eficiente, expresando el número como una potencia de 10.
```
