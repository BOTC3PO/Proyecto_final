### 1 — Carga del núcleo
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "neutrones"]

respuesta: "positivo"
tipo: mc
opciones_explicitas: ["positivo", "negativo", "neutro", "variable"]

enunciado: "A diferencia de los neutrones, que no poseen carga eléctrica, los protones dentro del núcleo tienen una carga de signo ___."

explicacion: |
  El núcleo atómico está compuesto por protones (carga positiva) y neutrones (carga neutra). La interacción entre protones es de repulsión electrostática, la cual es contrarrestada por la fuerza nuclear fuerte.
```

### 2 — Alcance de la fuerza nuclear fuerte
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear_fuerte", "alcance"]

variables:
  es_corta: verdadero

respuesta: es_corta
tipo: vf

enunciado: "La fuerza nuclear fuerte es una interacción de ___ alcance, lo que la distingue de la fuerza electromagnética que actúa a distancias mayores."

explicacion: |
  La fuerza nuclear fuerte es extremadamente poderosa pero solo actúa a distancias muy cortas (aproximadamente $10^{-15}$ metros). Si los nucleones se separan más allá de ese rango, la fuerza cae drásticamente.
```

### 3 — Composición del isótopo
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["isótopos", "nucleones"]

variables:
  escenario: uno_de([
    ["6 protones", "6 neutrones", "12"],
    ["17 protones", "8 neutrones", "25"],
    ["8 protones", "8 neutrones", "16"]
  ])

respuesta: escenario[idx][2]
tipo: completar
respuestas_validas: ["12", "25", "16"]

enunciado: "Un átomo de Carbono-12 tiene 6 protones. Si comparamos su masa con un átomo de Oxígeno-16 (que tiene 8 protones y 8 neutrones), el número de nucleones totales del Carbono-12 es ___."

pasos:
  - "Identificar el número de protones (6)."
  - "Identificar el número de neutrones (6)."
  - "Sumar protones + neutrones para obtener el número de masa (A)."

explicacion: |
  El número de nucleones (número de masa A) es la suma de protones (Z) y neutrones (N). Para el Carbono-12: 6 + 6 = 12.
```

### 4 — Estabilidad nuclear
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "avanzado"
  tags: ["estabilidad", "fuerza_nuclear"]

respuesta: "fuerza_nuclear_fuerte"
tipo: mc
opciones_explicitas: ["fuerza_electromagnetica", "fuerza_nuclear_fuerte", "gravedad", "fuerza_debil"]

enunciado: "Mientras que la fuerza electromagnética tiende a separar a los protones debido a su repulsión, ¿qué fuerza es la responsable de mantener unido el núcleo atómico?"

explicacion: |
  La fuerza nuclear fuerte actúa como el "pegamento" que mantiene unidos a los protones y neutrones, venciendo la repulsión eléctrica entre los protones.
```

### 5 — Componentes del núcleo
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleones", "orden"]

respuesta: ["protones", "neutrones"]
tipo: ordenar
opciones_explicitas: ["protones", "neutrones", "electrones"]

enunciado: "Ordena los siguientes componentes según su ubicación: primero los que definen la identidad del elemento y luego los que aportan masa pero no carga (en un núcleo de hidrógeno pesado o deuterio)."

explicacion: |
  En el orden solicitado, los protones definen el número atómico (Z) y los neutrones son los acompañantes que no tienen carga. Los electrones se encuentran fuera del núcleo.
```