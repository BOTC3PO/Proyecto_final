### 1 — La naturaleza de la vida temprana
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["biologia", "evolucion", "anaerobico"]

respuesta: "anaeróbica"
tipo: completar
respuestas_validas: ["anaeróbica", "anaerobia"]

enunciado: "Debido a la ausencia de oxígeno libre en la atmósfera primitiva, la vida temprana era de tipo ___."

explicacion: |
  La atmósfera primitiva era un ambiente reductor. Al no haber O2, los primeros organismos no podían realizar la respiración aeróbica y debían obtener energía mediante procesos anaeróbicos.
```

### 2 — El impacto del oxígeno
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["oxigeno", "metabolismo"]

variables:
  escenario: uno_de([["presencia de O2", "aeróbica"], ["ausencia de O2", "anaeróbica"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["aeróbica", "anaeróbica"]

enunciado: "Si la atmósfera primitiva carecía de oxígeno libre, ¿qué tipo de metabolismo predominaba en los organismos de esa época?"

pasos:
  - "Identificar la condición atmosférica: ausencia de O2."
  - "Relacionar la condición con el tipo de respiración celular."

explicacion: |
  La falta de oxígeno obligaba a los organismos a utilizar otras moléculas como aceptores de electrones, caracterizando un metabolismo anaeróbico.
```

### 3 — Evolución de la respiración
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["evolucion", "oxigeno"]

respuesta: ["Anaerobiosis", "Fotosíntesis oxigénica", "Acumulación de O2", "Respiración aeróbica"]
tipo: ordenar
opciones_explicitas: ["Anaerobiosis", "Fotosíntesis oxigénica", "Acumulación de O2", "Respiración aeróbica"]

enunciado: "Ordena cronológicamente los eventos relacionados con la transición de una atmósfera sin oxígeno a una con oxígeno:"

explicacion: |
  Primero existía la vida anaerobia. Luego, la aparición de organismos fotosintéticos (cianobacterias) comenzó a liberar O2, el cual se acumuló hasta permitir la evolución de la respiración aeróbica.
```

### 4 — Verdadero o Falso: Oxígeno y Vida
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["oxigeno", "logica"]

respuesta: falso
tipo: vf

enunciado: "La presencia de oxígeno libre en la atmósfera primitiva era un requisito indispensable para los primeros organismos vivos."

explicacion: |
  Falso. Los primeros organismos eran anaeróbicos, lo que significa que podían vivir y prosperar en un ambiente sin oxígeno.
```

### 5 — El papel del oxígeno
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["metabolismo", "oxigeno"]

variables:
  estado: uno_de([[true, "presencia"], [false, "ausencia"]])

respuesta: estado[0] == true ? "aeróbica" : "anaeróbica"
tipo: mc
opciones_explicitas: ["aeróbica", "anaeróbica"]

enunciado: "Si la atmósfera primitiva se caracterizaba por la {estado[1]}, el metabolismo de la vida temprana era ___."

explicacion: |
  La ausencia de oxígeno (estado falso) define un ambiente donde solo la vida anaeróbica puede prosperar.
```