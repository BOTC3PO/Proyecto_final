# Fisica — energias renovables y transformacion de energia (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Renovable

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "basico"
  tags: ["concepto"]

enunciado: "¿Cuál de estas fuentes de energía es renovable?"
tipo: mc
opciones_explicitas:
  - "el viento"
  - "el carbón"
  - "el petróleo"
  - "el uranio"
respuesta: "el viento"

explicacion: |
  Las fuentes renovables se reponen en una escala de tiempo humana.
```

### 2 — No renovable

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "basico"
  tags: ["concepto"]

enunciado: "¿Cuál de estas fuentes es no renovable?"
tipo: mc
opciones_explicitas:
  - "el gas natural"
  - "la energía solar"
  - "la hidráulica"
  - "la biomasa"
respuesta: "el gas natural"

explicacion: |
  Sus reservas son finitas.
```

### 3 — Impacto cero

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "intermedio"
  tags: ["concepto"]

enunciado: "Una fuente renovable no tiene ningún impacto ambiental."
tipo: vf
respuesta: falso

explicacion: |
  Una represa, un parque eólico o la fabricación de paneles tienen impactos propios, aunque la fuente se renueve.
```

### 4 — Cadena hidráulica

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "intermedio"
  tags: ["transformacion"]

enunciado: "En una central hidroeléctrica, ¿cuál es la secuencia de transformaciones de energía?"
tipo: mc
opciones_explicitas:
  - "potencial → cinética → eléctrica"
  - "química → térmica → eléctrica"
  - "solar → química → eléctrica"
  - "nuclear → térmica → cinética"
respuesta: "potencial → cinética → eléctrica"

explicacion: |
  El agua en altura cae, mueve la turbina y el generador produce electricidad.
```

### 5 — Panel fotovoltaico

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "basico"
  tags: ["transformacion"]

enunciado: "Una celda fotovoltaica transforma directamente..."
tipo: mc
opciones_explicitas:
  - "luz en electricidad"
  - "calor en movimiento"
  - "movimiento en luz"
  - "electricidad en calor"
respuesta: "luz en electricidad"

explicacion: |
  No hay etapa intermedia térmica ni mecánica.
```

### 6 — Solar térmica

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "intermedio"
  tags: ["transformacion"]

enunciado: "Un termotanque solar aprovecha el Sol para..."
tipo: mc
opciones_explicitas:
  - "calentar agua directamente"
  - "generar electricidad con celdas"
  - "comprimir aire"
  - "producir hidrógeno"
respuesta: "calentar agua directamente"

explicacion: |
  Es energía solar térmica: la radiación calienta un fluido.
```

### 7 — Unidad de energía eléctrica

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "basico"
  tags: ["unidades"]

enunciado: "En la factura eléctrica la energía consumida se mide en ___ (símbolo kWh)."
tipo: completar
respuestas_validas:
  - "kilowatt-hora"
  - "kilovatio-hora"
  - "kilowatt hora"
  - "kilovatio hora"

explicacion: |
  1 kWh equivale a 3,6 millones de joules.
```

### 8 — Equivalencia

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "intermedio"
  tags: ["unidades"]

enunciado: "Un artefacto de 100 W que funciona durante 10 horas consume..."
tipo: mc
opciones_explicitas:
  - "1 kWh"
  - "10 kWh"
  - "0,1 kWh"
  - "100 kWh"
respuesta: "1 kWh"

explicacion: |
  100 W × 10 h = 1000 Wh = 1 kWh.
```

### 9 — Viento y potencia

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "intermedio"
  tags: ["eolica"]

enunciado: "Si la velocidad del viento se duplica, la potencia disponible en el viento se multiplica por..."
tipo: mc
opciones_explicitas:
  - "8"
  - "2"
  - "4"
  - "16"
respuesta: "8"

explicacion: |
  P = ½ρAv³ depende del cubo de la velocidad: 2³ = 8.
```

### 10 — Límite de Betz

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "avanzado"
  tags: ["eolica"]

enunciado: "Una turbina eólica puede, en teoría, convertir en electricidad el 100 % de la energía cinética del viento que la atraviesa."
tipo: vf
respuesta: falso

explicacion: |
  El límite de Betz fija un máximo de alrededor del 59 %.
```

### 11 — Intermitencia

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "intermedio"
  tags: ["sistema"]

enunciado: "¿Cuál de estas es una forma de almacenar energía eléctrica a gran escala?"
tipo: mc
opciones_explicitas:
  - "una central de bombeo hidroeléctrico"
  - "un panel solar"
  - "un aerogenerador"
  - "un transformador"
respuesta: "una central de bombeo hidroeléctrico"

explicacion: |
  Se sube agua a un embalse cuando sobra energía y se la turbina cuando falta.
```

### 12 — Ley argentina

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "intermedio"
  tags: ["argentina"]

enunciado: "La Ley 27.191 estableció para la Argentina una meta de renovables en el consumo eléctrico del..."
tipo: mc
opciones_explicitas:
  - "20 % al 31 de diciembre de 2025"
  - "50 % en 2010"
  - "5 % en 2030"
  - "100 % en 2025"
respuesta: "20 % al 31 de diciembre de 2025"

explicacion: |
  Modificó la Ley 26.190 y también fijó 35 % para 2030.
```

### 13 — Cauchari

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "intermedio"
  tags: ["argentina"]

enunciado: "El parque Cauchari, en Jujuy, produce electricidad a partir de..."
tipo: mc
opciones_explicitas:
  - "energía solar fotovoltaica"
  - "energía eólica"
  - "energía geotérmica"
  - "biomasa"
respuesta: "energía solar fotovoltaica"

explicacion: |
  Está en la puna, donde la irradiación solar es muy alta.
