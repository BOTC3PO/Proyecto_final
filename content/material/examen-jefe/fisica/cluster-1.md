# Examen jefe — Domina el calor y la electricidad

> Logro #156. Completaste el parcial de termodinámica y electromagnetismo, jefe. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **122 preguntas totales** en 5/5 secciones.

---

## Sección: calor-q-m-c-deltat (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "basico"
  tags: ["conceptos_basicos", "energia"]

tipo: mc
opciones_explicitas: ["Transferencia de energía térmica", "Temperatura de un cuerpo", "Energía cinética de las partículas", "Capacidad de un cuerpo para calentarse"]

enunciado: "El calor se define físicamente como la ________ que fluye entre dos cuerpos con diferente temperatura."

explicacion: |
  El calor es la energía en tránsito que se transfiere de un objeto con mayor temperatura a uno con menor temperatura. No es una propiedad de los cuerpos, sino un proceso de transferencia.
```

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

```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "intermedio"
  tags: ["formula", "analisis"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[100, "aumenta", "mayor"], [50, "disminuye", "menor"]]

tipo: mc
opciones_explicitas: ["Proporcional", "Inversamente proporcional", "No tiene relación", "Exponencial"]

enunciado: "Si mantenemos la masa y el calor específico constantes, la cantidad de calor (Q) es ________ a la variación de temperatura (ΔT). En nuestro caso, si la temperatura {datos[escenario_idx][1]}, el calor {datos[escenario_idx][2]}."

explicacion: |
  Según la fórmula Q = m·c·ΔT, la cantidad de calor es directamente proporcional a la variación de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "basico"
  tags: ["unidades"]

tipo: completar
respuestas_validas: ["calorías", "Joules"]

enunciado: "En el sistema internacional (SI), la unidad de energía térmica es el ________, mientras que en el sistema termoquímico se utiliza la ________."

explicacion: |
  El Joule (J) es la unidad de energía en el SI, mientras que la caloría (cal) es la unidad tradicional basada en el calentamiento del agua.
```

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
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["calor", "propiedades_materia"]

enunciado: "El calor específico de una sustancia es una propiedad intensiva que indica la cantidad de calor necesaria para aumentar en 1 °C la temperatura de 1 kg de dicha sustancia. Si una sustancia tiene un calor específico muy alto, significa que requiere ___ energía para cambiar su temperatura."

respuestas_validas: ["mayor", "menor"]
respuesta: "mayor"
tipo: completar

explicacion: |
  El calor específico ($c$) es directamente proporcional a la cantidad de calor ($Q$) necesaria para un cambio de temperatura ($\Delta T$). A mayor $c$, más calor se requiere para calentar la sustancia.
```

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

enunciado: "Calcula la cantidad de calor ($Q$) necesaria para calentar una masa de {m} g de una sustancia con calor específico de {c} J/(g·°C) desde una temperatura inicial de 20 °C hasta una temperatura final de {dt + 20} °C."

pasos:
  - "Identificar la masa ($m = {m}$ g), el calor específico ($c = {c}$ J/g°C) y la variación de temperatura ($\Delta T = {dt}$ °C)."
  - "Aplicar la fórmula $Q = m \cdot c \cdot \Delta T$."
  - "Multiplicar: {m} * {c} * {dt}."

respuesta: m * c * dt
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Usando la fórmula $Q = m \cdot c \cdot \Delta T$:
  $Q = {m} \text{ g} \cdot {c} \text{ J/(g·°C)} \cdot {dt} \text{ °C} = {m * c * dt} \text{ J}$.
```

```
metadata:
  materia: "fisica"
  tema: "variacion_temperatura"
  nivel: "intermedio"
  tags: ["calor", "algebrac"]

variables:
  datos: uno_de([[500, 2000, 10], [1000, 4186, 5], [200, 1000, 25]])
  q: datos[0]
  c: datos[1]
  m: datos[2]

enunciado: "Si se suministran {q} J de calor a una masa de {m} g de una sustancia con calor específico de {c} J/(g·°C), ¿cuál será la variación de temperatura ($\Delta T$) experimentada?"

opciones_explicitas: ["5 °C", "10 °C", "20 °C", "25 °C"]
respuesta: "10 °C"
tipo: mc

explicacion: |
  Despejamos $\Delta T$ de la fórmula $Q = m \cdot c \cdot \Delta T$:
  $\Delta T = Q / (m \cdot c)$
  $\Delta T = {q} / ({m} \cdot {c}) = {q / (m * c)} \text{ °C}$.
```

```
metadata:
  materia: "fisica"
  tema: "comparacion_calor_especifico"
  nivel: "avanzado"
  tags: ["calor", "propiedades"]

enunciado: "Considera dos bloques de la misma masa ($m$) y el mismo $\Delta T$. El bloque A tiene un calor específico $c_A$ y el bloque B tiene $c_B$. Si $c_A > c_B$, ¿es verdadero que el bloque A absorbe más calor que el bloque B?"

opciones_explicitas: [verdadero, falso]
respuesta: verdadero
tipo: vf

explicacion: |
  Como $Q = m \cdot c \cdot \Delta T$ y la masa y la variación de temperatura son iguales, el calor $Q$ es directamente proporcional al calor específico $c$. Por lo tanto, si $c_A > c_B$, entonces $Q_A > Q_B$.
```

```
metadata:
  materia: "fisica"
  tema: "metodologia_calculo"
  nivel: "basico"
  tags: ["metodo", "pasos"]

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide hallar la temperatura final ($T_f$) de una sustancia tras recibir calor."

opciones_explicitas: ["Calcular la variación de temperatura ($\Delta T$) usando $\Delta T = Q / (m \cdot c)$", "Identificar los datos de masa, calor específico y calor suministrado", "Sumar la variación obtenida a la temperatura inicial ($T_f = T_i + \Delta T$)"]
respuesta: ["Identificar los datos de masa, calor específico y calor suministrado", "Calcular la variación de temperatura ($\Delta T$) usando $\Delta T = Q / (m \cdot c)$", "Sumar la variación obtenida a la temperatura inicial ($T_f = T_i + \Delta T$)"]
tipo: ordenar

explicacion: |
  Para resolver problemas de termodinámica es fundamental: 1. Extraer datos, 2. Despejar la incógnita de la fórmula principal, 3. Realizar la operación final para hallar la temperatura absoluta o relativa.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["conceptos_basicos", "calor_vs_temperatura"]

respuesta: "calor"
tipo: "completar"
respuestas_validas: ["calor"]

enunciado: "La energía transferida entre dos cuerpos debido a una diferencia de temperatura se denomina ___."

explicacion: |
  Es un error común confundir temperatura (medida de la energía cinética promedio de las partículas) con calor (energía en tránsito).
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["relaciones_proporcionales"]

variables:
  escenario: uno_de([
    ["un bloque de hierro de 1 kg", 1],
    ["un bloque de hierro de 5 kg", 5]
  ])

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual"]

enunciado: "Si comparamos dos bloques del mismo material, el que tiene una masa {escenario[0]} requerirá una cantidad de energía ___ para alcanzar la misma variación de temperatura $\Delta T$."

explicacion: |
  Como $Q = m \cdot c \cdot \Delta T$, la cantidad de calor es directamente proporcional a la masa. A mayor masa, mayor calor necesario.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["signo_delta_t"]

