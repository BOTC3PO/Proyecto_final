# Fisica — Calor q m c deltat (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Calor

```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "basico"
  tags: ["conceptos_basicos", "energia"]

tipo: mc
opciones_explicitas: ["Transferencia de energía térmica", "Temperatura de un cuerpo", "Energía cinética de las partículas", "Capacidad de un cuerpo para calentarse"]
respuesta: "Transferencia de energía térmica"

enunciado: "El calor se define físicamente como la ________ que fluye entre dos cuerpos con diferente temperatura."

explicacion: |
  El calor es la energía en tránsito que se transfiere de un objeto con mayor temperatura a uno con menor temperatura. No es una propiedad de los cuerpos, sino un proceso de transferencia.
```

### 2 — Calor Específico

```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "basico"
  tags: ["propiedades_materia"]

tipo: vf
respuesta: falso

enunciado: "¿El calor específico de una sustancia es una propiedad intensiva que depende de la cantidad de masa presente en el objeto?"

explicacion: |
  Falso. El calor específico es una propiedad intensiva (no depende de la masa). La propiedad que depende de la masa es la capacidad calorífica.
```

### 3 — Relación de Variables

```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "intermedio"
  tags: ["formula", "analisis"]

variables:
  datos: [[100, "aumenta", "mayor"], [50, "disminuye", "menor"]]
  escenario_idx: uno_de([0, 1])
  accion: datos[escenario_idx][1]
  resultado: datos[escenario_idx][2]

tipo: mc
opciones_explicitas: ["Proporcional", "Inversamente proporcional", "No tiene relación", "Exponencial"]
respuesta: "Proporcional"

enunciado: "Si mantenemos la masa y el calor específico constantes, la cantidad de calor (Q) es ________ a la variación de temperatura (ΔT). En nuestro caso, si la temperatura {accion}, el calor {resultado}."

explicacion: |
  Según la fórmula Q = m·c·ΔT, la cantidad de calor es directamente proporcional a la variación de temperatura.
```

### 4 — Unidades de Medida

```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "basico"
  tags: ["unidades"]

tipo: completar
respuestas_validas:
  - "calorías"
  - "Joules"

enunciado: "En el sistema internacional (SI), la unidad de energía térmica es el ________, mientras que en el sistema termoquímico se utiliza la ________."

explicacion: |
  El Joule (J) es la unidad de energía en el SI, mientras que la caloría (cal) es la unidad tradicional basada en el calentamiento del agua.
```

### 5 — Orden de Proceso Térmico

```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "intermedio"
  tags: ["proceso", "termodinamica"]

tipo: ordenar
opciones_explicitas: ["Medir temperaturas iniciales", "Calcular la diferencia de temperatura", "Multiplicar por masa y calor específico", "Determinar el calor transferido"]

enunciado: "Para resolver un problema práctico de transferencia de calor usando la fórmula Q = m·c·ΔT, el orden lógico de los pasos es:"

explicacion: |
  Primero se deben conocer los estados iniciales y finales para hallar ΔT, luego se aplican las constantes de la sustancia y la masa para obtener el resultado final.
respuesta_orden: ["Medir temperaturas iniciales", "Calcular la diferencia de temperatura", "Multiplicar por masa y calor específico", "Determinar el calor transferido"]
```

### 6 — Concepto de Calor Específico

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["calor", "propiedades_materia"]

enunciado: "El calor específico de una sustancia es una propiedad intensiva que indica la cantidad de calor necesaria para aumentar en 1 °C la temperatura de 1 kg de dicha sustancia. Si una sustancia tiene un calor específico muy alto, significa que requiere ___ energía para cambiar su temperatura."

respuestas_validas:
  - "mayor"
  - "menor"
respuesta: "mayor"
tipo: completar

explicacion: |
  El calor específico ($c$) es directamente proporcional a la cantidad de calor ($Q$) necesaria para un cambio de temperatura ($\Delta T$). A mayor $c$, más calor se requiere para calentar la sustancia.
```

### 7 — Cálculo de Calor Sensible

```
metadata:
  materia: "fisica"
  tema: "calculo_calor_sensible"
  nivel: "intermedio"
  tags: ["calor", "calculo"]

variables:
  escenario: uno_de([[100, 0.5, 20], [250, 2.0, 10], [50, 4.18, 5]])
  m: escenario[0]
  c: escenario[1]
  dt: escenario[2]

enunciado: "Calcula la cantidad de calor (Q) necesaria para calentar una masa de {m} g de una sustancia con calor específico de {c} J/(g·°C) desde una temperatura inicial de 20 °C hasta una temperatura final de {dt + 20} °C."

