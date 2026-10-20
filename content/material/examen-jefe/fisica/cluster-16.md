# Examen jefe — [PENDIENTE #751]

> Logro #751. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 4 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **95 preguntas totales** en 4/4 secciones.

---

## Sección: ecuacion-de-bernoulli-dinamica-de-fluidos (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "basico"
  tags: ["historia"]

enunciado: "¿Quién publicó en 1738 la obra Hydrodynamica, donde aparece la relación entre presión y velocidad de un fluido?"
tipo: mc
opciones_explicitas:
  - "Daniel Bernoulli"
  - "Blaise Pascal"
  - "Arquímedes"
  - "Isaac Newton"
respuesta: "Daniel Bernoulli"

explicacion: |
  La relación lleva su nombre: la ecuación de Bernoulli.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "basico"
  tags: ["concepto"]

enunciado: "La ecuación de Bernoulli es una forma de expresar la conservación de..."
tipo: mc
opciones_explicitas:
  - "la energía por unidad de volumen del fluido"
  - "la masa del recipiente"
  - "la temperatura del fluido"
  - "la viscosidad del fluido"
respuesta: "la energía por unidad de volumen del fluido"

explicacion: |
  Suma presión estática, presión dinámica y presión de altura, todas en pascales.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "basico"
  tags: ["continuidad"]

enunciado: "Para un fluido incompresible, el caudal se conserva: A1·v1 = ___·v2."
tipo: completar
respuestas_validas:
  - "A2"

explicacion: |
  El producto área por velocidad es constante a lo largo de la tubería.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "basico"
  tags: ["continuidad"]

enunciado: "Si una tubería con agua se estrecha, la velocidad del agua en la parte angosta..."
tipo: mc
opciones_explicitas:
  - "aumenta"
  - "disminuye"
  - "no cambia"
  - "se vuelve cero"
respuesta: "aumenta"

explicacion: |
  Para mantener el mismo caudal, menor área exige mayor velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["bernoulli"]

enunciado: "En una tubería horizontal por la que circula un fluido ideal, el punto donde la velocidad es mayor es el punto donde la presión es..."
tipo: mc
opciones_explicitas:
  - "menor"
  - "mayor"
  - "igual"
  - "imposible de comparar"
respuesta: "menor"

explicacion: |
  Con la altura constante, si sube el término ½ρv² baja la presión estática.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "basico"
  tags: ["hipotesis"]

enunciado: "La ecuación de Bernoulli en su forma habitual supone un fluido incompresible."
tipo: vf
respuesta: verdadero

explicacion: |
  También supone flujo estacionario, sin viscosidad y a lo largo de una línea de corriente.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["hipotesis"]

enunciado: "La ecuación de Bernoulli es exacta para cualquier fluido real, incluso muy viscoso y turbulento."
tipo: vf
respuesta: falso

explicacion: |
  Es un modelo ideal: la viscosidad y la turbulencia disipan energía y el modelo deja de ser válido.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["unidades"]

enunciado: "En la ecuación p + ½ρv² + ρgh = constante, cada término tiene unidades de..."
tipo: mc
opciones_explicitas:
  - "presión (pascal)"
  - "velocidad (m/s)"
  - "energía (joule)"
  - "potencia (watt)"
respuesta: "presión (pascal)"

explicacion: |
  Son energías por unidad de volumen: J/m³ equivale a Pa.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["bernoulli"]

enunciado: "¿Cómo se llama el término ½·ρ·v² de la ecuación de Bernoulli?"
tipo: mc
opciones_explicitas:
  - "presión dinámica"
  - "presión hidrostática"
  - "presión atmosférica"
  - "presión absoluta"
respuesta: "presión dinámica"

explicacion: |
  Es la parte de la presión asociada al movimiento del fluido.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["aplicaciones"]

enunciado: "Según el modelo de Bernoulli, en un ala la fuerza hacia arriba aparece porque sobre la cara superior..."
tipo: mc
opciones_explicitas:
  - "el aire va más rápido y la presión es menor"
  - "el aire va más lento y la presión es menor"
  - "el aire va más rápido y la presión es mayor"
  - "la presión no cambia"
respuesta: "el aire va más rápido y la presión es menor"

explicacion: |
  La diferencia de presión entre las dos caras, por el área, da la fuerza de sustentación.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["aplicaciones"]

