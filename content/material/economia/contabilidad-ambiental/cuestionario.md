# Economia — contabilidad ambiental (cuestionario, 25 preguntas VBLang)

> Tema: `economia/contabilidad-ambiental`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["calculos", "externalidades"]

variables:
  costo_externo: random(1000, 5000)
  costo_privado: random(2000, 8000)

respuesta: "{costo_privado + costo_externo}"
tipo: input

enunciado: "Una empresa tiene un costo privado de producción de {costo_privado} pesos y genera una externalidad negativa valorizada en {costo_externo} pesos. Según la contabilidad ambiental, ¿cuál es el costo económico total real de esta actividad?"

explicacion: |
  El costo económico total es la suma del costo privado (pagado por la empresa) más el costo externo (impuesto a la sociedad). Internalizar la externalidad implica reconocer esta suma como el costo real de la actividad.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["eficiencia", "calculos"]

variables:
  ingreso_bruto: random(100000, 200000)
  costo_operativo: random(40000, 60000)
  costo_ambiental: random(10000, 30000)

respuesta: "{ingreso_bruto - costo_operativo - costo_ambiental}"
tipo: input

enunciado: "Una empresa tiene un ingreso bruto de {ingreso_bruto}, costos operativos de {costo_operativo} y un costo ambiental internalizado de {costo_ambiental}. ¿Cuál es su beneficio económico real ajustado?"

explicacion: |
  El beneficio real se calcula restando tanto los costos operativos tradicionales como los costos ambientales internalizados. Esto muestra la verdadera sostenibilidad financiera de la actividad.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["carbono", "calculos"]

variables:
  emisiones_co2: random(100, 1000)
  precio_carbono: random(10, 50)

respuesta: "{emisiones_co2 * precio_carbono}"
tipo: input

enunciado: "Si una fábrica emite {emisiones_co2} toneladas de CO2 y el precio social del carbono es de {precio_carbono} pesos por tonelada, ¿cuál es el costo ambiental total de estas emisiones?"

explicacion: |
  El costo ambiental se calcula multiplicando la cantidad de emisiones por el precio social del carbono, que representa el daño económico estimado por cada unidad emitida.
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["suelos", "recuperacion"]

variables:
  costo_recuperacion: random(10000, 50000)
  vida_util: random(5, 10)

respuesta: "{costo_recuperacion / vida_util}"
tipo: input

enunciado: "Si el costo total de recuperación de un suelo degradado es de {costo_recuperacion} pesos y la vida útil estimada de la recuperación es de {vida_util} años, ¿cuál es el costo anualizado?"

explicacion: |
  El costo anualizado permite distribuir el gasto de recuperación a lo largo del tiempo, facilitando su comparación con los beneficios anuales de la actividad productiva que causó el daño.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["eficiencia", "recursos"]

variables:
  valor_produccion: random(100000, 300000)
  consumo_recursos: random(1000, 5000)

respuesta: "{valor_produccion / consumo_recursos}"
tipo: input

enunciado: "Si una empresa genera {valor_produccion} pesos de valor con {consumo_recursos} unidades de recurso natural, ¿cuál es su eficiencia de recursos (valor por unidad de recurso)?"

explicacion: |
  La eficiencia de recursos mide cuánta valor económico se genera por cada unidad de recurso consumido. Un valor más alto indica una gestión más sostenible y eficiente.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["daños", "estimacion"]

variables:
  daño_directo: random(5000, 20000)
  daño_indirecto: random(10000, 40000)

respuesta: "{daño_directo + daño_indirecto}"
tipo: input

enunciado: "Si un derrame causa un daño directo de {daño_directo} y un daño indirecto (pérdida de turismo, etc.) de {daño_indirecto}, ¿cuál es el costo total del incidente?"

explicacion: |
  El costo total de un incidente ambiental incluye tanto los daños directos (limpieza, multas) como los indirectos (pérdida de ingresos para otros sectores, salud pública), reflejando el impacto completo.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["externalidades", "costos"]

variables:
  a: random(10, 50)
  b: random(1, 10)
  costo_total: a + b

respuesta: "{costo_total}"
tipo: input

enunciado: "Si una fábrica genera un beneficio privado de {a} millones pero traslada un costo de salud pública de {b} millones a la comunidad, ¿cuál es el costo social total no internalizado inicialmente?"

