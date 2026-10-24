### 1 — El mito de la originalidad absoluta
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["metodologia", "diseño", "eficiencia"]

respuesta: falso
tipo: vf

enunciado: "En el proceso de diseño de ingeniería, intentar crear una solución desde cero sin consultar precedentes tecnológicos se considera una práctica de alta eficiencia para maximizar la innovación."

explicacion: |
  Falso. Ignorar las soluciones existentes (el "reinventar la rueda") suele llevar a errores de diseño ya resueltos, mayores costos y pérdida de tiempo. La verdadera innovación surge de iterar sobre lo que ya funciona.
```

### 2 — El riesgo de la falta de investigación
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["riesgo", "gestión_de_proyectos"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [
    ["Un ingeniero diseña un sistema de frenado ignorando normativas de seguridad previas.", "retrabajo_costoso"],
    ["Un ingeniero desarrolla un motor sin estudiar la termodinámica aplicada en modelos anteriores.", "fallo_estructural"]
  ]

respuesta: escenario_idx[escenario_idx][1]
tipo: mc

opciones_explicitas: ["retrabajo_costoso", "fallo_estructural", "optimización_de_costos", "aceleración_de_prototipado"]

enunciado: "Si un equipo de ingeniería decide omitir la fase de investigación de soluciones existentes para 'ahorrar tiempo', el resultado más probable en un proyecto complejo es: ___"

explicacion: |
  La falta de precedentes aumenta drásticamente la probabilidad de cometer errores técnicos que ya han sido documentados en la industria, lo que deriva en un {escenario_idx[escenario_idx][1]}.
```

### 3 — El proceso de análisis de precedentes
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodología", "pasos_diseño"]

respuesta: ["Identificar problemas", "Buscar soluciones existentes", "Analizar ventajas y desventajas", "Seleccionar la mejor base para el diseño"]
tipo: ordenar

opciones_explicitas: ["Identificar problemas", "Buscar soluciones existentes", "Analizar ventajas y desventajas", "Seleccionar la mejor base para el diseño"]

enunciado: "Ordene lógicamente los pasos que un ingeniero debe seguir al realizar un estudio de antecedentes antes de iniciar el diseño de un nuevo producto:"

explicacion: |
  Antes de diseñar, primero se debe entender el problema, luego investigar qué se ha hecho para resolverlo, evaluar esas soluciones y finalmente usar ese conocimiento como base.
```

### 4 — La distinción entre copiar y aprender
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["ética", "innovación"]

respuesta: "mejora"
tipo: completar

respuestas_validas: ["mejora", "réplica", "plagio", "error"]

enunciado: "Cuando un ingeniero estudia una solución existente para entender sus limitaciones y aplicarlas en un nuevo contexto, no está realizando una simple réplica, sino buscando una ___ del sistema original."

explicacion: |
  La investigación de precedentes tiene como objetivo la evolución técnica. El objetivo es aprender de los éxitos y, sobre todo, de los fallos de las soluciones actuales para proponer una mejora.
```

### 5 — El impacto de la documentación técnica
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["documentación", "gestión_del_conocimiento"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la revisión de patentes y literatura técnica es una etapa de investigación de soluciones existentes?"

explicacion: |
  Verdadero. Las patentes y la literatura técnica son las fuentes primarias para asegurar que no se está reinventando algo que ya está protegido o documentado.
```