enunciado: "Bernoulli explica por sí solo toda la sustentación de un avión, sin necesidad de considerar el ángulo de ataque."
tipo: vf
respuesta: falso

explicacion: |
  La explicación completa también involucra el ángulo de ataque y la forma en que el ala desvía el aire.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["torricelli"]

enunciado: "Un líquido sale por un orificio a una profundidad h bajo la superficie libre. ¿Con qué velocidad sale?"
tipo: mc
opciones_explicitas:
  - "v = raíz cuadrada de (2·g·h)"
  - "v = g·h"
  - "v = 2·g·h"
  - "v = raíz cuadrada de (g·h/2)"
respuesta: "v = raíz cuadrada de (2·g·h)"

explicacion: |
  Es el teorema de Torricelli: igual a la velocidad de caída libre desde la altura h.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["torricelli"]

enunciado: "Un tanque tiene dos orificios iguales, uno a 0,5 m y otro a 2 m de profundidad. ¿Por cuál sale el agua con mayor velocidad?"
tipo: mc
opciones_explicitas:
  - "por el de 2 m"
  - "por el de 0,5 m"
  - "por los dos igual"
  - "depende del tamaño del tanque"
respuesta: "por el de 2 m"

explicacion: |
  La velocidad depende de la raíz de la profundidad, no del tamaño del orificio ni del tanque.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["aplicaciones"]

enunciado: "En un pulverizador, el líquido sube por un tubito cuando el aire pasa rápido por encima porque..."
tipo: mc
opciones_explicitas:
  - "la presión sobre el tubito baja"
  - "la presión sobre el tubito aumenta"
  - "el líquido se calienta"
  - "el aire empuja el líquido hacia arriba directamente"
respuesta: "la presión sobre el tubito baja"

explicacion: |
  El aire rápido reduce la presión y la presión atmosférica empuja el líquido hacia arriba.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["aplicaciones"]

enunciado: "En un tubo de Venturi, la presión en la garganta (parte más angosta) comparada con la parte ancha es..."
tipo: mc
opciones_explicitas:
  - "menor"
  - "mayor"
  - "igual"
  - "imposible de determinar"
respuesta: "menor"

explicacion: |
  En la garganta la velocidad es mayor, así que la presión estática es menor.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["continuidad", "calculo"]

variables:
  a1: uno_de([20, 30, 40, 50])
  a2: uno_de([5, 10])
  v1: uno_de([1, 2, 3])

enunciado: "Un agua circula a {v1} m/s por una sección de {a1} cm². Luego pasa a una sección de {a2} cm². ¿Con qué velocidad circula en la sección menor? (en m/s)"
tipo: input
respuesta: v1 * a1 / a2
tolerancia_abs: 0.01
unidad: "m/s"

explicacion: |
  Continuidad: v2 = v1·A1/A2, con las áreas en la misma unidad.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["torricelli", "calculo"]

variables:
  h: uno_de([0.5, 1.25, 2, 3.2, 5])

enunciado: "Un tanque abierto tiene un orificio a {h} m por debajo de la superficie del agua. Con g = 9,8 m/s², ¿con qué velocidad sale el agua? (en m/s, redondeá a dos decimales)"
tipo: input
respuesta: redondear(sqrt(2 * 9.8 * h), 2)
tolerancia_abs: 0.05
unidad: "m/s"

explicacion: |
  v = √(2·g·h).
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["bernoulli", "calculo"]

variables:
  v1: uno_de([1, 2, 3])
  v2: uno_de([5, 6, 8])

enunciado: "Por una tubería horizontal circula agua (densidad 1000 kg/m³). La velocidad pasa de {v1} m/s a {v2} m/s. ¿Cuánto baja la presión estática entre los dos puntos? (en Pa)"
tipo: input
respuesta: 0.5 * 1000 * (v2 * v2 - v1 * v1)
tolerancia_abs: 1
unidad: "Pa"

explicacion: |
  Con h constante: p1 − p2 = ½·ρ·(v2² − v1²).
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["presion_dinamica", "calculo"]

variables:
  v: uno_de([2, 4, 5, 10])

enunciado: "¿Cuál es la presión dinámica de agua (1000 kg/m³) que se mueve a {v} m/s? (en Pa)"
tipo: input
respuesta: 0.5 * 1000 * v * v
tolerancia_abs: 1
unidad: "Pa"

