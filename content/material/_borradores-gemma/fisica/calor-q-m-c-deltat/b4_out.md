### 1 — Calor vs. Temperatura
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

### 2 — Calor Específico y Capacidad Calorífica
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

respuesta: opciones_explicitas[1]
tipo: mc

enunciado: "Si comparamos dos bloques de {tipo_sustancia} de diferentes masas pero del mismo material, el calor específico de ambos será igual. Esto se debe a que el calor específico es una propiedad ________."

explicacion: |
  El calor específico es una propiedad intensiva porque solo depende de la naturaleza del material y no de la cantidad de sustancia presente.
```

### 3 — Calor Latente vs. Calor Sensible
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

### 4 — Relación entre Masa y Calor
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
tipo: input
tolerancia_abs: 0.1

enunciado: "Calcula la cantidad de calor (en Joules) necesaria para elevar la temperatura de {masa_kg} kg de una sustancia con un calor específico de {ce} J/(kg·K) en {dt} °C."

explicacion: |
  Usando la fórmula Q = m · c · ΔT:
  Q = {masa_kg} * {ce} * {dt} = {masa_kg * ce * dt} J.
```

### 5 — Orden de procesos térmicos
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