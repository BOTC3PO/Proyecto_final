# Examen jefe — [PENDIENTE #746]

> Logro #746. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

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
respuesta: "Transferencia de energía térmica"

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

respuesta_orden: ["Aumento de la energía cinética molecular (Temperatura).", "Transferencia de energía por contacto directo (Conducción).", "Transferencia de energía por ondas electromagnéticas (Radiación)."]
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

respuesta: datos[idx][0]
opciones_explicitas: ["oro", "cobre", "plomo"]
respuestas_validas:
  - datos[idx][0]
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
respuestas_validas:
  - "absorbe calor"
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

respuesta_orden: ["Medir la masa", "Medir el cambio de temperatura", "Calcular la energía térmica"]
opciones_explicitas: ["Medir la masa", "Medir el cambio de temperatura", "Calcular la energía térmica"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar el calor específico de una sustancia mediante calorimetría, partiendo de que ya conocemos la energía Q suministrada:"

explicacion: |
  Para hallar 'c' en la fórmula Q = m·c·ΔT, primero necesitamos conocer la masa (m) y la variación de temperatura (ΔT).
```

## Sección: dilatacion-termica-lineal (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos_basicos", "termodinamica"]

respuesta: verdadero
tipo: vf

enunciado: "La dilatación térmica lineal es el aumento de la longitud de un cuerpo debido a un incremento en su temperatura."

explicacion: |
  Cuando la temperatura de un sólido aumenta, la energía cinética de sus átomos crece, provocando que estos vibren con mayor amplitud y ocupen un mayor espacio, lo que se traduce en un aumento de la longitud.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["coeficiente", "propiedades_materiales"]

variables:
  material_idx: uno_de([0, 1])
  datos: [[0.000012, "acero"], [0.000024, "aluminio"]]

respuesta: datos[material_idx][0]
tipo: completar
tolerancia_abs: 0.0000001

enunciado: "El coeficiente de dilatación lineal del {datos[material_idx][1]} es aproximadamente ___ (expresado en 1/°C)."

pasos:
  - "Identificar el material según el valor proporcionado."
  - "Recordar que el coeficiente depende de la naturaleza del material."

explicacion: |
  El coeficiente de dilatación lineal ($\alpha$) es una propiedad intensiva que indica cuánto se expande un material por unidad de longitud y grado de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["relaciones", "conceptos"]

opciones_explicitas: ["proporcional", "inversamente proporcional", "no tiene relación"]

respuesta: "proporcional"
tipo: mc

enunciado: "En un material sólido, el cambio en la longitud ($\\Delta L$) es ___ al cambio en la temperatura ($\\Delta T$), asumiendo un coeficiente constante."

explicacion: |
  De la fórmula $\Delta L = L_0 \cdot \alpha \cdot \Delta T$ se observa que, al mantener constantes la longitud inicial y el coeficiente, el cambio de longitud es directamente proporcional al cambio de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["formula", "terminologia"]

respuesta: ["L_0", "$\\Delta L$", "$\\alpha$", "$\\Delta T$"]
tipo: completar
respuestas_validas:
  - "L_0"
  - "$\\Delta L$"
  - "$\\alpha$"
  - "$\\Delta T$"

enunciado: "En la fórmula de la dilatación lineal $\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T$, el término ___ representa la longitud inicial, el término ___ representa la variación de longitud, el término ___ es el coeficiente de dilatación lineal y el término ___ es la variación de temperatura."

explicacion: |
  Es fundamental identificar correctamente cada variable en la ecuación fundamental de la dilatación térmica lineal.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["factores", "conceptos"]

opciones_explicitas: ["Longitud inicial y coeficiente de dilatación", "Solo la temperatura", "Masa y volumen"]

respuesta: "Longitud inicial y coeficiente de dilatación"
tipo: mc

enunciado: "¿De qué factores depende la variación de la longitud ($\\Delta L$) de una barra sólida cuando se calienta?"

explicacion: |
  La variación de longitud depende de tres factores: la longitud original del objeto ($L_0$), el coeficiente de dilatación del material ($\alpha$) y el cambio de temperatura experimentado ($\Delta T$).
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos", "termodinamica"]

respuesta: verdadero
tipo: vf

enunciado: "Si un material se calienta, su longitud inicial aumenta debido al incremento de la agitación térmica de sus átomos. ¿Es esto verdadero?"

explicacion: |
  La dilatación térmica lineal es el aumento de la longitud de un cuerpo cuando se incrementa su temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["formula", "teoria"]

opciones_explicitas: ["ΔL = L₀ * α * ΔT", "ΔL = L₀ / (α * ΔT)", "ΔL = L₀ + α + ΔT", "ΔL = α * ΔT / L₀"]
respuesta: "ΔL = L₀ * α * ΔT"
tipo: mc

enunciado: "La expresión matemática que define la variación de longitud (ΔL) en función de la longitud inicial (L₀), el coeficiente de dilatación lineal (α) y el cambio de temperatura (ΔT) es:"

explicacion: |
  La fórmula fundamental es ΔL = L₀ * α * ΔT, donde ΔL es la variación de longitud.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["calculo", "numerico"]

variables:
  L0: 10.0
  alfa: 0.000012
  deltaT: 50.0
  resultado: L0 * alfa * deltaT

respuesta: resultado
tipo: completar
tolerancia_abs: 0.0001

enunciado: "Una barra de acero tiene una longitud inicial de {L0} m. Si la temperatura aumenta en {deltaT} °C y el coeficiente de dilatación lineal del acero es de {alfa} 1/°C, ¿cuál es la variación de longitud (ΔL) en metros?"

pasos:
  - "Identificar la longitud inicial: L₀ = 10.0 m"
  - "Identificar el coeficiente: α = 0.000012 1/°C"
  - "Identificar la variación de temperatura: ΔT = 50 °C"
  - "Calcular: ΔL = 10.0 * 0.000012 * 50"

explicacion: |
  El cálculo es: ΔL = 10.0 * 0.000012 * 50 = 0.006 m.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["calculo", "longitud_final"]

variables:
  L0: 5.0
  alfa: 0.000024
  deltaT: 100.0
  deltaL: L0 * alfa * deltaT
  Lf: L0 + deltaL
  resultado: Lf

respuesta: resultado
tipo: completar
tolerancia_abs: 0.0001

enunciado: "Una varilla de aluminio de {L0} m de longitud se calienta de 20°C a 120°C. Si el coeficiente de dilatación lineal es {alfa} 1/°C, ¿cuál es la longitud final (L_f) de la varilla en metros?"

pasos:
  - "Calcular la variación de longitud: ΔL = 5.0 * 0.000024 * 100 = 0.012 m"
  - "Sumar la variación a la longitud inicial: L_f = L₀ + ΔL"
  - "L_f = 5.0 + 0.012 = 5.012 m"

explicacion: |
  La longitud final es la suma de la longitud inicial más la expansión: 5.0 + 0.012 = 5.012 m.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["metodologia"]

opciones_explicitas: ["Identificar datos (L₀, α, ΔT)", "Calcular la variación ΔL", "Sumar ΔL a L₀ para hallar L_f"]
respuesta_orden: ["Identificar datos (L₀, α, ΔT)", "Calcular la variación ΔL", "Sumar ΔL a L₀ para hallar L_f"]
tipo: ordenar

enunciado: "Para resolver un problema que pida hallar la longitud final de un objeto tras un cambio de temperatura, ¿cuál es el orden lógico de los pasos?"

explicacion: |
  Primero se deben extraer los datos, luego aplicar la fórmula de dilatación y finalmente sumar el resultado a la longitud inicial.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["dilatacion", "masa", "densidad"]

enunciado: "Si una barra de hierro se calienta de 20°C a 100°C, su longitud aumenta debido a la dilatación térmica. Sin embargo, un error común es pensar que su masa también cambia. En realidad, la masa de la barra ___."

opciones_explicitas: ["aumenta", "se mantiene igual", "disminuye"]

respuesta: "se mantiene igual"
tipo: mc

explicacion: |
  La masa es una propiedad intrínseca de la cantidad de materia. Aunque el volumen y la longitud aumentan (dilatación), la cantidad de átomos y su masa total permanecen constantes. Lo que realmente cambia es la densidad, que disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["conceptos", "verdadero_falso"]

enunciado: "Si una varilla metálica está sujeta rígidamente entre dos paredes fijas y se calienta, la dilatación térmica se manifiesta como un aumento en la longitud de la varilla."

respuesta: falso
tipo: vf

explicacion: |
  Cuando el material está restringido (sujeto rígidamente), no puede expandirse físicamente en longitud. En ese caso, la energía térmica se traduce en un aumento de la tensión interna o esfuerzo mecánico, no en cambio de longitud.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["coeficientes", "comparacion"]

enunciado: "Si comparamos dos barras de igual longitud y sección transversal, una de aluminio y otra de acero, ante un mismo incremento de temperatura, la barra de aluminio experimentará una dilatación lineal ___."

opciones_explicitas: ["mayor", "menor", "nula"]

respuesta: "mayor"
tipo: mc

explicacion: |
  El coeficiente de dilatación lineal ($\alpha$) es una propiedad del material. El aluminio tiene un $\alpha$ mayor que el acero, por lo que se expande más ante el mismo cambio de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["proceso", "causa"]

enunciado: "La dilatación térmica ocurre porque al aumentar la temperatura, la energía cinética de los átomos ___."

respuestas_validas:
  - "aumenta"
  - "disminuye"

respuesta: "aumenta"
tipo: completar

explicacion: |
  Al aumentar la temperatura, los átomos vibran con mayor amplitud alrededor de sus posiciones de equilibrio, lo que incrementa la distancia promedio entre ellos, resultando en una expansión macroscópica.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "avanzado"
  tags: ["formula", "variables"]

enunciado: "Para calcular la variación de longitud ($\\Delta L$) de un objeto, se deben considerar los siguientes factores en el orden de su dependencia en la fórmula $\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T$:"

opciones_explicitas: ["Longitud inicial", "Coeficiente de dilatación", "Variación de temperatura"]

respuesta_orden: ["Longitud inicial", "Coeficiente de dilatación", "Variación de temperatura"]
tipo: ordenar

explicacion: |
  La fórmula establece que la dilatación depende directamente de la longitud original ($L_0$), del coeficiente característico del material ($\alpha$) y del cambio en la escala térmica ($\Delta T$).
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["dilatacion", "dimensiones"]

tipo: mc
opciones_explicitas: ["La dilatación lineal solo considera el cambio en una dimensión (longitud), mientras que la volumétrica considera el cambio en las tres dimensiones (volumen).", "La dilatación lineal ocurre solo en gases, mientras que la volumétrica ocurre en sólidos.", "La dilatación lineal es siempre mayor que la dilatación volumétrica para el mismo material.", "La dilatación lineal depende de la forma del objeto, la volumétrica no."]

enunciado: "Al comparar la dilatación térmica lineal con la dilatación volumétrica, la principal distinción es que la dilatación lineal se enfoca en la variación de la ___."

respuesta: "La dilatación lineal solo considera el cambio en una dimensión (longitud), mientras que la volumétrica considera el cambio en las tres dimensiones (volumen)."

explicacion: |
  La dilatación lineal se aplica cuando una dimensión (longitud) es significativamente mayor que las otras, como en un alambre. La volumétrica es la expansión total en las tres dimensiones del cuerpo.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["coeficiente", "material"]

tipo: mc
opciones_explicitas: ["El coeficiente de dilatación lineal es una propiedad intrínseca del material y no depende de la cantidad de masa.", "El coeficiente de dilatación lineal depende de la longitud inicial del objeto.", "A mayor masa del objeto, mayor es el coeficiente de dilatación lineal.", "El coeficiente de dilatación lineal es igual para todos los metales."]

enunciado: "Si comparamos dos barras del mismo material pero de diferentes longitudes, la diferencia fundamental es que el coeficiente de dilatación lineal ___."

respuesta: "El coeficiente de dilatación lineal es una propiedad intrínseca del material y no depende de la cantidad de masa."

explicacion: |
  El coeficiente ($\alpha$) depende de la naturaleza del material. La deformación ($\Delta L$) sí depende de la longitud inicial ($L_0$), pero el coeficiente es constante para el material dado.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "avanzado"
  tags: ["relacion_coeficientes", "geometria"]

tipo: vf
enunciado: "Para un sólido isotrópico, el coeficiente de dilatación volumétrica ($\\gamma$) es aproximadamente tres veces el coeficiente de dilatación lineal ($\\alpha$)."

respuesta: verdadero

explicacion: |
  En materiales isotrópicos (propiedades iguales en todas las direcciones), se cumple la relación $\gamma \approx 3\alpha$.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["factores", "calculo"]

tipo: completar
respuestas_validas:
  - "$\\Delta T$"
  - "la temperatura inicial"

enunciado: "En la fórmula de la dilatación lineal $\\Delta L = \\alpha \\cdot L_0 \\cdot \\Delta T$, el término $\\Delta T$ representa la ___."

respuesta: "$\\Delta T$"

explicacion: |
  $\Delta T$ es el cambio de temperatura (temperatura final menos temperatura inicial). Sin un cambio de temperatura, no hay dilatación térmica.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["proceso", "causa_efecto"]

tipo: ordenar
opciones_explicitas: ["Aumento de la energía cinética de las partículas", "Incremento de la distancia promedio entre átomos", "Aumento de la longitud total del objeto"]

enunciado: "Ordena los pasos que describen el fenómeno de la dilatación térmica lineal desde el nivel microscópico al macroscópico:"

respuesta_orden: ["Aumento de la energía cinética de las partículas", "Incremento de la distancia promedio entre átomos", "Aumento de la longitud total del objeto"]

explicacion: |
  El calor aumenta la vibración (energía cinética) de los átomos, lo que aumenta la distancia media entre ellos, resultando en un aumento macroscópico de la longitud.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["termodinamica", "expansion_lineal"]

variables:
  escenario: [[0.1, 12.5], [0.2, 25.0], [0.3, 37.5]]
  idx: uno_de([0,1,2])
  L0: escenario[idx][0]
  dT: escenario[idx][1]
  alpha: 0.000012
  deltaL: L0 * alpha * dT

respuesta: deltaL
tipo: completar
tolerancia_abs: 0.0001

enunciado: "Una viga de acero tiene una longitud inicial de {L0} m. Si la temperatura aumenta en {dT} °C y el coeficiente de dilatación lineal es de {alpha} 1/°C, ¿cuánto aumenta su longitud en metros?"

pasos:
  - "Calcular el cambio de longitud usando la fórmula: ΔL = L₀ * α * ΔT"
  - "Sustituir los valores: ΔL = {L0} * {alpha} * {dT}"

explicacion: |
  La dilatación lineal se calcula con la fórmula ΔL = L₀ · α · ΔT. 
  Para este caso: {L0} * 0.000012 * {dT} = {deltaL} m.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["materiales", "conceptos"]

respuesta: "Acero"
tipo: mc
opciones_explicitas: ["Aluminio", "Acero", "Vidrio"]

enunciado: "Se requiere un material para las vías de un ferrocarril que tenga una dilatación térmica lineal muy baja para evitar que las vías se deformen en verano. Basado en los materiales comunes, ¿cuál de estos es más estable térmicamente?"

explicacion: |
  El acero tiene un coeficiente de dilatación menor que el aluminio y es el material real utilizado en las vías férreas, lo que lo hace más adecuado para estructuras que requieren estabilidad dimensional frente a cambios de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si un objeto se calienta, su longitud lineal aumenta siempre que el coeficiente de dilatación lineal sea un valor positivo."

explicacion: |
  Efectivamente, la fórmula ΔL = L₀ · α · ΔT indica que si ΔT es positivo y α es positivo, ΔL será positivo, resultando en un aumento de la longitud.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: ["aumento", "expansión", "crecimiento"]
respuestas_validas:
  - "aumento"
  - "expansión"
  - "crecimiento"
tipo: completar

enunciado: "Cuando un material sólido se somete a un incremento de temperatura, su longitud experimenta un ___ lineal."

explicacion: |
  El aumento de la energía cinética de las partículas provoca que estas vibren con mayor amplitud, incrementando la distancia promedio entre ellas, lo que se traduce en una expansión o aumento de la longitud.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["procesos"]

respuesta_orden: ["Aumento de temperatura", "Aumento de vibración molecular", "Aumento de longitud"]
tipo: ordenar

opciones_explicitas: ["Aumento de temperatura", "Aumento de vibración molecular", "Aumento de longitud"]

enunciado: "Ordena los siguientes eventos según ocurren de forma causal durante el calentamiento de una barra metálica:"

explicacion: |
  Primero aumenta la temperatura, lo que incrementa la energía cinética (vibración) de los átomos, resultando finalmente en un incremento de la longitud macroscópica.
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
respuestas_validas:
  - "Q = m * L"
  - "Q = m * c * ΔT"
  - "Q = m * g * h"

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
respuestas_validas:
  - "500"

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
respuestas_validas:
  - "Gaseoso"

enunciado: "Si una sustancia ha absorbido su calor latente de vaporización y se encuentra a la temperatura de ebullición, su estado es ____."

respuesta: "Gaseoso"
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

respuesta_orden: ["Sólido", "Líquido", "Gas"]
```

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  idx: uno_de([0, 1])
  escenario: [[334, 334], [167, 334]]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Un sistema libera {escenario[idx][0]} kJ de calor al solidificarse cierta masa de agua (L_fusión = {escenario[idx][1]} kJ/kg). ¿Cuál es esa masa, en kg?"

respuesta: escenario[idx][0] / escenario[idx][1]
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
  escenario: [[334000, 334000], [167000, 334000]]

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
respuestas_validas:
  - "calor latente"
  - "temperatura"
  - "masa"

enunciado: "El ____ es la energía necesaria para el cambio de estado, la cual no se refleja en un cambio de ____, sino en un cambio de la energía potencial de las partículas."

respuesta: "calor latente"
```

## Sección: escalas-de-temperatura-c-f-k (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "kelvin", "teoria"]

respuesta: "cero absoluto"
tipo: completar
respuestas_validas:
  - "cero absoluto"

enunciado: "La escala Kelvin se caracteriza por tener su punto de partida en el ___."

explicacion: |
  El cero absoluto (0 K) es la temperatura teórica más baja posible, donde el movimiento molecular es mínimo.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["celsius", "fahrenheit", "kelvin"]

respuesta: verdadero
tipo: vf
enunciado: "La escala Celsius y la escala Kelvin tienen el mismo tamaño de grado; es decir, un aumento de 1 °C equivale a un aumento de 1 K."

explicacion: |
  Es verdadero. Aunque sus puntos de origen son distintos (0 °C vs 273.15 K), el intervalo de una unidad es idéntico en ambas escalas.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["agua", "puntos_criticos"]

variables:
  idx: uno_de([0, 1])
  datos: [["congelación", "0 °C", "32 °F"], ["ebullición", "100 °C", "212 °F"]]

respuesta: datos[idx][2]
tipo: mc
opciones_explicitas: ["32 °F", "212 °F", "0 °F", "100 °F"]

enunciado: "El punto de {datos[idx][0]} del agua a presión atmosférica normal es de {datos[idx][1]}. ¿Cuál es su valor equivalente en la escala Fahrenheit?"

explicacion: |
  El punto de congelación del agua es 0 °C = 32 °F, y el punto de ebullición es 100 °C = 212 °F.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["ordenar", "escalas"]

respuesta_orden: ["0 °C", "32 °F", "273.15 K"]
tipo: ordenar
opciones_explicitas: ["0 °C", "32 °F", "273.15 K"]

enunciado: "Ordena las siguientes representaciones de la temperatura de congelación del agua (en °C, °F y K) de menor valor numérico a mayor valor numérico."

explicacion: |
  Aunque representan la misma temperatura física, los valores numéricos son 0, 32 y 273.15 respectivamente.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["kelvin", "negativo"]

respuesta: falso
tipo: vf

enunciado: "En la escala Kelvin, es posible obtener valores de temperatura negativos."

explicacion: |
  Falso. La escala Kelvin es una escala absoluta que comienza en el cero absoluto, por lo que no existen valores negativos.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "kelvin", "celsius"]

variables:
  escenario: uno_de([[25.0, 298.15], [0.0, 273.15], [100.0, 373.15], [-273.15, 0.0]])
  t_celsius: escenario[0]
  t_kelvin: escenario[1]

respuesta: t_kelvin
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una sustancia se encuentra a una temperatura de {t_celsius} °C, ¿cuál es su temperatura equivalente en la escala Kelvin (K)?"

pasos:
  - "Identificar la temperatura en Celsius: {t_celsius} °C"
  - "Sumar 273.15 a la temperatura en Celsius: {t_celsius} + 273.15"
  - "Resultado: {t_kelvin} K"

explicacion: |
  La escala Kelvin es una escala absoluta. La relación es: K = °C + 273.15.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["booleano", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que el cero absoluto (-273.15 °C) equivale a 0 K?"

explicacion: |
  Correcto. La escala Kelvin comienza en el cero absoluto, que es el punto de menor energía térmica posible.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["fahrenheit", "conversion"]

variables:
  escenario: uno_de([[20.0, 68.0], [37.0, 98.6], [100.0, 212.0], [0.0, 32.0]])
  t_c: escenario[0]
  t_f: escenario[1]

respuesta: t_f
tipo: mc
opciones_explicitas: [68.0, 98.6, 212.0, 32.0]

enunciado: "Si la temperatura ambiente es de {t_c} °C, ¿cuál es su valor equivalente en grados Fahrenheit (°F)?"

pasos:
  - "Usar la fórmula: °F = (°C * 9/5) + 32"
  - "Multiplicar {t_c} por 1.8: {t_c * 1.8}"
  - "Sumar 32 al resultado: {t_c * 1.8 + 32}"

explicacion: |
  La fórmula de conversión es: °F = (1.8 * °C) + 32.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["formula", "completar"]

respuesta: "9/5"
tipo: completar
respuestas_validas:
  - "9/5"
  - "1.8"

enunciado: "Para convertir de grados Celsius a Fahrenheit, se utiliza la fórmula: °F = (°C * ___) + 32"

explicacion: |
  El factor de escala entre Celsius y Fahrenheit es 9/5 o 1.8.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["ordenar", "comparacion"]

variables:
  escenario: uno_de([[0.0, 273.15, 32.0], [-10.0, 263.15, 14.0], [10.0, 283.15, 50.0]])
  t_c: escenario[0]
  t_k: escenario[1]
  t_f: escenario[2]

respuesta_orden: [t_c, t_f, t_k]
tipo: ordenar
opciones_explicitas: [t_c, t_f, t_k]

enunciado: "Ordena las siguientes temperaturas de la escala más fría a la más caliente: {t_c} °C, {t_f} °F y {t_k} K."

explicacion: |
  Para comparar, es más fácil convertir todo a una sola escala (por ejemplo, Kelvin).
  En este caso, el orden de menor a mayor es: {t_c} °C, {t_f} °F y {t_k} K.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["kelvin", "cero_absoluto"]

tipo: completar
enunciado: "El cero absoluto es la temperatura más baja posible en la escala Kelvin. En esta escala, dicho valor es de ___ K."
respuesta: "0"
explicacion: |
  La escala Kelvin es una escala absoluta. El cero absoluto (0 K) es el punto donde el movimiento molecular es mínimo y equivale a -273.15 °C.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["conversion", "kelvin", "celsius"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[25, 298.15], [100, 373.15]]

respuesta: datos[escenario_idx][1]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un error común es confundir la magnitud de los grados. Si tenemos una temperatura de {datos[escenario_idx][0]} °C, ¿cuál es su valor equivalente en Kelvin?"

pasos:
  - "Identificar la temperatura en Celsius: {datos[escenario_idx][0]} °C"
  - "Sumar la constante de conversión 273.15"
  - "Resultado en Kelvin: {datos[escenario_idx][0] + 273.15}"

explicacion: |
  Para convertir de Celsius a Kelvin, la fórmula es: T(K) = T(°C) + 273.15. Nunca se debe multiplicar por un factor de escala como en Fahrenheit.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["comparacion", "fahrenheit", "celsius"]

respuesta: falso

tipo: vf

enunciado: "Es un error conceptual afirmar que el valor numérico de la temperatura en la escala Fahrenheit siempre es mayor que en la escala Celsius para cualquier temperatura positiva."

explicacion: |
  Falso. Aunque para temperaturas ambientales el valor en Fahrenheit suele ser mayor (ej: 20°C = 68°F), existen puntos donde la relación cambia. Por ejemplo, a 0°C, Fahrenheit es 32, pero si bajamos a temperaturas muy negativas, la escala Fahrenheit puede ser numéricamente menor.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["puntos_criticos"]

respuesta_orden: ["0", "100", "32", "212"]
tipo: ordenar

opciones_explicitas: ["0", "100", "32", "212"]

enunciado: "Ordena los siguientes valores numéricos según correspondan a: [Punto de congelación del agua en Celsius, Punto de ebullición del agua en Celsius, Punto de congelación del agua en Fahrenheit, Punto de ebullición del agua en Fahrenheit]."

explicacion: |
  La secuencia correcta es: 0 (°C), 100 (°C), 32 (°F) y 212 (°F).
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "avanzado"
  tags: ["conceptos", "termodinamica"]

variables:
  temp_c: 20

respuesta: "293.15"
tipo: completar

respuestas_validas:
  - "293.15"

enunciado: "Un estudiante afirma que si la temperatura sube 1 grado Celsius, también sube 1 grado Kelvin. Si la temperatura actual es de {temp_c} °C, ¿cuál es su valor en Kelvin?"

explicacion: |
  Es correcto: el tamaño de un grado Celsius es igual al tamaño de un grado Kelvin. La diferencia es solo el punto de origen. {temp_c} + 273.15 = 293.15 K.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "kelvin", "celsius"]

respuesta: falso
tipo: vf

enunciado: "La escala Kelvin se considera una escala absoluta porque su valor de cero absoluto coincide con el cero de la escala Celsius."

explicacion: |
  El cero absoluto en la escala Kelvin es 0 K, lo que equivale a -273.15 °C. La escala Celsius tiene su punto de referencia en el punto de fusión del agua, no en el cero absoluto.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["conversión", "fahrenheit", "celsius"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[32, "0"], [212, "100"], [122, "50"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0", "100", "50"]

enunciado: "Sabiendo que el agua se congela a 32 °F (0 °C) y hierve a 212 °F (100 °C), ¿cuál es el valor equivalente en grados Celsius para una temperatura de {datos[idx][0]} °F?"

pasos:
  - "Identificar la fórmula de conversión: C = (F - 32) * 5/9."
  - "Sustituir el valor: C = ({datos[idx][0]} - 32) * 5/9 = {datos[idx][1]}."

explicacion: |
  La fórmula para convertir de Fahrenheit a Celsius es C = (F - 32) * 5/9.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["cero_absoluto", "kelvin"]

respuesta: "-273.15"
tipo: completar
respuestas_validas:
  - "-273.15"

enunciado: "Mientras que la escala Celsius define el punto de congelación del agua a 0 °C, la escala Kelvin define el cero absoluto en los ___ °C."

explicacion: |
  El cero absoluto es la temperatura teórica más baja posible, donde la agitación térmica es mínima. En la escala Celsius, esto ocurre a -273.15 °C.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "avanzado"
  tags: ["intervalos", "escalas", "comparación"]

respuesta: "un_intervalo_de_100_grados_celsius_es_igual_a_un_intervalo_de_180_grados_fahrenheit"
tipo: mc
opciones_explicitas: ["un_intervalo_de_100_grados_celsius_es_igual_a_un_intervalo_de_180_grados_fahrenheit", "un_intervalo_de_100_grados_celsius_es_igual_a_un_intervalo_de_100_grados_fahrenheit", "un_intervalo_de_100_grados_celsius_es_igual_a_un_intervalo_de_32_grados_fahrenheit"]

enunciado: "¿Cuál de las siguientes afirmaciones describe correctamente la relación entre el tamaño de un grado en ambas escalas?"

explicacion: |
  La escala Celsius divide el rango entre el hielo y el vapor en 100 partes, mientras que la Fahrenheit lo divide en 180 partes. Por lo tanto, un cambio de 100 °C equivale a un cambio de 180 °F.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["orden", "escalas"]

respuesta_orden: ["Celsius", "Fahrenheit", "Kelvin"]
tipo: ordenar
opciones_explicitas: ["Celsius", "Kelvin", "Fahrenheit"]

enunciado: "Ordena las siguientes escalas de temperatura de menor a mayor valor numérico, considerando que el punto de congelación del agua es 0 en la primera, 273 en la segunda y 32 en la tercera."

explicacion: |
  Para el punto de congelación del agua: Celsius (0), Kelvin (273.15) y Fahrenheit (32). Ordenando por valor numérico ascendente: 0 < 32 < 273.15, es decir, Celsius, Fahrenheit, Kelvin.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["orden", "escalas"]

respuesta_orden: ["Celsius", "Fahrenheit", "Kelvin"]
tipo: ordenar
opciones_explicitas: ["Celsius", "Fahrenheit", "Kelvin"]

enunciado: "Ordena las escalas de temperatura de menor a mayor según el valor numérico que representan en el punto de congelación del agua (0, 32 y 273.15 respectivamente)."

explicacion: |
  En el punto de congelación del agua: Celsius = 0, Fahrenheit = 32, Kelvin = 273.15. El orden ascendente es Celsius, Fahrenheit, Kelvin.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "celsius", "fahrenheit"]

variables:
  escenario: uno_de([["40", "104"], ["100", "212"], ["0", "32"]])
  temp_c: escenario[0]
  temp_f: escenario[1]

tipo: mc
opciones_explicitas: ["104 °F", "212 °F", "32 °F", "100 °F"]
respuesta: temp_f + " °F"

enunciado: "Si una receta indica que el horno debe estar a {temp_c} °C, ¿cuál es la temperatura equivalente en la escala Fahrenheit?"

explicacion: |
  La fórmula de conversión es: °F = (°C * 9/5) + 32.
  Para {temp_c} °C: ({temp_c} * 1.8) + 32 = {temp_f} °F.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["kelvin", "celsius", "absoluto"]

variables:
  cero_c: 0

tipo: completar
respuestas_validas:
  - "273.15"
respuesta: "273.15"

enunciado: "El cero absoluto es la temperatura más baja teórica. Si el agua se congela a 0 °C, la temperatura en la escala Kelvin es de ___ K."

explicacion: |
  La escala Kelvin se define como T(K) = T(°C) + 273.15.
  Por lo tanto, 0 °C equivale a 273.15 K.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["kelvin", "celsius"]

variables:
  datos: [["50", "323.15"], ["25", "298.15"], ["10", "283.15"]]
  idx: uno_de([0,1,2])
  temp_c: datos[idx][0]
  temp_k: datos[idx][1]

tipo: vf
respuesta: verdadero

enunciado: "En un desierto la temperatura es de {temp_c} °C. ¿Es cierto que esto equivale a {temp_k} K?"

explicacion: |
  La relación es T(K) = T(°C) + 273.15.
  Como {temp_c} + 273.15 = {temp_k}, la afirmación es verdadera.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["orden", "escalas"]

tipo: ordenar
opciones_explicitas: ["Celsius", "Fahrenheit", "Kelvin"]
respuesta_orden: ["Celsius", "Fahrenheit", "Kelvin"]

enunciado: "Ordena estas escalas de temperatura de menor a mayor valor numérico considerando el punto de congelación del agua (0, 32, 273.15):"

explicacion: |
  Los valores son: 0 (Celsius), 32 (Fahrenheit) y 273.15 (Kelvin).
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "avanzado"
  tags: ["kelvin", "celsius", "absoluto"]

variables:
  escenario: uno_de([[0, -273.15], [-10, -283.15], [-273.15, -273.15]])
  temp_k: escenario[0]
  temp_c: escenario[1]

tipo: completar
respuesta: -273.15
tolerancia_abs: 0.01

enunciado: "Si un experimento alcanza el cero absoluto, la temperatura en la escala Kelvin es 0 K. ¿Cuál es el valor de esa temperatura en la escala Celsius?"

explicacion: |
  Dado que T(K) = T(°C) + 273.15, si T(K) = 0, entonces:
  0 = T(°C) + 273.15  =>  T(°C) = -273.15.
```

## Sección: maquina-termica-termodinamica-nivel2 (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["termodinamica", "carnot", "eficiencia"]

variables:
  temp_caliente: uno_de([600, 800, 1000])
  temp_fria: 300

respuesta: (1 - (temp_fria / temp_caliente)) * 100

tipo: completar
tolerancia_abs: 0.1

enunciado: "Una máquina térmica opera entre una fuente caliente a {temp_caliente} K y una fuente fría a {temp_fria} K. Si la máquina opera bajo un ciclo de Carnot, ¿cuál es su eficiencia térmica expresada en porcentaje (%)?"

pasos:
  - "Calcular la eficiencia de Carnot usando la fórmula: η = 1 - (T_fria / T_caliente)"
  - "Multiplicar el resultado por 100 para obtener el porcentaje."

explicacion: |
  La eficiencia máxima teórica de una máquina térmica está limitada por la diferencia de temperaturas entre las fuentes, según el ciclo de Carnot.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "basico"
  tags: ["primera_ley", "calor", "trabajo"]

opciones_explicitas: ["W = Q_H - Q_C", "W = Q_H + Q_C", "W = Q_H / Q_C", "W = Q_C - Q_H"]

respuesta: "W = Q_H - Q_C"

tipo: mc

enunciado: "Según la primera ley de la termodinámica aplicada a una máquina térmica en ciclo, ¿cuál es la expresión que relaciona el trabajo neto (W) con el calor absorbido de la fuente caliente (Q_H) y el calor cedido a la fuente fría (Q_C)?"

explicacion: |
  En un ciclo, la variación de la energía interna es cero, por lo que el calor neto absorbido es igual al trabajo neto realizado por la máquina.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["energia", "calor", "trabajo"]

variables:
  calor_absorbido: uno_de([5000, 8000, 12000])
  eficiencia: 0.25

respuesta: calor_absorbido * eficiencia

tipo: completar
tolerancia_abs: 0.1

enunciado: "Una máquina térmica absorbe {calor_absorbido} J de calor de una fuente caliente. Si su eficiencia térmica es del {eficiencia * 100}%, ¿cuánto trabajo mecánico (W) realiza la máquina?"

explicacion: |
  El trabajo realizado es el producto de la energía térmica absorbida por la eficiencia del dispositivo: W = Q_H * η.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "basico"
  tags: ["historia", "componentes", "vapor"]

opciones_explicitas: ["Caldera", "Condensador", "Cilindro", "Pistón"]

respuesta_orden: ["Caldera", "Cilindro", "Pistón", "Condensador"]

tipo: ordenar

enunciado: "Ordene los componentes de una máquina de vapor clásica siguiendo el flujo lógico de la energía: desde la generación de vapor hasta la liberación de calor al ambiente."

explicacion: |
  El vapor se genera en la caldera, expande en el cilindro moviendo el pistón, y finalmente el vapor residual se enfría en el condensador.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "avanzado"
  tags: ["entropia", "segundo_principio", "irreversibilidad"]

opciones_explicitas: ["aumento", "disminución", "constancia", "cero"]

respuesta: "aumento"

tipo: mc

enunciado: "En una máquina térmica real (no ideal), debido a las fricciones y las transferencias de calor irreversibles, la entropía total del universo experimenta un/a ___."

explicacion: |
  El segundo principio de la termodinámica establece que en cualquier proceso real e irreversible, la entropía total del sistema más el entorno siempre aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  escenario: uno_de([[1000, 300], [800, 200], [500, 150]])

enunciado: "Una máquina térmica opera entre una fuente caliente a {escenario[0]} K y una fuente fría a {escenario[1]} K. Calcula la eficiencia máxima teórica (eficiencia de Carnot) de esta máquina."

pasos:
  - "Calcular la temperatura de la fuente caliente (Th) y la fuente fría (Tc)."
  - "Aplicar la fórmula de la eficiencia de Carnot: η = 1 - (Tc / Th)."

respuesta: 1 - (escenario[1] / escenario[0])
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La eficiencia de Carnot es la eficiencia máxima posible para cualquier máquina térmica que opere entre dos temperaturas. Se calcula como η = 1 - (T_fria / T_caliente).
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "energia"]