pasos:
  - "Identificar la masa (m = {m} g), el calor específico (c = {c} J/g°C) y la variación de temperatura (delta T = {dt} °C)."
  - "Aplicar la fórmula Q = m * c * delta T."
  - "Multiplicar: {m} * {c} * {dt}."

respuesta: m * c * dt
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Usando la fórmula Q = m * c * delta T:
  Q = {m} g * {c} J/(g·°C) * {dt} °C = {m * c * dt} J.
```

### 8 — Análisis de Variación de Temperatura

```
metadata:
  materia: "fisica"
  tema: "variacion_temperatura"
  nivel: "intermedio"
  tags: ["calor", "algebrac"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[1000, 2, 100], [2000, 2, 100], [4000, 2, 100]]
  q: datos[idx][0]
  c: datos[idx][1]
  m: datos[idx][2]
  resultados_texto: ["5 °C", "10 °C", "20 °C"]

enunciado: "Si se suministran {q} J de calor a una masa de {m} g de una sustancia con calor específico de {c} J/(g·°C), ¿cuál será la variación de temperatura (ΔT) experimentada?"

opciones_explicitas: ["5 °C", "10 °C", "20 °C", "25 °C"]
respuesta: resultados_texto[idx]
tipo: mc

explicacion: |
  Despejamos ΔT de la fórmula Q = m · c · ΔT:
  ΔT = Q / (m · c)
  Para este caso: ΔT = {q} / ({m} · {c}) = {resultados_texto[idx]}.
```

### 9 — Comparación de Sustancias

```
metadata:
  materia: "fisica"
  tema: "comparacion_calor_especifico"
  nivel: "avanzado"
  tags: ["calor", "propiedades"]

enunciado: "Considera dos bloques de la misma masa ($m$) y el mismo $\\Delta T$. El bloque A tiene un calor específico $c_A$ y el bloque B tiene $c_B$. Si $c_A > c_B$, ¿es verdadero que el bloque A absorbe más calor que el bloque B?"

opciones_explicitas: [verdadero, falso]
respuesta: verdadero
tipo: vf

explicacion: |
  Como $Q = m \cdot c \cdot \Delta T$ y la masa y la variación de temperatura son iguales, el calor $Q$ es directamente proporcional al calor específico $c$. Por lo tanto, si $c_A > c_B$, entonces $Q_A > Q_B$.
```

### 10 — Orden de Procedimiento de Cálculo

```
metadata:
  materia: "fisica"
  tema: "metodologia_calculo"
  nivel: "basico"
  tags: ["metodo", "pasos"]

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide hallar la temperatura final ($T_f$) de una sustancia tras recibir calor."

opciones_explicitas: ["Calcular la variación de temperatura ($\\Delta T$) usando $\\Delta T = Q / (m \\cdot c)$", "Identificar los datos de masa, calor específico y calor suministrado", "Sumar la variación obtenida a la temperatura inicial ($T_f = T_i + \\Delta T$)"]
respuesta_orden: ["Identificar los datos de masa, calor específico y calor suministrado", "Calcular la variación de temperatura ($\\Delta T$) usando $\\Delta T = Q / (m \\cdot c)$", "Sumar la variación obtenida a la temperatura inicial ($T_f = T_i + \\Delta T$)"]
tipo: ordenar

explicacion: |
  Para resolver problemas de termodinámica es fundamental: 1. Extraer datos, 2. Despejar la incógnita de la fórmula principal, 3. Realizar la operación final para hallar la temperatura absoluta o relativa.
```

### 11 — Confusión entre calor y temperatura

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["conceptos_basicos", "calor_vs_temperatura"]

respuesta: "calor"
tipo: "completar"
respuestas_validas:
  - "calor"

enunciado: "La energía transferida entre dos cuerpos debido a una diferencia de temperatura se denomina ___."

explicacion: |
  Es un error común confundir temperatura (medida de la energía cinética promedio de las partículas) con calor (energía en tránsito).
```

### 12 — El efecto de la masa en la transferencia térmica

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["relaciones_proporcionales"]

variables:
  escenario: uno_de([["un bloque de hierro de 1 kg", 1], ["un bloque de hierro de 5 kg", 5]])

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual"]

enunciado: "Si comparamos dos bloques del mismo material, el que tiene una masa {escenario[0]} requerirá una cantidad de energía ___ para alcanzar la misma variación de temperatura $\\Delta T$."

explicacion: |
  Como $Q = m \cdot c \cdot \Delta T$, la cantidad de calor es directamente proporcional a la masa. A mayor masa, mayor calor necesario.
