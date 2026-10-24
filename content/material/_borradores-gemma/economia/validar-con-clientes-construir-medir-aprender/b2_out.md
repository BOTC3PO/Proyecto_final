### 1 — El ciclo de aprendizaje
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_ciclo"
  nivel: "basico"
  tags: ["lean_startup", "metodologia"]

respuesta: "construir-medir-aprender"
tipo: completar
respuestas_validas: ["construir-medir-aprender"]

enunciado: "El núcleo de la metodología Lean Startup es un ciclo iterativo compuesto por tres etapas fundamentales: ___, ___ y ___."

explicacion: |
  El ciclo construir-medir-aprender permite a los emprendedores minimizar el desperdicio de recursos al validar hipótesis de negocio de forma rápida.
```

### 2 — El MVP y el aprendizaje
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_mvp"
  nivel: "intermedio"
  tags: ["mvp", "validacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Lanzar una app completa con todas las funciones para ver si alguien la usa.", "falso"],
    ["Crear una landing page con un botón de 'comprar' para medir el interés real.", "verdadero"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: vf

enunciado: "Analiza el siguiente escenario: {escenarios[escenario_idx][0]}. ¿Es esta una forma válida de aplicar el concepto de MVP para validar una idea de forma barata y rápida?"

explicacion: |
  Un Producto Mínimo Viable (MVP) debe permitir aprender con el mínimo esfuerzo. Si el escenario es verdadero, es un MVP; si es falso, es un producto completo que ignora el ahorro de recursos.
```

### 3 — El error de la métrica de vanidad
```
metadata:
  materia: "economia"
  tema: "metricas_validacion"
  nivel: "intermedio"
  tags: ["metricas_vanidad", "metricas_accionables"]

respuesta: "metricas_vanidad"
tipo: mc
opciones_explicitas: ["metricas_accionables", "metricas_vanidad", "metricas_estaticas", "metricas_de_vanidad"]

enunciado: "Si un emprendedor se enfoca únicamente en el número de 'Likes' en Instagram para decidir si su modelo de negocio funciona, está utilizando ___."

explicacion: |
  Las métricas de vanidad son indicadores que se ven bien en papel pero no informan sobre la salud real del negocio o el comportamiento del cliente.
```

### 4 — Pasos para la validación
```
metadata:
  materia: "economia"
  tema: "ciclo_pasos"
  nivel: "basico"
  tags: ["metodologia", "orden"]

respuesta: ["Construir MVP", "Medir respuesta del cliente", "Aprender y pivotar o perseverar"]
tipo: ordenar
opciones_explicitas: ["Construir MVP", "Medir respuesta del cliente", "Aprender y pivotar o perseverar"]

enunciado: "Ordena cronológicamente los pasos del ciclo de validación de una idea de negocio:"

explicacion: |
  Primero se construye algo mínimo, luego se mide cómo interactúa el cliente con ello y finalmente se aprende para decidir si se cambia la estrategia (pivotar) o se continúa (perseverar).
```

### 5 — El concepto de Pivotar
```
metadata:
  materia: "economia"
  tema: "pivotar_o_perseverar"
  nivel: "intermedio"
  tags: ["pivot", "estrategia"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Una pizzería nota que la gente pide la masa pero no el queso, entonces decide vender solo masas artesanales.", "pivotar"],
    ["Una app de paseadores de perros ve que nadie la descarga y decide cerrar la empresa inmediatamente.", "perseverar"]
  ]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["pivotar", "perseverar"]

enunciado: "Analiza el caso: {casos[caso_idx][0]}. La acción tomada por el emprendedor representa un proceso de ___."

explicacion: |
  Pivotar significa realizar un cambio estratégico en el modelo de negocio basado en lo aprendido durante la fase de medición, manteniendo la visión general pero cambiando la ejecución.
```