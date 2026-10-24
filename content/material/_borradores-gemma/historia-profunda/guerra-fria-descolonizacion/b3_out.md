### 1 — El dilema de la neutralidad
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["guerra_fria", "descolonizacion", "no_alineados"]

variables:
  escenario: uno_de([
    ["Egipto de Nasser", "movimiento de no alineación", "Egipto de Nasser", "Egipto de Nasser"],
    ["Yugoslavia de Tito", "movimiento de no alineación", "Yugoslavia de Tito", "Yugoslavia de Tito"],
    ["India de Nehru", "movimiento de no alineación", "India de Nehru", "India de Nehru"]
  ])

enunciado: "Durante la descolonización, muchos países intentaron evitar la lógica de bloques mediante la creación del ___."

opciones_explicitas: ["movimiento de no alineación", "Pacto de Varsovia", "OTAN"]
respuesta: escenario[2]
tipo: mc

explicacion: |
  Tras la Segunda Guerra Mundial, líderes de países recién independizados buscaron mantener su soberanía evitando alinearse con EE.UU. o la URSS, dando origen al Movimiento de Países No Alineados.
```

### 2 — Alineación por necesidad económica
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["geopolitica", "bloques"]

enunciado: "Un país recién independizado que decide aceptar ayuda financiera masiva de la URSS para su industrialización pesada, corre el riesgo de alinearse con el bloque ___."

respuestas_validas: ["comunista", "capitalista", "neutral"]
respuesta: "comunista"
tipo: completar

explicacion: |
  La ayuda económica y técnica era una herramienta de influencia geopolítica; la dependencia de modelos de desarrollo soviéticos solía arrastrar a los nuevos estados al bloque socialista.
```

### 3 — El concepto de Tercer Mundo
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["terminologia", "geopolitica"]

enunciado: "En el contexto de la Guerra Fría, el término 'Tercer Mundo' se utilizaba para referirse a:"

opciones_explicitas: ["países alineados con EE.UU.", "países alineados con la URSS", "países no alineados o en vías de desarrollo"]
respuesta: "países no alineados o en vías de desarrollo"
tipo: mc

explicacion: |
  Mientras el Primer Mundo era el bloque capitalista y el Segundo el socialista, el término 'Tercer Mundo' designaba a las naciones que no pertenecían a ninguno de estos dos polos.
```

### 4 — Causas de la intervención externa
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["intervencionismo", "soberania"]

enunciado: "Ordena los factores que explican la intervención de las superpotencias en procesos de descolonización de menor a mayor impacto en la soberanía de los nuevos estados:"

opciones_explicitas: ["Intereses económicos por recursos naturales", "Propagación de ideologías políticas", "Control de puntos estratégicos militares"]
respuesta: ["Intereses económicos por recursos naturales", "Propagación de ideologías políticas", "Control de puntos estratégicos militares"]
tipo: ordenar

explicacion: |
  Aunque los tres factores interactuaban, la lucha por el control de bases militares y puntos estratégicos (como el Canal de Suez) era el factor determinante para la soberanía nacional.
```

### 5 — El caso de Vietnam
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["vietnam", "conflicto_proxy"]

variables:
  caso: uno_de([
    ["Vietnam del Sur", "apoyado por EE.UU.", "Vietnam del Sur", "Vietnam del Sur"],
    ["Vietnam del Norte", "apoyado por la URSS", "Vietnam del Norte", "Vietnam del Norte"]
  ])

enunciado: "En el conflicto de Vietnam, el país que era ___ fue el principal escenario de la lucha entre las ideologías de la Guerra Fría."

opciones_explicitas: ["apoyado por EE.UU.", "apoyado por la URSS", "neutral"]
respuesta: caso[2]
tipo: mc

explicacion: |
  Vietnam se convirtió en un conflicto de代理 (proxy war), donde la descolonización se vio truncada por la lucha de las superpotencias por expandir sus esferas de influencia.
```