# Fisica — Principio de arquimedes empuje flotacion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Empuje

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["arquimedes", "empuje", "fuerza"]

tipo: mc
opciones_explicitas: ["La fuerza que ejerce un fluido sobre un cuerpo sumergido", "La fuerza de gravedad que atrae al objeto", "La fuerza de fricción entre el objeto y el agua", "La fuerza que mantiene al objeto en reposo"]
respuesta: "La fuerza que ejerce un fluido sobre un cuerpo sumergido"

enunciado: "Según el principio de Arquímedes, el empuje es ___."

explicacion: |
  El empuje es la fuerza vertical hacia arriba que ejerce un fluido (líquido o gas) sobre cualquier cuerpo que esté sumergido en él.
```

### 2 — Relación de pesos y fuerzas

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["equilibrio", "flotacion"]

tipo: vf
respuesta: falso

enunciado: "Si un objeto se encuentra en equilibrio mientras flota en la superficie de un líquido, significa que su peso es mayor que la fuerza de empuje ejercida por el fluido."

explicacion: |
  Falso. Para que un objeto flote en equilibrio, la fuerza de empuje debe ser exactamente igual al peso del objeto (sumergido o parcialmente sumergido).
```

### 3 — El volumen desplazado

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["volumen", "desplazamiento"]

variables:
  volumenes: [1.5, 2.0, 0.8]
  idx: uno_de([0,1,2])
  volumen: volumenes[idx]

tipo: completar
tolerancia_abs: 1

respuesta: volumen * 1000

enunciado: "Un objeto sumergido desplaza un volumen de agua (densidad 1000 kg/m³) de {volumen} m³. Según el principio de Arquímedes, la magnitud del empuje será equivalente al peso de una masa de fluido de ___ kg."

explicacion: |
  El volumen de fluido desplazado es igual al volumen de la parte sumergida del objeto. El empuje es igual al peso de ese fluido desplazado.
```

### 4 — Condiciones de flotación

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["densidad", "flotacion"]

tipo: mc
opciones_explicitas: ["El objeto se hunde", "El objeto flota", "El objeto se queda en equilibrio en el medio"]
respuesta: "El objeto se hunde"

enunciado: "Si la densidad del objeto es mayor que la densidad del fluido, el objeto ___."

explicacion: |
  Cuando la densidad del objeto es mayor, el peso del objeto es mayor que el empuje máximo que puede recibir (el peso del volumen de fluido desplazado por el objeto totalmente sumergido), por lo tanto, el objeto se hunde.
```

### 5 — Secuencia de análisis de flotación

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "avanzado"
  tags: ["procedimiento", "analisis"]

tipo: ordenar
opciones_explicitas: ["Calcular el peso del objeto", "Calcular el empuje máximo (peso del fluido desplazado)", "Comparar peso con empuje para determinar flotación"]

enunciado: "Para determinar si un objeto flotará o se hundirá en un fluido, se debe seguir este orden lógico de análisis:"

explicacion: |
  Primero determinamos la fuerza hacia abajo (peso), luego la fuerza hacia arriba máxima posible (empuje del volumen total del objeto) y finalmente comparamos ambas magnitudes.
respuesta_orden: ["Calcular el peso del objeto", "Calcular el empuje máximo (peso del fluido desplazado)", "Comparar peso con empuje para determinar flotación"]
```

### 6 — Concepto de Empuje

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["arquimedes", "empuje", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Según el principio de Arquímedes, el empuje es una fuerza vertical hacia arriba que experimenta un cuerpo cuando se sumerge en un fluido."

explicacion: |
  El principio de Arquímedes establece que todo cuerpo sumergido en un fluido experimenta un empuje vertical hacia arriba igual al peso del fluido desalojado.
```

### 7 — Cálculo del Empuje

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["calculo", "empuje", "densidad"]

variables:
  idx: uno_de([0, 1])
  volumenes: [0.5, 0.8]
  V: volumenes[idx]

respuesta: redondear(1000 * 9.8 * V, 1)
tipo: completar
tolerancia_abs: 1

enunciado: "Un objeto desplaza un volumen de {V} m³ de agua al sumergirse. Si la densidad del agua es 1000 kg/m³ y la gravedad es 9.8 m/s², ¿cuál es el valor del empuje en Newtons?"

