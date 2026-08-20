### 1 — Polos magnéticos y carga eléctrica
```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "basico"
  tags: ["magnetismo", "electricidad"]

respuesta: "repulsión"
tipo: completar
respuestas_validas: ["repulsión", "atracción"]

enunciado: "Mientras que las cargas eléctricas de igual signo se repelen, los polos magnéticos del mismo nombre (ej. Norte y Norte) también experimentan una ___."

explicacion: |
  Tanto en la electrostática como en el magnetismo, la interacción entre entidades de la misma naturaleza (cargas iguales o polos iguales) es siempre de repulsión.
```

### 2 — Diferencia entre imán y carga eléctrica
```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "intermedio"
  tags: ["magnetismo", "electricidad"]

variables:
  es_magnetico: uno_de([verdadero, falso])

respuesta: es_magnetico
tipo: vf

enunciado: "Si un objeto tiene una carga eléctrica neta, se puede separar en un polo positivo y un polo negativo de forma independiente. ¿Es esto una propiedad de los imanes magnéticos? {es_magnetico}"

explicacion: |
  Falso. Los imanes son dipolos; si cortas un imán por la mitad, obtendrás dos imanes más pequeños, cada uno con su propio polo norte y sur. No existen los "monopolos magnéticos" en la naturaleza.
```

### 3 — Interacción de polos magnéticos
```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "basico"
  tags: ["magnetismo"]

variables:
  escenario: uno_de([
    ["Norte", "Sur", "atracción"],
    ["Sur", "Norte", "atracción"],
    ["Norte", "Norte", "repulsión"],
    ["Sur", "Sur", "repulsión"]
  ])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "Considerando el escenario donde se aproximan un polo {escenario[0]} y un polo {escenario[1]}, la fuerza resultante es de {escenario[2]}."

explicacion: |
  Los polos opuestos (Norte-Sur) se atraen, mientras que los polos iguales (Norte-Norte o Sur-Sur) se repelen.
```

### 4 — Comportamiento de la aguja de una brújula
```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "basico"
  tags: ["magnetismo", "brújula"]

respuesta: ["Norte Magnético", "Sur Magnético"]
tipo: ordenar

opciones_explicitas: ["Norte Magnético", "Sur Magnético", "Polo Eléctrico Positivo"]

explicacion: |
  La brújula es un imán que se alinea con el campo magnético terrestre. El polo norte de la aguja apunta al polo sur magnético de la Tierra (que está cerca del polo norte geográfico). Los conceptos de "positivo" y "negativo" pertenecen a la electricidad, no al magnetismo.
```

### 5 — Comparación de fuerzas de campo
```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "intermedio"
  tags: ["magnetismo", "electricidad"]

variables:
  tipo_interaccion: uno_de([
    ["iguales", "repulsión"],
    ["opuestos", "atracción"]
  ])

respuesta: tipo_interaccion[1]
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "En un sistema de dos imanes, si la interacción entre sus polos es de {tipo_interaccion[1]}, esto significa que los polos presentados son {tipo_interaccion[0]}."

explicacion: |
  La regla fundamental es: polos iguales se repelen, polos opuestos se atraen.
```