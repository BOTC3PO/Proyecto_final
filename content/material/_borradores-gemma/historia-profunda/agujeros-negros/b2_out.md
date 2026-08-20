### 1 — El límite de no retorno
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["astronomia", "gravedad"]

respuesta: "horizonte de eventos"
tipo: completar
respuestas_validas: ["horizonte de eventos"]

enunciado: "El límite esférico alrededor de un agujero negro más allá del cual la velocidad de escape es mayor que la velocidad de la luz se denomina ___."

explicacion: |
  El horizonte de eventos marca la frontera física donde la gravedad es tan intensa que nada, ni siquiera la radiación electromagnética (luz), puede escapar.
```

### 2 — Velocidad de escape crítica
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["fisica", "luz"]

opciones_explicitas: ["menor que la velocidad de la luz", "igual a la velocidad de la luz", "mayor que la velocidad de la luz"]

respuesta: "mayor que la velocidad de la luz"
tipo: mc

enunciado: "Para que un objeto pueda escapar de un agujero negro tras cruzar su horizonte de eventos, su velocidad debería ser..."

explicacion: |
  Por definición, el horizonte de eventos es la región donde la velocidad de escape necesaria supera la velocidad de la luz ($c$), haciendo que el escape sea físicamente imposible.
```

### 3 — Componentes de la singularidad
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["estructura", "singularidad"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un agujero negro de masa estelar", "un agujero negro supermasivo"], ["se forma por el colapso de una estrella masiva", "reside en el centro de las galaxias"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["se forma por el colapso de una estrella masiva", "reside en el centro de las galaxias"]

enunciado: "Si estamos analizando {escenario[idx][0]}, es correcto afirmar que este {escenario[idx][1]}."

explicacion: |
  El horizonte de eventos es una propiedad geométrica del espacio-tiempo que depende de la masa del objeto, ya sea que provenga del colapso estelar o de procesos galácticos.
```

### 4 — La frontera de la luz
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["luz", "gravedad"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es posible que un fotón (partícula de luz) escape de la atracción gravitatoria una vez que ha cruzado el horizonte de eventos?"

explicacion: |
  No. La luz es la entidad más rápida del universo y, aun así, queda atrapada por la curvatura extrema del espacio-tiempo en el horizonte de eventos.
```

### 5 — Secuencia de captura
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["proceso", "caida"]

opciones_explicitas: ["Aproximación orbital", "Cruzar el horizonte de eventos", "Colapso hacia la singularidad"]

respuesta: ["Aproximación orbital", "Cruzar el horizonte de eventos", "Colapso hacia la singularidad"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos que experimentaría una partícula que cae hacia un agujero negro:"

pasos:
  - "La partícula se acerca siguiendo una trayectoria curva."
  - "La partícula atraviesa la frontera de no retorno."
  - "La partícula es comprimida hacia el centro matemático de densidad infinita."

explicacion: |
  Primero la partícula orbita o se acerca, luego cruza el horizonte de eventos (sin que un observador externo vea el paso instantáneo, pero para la partícula es un límite real) y finalmente cae hacia la singularidad.
```