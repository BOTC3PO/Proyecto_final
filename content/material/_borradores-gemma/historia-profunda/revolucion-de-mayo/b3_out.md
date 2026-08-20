### 1 — El primer gobierno patrio
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["primera_junta", "saavedra", "mayo"]

respuesta: "Cornelio Saavedra"
tipo: completar
respuestas_validas: ["Cornelio Saavedra"]

enunciado: "La Primera Junta, conformada tras la Revolución de Mayo, fue presidida por ___."

explicacion: |
  La Primera Junta fue el primer gobierno patrio, presidido por Cornelio Saavedra, quien representaba el ala más conservadora del cabildo.
```

### 2 — El rol de la secretaría
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["moreno", "secretario"]

opciones_explicitas: ["Mariano Moreno", "Juan José Paso", "Manuel Belgrano", "Fidencio de la Riva"]
respuesta: "Mariano Moreno"
tipo: mc

enunciado: "En la Primera Junta, ¿quién ocupaba el cargo de secretario?"

explicacion: |
  Mariano Moreno fue el secretario de la Primera Junta, conocido por su pensamiento radical y su influencia en la redacción de documentos políticos.
```

### 3 — La legitimidad del gobierno
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["mascara_de_fecundidad", "fernando_vii"]

respuesta: "Fernando VII"
tipo: completar
respuestas_validas: ["Fernando VII"]

enunciado: "Debido a la estrategia política de la época, la Primera Junta gobernaba en nombre del rey depuesto, un fenómeno conocido como la 'máscara de ___'."

explicacion: |
  La 'máscara de Fernando VII' era una maniobra política para reconocer la autoridad del rey cautivo ante las potencias europeas, mientras se ejercía el autogobierno local.
```

### 4 — Composición de la Primera Junta
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["integrantes", "primera_junta"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["Cornelio Saavedra", "Mariano Moreno", "Juan José Paso", "Domingo Saavedra"]

enunciado: "Seleccione el nombre del integrante de la Primera Junta que corresponde al escenario actual."

pasos:
  - "Identifique el nombre del presidente o secretario según el caso sorteado."

explicacion: |
  La Primera Junta estaba integrada por miembros del cabildo y militares; Saavedra era el presidente y Moreno el secretario.

variables:
  tabla: [["Cornelio Saavedra", "Cornelio Saavedra"], ["Mariano Moreno", "Mariano Moreno"]]
```

### 5 — Evolución del gobierno
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["orden_gobiernos", "etapas"]

opciones_explicitas: ["Primera Junta", "Junta Grande", "Directorio"]
respuesta: ["Primera Junta", "Junta Grande", "Directorio"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de los gobiernos patrios tras la Revolución de Mayo, desde el primero hasta el último de esta lista."

explicacion: |
  El proceso comenzó con la Primera Junta (1810), siguió con la Junta Grande (tras la incorporación de diputados del interior) y culminó con el Directorio (poder ejecutivo unipersonal).
```