```

### 13 — Interpretación del signo de $\Delta T$

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["signo_delta_t"]

respuesta: falso
tipo: vf

enunciado: "Si un cuerpo absorbe calor de su entorno, la variación de temperatura Delta T (temperatura final menos temperatura inicial) debe ser un valor negativo."

explicacion: |
  Si se absorbe calor, la temperatura aumenta, por lo tanto Delta T = T_f - T_i > 0. Un Delta T negativo indica pérdida de calor.
```

### 14 — El calor específico y la inercia térmica

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calor_especifico"]

variables:
  materiales: [["Agua", 4186, "mayor"], ["Hierro", 450, "menor"]]
  idx: uno_de([0, 1])

respuesta: materiales[idx][2]
tipo: "mc"
opciones_explicitas: ["mayor", "menor"]

enunciado: "Considerando el material {materiales[idx][0]}, su capacidad para resistir cambios de temperatura (calor específico) es ___ que la del otro material mencionado."

explicacion: |
  El calor específico es una propiedad intensiva. El agua tiene un calor específico muy alto, lo que significa que requiere mucha energía para cambiar su temperatura.
```

### 15 — Pasos para el cálculo de calor sensible

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["metodologia_calculo"]

opciones_explicitas: ["Determinar la masa del cuerpo", "Calcular la diferencia de temperaturas ΔT", "Multiplicar los valores por el calor específico c"]
respuesta_orden: ["Determinar la masa del cuerpo", "Calcular la diferencia de temperaturas ΔT", "Multiplicar los valores por el calor específico c"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para calcular la cantidad de calor Q necesaria para calentar un objeto:"

explicacion: |
  Para resolver Q = m · c · ΔT de forma correcta, primero se deben identificar los datos (masa y ΔT) y finalmente realizar la multiplicación con la constante c.
```

### 16 — Calor vs. Temperatura

```
metadata:
  materia: "fisica"
  tema: "calor_temperatura"
  nivel: "basico"
  tags: ["termodinamica", "conceptos_basicos"]

respuesta: "energia"
tipo: completar
respuestas_validas:
  - "energia"
  - "transferencia de energía"
  - "energía"

enunciado: "Mientras que la temperatura es una medida de la energía cinética promedio de las partículas de un cuerpo, el calor se define como la ___ transferida entre dos sistemas debido a una diferencia de temperatura."

explicacion: |
  La temperatura es una propiedad intensiva que mide el nivel de agitación térmica, mientras que el calor es la energía en tránsito que fluye del cuerpo de mayor temperatura al de menor temperatura.
```

### 17 — Calor Específico y Capacidad Calorífica

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calor_especifico", "propiedades_materia"]

variables:
  tipo_sustancia: uno_de(["agua", "hierro"])

opciones_explicitas:
  - "Es una propiedad extensiva (depende de la masa)."
  - "Es una propiedad intensiva (no depende de la masa)."
  - "Es la cantidad de calor necesaria para elevar 1°C a todo el objeto."

respuesta: "Es una propiedad intensiva (no depende de la masa)."
tipo: mc

enunciado: "Si comparamos dos bloques de {tipo_sustancia} de diferentes masas pero del mismo material, el calor específico de ambos será igual. Esto se debe a que el calor específico es una propiedad ________."

explicacion: |
  El calor específico es una propiedad intensiva porque solo depende de la naturaleza del material y no de la cantidad de sustancia presente.
```

### 18 — Calor Latente vs. Calor Sensible

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado"
  nivel: "intermedio"
  tags: ["calor_sensible", "calor_latente"]

respuesta: falso
tipo: vf

enunciado: "Durante un cambio de estado (como la fusión del hielo), la temperatura del sistema aumenta a medida que se le suministra calor latente."

explicacion: |
  Falso. Durante un cambio de fase, el calor suministrado se utiliza para romper los enlaces intermoleculares (calor latente) y no para aumentar la energía cinética (temperatura), por lo que la temperatura permanece constante.
```

### 19 — Relación entre Masa y Calor

```
metadata:
  materia: "fisica"
  tema: "calor_sensible"
  nivel: "basico"
  tags: ["calculo", "calor_especifico"]

variables:
  masa_kg: uno_de([0.5, 2.0])
  ce: uno_de([4186, 1340])
  dt: uno_de([10, 20])

pasos:
  - "Identificar la masa (m): {masa_kg} kg"
  - "Identificar el calor específico (c): {ce} J/(kg·K)"
  - "Identificar la variación de temperatura (ΔT): {dt} °C"
  - "Calcular Q = m * c * ΔT"

respuesta: masa_kg * ce * dt
tipo: completar
tolerancia_abs: 0.1

enunciado: "Calcula la cantidad de calor (en Joules) necesaria para elevar la temperatura de {masa_kg} kg de una sustancia con un calor específico de {ce} J/(kg·K) en {dt} °C."

explicacion: |
  Usando la fórmula Q = m · c · ΔT:
  Q = {masa_kg} * {ce} * {dt} = {masa_kg * ce * dt} J.
```

