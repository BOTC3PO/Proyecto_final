### 1 — Polos de un imán
```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

tipo: mc
opciones_explicitas: ["Norte y Sur", "Norte y Norte", "Este y Oeste", "Positivo y Negativo"]
respuesta: "Norte y Sur"

enunciado: "Todo imán posee dos zonas de máxima intensidad de campo magnético denominadas polos ___."

explicacion: |
  Los polos de un imán son las regiones donde el campo magnético es más intenso. Los nombres convencionales son polo Norte y polo Sur.
```

### 2 — Interacción de polos
```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["atracción", "repulsión"]

tipo: vf
respuesta: falso

enunciado: "Si acercamos un polo Norte de un imán a un polo Norte de otro imán, estos experimentarán una fuerza de atracción."

explicacion: |
  La regla fundamental del magnetismo establece que polos iguales se repelen y polos opuestos se atraen.
```

### 3 — Ley de atracción y repulsión
```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["atracción", "repulsión"]

variables:
  escenario: uno_de([["Norte", "Sur"], ["Sur", "Norte"], ["Norte", "Norte"], ["Sur", "Sur"]])

tipo: completar
respuestas_validas: ["atracción", "repulsión"]
respuesta: escenario[0][1] == escenario[0][0] ? "repulsión" : "atracción"

enunciado: "Cuando se aproximan dos polos de distinta naturaleza (por ejemplo, un polo {escenario[0][0]} y un polo {escenario[0][1]}), la fuerza resultante es de ___."

explicacion: |
  Al ser polos opuestos, la fuerza magnética es de atracción.
```

### 4 — Identificación de polos
```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["magnetismo"]

tipo: mc
opciones_explicitas: ["imán", "conductor", "aislante", "superconductor"]
respuesta: "imán"

enunciado: "Un objeto que presenta la propiedad de atraer metales ferrosos debido a su campo magnético se denomina ___."

explicacion: |
  La capacidad de atraer materiales ferromagnéticos es la característica principal de un imán.
```

### 5 — Comportamiento de polos iguales
```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["repulsión"]

tipo: mc
opciones_explicitas: ["atracción", "repulsión", "ninguna", "estática"]
respuesta: "repulsión"

enunciado: "Si dos imanes se presentan con sus polos iguales enfrentados (Norte con Norte o Sur con Sur), se observa una fuerza de ___."

explicacion: |
  La repulsión es la respuesta característica cuando los polos magnéticos son idénticos.
```