opciones_explicitas: ["Q_caliente", "Q_fria", "W_trabajo"]

enunciado: "En un ciclo termodinámico de una máquina térmica, el calor que se absorbe de la fuente de alta temperatura se denomina ___."

respuesta: "Q_caliente"
tipo: mc

explicacion: |
  El proceso comienza con la absorción de calor de una fuente caliente para realizar trabajo.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "primer_ley"]

variables:
  datos: uno_de([[500, 150], [1000, 400], [250, 50]])

enunciado: "Una máquina térmica absorbe {datos[0]} J de calor de una fuente caliente y realiza un trabajo de {datos[1]} J. ¿Cuánta energía se libera como calor a la fuente fría?"

respuesta: datos[0] - datos[1]
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  Según la primera ley de la termodinámica para un ciclo, el calor neto es igual al trabajo neto: Q_h - Q_c = W. Por lo tanto, Q_c = Q_h - W.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "segunda_ley"]

enunciado: "De acuerdo con la segunda ley de la termodinámica, la eficiencia de una máquina térmica real es siempre ___ que la eficiencia de una máquina de Carnot."

opciones_explicitas: ["menor", "igual", "mayor"]

respuesta: "menor"
tipo: mc

explicacion: |
  La segunda ley establece que es imposible convertir todo el calor absorbido en trabajo; siempre habrá una parte de energía que se degrade y se entregue a la fuente fría.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "ciclo"]

