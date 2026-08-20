# Vida Cotidiana — eficiencia energetica domestica (cuestionario, 28 preguntas VBLang)

> Tema: `vida-cotidiana/eficiencia-energetica-domestica`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["calor_especifico", "energia", "agua"]

variables:
  masa: random(1, 5) * 1000
  delta_t: random(5, 15)
  c_agua: 4186

respuesta: redondear(masa * c_agua * delta_t / 1000, 2)
tipo: input

enunciado: "Calculá la energía en kJ necesaria para elevar {redondear(masa / 1000, 1)} kg de agua en {delta_t} °C. Usá c_agua = 4186 J/(kg·°C)."

explicacion: |
  Se usa la fórmula Q = m·c·ΔT. La masa debe estar en kg. El resultado se pasa a kJ dividiendo por 1000.
```

### 2 — pregunta 2

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["mitos", "termostato"]

respuesta: falso
tipo: vf

enunciado: "Poner el dial de temperatura de la heladera al máximo hace que enfríe más rápido en cada ciclo."

explicacion: |
  Falso. El dial controla el punto de corte (cuándo se apaga), no la potencia del compresor. Ponerlo al máximo solo alarga el tiempo de encendido.
```

### 3 — pregunta 3

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["masa_termica", "aire_vs_agua"]

variables:
  m_agua: random(2, 4)
  m_aire: random(1, 3)
  c_agua: 4186
  c_aire: 1005

respuesta: redondear(m_agua * c_agua / (m_aire * c_aire), 1)
tipo: input

enunciado: "Si una heladera tiene {m_agua} kg de agua y {m_aire} kg de aire, ¿cuántas veces mayor es la capacidad calorífica total del agua comparada con la del aire? (Redondear a 1 decimal)."

explicacion: |
  Se calcula (m_agua * c_agua) / (m_aire * c_aire). El agua tiene mayor capacidad calorífica específica y usualmente mayor masa en este contexto, lo que estabiliza la temperatura.
```

### 4 — pregunta 4

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["mitos", "consumo"]

respuesta: |
  "falso"
tipo: completar

enunciado: "Verdadero o Falso: Poner la heladera al máximo enfría más rápido. Respuesta: ___"

explicacion: |
  Es falso. El compresor trabaja a potencia constante; el dial solo define cuándo se apaga. Aumentar la diferencia de temperatura objetivo alarga el ciclo de trabajo.
```

### 5 — pregunta 5

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["calor_especifico", "leche"]

variables:
  masa: random(1, 3) * 1000
  t_inicial: random(25, 30)
  t_final: random(4, 6)
  c_leche: 3800

respuesta: redondear(masa * c_leche * (t_inicial - t_final) / 1000, 2)
tipo: input

enunciado: "¿Cuántos kJ se liberan al enfriar {redondear(masa / 1000, 1)} kg de leche de {t_inicial} °C a {t_final} °C? (c_leche = 3800 J/kg°C)."

explicacion: |
  Q = m·c·ΔT. ΔT es la diferencia de temperatura. El resultado se expresa en kJ.
```

### 6 — pregunta 6

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["masa_termica", "eficiencia"]

respuesta: |
  "masa_termica"
tipo: completar

enunciado: "Una heladera llena mantiene mejor la temperatura porque tiene mayor ___, que absorbe y libera calor lentamente."

explicacion: |
  La masa térmica (inercia térmica) de los alimentos y el agua amortigua los cambios de temperatura al abrir la puerta.
```

### 7 — pregunta 7

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["ciclo", "compresor"]

variables:
  horas: 24
  ciclos_vacia: random(12, 18)
  ciclos_llena: random(6, 9)

respuesta: ciclos_vacia - ciclos_llena
tipo: input

enunciado: "Si una heladera vacía hace {ciclos_vacia} ciclos de compresor por día y una llena hace {ciclos_llena}, ¿cuántos ciclos menos hace la llena?"

explicacion: |
  La heladera llena tiene menor fluctuación térmica, por lo que el compresor se enciende menos veces. Menos arranques = menor gasto energético.
```

### 8 — pregunta 8

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["disipacion", "mantenimiento"]

respuesta: verdadero
tipo: vf

enunciado: "Dejar espacio entre la heladera y la pared mejora la eficiencia energética."

explicacion: |
  Verdadero. El condensador libera calor por atrás. Si está pegado a la pared, el calor se acumula y el compresor debe trabajar más para disiparlo.
```

### 9 — pregunta 9

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "avanzado"
  tags: ["cambio_fase", "energia"]

variables:
  masa: random(1, 3) * 1000
  t_inicial: 20
  t_final: -5
  c_agua: 4186
  c_hielo: 2090
  l_fusion: 334000

