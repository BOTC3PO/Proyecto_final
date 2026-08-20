### 1 — Diferencia entre corrosión y oxidación
```
metadata:
  materia: "materiales"
  tema: "corrosion_conceptos"
  nivel: "basico"
  tags: ["quimica", "metales"]

respuesta: "oxidación"
tipo: "completar"
respuestas_validas: ["oxidación"]

enunciado: "Si bien la corrosión es un proceso de deterioro, la ___ es el proceso químico de pérdida de electrones que puede ocurrir incluso sin la degradación destructiva de la pieza."

explicacion: |
  La oxidación es la reacción química de transferencia de electrones, mientras que la corrosión es el proceso de deterioro resultante (generalmente por factores ambientales) que afecta la integridad del material.
```

### 2 — Corrosión vs. Erosión
```
metadata:
  materia: "materiales"
  tema: "corrosion_vs_erosion"
  nivel: "intermedio"
  tags: ["mecanica", "deterioro"]

variables:
  tipo_deterioro: uno_de(["quimico", "mecanico"])

respuesta: uno_de(["quimico", "mecanico"])
tipo: "mc"
opciones_explicitas: ["quimico", "mecanico"]

enunciado: "El deterioro de un material debido al desgaste físico por el impacto de partículas o flujo de fluidos se denomina erosión, mientras que la corrosión es un proceso de naturaleza {tipo_deterioro}."

explicacion: |
  La erosión es un proceso mecánico de remoción de material por fricción o impacto, mientras que la corrosión es un proceso químico o electroquímico.
```

### 3 — Naturaleza de la corrosión galvánica
```
metadata:
  materia: "materiales"
  tema: "corrosion_galvanica"
  nivel: "intermedio"
  tags: ["electroquimica"]

respuesta: falso
tipo: "vf"

enunciado: "La corrosión galvánica ocurre cuando dos metales diferentes están en contacto eléctrico en un electrolito, pero el metal más noble es el que sufre el mayor deterioro."

explicacion: |
  Falso. En la corrosión galvánica, el metal menos noble (ánodo) es el que se corroe, mientras que el metal más noble (cátodo) se protege.
```

### 4 — Factores que aceleran la corrosión
```
metadata:
  materia: "materiales"
  tema: "factores_corrosion"
  nivel: "basico"
  tags: ["ambiente"]

respuesta: ["Presencia de electrolitos", "Aumento de humedad", "Presencia de sales"]
tipo: "ordenar"
opciones_explicitas: ["Presencia de electrolitos", "Aumento de humedad", "Presencia de sales"]

enunciado: "Ordene de mayor a menor relevancia los factores que suelen acelerar un proceso de corrosión electrolítica en un ambiente marino:"

explicacion: |
  La presencia de un electrolito (como agua salada) es el motor de la celda, la humedad permite la formación de la película líquida y las sales aumentan la conductividad.
```

### 5 — Corrosión por picadura (Pitting)
```
metadata:
  materia: "materiales"
  tema: "corrosion_pitting"
  nivel: "avanzado"
  tags: ["defectos", "localizada"]

variables:
  escenario: uno_de([0, 1])

respuesta: uno_de(["localizada", "general"])
tipo: "mc"
opciones_explicitas: ["localizada", "general"]

enunciado: "Si el daño por corrosión se concentra en puntos específicos creando pequeños agujeros profundos, estamos ante una corrosión {escenario_desc}, a diferencia de la corrosión ___ que afecta toda la superficie por igual."

variables:
  escenario_desc: uno_de(["localizada", "general"])

explicacion: |
  La corrosión por picadura (pitting) es un tipo de corrosión localizada muy peligrosa porque es difícil de detectar, a diferencia de la corrosión general que es uniforme.
```