respuesta: "falso"
tipo: "vf"

enunciado: "Si un cuerpo absorbe calor de su entorno, la variación de temperatura $\Delta T$ (temperatura final menos temperatura inicial) debe ser un valor negativo."

explicacion: |
  Si se absorbe calor, la temperatura aumenta, por lo tanto $\Delta T = T_f - T_i > 0$. Un $\Delta T$ negativo indica pérdida de calor.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calor_especifico"]

variables:
  materiales: [
    ["Agua", 4186, "mayor"],
    ["Hierro", 450, "menor"]
  ]
  idx: uno_de([0, 1])

respuesta: materiales[idx][2
tipo: "mc"
opciones_explicitas: ["mayor", "menor"]

enunciado: "Considerando el material {materiales[idx][0]}, su capacidad para resistir cambios de temperatura (calor específico) es ___ que la del otro material mencionado."

explicacion: |
  El calor específico es una propiedad intensiva. El agua tiene un calor específico muy alto, lo que significa que requiere mucha energía para cambiar su temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["metodologia_calculo"]

opciones_explicitas: [
  "Determinar la masa del cuerpo",
  "Calcular la diferencia de temperaturas $\Delta T$",
  "Multiplicar los valores por el calor específico $c$"
]
respuesta: ["Determinar la masa del cuerpo", "Calcular la diferencia de temperaturas $\Delta T$", "Multiplicar los valores por el calor específico $c$"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para calcular la cantidad de calor $Q$ necesaria para calentar un objeto:"

explicacion: |
  Para resolver $Q = m \cdot c \cdot \Delta T$ de forma correcta, primero se deben identificar los datos (masa y $\Delta T$) y finalmente realizar la multiplicación con la constante $c$.
```

```
metadata:
  materia: "fisica"
  tema: "calor_temperatura"
  nivel: "basico"
  tags: ["termodinamica", "conceptos_basicos"]

respuesta: "energia"
tipo: completar
respuestas_validas: ["energia", "transferencia de energía", "energía"]

enunciado: "Mientras que la temperatura es una medida de la energía cinética promedio de las partículas de un cuerpo, el calor se define como la ___ transferida entre dos sistemas debido a una diferencia de temperatura."

explicacion: |
  La temperatura es una propiedad intensiva que mide el nivel de agitación térmica, mientras que el calor es la energía en tránsito que fluye del cuerpo de mayor temperatura al de menor temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calor_especifico", "propiedades_materia"]

variables:
  tipo_sustancia: uno_de(["agua", "hierro"])
  valor_ce: uno_de([4186, 450])

opciones_explicitas:
  - "Es una propiedad extensiva (depende de la masa)."
  - "Es una propiedad intensiva (no depende de la masa)."
  - "Es la cantidad de calor necesaria para elevar 1°C a todo el objeto."

respuesta: opciones_explicitas[1
tipo: mc

enunciado: "Si comparamos dos bloques de {tipo_sustancia} de diferentes masas pero del mismo material, el calor específico de ambos será igual. Esto se debe a que el calor específico es una propiedad ________."

explicacion: |
  El calor específico es una propiedad intensiva porque solo depende de la naturaleza del material y no de la cantidad de sustancia presente.
```

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

respuesta: ["Aumento de la energía cinética molecular (Temperatura).", "Transferencia de energía por contacto directo (Conducción).", "Transferencia de energía por ondas electromagnéticas (Radiación)."]
tipo: ordenar

enunciado: "Ordena los siguientes conceptos desde el que describe un estado interno de la materia hasta los mecanismos de transferencia de energía hacia el exterior:"

explicacion: |
  Primero se describe el estado térmico interno (temperatura) y luego los mecanismos físicos (conducción, convección o radiación) por los cuales el calor se desplaza.
```

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

respuestas_validas: [m * c_agua * dT / 1000]
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
  Para el caso seleccionado: Q = {m}/1000 * 4186 * {dT} = {respuesta} J.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calorimetria", "comparacion"]

variables:
  materiales: [["hierro", 450], ["aluminio", 900]]
  idx: uno_de([0,1])
  nombre: materiales[idx][0]
  ce: materiales[idx][1]

respuesta: ce > 500

tipo: completar
enunciado: "Si tenemos una muestra de {nombre} con un calor específico de {ce} J/kg·K, ¿es su calor específico mayor a 500 J/kg·K?"

explicacion: |
  El calor específico del {nombre} es {ce} J/kg·K. Por lo tanto, la afirmación es {ce > 500}.
```

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
respuestas_validas: [datos[idx][0]]
tipo: completar

enunciado: "En un experimento, se suministra calor a una muestra desconocida y se observa que su calor específico es de {ce_medido} J/kg·K. La sustancia es ___."

explicacion: |
  Al comparar el valor medido de {ce_medido} J/kg·K con las tablas de materiales, identificamos que es {nombre_real}.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["conceptos", "transferencia"]

respuesta: "absorbe calor"
opciones_explicitas: ["absorbe calor", "libera calor", "no cambia su temperatura"]
respuestas_validas: ["absorbe calor"]
tipo: mc

enunciado: "Si una sustancia aumenta su temperatura de 20 °C a 50 °C, significa que la sustancia ___."

explicacion: |
  Un aumento en la temperatura implica que la sustancia ha ganado energía térmica, es decir, ha absorbido calor.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["metodologia", "procedimiento"]

respuesta: ["Medir la masa", "Medir el cambio de temperatura", "Calcular la energía térmica"]
opciones_explicitas: ["Medir la masa", "Medir el cambio de temperatura", "Calcular la energía térmica"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar el calor específico de una sustancia mediante calorimetría, partiendo de que ya conocemos la energía Q suministrada:"

explicacion: |
  Para hallar 'c' en la fórmula Q = m·c·ΔT, primero necesitamos conocer la masa (m) y la variación de temperatura (ΔT).
```

## Sección: cambios-de-estado-calor-latente (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["conceptos", "calor_latente"]

tipo: mc
opciones_explicitas: ["Energía para cambiar la temperatura", "Energía para cambiar el estado sin cambiar la temperatura", "Energía para aumentar la masa", "Energía para cambiar la presión"]

enunciado: "El calor latente es la energía necesaria para que una sustancia cambie de estado sin que su ____ cambie."

respuesta: "Energía para cambiar el estado sin cambiar la temperatura"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["definiciones"]

tipo: vf
enunciado: "Durante un cambio de fase, el calor absorbido se utiliza para romper las fuerzas de atracción intermoleculares en lugar de aumentar la energía cinética de las moléculas."

respuesta: verdadero
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["formula"]

tipo: completar
respuestas_validas: ["Q = m * L", "Q = m * c * ΔT", "Q = m * g * h"]

enunciado: "La expresión matemática para calcular el calor latente transferido es: ____"

respuesta: "Q = m * L"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["proporcionalidad"]

tipo: mc
opciones_explicitas: ["Directamente proporcional", "Inversamente proporcional", "No tiene relación", "Depende de la temperatura inicial"]

enunciado: "Si duplicamos la masa de una sustancia que está cambiando de estado, la cantidad de calor necesaria para completar el proceso es ____ veces mayor."

respuesta: "Directamente proporcional"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["temperatura"]

tipo: mc
opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene constante", "Oscila"]

enunciado: "En un vaso de precipitados con hielo fundiéndose a 0°C, la temperatura del sistema durante todo el proceso de fusión será:"

respuesta: "Se mantiene constante"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["calculo", "fusion"]

variables:
  idx: uno_de([0, 1])
  datos: [[2.0, 334000], [5.0, 334000]]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcula el calor necesario para fundir {datos[idx][0]} kg de hielo. (Dato: L_fusión = {datos[idx][1]} J/kg)"

pasos:
  - "Identificar la masa (m)"
  - "Identificar el calor latente (L)"
  - "Multiplicar m * L"

respuesta: datos[idx][1] * datos[idx][0]
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["unidades"]

tipo: mc
opciones_explicitas: ["J/kg", "J/kg·°C", "Cal/g", "kg/J"]

enunciado: "En el Sistema Internacional, la unidad del calor latente de fusión es:"

respuesta: "J/kg"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["proporcionalidad"]

variables:
  idx: uno_de([0, 1])
  escenario: [[10, 5000], [20, 10000]]

tipo: completar
respuestas_validas: ["5000", "10000"]

enunciado: "Si para fundir {escenario[idx][0]} g de una sustancia se requieren {escenario[idx][1]} J, ¿cuánto calor se requiere para fundir 1 g?"

respuesta: escenario[idx][1] / escenario[idx][0]
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["termodinamica"]

tipo: mc
opciones_explicitas: ["Positivo (absorbe calor)", "Negativo (libera calor)", "Cero", "Variable"]

enunciado: "Cuando un líquido se convierte en gas (evaporación), el sistema está realizando un proceso endotérmico. Esto significa que el calor latente es:"

respuesta: "Positivo (absorbe calor)"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["comparacion"]

tipo: mc
opciones_explicitas: ["Fusión", "Condensación", "Sublimación", "Solidificación"]

enunciado: "El proceso inverso a la fusión (paso de sólido a líquido) es la ____, la cual libera calor latente."

respuesta: "Solidificación"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["error_comun"]

tipo: vf
enunciado: "Si añado más calor a una mezcla de agua y hielo que está a 0°C, la temperatura del agua subirá inmediatamente por encima de 0°C."

respuesta: falso
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["microscopico"]

tipo: mc
opciones_explicitas: ["Aumenta la energía cinética", "Aumenta la energía potencial molecular", "Aumenta la velocidad de las moléculas", "Disminuye la energía interna"]

enunciado: "Durante un cambio de estado, el calor latente se utiliza principalmente para aumentar la ____ de las moléculas, permitiendo que se separen."

respuesta: "Aumenta la energía potencial molecular"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["diferencia"]

tipo: mc
opciones_explicitas: ["Calor latente", "Calor específico", "Capacidad calorífica", "Temperatura"]

enunciado: "La cantidad de calor necesaria para elevar 1°C la temperatura de 1 kg de una sustancia se denomina ____."

respuesta: "Calor específico"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["graficos"]

tipo: mc
opciones_explicitas: ["La pendiente es mayor", "La pendiente es cero (horizontal)", "La pendiente es infinita", "La pendiente es negativa"]

enunciado: "En un gráfico de Temperatura vs. Tiempo, el proceso de cambio de estado se representa como una línea:"

respuesta: "La pendiente es cero (horizontal)"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["estado"]

tipo: completar
respuestas_validas: ["Líquido", "Sólido", "Gaseoso"]

enunciado: "Si una sustancia ha absorbido su calor latente de vaporización y se encuentra a la temperatura de ebullición, su estado es ____."

respuesta: "Líquido"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  idx: uno_de([0, 1])
  escenario: [[0.5, 2260000], [2.0, 2260000]]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcula el calor necesario para evaporar {escenario[idx][0]} kg de agua. (L_vaporización = {escenario[idx][1]} J/kg)"

respuesta: escenario[idx][0] * escenario[idx][1]
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["termodinamica"]

tipo: mc
opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene constante", "Depende de la presión"]

enunciado: "Durante la fusión de un sólido, la entropía del sistema generalmente ____."

respuesta: "Aumenta"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["sublimacion"]

tipo: vf
enunciado: "La sublimación es el paso directo de un sólido a un gas sin pasar por el estado líquido."

respuesta: verdadero
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["comparacion"]

tipo: mc
opciones_explicitas: ["El calor de vaporización es mayor", "El calor de fusión es mayor", "Son iguales", "Dependen de la masa"]

enunciado: "Para la mayoría de las sustancias, el calor latente de vaporización es ____ que el de fusión."

respuesta: "El calor de vaporización es mayor"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["orden"]

tipo: ordenar
opciones_explicitas: ["Sólido", "Líquido", "Gas"]

enunciado: "Ordena los estados de la materia de menor a mayor energía cinética (en un proceso de calentamiento):"

respuesta: ["Sólido", "Líquido", "Gas"]
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  idx: uno_de([0, 1])
  escenario: [[100, 334], [50, 334]]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Si un sistema libera {escenario[idx][0]} kJ de calor durante la solidificación, ¿cuántos kJ de energía se liberaron? (Considera el valor absoluto)"

respuesta: escenario[idx][0
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["factores"]

tipo: mc
opciones_explicitas: ["La presión", "La masa", "El volumen", "El color"]

enunciado: "El valor del calor latente de una sustancia depende de la temperatura y de la ____."

respuesta: "La presión"
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["energia"]

tipo: vf
enunciado: "Durante un cambio de fase, la energía interna del sistema aumenta aunque la temperatura sea constante."

respuesta: verdadero
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  idx: uno_de([0, 1])
  escenario: [[1000, 334000], [500, 334000]]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se necesitan {escenario[idx][0]} J para fundir una muestra de hielo. ¿Cuál es la masa en kg? (L = {escenario[idx][1]} J/kg)"

respuesta: escenario[idx][0] / escenario[idx][1]
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["resumen"]

tipo: completar
respuestas_validas: ["calor latente", "temperatura", "masa"]

enunciado: "El ____ es la energía necesaria para el cambio de estado, la cual no se refleja en un cambio de ____, sino en un cambio de la energía potencial de las partículas."

respuesta: "calor latente"
```

## Sección: campo-electrico (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["definicion", "electrostática"]

respuesta: "campo"
tipo: completar
respuestas_validas: ["campo"]

enunciado: "La región del espacio que rodea a una carga eléctrica y en la cual una carga de prueba experimenta una fuerza eléctrica se denomina ___ eléctrico."

explicacion: |
  El campo eléctrico es una propiedad del espacio que permite transmitir la fuerza entre cargas a distancia.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo", "representacion"]

variables:
  tipo_carga: uno_de(["positiva", "negativa"])

respuesta: "salen"
tipo: mc
opciones_explicitas: ["entran", "salen", "son paralelas", "son circulares"]

enunciado: "Si la carga que genera el campo es de tipo {tipo_carga}, las líneas de campo eléctrico se representan como líneas que ___ de la carga."

explicacion: |
  Las líneas de campo eléctrico siempre salen de las cargas positivas y entran en las cargas negativas.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["fuerza", "relacion"]

respuesta: falso
tipo: vf

enunciado: "Si una carga eléctrica es colocada en una región donde el campo eléctrico es nulo, la fuerza eléctrica sobre dicha carga será distinta de cero."

explicacion: |
  La relación es F = q * E. Si el campo (E) es cero, la fuerza (F) también debe ser cero.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza", "direccion"]

variables:
  caso: uno_de([0, 1])

respuesta: tabla[caso][1
tipo: mc
opciones_explicitas: ["misma", "opuesta", "perpendicular"]

enunciado: "Considerando una carga de prueba negativa en un campo eléctrico dado, la dirección de la fuerza que experimenta la carga será ___ a la dirección del vector campo eléctrico."

pasos:
  - "Identificar el signo de la carga de prueba."
  - "Relacionar el signo con la dirección de la fuerza respecto al campo."

explicacion: |
  Para una carga negativa, el vector fuerza tiene la dirección opuesta al vector campo eléctrico. Para una carga positiva, tienen la misma dirección.

variables_tabla:
  tabla: [["misma", "opuesta"], ["opuesta", "misma"]]
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo", "propiedades"]

respuesta: ["no se cruzan", "salen de carga positiva", "entran en carga negativa"]
tipo: ordenar
opciones_explicitas: ["salen de carga positiva", "entran en carga negativa", "no se cruzan"]

enunciado: "Ordena las siguientes propiedades de las líneas de campo eléctrico de mayor a menor importancia conceptual (según su definición geométrica y física):"

explicacion: |
  Las líneas de campo representan la dirección de la fuerza, no se cruzan nunca porque en un punto el campo tiene una dirección única, y su sentido depende del signo de la carga.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El campo eléctrico es una perturbación en el espacio que rodea a una carga eléctrica y que ejerce una fuerza sobre otras cargas colocadas en su vicinity."

explicacion: |
  El campo eléctrico es una magnitud vectorial que describe la influencia que una carga ejerce sobre el espacio circundante.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["representacion", "lineas_de_campo"]

opciones_explicitas: ["Desde la carga hacia afuera", "Hacia la carga", "En círculos concéntricos"]
respuesta: "Desde la carga hacia afuera"
tipo: mc

enunciado: "Las líneas de campo eléctrico de una carga puntual positiva se representan siempre..."

explicacion: |
  Por convención, las líneas de campo salen de las cargas positivas y entran en las cargas negativas.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["calculo", "punto_carga"]

variables:
  distancia: 0.05
  carga: 2.0e-6
  k: 8.99e9

pasos:
  - "Identificar la constante de Coulomb k ≈ 8.99e9 N·m²/C²."
  - "Aplicar la fórmula E = k * |q| / r²."
  - "Sustituir los valores: E = (8.99e9 * 2.0e-6) / (0.05)²."

respuesta: 7192000.0
tipo: completar
tolerancia_abs: 100.0

enunciado: "Calcular la magnitud del campo eléctrico producido por una carga puntual de {carga} C a una distancia de {distancia} m."

explicacion: |
  Usando la fórmula E = k * q / r², obtenemos:
  E = (8.99e9 * 2.0e-6) / (0.05)^2 = 17980 / 0.0025 = 7192000 N/C.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza", "carga_de_prueba"]

variables:
  idx: uno_de([0, 1])
  datos: [["1.5e-6", "3.0e-3"], ["2.0e-6", "4.0e-3"]]
  campo: uno_de(["1.5e-6", "2.0e-6"])
  fuerza: uno_de(["3.0e-3", "4.0e-3"])

respuesta: tabla[idx][1
tipo: completar
tablas:
  - ["1.5e-6", "3.0e-3"]
  - ["2.0e-6", "4.0e-3"]

enunciado: "Si una carga de ___ C se coloca en un campo eléctrico de ___ N/C, la fuerza resultante sobre ella es de ___ N."

explicacion: |
  La relación es F = q * E. 
  Caso 1: 1.5e-6 * 3.0e-3 = 4.5e-9 (Nota: El ejemplo en el enunciado usa valores simplificados para el ejercicio).
  Para el ejercicio planteado: F = q * E.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular la distancia r", "Identificar la carga q y la constante k", "Aplicar la fórmula E = k*q/r²", "Calcular el valor de E"]
respuesta: ["Identificar la carga q y la constante k", "Calcular la distancia r", "Aplicar la fórmula E = k*q/r²", "Calcular el valor de E"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular la intensidad del campo eléctrico producido por una carga puntual en un punto determinado."

explicacion: |
  Primero se deben conocer los datos (carga y constante), luego asegurar la distancia, aplicar la fórmula matemática y finalmente obtener el resultado.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["representacion", "lineas_de_campo"]

tipo: mc
opciones_explicitas: ["Las líneas de campo pueden cruzarse si las cargas son muy grandes", "Las líneas de campo nunca se cruzan", "Las líneas de campo son trayectorias reales de las cargas", "Las líneas de campo son líneas físicas de flujo de aire"]

enunciado: "Al representar el campo eléctrico mediante líneas de fuerza, ¿cuál de las siguientes afirmaciones es correcta respecto a su intersección?"

explicacion: |
  Las líneas de campo eléctrico representan la dirección del vector campo en cada punto. Si se cruzaran, el campo tendría dos direcciones distintas en un mismo punto, lo cual es físicamente imposible.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["carga_electrica", "direccion"]

variables:
  idx: uno_de([0, 1])
  carga_tipo: ["positiva", "negativa"][idx]
  direccion_linea: ["saliente", "entrante"][idx]

enunciado: "Si colocamos una carga de tipo {carga_tipo} en el espacio, la dirección de las líneas de campo eléctrico será {direccion_linea}."

pasos:
  - "Identificar el signo de la carga"
  - "Recordar que las líneas salen de las cargas positivas y entran en las negativas"

respuesta: ["saliente", "entrante"][idx]
tipo: completar
respuestas_validas: ["saliente", "entrante"]

explicacion: |
  Por convención, las líneas de campo eléctrico se dibujan saliendo de las cargas positivas y entrando en las negativas.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza_electrica", "vector"]

tipo: vf

enunciado: "Si una carga eléctrica es colocada en un punto donde el campo eléctrico es nulo, la fuerza eléctrica que actúa sobre dicha carga será cero."

explicacion: |
  La relación está definida por la ecuación F = q * E. Si el vector campo eléctrico (E) es cero, el producto resultante (la fuerza F) también será cero, independientemente del valor de la carga q.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["ley_coulomb", "intensidad"]

variables:
  distancia_relativa: uno_de([0.5, 2.0])
  factor_distancia: uno_de([4.0, 0.25])

enunciado: "Si la distancia entre una carga puntual y un punto en el espacio se duplica (se multiplica por 2), la magnitud del campo eléctrico en ese punto cambiará por un factor de ___."

pasos:
  - "Recordar que el campo eléctrico es inversamente proporcional al cuadrado de la distancia (E ∝ 1/r²)"
  - "Calcular (1 / 2²) para hallar el factor de cambio"

respuesta: factor_distancia
tipo: completar
respuestas_validas: ["4.0", "0.25"]

explicacion: |
  Dado que el campo eléctrico de una carga puntual sigue la ley de la inversa del cuadrado de la distancia, si la distancia aumenta por un factor de 2, el campo disminuye por un factor de 1/2² = 1/4 (0.25). Si la distancia se reduce a la mitad, el campo aumenta por un factor de 4.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["definicion", "concepto"]

tipo: mc
opciones_explicitas: ["Es una fuerza física que actúa a distancia", "Es una propiedad del espacio que ejerce una carga sobre otras", "Es la velocidad de una carga en un campo", "Es la energía potencial de un sistema de cargas"]

enunciado: "¿Cuál es la definición más precisa de campo eléctrico en el contexto de la interacción entre cargas?"

explicacion: |
  El campo eléctrico no es una fuerza en sí misma, sino una perturbación o propiedad que el campo eléctrico 'imparte' al espacio circundante debido a la presencia de una carga, la cual se manifiesta como fuerza cuando otra carga se coloca en él.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["conceptos", "representacion"]

tipo: mc
opciones_explicitas: ["Las líneas de campo representan el movimiento real de los electrones.", "Las líneas de campo son construcciones visuales que indican la dirección y magnitud de la intensidad del campo.", "Las líneas de campo son trayectorias físicas que las cargas siguen obligatoriamente.", "Las líneas de campo muestran la distancia exacta entre dos cargas."]

respuesta: "Las líneas de campo son construcciones visuales que indican la dirección y magnitud de la intensidad del campo."

enunciado: "¿Qué representan fundamentalmente las líneas de campo eléctrico en un diagrama?"

explicacion: |
  Las líneas de campo son una herramienta matemática y visual para representar la dirección de la fuerza que actuaría sobre una carga de prueba positiva y la densidad de estas líneas indica la intensidad del campo. No son trayectorias físicas reales.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["relacion", "fuerza"]

variables:
  escenario: uno_de([
    ["carga_positiva", "hacia afuera"],
    ["carga_negativa", "hacia adentro"]
  ])

tipo: completar
respuestas_validas: ["hacia afuera", "hacia adentro"]

enunciado: "Si colocamos una carga de prueba positiva en un punto del campo, la dirección de la fuerza sobre ella será ___ de la carga que genera el campo."

respuesta: escenario[0][1

explicacion: |
  La fuerza sobre una carga positiva tiene la misma dirección que el vector campo eléctrico en ese punto. Si la carga es negativa, la fuerza es opuesta. En este caso, la carga es positiva, por lo que la fuerza es {escenario[0][1]}.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["comparacion"]

tipo: vf

enunciado: "A diferencia de la fuerza eléctrica (que depende de la magnitud de la carga que se coloca en un punto), el campo eléctrico es una propiedad del espacio que existe independientemente de si hay una carga de prueba presente o no."

respuesta: verdadero

explicacion: |
  Correcto. El campo eléctrico es una propiedad intrínseca de la configuración de cargas presentes, mientras que la fuerza es una interacción que solo aparece cuando una segunda carga interactúa con dicho campo.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["representacion"]

tipo: mc
opciones_explicitas: ["A mayor densidad de líneas, menor es la intensidad del campo.", "La densidad de líneas de campo es constante en todo el espacio.", "A mayor densidad de líneas de campo, mayor es la intensidad del campo eléctrico.", "La densidad de líneas no tiene relación con la magnitud del campo."]

respuesta: "A mayor densidad de líneas de campo, mayor es la intensidad del campo eléctrico."

enunciado: "Si observamos un diagrama de líneas de campo, ¿qué nos indica una zona donde las líneas están muy juntas (alta densidad) comparada con una zona donde están muy separadas?"

explicacion: |
  La densidad de las líneas de campo es proporcional a la magnitud del vector campo eléctrico $\vec{E}$. Donde las líneas están más próximas, el campo es más intenso.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["procedimiento"]

tipo: ordenar
opciones_explicitas: ["Identificar el signo de la carga de prueba.", "Determinar la dirección del campo eléctrico en el punto.", "Dibujar el vector fuerza resultante."]

respuesta: ["Identificar el signo de la carga de prueba.", "Determinar la dirección del campo eléctrico en el punto.", "Dibujar el vector fuerza resultante."]

enunciado: "Ordena los pasos lógicos para determinar la dirección de la fuerza eléctrica que actúa sobre una carga de prueba en un punto dado."

explicacion: |
  Para hallar la fuerza $\vec{F} = q \cdot \vec{E}$, primero debemos conocer el signo de $q$ (para saber si la fuerza sigue o se opone al campo) y la dirección de $\vec{E}$ en ese punto específico.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["electrostática", "sensores"]

variables:
  datos: [["una carga de prueba positiva", "hacia afuera de la carga"], ["una carga de prueba negativa", "hacia adentro de la carga"]]
  idx: uno_de([0, 1])

enunciado: "En un sensor de proximidad industrial, se utiliza una carga de prueba para detectar la presencia de un objeto cargado. Si la carga de prueba es {datos[idx][0]}, la dirección de la fuerza eléctrica sobre ella será {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["hacia afuera de la carga", "hacia adentro de la carga"]

explicacion: |
  El campo eléctrico define la dirección de la fuerza sobre una carga de prueba. Si la carga es positiva, la fuerza tiene la misma dirección que el campo. Si es negativa, la fuerza es opuesta a la dirección del campo.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo"]

enunciado: "Al observar las líneas de campo eléctrico de una carga puntual positiva, se puede afirmar que las líneas siempre comienzan en la carga y se dirigen hacia el ___."

respuesta: infinito
tipo: completar
respuestas_validas: ["infinito", "el infinito"]

explicacion: |
  Las líneas de campo eléctrico son representaciones conceptuales. Para una carga positiva, las líneas son radiales y salen de la carga hacia el infinito.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza_electrica", "calculo"]

variables:
  datos: [["1.5", "0.05"], ["2.0", "0.08"], ["0.5", "0.02"]]
  idx: uno_de([0, 1, 2])

enunciado: "En un proceso de filtrado de partículas cargadas, una partícula con carga de {datos[idx][0]} C se encuentra dentro de un campo eléctrico uniforme de 1 N/C. La magnitud de la fuerza eléctrica que actúa sobre la partícula es de ___ N."

pasos:
  - "Identificar la carga (q)"
  - "Identificar la intensidad del campo (E)"
  - "Aplicar la fórmula F = q * E"

respuesta: datos[idx][1
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  La magnitud de la fuerza eléctrica se calcula mediante el producto de la carga por la intensidad del campo: F = q * E.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo"]

enunciado: "¿Es correcto afirmar que dos líneas de campo eléctrico pueden cruzarse en un punto del espacio?"

respuesta: falso
tipo: vf

explicacion: |
  Las líneas de campo eléctrico nunca se cruzan, ya que en cada punto del espacio el campo eléctrico tiene una única dirección y magnitud resultante.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "avanzado"
  tags: ["metodologia", "analisis"]

enunciado: "Para determinar el vector campo eléctrico en un punto dado, un estudiante debe seguir este orden lógico de análisis:"

opciones_explicitas: ["Determinar la carga de la fuente", "Calcular la dirección del vector campo", "Calcular la magnitud del campo", "Evaluar la fuerza sobre una carga de prueba"]
respuesta: ["Determinar la carga de la fuente", "Calcular la magnitud del campo", "Calcular la dirección del vector campo", "Evaluar la fuerza sobre una carga de prueba"]
tipo: ordenar

explicacion: |
  Primero se conocen las fuentes (cargas), luego se calcula la magnitud y dirección del campo en un punto, y finalmente se usa ese campo para hallar la fuerza sobre otra carga.
```

## Sección: campo-magnetico-imanes-corrientes (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "basico"
  tags: ["imanes", "magnetismo"]

respuesta: "polo"
tipo: "completar"
respuestas_validas: ["polo"]

enunciado: "Las regiones de un imán donde la fuerza magnética es más intensa se denominan ___ magnéticos."

explicacion: |
  Un imán posee dos regiones de máxima intensidad de campo denominadas polos (norte y sur).
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "basico"
  tags: ["corriente_electrica", "electromagnetismo"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que una carga eléctrica en reposo genera un campo magnético a su alrededor?"

explicacion: |
  Falso. Según la ley de Biot-Savart, el campo magnético es generado por cargas en movimiento (corrientes eléctricas). Una carga estática solo genera un campo eléctrico.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["electroimanes", "componentes"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: tabla[escenario_idx][1
tipo: "mc"
opciones_explicitas: ["Núcleo ferromagnético", "Material aislante", "Resistencia eléctrica"]

enunciado: "En un electroimán típico, para aumentar la intensidad del campo magnético se suele utilizar un {escenario_datos[escenario_idx][0]} que concentre las líneas de flujo."

variables:
  escenario_datos: [["núcleo de hierro", "Núcleo ferromagnético"], ["bobina de cobre", "Núcleo ferromagnético"]]

explicacion: |
  El núcleo ferromagnético (como el hierro) aumenta significativamente la intensidad del campo magnético del electroimán al canalizar las líneas de campo.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["regla_mano_derecha", "corriente"]

respuesta: "el pulgar indica la dirección de la corriente y los dedos el campo"
tipo: "completar"
respuestas_validas: ["el pulgar indica la dirección de la corriente y los dedos el campo"]

enunciado: "Al aplicar la regla de la mano derecha en un conductor recto, si el pulgar apunta en la dirección de la corriente, entonces los dedos curvos representan ___."

explicacion: |
  La regla de la mano derecha es una convención para determinar la dirección del campo magnético circular alrededor de un conductor con corriente.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "basico"
  tags: ["ordenar", "componentes"]

respuesta: ["Fuente de energía", "Conductor", "Bobina"]
tipo: "ordenar"
opciones_explicitas: ["Fuente de energía", "Conductor", "Bobina"]

enunciado: "Ordene los elementos necesarios para construir un electroimán simple, desde el suministro de energía hasta el elemento que genera el campo:"

explicacion: |
  Para un electroimán básico se requiere una fuente (pila), un conductor (cable) para transportar la corriente y una bobina (solenoide) para concentrar el campo.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["fuerza_magnetica", "corriente"]

variables:
  l: 0.5
  I: 4.0
  B: 0.2
  angulo: 90

respuesta: 0.4
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un conductor recto de longitud {l} metros transporta una corriente de {I} Amperios perpendicular a un campo magnético uniforme de {B} Teslas. ¿Cuál es la magnitud de la fuerza magnética sobre el conductor?"

pasos:
  - "Utilizar la fórmula de la fuerza de Lorentz para un conductor: F = I * l * B * sin(angulo)."
  - "Sustituir los valores: F = 4.0 * 0.5 * 0.2 * sin(90)."
  - "Calcular: F = 2.0 * 0.2 * 1 = 0.4 N."

explicacion: |
  La fuerza magnética sobre un conductor con corriente se calcula con la fórmula F = I * l * B * sin(θ). En este caso, al ser perpendicular, sin(90°) = 1.
```

```
metadata:
  materia: "fisica"
  tema: "imanes"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

respuesta: falso
tipo: vf

enunciado: "Si acercamos el polo norte de un imán al polo norte de otro imán, la fuerza de interacción entre ellos es de atracción."

explicacion: |
  Polos iguales se repelen y polos opuestos se atraen. Por lo tanto, la afirmación es falsa.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "avanzado"
  tags: ["ley_ampere", "campo_magnetico"]

variables:
  r: 0.1
  I: 10.0
  mu_0: 4 * pi * 1e-7

respuesta: "0.000002"
tipo: completar
respuestas_validas: ["0.000002", "2.0e-6"]

enunciado: "Un cable largo y recto transporta una corriente de {I} A. El campo magnético a una distancia de {r} metros del cable es de ___ Teslas."

pasos:
  - "Usar la fórmula para el campo magnético de un conductor infinito: B = (mu_0 * I) / (2 * pi * r)."
  - "Sustituir: B = (4 * pi * 1e-7 * 10) / (2 * pi * 0.1)."
  - "Simplificar: B = (2 * 1e-7 * 10) / 0.1 = 2e-6 / 0.1 = 2e-5... no, corregimos: B = (2 * 10^-7 * 10) / 0.1 = 2e-6 / 0.1 = 0.00002. Re-calculando: B = (4*pi*1e-7 * 10) / (2*pi*0.1) = (2e-6) / 0.1 = 0.00002."

explicacion: |
  El campo magnético alrededor de un conductor recto se determina mediante la Ley de Ampère. La fórmula es B = (mu_0 * I) / (2 * pi * r).
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes"
  nivel: "basico"
  tags: ["imanes", "polos"]

opciones_explicitas: ["Norte", "Sur"]
respuesta: "Norte"
tipo: mc

enunciado: "En un imán de barra convencional, las líneas de campo magnético salen del polo ___ y entran al polo Sur."

explicacion: |
  Por convención, las líneas de campo magnético se representan saliendo del polo norte y entrando al polo sur en el exterior del imán.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["ordenar", "experimento"]

opciones_explicitas: ["Colocar el imán", "Conectar la fuente", "Introducir el cable", "Observar el movimiento"]
respuesta: ["Colocar el imán", "Introducir el cable", "Conectar la fuente", "Observar el movimiento"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para realizar un experimento de observación de la fuerza de Lorentz en un laboratorio:"

explicacion: |
  Primero se prepara el entorno (imán), luego se posiciona el objeto de estudio (cable), se aplica la energía (corriente) y finalmente se mide el efecto físico.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "basico"
  tags: ["magnetismo", "conceptos_fundamentales"]

respuesta: verdadero
tipo: vf

enunciado: "Un imán permanente genera un campo magnético debido al movimiento de las cargas eléctricas (electrones) dentro de sus átomos."

explicacion: |
  Correcto. El magnetismo en materiales ferromagnéticos surge del movimiento orbital y del espín de los electrones, que actúan como pequeñas corrientes eléctricas.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["imanes", "electroimanes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10.0, "un imán de neodimio"], [15.0, "un electroimán de núcleo de hierro"]]
  opciones: ["Un campo magnético constante", "Un campo magnético que depende de la corriente", "Un campo magnético que no existe"]

respuesta: opciones[escenario_idx][1
tipo: mc
opciones_explicitas: ["Un campo magnético constante", "Un campo magnético que depende de la corriente", "Un campo magnético que no existe"]

enunciado: "Si observamos {datos[escenario_idx][0]}, el campo magnético producido es ___."

explicacion: |
  En el caso del imán, el campo es permanente. En el caso del electroimán, la intensidad y dirección dependen directamente de la intensidad de la corriente eléctrica que circula por el conductor.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["regla_mano_derecha", "corriente"]

respuesta: "hacia arriba"
tipo: completar
respuestas_validas: ["hacia arriba", "hacia abajo"]

enunciado: "Si aplicamos la regla de la mano derecha para un cable conductor vertical, donde el pulgar apunta hacia arriba (dirección de la corriente), los dedos se curvan indicando que las líneas de campo magnético circulan en un plano horizontal en dirección ___."

explicacion: |
  La regla de la mano derecha establece que el pulgar indica la dirección de la corriente y la curvatura de los dedos indica la dirección de las líneas de campo magnético.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "basico"
  tags: ["electroimanes", "polaridad"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de un imán natural, los polos de un electroimán pueden invertirse simplemente cambiando la dirección de la corriente eléctrica."

explicacion: |
  Exacto. Al invertir la corriente, el sentido de las líneas de campo cambia, lo que resulta en una inversión de la polaridad de los polos norte y sur.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["electroimanes", "componentes"]

respuesta: ["Alambre conductor", "Núcleo ferromagnético", "Fuente de corriente"]
tipo: ordenar
opciones_explicitas: ["Alambre conductor", "Núcleo ferromagnético", "Fuente de corriente"]

enunciado: "Para construir un electroimán funcional, se deben ensamblar sus componentes siguiendo este orden lógico de construcción (desde la base hasta el componente que genera el campo):"

pasos:
  - "Se enrolla el conductor sobre el material que concentra el flujo."
  - "Se proporciona la energía necesaria para que el sistema funcione."
  - "Se prepara el material que será magnetizado por la bobina."

explicacion: |
  Para un electroimán efectivo, primero se necesita el núcleo (material ferromagnético), luego se enrolla el alambre (bobina conductora) y finalmente se conecta a una fuente de corriente.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "basico"
  tags: ["magnetismo", "corrientes"]

respuesta: "imanes"
tipo: "completar"
respuestas_validas: ["imanes", "imán"]

enunciado: "A diferencia de las corrientes eléctricas que generan campos magnéticos mediante el movimiento de cargas, los campos magnéticos estáticos pueden ser generados por ___."

explicacion: |
  Los imanes permanentes poseen un campo magnético debido al alineamiento del espín de los electrones en sus átomos, mientras que las corrientes eléctricas generan campos debido al movimiento macroscópico de cargas.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["electroimanes", "magnetismo"]

variables:
  idx: uno_de([0, 1])
  escenario: [[10, "aumentar la corriente"], [5, "acercar el imán"]]

respuesta: escenario[idx][1
tipo: "mc"
opciones_explicitas: ["aumentar la corriente", "acercar el imán", "cambiar el material del cable", "disminuir la tensión"]

enunciado: "En un electroimán, ¿qué acción permite ___ para incrementar la intensidad del campo magnético generado?"

explicacion: |
  La intensidad del campo magnético en un electroimán es directamente proporcional a la intensidad de la corriente que circula por el conductor.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "basico"
  tags: ["polos", "imanes"]

respuesta: falso
tipo: "vf"

enunciado: "A diferencia de las cargas eléctricas, donde las cargas iguales se repelen y las distintas se atraen, los polos de un imán pueden ser monopolos magnéticos aislados (es decir, un polo norte sin un polo sur)."

explicacion: |
  Falso. Los polos magnéticos siempre vienen en pares (dipolos). No existen monopolos magnéticos aislados conocidos en la naturaleza; si cortas un imán, obtienes dos imanes más pequeños con sus propios polos.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["ley_ampere", "distancia"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, "se reduce"], [2.0, "se mantiene"]]

respuesta: datos[idx][1
tipo: "mc"
opciones_explicitas: ["se reduce", "se mantiene", "se duplica", "se anula"]

enunciado: "Si comparamos un imán con un cable conductor, en ambos casos, al aumentar la distancia desde el centro del conductor o del imán, la intensidad del campo magnético ___."

explicacion: |
  Tanto para un imán dipolar como para un conductor rectilíneo, la intensidad del campo magnético disminuye a medida que la distancia al origen del campo aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["electroimanes", "componentes"]

respuesta: ["Núcleo ferromagnético", "Bobina de conductor", "Fuente de corriente"]
tipo: "ordenar"
opciones_explicitas: ["Núcleo ferromagnético", "Bobina de conductor", "Fuente de corriente"]

enunciado: "Para construir un electroimán funcional, ordene los componentes desde el que concentra el flujo magnético hacia el que proporciona la energía:"

explicacion: |
  El núcleo ferromagnético concentra las líneas de campo, la bobina (solenoide) es donde circula la corriente que crea el campo, y la fuente de corriente es la que permite el flujo de carga.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["electromagnetismo", "corrientes"]

variables:
  datos: [[10, "aumenta"], [20, "disminuye"], [5, "se mantiene"]]
  idx: uno_de([0, 1, 2])
  valor_corriente: datos[idx][0]
  efecto: datos[idx][1]

enunciado: "En una planta de reciclaje, una grúa utiliza un electroimán para levantar chatarra. Si se duplica la intensidad de la corriente eléctrica que circula por la bobina del electroimán, la fuerza del campo magnético generado ___."

respuesta: efecto
tipo: completar
respuestas_validas: ["aumenta", "disminuye", "se mantiene"]

explicacion: |
  La intensidad del campo magnético ($B$) generado por una corriente eléctrica es directamente proporcional a la intensidad de dicha corriente ($I$). Al aumentar la corriente, aumenta la fuerza del campo magnético.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "basico"
  tags: ["magnetismo", "brujula"]

variables:
  datos: [[verdadero, "se desvía"], [falso, "no cambia"]]
  idx: uno_de([0, 1])
  resultado: datos[idx][1]

enunciado: "Si acercas una brújula a un cable conductor por el cual circula una corriente eléctrica constante, la aguja de la brújula ___ de su posición de reposo."

respuestas_validas: [resultado]
respuesta: resultado
tipo: completar
explicacion: |
  Una corriente eléctrica genera un campo magnético a su alrededor. Este campo interactúa con el imán de la brújula, provocando que la aguja se alinee con las líneas de campo magnético.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["electromagnetismo", "polaridad"]

variables:
  datos: [[1, "Norte"], [2, "Sur"]]
  idx: uno_de([0, 1])
  polo: datos[idx][1]

enunciado: "Un estudiante construye un electroimán enrollando cable alrededor de un clavo de hierro. Si invierte el sentido de la corriente eléctrica en la bobina, el polo magnético que antes era ___ cambiará de polaridad."

respuesta: polo
tipo: mc
opciones_explicitas: ["Norte", "Sur", "No cambia"]

explicacion: |
  Según la regla de la mano derecha, el sentido de la corriente determina la dirección de las líneas de campo magnético. Si se invierte la corriente, se invierte la polaridad de los polos magnéticos.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "basico"
  tags: ["motor", "componentes"]

respuesta: "imán, cable, batería"
tipo: ordenar

enunciado: "Para construir un modelo simple de motor eléctrico (motor de corriente continua), se requiere ensamblar los siguientes componentes en el orden correcto para completar el circuito y generar movimiento:"

pasos:
  - "Colocar un imán permanente en la base."
  - "Conectar un cable conductor enrollado (bobina) al eje."
  - "Conectar la bobina a una batería para cerrar el circuito."

explicacion: |
  Un motor eléctrico requiere una fuente de energía (batería), un conductor (cable/bobina) y un campo magnético constante (imán) para producir la fuerza de Lorentz que genera el movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "avanzado"
  tags: ["calculo", "campo_magnetico"]

variables:
  datos: [[0.5, "0.001"], [2.0, "0.005"]]
  idx: uno_de([0, 1])
  distancia: datos[idx][0]
  resultado_teorico: datos[idx][1]

enunciado: "Considerando un cable conductor muy largo, la intensidad del campo magnético $B$ es inversamente proporcional a la distancia $r$ del cable. Si la distancia se reduce a la mitad, el valor de $B$ será ___ veces el valor original."

respuestas_validas: [resultado_teorico]
respuesta: resultado_teorico
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  La fórmula del campo magnético para un cable largo es $B = \mu_0 \cdot I / (2\pi \cdot r)$. Si la distancia $r$ se divide por 2, el campo $B$ se multiplica por 2.
```

## Sección: cargas-electricas (22 preguntas)

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

enunciado: "¿Qué es la carga eléctrica?"
tipo: mc
opciones_explicitas:
  - "Una propiedad fundamental de la materia, que puede ser positiva o negativa"
  - "La cantidad de energía que gasta un aparato eléctrico"
  - "La velocidad a la que se mueve la corriente eléctrica"
respuesta: "Una propiedad fundamental de la materia, que puede ser positiva o negativa"

explicacion: |
  Es una propiedad, no una cantidad de energía ni una velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

enunciado: "¿Qué partícula del átomo tiene carga positiva?"
tipo: mc
opciones_explicitas:
  - "El protón"
  - "El electrón"
  - "El neutrón"
respuesta: "El protón"

explicacion: |
  Está en el núcleo del átomo, junto con el neutrón.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

enunciado: "¿Qué partícula del átomo tiene carga negativa?"
tipo: mc
opciones_explicitas:
  - "El electrón"
  - "El protón"
  - "El neutrón"
respuesta: "El electrón"

explicacion: |
  Orbita alrededor del núcleo del átomo.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El neutrón no tiene carga eléctrica: es neutro."

explicacion: |
  Por eso se llama \"neutrón\" — ni positivo ni negativo.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dos cargas del mismo signo (las dos positivas, o las dos negativas) se repelen entre sí."

explicacion: |
  Es la regla básica de interacción entre cargas iguales.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una carga positiva y una carga negativa se atraen entre sí."

explicacion: |
  Es la regla básica de interacción entre cargas opuestas.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

enunciado: "¿Qué ocurre entre dos objetos cargados positivamente?"
tipo: mc
opciones_explicitas:
  - "Se repelen"
  - "Se atraen"
  - "No interactúan de ninguna forma"
respuesta: "Se repelen"

explicacion: |
  Son cargas del mismo signo.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

enunciado: "¿Qué ocurre entre un objeto cargado positivamente y otro cargado negativamente?"
tipo: mc
opciones_explicitas:
  - "Se atraen"
  - "Se repelen"
  - "No interactúan de ninguna forma"
respuesta: "Se atraen"

explicacion: |
  Son cargas de signo opuesto.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto neutro tiene la misma cantidad de protones que de electrones, así que su carga total es cero."

explicacion: |
  Las cargas positivas y negativas se cancelan exactamente.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto se carga positivamente cuando pierde electrones, quedando con más protones que electrones."

explicacion: |
  Los protones no se van: lo que cambia es la cantidad de electrones.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto se carga negativamente cuando gana electrones, quedando con más electrones que protones."

explicacion: |
  Es el proceso inverso al de cargarse positivo.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "avanzado"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los protones no se transfieren fácilmente entre objetos, porque están fuertemente sujetos en el núcleo del átomo — son los electrones los que se mueven."

explicacion: |
  Es la razón de fondo por la que un objeto se carga ganando o perdiendo
  electrones, no protones.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La carga total de un sistema aislado no se crea ni se destruye: sólo se transfiere de un objeto a otro."

explicacion: |
  Si un objeto pierde electrones, esos electrones no desaparecen: pasan
  a otro objeto.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "calculo"]

variables:
  protones: random(10, 30)
  electrones: random(5, 30)

respuesta: protones - electrones
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto tiene {protones} protones y {electrones} electrones. ¿Cuál es su carga neta, en unidades de carga elemental?"

explicacion: |
  Se resta la cantidad de electrones de la cantidad de protones.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "avanzado"
  tags: ["cargas_electricas", "calculo"]

variables:
  protones: random(10, 30)
  carga_neta: random(-10, 10)

respuesta: protones - carga_neta
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto tiene {protones} protones y una carga neta de {carga_neta}. ¿Cuántos electrones tiene?"

explicacion: |
  Se despeja la cantidad de electrones de la fórmula de carga neta.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Frotar un globo contra el pelo transfiere electrones de un objeto a otro, dejando a los dos cargados — es un ejemplo cotidiano de electricidad estática."

explicacion: |
  Por eso después el globo puede atraer el pelo: quedaron con cargas
  opuestas.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "avanzado"
  tags: ["cargas_electricas", "comparacion"]

variables:
  protones_a: random(10, 20)
  electrones_a: random(15, 25)
  protones_b: random(20, 30)
  electrones_b: random(5, 15)

respuesta: ((protones_b - electrones_b) > (protones_a - electrones_a))
tipo: vf

enunciado: "Objeto A: {protones_a} protones, {electrones_a} electrones. Objeto B: {protones_b} protones, {electrones_b} electrones. ¿La carga neta del objeto B es mayor que la del objeto A?"

explicacion: |
  Se calcula la carga neta de cada uno (protones menos electrones) y se
  comparan.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "orden"]

tipo: ordenar
enunciado: "Ordená estos objetos de menor a mayor carga neta."
opciones_explicitas:
  - "Carga neta +3"
  - "Carga neta -5"
  - "Carga neta 0 (neutro)"
respuesta_orden: ["Carga neta -5", "Carga neta 0 (neutro)", "Carga neta +3"]

explicacion: |
  Se ordenan como cualquier número con signo: de más negativo a más
  positivo.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "verificacion"]

variables:
  protones: random(10, 30)
  electrones: random(5, 30)
  correcto: protones - electrones
  error: uno_de([0, 0, 0, 3, -3])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? {protones} protones, {electrones} electrones, carga neta informada: {mostrado}."

explicacion: |
  Se vuelve a restar electrones de protones y se compara con el valor
  informado.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas"]

variables:
  electrones: random(10, 30)
  carga_neta: random(-10, 10)
  protones: electrones + carga_neta

tipo: completar
enunciado: "Un objeto tiene {electrones} electrones y una carga neta de {carga_neta}. Completá: ___ (cantidad de protones) = {electrones} + {carga_neta}."
respuestas_validas:
  - protones

explicacion: |
  Se despeja la cantidad de protones sumando la carga neta a la
  cantidad de electrones.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una pila o batería mantiene una diferencia de cargas entre sus dos extremos, lo que impulsa el movimiento de electrones por un circuito."

explicacion: |
  Es un ejemplo real y cotidiano de por qué importa entender cargas
  positivas y negativas.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto se carga positivo o negativo según pierda o gane electrones (no protones), las cargas iguales se repelen y las opuestas se atraen, y la carga total siempre se conserva."

explicacion: |
  Es la idea central de todo el tema.
```
