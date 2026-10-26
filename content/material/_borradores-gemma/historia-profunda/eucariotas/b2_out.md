### 1 — Origen de las mitocondrias
```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "basico"
  tags: ["eucariotas", "mitocondrias", "endosimbiosis"]

tipo: mc
opciones_explicitas: ["una bacteria aeróbica", "un virus", "un fragmento de núcleo", "un ribosoma"]

enunciado: "Según la teoría endosimbiótica, las mitocondrias se originaron a partir de la integración de una ___ que era capaz de realizar la respiración celular."

explicacion: |
  La teoría endosimbiótica propone que las mitocondrias fueron originalmente bacterias aeróbicas que fueron fagocitadas por una célula huésped, estableciendo una relación simbiótica.
```

### 2 — El proceso de endosimbiosis
```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "intermedio"
  tags: ["evolucion", "endosimbiosis"]

variables:
  escenario: uno_de([["bacteria aeróbica", "mitocondria"], ["bacteria fotosintética", "cloroplasto"]])

tipo: completar
respuestas_validas: [escenario[0]]

enunciado: "Si una célula eucariota primitiva engloba a una ___, el resultado evolutivo es la formación de un(a) ___."

explicacion: |
  El proceso de endosimbiosis implica que un organismo complejo absorbe a uno más pequeño que, en lugar de ser digerido, se convierte en un orgánulo especializado.
```

### 3 — Evidencia del origen bacteriano
```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "avanzado"
  tags: ["evidencia", "adn", "membrana"]

tipo: mc
opciones_explicitas: ["Poseen su propio ADN circular y ribosomas similares a los procariotas", "Tienen un núcleo rodeado de membrana", "Se originan en el retículo endoplasmático", "No poseen membrana propia"]

enunciado: "Una de las principales evidencias de que los cloroplastos y mitocondrias fueron bacterias libres es que:"

explicacion: |
  Tanto mitocondrias como cloroplastos poseen su propio material genético en forma de ADN circular, muy similar al de las bacterias actuales, y sus ribosomas son de tipo procariota.
```

### 4 — Secuencia evolutiva de la célula eucariota
```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

tipo: ordenar
opciones_explicitas: ["Célula procariota con membrana flexible", "Fagocitosis de una bacteria aeróbica", "Establecimiento de simbiosis", "Célula eucariota con mitocondrias"]

enunciado: "Ordene los eventos que explican la aparición de la célula eucariota con mitocondrias:"

explicacion: |
  La evolución fue un proceso gradual: primero la célula huésped, luego la captura de la bacteria, la convivencia simbiótica y finalmente la especialización del orgánulo.
```

### 5 — El papel de los cloroplastos
```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "basico"
  tags: ["cloroplastos", "fotosintesis"]

tipo: vf
enunciado: "Los cloroplastos se originaron a partir de la endosimbiosis de una bacteria fotosintética (cianobacteria)."

explicacion: |
  Es verdadero. La capacidad de realizar fotosíntesis en las plantas y algas se debe a la incorporación de cianobacterias que se convirtieron en cloroplastos.
```