opciones_explicitas: ["Absorción de calor", "Expansión (Trabajo)", "Expulsión de calor"]

enunciado: "Ordena las etapas típicas de un ciclo de una máquina térmica desde que recibe energía hasta que completa su ciclo:"

respuesta_orden: ["Absorción de calor", "Expansión (Trabajo)", "Expulsión de calor"]
tipo: ordenar

explicacion: |
  El ciclo consiste en: 1. Absorber calor de la fuente caliente, 2. Realizar trabajo mediante la expansión del fluido, 3. Rechazar el calor sobrante a la fuente fría.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["segunda_ley", "eficiencia", "calor"]

variables:
  escenario: uno_de([["Una máquina térmica absorbe 1000 J de calor y realiza 400 J de trabajo.", 400], ["Un motor absorbe 500 J de calor y entrega 200 J de trabajo.", 200]])

enunciado: "Según la segunda ley de la termodinámica, la eficiencia de una máquina térmica se define como el trabajo útil dividido por el calor absorbido. En el caso de {escenario[0]}, ¿cuánto trabajo se realizó?"

respuesta: escenario[1]
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  La eficiencia es η = W / Q_in. En el primer caso: 400/1000 = 0.4 (40%). En el segundo: 200/500 = 0.4 (40%). Siempre hay una parte del calor que no se convierte en trabajo.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["segunda_ley", "entropia"]

