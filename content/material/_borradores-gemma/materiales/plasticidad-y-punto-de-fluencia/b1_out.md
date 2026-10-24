### 1 — Definición de plasticidad
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["definicion", "deformacion"]

respuesta: "deformación permanente"
tipo: completar
respuestas_validas: ["deformación permanente", "deformacion permanente"]

enunciado: "La plasticidad es la propiedad de un material que le permite experimentar una ___ tras retirar la carga aplicada."

explicacion: |
  Cuando un material supera su límite elástico, los átomos se desplazan de sus posiciones originales y no regresan a ellas, resultando en una deformación permanente.
```

### 2 — El límite elástico
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["limite_elastico", "deformacion"]

opciones_explicitas: ["Límite elástico", "Punto de ruptura", "Módulo de Young", "Límite de fatiga"]
respuesta: "Límite elástico"
tipo: mc

enunciado: "El valor de tensión máxima en el que un material aún es capaz de recuperar su forma original sin sufrir cambios permanentes se denomina:"

explicacion: |
  Por debajo del límite elástico, el material se comporta de forma elástica (recuperable). Por encima, entra en el régimen plástico.
```

### 3 — Comportamiento elástico vs plástico
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["verdadero_falso", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "Si un material se encuentra en su zona de deformación elástica, cualquier carga aplicada será recuperada una vez que se retire la tensión."

explicacion: |
  Es falso. En la zona elástica, la deformación es reversible. La deformación permanente solo ocurre en la zona plástica.
```

### 4 — Secuencia de la curva tensión-deformación
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["curva_esfuerzo", "secuencia"]

opciones_explicitas: ["Deformación elástica", "Punto de fluencia", "Deformación plástica", "Rotura"]
respuesta: ["Deformación elástica", "Punto de fluencia", "Deformación plástica", "Rotura"]
tipo: ordenar

enunciado: "Ordene las etapas que experimenta un material dúctil conforme aumenta la tensión aplicada:"

explicacion: |
  Primero ocurre la deformación elástica (reversible), luego el material alcanza el punto de fluencia donde comienza la deformación plástica (irreversible), y finalmente llega a la rotura.
```

### 5 — El punto de fluencia
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["punto_de_fluencia", "definicion"]

variables:
  idx: uno_de([0, 1])

respuesta_tabla: [["elástica", "plástica"]]
respuesta: respuesta_tabla[idx][1]

enunciado: "Si un material supera su punto de fluencia, la deformación resultante será de tipo {respuesta_tabla[idx][1]}."

explicacion: |
  El punto de fluencia marca la transición entre el comportamiento elástico (reversible) y el comportamiento plástico (permanente).
```