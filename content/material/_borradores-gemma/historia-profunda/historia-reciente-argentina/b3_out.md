### 1 — Desafíos de la temporalidad
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["metodologia", "temporalidad"]

variables:
  distancia: uno_de(["corta", "media", "larga"])

respuesta: "corta"
tipo: mc
opciones_explicitas: ["corta", "media", "larga"]

enunciado: "Uno de los principales desafíos para el historiador al abordar la historia reciente es la {distancia} distancia temporal con los hechos, lo que puede afectar la objetividad."

explicacion: |
  La cercanía temporal en la historia reciente puede dificultar la perspectiva crítica debido a la persistencia de la carga emocional y los intereses de los actores involucrados.
```

### 2 — La naturaleza de las fuentes
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["fuentes", "metodologia"]

variables:
  escenario: uno_de([["testimonios orales en disputa", "documentos oficiales", "diarios de la época"], ["fuentes en disputa", "fuentes estables", "fuentes consolidadas"]])

respuesta: "fuentes en disputa"
tipo: completar
respuestas_validas: ["fuentes en disputa"]

enunciado: "En el estudio de procesos recientes, es común encontrarse con ___ que aún no han sido validadas por un consenso historiográfico o que presentan versiones contradictorias."

explicacion: |
  A diferencia de la historia antigua, en la reciente las fuentes (como testimonios o archivos desclasificados) suelen estar en disputa o bajo revisión constante.
```

### 3 — Sensibilidad política
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["politica", "interpretacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["la construcción de la memoria", "el rol de los organismos"], ["políticamente sensibles", "técnicamente complejas"]]

respuesta: "políticamente sensibles"
tipo: mc
opciones_explicitas: ["políticamente sensibles", "técnicamente complejas", "irrelevantes"]

enunciado: "El estudio de la historia reciente argentina se caracteriza por tratar interpretaciones que suelen ser ___."

explicacion: |
  Debido a que los procesos históricos recientes siguen impactando en el debate público actual, las interpretaciones suelen estar atravesadas por tensiones políticas.
```

### 4 — Secuencia de complejidad historiográfica
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["metodologia", "procesos"]

respuesta: ["distancia temporal", "fuentes en disputa", "interpretaciones sensibles"]
tipo: ordenar
opciones_explicitas: ["distancia temporal", "fuentes en disputa", "interpretaciones sensibles"]

enunciado: "Ordene los factores que incrementan la complejidad del estudio de la historia reciente, desde el factor cronológico hasta el factor interpretativo:"

explicacion: |
  El proceso comienza con la cercanía de los hechos (tiempo), sigue con la dificultad de procesar la evidencia (fuentes) y culmina en la tensión de los sentidos asignados (interpretación).
```

### 5 — El rol del historiador
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["metodologia"]

variables:
  valor: uno_de([0, 1])
  datos: [[10, "objetividad"], [20, "subjetividad"]]

respuesta: "subjetividad"
tipo: input
tolerancia_abs: 0

enunciado: "Debido a la carga emocional y política, el historiador debe trabajar con mayor cuidado para no ser arrastrado por la {datos[valor][1]} del presente."

explicacion: |
  La proximidad de los hechos aumenta el riesgo de que la subjetividad de los actores o del propio investigador nuble el análisis crítico.
```