opciones_explicitas: ["Se convierte totalmente en trabajo", "Se transfiere a un foco frío como calor residual", "Se transforma en energía potencial", "Se destruye por la fricción"]

enunciado: "De acuerdo con la segunda ley de la termodinámica, en un ciclo termodinámico, la energía que no se transforma en trabajo debe ser..."

respuesta: "Se transfiere a un foco frío como calor residual"
tipo: mc

explicacion: |
  Es imposible convertir todo el calor absorbido en trabajo. Una parte del calor debe ser expulsada a un foco de menor temperatura para completar el ciclo.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "avanzado"
  tags: ["carnot", "eficiencia_maxima"]

variables:
  temp_caliente: 600
  temp_frio: 300

enunciado: "Considerando una máquina de Carnot operando entre una fuente caliente a {temp_caliente} K y una fuente fría a {temp_frio} K, ¿cuál es su eficiencia máxima teórica?"

pasos:
  - "Calcular la temperatura absoluta en Kelvin."
  - "Aplicar la fórmula de eficiencia de Carnot: eta = 1 - (T_frio / T_caliente)."

respuesta: 0.5
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La eficiencia de Carnot es eta = 1 - (300/600) = 1 - 0.5 = 0.5 (50%). Incluso en el caso ideal de Carnot, la eficiencia es menor a 1 (100%) si T_frio > 0.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["conceptos", "leyes"]