```

### 14 — Rendimiento total

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "avanzado"
  tags: ["eficiencia"]

enunciado: "Una cadena de dos etapas tiene rendimientos de 0,9 y 0,5. El rendimiento total es..."
tipo: mc
opciones_explicitas:
  - "0,45"
  - "1,4"
  - "0,7"
  - "0,4"
respuesta: "0,45"

explicacion: |
  Los rendimientos se multiplican: 0,9 × 0,5 = 0,45.
```

### 15 — Eficiencia

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "basico"
  tags: ["eficiencia"]

enunciado: "Reemplazar una lámpara incandescente por una LED de igual luz sirve para..."
tipo: mc
opciones_explicitas:
  - "reducir el consumo de energía"
  - "aumentar la potencia consumida"
  - "generar electricidad"
  - "almacenar energía"
respuesta: "reducir el consumo de energía"

explicacion: |
  La LED entrega la misma luz con menos potencia.
```

### 16 — Potencia de un panel

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "basico"
  tags: ["calculo"]

variables:
  area: uno_de([1, 1.6, 2, 5])
  eff: uno_de([15, 18, 20])

enunciado: "Sobre un panel solar de {area} m² incide una irradiancia de 1000 W/m². Si su rendimiento es del {eff} %, ¿qué potencia eléctrica entrega? (en W)"
tipo: input
respuesta: 1000 * area * eff / 100
tolerancia_abs: 1
unidad: "W"

explicacion: |
  P = irradiancia × área × rendimiento.
```

### 17 — Energía de un artefacto

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "basico"
  tags: ["calculo"]

variables:
  p: uno_de([60, 100, 1500, 2000])
  h: uno_de([2, 5, 10])

enunciado: "Un artefacto de {p} W funciona {h} horas por día. ¿Cuántos kWh consume por día? (redondeá a dos decimales)"
tipo: input
respuesta: redondear(p * h / 1000, 2)
tolerancia_abs: 0.01
unidad: "kWh"

explicacion: |
  kWh = potencia en kW × horas.
```

### 18 — Potencia del viento

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  a: uno_de([1000, 2000, 5000])
  v: uno_de([8, 10, 12])

enunciado: "Un aerogenerador barre {a} m² y el viento sopla a {v} m/s (densidad del aire 1,2 kg/m³). Con un rendimiento global (coeficiente de potencia) de 0,4, ¿qué potencia eléctrica entrega? (en kW, redondeá a un decimal)"
tipo: input
respuesta: redondear(0.5 * 1.2 * a * v * v * v * 0.4 / 1000, 1)
tolerancia_abs: 0.5
unidad: "kW"

explicacion: |
  P = Cp·½·ρ·A·v³.
```

### 19 — Potencia hidráulica

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  q: uno_de([10, 50, 100])
  h: uno_de([20, 40])

enunciado: "Una central usa un caudal de {q} m³/s con un desnivel de {h} m. Con ρ = 1000 kg/m³, g = 9,8 m/s² y un rendimiento de 0,9, ¿qué potencia eléctrica genera? (en kW, redondeá a un decimal)"
tipo: input
respuesta: redondear(0.9 * 1000 * 9.8 * q * h / 1000, 1)
tolerancia_abs: 1
unidad: "kW"

explicacion: |
  P = η·ρ·g·Q·h.
```

### 20 — Factor de capacidad

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  pn: uno_de([50, 100, 200])
  fc: uno_de([25, 30, 40])

enunciado: "Un parque eólico de {pn} MW nominales generó en un año {pn * 8.76 * fc / 100} GWh (un año tiene 8760 horas). ¿Cuál fue su factor de capacidad? (en %)"
tipo: input
respuesta: fc
tolerancia_abs: 0.5
unidad: "%"

explicacion: |
  Factor de capacidad = energía real / (potencia nominal × horas).
```

### 21 — Rendimiento en cadena

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  e1: uno_de([90, 80])
  e2: uno_de([50, 60])

enunciado: "Una instalación tiene dos etapas con rendimientos de {e1} % y {e2} %. ¿Cuál es el rendimiento total? (en %)"
tipo: input
respuesta: e1 * e2 / 100
tolerancia_abs: 0.5
unidad: "%"

explicacion: |
  Se multiplican los rendimientos expresados como fracción.
```

### 22 — Ahorro con LED

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  pi: uno_de([60, 75, 100])
  pl: uno_de([8, 10, 12])
  h: uno_de([3, 4, 5])

enunciado: "Se reemplaza una lámpara incandescente de {pi} W por una LED de {pl} W que se usa {h} horas por día. ¿Cuántos kWh se ahorran por año de 365 días? (redondeá a un decimal)"
tipo: input
respuesta: redondear((pi - pl) * h * 365 / 1000, 1)
tolerancia_abs: 0.2
unidad: "kWh"

explicacion: |
  Ahorro = diferencia de potencia × horas × días.
```

### 23 — Joules en un kWh

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  k: uno_de([2, 5, 10])

enunciado: "Sabiendo que 1 kWh = 3,6 millones de joules, ¿cuántos megajoules (MJ) son {k} kWh?"
tipo: input
respuesta: 3.6 * k
tolerancia_abs: 0.05
unidad: "MJ"

explicacion: |
  1 kWh = 3,6 MJ.
```

### 24 — Factor de capacidad

```
metadata:
  materia: "fisica"
  tema: "energias_renovables_y_transformacion_de_energia"
  nivel: "avanzado"
  tags: ["sistema"]

enunciado: "Un parque solar o eólico suele tener un factor de capacidad menor al 100 % porque su recurso es variable."
tipo: vf
respuesta: verdadero

explicacion: |
  La energía real generada es menor que la nominal por las horas sin sol o sin viento suficiente.
```
