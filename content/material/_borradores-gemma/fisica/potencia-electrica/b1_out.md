### 1 — Concepto de Potencia Eléctrica
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "potencia"
tipo: "completar"
respuestas_validas: ["potencia", "Potencia"]

enunciado: "La rapidez con la que un dispositivo consume o transforma energía eléctrica en otro tipo de energía se denomina ___."

explicacion: |
  La potencia eléctrica mide la tasa de transferencia de energía por unidad de tiempo.
```

### 2 — Unidades de Medida
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades", "vatios"]

opciones_explicitas: ["Voltio (V)", "Amperio (A)", "Vatio (W)", "Ohmio (Ω)"]
respuesta: "Vatio (W)"
tipo: "mc"

enunciado: "En el Sistema Internacional de Unidades, la unidad de potencia eléctrica es el:"

explicacion: |
  El vatio (W) se define como el trabajo realizado por una fuerza de un Newton a lo largo de un metro en un segundo, o equivalentemente, la potencia de un dispositivo que consume 1 Joule por segundo.
```

### 3 — Relación de Variables
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["relacion_variables", "formula"]

variables:
  escenario: uno_de([
    ["V=12, I=2", "24"],
    ["V=220, I=5", "1100"],
    ["V=10, I=0.5", "5"]
  ])

respuesta: escenario[2][1]
tipo: "input"
tolerancia_abs: 0

enunciado: "Si un dispositivo tiene un voltaje de {escenario[2][0]}, ¿cuál es su potencia eléctrica en vatios?"

pasos:
  - "Identificar el voltaje (V) y la intensidad (I)."
  - "Aplicar la fórmula P = V · I."

explicacion: |
  Usando la fórmula P = V · I:
  P = 10V · 0.5A = 5W.
```

### 4 — Veracidad de la Fórmula
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["teoria", "verdadero_falso"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que la potencia eléctrica es directamente proporcional a la resistencia cuando el voltaje se mantiene constante?"

explicacion: |
  Falso. Según la fórmula P = V²/R, si el voltaje (V) es constante, la potencia es inversamente proporcional a la resistencia (R). A mayor resistencia, menor potencia.
```

### 5 — Derivación de Fórmulas
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["formulas", "ley_ohm"]

opciones_explicitas: ["P = I · R", "P = V / R", "P = I² · R", "P = V² / R"]
respuesta: "P = I² · R"
tipo: "mc"

enunciado: "Combinando la Ley de Ohm (V = I · R) con la definición de potencia (P = V · I), obtenemos que la potencia también puede expresarse como:"

explicacion: |
  Sustituyendo V por (I · R) en la fórmula de potencia:
  P = (I · R) · I = I² · R.
```