opciones_explicitas: ["Calor", "Trabajo", "Temperatura", "Entropía"]

enunciado: "Para que una máquina térmica funcione, es necesario que exista un flujo de ___ desde un cuerpo caliente a uno frío."

respuesta: "Calor"
tipo: mc

explicacion: |
  La transferencia de calor es el motor del proceso; sin un gradiente de temperatura que permita el flujo de calor, no se puede realizar trabajo cíclicamente.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["segunda_ley", "imposibilidad"]

respuestas_validas:
  - "imposible"
  - "falso"

enunciado: "Es físicamente ___ construir una máquina térmica que tenga una eficiencia del 100%."

respuesta: "imposible"
tipo: completar

explicacion: |
  La segunda ley de la termodinámica (Enunciado de Kelvin-Planck) establece que es imposible construir un dispositivo que opere en un ciclo y que produzca solamente trabajo a partir de un solo depósito de calor.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["termodinamica", "historia_ciencia", "watt"]

variables:
  escenario: ["Máquina de Newcomen", "calentaba y enfriaba el cilindro en cada ciclo", "causaba una pérdida masiva de energía térmica al enfriar el cilindro"]

enunciado: "En la {escenario[0]}, el principal problema de eficiencia era que el {escenario[1]}."

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["causaba una pérdida masiva de energía térmica al enfriar el cilindro", "permitía que el cilindro permaneciera a la temperatura del vapor"]

