# Fisica — Transmision calor conduccion conveccion radiacion (cuestionario, 27 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Mecanismos de transferencia de calor

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

tipo: mc
opciones_explicitas: ["Conducción", "Convección", "Radiación", "Las tres son correctas"]

enunciado: "El mecanismo de transferencia de calor que ocurre a través del contacto directo entre partículas de un material sin que haya desplazamiento de la materia es la ___."

respuesta: "Conducción"

explicacion: |
  La conducción es la transferencia de energía térmica mediante colisiones moleculares en un medio material (generalmente sólidos).
```

### 2 — El medio en la radiación

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["radiacion", "vacio"]

tipo: vf

enunciado: "La radiación térmica es el único mecanismo de transferencia de calor que puede ocurrir en el vacío, ya que no requiere de un medio material para propagarse."

respuesta: verdadero

explicacion: |
  La radiación se propaga mediante ondas electromagnéticas, por lo que puede viajar por el vacío (como la luz del Sol).
```

### 3 — Movimiento de fluidos

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conveccion", "fluidos"]

tipo: completar
respuestas_validas:
  - "convección"

enunciado: "La transferencia de calor por ___ ocurre mediante el movimiento macroscópico de corrientes de un fluido (líquido o gas) debido a diferencias de densidad."

respuesta: "convección"

explicacion: |
  En la convección, el fluido caliente (menos denso) sube y el fluido frío (más denso) baja, creando una corriente.
```

### 4 — Comparación de mecanismos

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conduccion", "conveccion", "radiacion"]

tipo: mc
opciones_explicitas: ["Conducción", "Convección", "Radiación"]

enunciado: "Si el calor se transmite mediante el movimiento de un fluido, estamos ante la ___."

respuesta: "Convección"
```

### 5 — Identificación de procesos

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion"]

variables:
  datos: [["Convección", "movimiento de fluidos"], ["Conducción", "contacto sólido"]]
  idx: uno_de([0, 1])
  proceso: datos[idx][0]
  caracteristica: datos[idx][1]

enunciado: "El proceso que se caracteriza por el {caracteristica} es la {proceso}."

respuesta: proceso

explicacion: |
  La respuesta depende del sorteo realizado en la variable 'idx'.
```

### 6 — Clasificación de transferencia

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion"]

tipo: mc
opciones_explicitas: ["Conducción", "Convección", "Radiación"]

enunciado: "El mecanismo que implica el transporte de masa debido a gradientes de temperatura en un fluido es:"

respuesta: "Convección"

explicacion: |
  La convección requiere el movimiento físico de las partículas del fluido.
```

### 7 — Orden de los procesos (Escala de escala)

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "avanzado"
  tags: ["orden", "mecanismos"]

tipo: ordenar
opciones_explicitas: ["Conducción", "Convección", "Radiación"]
respuesta_orden: ["Conducción", "Convección", "Radiación"]

enunciado: "Ordene los mecanismos de transferencia de calor según su dependencia de un medio material, desde el que requiere contacto sólido (más restrictivo) hasta el que no requiere medio (más general):"

explicacion: |
  La conducción requiere contacto/medio sólido; la convección requiere fluido; la radiación no requiere nada.
```

### 8 — Ley de Fourier: Conducción térmica

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_conduccion"
  nivel: "intermedio"
  tags: ["conduccion", "ley_de_fourier", "calculo"]

variables:
  area: 0.5
  espesor: 0.02
  k: 400
  dT: 30
  calor_flujo: (k * area * dT) / espesor

respuesta: calor_flujo
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una barra de cobre tiene una sección transversal de {area} m² y un espesor de {espesor} m. Si la diferencia de temperatura entre sus extremos es de {dT} °C y la conductividad térmica del cobre es de {k} W/(m·K), ¿cuál es el flujo de calor (W) que atraviesa la barra?"

pasos:
  - "Identificar los datos: Área (A) = 0.5 m², Espesor (L) = 0.02 m, Conductividad (k) = 400 W/(m·K), Diferencia de temperatura (ΔT) = 30 °C."
  - "Aplicar la Ley de Fourier: Q = (k * A * ΔT) / L"
  - "Calcular: Q = (400 * 0.5 * 30) / 0.02 = 6000 / 0.02 = 300000 W."

explicacion: |
  El flujo de calor por conducción se calcula con la Ley de Fourier. En este caso, el resultado es 300,000 W.
```

