### 1 — Sujetos del Derecho Internacional
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "basico"
  tags: ["sujetos", "estados"]

variables:
  escenario: uno_de([["El Estado A firma un tratado de límites con el Estado B", "Estado"], ["La ONU emite una resolución de la Asamblea General", "Organismo"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Estado", "Organismo", "Persona Física", "Empresa"]

enunciado: "En el siguiente escenario, se identifica un sujeto del derecho internacional: {escenario[idx][0]}. ¿Qué tipo de sujeto es?"

explicacion: |
  Los Estados y las Organizaciones Internacionales son los sujetos primarios del derecho internacional público, capaces de ejercer derechos y contraer obligaciones en la comunidad internacional.
```

### 2 — Fuentes del Derecho Internacional
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["fuentes", "tratados"]

variables:
  caso: uno_de([["Un acuerdo escrito entre dos países para regular el comercio", "Tratado"], ["Una norma que surge de la práctica constante y general de los Estados", "Costumbre"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["Tratado", "Costumbre"]

enunciado: "Analice el caso: {caso[idx][0]}. Según la Convención de Viena, esta fuente del derecho se denomina: ___"

explicacion: |
  Las fuentes principales son los tratados (acuerdos escritos) y la costumbre internacional (práctica generalizada con convicción de obligatoriedad).
```

### 3 — Jerarquía de Normas (Ius Cogens)
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "avanzado"
  tags: ["ius_cogens", "normas_imperativas"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es posible que un tratado internacional sea nulo si su contenido contraviene una norma de 'ius cogens' (norma imperativa de derecho internacional general)?"

explicacion: |
  Correcto. Según el derecho internacional, las normas de ius cogens son imperativas y no admiten acuerdo en contrario; cualquier tratado que las contradiga es nulo.
```

### 4 — Resolución de Conflictos
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["solucion_pacifica", "metodos"]

variables:
  metodo: uno_de([["Un tercero imparcial que propone una solución no vinculante", "Mediación"], ["Un tribunal con autoridad para dictar una sentencia obligatoria", "Arbitraje"]])
  idx: uno_de([0, 1])

respuesta: metodo[idx][1]
tipo: mc
opciones_explicitas: ["Mediación", "Arbitraje", "Negociación", "Conciliación"]

enunciado: "Se presenta el siguiente escenario de resolución de controversias: {metodo[idx][0]}. El método aplicado es:"

explicacion: |
  La mediación implica la intervención de un tercero para facilitar el diálogo, mientras que el arbitraje implica una decisión vinculante dictada por un tribunal.
```

### 5 — Secuencia de creación de un Tratado
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["tratados", "procedimiento"]]

respuesta: ["Negociación", "Firma", "Ratificación"]
tipo: ordenar
opciones_explicitas: ["Negociación", "Firma", "Ratificación", "Publicación"]

enunciado: "Ordene cronológicamente las etapas típicas para que un Estado se obligue formalmente mediante un tratado internacional:"

explicacion: |
  El proceso estándar comienza con la negociación del texto, sigue con la firma (que manifiesta la voluntad de seguir adelante) y culmina con la ratificación (el consentimiento formal del Estado para quedar vinculado).
```