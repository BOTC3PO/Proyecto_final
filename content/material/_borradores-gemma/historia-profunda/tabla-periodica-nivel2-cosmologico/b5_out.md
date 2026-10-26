### 1 — Origen del Hidrógeno
```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "basico"
  tags: ["nucleosintesis", "big_bang"]

variables:
  escenario: [[ "Hidrógeno", "Big Bang" ]]
  idx: uno_de([0])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Big Bang", "Fusión estelar", "Supernova"]

enunciado: "El elemento {escenario[idx][0]} es el más abundante del universo y su origen principal se remonta al ___."

explicacion: |
  El Hidrógeno se formó durante la nucleosíntesis primordial, pocos minutos después del Big Bang.
```

### 2 — Elementos de la Nucleosíntesis Estelar
```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "intermedio"
  tags: ["fusion_estelar", "elementos"]

variables:
  escenario: [
    ["Helio", "Big Bang"],
    ["Carbono", "Fusión estelar"],
    ["Hierro", "Fusión estelar"]
  ]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Big Bang", "Fusión estelar", "Supernova"]

enunciado: "El elemento {escenario[idx][0]} se sintetiza principalmente mediante procesos de ___ en el núcleo de las estrellas."

explicacion: |
  La fusión estelar es el proceso donde elementos más ligeros se combinan para formar otros más pesados en el núcleo estelar.
```

### 3 — La explosión de la muerte estelar
```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "avanzado"
  tags: ["supernova", "elementos_pesados"]

variables:
  escenario: [
    ["Oro", "Supernova"],
    ["Plata", "Supernova"],
    ["Uranio", "Supernova"]
  ]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["Supernova"]

enunciado: "Los elementos muy pesados como el {escenario[idx][0]} se originan mayoritariamente durante una ___."

explicacion: |
  Las explosiones de supernova proporcionan la energía y el flujo de neutrones necesarios para la nucleosíntesis de elementos más allá del hierro.
```

### 4 — Secuencia de nucleosíntesis
```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "intermedio"
  tags: ["procesos", "nucleosintesis"]

respuesta: ["Big Bang", "Fusión estelar", "Supernova"]
tipo: ordenar
opciones_explicitas: ["Big Bang", "Fusión estelar", "Supernova"]

enunciado: "Ordena cronológicamente los procesos de nucleosíntesis según el orden de aparición de los elementos en el universo:"

explicacion: |
  Primero ocurrió la nucleosíntesis del Big Bang, luego la fusión en estrellas de la secuencia principal y finalmente las explosiones de supernova.
```

### 5 — Identificación de origen
```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "avanzado"
  tags: ["nucleosintesis", "identificacion"]

variables:
  escenario: [
    ["Litio-7", "Big Bang"],
    ["Oxígeno", "Fusión estelar"],
    ["Plomo", "Supernova"]
  ]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: vf
opciones_explicitas: [true, falso]

enunciado: "El origen del {escenario[idx][0]} es la {escenario[idx][1]}."

explicacion: |
  La afirmación es verdadera según el escenario seleccionado.
```