explicacion: |
  La externalidad negativa traslada el costo a terceros. El costo social total es la suma del beneficio privado (que no refleja el daño) más el costo del daño. En este contexto de cálculo simple de impacto, sumamos las magnitudes dadas.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["riesgo", "sostenibilidad"]

variables:
  a: random(1, 5)
  b: random(1, 5)

respuesta: "{max(a, b)}"
tipo: input

enunciado: "Si ignoramos los costos ocultos, el riesgo financiero asociado al cambio climático se subestima. Si el riesgo directo es {a} y el indirecto es {b}, ¿cuál es el valor máximo de riesgo individual considerado en la evaluación básica?"

explicacion: |
  Se pide el máximo de dos valores de riesgo hipotéticos para evaluar la comprensión de la magnitud del impacto.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["calculos", "emisiones"]

variables:
  a: random(100, 500)
  b: random(100, 500)
  c: random(100, 500)
  promedio: redondear((a + b + c) / 3, 2)

respuesta: "{promedio}"
tipo: input

enunciado: "Si una empresa emitió {a} toneladas en Q1, {b} en Q2 y {c} en Q3, ¿cuál fue la emisión promedio trimestral?"

explicacion: |
  Se calcula el promedio aritmético de las emisiones para entender la magnitud del impacto ambiental anual.
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["costos", "suelos"]

variables:
  a: random(10, 100)
  b: random(1, 10)
  costo: a * b

respuesta: "{costo}"
tipo: input

enunciado: "Si el costo de recuperación por hectárea es de {a} mil pesos y se degradaron {b} hectáreas, ¿cuál es el costo total de recuperación?"

explicacion: |
  Multiplicación simple para estimar el costo financiero de la restauración ambiental mencionada en la teoría.
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["precios", "GEE"]

variables:
  a: random(5, 20)
  b: random(100, 1000)
  costo_total: a * b

respuesta: "{costo_total}"
tipo: input

enunciado: "Si el precio por tonelada de CO2 es de {a} dólares y la empresa emite {b} toneladas, ¿cuál es el costo total de las emisiones?"

explicacion: |
  Cálculo del costo interno que la empresa debería asumir si internalizara el costo de las emisiones.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["costos", "limpieza"]

variables:
  a: random(50, 200)
  b: random(10, 50)
  total: a + b

respuesta: "{total}"
tipo: input

enunciado: "Si el costo de limpieza del río es {a} millones y el de salud pública es {b} millones, ¿cuál es el costo total trasladado a la comunidad?"

explicacion: |
  Suma de los costos externos generados por la contaminación, que la contabilidad ambiental busca internalizar.
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["huella_carbono", "calculos"]

variables:
  a: random(10, 50)
  b: random(10, 50)
  c: random(10, 50)
  total: a + b + c

respuesta: "{total}"
tipo: input

enunciado: "Si las fuentes fijas emiten {a}, las móviles {b} y los residuos {c}, ¿cuál es la huella total de emisiones?"

explicacion: |
  Suma de las emisiones directas e indirectas para determinar el impacto ambiental total.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["costo_oportunidad", "decisiones"]

variables:
  a: random(100, 500)
  b: random(10, 50)
  ratio: redondear(a / b, 2)

respuesta: "{ratio}"
tipo: input

enunciado: "Si el beneficio privado es {a} y el costo ambiental es {b}, ¿cuál es la relación beneficio/costo ambiental?"

explicacion: |
  Cálculo de la relación para evaluar la eficiencia económica ignorando el impacto ambiental.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["capital_natural", "recursos"]

variables:
  recurso: "uno_de(['agua potable', 'aire limpio', 'fertilidad del suelo'])"

respuesta: verdadero
tipo: vf

enunciado: "El {recurso} es considerado un bien gratuito e infinito en los modelos económicos tradicionales, pero tiene un valor económico real en la contabilidad ambiental."

explicacion: |
  Falso en la teoría moderna/ambiental. La contabilidad ambiental sostiene que estos recursos tienen valor económico real y no son infinitos, por lo que deben ser cuantificados.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["internalizacion", "mecanismos"]

variables:
  agente: "uno_de(['quien contamina', 'el consumidor', 'el estado'])"

respuesta: "quien contamina"
tipo: completar