explicacion: |
  Presión dinámica = ½·ρ·v².
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["sustentacion", "calculo"]

variables:
  vs: uno_de([60, 70, 80])
  vi: uno_de([50, 55])
  area: uno_de([10, 15, 20])

enunciado: "Sobre un ala de {area} m² el aire (1,2 kg/m³) circula a {vs} m/s por arriba y a {vi} m/s por abajo. Con el modelo de Bernoulli, ¿qué fuerza neta hacia arriba resulta? (en N)"
tipo: input
respuesta: 0.5 * 1.2 * (vs * vs - vi * vi) * area
tolerancia_abs: 1
unidad: "N"

explicacion: |
  Δp = ½·ρ·(v_arriba² − v_abajo²); fuerza = Δp · área.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["torricelli", "calculo"]

variables:
  h: uno_de([0.8, 1.25, 3.2])
  area: uno_de([2, 5, 10])

enunciado: "Un orificio de {area} cm² está a {h} m bajo la superficie libre de un tanque. Con g = 9,8 m/s², ¿qué caudal sale? (en cm³/s, redondeá a un decimal)"
tipo: input
respuesta: redondear(area * 100 * sqrt(2 * 9.8 * h), 1)
tolerancia_abs: 2
unidad: "cm³/s"

explicacion: |
  Q = A·v, con v = √(2gh) en m/s y A en cm²: Q [cm³/s] = A·100·v.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["bernoulli", "calculo"]

variables:
  p1: uno_de([200, 250, 300])
  v1: uno_de([2, 3])
  v2: uno_de([6, 8])

enunciado: "En una tubería horizontal de agua la presión es {p1} kPa y la velocidad {v1} m/s. Más adelante la velocidad es {v2} m/s. ¿Cuál es la presión en ese punto? (en kPa)"
tipo: input
respuesta: p1 - 0.5 * 1000 * (v2 * v2 - v1 * v1) / 1000
tolerancia_abs: 0.1
unidad: "kPa"

explicacion: |
  p2 = p1 − ½·ρ·(v2² − v1²), pasando a kPa al final.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["bernoulli"]

enunciado: "En una tubería de sección constante que asciende, ¿qué ocurre con la presión estática si el fluido ideal sube?"
tipo: mc
opciones_explicitas:
  - "disminuye"
  - "aumenta"
  - "permanece igual"
  - "se anula"
respuesta: "disminuye"

explicacion: |
  Con velocidad constante, el término ρgh aumenta y la presión estática debe bajar.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["hipotesis"]

enunciado: "La ecuación de Bernoulli se aplica entre dos puntos de una misma línea de ___."
tipo: completar
respuestas_validas:
  - "corriente"

explicacion: |
  La comparación vale a lo largo de una línea de corriente.
```

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["torricelli"]

enunciado: "Según Torricelli, la velocidad de salida por un orificio depende de la profundidad pero no de la densidad del líquido."
tipo: vf
respuesta: verdadero

explicacion: |
  En v = √(2gh) no aparece la densidad: se simplifica entre ambos lados.
```

## Sección: energias-renovables-y-transformacion-de-energia (24 preguntas)

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

## Sección: movimiento-armonico-simple-y-ondas-estacionarias (23 preguntas)

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "basico"
  tags: ["concepto"]

enunciado: "Un movimiento es armónico simple cuando la fuerza sobre el cuerpo es..."
tipo: mc
opciones_explicitas:
  - "proporcional al desplazamiento y dirigida al equilibrio"
  - "constante en módulo y dirección"
  - "proporcional a la velocidad"
  - "nula en todo momento"
respuesta: "proporcional al desplazamiento y dirigida al equilibrio"

explicacion: |
  Es la ley de Hooke: F = −k·x.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "basico"
  tags: ["formula"]

enunciado: "La frecuencia es la inversa del período: f = 1/___."
tipo: completar
respuestas_validas:
  - "T"
  - "t"
  - "período"
  - "periodo"

explicacion: |
  Si el período es 0,5 s, la frecuencia es 2 Hz.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["resorte"]

enunciado: "Si se cuadruplica la masa que cuelga de un resorte, el período se..."
tipo: mc
opciones_explicitas:
  - "duplica"
  - "cuadruplica"
  - "reduce a la mitad"
  - "mantiene igual"