respuesta: redondear((masa * c_agua * (t_inicial - 0) + masa * l_fusion + masa * c_hielo * (0 - t_final)) / 1000, 2)
tipo: input

enunciado: "Energía total en kJ para enfriar {redondear(masa / 1000, 1)} kg de agua de {t_inicial}°C a {t_final}°C (incluyendo congelación)."

explicacion: |
  Se suma: 1) enfriamiento agua a 0°C, 2) cambio de fase (l_fusion), 3) enfriamiento hielo a t_final.
```

### 10 — pregunta 10

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["comparacion", "materiales"]

variables:
  m_agua: random(5, 10)
  c_agua: 4186
  m_arena: random(5, 10)
  c_arena: 800

respuesta: redondear((m_agua * c_agua) / (m_arena * c_arena), 1)
tipo: input

enunciado: "¿Cuántas veces mayor es la capacidad calorífica de {m_agua} kg de agua comparada con {m_arena} kg de arena? (c_arena = 800, c_agua = 4186)."

explicacion: |
  La relación de capacidades caloríficas determina cuánta energía se requiere para cambiar la temperatura de cada material.
```

### 11 — pregunta 11

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["habitos", "eficiencia"]

respuesta: |
  "aire_caliente"
tipo: completar

enunciado: "Dejar la puerta abierta introduce ___, que la heladera debe volver a enfriar, gastando más energía."

explicacion: |
  El aire caliente del ambiente entra en contacto con el interior frío, aumentando la carga térmica y activando el compresor.
```

### 12 — pregunta 12

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["economia", "consumo"]

variables:
  ciclos: random(5, 10)
  energia_por_ciclo: 0.15
  precio_kwh: random(80, 120)

respuesta: redondear(ciclos * energia_por_ciclo * precio_kwh, 2)
tipo: input

enunciado: "Si llenar la heladera reduce {ciclos} ciclos de compresor por día, y cada ciclo cuesta {energia_por_ciclo} kWh a ${precio_kwh}/kWh, ¿cuánto se ahorra por día?"

explicacion: |
  Ahorro = (ciclos ahorrados) * (energía por ciclo) * (precio por kWh).
```

### 13 — pregunta 13

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["freezer", "masa_termica"]

respuesta: verdadero
tipo: vf

enunciado: "El mismo principio de masa térmica que aplica a la heladera también se aplica a un freezer lleno versus uno vacío."

explicacion: |
  Verdadero. Los alimentos congelados actúan como masa térmica, estabilizando la temperatura interna y reduciendo la frecuencia de arranque del compresor.
```

### 14 — pregunta 14

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["termostato", "ciclo"]

variables:
  t_corte: random(2, 5)
  t_apertura: random(-2, 0)
  rango: t_corte - t_apertura

respuesta: rango
tipo: input

enunciado: "Si el compresor se apaga a {t_corte}°C y se enciende al subir a {t_apertura}°C, ¿cuál es el rango de temperatura (delta T) del ciclo?"

explicacion: |
  El rango de histeresis del termostato es la diferencia entre la temperatura de corte y la de rearme.
```

### 15 — pregunta 15

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["materiales", "plastico_vs_vidrio"]

variables:
  m_vidrio: random(1, 3)
  c_vidrio: 840
  m_plastico: random(1, 3)
  c_plastico: 1600

respuesta: redondear((m_vidrio * c_vidrio) / (m_plastico * c_plastico), 2)
tipo: input

enunciado: "Relación de capacidad calorífica entre {m_vidrio} kg de vidrio y {m_plastico} kg de plástico. (c_vidrio=840, c_plastico=1600)."

explicacion: |
  Se compara la energía necesaria para cambiar la temperatura de ambos materiales de igual masa.
```

### 16 — pregunta 16

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["mitos", "metodos"]

respuesta: |
  "falso"
tipo: completar

enunciado: "Verdadero o Falso: Poner botellas de agua congelada en una heladera vacía es ineficiente. Respuesta: ___"

explicacion: |
  Falso. Es una recomendación válida para aumentar la masa térmica y estabilizar la temperatura.
```

### 17 — pregunta 17

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["aire", "calor_especifico"]

variables:
  volumen: random(10, 20)
  densidad_aire: 1.2
  delta_t: random(10, 15)
  c_aire: 1005

respuesta: redondear(volumen * densidad_aire * c_aire * delta_t / 1000, 2)
tipo: input

enunciado: "Energía en kJ para calentar {volumen} litros de aire (densidad 1.2 kg/m³) en {delta_t}°C. (c_aire = 1005 J/kg°C)."

explicacion: |
  Masa = volumen (en m³) * densidad. Luego Q = m·c·ΔT. Convertir a kJ.
