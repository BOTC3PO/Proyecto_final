### 1 — Ley de Fourier: Conducción térmica
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
tipo: input
tolerancia_abs: 0.1

enunciado: "Una barra de cobre tiene una sección transversal de {area} m² y un espesor de {espesor} m. Si la diferencia de temperatura entre sus extremos es de {dT} °C y la conductividad térmica del cobre es de {k} W/(m·K), ¿cuál es el flujo de calor (W) que atraviesa la barra?"

pasos:
  - "Identificar los datos: Área (A) = 0.5 m², Espesor (L) = 0.02 m, Conductividad (k) = 400 W/(m·K), Diferencia de temperatura (ΔT) = 30 °C."
  - "Aplicar la Ley de Fourier: Q = (k * A * ΔT) / L"
  - "Calcular: Q = (400 * 0.5 * 30) / 0.02 = 6000 / 0.02 = 300000 W."

explicacion: |
  El flujo de calor por conducción se calcula con la Ley de Fourier. En este caso, el resultado es 300,000 W.
```

### 2 — Mecanismos de transferencia: El vacío
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

### 3 — Convección vs Conducción
```
metadata:
  materia: "fisica"
  tema: "transmision_calor_conveccion"
  nivel: "basico"
  tags: ["conveccion", "fluidos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un metal sólido", "un fluido como el aire"], ["conducción", "convección"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["conducción", "convección"]

enunciado: "El movimiento de las partículas de un fluido (líquido o gas) debido a diferencias de densidad causadas por cambios de temperatura es el mecanismo de: ___"

explicacion: |
  La convección implica el transporte de materia (fluido) para transferir energía térmica.
```

### 4 — Ley de Stefan-Boltzmann
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
  potencia: emision * sigma * area * (temp_k^2)

respuesta: potencia
tipo: input
tolerancia_abs: 1.0

enunciado: "Un objeto negro ideal con una emisividad de {emision} tiene una superficie de {area} m². Si su temperatura es de {temp_k} K, ¿cuánta potencia radiada (W) emite? (Usa σ = 5.67e-8 W/m²K⁴)"

pasos:
  - "La fórmula de la potencia radiada es: P = ε * σ * A * T⁴"
  - "Sustituir valores: P = 0.8 * 5.67e-8 * 2.0 * (300^4)"
  - "Calcular: P = 0.8 * 5.67e-8 * 2.0 * 8100000000 = 734.88 W"

explicacion: |
  Utilizando la Ley de Stefan-Boltzmann, la potencia radiada es aproximadamente 734.88 W.
```

### 5 — Orden de procesos de transferencia
```
metadata:
  materia: "fisica"
  tema: "transmision_calor_conceptos"
  nivel: "basico"
  tags: ["conceptos", "ordenar"]

opciones_explicitas: ["Conducción", "Convección", "Radiación"]
respuesta: ["Conducción", "Convección", "Radiación"]
tipo: ordenar

enunciado: "Ordena los mecanismos de transferencia de calor según el medio necesario, de mayor dependencia de la materia (contacto directo) a menor dependencia (no requiere materia):"

explicacion: |
  1. Conducción: Requiere contacto directo entre partículas sólidas o fluidos.
  2. Convección: Requiere el movimiento de un fluido.
  3. Radiación: No requiere medio material.
```