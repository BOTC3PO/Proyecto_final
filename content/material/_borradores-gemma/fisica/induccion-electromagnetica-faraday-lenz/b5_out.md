### 1 — El freno electromagnético
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["faraday", "lenz", "aplicacion"]

variables:
  escenario: uno_de([["un disco de cobre que gira entre imanes", "frenado"], ["una barra de aluminio que se mueve en un tubo de cobre", "frenado"]])
  idx: uno_de([0, 1])

enunciado: "En un sistema de frenado electromagnético, si el flujo magnético a través de una bobina cambia, se induce una corriente. Según la Ley de Lenz, la dirección de la corriente inducida será tal que el campo magnético creado por ella se oponga al ___ del flujo magnético que la produjo."

respuestas_validas: ["cambio"]
tipo: completar

explicacion: |
  La Ley de Lenz es una consecuencia de la conservación de la energía. La corriente inducida crea un campo magnético que se opone al cambio de flujo que la originó.
```

### 2 — Generador de corriente
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["faraday", "generador"]

variables:
  datos: [["15", "2"], ["25", "5"], ["40", "8"]]
  idx: uno_de([0, 1, 2])
  N: datos[idx][0]
  phi: datos[idx][1]

enunciado: "Un generador eléctrico tiene {N} espiras. Si el flujo magnético a través de cada espira cambia de 0 a {phi} Wb en un intervalo de 2 segundos, la magnitud de la fuerza electromotriz (FEM) inducida es de ___ V."

pasos:
  - "Calcular el cambio de flujo total: ΔΦ_total = N * Δφ"
  - "Aplicar la Ley de Faraday: ε = ΔΦ_total / Δt"

respuestas_validas: ["15.0", "62.5", "160.0"]
tipo: input
tolerancia_abs: 0.1

explicacion: |
  Usando la Ley de Faraday: ε = (N * Δφ) / Δt. 
  Para el caso seleccionado: ε = ({N} * {phi}) / 2 = {redondear(float({N} * {phi} / 2), 1)} V.
```

### 3 — El principio de Lenz
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["lenz", "teoria"]

enunciado: "Si acercamos el polo norte de un imán hacia una bobina, la bobina experimentará una fuerza de repulsión porque la corriente inducida creará un campo magnético con el mismo polo (norte) hacia el imán. ¿Es esto verdadero o falso?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. Según la Ley de Lenz, la corriente inducida crea un campo que se opone al cambio. Si el flujo aumenta (acercar imán), la bobina crea un campo opuesto para intentar mantener el flujo constante.
```

### 4 — Componentes de la FEM
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["faraday", "formula"]

enunciado: "En la expresión de la magnitud de la FEM inducida, ε = -N * (dΦ/dt), el signo negativo representa la dirección de la corriente según la Ley de ___."

opciones_explicitas: ["Faraday", "Lenz", "Ohm", "Coulomb"]
respuesta: "Lenz"
tipo: mc

explicacion: |
  El signo negativo es la expresión matemática de la Ley de Lenz, indicando la oposición al cambio de flujo.
```

### 5 — Pasos para calcular la FEM
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "avanzado"
  tags: ["procedimiento", "faraday"]

enunciado: "Para determinar la magnitud de la fuerza electromotriz inducida en un conductor en movimiento dentro de un campo magnético uniforme, ¿cuál es el orden correcto de los pasos?"

opciones_explicitas: ["Determinar el cambio de flujo magnético, Calcular la derivada del flujo respecto al tiempo, Multiplicar por el número de espiras", "Multiplicar por el número de espiras, Calcular la derivada del flujo respecto al tiempo, Determinar el cambio de flujo magnético", "Calcular la derivada del flujo respecto al tiempo, Multiplicar por el número de espiras, Determinar el cambio de flujo magnético"]
respuesta: ["Determinar el cambio de flujo magnético", "Calcular la derivada del flujo respecto al tiempo", "Multiplicar por el número de espiras"]
tipo: ordenar

explicacion: |
  Primero se identifica cuánto cambia el flujo (ΔΦ), luego la tasa de cambio (dΦ/dt) y finalmente se escala por el número de vueltas (N) de la bobina.
```