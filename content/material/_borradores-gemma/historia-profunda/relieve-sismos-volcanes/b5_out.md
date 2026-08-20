### 1 — Bordes Divergentes
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["tectonica", "placas"]

variables:
  escenario: uno_de([["dorsal oceánica", "divergente"], ["valle de rift", "divergente"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "El fenómeno de la formación de una {escenario[idx][0]} es característico de un límite de placas de tipo ________."

explicacion: |
  En los límites divergentes, las placas se separan, permitiendo la salida de magma que crea nuevo relieve, como las dorsales o los rifts.
```

### 2 — Zonas de Subducción
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "intermedio"
  tags: ["tectonica", "subduccion"]

variables:
  escenario: uno_de([["trinchera oceánica", "convergente"], ["arco volcánico", "convergente"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "La presencia de una {escenario[idx][0]} indica que las placas se encuentran en un límite de tipo ________."

explicacion: |
  Los límites convergentes ocurren cuando las placas colisionan, pudiendo subducir una debajo de otra (creando trincheras) o elevar cordilleras.
```

### 3 — Fallas Transformantes
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["tectonica", "fallas"]

variables:
  escenario: uno_de([["falla de San Andrés", "transformante"], ["desplazamiento lateral", "transformante"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "El movimiento de {escenario[idx][0]} es un ejemplo clásico de un límite de placas ________."

explicacion: |
  En los límites transformantes, las placas se deslizan lateralmente una respecto a la otra sin crear ni destruir litosfera.
```

### 4 — Relieve de Colisión
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "avanzado"
  tags: ["tectonica", "orogenesis"]

variables:
  escenario: uno_de([["cordillera del Himalaya", "convergente"], ["doblamiento de corteza", "convergente"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "La formación de {escenario[idx][0]} es el resultado de un proceso de colisión en un límite ________."

explicacion: |
  La colisión entre placas continentales (convergencia) produce el acortamiento y elevación de la corteza, formando grandes cordilleras.
```

### 5 — Expansión del Fondo Marino
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["tectonica", "oceanos"]

variables:
  escenario: uno_de([["crecimiento de la dorsal", "divergente"], ["separación de placas", "divergente"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: completar
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "El proceso de {escenario[idx][0]} se asocia directamente con un borde de tipo ________."

explicacion: |
  La expansión del fondo marino ocurre en los límites divergentes donde el magma asciende para rellenar el espacio entre placas.
```