### 1 — El fin del Virreinato
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["mayo_1810", "virrey", "independencia"]

respuesta: "Baltasar Hidalgo de Cisneros"
tipo: completar
respuestas_validas: ["Baltasar Hidalgo de Cisneros"]

enunciado: "El virrey que fue depuesto tras la Revolución de Mayo fue ___."

explicacion: |
  La Junta de Gobierno de 1810 decidió que el poder español ya no era legítimo ante la captura del Rey Fernando VII por Napoleón, lo que llevó a la destitución de Cisneros.
```

### 2 — La Primera Junta
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["primera_junta", "gobierno"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [
    ["Cornelio Saavedra", "Presidente"],
    ["Mariano Moreno", "Secretario"],
    ["Juan José Paso", "Secretario"]
  ]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Presidente", "Secretario", "Vocal"]

enunciado: "En la Primera Junta de Gobierno, el rol de {datos[idx][0]} era el de ___."

explicacion: |
  La Primera Junta estaba integrada por un presidente y varios secretarios y vocales. {datos[idx][0]} ocupaba el cargo de {datos[idx][1]}.
```

### 3 — Causas de la Revolución
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["causas", "contexto"]

respuesta: "Napoleón Bonaparte"
tipo: completar
respuestas_validas: ["Napoleón Bonaparte"]

enunciado: "Un factor externo crucial que aceleró la crisis de legitimidad en el Virreinato fue la invasión de ___ a España."

explicacion: |
  La invasión napoleónica a la península ibérica y la captura del Rey Fernando VII crearon un vacío de poder que las colonias utilizaron para reclamar autonomía.
```

### 4 — El orden de los eventos
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["cronologia", "eventos"]

respuesta: ["Cabildo Abierto", "Junta de Gobierno", "Primera Junta"]
tipo: ordenar
opciones_explicitas: ["Cabildo Abierto", "Junta de Gobierno", "Primera Junta"]

enunciado: "Ordene cronológicamente los hitos de la semana de mayo de 1810:"

explicacion: |
  Primero se debatió en el Cabildo Abierto, luego se conformó la Junta de Gobierno y finalmente se consolidó la Primera Junta con sus miembros.
```

### 5 — El carácter de la Junta
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["caracter", "gobierno"]

respuesta: "fiel"
tipo: mc
opciones_explicitas: ["fiel", "rebelde", "monárquico"]

enunciado: "Inicialmente, la Primera Junta proclamó su autoridad como ___ a la soberanía de Fernando VII (la llamada 'máscara de Fernando')."

explicacion: |
  Se utilizó la estrategia de la "máscara de Fernando VII", donde se gobernaba en nombre del rey cautivo para evitar represalias directas de España mientras se ganaba autonomía.
```