### 9 — Mecanismos de transferencia: El vacío

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_radiacion"
  nivel: "basico"
  tags: ["radiacion", "vacuo"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible que el calor se transmita por conducción a través del vacío absoluto?"

explicacion: |
  Falso. La conducción y la convección requieren un medio material (átomos o moléculas) para transferir energía mediante colisiones o movimiento de fluidos. La radiación es el único mecanismo que puede ocurrir en el vacío mediante ondas electromagnéticas.
```

### 10 — Convección vs Conducción

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_conveccion"
  nivel: "basico"
  tags: ["conveccion", "fluidos"]

respuesta: "convección"
tipo: mc
opciones_explicitas: ["conducción", "convección"]

enunciado: "El movimiento de las partículas de un fluido (líquido o gas) debido a diferencias de densidad causadas por cambios de temperatura es el mecanismo de: ___"

explicacion: |
  La convección implica el transporte de materia (fluido) para transferir energía térmica.
```

### 11 — Ley de Stefan-Boltzmann

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_radiacion"
  nivel: "avanzado"
  tags: ["radiacion", "stefan_boltzmann"]

variables:
  emision: 0.8
  area: 2.0
  temp_k: 300
  sigma: 5.67e-8
  potencia: emision * sigma * area * (temp_k^4)

respuesta: potencia
tipo: completar
tolerancia_abs: 1.0

enunciado: "Un objeto negro ideal con una emisividad de {emision} tiene una superficie de {area} m². Si su temperatura es de {temp_k} K, ¿cuánta potencia radiada (W) emite? (Usa σ = 5.67e-8 W/m²K⁴)"

pasos:
  - "La fórmula de la potencia radiada es: P = ε * σ * A * T⁴"
  - "Sustituir valores: P = 0.8 * 5.67e-8 * 2.0 * (300^4)"
  - "Calcular: P = 0.8 * 5.67e-8 * 2.0 * 8100000000 = 734.88 W"

explicacion: |
  Utilizando la Ley de Stefan-Boltzmann, la potencia radiada es aproximadamente 734.88 W.
```

### 12 — Orden de procesos de transferencia

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_conceptos"
  nivel: "basico"
  tags: ["conceptos", "ordenar"]

opciones_explicitas: ["Conducción", "Convección", "Radiación"]
respuesta_orden: ["Conducción", "Convección", "Radiación"]
tipo: ordenar

enunciado: "Ordena los mecanismos de transferencia de calor según el medio necesario, de mayor dependencia de la materia (contacto directo) a menor dependencia (no requiere materia):"

explicacion: |
  1. Conducción: Requiere contacto directo entre partículas sólidas o fluidos.
  2. Convección: Requiere el movimiento de un fluido.
  3. Radiación: No requiere medio material.
```

### 13 — ¿Cómo se transfiere el calor en el vacío?

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["radiacion", "vacuo"]

tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion", "conduccion y conveccion"]

enunciado: "A diferencia de la conducción y la convección, la radiación térmica puede transferir energía a través del vacío porque no requiere un medio material. ¿Cuál es este mecanismo?"

respuesta: "radiacion"

explicacion: |
  La radiación térmica ocurre mediante ondas electromagnéticas y no necesita partículas para propagarse, lo que permite que el calor viaje por el vacío (como la radiación solar).
```

### 14 — El error de la conducción en fluidos

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion", "conduccion"]

variables:
  es_fluido: falso

tipo: vf

enunciado: "En un fluido (como el aire o el agua) en reposo, el mecanismo predominante de transferencia de calor es la conducción térmica. ¿Es esto verdadero o falso?"

respuesta: falso

explicacion: |
  Aunque la conducción ocurre en fluidos, la transferencia de calor en fluidos suele estar dominada por la convección, que involucra el movimiento macroscópico de las masas de fluido.
```

### 15 — Mecanismos en una taza de café

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion", "conduccion", "radiacion"]

tipo: ordenar

opciones_explicitas: ["Convección del líquido", "Conducción a través de las paredes", "Radiación hacia el ambiente"]

enunciado: "Ordena los mecanismos de transferencia de calor de una taza de café caliente, desde el que ocurre principalmente en el cuerpo del líquido hasta el que ocurre hacia el espacio exterior."

respuesta_orden: ["Convección del líquido", "Conducción a través de las paredes", "Radiación hacia el ambiente"]

explicacion: |
  1. La convección mueve el líquido caliente hacia arriba dentro de la taza. 
  2. La conducción transporta calor a través de las paredes sólidas. 
  3. La radiación emite energía electromagnética hacia el entorno.
```

### 16 — Identificación de mecanismos

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["El calor que viaja por una barra de metal", "conduccion"], ["El aire caliente que sube al calentarse", "conveccion"], ["El calor que sentimos del sol", "radiacion"]]

tipo: completar

enunciado: "En el escenario seleccionado: {escenarios[escenario_idx][0]}, el mecanismo principal es la ___."

respuestas_validas:
  - "conduccion"
  - "conveccion"
  - "radiacion"
respuesta: escenarios[escenario_idx][1]

explicacion: |
  Cada mecanismo tiene una naturaleza distinta: la conducción requiere contacto directo en sólidos, la convección requiere movimiento de fluidos, y la radiación requiere ondas electromagnéticas.
```

### 17 — ¿Depende la radiación de la temperatura?

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "avanzado"
  tags: ["radiacion", "ley_stefan"]

variables:
  temp_k: 300

tipo: completar

enunciado: "Si un objeto emite radiación térmica, la cantidad de energía emitida por unidad de área es proporcional a la temperatura elevada a la cuarta potencia (T^4). Si la temperatura absoluta es de {temp_k} K, ¿cuál es el valor de la temperatura elevada a la cuarta potencia?"

pasos:
  - "Elevar la temperatura absoluta al exponente 4."

respuesta: 8100000000.0
tolerancia_abs: 0.1

explicacion: |
  Según la ley de Stefan-Boltzmann, la potencia irradiada es proporcional a T^4. Para 300 K, el cálculo es 300^4 = 8,100,000,000 (coherente con el cálculo de la pregunta 11, que usa este mismo valor de 300^4).
```

### 18 — Mecanismos de transferencia térmica

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

tipo: mc
opciones_explicitas: ["La conducción requiere un medio material para transferir energía", "La radiación depende de la densidad del medio para ocurrir", "La convección es la transferencia de energía mediante contacto directo", "La radiación requiere contacto físico entre cuerpos"]
respuesta: "La conducción requiere un medio material para transferir energía"

enunciado: "La principal diferencia entre la radiación y los otros dos mecanismos de transferencia de calor es que..."

explicacion: |
  La conducción y la convección requieren un medio material (sólido, líquido o gas) para propagar el calor. La radiación, en cambio, se produce mediante ondas electromagnéticas y puede ocurrir en el vacío.
```

### 19 — El proceso de conducción

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "basico"
  tags: ["conduccion", "mecanismos"]

tipo: completar
respuestas_validas:
  - "vibraciones"
  - "colisiones"

enunciado: "En un sólido, la conducción térmica ocurre principalmente debido a las ___ de las partículas y las colisiones entre electrones libres."

explicacion: |
  La conducción en sólidos se debe al movimiento de los electrones libres y a las vibraciones de la red cristalina (fonones) que transmiten la energía cinética de las zonas calientes a las frías.
```

### 20 — Convección en fluidos

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "intermedio"
  tags: ["conveccion", "fluidos"]

variables:
  escenario: uno_de([["agua hirviendo en una olla", "convección"], ["aire caliente subiendo en una habitación", "convección"], ["el movimiento de magma en el manto terrestre", "convección"]])

tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion"]

enunciado: "El fenómeno descrito en el escenario de {escenario[0]} es un ejemplo de..."

respuesta: "conveccion"

explicacion: |
  La convección es la transferencia de calor en fluidos (líquidos o gases) causada por la diferencia de densidad en las corrientes de fluido provocadas por cambios de temperatura.
```

### 21 — Verdad o Falso: Radiación en el vacío

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "basico"
  tags: ["radiacion", "vacio"]

tipo: vf

enunciado: "La transferencia de calor por radiación puede ocurrir en el vacío absoluto, como ocurre con la energía que llega del Sol a la Tierra."

respuesta: verdadero

explicacion: |
  A diferencia de la conducción y la convección, la radiación no necesita un medio material, ya que se transporta mediante ondas electromagnéticas.
```

### 22 — Orden de los mecanismos según el medio

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "intermedio"
  tags: ["ordenar", "mecanismos"]

tipo: ordenar
opciones_explicitas: ["Radiación", "Convección", "Conducción"]

enunciado: "Ordene los mecanismos de transferencia de calor de menor a mayor dependencia de la presencia de un medio material (desde el que no requiere medio hasta el que requiere contacto directo):"

respuesta_orden: ["Radiación", "Convección", "Conducción"]

explicacion: |
  1. Radiación: No requiere medio (puede ser en vacío).
  2. Convección: Requiere un fluido (líquido o gas).
  3. Conducción: Es el mecanismo predominante en sólidos (contacto directo entre partículas).
```

### 23 — Mecanismos de transferencia en un termo

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Un termo de café con doble pared de vacío", "radiacion"], ["Una cuchara de metal en el café caliente", "conduccion"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion"]

