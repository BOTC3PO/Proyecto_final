### 1 — Arte Rupestre
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "pintura"]

variables:
  escenario: uno_de([["pinturas sobre paredes de cuevas usando pigmentos naturales", "pintura rupestre"], ["esculturas de piedra en el exterior", "escultura megalitica"], ["grabados sobre hueso o madera", "grabado"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["pintura rupestre", "escultura megalitica", "grabado"]

enunciado: "Se han encontrado restos de pigmentos rojos y negros aplicados sobre las paredes de una cueva profunda. ¿A qué forma de arte corresponde esta descripción? ___"

explicacion: |
  La descripción corresponde a la {escenario[idx][0]}.
```

### 2 — El Venus Paleolítico
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["escultura", "paleolitico"]

variables:
  escenario: uno_de([["pequeñas figuras femeninas con rasgos sexuales muy acentuados", "Venus"], ["figuras de animales realistas", "Zoomorfos"], ["manos grabadas en piedra", "Manos"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Venus", "Zoomorfos", "Manos"]

enunciado: "Se descubre una pequeña estatuilla de piedra que enfatiza la fertilidad mediante formas redondeadas. Se trata de una ___."

explicacion: |
  Las figuras con estas características se denominan {escenario[idx][1]}.
```

### 3 — Cronología del Arte Prehistórico
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["cronologia", "periodos"]

variables:
  orden_correcto: ["Paleolítico", "Mesolítico", "Neolítico"]

respuesta: ["Paleolítico", "Mesolítico", "Neolítico"]
tipo: ordenar
opciones_explicitas: ["Paleolítico", "Mesolítico", "Neolítico"]

enunciado: "Ordena cronológicamente los periodos de la prehistoria, desde el más antiguo al más reciente:"

explicacion: |
  El orden correcto es: {orden_correcto[0]}, luego {orden_correcto[1]} y finalmente {orden_correcto[2]}.
```

### 4 — Materiales de Grabado
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["tecnica", "materiales"]

variables:
  escenario: uno_de([["piedra", "litografía"], ["hueso", "osteografía"], ["madera", "xilografía"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["litografía", "osteografía", "xilografía"]

enunciado: "Si el soporte utilizado para realizar un grabado es un ___, la técnica se denomina ___."

explicacion: |
  Al usar {escenario[idx][0]}, la técnica es la {escenario[idx][1]}.
```

### 5 — El Concepto de Arte
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["teoria", "prehistoria"]

variables:
  escenario: uno_de([["magia", "ritual"], ["decoración", "estética"], ["comunicación", "lenguaje"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["ritual", "estética", "lenguaje"]

enunciado: "Muchos arqueólogos sostienen que el arte en el Paleolítico no era decorativo, sino que tenía una función de ___."

explicacion: |
  Se cree que su función principal era el {escenario[idx][1]}.
```