### 1 — Cálculo de energía cinética
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["formula", "calculo"]

variables:
  m: 10
  v: 4

respuesta: 80.0
tipo: input
tolerancia_abs: 0.1

enunciado: "Un objeto con una masa de {m} kg se desplaza con una velocidad constante de {v} m/s. ¿Cuál es su energía cinética en Joules?"

pasos:
  - "Identificar la masa (m = 10 kg) y la velocidad (v = 4 m/s)."
  - "Aplicar la fórmula: Ec = 1/2 * m * v²."
  - "Sustituir: Ec = 0.5 * 10 * (4)² = 0.5 * 10 * 16."
  - "Resultado: Ec = 5 * 16 = 80 J."

explicacion: |
  La energía cinética se calcula con la fórmula $E_c = \frac{1}{2}mv^2$. 
  En este caso: $0.5 \cdot 10 \cdot 4^2 = 0.5 \cdot 10 \cdot 16 = 80$ Joules.
```

### 2 — Relación masa y energía
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

opciones_explicitas: ["se duplica", "se cuadruplica", "se mantiene igual", "se reduce a la mitad"]

respuesta: "se cuadruplica"
tipo: mc

enunciado: "Si un objeto mantiene su velocidad pero su masa se duplica, su energía cinética ___."

explicacion: |
  Como la energía cinética es directamente proporcional a la masa ($E_c \propto m$), si la masa se multiplica por 2, la energía también se multiplica por 2. 
  *Nota: Si la pregunta fuera sobre la velocidad, la relación sería cuadrática.*
```

### 3 — Verificación de concepto
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["concepto"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un objeto con velocidad cero posee energía cinética?"

explicacion: |
  Verdadero. Si $v = 0$, entonces $E_c = \frac{1}{2} \cdot m \cdot 0^2 = 0$. Un objeto en reposo no tiene energía cinética.
```

### 4 — Completar fórmula
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["formula"]

respuestas_validas: ["1/2", "0.5", "0,5"]
respuesta: "1/2"
tipo: completar

enunciado: "La expresión matemática para la energía cinética es Ec = ___ * m * v²."

explicacion: |
  La constante que acompaña al producto de la masa y el cuadrado de la velocidad es un medio (1/2 o 0.5).
```

### 5 — Análisis de cambios de velocidad
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "avanzado"
  tags: ["velocidad", "calculo"]

variables:
  m: 2
  v_inicial: 3
  v_final: 6

respuesta: 36.0
tipo: input
tolerancia_abs: 0.1

enunciado: "Un cuerpo de {m} kg aumenta su velocidad de {v_inicial} m/s a {v_final} m/s. ¿Cuál es el cambio en su energía cinética (ΔEc) en Joules?"

pasos:
  - "Calcular Ec inicial: 0.5 * 2 * 3^2 = 9 J."
  - "Calcular Ec final: 0.5 * 2 * 6^2 = 36 J."
  - "Calcular la diferencia: 36 - 9 = 27 J."
  - "Revisar: El enunciado pide el cambio (final - inicial)."

explicacion: |
  $\Delta E_c = E_{c,final} - E_{c,inicial}$
  $\Delta E_c = (0.5 \cdot 2 \cdot 6^2) - (0.5 \cdot 2 \cdot 3^2) = 36 - 9 = 27$ Joules.
  *(Nota: El valor en la variable respuesta es 27, corregido mentalmente para el cálculo real)*.
```
*(Nota para el usuario: En el ejercicio 5, la respuesta correcta es 27, corregiré el valor en el bloque final para que sea coherente)*.

### 5 — Análisis de cambios de velocidad (Corregido)
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "avanzado"
  tags: ["velocidad", "calculo"]

variables:
  m: 2
  v_inicial: 3
  v_final: 6

respuesta: 27.0
type: input
tolerancia_abs: 0.1

enunciado: "Un cuerpo de {m} kg aumenta su velocidad de {v_inicial} m/s a {v_final} m/s. ¿Cuál es el cambio en su energía cinética (ΔEc) en Joules?"

pasos:
  - "Calcular Ec inicial: 0.5 * 2 * 3^2 = 9 J."
  - "Calcular Ec final: 0.5 * 2 * 6^2 = 36 J."
  - "Calcular la diferencia: 36 - 9 = 27 J."

explicacion: |
  $\Delta E_c = E_{c,final} - E_{c,inicial}$
  $\Delta E_c = (0.5 \cdot 2 \cdot 6^2) - (0.5 \cdot 2 \cdot 3^2) = 36 - 9 = 27$ Joules.
```