explicacion: |
  James Watt introdujo el condensador separado para evitar que el cilindro principal se enfriara en cada ciclo, lo que ahorraba una cantidad enorme de energía y permitía un uso industrial continuo.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "avanzado"
  tags: ["eficiencia", "termodinamica", "calor"]

variables:
  valor_eficiencia: uno_de([[0.05, "5%"], [0.12, "12%"], [0.25, "25%"]])

enunciado: "Si una máquina térmica industrial de la era de Watt tiene una eficiencia térmica de {valor_eficiencia[1]}, esto significa que solo una parte del calor absorbido se convierte en trabajo. El valor decimal es ___."

respuesta: valor_eficiencia[0]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La eficiencia térmica es la relación entre el trabajo útil obtenido y el calor suministrado. Por ejemplo, un valor de 0.12 representa un 12% de eficiencia.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "basico"
  tags: ["componentes", "watt", "vapor"]

enunciado: "Ordena los componentes de una máquina de vapor de Watt según el flujo de energía desde la fuente de calor hasta el trabajo mecánico:"

pasos:
  - "Generación de vapor por combustión"
  - "Expansión del vapor en el cilindro"
  - "Movimiento del pistón/émbolo"
  - "Condensación en el condensador separado"

opciones_explicitas: ["Generación de vapor por combustión", "Expansión del vapor en el cilindro", "Condensación en el condensador separado", "Movimiento del pistón/émbolo"]
respuesta_orden: ["Generación de vapor por combustión", "Expansión del vapor en el cilindro", "Movimiento del pistón/émbolo", "Condensación en el condensador separado"]
tipo: ordenar

