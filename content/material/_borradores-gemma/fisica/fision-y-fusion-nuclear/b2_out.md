### 1 — La equivalencia masa-energía
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["einstein", "relatividad", "energia"]

variables:
  m_defecto_kg: 0.000000000000000000001

respuesta: m_defecto_kg * c * c
tipo: input
tolerancia_abs: 1e-20

enunciado: "Si en un proceso nuclear se pierde una cantidad de masa de {m_defecto_kg} kg, ¿cuánta energía se libera en Joules según la ecuación de Einstein?"

pasos:
  - "Identificar la masa perdida (defecto de masa): m = 1e-21 kg"
  - "Utilizar la fórmula E = m * c²"
  - "Sustituir c ≈ 3e8 m/s: E = 1e-21 * (3e8)² = 1e-21 * 9e16"
  - "Resultado: 9e-5 J"

explicacion: |
  La energía liberada proviene del defecto de masa. Al convertir esa masa perdida en energía mediante E = mc², obtenemos la energía liberada en el proceso.
```

### 2 — Concepto de Defecto de Masa
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["conceptos", "nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el defecto de masa la diferencia entre la masa de los nucleones individuales y la masa del núcleo resultante?"

explicacion: |
  Correcto. La masa de un núcleo atómico es siempre menor que la suma de las masas de sus protones y neutrones por separado. Esa diferencia es lo que se convierte en energía de enlace.
```

### 3 — Fisión vs Fusión
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["fision", "fusion"]

variables:
  escenario: uno_de(["fision", "fusion"])

respuesta: escenario
tipo: mc
opciones_explicitas: ["fision", "fusion"]

enunciado: "El proceso que consiste en la unión de dos núcleos ligeros para formar uno más pesado se denomina {escenario}."

explicacion: |
  Si el escenario seleccionado fue {escenario}, la respuesta es correcta. La fusión une núcleos ligeros (como el hidrógeno) y la fisión divide núcleos pesados (como el uranio).
```

### 4 — Cálculo de energía de fusión
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["calculo", "fusion"]

variables:
  datos: [
    [0.002, "1.8e14"],
    [0.005, "4.5e14"],
    [0.001, "9.0e13"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["1.8e14", "4.5e14", "9.0e13"]

enunciado: "En una reacción de fusión, la masa inicial es de 1.005 kg y la masa final es de 1.000 kg. La energía liberada es de ___ J."

pasos:
  - "Calcular el defecto de masa: Δm = 1.005 - 1.000 = 0.005 kg (usando el valor del ejemplo)"
  - "Aplicar E = Δm * c²"
  - "E = 0.005 * (3e8)^2 = 4.5e14 J"

explicacion: |
  El cálculo depende del valor de la masa perdida. Para un defecto de 0.005 kg, la energía es 4.5e14 J.
```

### 5 — Orden de procesos energéticos
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["orden", "procesos"]

respuesta: ["Fisión", "Fusión"]
tipo: ordenar
opciones_explicitas: ["Fisión", "Fusión"]

enunciado: "Ordena estos procesos según el tipo de núcleo que utilizan: 1. División de un núcleo pesado. 2. Unión de núcleos ligeros."

explicacion: |
  La fisión implica la división de un núcleo grande y pesado, mientras que la fusión implica la unión de núcleos muy pequeños y ligeros.
```