### 1 — La inclinación orbital
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "geometria_celestial"]

respuesta: 5
tipo: input
tolerancia_abs: 0.1

enunciado: "Aunque la Luna orbita la Tierra cada mes, no siempre se produce un eclipse porque su órbita está inclinada aproximadamente ___ grados respecto a la eclíptica (el plano de la órbita terrestre)."

explicacion: |
  La órbita de la Luna tiene una inclinación de unos 5° respecto al plano de la Tierra alrededor del Sol. Esta inclinación hace que, la mayoría de las veces, la Luna pase por encima o por debajo del Sol desde nuestra perspectiva.
```

### 2 — El concepto de alineación
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "alineacion"]

opciones_explicitas: ["Eclíptica", "Eje terrestre", "Órbita solar", "Cinturón de asteroides"]

respuesta: "Eclíptica"
tipo: mc

enunciado: "Para que ocurra un eclipse, la Luna debe estar alineada con el Sol y la Tierra en el plano de la ___."

explicacion: |
  Un eclipse solo ocurre cuando la Luna, la Tierra y el Sol se encuentran en un punto llamado 'nodos lunares', donde la órbita lunar cruza el plano de la eclíptica.
```

### 3 — Fases y alineación
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["fases_lunares", "eclipses"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Luna Nueva", "Solar"], ["Luna Llena", "Lunar"]]

respuesta: tabla[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Solar", "Lunar", "Ninguno"]

enunciado: "Si la Luna se encuentra en fase de {datos[escenario_idx][0]}, se requiere una alineación perfecta para producir un eclipse de tipo {datos[escenario_idx][1]}."

explicacion: |
  La fase de Luna Nueva es necesaria para los eclipses solares, mientras que la Luna Llena es necesaria para los eclipses lunares.
```

### 4 — El proceso de alineación
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "avanzado"
  tags: ["geometria", "nodos"]

opciones_explicitas: ["Nodos lunares", "Equinoccios", "Solsticios", "Perigeos"]

respuesta: "Nodos lunares"
tipo: mc

enunciado: "La razón por la cual los eclipses no ocurren en cada fase de Luna Nueva o Luna Llena es que la Luna solo cruza el plano de la eclíptica en dos puntos específicos llamados ___."

explicacion: |
  Esos puntos de intersección se llaman nodos. Solo cuando la Luna está en uno de estos nodos durante la fase de luna nueva o llena, se produce el fenómeno.
```

### 5 — Secuencia de alineación
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["orden", "alineacion"]

opciones_explicitas: ["Luna Nueva -> Eclipse Solar", "Luna Llena -> Eclipse Lunar"]

respuesta: ["Luna Nueva -> Eclipse Solar", "Luna Llena -> Eclipse Lunar"]
tipo: ordenar

enunciado: "Ordena las condiciones necesarias para los dos tipos principales de eclipses:"

pasos:
  - "Condición para eclipse solar"
  - "Condición para eclipse lunar"

explicacion: |
  Para un eclipse solar necesitamos Luna Nueva y alineación en el nodo. Para un eclipse lunar necesitamos Luna Llena y alineación en el nodo.
```