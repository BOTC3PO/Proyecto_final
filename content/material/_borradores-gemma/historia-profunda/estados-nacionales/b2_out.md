### 1 — El concepto de Estado-Nación
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["conceptos", "siglo_xix"]

respuesta: "soberanía"
tipo: completar
respuestas_validas: ["soberanía"]

enunciado: "El surgimiento del Estado-Nación implica la consolidación de un territorio delimitado donde el poder supremo reside en una entidad política que ejerce la ___ sobre su población."

explicacion: |
  La soberanía es el principio fundamental que define a un Estado moderno, permitiéndole ejercer autoridad exclusiva sobre un territorio y su población, sin interferencias externas.
```

### 2 — Unificación Italiana
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["unificacion", "italia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[
    ["Piamonte-Cerdeña", "Cavour"],
    ["Reino de las Dos Sicilias", "Bourbon"]
  ]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Cavour", "Garibaldi", "Mazzini", "Bismarck"]

enunciado: "Durante el proceso de unificación italiana (Risorgimento), el líder político que fue clave desde el Reino de {escenarios[escenario_idx][0]} fue ___."

explicacion: |
  El proceso de unificación fue complejo: mientras Garibaldi lideraba las campañas militares, figuras como Cavour (desde el Piamonte) gestionaban la diplomacia para consolidar el nuevo Estado.
```

### 3 — La Unificación Alemana
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["unificacion", "alemania"]

respuesta: "Prusia"
tipo: mc
opciones_explicitas: ["Prusia", "Austria", "Baviera", "Sajonia"]

enunciado: "A diferencia de la unificación italiana, la unificación alemana de 1871 fue liderada por la potencia militar de ___."

explicacion: |
  Bajo el liderazgo de Otto von Bismarck, Prusia utilizó la diplomacia y la guerra (como la guerra franco-prusiana) para unificar los estados alemanes bajo su corona.
```

### 4 — Consecuencias del Nacionalismo
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["consecuencias", "geopolitica"]

respuesta: "Imperio Austro-Húngaro"
tipo: mc
opciones_explicitas: ["Imperio Austro-Húngaro", "Imperio Británico", "Imperio Otomano", "Imperio Ruso"]

enunciado: "El auge de los movimientos nacionalistas en el siglo XIX representó una amenaza directa para la integridad territorial de los imperios multiétnicos, como el ___."

explicacion: |
  Los imperios multiétnicos, donde convivían diversas lenguas y culturas bajo una misma corona, sufrieron tensiones constantes debido a que los grupos étnicos buscaban su propia independencia nacional.
```

### 5 — Orden de procesos de unificación
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["cronologia", "unificacion"]

respuesta: ["Unificación Italiana", "Unificación Alemana", "Fragmentación del Imperio Otomano"]
tipo: ordenar
opciones_explicitas: ["Unificación Italiana", "Unificación Alemana", "Fragmentación del Imperio Otomano"]

enunciado: "Ordene cronológicamente los siguientes procesos de transformación del mapa europeo en el siglo XIX, desde el más temprano al más tardío:"

pasos:
  - "Identifique la fecha de consolidación de la Italia unificada (1861)."
  - "Identifique la fecha de la proclamación del Imperio Alemán (1871)."
  - "Considere el declive de los Balcanes y el Imperio Otomano hacia finales del siglo."

explicacion: |
  La unificación italiana se consolidó formalmente en 1861, seguida por la unificación alemana en 1871. El declive otomano y las tensiones nacionalistas en los Balcanes fueron procesos continuos que culminarían con mayor intensidad tras la Primera Guerra Mundial.
```