### 1 — El lema revolucionario
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "basico"
  tags: ["revolucion_francesa", "lema"]

tipo: mc
opciones_explicitas: ["Libertad, Igualdad, Fraternidad", "Libertad, Igualdad, Propiedad", "Igualdad, Justicia, Libertad", "Libertad, Orden, Progreso"]

enunciado: "El lema que sintetiza los ideales de la Revolución Francesa es:"

explicacion: |
  El lema 'Libertad, Igualdad, Fraternidad' (Liberté, Égalité, Fraternité) fue el pilar ideológico que impulsó la caída del Antiguo Régimen.
```

### 2 — Derechos fundamentales
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["derechos_humanos", "declaracion_1789"]

tipo: completar
respuestas_validas: ["1789"]

enunciado: "La Declaración de los Derechos del Hombre y del Ciudadano fue adoptada por la Asamblea Nacional Constituyente en el año ____."

explicacion: |
  La Declaración de 1789 es uno de los documentos fundacionales de la democracia moderna, estableciendo que los hombres nacen y permanecen libres e iguales en derechos.
```

### 3 — Principios de la Declaración
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "avanzado"
  tags: ["derechos_humanos", "soberania"]

variables:
  idx: uno_de([0, 1])
  datos: [["La soberanía reside en la Nación", "La ley es la expresión de la voluntad general"], ["La ley es la expresión de la voluntad general", "La soberanía reside en la Nación"]]

tipo: mc
opciones_explicitas: ["La soberanía reside en la Nación", "La soberanía reside en el Monarca", "La soberanía reside en la Iglesia", "La soberanía reside en la Aristocracia"]]

enunciado: "Según la Declaración de 1789, el principio de soberanía establece que: {datos[idx][0]}"

explicacion: |
  El Artículo 3 de la Declaración establece que "El principio de toda soberanía reside esencialmente en la Nación".
```

### 4 — Orden cronológico de la Revolución
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

tipo: ordenar
opciones_explicitas: ["Toma de la Bastilla", "Declaración de los Derechos del Hombre", "Ejecución de Luis XVI"]

enunciado: "Ordena cronológicamente los siguientes hitos de la Revolución Francesa:"

explicacion: |
  La Bastilla cayó en julio de 1789, la Declaración se aprobó en agosto de 1789 y la ejecución del Rey ocurrió en enero de 1793.
```

### 5 — Naturaleza de la igualdad
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["igualdad", "derechos"]

tipo: input
tolerancia_abs: 0

enunciado: "La Declaración de 1789 establece que los hombres nacen y permanecen libres e ____ en derechos."

explicacion: |
  El concepto de igualdad ante la ley fue fundamental para desmantelar los privilegios estamentales del feudalismo.
```