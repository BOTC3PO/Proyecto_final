### 1 — El síntoma vs. El problema
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["diagnostico", "analisis"]

enunciado: "Una empresa nota que las ventas han caído un 20% este mes. El gerente decide lanzar una campaña de publicidad masiva para revertir la situación. ¿Cuál es el error en el proceso de detección del problema?"

opciones_explicitas: ["Tratar un síntoma como si fuera el problema raíz", "No tener presupuesto para publicidad", "No usar datos estadísticos para medir la caída", "La caída del 20% no es un problema real"]

respuesta: "Tratar un síntoma como si fuera el problema raíz"
tipo: mc

explicacion: |
  La caída de ventas es un 'síntoma' (un efecto visible). Si el problema real fuera, por ejemplo, un defecto de fábrica en el producto, la publicidad solo aumentaría el número de clientes insatisfechos. Primero hay que identificar la causa raíz.
```

### 2 — Identificación de variables
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["analisis_causal", "datos"]

variables:
  escenario: uno_de([
    ["La máquina A hace ruido y produce piezas defectuosas", "Ruido mecánico"],
    ["El software se cierra solo al abrir archivos pesados", "Falta de memoria RAM"],
    ["El equipo de ventas llega tarde a las reuniones", "Falta de motivación"]
  ])

enunciado: "En el escenario: '{escenario[0]}', el problema detectado inicialmente es '{escenario[1]}'. ¿Es este el problema real o una consecuencia?"

opciones_explicitas: ["Es el problema real", "Es una consecuencia"]

respuesta: "Es una consecuencia"
tipo: mc

explicacion: |
  El ruido y las piezas defectuosas son manifestaciones del problema subyacente (el fallo mecánico), pero no explican la causa (ej. falta de lubricación o desgaste).
```

### 3 — El proceso de diagnóstico
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

enunciado: "Para resolver un problema complejo de manera efectiva, se deben seguir las etapas de diagnóstico. Ordena los siguientes pasos desde el análisis inicial hasta la definición del problema:"

opciones_explicitas: ["Observar los síntomas", "Recopilar datos sobre el entorno", "Identificar la causa raíz", "Definir el problema con precisión"]

respuesta: ["Observar los síntomas", "Recopilar datos sobre el entorno", "Identificar la causa raíz", "Definir el problema con precisión"]
tipo: ordenar

explicacion: |
  No se puede definir el problema sin antes haber recolectado evidencia que permita distinguir entre lo que parece estar pasando (síntoma) y lo que realmente está pasando (causa).
```

### 4 — Veracidad del diagnóstico
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["logica", "verificacion"]

enunciado: "Si un técnico de soporte asume que el problema de un cliente es 'falta de internet' solo porque el cliente dice que 'no puede entrar a su correo', sin realizar pruebas de conexión o ping, ¿ha realizado un proceso de detección de problema válido? (Responde con verdadero o falso)"

respuesta: falso
tipo: vf

explicacion: |
  Asumir una causa sin verificar los datos es un salto lógico. El problema podría ser una contraseña incorrecta, un servidor caído o un problema de DNS, no necesariamente la falta de conexión.
```

### 5 — Definición del problema
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "avanzado"
  tags: ["enunciado", "precision"]

variables:
  caso_estudio: uno_de([
    ["El tiempo de entrega de pedidos ha subido de 2 a 10 días", "Retraso en logística"],
    ["La tasa de error en el código aumentó un 15% tras la última actualización", "Regresión de software"]
  ])

enunciado: "Analizando el caso: '{caso_estudio[0]}', el enunciado del problema correctamente definido sería: 'El problema es el {caso_estudio[1]}'."

respuesta: "El problema es el {caso_estudio[1]}"
tipo: completar
respuestas_validas: ["El problema es el Retraso en logística", "El problema es el Regresión de software"]

explicacion: |
  Una buena detección de problema transforma una observación vaga en una declaración precisa que delimita el alcance de la solución necesaria.
```