### 1 — El sufragio femenino
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["derechos", "voto_femenino", "eva_peron"]

respuesta: "1947"
tipo: "completar"
respuestas_validas: ["1947"]

enunciado: "La Ley de Sufragio Femenino en Argentina, que garantizó el derecho político de las mujeres, fue sancionada en el año ___."

explicacion: |
  La Ley 13.510 fue sancionada el 9 de septiembre de 1947, marcando un hito en la democracia argentina.
```

### 2 — El rol de Eva Perón
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["eva_peron", "liderazgo"]

respuesta: "Eva Perón"
tipo: "mc"
opciones_explicitas: ["Eva Perón", "Isabel Perón", "Alicia Moreau de Justo", "Victoria Ocampo"]

enunciado: "¿Qué figura política fue la principal impulsora y referente del reclamo por el voto femenino durante el primer peronismo?"

explicacion: |
  Eva Perón (Evita) fue la líder indiscutida del movimiento sufragista, logrando que el proyecto fuera una política de Estado.
```

### 3 — El primer ejercicio del voto
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["elecciones", "hitos"]

variables:
  escenario: uno_de([["1951", "primeras elecciones con voto femenino"]])

respuesta: "1951"
tipo: "input"
tolerancia_abs: 0

enunciado: "Si bien la ley se sancionó en 1947, las mujeres argentinas ejercieron el derecho al voto por primera vez en las elecciones de el año {escenario[0]}."

explicacion: |
  En 1951, las mujeres votaron por primera vez en elecciones nacionales, incluyendo a las candidatas a diputadas y senadoras.
```

### 4 — Conceptos clave del sufragio
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["derechos_civiles", "ciudadania"]

respuesta: ["Ley 13.510", "Sufragio Femenino", "Ciudadanía Plena"]
tipo: "ordenar"
opciones_explicitas: ["Ley 13.510", "Sufragio Femenino", "Ciudadanía Plena"]

enunciado: "Ordena cronológicamente los procesos que permitieron la integración política de la mujer en Argentina:"

explicacion: |
  Primero se sanciona la ley, luego se implementa el sufragio y finalmente se consolida la ciudadanía plena de la mujer.
```

### 5 — Consecuencias políticas
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["democracia", "participacion"]

variables:
  caso: uno_de([[true, "se amplió la base electoral"], [false, "se redujo la participación"]])

respuesta: "se amplió la base electoral"
tipo: "mc"
opciones_explicitas: ["se amplió la base electoral", "se redujo la participación"]

enunciado: "Considerando el impacto del voto femenino en la democracia argentina, ¿qué ocurrió con la participación política? {caso[0]}"

explicacion: |
  La incorporación de las mujeres como electoras amplió significativamente la base de representatividad del sistema democrático.
```