pasos:
  - "Calcular el volumen desplazado: V = {V} m³"
  - "Calcular el peso del fluido desalojado: E = ρ * g * V"
  - "E = 1000 * 9.8 * {V}"

explicacion: |
  El empuje se calcula con la fórmula E = ρ_fluido * g * V_sumergido.
  Usando los datos: E = 1000 * 9.8 * {V} = {redondear(1000 * 9.8 * V, 1)} N.
```

### 8 — ¿Flota o se hunde?

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["flotacion", "densidad"]

variables:
  idx: uno_de([0, 1])
  escenario: [[800, "flota"], [1200, "se hunde"]]

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas: ["flota", "se hunde"]

enunciado: "Si un objeto tiene una densidad de {escenario[idx][0]} kg/m³ y se sumerge en agua (densidad 1000 kg/m³), el objeto ___."

explicacion: |
  Si la densidad del objeto es menor que la del fluido, el objeto flota. Si es mayor, se hunde.
  En este caso, {escenario[idx][0]} < 1000, por lo tanto, el objeto {escenario[idx][1]}.
```

### 9 — Relación de fuerzas en flotación

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["equilibrio", "flotacion"]

respuesta: "Peso del fluido desalojado"
tipo: completar

respuestas_validas:
  - "Peso del fluido desalojado"
  - "Peso del objeto"
  - "Fuerza de gravedad"

enunciado: "Cuando un objeto flota en equilibrio en la superficie de un líquido, el empuje es exactamente igual al ___."

explicacion: |
  En equilibrio de flotación, la fuerza hacia arriba (empuje) debe compensar exactamente la fuerza hacia abajo (peso del objeto). Por el principio de Arquímedes, esto equivale al peso del fluido desalojado.
```

### 10 — Pasos para hallar el empuje

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["procedimiento", "ordenar"]

opciones_explicitas: ["Calcular volumen desplazado", "Multiplicar por la gravedad", "Multiplicar por la densidad del fluido"]
respuesta_orden: ["Calcular volumen desplazado", "Multiplicar por la densidad del fluido", "Multiplicar por la gravedad"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular el empuje (E = ρ * g * V) partiendo de conocer el volumen sumergido:"

explicacion: |
  El orden correcto es: 1. Determinar el volumen desplazado (V), 2. Multiplicar por la densidad del fluido (ρ * V) y 3. Finalmente, multiplicar por la aceleración de la gravedad (g).
```

### 11 — El empuje y el peso

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "basico"
  tags: ["empuje", "arquimedes", "flotacion"]

variables:
  escenario: uno_de([[10, 90], [25, 75], [50, 50]])

enunciado: "Un objeto sumergido en un fluido experimenta una fuerza hacia arriba llamada empuje. Si el peso del objeto es de {escenario[0]} N y el empuje es de {escenario[1]} N, ¿cuál es el peso aparente del objeto?"

pasos:
  - "Calcular la diferencia entre el peso real y el empuje."
  - "El peso aparente es la fuerza resultante vertical."