explicacion: |
  El ciclo comienza con la generación de vapor, seguido de su expansión para mover el pistón, la condensación para recuperar el agua y el movimiento mecánico resultante.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["termodinamica", "watt", "eficiencia"]

variables:
  efecto: uno_de([["aumentar", "aumentar"], ["disminuir", "disminuir"], ["mantener", "mantener"]])

enunciado: "La introducción del condensador separado por parte de Watt tuvo como objetivo principal ___ la temperatura del cilindro durante el ciclo de expansión."

respuestas_validas:
  - "mantener"
tipo: completar

explicacion: |
  Al condensar el vapor en un recipiente separado, el cilindro principal no necesita ser enfriado con agua fría en cada ciclo, manteniendo su temperatura constante y optimizando el uso del combustible.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "avanzado"
  tags: ["leyes_termodinamica", "trabajo", "calor"]

variables:
  caso: uno_de([100, 250, 500])

enunciado: "Una máquina de vapor de Watt recibe {caso} Joules de calor (Qin) y realiza un trabajo de {caso * 0.2} Joules (W). ¿Cuál es su eficiencia térmica (eta = W/Qin) expresada en decimal?"

pasos:
  - "Identificar el trabajo realizado (W)"
  - "Identificar el calor absorbido (Qin)"
  - "Dividir W entre Qin"

