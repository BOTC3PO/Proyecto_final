### 1 — El concepto de la Ley de Hubble
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "cosmologia"]

respuesta: "alejamiento"
tipo: completar
respuestas_validas: ["alejamiento", "expansión"]

enunciado: "La Ley de Hubble establece que la velocidad de ___ de las galaxias es proporcional a su distancia respecto a la Tierra."

explicacion: |
  La ley de Hubble-Lemaître indica que cuanto más lejana es una galaxia, mayor es la velocidad con la que se aleja de nosotros, lo que sugiere la expansión del universo.
```

### 2 — Relación de proporcionalidad
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Si una galaxia A está al doble de distancia que una galaxia B, según la Ley de Hubble, la velocidad de la galaxia A será ___ que la de la galaxia B."

explicacion: |
  Como la velocidad es directamente proporcional a la distancia ($v \propto d$), si la distancia se duplica, la velocidad también se duplica.
```

### 3 — Cálculo de la velocidad de recesión
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  distancia: 100000000
  hubble: 70

respuesta: 7000000000
tipo: input
tolerancia_abs: 1

enunciado: "Una galaxia se encuentra a una distancia de {distancia} parsecs. Si la constante de Hubble es $H_0 = {hubble}$ km/s/Mpc, ¿cuál es la velocidad de recesión en km/s? (Usa la fórmula $v = H_0 \cdot d$)"

pasos:
  - "Identificar la distancia ($d$) y la constante de Hubble ($H_0$)."
  - "Multiplicar la constante de Hubble por la distancia: $v = 70 \cdot 100.000.000$."

explicacion: |
  Aplicando la fórmula $v = H_0 \cdot d$: $70 \times 100.000.000 = 7.000.000.000$ km/s.
```

### 4 — Componentes de la fórmula
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["formula"]

respuesta: "distancia"
tipo: completar
respuestas_validas: ["distancia", "velocidad", "constante"]

enunciado: "En la expresión matemática $v = H_0 \cdot d$, la variable $d$ representa la ___ de la galaxia."

explicacion: |
  En la ecuación de Hubble, $v$ es la velocidad de recesión, $H_0$ es la constante de Hubble y $d$ es la distancia.
```

### 5 — Interpretación de la expansión
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["teoria"]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que la Ley de Hubble implica que el universo se está expandiendo?"

explicacion: |
  Sí, el hecho de que todas las galaxias presenten un corrimiento al rojo (redshift) proporcional a su distancia es la evidencia fundamental de la expansión del tejido espacio-temporal.
```