### 20 — Orden de procesos térmicos

```
metadata:
  materia: "fisica"
  tema: "transferencia_calor"
  nivel: "intermedio"
  tags: ["procesos", "termodinamica"]

opciones_explicitas:
  - "Aumento de la energía cinética molecular (Temperatura)."
  - "Transferencia de energía por contacto directo (Conducción)."
  - "Transferencia de energía por ondas electromagnéticas (Radiación)."

respuesta_orden: ["Aumento de la energía cinética molecular (Temperatura).", "Transferencia de energía por contacto directo (Conducción).", "Transferencia de energía por ondas electromagnéticas (Radiación)."]
tipo: ordenar

enunciado: "Ordena los siguientes conceptos desde el que describe un estado interno de la materia hasta los mecanismos de transferencia de energía hacia el exterior:"

explicacion: |
  Primero se describe el estado térmico interno (temperatura) y luego los mecanismos físicos (conducción, convección o radiación) por los cuales el calor se desplaza.
```

### 21 — Calor necesario para calentar agua

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["calorimetria", "calor_especifico"]

variables:
  datos: [[500, 1500], [250, 400], [1000, 2500]]
  idx: uno_de([0,1,2])
  m: datos[idx][0]
  dT: datos[idx][1]
  c_agua: 4186

respuestas_validas:
  - m * c_agua * dT / 1000
respuesta: m * c_agua * dT / 1000

tipo: completar
tolerancia_abs: 0.1

enunciado: "Se desea calentar una masa de {m} g de agua desde una temperatura inicial hasta una temperatura final tal que la diferencia de temperatura sea de {dT} °C. ¿Cuántos Joules de calor se requieren? (Use c_agua = 4186 J/kg·K)"

pasos:
  - "Identificar la masa (m) en kg: m/1000"
  - "Calcular el cambio de temperatura (ΔT)"
  - "Aplicar la fórmula Q = m * c * ΔT"

explicacion: |
  La fórmula utilizada es Q = m · c · ΔT. 
  Para el caso seleccionado: Q = {m}/1000 * 4186 * {dT} = {m * c_agua * dT / 1000} J.
```

### 22 — Comparación de capacidad térmica

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calorimetria", "comparacion"]

variables:
  nombres: ["hierro", "aluminio"]
  ces: [450, 900]
  idx: uno_de([0, 1])
  nombre: nombres[idx]
  ce: ces[idx]

respuesta: ce > 500

tipo: vf
enunciado: "El calor específico del {nombre} ({ce} J/kg·K) es mayor a 500 J/kg·K."

explicacion: |
  El calor específico del {nombre} es {ce} J/kg·K.
```

### 23 — Identificación de sustancia

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calorimetria", "identificacion"]

variables:
  datos: [["oro", 129], ["cobre", 385], ["plomo", 128]]
  idx: uno_de([0,1,2])
  ce_medido: datos[idx][1]
  nombre_real: datos[idx][0]

respuesta: "___"
opciones_explicitas: ["oro", "cobre", "plomo"]
respuestas_validas:
  - datos[idx][0]
tipo: completar

enunciado: "En un experimento, se suministra calor a una muestra desconocida y se observa que su calor específico es de {ce_medido} J/kg·K. La sustancia es ___."

explicacion: |
  Al comparar el valor medido de {ce_medido} J/kg·K con las tablas de materiales, identificamos que es {nombre_real}.
```

### 24 — Proceso de transferencia de calor

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["conceptos", "transferencia"]

respuesta: "absorbe calor"
opciones_explicitas: ["absorbe calor", "libera calor", "no cambia su temperatura"]
respuestas_validas:
  - "absorbe calor"
tipo: mc

enunciado: "Si una sustancia aumenta su temperatura de 20 °C a 50 °C, significa que la sustancia ___."

explicacion: |
  Un aumento en la temperatura implica que la sustancia ha ganado energía térmica, es decir, ha absorbido calor.
```

### 25 — Pasos para calcular el calor específico

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["metodologia", "procedimiento"]

respuesta_orden: ["Medir la masa", "Medir el cambio de temperatura", "Calcular la energía térmica"]
opciones_explicitas: ["Medir la masa", "Medir el cambio de temperatura", "Calcular la energía térmica"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar el calor específico de una sustancia mediante calorimetría, partiendo de que ya conocemos la energía Q suministrada:"

explicacion: |
  Para hallar 'c' en la fórmula Q = m·c·ΔT, primero necesitamos conocer la masa (m) y la variación de temperatura (ΔT).
```
