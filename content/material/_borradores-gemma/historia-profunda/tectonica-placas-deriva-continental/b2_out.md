### 1 — El supercontinente Pangea
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["pangea", "geologia"]

respuesta: "Pangea"
tipo: completar
respuestas_validas: ["Pangea"]

enunciado: "El supercontinente que agrupaba a todas las masas terrestres hace aproximadamente 335 millones de años se denominaba ___."

explicacion: |
  Pangea fue un supercontinente que existió durante el período Pérmico y el Triásico, antes de su fragmentación.
```

### 2 — Fragmentación de Pangea
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["fragmentacion", "oceanos"]

variables:
  escenario: uno_de([0, 1])

respuesta: escenario_datos[escenario][1]
tipo: mc
opciones_explicitas: ["Panthalassa", "Tetis", "Atlántico", "Índico"]

enunciado: "Cuando Pangea comenzó a fragmentarse, el vasto océano que rodeaba a la masa continental se llamaba {escenario_datos[escenario][0]}."

variables:
  escenario_datos: [["Panthalassa", "Panthalassa"], ["Tetis", "Tetis"]]

explicacion: |
  El océano global que rodeaba a Pangea era el Panthalassa. El Tetis era un océano más pequeño situado entre Laurasia y Gondwana.
```

### 3 — El proceso de deriva
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["movimiento", "tectonica"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente", "transformante", "estacionaria"]

enunciado: "El movimiento de las placas tectónicas que provoca que los continentes se separen es un movimiento de tipo ___."

explicacion: |
  Los límites divergentes ocurren cuando las placas se separan, permitiendo que el magma ascienda y cree nueva corteza oceánica.
```

### 4 — Secuencia de fragmentación
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "avanzado"
  tags: ["secuencia", "geologia"]

respuesta: ["Pangea", "Laurasia", "Gondwana", "Continentes actuales"]
tipo: ordenar
opciones_explicitas: ["Pangea", "Laurasia", "Gondwana", "Continentes actuales"]

enunciado: "Ordena cronológicamente los estados de la masa terrestre desde la unidad única hasta la configuración actual:"

explicacion: |
  Primero existió el supercontinente único (Pangea), luego se dividió en dos grandes masas (Laurasia al norte y Gondwana al sur) hasta llegar a la distribución actual.
```

### 5 — Evidencias de la deriva
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["evidencias", "fósiles"]

variables:
  evidencia_idx: uno_de([0, 1])

respuesta: evidencia_lista[evidencia_idx][1]
tipo: mc
opciones_explicitas: ["Fósiles de Mesosaurus", "Restos de dinosaurios", "Estructuras volcánicas", "Depósitos de carbón"]

variables:
  evidencia_lista: [["Fósiles de Mesosaurus", "Fósiles de Mesosaurus"], ["Estructuras volcánicas", "Estructuras volcánicas"]]

enunciado: "La presencia de {evidencia_lista[evidencia_idx][0]} en continentes separados como África y Sudamérica es una prueba clave de la deriva continental."

explicacion: |
  El Mesosaurus era un reptil de agua dulce cuyas huellas fósiles se encuentran tanto en África como en Sudamérica, lo que indica que ambos continentes estuvieron unidos.
```