respuesta: escenario[0] - escenario[1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El peso aparente es la diferencia entre el peso real del objeto y la fuerza de empuje que ejerce el fluido. Si el empuje es igual al peso, el objeto tiene peso aparente cero (flota en equilibrio).
```

### 12 — ¿Qué determina el empuje?

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["empuje", "densidad", "volumen"]

opciones_explicitas: ["El peso del objeto", "El volumen del objeto sumergido", "La densidad del objeto", "La forma del objeto"]

enunciado: "Un error común es pensar que un objeto más pesado siempre tiene más empuje. Sin embargo, para un objeto totalmente sumergido, el empuje depende exclusivamente de:"

respuesta: "El volumen del objeto sumergido"
tipo: mc

explicacion: |
  El principio de Arquímedes establece que el empuje es igual al peso del volumen de fluido desplazado. Por lo tanto, si dos objetos tienen el mismo volumen y están totalmente sumergidos, el empuje será el mismo, sin importar sus pesos o materiales.
```

### 13 — Flotación y densidad

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "basico"
  tags: ["flotacion", "densidad"]

variables:
  caso: uno_de([[1.2, "se hunde"], [0.8, "flota"], [1.0, "flota"]])

enunciado: "Si un objeto tiene una densidad de {caso[0]} g/cm³ y se coloca en agua (cuya densidad es 1.0 g/cm³), el objeto ___."

respuestas_validas:
  - "se hunde"
  - "flota"

respuesta: caso[1]
tipo: completar

explicacion: |
  Si la densidad del objeto es mayor que la del fluido, el peso es mayor que el empuje máximo posible y el objeto se hunde. Si es menor, el objeto subirá hasta que el peso del volumen desplazado iguale su peso (flotación).
```

### 14 — El error del "objeto pesado"

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["conceptos", "error_comun"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que un objeto de hierro se hunde en el agua simplemente porque es más pesado que el agua?"

explicacion: |
  Falso. El hierro se hunde porque su densidad es mayor que la del agua, lo que significa que el empuje que puede ejercer el agua al desplazar su volumen es menor que el peso del objeto. No es el peso absoluto, sino la relación entre peso y volumen (densidad).
```

### 15 — Proceso de flotación

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["flotacion", "equilibrio"]

opciones_explicitas: ["El objeto se hunde", "El objeto se detiene en la superficie", "El objeto se hunde hasta que el empuje iguala su peso"]

enunciado: "Cuando un objeto se lanza al agua y comienza a descender pero tiene una densidad menor a la del fluido, ¿qué ocurre?"

respuesta: "El objeto se hunde hasta que el empuje iguala su peso"
tipo: mc

explicacion: |
  Al sumergirse, el objeto desplaza agua. A medida que baja, el volumen desplazado aumenta y, con él, el empuje. El objeto dejará de descender cuando el empuje sea igual a su peso, alcanzando un equilibrio de flotación.
```

### 16 — Empuje vs Peso

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "basico"
  tags: ["empuje", "peso", "flotacion"]

variables:
  densidad_obj: uno_de([2500, 800])
  densidad_liq: 1000

respuesta: densidad_obj < densidad_liq
tipo: vf
enunciado: "Si un objeto tiene una densidad de {densidad_obj} kg/m³ y se sumerge en un líquido de {densidad_liq} kg/m³, el objeto flotará en la superficie. ¿Es esto verdadero o falso?"

explicacion: |
  Si la densidad del objeto es menor que la del líquido (como en el caso de 800 < 1000), el objeto flota. Si es mayor (2500 > 1000), el objeto se hunde.
```

### 17 — El concepto de Empuje

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["arquimedes", "fuerza", "empuje"]

respuesta: "fuerza vertical hacia arriba"
tipo: completar
respuestas_validas:
  - "fuerza vertical hacia arriba"
  - "fuerza hacia arriba"
  - "empuje"

enunciado: "El principio de Arquímedes establece que todo cuerpo sumergido en un fluido experimenta una ___ que es igual al peso del volumen del fluido desalojado."

explicacion: |
  El empuje es la fuerza que ejerce el fluido sobre el cuerpo, dirigida siempre hacia arriba (verticalmente).
```

### 18 — Condición de flotación

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["flotacion", "equilibrio"]

variables:
  peso_obj: uno_de([50, 150])
  empuje: uno_de([100, 20])

respuesta: "El peso es igual al empuje"
tipo: mc
opciones_explicitas: ["El peso es mayor que el empuje", "El peso es menor que el empuje", "El peso es igual al empuje"]

enunciado: "Para que un objeto flote en equilibrio en la superficie de un fluido (flotación neutra), se debe cumplir que el peso del objeto sea ___ que el empuje."

explicacion: |
  Cuando un objeto flota sin hundirse ni emerger completamente, el peso es igual al empuje (equilibrio de fuerzas).
```

### 19 — Factores que determinan el empuje

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "avanzado"
  tags: ["calculo", "empuje", "volumen"]

respuesta_orden: ["Calcular el volumen del fluido desplazado", "Multiplicar ese volumen por la densidad del fluido", "Multiplicar el resultado por la aceleración de la gravedad"]
tipo: ordenar

opciones_explicitas: ["Calcular el volumen del fluido desplazado", "Multiplicar ese volumen por la densidad del fluido", "Multiplicar el resultado por la aceleración de la gravedad"]

enunciado: "Ordena los pasos lógicos para calcular la magnitud del empuje (E = ρ · V · g) de un cuerpo sumergido:"

explicacion: |
  El empuje depende del volumen desplazado, la densidad del fluido y la gravedad.
```

### 20 — Diferencia entre masa y empuje

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "basico"
  tags: ["masa", "empuje", "densidad"]

variables:
  masa_bloque: 10
  vol_bloque: 0.05
  dens_agua: 1000

respuesta: falso
tipo: vf
enunciado: "Si un bloque de hierro tiene una masa de {masa_bloque} kg y un volumen de {vol_bloque} m³, el empuje que recibe al sumergirse totalmente en agua es de {masa_bloque} Newtons. ¿Es esto verdadero o falso?"

explicacion: |
  El empuje es igual al peso del fluido desalojado (ρ_agua · V_bloque · g), no a la masa del objeto ni a su peso directamente. En este caso: 1000 · 0.05 · 9.8 = 490 N, que es distinto a 10 N.
```

### 21 — Flotación de un bloque de madera

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["flotacion", "empuje", "densidad"]

variables:
  escenario: uno_de([[1.2, "se hunde"], [0.8, "flota"], [1.0, "flota"]])
  densidad_objeto: escenario[0]
  densidad_fluido: 1.0

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["flota", "se hunde", "flota"]

enunciado: "Un objeto con una densidad de {densidad_objeto} g/cm³ se sumerge en un fluido cuya densidad es de {densidad_fluido} g/cm³. El objeto ___."

explicacion: |
  Un objeto flota si su densidad es menor que la del fluido. Si es mayor, se hunde.
```

### 22 — Cálculo del empuje hidrostático

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["empuje", "volumen", "arquimedes"]

variables:
  volumenes: [0.5, 0.2, 1.0]
  idx: uno_de([0, 1, 2])
  volumen: volumenes[idx]
  densidad_fluido: 1000
  g: 10

respuesta: densidad_fluido * g * volumen
tipo: completar
tolerancia_abs: 1

enunciado: "Un cuerpo con un volumen de {volumen} m³ está completamente sumergido en agua (densidad {densidad_fluido} kg/m³). ¿Cuál es el valor del empuje (en Newtons) que experimenta el cuerpo? (Usa g = {g} m/s² para tus cálculos)."

pasos:
  - "Calcular el volumen desplazado (es igual al volumen del cuerpo sumergido)."
  - "Aplicar la fórmula del empuje: E = densidad_fluido * g * volumen_desplazado."

explicacion: |
  El empuje es igual al peso del volumen de fluido desplazado: E = ρ * g * V.
  Para el caso seleccionado: {densidad_fluido} * {g} * {volumen} = {densidad_fluido * g * volumen} N.
```

### 23 — La condición de equilibrio

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["equilibrio", "fuerzas"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando un objeto flota en equilibrio en la superficie de un líquido, la magnitud de la fuerza de empuje es igual a la magnitud de su peso."

explicacion: |
  Para que un objeto flote en equilibrio (sin aceleración vertical), la fuerza hacia arriba (empuje) debe compensar exactamente la fuerza hacia abajo (peso).
```

### 24 — Densidad y flotabilidad

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["densidad", "conceptos"]

respuesta: "densidad"
tipo: completar
respuestas_validas:
  - "densidad"

enunciado: "Si un objeto tiene una ___ mayor que la del fluido, el objeto se hundirá."

explicacion: |
  La flotabilidad depende de la relación entre la densidad del objeto y la del fluido.
```

### 25 — Pasos para hallar el empuje

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

opciones_explicitas: ["Calcular volumen desplazado", "Multiplicar por densidad del fluido", "Multiplicar por gravedad"]
respuesta_orden: ["Calcular volumen desplazado", "Multiplicar por densidad del fluido", "Multiplicar por gravedad"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular la fuerza de empuje de un objeto sumergido:"

explicacion: |
  1. Identificar el volumen desplazado.
  2. Multiplicar por la densidad del fluido (obteniendo la masa del fluido desplazado).
  3. Multiplicar por la gravedad para obtener la fuerza (peso del fluido).
```