```

### 18 — pregunta 18

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["mitos", "termostato"]

respuesta: falso
tipo: vf

enunciado: "Poner el dial al máximo reduce el tiempo de enfriamiento inicial significativamente."

explicacion: |
  Falso. El compresor tiene potencia fija. El dial solo cambia el punto de apagado, alargando el ciclo total.
```

### 19 — pregunta 19

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["equivalencia", "masa_termica"]

variables:
  m_agua: random(5, 10)
  c_agua: 4186
  c_piedra: 800

respuesta: redondear((m_agua * c_agua) / c_piedra, 1)
tipo: input

enunciado: "¿Cuántos kg de piedra (c=800) tienen la misma capacidad calorífica que {m_agua} kg de agua (c=4186)?"

explicacion: |
  Se igualan las capacidades caloríficas: m_agua * c_agua = m_piedra * c_piedra. Se despeja m_piedra.
```

### 20 — pregunta 20

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["ahorro", "agua"]

variables:
  botellas: random(4, 8)
  masa_botella: 0.5
  c_agua: 4186
  delta_t: 10

respuesta: redondear(botellas * masa_botella * c_agua * delta_t / 1000, 2)
tipo: input

enunciado: "Energía en kJ estabilizada por {botellas} botellas de {masa_botella} kg cada una, ante un delta_t de {delta_t}°C."

explicacion: |
  La masa total de agua actúa como amortiguador térmico. Q = m_total * c * ΔT.
```

### 21 — pregunta 21

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["habitos", "eficiencia"]

respuesta: verdadero
tipo: vf

enunciado: "Mantener la puerta cerrada minimiza la entrada de aire caliente."

explicacion: |
  Verdadero. Cada apertura introduce aire caliente que debe ser enfriado, aumentando el consumo.
```

### 22 — pregunta 22

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["tiempo", "ciclo"]

variables:
  t_inicial: 10
  t_final: 4
  delta_t: t_inicial - t_final
  tasa_enfriamiento: 2

respuesta: redondear(delta_t / tasa_enfriamiento, 1)
tipo: input

enunciado: "Tiempo en horas para enfriar de {t_inicial}°C a {t_final}°C con una tasa de {tasa_enfriamiento}°C/h."

explicacion: |
  Tiempo = ΔT / tasa. Útil para estimar la duración del ciclo de compresión.
```

### 23 — pregunta 23

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["mitos", "eficiencia"]

respuesta: |
  "ineficiente"
tipo: completar

enunciado: "Una heladera casi vacía es más ___ porque el aire cambia de temperatura rápido."

explicacion: |
  Ineficiente. La baja masa térmica del aire hace que la temperatura fluctúe fácilmente, activando el compresor más seguido.
```

### 24 — pregunta 24

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["metal", "calor_especifico"]

variables:
  masa: random(1, 3)
  c_aluminio: 900
  delta_t: random(10, 20)

respuesta: redondear(masa * c_aluminio * delta_t / 1000, 2)
tipo: input

enunciado: "Energía en kJ para calentar {masa} kg de aluminio (c=900) en {delta_t}°C."

explicacion: |
  Q = m·c·ΔT. El aluminio tiene menor calor específico que el agua, por lo que cambia de temperatura más rápido con la misma energía.
```

### 25 — pregunta 25

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["diseño", "circulacion"]

respuesta: verdadero
tipo: vf

enunciado: "Dejar espacio entre los alimentos y las paredes internas mejora la circulación de aire frío."

explicacion: |
  Verdadero. La circulación adecuada asegura un enfriamiento uniforme y evita puntos calientes.
```

### 26 — pregunta 26

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "intermedio"
  tags: ["costo", "economia"]

variables:
  kwh_dia: random(1, 3)
  precio: random(100, 150)

respuesta: redondear(kwh_dia * precio, 2)
tipo: input

enunciado: "Costo diario en pesos si la heladera consume {kwh_dia} kWh y el precio es ${precio}/kWh."

explicacion: |
  Costo = Consumo (kWh) * Precio unitario.
```

### 27 — pregunta 27

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["mitos", "funcionamiento"]

respuesta: |
  "potencia"
tipo: completar

enunciado: "El dial no controla la ___, sino el punto de corte del termostato."

explicacion: |
  Potencia. El compresor trabaja a su capacidad nominal fija; el dial solo define cuándo se detiene.
```

### 28 — pregunta 28

```
metadata:
  materia: "Vida Cotidiana"
  tema: "eficiencia_energetica_domestica"
  nivel: "basico"
  tags: ["consejos", "eficiencia"]

respuesta: verdadero
tipo: vf

enunciado: "Colocar recipientes con agua en los espacios vacíos de una heladera poco cargada mejora la eficiencia."

explicacion: |
  Verdadero. El agua aumenta la masa térmica, estabilizando la temperatura y reduciendo los ciclos del compresor.
```
