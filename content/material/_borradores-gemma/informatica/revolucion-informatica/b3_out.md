### 1 — El concepto de la Ley de Moore
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "hardware"]

tipo: mc
opciones_explicitas: ["La velocidad de procesamiento", "La capacidad de almacenamiento", "La densidad de transistores en un chip", "El costo de los componentes electrónicos"]

enunciado: "La Ley de Moore es una observación histórica que predice el aumento de la densidad de ___ en un circuito integrado cada dos años aproximadamente."

respuesta: "La densidad de transistores en un chip"

explicacion: |
  Gordon Moore, cofundador de Intel, observó que el número de transistores en un microchip se duplicaba aproximadamente cada dos años, lo que impulsó la miniaturización de la tecnología.
```

### 2 — Cálculo de progresión
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["calculo", "hardware"]

variables:
  idx: uno_de([0, 1])
  datos: [["1000", "2000"], ["500", "1000"]]
  base: datos[idx][0]
  doble: datos[idx][1]

tipo: input
tolerancia_abs: 0

enunciado: "Si un chip tiene {base} transistores hoy, siguiendo la Ley de Moore, ¿cuántos transistores tendrá aproximadamente en el próximo ciclo de dos años?"

respuesta: "doble"

pasos:
  - "Identificar la cantidad actual de transistores."
  - "Aplicar el factor de duplicación (x2) según la ley."

explicacion: |
  La Ley de Moore establece que la cantidad de transistores se duplica. Por lo tanto, {base} * 2 = {doble}.
```

### 3 — Evolución tecnológica
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "procesadores"]

tipo: ordenar
opciones_explicitas: ["Aumento de transistores", "Reducción del tamaño de los componentes", "Aumento de la potencia de cómputo", "Reducción de costos por transistor"]

enunciado: "Ordena los efectos causados por la aplicación de la Ley de Moore en la tecnología, desde la causa técnica hasta el efecto en el consumidor final:"

respuesta: ["Aumento de transistores", "Reducción del tamaño de los componentes", "Aumento de la potencia de cómputo", "Reducción de costos por transistor"]

explicacion: |
  La Ley de Moore describe un ciclo: más transistores en menos espacio permiten chips más potentes y, con la escala de producción, más económicos.
```

### 4 — Relación de conceptos
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["teoria", "hardware"]

tipo: completar
respuestas_validas: ["potencia", "capacidad"]

enunciado: "Debido al aumento exponencial de transistores, la ___ de procesamiento de los ordenadores ha crecido de forma similar a lo largo de las últimas décadas."

respuesta: "potencia"

explicacion: |
  Al integrar más transistores en un mismo espacio, el procesador puede realizar más operaciones por segundo, aumentando su potencia.
```

### 5 — Verdad o Falso
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["conceptos"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "La Ley de Moore es una ley física inmutable de la naturaleza, similar a la Ley de la Gravedad."

respuesta: "Falso"

explicacion: |
  No es una ley física, sino una observación empírica y una meta industrial que ha guiado la planificación de la industria de los semiconductores.
```