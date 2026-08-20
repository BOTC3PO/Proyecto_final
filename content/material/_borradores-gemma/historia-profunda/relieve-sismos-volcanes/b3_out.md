### 1 — Origen de los volcanes
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["volcanes", "tectonica"]

tipo: mc
opciones_explicitas: ["Zonas de subducción", "Zonas de divergencia", "Zonas de transformación", "Zonas de estabilidad"]
respuesta: "Zonas de subducción"

enunciado: "Los volcanes se forman típicamente en las zonas de ___ donde una placa tectónica se desplaza debajo de otra."

explicacion: |
  En las zonas de subducción (bordes convergentes), la placa que se hunde se funde y genera magma que asciende a la superficie.
```

### 2 — Bordes divergentes y magma
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["dorsales", "magma"]

tipo: mc
opciones_explicitas: ["Dorsales oceánicas", "Fallas transformantes", "Cinturones orogénicos", "Escudos continentales"]
respuesta: "Dorsales oceánicas"

enunciado: "El magma puede llegar a la superficie en los bordes divergentes, como ocurre en las ___."

explicacion: |
  Las dorsales oceánicas son bordes divergentes donde las placas se separan, permitiendo la salida de magma y la creación de nueva corteza.
```

### 3 — Movimiento de placas y volcanismo
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "intermedio"
  tags: ["bordes", "convergencia"]

variables:
  escenario: uno_de([["convergente", "subducción"], ["divergente", "separación"]])
  tipo_borde: escenario[0]
  proceso: escenario[1]

tipo: completar
respuestas_validas: ["subducción", "separación"]
respuesta: proceso

enunciado: "Si nos encontramos en un borde de tipo {tipo_borde}, el proceso geológico predominante es la ___."

explicacion: |
  En un borde convergente, el proceso es la subducción; en un borde divergente, es la separación de placas.
```

### 4 — El origen del magma
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["magma", "superficie"]

tipo: mc
opciones_explicitas: ["Llega a la superficie", "Se mantiene en el manto", "Se solidifica inmediatamente", "Se transforma en roca sólida"]
respuesta: "Llega a la superficie"

enunciado: "Tanto en zonas de subducción como en dorsales, el magma tiene la capacidad de ___."

explicacion: |
  La actividad volcánica ocurre precisamente porque el magma logra ascender desde el manto hasta la superficie terrestre.
```

### 5 — Secuencia de formación volcánica
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "avanzado"
  tags: ["procesos", "tectonica"]

tipo: ordenar
opciones_explicitas: ["Movimiento de placas", "Fusión de material", "Ascenso de magma", "Erupción volcánica"]
respuesta: ["Movimiento de placas", "Fusión de material", "Ascenso de magma", "Erupción volcánica"]

enunciado: "Ordena los pasos que ocurren típicamente en una zona de subducción hasta la erupción:"

explicacion: |
  Primero ocurre el movimiento de las placas, lo que provoca la fusión del material en el manto, luego el magma asciende y finalmente ocurre la erupción.
```