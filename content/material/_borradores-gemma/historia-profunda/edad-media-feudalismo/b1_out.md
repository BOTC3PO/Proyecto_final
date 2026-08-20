### 1 — La caída de Roma
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["caida_romana", "cronologia"]

respuesta: 476
tipo: input
tolerancia_abs: 1

enunciado: "La Edad Media en Europa occidental comienza tradicionalmente con la caída del Imperio Romano de Occidente, la cual ocurrió en el año ___ d.C."

explicacion: |
  La caída del Imperio Romano de Occidente en el año 476 d.C. marca el inicio de la Edad Media, caracterizada por la fragmentación política y la consolidación de los reinos germánicos.
```

### 2 — Estamentos sociales
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["sociedad", "feudalismo"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [[["campesinos", "servidores"], ["nobles", "guerreros"], ["clero", "rezadores"]], [["siervos", "trabajadores"], ["caballeros", "protectores"], ["monjes", "espirituales"]], [["plebe", "campesinos"], ["aristocracia", "señores"], ["clero", "religiosos"]]]

respuesta: datos[escenario_idx][2][1]
tipo: mc
opciones_explicitas: [datos[escenario_idx][0][1], datos[escenario_idx][1][1], datos[escenario_idx][2][1]]

enunciado: "En la estructura estamental del feudalismo, el tercer grupo social, encargado de la labor espiritual, estaba compuesto por los {datos[escenario_idx][2][0]}."

explicacion: |
  La sociedad feudal era estamental y se dividía en: los que luchan (nobleza), los que oran (clero) y los que trabajan (campesinos/siervos).
```

### 3 — El contrato de vasallaje
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "avanzado"
  tags: ["feudalismo", "vasallaje"]

respuesta: "homenaje"
tipo: completar
respuestas_validas: ["homenaje", "investidura", "lealtad"]

enunciado: "El ritual mediante el cual un vasallo se convertía en hombre de un señor, mediante un compromiso de fidelidad y protección, se denominaba ceremonia de ___."

explicacion: |
  El acto de homenaje era el núcleo del contrato de vasallaje, donde el vasallo se arrodillaba ante el señor para jurar fidelidad.
```

### 4 — El orden social feudal
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["jerarquia", "ordenar"]

respuesta: ["Campesinos", "Caballeros", "Señores Feudales"]
tipo: ordenar
opciones_explicitas: ["Caballeros", "Campesinos", "Señores Feudales", "Campesinos", "Caballeros", "Señores Feudales"]

enunciado: "Ordena los siguientes estamentos de menor a mayor poder político y militar en el sistema feudal:"

pasos:
  - "Identifica la base de la pirámide (trabajadores)"
  - "Identifica la clase militar (protectores)"
  - "Identifica la cúspide (dueños de la tierra)"

explicacion: |
  La jerarquía feudal era piramidal: la base era la campesinado, seguida por la baja nobleza (caballeros) y en la cima los grandes señores feudales.
```

### 5 — El fin de una era
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["fin_edad_media", "caida_constantinopla"]

respuesta: 1453
tipo: input
tolerancia_abs: 0

enunciado: "La Edad Media finaliza convencionalmente con la caída de Constantinopla a manos de los turcos otomanos en el año ___."

explicacion: |
  La caída de Constantinopla en 1453 es uno de los hitos que marcan la transición hacia la Edad Moderna.
```