respuesta: "duplica"

explicacion: |
  T = 2π√(m/k): al multiplicar m por 4 el período se multiplica por √4 = 2.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["pendulo"]

enunciado: "El período de un péndulo simple de ángulos pequeños NO depende de..."
tipo: mc
opciones_explicitas:
  - "la masa de la pesa"
  - "el largo del hilo"
  - "la gravedad del lugar"
  - "las tres cosas anteriores"
respuesta: "la masa de la pesa"

explicacion: |
  T = 2π√(L/g) solo involucra el largo y la gravedad.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["mas"]

enunciado: "En un MAS, la velocidad del cuerpo es máxima cuando pasa por..."
tipo: mc
opciones_explicitas:
  - "la posición de equilibrio"
  - "los extremos"
  - "la mitad de la amplitud únicamente"
  - "ningún punto, es constante"
respuesta: "la posición de equilibrio"

explicacion: |
  Allí toda la energía es cinética; en los extremos la velocidad es cero.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["mas"]

enunciado: "En un MAS, la aceleración es máxima en..."
tipo: mc
opciones_explicitas:
  - "los extremos"
  - "el equilibrio"
  - "todos los puntos por igual"
  - "la mitad del recorrido"
respuesta: "los extremos"

explicacion: |
  La fuerza restauradora es máxima donde el desplazamiento es máximo.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["energia"]

enunciado: "Si se duplica la amplitud de un oscilador con resorte, su energía mecánica se cuadruplica."
tipo: vf
respuesta: verdadero

explicacion: |
  E = ½kA²: depende del cuadrado de la amplitud.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "basico"
  tags: ["ondas"]

enunciado: "En una onda estacionaria, un nodo es un punto que..."
tipo: mc
opciones_explicitas:
  - "no oscila"
  - "oscila con la máxima amplitud"
  - "se mueve a la velocidad de la onda"
  - "cambia de frecuencia"
respuesta: "no oscila"

explicacion: |
  Los antinodos son los puntos de máxima oscilación.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["cuerdas"]

enunciado: "En una cuerda sujeta en ambos extremos, la frecuencia del segundo armónico respecto de la fundamental es..."
tipo: mc
opciones_explicitas:
  - "el doble"
  - "la mitad"
  - "igual"
  - "el triple"
respuesta: "el doble"

explicacion: |
  f_n = n·f1.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["tubos"]

enunciado: "Un tubo cerrado en un extremo produce solamente los armónicos..."
tipo: mc
opciones_explicitas:
  - "impares"
  - "pares"
  - "todos"
  - "ninguno"
respuesta: "impares"

explicacion: |
  f_n = (2n−1)·v/(4L): 1, 3, 5, …
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["tubos"]

enunciado: "Un tubo abierto en ambos extremos produce los mismos armónicos que una cuerda fija en ambos extremos de igual longitud útil (con la velocidad correspondiente)."
tipo: vf
respuesta: verdadero

explicacion: |
  En ambos casos f_n = n·v/(2L).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["musica"]

enunciado: "Al apretar con un dedo una cuerda de guitarra contra el mástil, la nota se vuelve más aguda porque..."
tipo: mc
opciones_explicitas:
  - "se acorta la parte de cuerda que vibra"
  - "aumenta la masa de la cuerda"
  - "disminuye la tensión"
  - "aumenta el largo útil"
respuesta: "se acorta la parte de cuerda que vibra"

explicacion: |
  f1 = v/(2L): menor L, mayor frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["cuerdas"]

enunciado: "¿Cuántos antinodos tiene el tercer armónico de una cuerda fija en ambos extremos?"
tipo: mc
opciones_explicitas:
  - "3"
  - "2"
  - "4"
  - "6"
respuesta: "3"

explicacion: |
  El armónico n tiene n antinodos y n + 1 nodos (contando los extremos).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  m: uno_de([0.25, 1, 4])
  k: 100

enunciado: "Una masa de {m} kg cuelga de un resorte de constante {k} N/m. ¿Cuál es el período de oscilación? (en s, redondeá a dos decimales)"
tipo: input
respuesta: redondear(2 * 3.14159 * sqrt(m / k), 2)
tolerancia_abs: 0.01
unidad: "s"

