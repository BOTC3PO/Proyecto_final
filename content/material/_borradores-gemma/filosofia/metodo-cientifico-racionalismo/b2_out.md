### 1 — Etapas del método científico
```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "basico"
  tags: ["metodo", "ciencia", "pasos"]

tipo: ordenar
opciones_explicitas: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]
respuesta: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]

enunciado: "El método científico es un procedimiento sistemático que sigue un orden lógico para estudiar la naturaleza. Ordena las siguientes etapas desde la fase inicial hasta la resolución del problema:"

explicacion: |
  El método científico busca la objetividad mediante un ciclo que comienza con la observación de un fenómeno, la formulación de una hipótesis explicativa, la puesta a prueba mediante experimentación y, finalmente, la obtención de una conclusión.
```

### 2 — La transición de la especulación al método
```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["historia", "epistemologia"]

tipo: mc

enunciado: "¿Cuál fue el cambio fundamental que permitió que la ciencia se diferenciara de la mera especulación filosófica en la modernidad?"

opciones_explicitas: ["El uso de la lógica pura sin contacto con la realidad", "La sustitución de la observación y experimentación sistemática por la intuición", "La adopción de un procedimiento sistemático basado en la evidencia empírica", "El abandono total de la razón en favor de los sentidos"]

respuesta: "La adopción de un procedimiento sistemático basado en la evidencia empírica"

explicacion: |
  Mientras que la especulación filosófica tradicional se basaba en la deducción lógica pura a partir de principios abstractos, el método científico introdujo la necesidad de contrastar dichas ideas con la realidad mediante la observación y la experimentación.
```

### 3 — El rol de la hipótesis
```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "basico"
  tags: ["hipotesis", "metodologia"]

tipo: completar

enunciado: "En el proceso de investigación, una ___ es una explicación provisional que intenta dar respuesta a un fenómeno observado y que debe ser sometida a prueba."

respuestas_validas: ["hipótesis"]

respuesta: "hipótesis"

explicacion: |
  La hipótesis no es una verdad absoluta, sino una conjetura educada que sirve como guía para la experimentación. Si la experimentación la contradice, la hipótesis debe ser modificada o descartada.
```

### 4 — Experimentación y validación
```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["experimentacion", "verificacion"]

tipo: mc

enunciado: "Si un científico observa un fenómeno y formula una hipótesis, pero al realizar pruebas controladas los resultados no coinciden con su predicción, ¿qué debe ocurrir según el método científico?"

opciones_explicitas: ["Se debe ignorar el resultado para no invalidar la teoría", "Se debe descartar o reformular la hipótesis", "Se debe cambiar la observación inicial para que coincida con la hipótesis", "Se debe concluir que la naturaleza es irracional"]

respuesta: "Se debe descartar o reformular la hipótesis"

explicacion: |
  La experimentación tiene como fin último la validación o refutación. Un resultado contradictorio es una herramienta fundamental para el avance del conocimiento, obligando al científico a revisar sus premisas.
```

### 5 — El carácter sistemático
```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "avanzado"
  tags: ["sistematicidad", "epistemologia"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["El método científico es ___ porque sigue una serie de pasos ordenados y repetibles.", "sistemático"],
    ["La observación científica es ___ porque requiere un examen atento y organizado de los hechos.", "metódica"]
  ]

tipo: completar

enunciado: "Un aspecto crucial del método científico es que es {escenario[idx][0]}, lo que significa que es {escenario[idx][1]}."

respuestas_validas: ["sistemático", "metódica"]

respuesta: "sistemático"

explicacion: |
  La sistematicidad implica que el conocimiento no se adquiere de forma azarosa, sino a través de un conjunto de reglas y pasos interconectados que permiten que el proceso sea reproducible por otros investigadores.
```