respuesta: 0.2
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  La eficiencia se calcula como η = W / Q_in. En este caso: 20 / 100 = 0.2 (o 50 / 250 = 0.2).
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  escenario: [[150, 0.30], [200, 0.40], [250, 0.50]]
  idx: uno_de([0, 1, 2])

enunciado: "Una máquina térmica absorbe un calor de {escenario[idx][0]} J del foco caliente y realiza un trabajo útil de {escenario[idx][0] * escenario[idx][1]} J. ¿Cuál es la eficiencia térmica de la máquina?"

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: [0.20, 0.30, 0.40, 0.50, 0.60]

explicacion: |
  La eficiencia térmica (η) se define como el cociente entre el trabajo útil realizado (W) y el calor absorbido (Q_H):
  η = W / Q_H.
  En este caso: η = {escenario[idx][0] * escenario[idx][1]} / {escenario[idx][0]} = {escenario[idx][1]}.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  datos: [[450, 0.25], [600, 0.33], [800, 0.45]]
  idx: uno_de([0, 1, 2])

enunciado: "Si una máquina térmica absorbe {datos[idx][0]} J de calor y su eficiencia es de {datos[idx][1]} (expresada en decimal), ¿cuánto trabajo útil realiza?"

respuesta: datos[idx][0] * datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Usamos la fórmula de eficiencia: W = η × Q_H.
  Sustituyendo: W = {datos[idx][1]} × {datos[idx][0]} = {datos[idx][0] * datos[idx][1]} J.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  caso: [[120, 0.2], [150, 0.3], [200, 0.5]]
  idx: uno_de([0, 1, 2])

enunciado: "Dada una máquina térmica con una eficiencia de {caso[idx][1]}, si el trabajo realizado es de {caso[idx][0]} J, ¿cuál es el calor absorbido del foco caliente?"

respuesta: caso[idx][0] / caso[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Partiendo de η = W / Q_H, despejamos el calor absorbido: Q_H = W / η.
  Calculamos: {caso[idx][0]} / {caso[idx][1]} = {caso[idx][0] / caso[idx][1]} J.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica"]

enunciado: "En una máquina térmica, la eficiencia térmica ($\\eta$) se define como la relación entre el ___ realizado y el ___ absorbido del foco caliente."

respuesta: ["trabajo", "calor"]
tipo: completar
respuestas_validas:
  - "trabajo"
  - "calor"

explicacion: |
  La eficiencia ($\eta$) representa qué fracción de la energía térmica absorbida se convierte en trabajo útil.
  Fórmula: $\eta = W / Q_H$.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica"]

variables:
  valores: [[500, 0.25], [1000, 0.50], [2000, 0.75]]
  idx: uno_de([0, 1, 2])

enunciado: "Si una máquina térmica tiene una eficiencia de {valores[idx][1]} y absorbe {valores[idx][0]} J de calor, el trabajo realizado es de ___ J."

respuesta: valores[idx][0] * valores[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El cálculo es W = Q_H × η.
  Para el escenario seleccionado: {valores[idx][0]} × {valores[idx][1]} = {valores[idx][0] * valores[idx][1]} J.
```