explicacion: |
  T = 2π√(m/k).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "basico"
  tags: ["calculo"]

variables:
  t: uno_de([0.5, 0.25, 0.1, 2])

enunciado: "Un oscilador tarda {t} s en completar una oscilación. ¿Cuál es su frecuencia? (en Hz)"
tipo: input
respuesta: 1 / t
tolerancia_abs: 0.01
unidad: "Hz"

explicacion: |
  f = 1/T.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  l: uno_de([0.25, 1, 2.5])

enunciado: "Un péndulo simple mide {l} m. Con g = 9,8 m/s² y ángulos pequeños, ¿cuál es su período? (en s, redondeá a dos decimales)"
tipo: input
respuesta: redondear(2 * 3.14159 * sqrt(l / 9.8), 2)
tolerancia_abs: 0.01
unidad: "s"

explicacion: |
  T = 2π√(L/g).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  t: uno_de([1, 2, 3])

enunciado: "¿Qué largo debe tener un péndulo simple para que su período sea {t} s? Usá g = 9,8 m/s². (en m, redondeá a dos decimales)"
tipo: input
respuesta: redondear(9.8 * t * t / (4 * 3.14159 * 3.14159), 2)
tolerancia_abs: 0.02
unidad: "m"

explicacion: |
  Despejando: L = g·T²/(4π²).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  k: uno_de([100, 200, 400])
  a: uno_de([0.05, 0.1])

enunciado: "Un resorte de constante {k} N/m oscila con amplitud {a} m. ¿Cuál es su energía mecánica total? (en J, redondeá a tres decimales)"
tipo: input
respuesta: redondear(0.5 * k * a * a, 3)
tolerancia_abs: 0.002
unidad: "J"

explicacion: |
  E = ½·k·A².
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  a: uno_de([0.05, 0.1, 0.2])
  m: uno_de([1, 4])
  k: 100

enunciado: "Una masa de {m} kg unida a un resorte de {k} N/m oscila con amplitud {a} m. ¿Cuál es su velocidad máxima? (en m/s, redondeá a tres decimales)"
tipo: input
respuesta: redondear(a * sqrt(k / m), 3)
tolerancia_abs: 0.005
unidad: "m/s"

explicacion: |
  v_max = A·ω con ω = √(k/m).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  v: uno_de([200, 300, 400])
  l: uno_de([0.5, 1])

enunciado: "En una cuerda fija en ambos extremos de {l} m, las ondas viajan a {v} m/s. ¿Cuál es la frecuencia fundamental? (en Hz)"
tipo: input
respuesta: v / (2 * l)
tolerancia_abs: 0.5
unidad: "Hz"

explicacion: |
  f1 = v/(2L).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  f1: uno_de([110, 220])

enunciado: "La frecuencia fundamental de una cuerda es {f1} Hz. ¿Cuál es la frecuencia de su tercer armónico? (en Hz)"
tipo: input
respuesta: 3 * f1
tolerancia_abs: 0.5
unidad: "Hz"

explicacion: |
  f3 = 3·f1.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  l: uno_de([0.17, 0.34, 0.85])

enunciado: "Un tubo cerrado en un extremo mide {l} m. Con una velocidad del sonido de 340 m/s, ¿cuál es su frecuencia fundamental? (en Hz)"
tipo: input
respuesta: 340 / (4 * l)
tolerancia_abs: 1
unidad: "Hz"

explicacion: |
  f1 = v/(4L).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["resonancia"]

enunciado: "Un tubo cerrado cuya fundamental es 250 Hz puede resonar también a..."
tipo: mc
opciones_explicitas:
  - "750 Hz"
  - "500 Hz"
  - "1000 Hz"
  - "375 Hz"
respuesta: "750 Hz"

explicacion: |
  Solo armónicos impares: 250, 750, 1250, …