enunciado: "El principio de 'quien contamina paga' busca que el costo de la degradación ambiental sea asumido por {agente}."

respuestas_validas:
  - "quien contamina"
  - "el contaminador"

explicacion: |
  La internalización de costos implica que el agente que genera la externalidad negativa debe asumir el costo económico del daño causado.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["servicios_ecosistemicos", "valoracion"]

variables:
  valor_polinizacion: random(10000, 20000)
  valor_purificacion_agua: random(5000, 10000)
  porcentaje_perdida: uno_de([0.1, 0.2, 0.3])

respuesta: redondear((valor_polinizacion + valor_purificacion_agua) * porcentaje_perdida, 0)
tipo: input

enunciado: "Si el valor anual de los servicios de polinización es {valor_polinizacion} y de purificación de agua es {valor_purificacion_agua}, y un proyecto destruye el {porcentaje_perdida} de estos servicios, ¿cuál es el costo económico de la pérdida?"

explicacion: |
  Se calcula sumando los valores de los servicios ecosistémicos y aplicando el porcentaje de daño causado por la actividad humana.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["externalidades", "definicion"]

variables:
  tipo_ext: "una externalidad negativa"

respuesta: verdadero
tipo: vf

enunciado: "Una {tipo_ext} ocurre cuando una actividad económica afecta a terceros sin compensación monetaria."

explicacion: |
  Correcto. Las externalidades negativas son costos impuestos a terceros que no figuran en los precios de mercado.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["sostenibilidad", "gestion"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad ambiental permite tomar decisiones que consideren la sostenibilidad futura, no solo la rentabilidad inmediata."

explicacion: |
  Correcto. Al integrar variables ecológicas, se evalúa el impacto a largo plazo de las decisiones económicas.
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["eficiencia", "recursos"]

variables:
  input_total: random(1000, 5000)
  output_util: random(600, 4000)

respuesta: redondear((output_util / input_total) * 100, 2)
tipo: input

enunciado: "Si una empresa utiliza {input_total} unidades de recurso para generar {output_util} unidades de producto útil, ¿cuál es el porcentaje de eficiencia de uso?"

explicacion: |
  La eficiencia se calcula como (producto útil / insumo total) * 100.
```

### 21 — pregunta 21

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["salud", "externalidades"]

respuesta: verdadero
tipo: vf

enunciado: "La contaminación industrial puede generar costos de salud pública que deben ser considerados en la contabilidad ambiental."

explicacion: |
  Correcto. Los impactos en la salud de la comunidad son externalidades negativas que tienen un costo económico.
```

### 22 — pregunta 22

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["incentivos", "practicas_limpias"]

respuesta: verdadero
tipo: vf

enunciado: "Asignar un precio a la contaminación crea incentivos económicos para favorecer prácticas más limpias."

explicacion: |
  Correcto. Al internalizar el costo, las empresas tienen un incentivo financiero para reducir su impacto ambiental.
```

### 23 — pregunta 23

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["sensibilidad", "riesgo"]

variables:
  costo_base: random(10000, 50000)
  factor_riesgo: uno_de([1.1, 1.2, 1.5, 2.0])

respuesta: redondear(costo_base * factor_riesgo, 0)
tipo: input

enunciado: "Si el costo base de un proyecto es {costo_base} y se aplica un factor de riesgo ambiental del {factor_riesgo}, ¿cuál es el costo ajustado por riesgo?"

explicacion: |
  El costo ajustado se obtiene multiplicando el costo base por el factor de riesgo ambiental seleccionado.
```

### 24 — pregunta 24

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["agua", "costos"]

variables:
  litros_usados: random(1000, 10000)
  costo_por_litro: random(0.1, 1.0)

respuesta: redondear(litros_usados * costo_por_litro, 2)
tipo: input

enunciado: "Si una industria utiliza {litros_usados} litros de agua y el costo económico del recurso es {costo_por_litro} por litro, ¿cuál es el costo total del agua utilizada?"

explicacion: |
  El costo total se calcula multiplicando el volumen de agua por su costo económico unitario.
```

### 25 — pregunta 25

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["visibilidad", "transparencia"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad ambiental busca dar visibilidad a los costos ocultos que los modelos tradicionales ignoran."

explicacion: |
  Correcto. Su objetivo es revelar el verdadero impacto económico de las actividades productivas sobre el medio ambiente.
```
