### 1 — El juego de imanes
```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

variables:
  escenario: uno_de([["Norte-Sur", "atracción"], ["Norte-Norte", "repulsión"], ["Sur-Sur", "repulsión"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "Si acercamos dos polos de un imán que son {escenario[idx][0]}, la fuerza resultante entre ellos será de ___."

explicacion: |
  Los polos opuestos (Norte y Sur) se atraen, mientras que los polos iguales (Norte-Norte o Sur-Sur) se repelen.
```

### 2 — El experimento de la brújula
```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "basico"
  tags: ["magnetismo", "brújula"]

variables:
  situacion: uno_de([["un polo norte cerca de la aguja norte", "repulsión"], ["un polo sur cerca de la aguja norte", "atracción"]])

respuesta: situacion[idx][1]
tipo: vf

enunciado: "Si colocamos un polo norte de un imán frente al polo norte de una aguja de brújula, la aguja experimentará una fuerza de repulsión. ¿Es esto verdadero o falso?"

explicacion: |
  Verdadero. Polos iguales se repelen.
```

### 3 — Clasificación de fuerzas
```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

variables:
  par_polos: uno_de([["Norte y Sur", "atracción"], ["Norte y Norte", "repulsión"], ["Sur y Sur", "repulsión"]])

respuesta: par_polos[idx][1]
tipo: completar
opciones_explicitas: ["atracción", "repulsión"]
respuestas_validas: ["atracción", "repulsión"]

enunciado: "En un experimento de laboratorio, se observa que un par de polos {par_polos[idx][0]} genera una fuerza de ___."

explicacion: |
  La regla fundamental del magnetismo establece que polos opuestos se atraen y polos iguales se repelen.
```

### 4 — Secuencia de interacción
```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "intermedio"
  tags: ["magnetismo", "secuencia"]

respuesta: ["Polos iguales", "Repulsión", "Polos opuestos", "Atracción"]
tipo: ordenar

enunciado: "Ordena la lógica de interacción magnética de la siguiente manera: primero la relación de polos iguales y su efecto, y luego la de polos opuestos y su efecto."

explicacion: |
  La secuencia correcta describe la naturaleza de las fuerzas magnéticas: iguales se repelen, opuestos se atraen.
```

### 5 — El imán de la puerta
```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "basico"
  tags: ["magnetismo", "vida_diaria"]

variables:
  caso: uno_de([["el imán tiene polo sur y la puerta polo norte", "atracción"], ["el imán tiene polo norte y la puerta polo norte", "repulsión"]])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "Un imán de puerta se pega fuertemente porque {caso[idx][0]}. Esto se debe a una fuerza de ___."

explicacion: |
  Para que un imán se pegue (atraiga), los polos deben ser de distinta naturaleza.
```