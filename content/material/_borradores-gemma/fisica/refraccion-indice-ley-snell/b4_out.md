### 1 — Diferencia entre índice de refracción y velocidad
```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "basico"
  tags: ["refraccion", "indice_de_refraccion"]

respuesta: falso
tipo: vf

enunciado: "El índice de refracción de un medio se define como la relación entre la velocidad de la luz en el vacío y la velocidad de la luz en dicho medio, por lo que un índice mayor implica una mayor velocidad de la luz en el medio."

explicacion: |
  Falso. El índice de refracción es n = c/v. Si el índice n es mayor, la velocidad v es menor (la luz viaja más lento en medios más densos ópticamente).
```

### 2 — Comportamiento del ángulo de incidencia
```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "intermedio"
  tags: ["ley_de_snell", "angulo_de_refraccion"]

variables:
  escenario: uno_de([
    ["aire", "agua", 1.0, 1.33],
    ["agua", "diamante", 1.33, 2.42],
    ["vidrio", "aire", 1.5, 1.0]
  ])

respuesta: "hacia_la_normal"
tipo: mc

opciones_explicitas: ["hacia_la_normal", "alejandose_de_la_normal", "se_mantiene_igual", "se_anula"]

enunciado: "Si un rayo de luz viaja desde un medio con índice de refracción {escenario[0]} hacia un medio con un índice de refracción mayor, {escenario[1]}, el rayo se refractará ___."

explicacion: |
  Cuando la luz pasa de un medio menos denso (menor n) a uno más denso (mayor n), el rayo se acerca a la normal para compensar la disminución de velocidad.
```

### 3 — Relación entre ángulo y velocidad
```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "intermedio"
  tags: ["ley_de_snell", "velocidad_luz"]

variables:
  caso: uno_de([
    ["n1=1.0", "n2=1.5"],
    ["n1=1.5", "n2=1.0"],
    ["n1=1.33", "n2=1.5"]
  ])

respuesta: "menor"
tipo: completar

respuestas_validas: ["mayor", "menor"]

enunciado: "Considerando el caso donde el medio 1 tiene un índice {caso[0]} y el medio 2 tiene un índice {caso[1]}, si el rayo pasa del medio 1 al medio 2, la velocidad de la luz en el medio 2 es ___ que en el medio 1."

explicacion: |
  Según la Ley de Snell y la definición de n = c/v, a mayor índice de refracción, menor es la velocidad de la luz en ese medio.
```

### 4 — Componentes del vector de onda en refracción
```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "avanzado"
  tags: ["refraccion", "vector_onda"]

respuesta: "se_mantiene_constante"
tipo: mc

opciones_explicitas: ["se_mantiene_constante", "cambia_su_magnitud", "cambia_su_direccion", "se_anula"]

enunciado: "Al comparar la propagación de una onda en la interfaz entre dos medios con diferentes índices de refracción, ¿qué sucede con la componente del vector de onda paralela a la interfaz?"

explicacion: |
  Para que se cumpla la continuidad de la fase en la interfaz, la componente del vector de onda $k$ paralela a la superficie debe ser la misma para ambos medios.
```

### 5 — Orden de los procesos en la refracción
```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "basico"
  tags: ["refraccion", "proceso"]

respuesta: ["incidencia", "cambio_de_velocidad", "cambio_de_direccion"]
tipo: ordenar

opciones_explicitas: ["incidencia", "cambio_de_velocidad", "cambio_de_direccion"]

enunciado: "Ordena cronológicamente los eventos físicos que ocurren cuando un rayo de luz pasa de un medio a otro con diferente índice de refracción:"

pasos:
  - "El rayo llega a la superficie de separación."
  - "La velocidad de la onda cambia debido a la densidad óptica."
  - "El ángulo de propagación cambia para satisfacer la Ley de Snell."

explicacion: |
  Primero ocurre la incidencia, luego el cambio de velocidad en el nuevo medio y, como consecuencia, el cambio en la dirección (ángulo de refracción).
```