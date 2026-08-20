### 1 — El mundo bipolar
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["geopolitica", "orden_mundial"]

respuesta: "bipolar"
tipo: mc
opciones_explicitas: ["unipolar", "bipolar", "multipolar", "unilateral"]

enunciado: "Debido a la hegemonía de las dos superpotencias (EEUU y la URSS), el sistema internacional durante la Guerra Fría se caracterizó por ser un mundo de carácter ________."

explicacion: |
  El término 'bipolar' se refiere a la existencia de dos centros de poder político, económico y militar contrapuestos que dominaron la escena internacional.
```

### 2 — Doctrina Truman vs COMECON
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["economia", "doctrinas"]

variables:
  escenario: uno_de([["Plan Marshall", "ayuda económica de EEUU"], ["COMECON", "cooperación económica del bloque socialista"]])

respuesta: escenario[0][0]
tipo: mc
opciones_explicitas: ["Plan Marshall", "COMECON", "Tratado de Varsovia", "Plan Molotov"]

enunciado: "En el marco de la contención del comunismo, la estrategia de Estados Unidos para reconstruir las economías de Europa Occidental fue el {escenario[1]}."

explicacion: |
  El Plan Marshall fue el programa de asistencia económica de EE.UU. para la reconstrucción de Europa tras la Segunda Guerra Mundial, diseñado para evitar el avance del comunismo.
```

### 3 — La crisis de los misiles
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["crisis", "nucleares"]

respuesta: 1962
tipo: input
tolerancia_abs: 0

enunciado: "La crisis de los misiles en Cuba, el momento de mayor tensión nuclear entre las superpotencias, ocurrió en el año ________."

explicacion: |
  En octubre de 1962, la instalación de misiles soviéticos en Cuba llevó al mundo al borde de una guerra nuclear total.
```

### 4 — La división de Alemania
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["alemania", "fronteras"]

respuesta: ["RFA", "RDA", "Alemania Oriental", "Alemania Occidental"]
tipo: ordenar
opciones_explicitas: ["RFA", "RDA", "Alemania Oriental", "Alemania Occidental"]

enunciado: "Ordena las entidades políticas resultantes de la división alemana, desde la capitalista hacia la socialista:"

explicacion: |
  La República Federal de Alemania (RFA) representaba al bloque occidental, mientras que la República Democrática Alemana (RDA) representaba al bloque soviético.
```

### 5 — Descolonización y Tercer Mundo
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["descolonizacion", "asiatismo"]

respuesta: tabla[0][1]
tipo: completar
opciones_explicitas: ["No alineados", "Aliados"]
tabla: [["No alineados", "No alineados"], ["Aliados", "Aliados"]]

enunciado: "Durante la Guerra Fría, los países que decidieron no sumarse ni al bloque de EE.UU. ni al de la URSS se conocieron como países ________."

explicacion: |
  El Movimiento de Países No Alineados surgió para buscar una vía neutral frente a la polarización de la Guerra Fría.
```