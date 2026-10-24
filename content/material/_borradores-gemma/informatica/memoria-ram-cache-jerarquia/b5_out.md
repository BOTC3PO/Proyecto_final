### 1 — Jerarquía de velocidad y costo
```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["arquitectura", "hardware"]

variables:
  escenario_idx: uno_de([0,1,2])
  datos: [
    ["La memoria con mayor velocidad pero menor capacidad es la ___.", "Caché"],
    ["La memoria que es más lenta que la caché pero más rápida que el disco es la ___.", "RAM"],
    ["La memoria de mayor capacidad y menor costo por bit es el ___.", "Disco"]
  ]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["Caché", "RAM", "Disco"]

enunciado: "Analizando la jerarquía de memoria, se observa que: {datos[escenario_idx][0]}"

explicacion: |
  En una jerarquía de memoria, cuanto más cerca está del procesador, más rápida y cara es (Caché), y cuanto más lejos, más lenta y económica es (Disco).
```

### 2 — Propiedades de la memoria RAM
```
metadata:
  materia: "informatica"
  tema: "memoria_ram"
  nivel: "basico"
  tags: ["volatilidad", "hardware"]

respuesta: falso
tipo: vf

enunciado: "La memoria RAM es una memoria de tipo no volátil, lo que significa que la información se mantiene grabada incluso si se apaga el ordenador."

explicacion: |
  Falso. La RAM es memoria volátil; requiere energía para mantener los datos almacenados. Al apagar el equipo, los datos se pierden.
```

### 3 — Comparativa de latencia
```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["latencia", "rendimiento"]

variables:
  opcion_idx: uno_de([0,1])
  comparativa: [
    ["La caché L1 tiene una latencia ___ que la memoria RAM.", "menor"],
    ["La memoria RAM tiene una latencia ___ que la memoria caché L1.", "mayor"]
  ]

respuesta: comparativa[opcion_idx][1]
tipo: mc
opciones_explicitas: ["menor", "mayor"]

enunciado: "Considerando el acceso a datos en un sistema computacional: {comparativa[opcion_idx][0]}"

explicacion: |
  La latencia es el tiempo de espera. La caché, al estar integrada en el procesador, responde mucho más rápido (menor latencia) que la RAM.
```

### 4 — Orden de la jerarquía de memoria
```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["orden", "arquitectura"]

respuesta: ["Registros", "Caché L1", "Memoria RAM", "Disco Duro"]
tipo: ordenar
opciones_explicitas: ["Registros", "Caché L1", "Memoria RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad (del más rápido al más lento):"

explicacion: |
  La jerarquía correcta de velocidad es: Registros del CPU > Caché (L1, L2, L3) > Memoria RAM > Almacenamiento secundario (Disco).
```

### 5 — Relación Capacidad vs Costo
```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "avanzado"
  tags: ["costo", "capacidad"]

variables:
  item_idx: uno_de([0,1])
  comparacion: [
    ["Si comparamos la Caché con la RAM, la caché tiene un costo por GB ___ que la RAM.", "mayor"],
    ["Si comparamos la RAM con el Disco Duro, la RAM tiene un costo por GB ___ que el disco.", "mayor"]
  ]

respuesta: comparacion[item_idx][1]
tipo: mc
opciones_explicitas: ["mayor", "menor"]

enunciado: "En términos de arquitectura de computadores: {comparacion[item_idx][0]}"

explicacion: |
  Existe una relación inversa: a mayor velocidad de acceso, mayor es el costo por unidad de capacidad (GB/TB). Por eso las memorias rápidas son pequeñas y las lentas son masivas.
```