enunciado: "En el escenario seleccionado: {datos[escenario_idx][0]}, el mecanismo de transferencia de calor predominante que se intenta evitar o que ocurre es la {datos[escenario_idx][1]}."

explicacion: |
  La conducción requiere contacto directo entre partículas, la convección requiere un fluido en movimiento y la radiación se transmite mediante ondas electromagnéticas (como en el vacío de un termo).
```

### 24 — El calor en el aire

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion"]

respuesta: verdadero
tipo: vf

enunciado: "En la convección, el calor se transfiere mediante el movimiento macroscópico de un fluido (líquido o gas) debido a diferencias de densidad."

explicacion: |
  Correcto. Las corrientes de convección se originan porque el fluido caliente es menos denso y sube, mientras que el frío es más denso y baja.
```

### 25 — Identificación de procesos

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

variables:
  caso_idx: uno_de([0, 1, 2])
  casos: [["El sol calentando la Tierra", "radiacion"], ["El calor de una estufa calentando el aire de una habitación", "conveccion"], ["El mango de una sartén que se calienta al fuego", "conduccion"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion"]

enunciado: "Analiza el caso: {casos[caso_idx][0]}. ¿Qué mecanismo de transferencia de calor es el principal?"

explicacion: |
  Cada caso representa un mecanismo distinto: contacto (conducción), movimiento de fluido (convección) u ondas electromagnéticas (radiación).
```

### 26 — Orden de procesos en un sistema térmico

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "avanzado"
  tags: ["secuencia", "transferencia"]

respuesta_orden: ["radiacion", "conveccion", "conduccion"]
tipo: ordenar

opciones_explicitas: ["radiacion", "conveccion", "conduccion"]

enunciado: "Ordena los mecanismos de transferencia de calor según su capacidad para propagarse en el vacío, desde el que puede hacerlo sin necesidad de materia hasta el que requiere contacto sólido directo."

explicacion: |
  La radiación no requiere medio (puede viajar en el vacío), la convección requiere un fluido y la conducción requiere contacto entre sólidos o fluidos.
```

### 27 — El efecto de la superficie

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["radiacion", "emision"]

variables:
  propiedad_idx: uno_de([0, 1])
  propiedades: [["superficie negra y rugosa", "mayor"], ["superficie blanca y pulida", "menor"]]

respuesta: propiedades[propiedad_idx][1]
tipo: completar
respuestas_validas:
  - "mayor"
  - "menor"

enunciado: "Una superficie con una propiedad de absorción/emisión de tipo {propiedades[propiedad_idx][0]} presentará una tasa de transferencia por radiación ___ que una superficie reflectante."

explicacion: |
  Los cuerpos negros son los mejores emisores y absorbedores de radiación térmica. Las superficies blancas o brillantes reflejan la mayor parte de la energía.
```
