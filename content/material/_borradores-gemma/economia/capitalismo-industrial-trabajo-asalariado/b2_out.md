### 1 — El concepto de fuerza de trabajo
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["trabajo", "salario", "capitalismo"]

tipo: mc
opciones_explicitas: ["La propiedad de los medios de producción", "La capacidad física y mental para trabajar", "El tiempo libre del trabajador", "El capital acumulado por el patrón"]

enunciado: "En el sistema de trabajo asalariado, lo que el trabajador vende al empleador para obtener un salario es su ___."

explicacion: |
  En el capitalismo, el trabajador no vende su producto ni sus medios de producción, sino su capacidad de trabajar (fuerza de trabajo) por un tiempo determinado.
```

### 2 — Evolución de los sistemas de producción
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["historia_economica", "servidumbre", "esclavitud"]

variables:
  escenario: uno_de([
    ["esclavo", "poseído como propiedad"],
    ["siervo", "vinculado a la tierra"],
    ["artesano", "dueño de sus herramientas"]
  ])

tipo: completar
respuestas_validas: ["esclavo", "siervo", "artesano"]

enunciado: "A diferencia del trabajador asalariado, el ___ es aquel que es considerado una propiedad del amo."

pasos:
  - "Identificar la relación jurídica entre trabajador y dueño."

explicacion: |
  El sistema de esclavitud se caracteriza por la deshumanización del trabajador, quien es tratado como un objeto o propiedad, a diferencia del asalariado que vende su tiempo/capacidad.
```

### 3 — Diferencia fundamental: Artesano vs Asalariado
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["artesano", "produccion", "medios_produccion"]

tipo: mc
opciones_explicitas: ["El artesano posee sus herramientas y el asalariado no", "El artesano trabaja menos horas", "El asalariado es dueño de su tiempo", "No hay diferencia real"]

enunciado: "Una diferencia clave entre el artesano independiente y el trabajador asalariado es que el artesano ___."

explicacion: |
  El artesano es dueño de sus medios de producción (herramientas, taller), mientras que el asalariado debe alquilar su fuerza de trabajo porque no posee los medios para producir por sí mismo.
```

### 4 — El proceso de intercambio
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["salario", "intercambio", "fuerza_de_trabajo"]

tipo: ordenar
opciones_explicitas: ["El trabajador ofrece su fuerza de trabajo", "El capitalista ofrece un salario", "Se produce la mercancía", "El trabajador recibe su compensación"]

enunciado: "Ordene cronológicamente las etapas de la relación de producción asalariada:"

explicacion: |
  El ciclo comienza con el acuerdo de la fuerza de trabajo por un salario, seguido de la actividad productiva y culminando con la compensación económica.
```

### 5 — Cálculo de la tasa de explotación (Concepto)
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["plusvalia", "salario", "valor"]

variables:
  datos: [
    [100, 40],
    [150, 60],
    [200, 80]
  ]
  idx: uno_de([0, 1, 2])
  valor_total: datos[idx][0]
  parte_salario: datos[idx][1]

tipo: input
tolerancia_abs: 0

enunciado: "Si un trabajador genera un valor total de ${valor_total} en su jornada, pero su salario representa ${parte_salario}, ¿cuál es el valor de la plusvalía (la parte del valor que no se le paga al trabajador)?"

explicacion: |
  La plusvalía se calcula restando el salario del valor total producido: {valor_total} - {parte_salario} = {valor_total - parte_salario}.
```