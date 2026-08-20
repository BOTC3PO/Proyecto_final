### 1 — Origen de la vida
```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "basico"
  tags: ["origen", "evolucion"]

respuesta: 3800000000
tipo: input
tolerancia_abs: 100000000

enunciado: "Se estima que las primeras formas de vida procariota aparecieron hace aproximadamente ___ años."

explicacion: |
  Los registros fósiles y evidencia química sugieren que la vida procariota surgió hace unos 3800 millones de años.
```

### 2 — Características estructurales
```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "basico"
  tags: ["estructura", "celula"]

opciones_explicitas: ["con núcleo definido y organelas", "sin núcleo definido ni organelas membranosas", "con núcleo definido pero sin organelas", "sin núcleo definido pero con organelas"]

respuesta: "sin núcleo definido ni organelas membranosas"
tipo: mc

enunciado: "Una característica fundamental que define a las células procariotas es que carecen de:"

explicacion: |
  A diferencia de las eucariotas, los procariotas no poseen un núcleo delimitado por una membrana ni organelas complejas como mitocondrias o cloroplastos.
```

### 3 — Clasificación celular
```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["clasificacion", "eucariotas"]

variables:
  escenario: uno_de([["procariota", "sin núcleo"], ["eucariota", "con núcleo"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["sin núcleo", "con núcleo"]

enunciado: "Si observamos una célula que no posee un núcleo definido, estamos ante una célula de tipo ___."

explicacion: |
  La presencia o ausencia de un núcleo definido es el criterio principal para distinguir entre células procariotas y eucariotas.
```

### 4 — Orden de aparición biológica
```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "basico"
  tags: ["evolucion", "orden"]

opciones_explicitas: ["Procariotas", "Eucariotas", "Multicelulares"]

respuesta: ["Procariotas", "Eucariotas", "Multicelulares"]
tipo: ordenar

enunciado: "Ordena cronológicamente la aparición de las siguientes formas de vida, de la más antigua a la más reciente:"

explicacion: |
  La evolución biológica comenzó con organismos procariotas unicelulares, seguidos por células eucariotas más complejas y, finalmente, la vida multicelular.
```

### 5 — Verdadero o Falso: Organelas
```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "basico"
  tags: ["estructura", "membranas"]

opciones_explicitas: ["Verdadero", "Falso"]

respuesta: "Verdadero"
tipo: mc

enunciado: "¿Es correcto afirmar que las células procariotas poseen organelas membranosas como el retículo endoplasmático?"

explicacion: |
  Es falso. Las organelas membranosas son una característica exclusiva de las células eucariotas.
```