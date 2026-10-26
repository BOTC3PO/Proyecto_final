### 1 — El síntoma vs El problema
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["diagnostico", "analisis"]

variables:
  escenario: uno_de([
    ["La empresa nota una caída del 20% en ventas este mes.", "falta de demanda"],
    ["Los empleados llegan tarde todos los días.", "falta de motivación"],
    ["La máquina A produce piezas con errores de medida.", "desgaste de herramienta"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["falta de demanda", "falta de motivación", "desgaste de herramienta", "error de proceso"]

enunciado: "En el siguiente escenario: '{escenario[idx][0]}', ¿cuál es el problema real (causa raíz) que debe abordarse?"

explicacion: |
  Identificar el síntoma (la caída de ventas, la tardanza, el error de medida) es distinto al problema raíz. Resolver el síntoma sin atacar la causa es un error de diagnóstico.
```

### 2 — Identificación de variables
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["analisis", "datos"]

variables:
  caso: uno_de([
    ["Un restaurante recibe quejas de comida fría.", "Temperatura de servicio"],
    ["Un software se cierra inesperadamente.", "Gestión de memoria"],
    ["Un coche no arranca por la mañana.", "Estado de la batería"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["Temperatura de servicio", "Gestión de memoria", "Estado de la batería"]

enunciado: "Para resolver el problema '{caso[idx][0]}', el primer paso es identificar la variable crítica que está fallando. La variable es: ___"

explicacion: |
  Antes de proponer soluciones, debemos aislar la variable técnica o operativa que está fuera de los parámetros normales.
```

### 3 — ¿Es un problema real?
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  situacion: uno_de([
    ["El color de la pared no agrada al cliente.", falso],
    ["El servidor se cae cada vez que hay 100 usuarios.", verdadero],
    ["Un empleado quiere cambiar de horario.", falso]
  ])
  idx: uno_de([0, 1, 2])

respuesta: situacion[idx][1]
tipo: vf

enunciado: "Analiza la siguiente situación: '{situacion[idx][0]}'. ¿Se trata de un problema crítico que requiere una solución técnica/estructural inmediata? (verdadero/falso)"

explicacion: |
  No todo evento es un "problema" en términos de resolución de problemas. Debemos distinguir entre preferencias, preferencias estéticas y fallos funcionales o críticos.
```

### 4 — Secuencia de diagnóstico
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta: ["Observar el síntoma", "Recolectar datos", "Identificar la causa raíz", "Definir el problema"]
tipo: ordenar

opciones_explicitas: ["Observar el síntoma", "Recolectar datos", "Identificar la causa raíz", "Definir el problema"]

enunciado: "Para detectar un problema con precisión, se debe seguir un orden lógico. Ordena los pasos de diagnóstico:"

explicacion: |
  No se puede definir el problema sin haber recolectado datos suficientes que permitan diferenciar el síntoma de la causa raíz.
```

### 5 — El error de la solución prematura
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "avanzado"
  tags: ["errores", "analisis"]

variables:
  error_tipo: uno_de([
    ["Intentar arreglar el síntoma sin investigar la causa.", "solucion_parche"],
    ["Saltar directamente a la solución sin definir el problema.", "salto_lógico"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: error_tipo[idx][1]
tipo: mc
opciones_explicitas: ["solucion_parche", "salto_lógico"]

enunciado: "Si un equipo detecta que 'el sistema está lento' y decide 'comprar más memoria RAM' sin investigar si el problema es un proceso mal programado, están cometiendo un: '{error_tipo[idx][1]}'"

explicacion: |
  La solución prematura es uno de los errores más costosos en la resolución de problemas, ya que se gasta recurso en atacar una consecuencia y no la causa.
```