```

## Sección: primera-ley-de-la-termodinamica (23 preguntas)

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "basico"
  tags: ["concepto"]

enunciado: "La primera ley de la termodinámica afirma que..."
tipo: mc
opciones_explicitas:
  - "la energía no se crea ni se destruye, solo se transforma o transfiere"
  - "el calor fluye siempre de lo frío a lo caliente"
  - "la entropía de un sistema aislado nunca disminuye"
  - "la temperatura de un gas es proporcional a su volumen"
respuesta: "la energía no se crea ni se destruye, solo se transforma o transfiere"

explicacion: |
  Es la conservación de la energía incluyendo calor y trabajo.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "basico"
  tags: ["formula"]

enunciado: "Con la convención en que W es el trabajo realizado por el sistema, la primera ley se escribe ΔU = Q − ___."
tipo: completar
respuestas_validas:
  - "W"

explicacion: |
  La variación de energía interna es el calor recibido menos el trabajo entregado.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["concepto"]

enunciado: "¿Cuál de estas magnitudes es una función de estado?"
tipo: mc
opciones_explicitas:
  - "la energía interna"
  - "el calor"
  - "el trabajo"
  - "el calor y el trabajo por igual"
respuesta: "la energía interna"

explicacion: |
  Calor y trabajo dependen del proceso; la energía interna solo del estado.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["concepto"]

enunciado: "El calor y el trabajo son funciones de estado de un sistema."
tipo: vf
respuesta: falso

explicacion: |
  Son formas de transferir energía y su valor depende del camino del proceso.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "basico"
  tags: ["signos"]

enunciado: "Si un sistema cede calor al entorno, en la convención ΔU = Q − W el calor Q es..."
tipo: mc
opciones_explicitas:
  - "negativo"
  - "positivo"
  - "cero"
  - "igual al trabajo"
respuesta: "negativo"

explicacion: |
  Q es positivo solo cuando el sistema recibe calor.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "basico"
  tags: ["signos"]

enunciado: "Cuando un gas se expande empujando un pistón, el trabajo W realizado por el sistema es..."
tipo: mc
opciones_explicitas:
  - "positivo"
  - "negativo"
  - "cero"
  - "igual a la energía interna"
respuesta: "positivo"

explicacion: |
  El sistema entrega energía al entorno.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["procesos"]

enunciado: "En un proceso isocórico de un gas (volumen constante), el trabajo realizado es..."
tipo: mc
opciones_explicitas:
  - "cero"
  - "igual al calor"
  - "igual a p·ΔV con ΔV positivo"
  - "siempre negativo"
respuesta: "cero"

explicacion: |
  Sin cambio de volumen el gas no desplaza ningún pistón: W = 0 y ΔU = Q.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["procesos"]

enunciado: "En un proceso isotérmico de un gas ideal, la variación de energía interna es..."
tipo: mc
opciones_explicitas:
  - "cero"
  - "igual a Q"
  - "igual a −W"
  - "mayor que cero"
respuesta: "cero"

explicacion: |
  La energía interna del gas ideal depende solo de la temperatura, que no cambia: Q = W.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["procesos"]

enunciado: "En un proceso adiabático el calor intercambiado vale..."
tipo: mc
opciones_explicitas:
  - "cero"
  - "el trabajo realizado"
  - "la variación de energía interna"
  - "la temperatura final"
respuesta: "cero"

explicacion: |
  Q = 0, por lo tanto ΔU = −W.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "avanzado"
  tags: ["procesos"]

enunciado: "Un gas ideal se expande adiabáticamente. Su temperatura..."
tipo: mc
opciones_explicitas:
  - "disminuye"
  - "aumenta"
  - "no cambia"
  - "depende del recipiente exclusivamente"
respuesta: "disminuye"

explicacion: |
  El gas realiza trabajo a costa de su energía interna, sin recibir calor.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "avanzado"
  tags: ["aplicaciones"]

enunciado: "Al inflar rápidamente un neumático, el aire de la bomba se calienta principalmente porque..."
tipo: mc
opciones_explicitas:
  - "se comprime casi sin intercambiar calor, y el trabajo recibido aumenta su energía interna"
  - "recibe calor del ambiente"
  - "el gas se expande"
  - "se enfría el pistón"
respuesta: "se comprime casi sin intercambiar calor, y el trabajo recibido aumenta su energía interna"

explicacion: |
  Es una compresión aproximadamente adiabática: W < 0 y ΔU > 0.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["ciclos"]

enunciado: "Después de un ciclo completo, la variación de energía interna del sistema es cero."
tipo: vf
respuesta: verdadero

explicacion: |
  El sistema vuelve al estado inicial y U es función de estado.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["historia"]

enunciado: "La primera ley descarta la existencia de una máquina que..."
tipo: mc
opciones_explicitas:
  - "entregue más energía que la que recibe"
  - "transforme calor en trabajo con rendimiento menor a 100 %"
  - "funcione con dos focos de temperatura"
  - "use un gas como fluido de trabajo"
respuesta: "entregue más energía que la que recibe"

explicacion: |
  Es el móvil perpetuo de primera especie.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["historia"]

enunciado: "¿Qué mostró el experimento de las paletas de Joule en el agua?"
tipo: mc
opciones_explicitas:
  - "que el trabajo mecánico se puede convertir en calor en una proporción fija"
  - "que el calor es un fluido llamado calórico"
  - "que el agua se comprime con facilidad"
  - "que el calor viaja por radiación"
respuesta: "que el trabajo mecánico se puede convertir en calor en una proporción fija"

explicacion: |
  Estableció la equivalencia entre trabajo y calor como formas de energía.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "basico"
  tags: ["calculo"]

variables:
  q: uno_de([300, 500, 800, 1000])
  w: uno_de([100, 200, 250])

enunciado: "Un gas recibe {q} J de calor y realiza {w} J de trabajo sobre el entorno. ¿Cuánto vale su variación de energía interna? (en J)"
tipo: input
respuesta: q - w
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  ΔU = Q − W.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "basico"
  tags: ["calculo"]

variables:
  q: uno_de([200, 400, 600])

enunciado: "En un recipiente rígido un gas recibe {q} J de calor. ¿Cuánto vale ΔU? (en J)"
tipo: input
respuesta: q
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  Volumen constante: W = 0, entonces ΔU = Q.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  p: uno_de([100, 200, 300])
  dv: uno_de([1, 2, 3])

enunciado: "Un gas se expande a presión constante de {p} kPa y su volumen aumenta {dv} L. ¿Qué trabajo realiza? (en J; recordá que 1 kPa·L = 1 J)"
tipo: input
respuesta: p * dv
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  W = p·ΔV; el producto kPa·L da joules.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  w: uno_de([150, 300, 450])

enunciado: "Un gas se expande adiabáticamente y realiza {w} J de trabajo. ¿Cuánto vale su ΔU? (en J, con signo)"
tipo: input
respuesta: 0 - w
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  Q = 0, entonces ΔU = −W: disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  qin: uno_de([800, 1000, 1200])
  qout: uno_de([500, 600])

enunciado: "Una máquina térmica recibe {qin} J de calor y cede {qout} J por ciclo. ¿Cuál es el trabajo neto por ciclo? (en J)"
tipo: input
respuesta: qin - qout
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  En un ciclo ΔU = 0, así que W = Q_recibido − Q_cedido.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  n: uno_de([1, 2, 3])
  dt: uno_de([10, 20, 50])

enunciado: "Se calientan {n} mol de un gas ideal monoatómico en {dt} K. ¿Cuánto aumenta su energía interna? Usá R = 8,314 J/(mol·K). (en J, redondeá a un decimal)"
tipo: input
respuesta: redondear(1.5 * n * 8.314 * dt, 1)
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  ΔU = (3/2)·n·R·ΔT.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  w: uno_de([200, 300])
  du: uno_de([100, 150])

enunciado: "Sobre un gas se realiza un trabajo de compresión de {w} J (es decir, W = −{w} J) y su energía interna aumenta {du} J. ¿Cuánto calor Q intercambia? (en J, con signo)"
tipo: input
respuesta: du + 0 - w
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  ΔU = Q − W con W = −w: Q = ΔU + W = du − w. Un resultado negativo significa que el gas cede calor.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "avanzado"
  tags: ["signos"]

enunciado: "Algunos textos de química escriben ΔU = Q + W. En esa convención, W representa..."
tipo: mc
opciones_explicitas:
  - "el trabajo realizado sobre el sistema"
  - "el trabajo realizado por el sistema"
  - "el calor cedido"
  - "la variación de volumen"
respuesta: "el trabajo realizado sobre el sistema"

explicacion: |
  Es la misma ley con el signo del trabajo invertido.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "avanzado"
  tags: ["concepto"]

enunciado: "En un gas ideal, la energía interna depende únicamente de la temperatura."
tipo: vf
respuesta: verdadero

explicacion: |
  No hay interacciones entre moléculas, así que no depende del volumen ni de la presión.
```

