### 1 — Identificación de la radiación alfa
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["particulas", "alfa"]

respuesta: "particula_alfa"
tipo: mc
opciones_explicitas: ["particula_alfa", "particula_beta", "fotón_gamma"]

enunciado: "Un núcleo emite una partícula con carga eléctrica +2 y masa equivalente a dos nucleones. ¿Qué tipo de radiación es?"

explicacion: |
  La radiación alfa consiste en núcleos de helio (2 protones y 2 neutrones), por lo que su carga es +2.
```

### 2 — Naturaleza de la radiación gamma
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "fotones"]

respuesta: falso
tipo: vf

enunciado: "¿La radiación gamma consiste en la emisión de partículas con masa y carga eléctrica?"

explicacion: |
  Falso. La radiación gamma es radiación electromagnética (fotones), por lo tanto, no tiene masa ni carga eléctrica.
```

### 3 — Efecto del decaimiento beta en el número atómico
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["beta", "nucleidos"]

variables:
  escenario: uno_de([[6, 7], [11, 12], [26, 27]])

respuesta: tabla_resp[idx][1]
tipo: completar
tablas:
  tabla_resp: [[6, 7], [11, 12], [26, 27]]
  idx: uno_de([0, 1, 2])

enunciado: "Un átomo de número atómico {escenario[idx][0]} sufre un decaimiento beta menos (emisión de un electrón). El nuevo número atómico será ___."

respuestas_validas: ["7", "12", "27"]

explicacion: |
  En el decaimiento beta menos, un neutrón se transforma en un protón, aumentando el número atómico en 1.
```

### 4 — Comparación de capacidad de penetración
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["penetracion", "radiacion"]

respuesta: ["alfa", "beta", "gamma"]
tipo: ordenar

opciones_explicitas: ["alfa", "beta", "gamma"]

enunciado: "Ordena las siguientes radiaciones de MENOR a MAYOR capacidad de penetración en la materia:"

explicacion: |
  La radiación alfa es detenida por una hoja de papel; la beta requiere algo más denso (como aluminio) y la gamma requiere materiales muy densos como plomo o concreto.
```

### 5 — La confusión entre partícula y energía
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["gamma", "emision"]

respuesta: "fotón"
tipo: mc
opciones_explicitas: ["fotón", "electrón", "neutrón"]

enunciado: "A menudo se confunde la emisión de partículas con la emisión de energía pura. ¿Cuál de estas emisiones es puramente energía electromagnética sin masa?"

explicacion: |
  La radiación gamma es la emisión de energía en forma de fotones, a diferencia de las partículas alfa o beta que poseen masa.
```