### 1 — El concepto de sujeto moderno
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["sujeto", "modernidad", "individualismo"]

respuesta: "individualismo"
tipo: mc
opciones_explicitas: ["colectivismo", "individualismo", "dualismo", "determinismo"]

enunciado: "La modernidad promovió la idea de que la identidad se construye a partir de un ___ creciente, desplazando las identidades grupales o estamentales."

explicacion: |
  La modernidad se caracteriza por el surgimiento del individuo como unidad básica de la sociedad, con derechos y una conciencia propia, separada de su comunidad o estamento.
```

### 2 — ¿Es el 'yo' una noción eterna?
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["historia", "sujeto"]

respuesta: falso

tipo: vf

enunciado: "La noción de un 'yo' o sujeto individual y autónomo es una construcción histórica que se consolidó con la modernidad, y no ha existido de la misma forma en todas las épocas de la humanidad."

explicacion: |
  Históricamente, en muchas culturas premodernas, la identidad estaba definida por el rol social, la familia o la religión, y no por una esencia interna e individualista.
```

### 3 — Componentes de la identidad moderna
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["autonomia", "razon"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["autonomía", "razón"], ["colectividad", "tradición"]]

respuesta: datos[escenario_idx][0]
tipo: completar
respuestas_validas: ["autonomía", "razón"]

enunciado: "En el pensamiento moderno, el sujeto se define por su capacidad de ___ y su capacidad de actuar según su propia ________."

explicacion: |
  La modernidad sitúa a la razón y la autonomía como los pilares que permiten al individuo desprenderse de las imposiciones externas para ser dueño de sus actos.
```

### 4 — Evolución de la noción de sujeto
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "orden"]

respuesta: ["Sujeto comunitario/estamental", "Sujeto racional/moderno", "Sujeto fragmentado/posmoderno"]
tipo: ordenar
opciones_explicitas: ["Sujeto comunitario/estamental", "Sujeto racional/moderno", "Sujeto fragmentado/posmoderno"]

enunciado: "Ordene cronológicamente la evolución de la noción de identidad/sujeto en la historia occidental:"

explicacion: |
  La historia muestra una transición desde la identidad fija por pertenencia grupal, pasando por el individuo soberano de la modernidad, hasta la identidad fluida y múltiple de la posmodernidad.
```

### 5 — El papel de la introspección
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["introspeccion", "conciencia"]

respuesta: 1

tipo: mc
opciones_explicitas: [0, 1]

enunciado: "En el contexto de la modernidad, ¿es la introspección una herramienta fundamental para el descubrimiento del 'yo' interior?\n(0 = No, 1 = Sí)"

explicacion: |
  La modernidad fomenta la idea de que el sujeto puede conocerse a sí mismo mediante la observación de sus propios procesos mentales y sentimientos internos.
```