### 1 — El Derecho Civil
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "regulación"]

respuesta: "personas y relaciones privadas"
tipo: completar
respuestas_validas: ["personas y relaciones privadas", "delitos y penas", "contratos laborales"]

enunciado: "El Derecho Civil es la rama que regula las relaciones entre ___."

explicacion: |
  El Derecho Civil regula las relaciones de las personas (físicas o jurídicas) en su ámbito privado, como la familia, la propiedad y los contratos civiles.
```

### 2 — El Derecho Penal
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["penal", "delitos"]

respuesta: verdadero
tipo: vf

enunciado: "¿El objetivo principal del Derecho Penal es imponer sanciones o penas ante la comisión de delitos que afectan a la sociedad?"

explicacion: |
  Correcto. El Derecho Penal define las conductas consideradas delitos y establece las penas correspondientes para mantener el orden social.
```

### 3 — Clasificación de Ramas
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["comercial", "laboral", "administrativo"]

variables:
  escenario: uno_de([
    ["relaciones de trabajo", "laboral"],
    ["actos de comercio", "comercial"],
    ["relación Estado-ciudadano", "administrativo"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["laboral", "comercial", "administrativo", "penal"]

enunciado: "Si una disputa surge a raíz de un contrato de compraventa entre dos empresas, ¿qué rama del derecho regula este conflicto?"

explicacion: |
  El escenario seleccionado fue: {escenario[0]}. Por lo tanto, la rama correspondiente es el Derecho {escenario[1]}.
```

### 4 — El Derecho Administrativo
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["administrativo", "estado"]

respuesta: "Estado"
tipo: completar
respuestas_validas: ["Estado", "Empresas", "Ciudadanos"]

enunciado: "El Derecho Administrativo regula la organización y el funcionamiento del ___ y sus relaciones con los particulares."

explicacion: |
  El Derecho Administrativo es la rama que regula la actividad de la administración pública y el ejercicio de la función administrativa del Estado.
```

### 5 — Orden de jerarquía en una investigación
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

respuesta: ["delito", "investigación", "juicio", "sentencia"]
tipo: ordenar
opciones_explicitas: ["delito", "investigación", "juicio", "sentencia"]

enunciado: "Ordene cronológicamente las etapas típicas de un proceso en el ámbito del Derecho Penal:"

explicacion: |
  El proceso penal comienza con la detección de un delito, seguido de la investigación, el juicio oral y finalmente la emisión de una sentencia.
```