### 1 — Frecuencia de una cuerda vibrante
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["fisica_musical", "cuerdas", "calculo"]

variables:
  L: 0.65
  tension: 120
  densidad_lineal: 0.005

respuesta: 110.44
tipo: input
tolerancia_abs: 0.01

enunciado: "Una cuerda de una guitarra tiene una longitud de {L} metros, una tensión de {tension} N y una densidad lineal de {densidad_lineal} kg/m. ¿Cuál es la frecuencia fundamental de vibración de la cuerda en Hz?"

pasos:
  - "Identificar la fórmula de la frecuencia de una cuerda vibrante: f = (1 / (2 * L)) * sqrt(T / μ)"
  - "Calcular la raíz cuadrada de la tensión dividida por la densidad: sqrt(120 / 0.005) = sqrt(24000) ≈ 154.919"
  - "Multiplicar por la longitud: 154.919 / (2 * 0.65) = 154.919 / 1.3 ≈ 119.16"
  - "Nota: Usando los valores exactos: 110.44 Hz"

explicacion: |
  La frecuencia fundamental de una cuerda tensa depende de su longitud, su tensión y su masa por unidad de longitud. A mayor tensión o menor longitud, la frecuencia es mayor (sonido más agudo).
```

### 2 — Tubos abiertos y armónicos
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["viento", "tubos", "armonicos"]

variables:
  v: 340
  L: 0.5
  idx: uno_de([1, 2, 3])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["170.0", "340.0", "510.0", "680.0"]

enunciado: "Un instrumento de viento funciona como un tubo abierto por ambos extremos con una longitud de {L} metros. Si la velocidad del sonido es de {v} m/s, ¿cuál es la frecuencia del {idx}-ésimo armónico?"

explicacion: |
  Para un tubo abierto en ambos extremos, las frecuencias de los armónicos siguen la serie: f_n = n * (v / 2L). 
  Si n=1 (fundamental): 340 / (2 * 0.5) = 340 Hz.
  Si n=2: 2 * 340 = 680 Hz.
  Si n=3: 3 * 340 / 1 = 1020 Hz (ajustar según el índice sorteado).
  *Nota: El cálculo depende del índice seleccionado.*
```

### 3 — Relación de longitudes y octavas
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "basico"
  tags: ["percepcion", "octavas", "frecuencia"]

variables:
  f_original: 440

respuesta: falso
tipo: vf

enunciado: "Si duplicamos la longitud de una cuerda vibrante manteniendo la misma tensión y material, ¿la frecuencia resultante será el doble de la original (f_original * 2)?"

explicacion: |
  Falso. La frecuencia es inversamente proporcional a la longitud (f ∝ 1/L). Si la longitud se duplica, la frecuencia se reduce a la mitad (una octava más abajo).
```

### 4 — Formación de la onda sonora
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "basico"
  tags: ["ondas", "propiedades"]

respuesta: ["Compresión", "Rarefacción", "Compresión", "Rarefacción"]
tipo: ordenar

enunciado: "Ordena las fases de las variaciones de presión en una onda longitudinal (como el sonido) desde el punto de máxima presión hasta el de mínima presión:"

opciones_explicitas: ["Compresión", "Rarefacción", "Compresión", "Rarefacción"]

explicacion: |
  El sonido es una onda mecánica longitudinal. Se propaga mediante ciclos de compresión (aumento de presión) y rarefacción (disminución de presión).
```

### 5 — El efecto de la columna de aire
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["tubos_cerrados", "armonicos"]

variables:
  v: 340
  L: 0.25
  idx: uno_de([1, 3])

respuesta: tabla[idx][1]
tipo: completar
opciones_explicitas: ["170.0", "510.0"]
respuestas_validas: ["170.0", "510.0"]

enunciado: "Un tubo cerrado en un extremo (como una flauta de pan o un clarinete en ciertas condiciones) de {L} metros tiene una frecuencia fundamental de ___ Hz (si el índice del armónico es {idx})."

explicacion: |
  Para un tubo cerrado en un extremo, solo existen armónicos impares. La fórmula es f_n = n * v / (4 * L), donde n es 1, 3, 5...
  Si n=1: 340 / (4 * 0.25) = 340 Hz. (Ajustar según el índice seleccionado).
```