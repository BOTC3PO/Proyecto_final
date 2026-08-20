### 1 — El hito de la escritura
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["escritura", "prehistoria", "historia"]

respuesta: "historia"
tipo: completar
respuestas_validas: ["historia"]

enunciado: "La aparición de la escritura marca la transición de la prehistoria al inicio de la ___."

explicacion: |
  La prehistoria se define por la ausencia de registros escritos. Con la invención de la escritura, los seres humanos pueden dejar testimonios directos de sus leyes, mitos y transacciones, permitiendo el estudio de la historia documentada.
```

### 2 — Evidencia arqueológica vs. escrita
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["arqueologia", "metodologia"]

variables:
  escenario: uno_de([
    ["restos materiales (huesos, herramientas)", "arqueología"],
    ["registros escritos (tablillas, papiros)", "historia"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["arqueología", "historia"]

enunciado: "Si un investigador encuentra una serie de tablillas de arcilla con nombres y cantidades de grano, está estudiando principalmente la ___."

explicacion: |
  El uso de registros escritos permite pasar de la reconstrucción basada en restos materiales (arqueología) al análisis de la historia documentada.
```

### 3 — El cambio de paradigma
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["cronologia", "transicion"]

respuesta: "verdadero"
tipo: vf

enunciado: "¿La escritura permite conocer la mentalidad de una civilización de forma directa, a diferencia de los restos materiales que requieren interpretación indirecta?"

explicacion: |
  Verdadero. Los objetos nos dicen qué tenían o cómo vivían, pero los textos nos dicen qué pensaban, qué leyes tenían y cómo se llamaban a sí mismos.
```

### 4 — El proceso de registro
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["metodologia", "transicion"]

respuesta: "documental"
tipo: completar
respuestas_validas: ["documental"]

enunciado: "Cuando un historiador utiliza textos antiguos para reconstruir un evento, está realizando un análisis de tipo ___."

explicacion: |
  El análisis documental se basa en el uso de fuentes escritas (documentos) para la reconstrucción de procesos sociales y políticos.
```

### 5 — Evolución de la evidencia
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["evidencia", "metodologia"]

respuesta: ["restos materiales", "escritura", "historia documentada"]
tipo: ordenar
opciones_explicitas: ["restos materiales", "escritura", "historia documentada"]

enunciado: "Ordena los niveles de evidencia según el grado de complejidad en la reconstrucción de la vida social, desde lo más material hasta lo más intelectual/directo:"

explicacion: |
  La escala comienza con la cultura material (objetos), sigue con la capacidad de registrar (escritura) y culmina en la capacidad de estudiar la historia a través de testimonios directos.
```