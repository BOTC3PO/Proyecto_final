### 1 — La distinción fundamental
```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "basico"
  tags: ["celulas", "nucleo"]

tipo: mc
opciones_explicitas: ["Presencia de núcleo definido", "Presencia de pared celular de peptidoglicano", "Ausencia de organelas", "ADN circular libre"]

enunciado: "La principal característica que define a una célula eucariota frente a una procariota es la ___."

explicacion: |
  Las células eucariotas poseen un núcleo rodeado por una membrana nuclear que contiene el material genético, mientras que las procariotas tienen el ADN disperso en el citoplasma.
```

### 2 — Componentes celulares
```
metadata:
  materia: "biologia"
  tema: "organelas_celulares"
  nivel: "basico"
  tags: ["organelas", "membrana"]

tipo: completar
respuestas_validas: ["organelas membranosas"]

enunciado: "A diferencia de los procariotas, las células eucariotas presentan un sistema complejo de ___."

explicacion: |
  Los eucariotas cuentan con compartimentos internos delimitados por membranas, como mitocondrias, retículo endoplasmático y aparato de Golgi.
```

### 3 — Comparativa de estructuras
```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "intermedio"
  tags: ["estructura", "comparacion"]

variables:
  escenario: uno_de([
    ["mitocondria", "respiración celular"],
    ["cloroplasto", "fotosíntesis"],
    ["lisosoma", "digestión celular"]
  ])

tipo: mc
opciones_explicitas: ["respiración celular", "fotosíntesis", "digestión celular", "transporte de proteínas"]

enunciado: "En una célula eucariota, la función de {escenario[0]} está asociada a la ___."

explicacion: |
  La estructura {escenario[0]} es una organela membranosa cuya función principal es la {escenario[1]}.
```

### 4 — Orden de complejidad
```
metadata:
  materia: "biologia"
  tema: "evolucion_celular"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

tipo: ordenar
opciones_explicitas: ["ADN libre en el citoplasma", "Formación de la membrana nuclear", "Aparición de organelas membranosas", "Organismo multicelular complejo"]

enunciado: "Ordena cronológicamente la complejidad estructural desde una célula procariota simple hasta un organismo eucariota complejo:"

explicacion: |
  La evolución celular implicó primero la compartimentación del material genético, luego la especialización de organelas y finalmente la organización multicelular.
```

### 5 — El núcleo celular
```
metadata:
  materia: "biologia"
  tema: "nucleo_eucariota"
  nivel: "basico"
  tags: ["nucleo", "membrana"]

tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "La presencia de una membrana nuclear que delimita el material genético es una característica exclusiva de las células eucariotas."

explicacion: |
  Es verdadero. Los procariotas no poseen una envoltura nuclear que separe el ADN del resto del citoplasma.
```