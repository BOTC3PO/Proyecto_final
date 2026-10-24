### 1 — El contexto de la dictadura
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["dictadura", "contexto"]

respuesta: "dictadura militar"
tipo: completar
respuestas_validas: ["dictadura militar"]

enunciado: "En 1982, Argentina se encontraba bajo el gobierno de una ___ que enfrentaba una profunda crisis interna."

explicacion: |
  La última dictadura militar argentina buscaba recuperar legitimidad mediante una acción bélica ante el desgaste social y económico.
```

### 2 — El objetivo del desembarco
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["legitimidad", "objetivos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[ "reforzar la legitimidad", "recuperar el apoyo popular" ], [ "distraer de la crisis", "ocultar el malestar social" ]]

respuesta: escenario[escenario_idx][1]
tipo: mc
opciones_explicitas: ["reforzar la legitimidad", "recuperar el apoyo popular", "ocultar el malestar social", "evitar la crisis económica"]

enunciado: "Uno de los objetivos estratégicos de la junta militar al ordenar el desembarco en las islas era ___."

explicacion: |
  La dictadura intentó utilizar el conflicto bélico para generar un sentimiento de unidad nacional y así ___."
```

### 3 — Cronología del conflicto
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "fechas"]

respuesta: ["Crisis interna de la dictadura", "Orden de desembarco", "Inicio de la guerra"]
tipo: ordenar
opciones_explicitas: ["Crisis interna de la dictadura", "Orden de desembarco", "Inicio de la guerra"]

enunciado: "Ordene cronológicamente los hechos que llevaron al conflicto de 1982:"

explicacion: |
  Primero existió una crisis de legitimidad, luego la junta ordenó el desembarco en abril y finalmente se inició el conflicto armado.
```

### 4 — El factor de la crisis
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["causas", "crisis"]

respuesta: "crisis"
tipo: mc
opciones_explicitas: ["crisis", "estabilidad", "bonanza", "prosperidad"]

enunciado: "El contexto socio-político de Argentina en abril de 1982 se caracterizaba por una profunda ___."

explicacion: |
  La crisis política y económica de la dictadura fue un motor fundamental para la decisión de iniciar el conflicto en las islas.
```

### 5 — La decisión de la Junta
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["junta_militar", "decisión"]

respuesta: "abril 1982"
tipo: completar
respuestas_validas: ["abril 1982"]

enunciado: "La orden de desembarco en las islas Malvinas se produjo en ___."

explicacion: |
  El desembarco ocurrió en abril de 1982, marcando el inicio de la disputa armada con el Reino Unido.
```