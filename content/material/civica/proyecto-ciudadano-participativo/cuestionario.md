# Cívica — Proyecto ciudadano participativo (cuestionario, 22 preguntas VBLang)

> Tema: `civica/proyecto-ciudadano-participativo`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "identificar, analizar y resolver un problema de la comunidad"
tipo: mc
opciones_explicitas: ["esperar a que las autoridades actúen solas", "identificar, analizar y resolver un problema de la comunidad", "votar únicamente en elecciones"]

enunciado: "Un proyecto ciudadano participativo busca principalmente..."

explicacion: |
  Es una iniciativa organizada que propone soluciones concretas y trabaja
  colectivamente, no sólo espera o se queja.
```

### 2 — pregunta 2

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["ciudadania activa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los proyectos ciudadanos participativos transforman a la ciudadanía de un estado pasivo a uno activo."

explicacion: |
  La democracia no funciona sólo con el voto periódico: requiere
  vigilancia, propuesta y colaboración constante de la sociedad civil.
```

### 3 — pregunta 3

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["etapas"]

variables:
  n: uno_de([1, 1])

respuesta: "identificación y diagnóstico del problema"
tipo: mc
opciones_explicitas: ["identificación y diagnóstico del problema", "ejecución y evaluación", "formulación del objetivo"]

enunciado: "El primer paso de un proyecto ciudadano participativo exitoso es la..."

explicacion: |
  No basta con notar que algo anda mal: hay que investigar causas,
  afectados y situación actual antes de actuar.
```

### 4 — pregunta 4

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["etapas"]

variables:
  n: uno_de([1, 1])

respuesta: "claro, alcanzable y medible"
tipo: mc
opciones_explicitas: ["vago y ambicioso", "claro, alcanzable y medible", "secreto hasta el final del proyecto"]

enunciado: "En la etapa de formulación del objetivo, éste debe ser..."

explicacion: |
  Un objetivo como "recuperar el área verde del parque mediante limpieza
  y plantación en tres meses" es preciso, a diferencia de algo vago como
  "mejorar el parque".
```

### 5 — pregunta 5

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "avanzado"
  tags: ["etapas"]

variables:
  etapa: uno_de(["identificación y diagnóstico del problema", "formulación del objetivo", "estrategia de acción", "ejecución y evaluación"])

respuesta: verdadero
tipo: vf

enunciado: "\"{etapa}\" es una de las etapas clave de un proyecto ciudadano participativo."

explicacion: |
  Las cuatro etapas (diagnóstico, objetivo, estrategia, ejecución/
  evaluación) forman el proceso estructurado que va de un problema a una
  solución concreta.
```

### 6 — pregunta 6

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["estrategia"]

variables:
  n: uno_de([1, 1])

respuesta: "actividades, recursos necesarios y plazos"
tipo: mc
opciones_explicitas: ["actividades, recursos necesarios y plazos", "sólo un presupuesto sin actividades", "una lista de quejas"]

enunciado: "La estrategia de acción de un proyecto ciudadano incluye principalmente..."

explicacion: |
  Reuniones, campañas o trabajos manuales (actividades), voluntarios,
  herramientas y permisos (recursos), y tiempos definidos (plazos).
```

### 7 — pregunta 7

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["etapas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La etapa de evaluación permite aprender de los errores y celebrar los aciertos, cerrando el ciclo de participación democrática."

explicacion: |
  Evaluar lo hecho, no sólo ejecutar el plan, es lo que prepara el
  terreno para futuros proyectos.
```

### 8 — pregunta 8

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["ejemplos argentinos"]

variables:
  ciudad: uno_de(["Buenos Aires", "Rosario", "Córdoba"])

respuesta: verdadero
tipo: vf

enunciado: "\"{ciudad}\" es una ciudad argentina donde existen instancias de Presupuesto Participativo."

explicacion: |
  En las tres ciudades hay experiencias donde los vecinos deciden en qué
  se invierten parte de los fondos públicos.
```

### 9 — pregunta 9

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["presupuesto participativo"]

variables:
  n: uno_de([1, 1])

respuesta: "priorizan necesidades como veredas, iluminación o centros culturales"
tipo: mc
opciones_explicitas: ["priorizan necesidades como veredas, iluminación o centros culturales", "eligen al intendente de la ciudad", "administran impuestos nacionales"]

enunciado: "En un Presupuesto Participativo, los vecinos..."

explicacion: |
  El Presupuesto Participativo permite decidir en qué se invierte parte
  del dinero público, priorizando necesidades concretas del barrio.
```

### 10 — pregunta 10

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["organizaciones"]

variables:
  n: uno_de([1, 1])

respuesta: "Asociaciones de Vecinos"
tipo: completar

enunciado: "Las organizaciones legales que agrupan a residentes de una zona para gestionar problemas locales como seguridad o espacios públicos se llaman ___."

respuestas_validas:
  - "Asociaciones de Vecinos"
  - "asociaciones de vecinos"

explicacion: |
  Estas asociaciones muchas veces trabajan junto a municipalidades o el
  gobierno nacional para lograr mejoras que individualmente serían
  imposibles.
```

### 11 — pregunta 11

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["ejemplos"]

variables:
  ejemplo: uno_de(["huertas comunitarias en escuelas", "campañas de recolección de residuos electrónicos"])

respuesta: verdadero
tipo: vf

enunciado: "\"{ejemplo}\" es un ejemplo de iniciativa ciudadana impulsada por jóvenes u ONGs mencionado en la teoría."

explicacion: |
  Estas acciones resuelven problemas inmediatos y educan en valores de
  sostenibilidad y solidaridad.
```

### 12 — pregunta 12

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "avanzado"
  tags: ["derechos y obligaciones"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para exigir servicios públicos de calidad, es necesario comprender cómo funcionan las instituciones y participar en su mejora."

explicacion: |
  Los derechos y las obligaciones están interconectados: exigir calidad
  requiere entender y participar en el funcionamiento institucional.
```

### 13 — pregunta 13

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["participacion"]

variables:
  n: uno_de([1, 1])

respuesta: "no es exclusiva de los políticos, es un derecho y un deber de todos"
tipo: mc
opciones_explicitas: ["es exclusiva de funcionarios electos", "no es exclusiva de los políticos, es un derecho y un deber de todos", "sólo corresponde a mayores de 40 años"]

enunciado: "Según la teoría, la participación ciudadana..."

explicacion: |
  Participar activamente ayuda a combatir la apatía política y muestra
  que involucrarse es un derecho y un deber de toda la ciudadanía, no
  sólo de los políticos.
```

### 14 — pregunta 14

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["diagnostico"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Basta con decir \"el barrio está sucio\" para tener un diagnóstico completo del problema."

explicacion: |
  Un diagnóstico preciso requiere investigar las causas reales
  (recolección, educación ambiental, infraestructura), no quedarse en
  una afirmación general.
```

### 15 — pregunta 15

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["habilidades"]

variables:
  n: uno_de([1, 1])

respuesta: "dialogar, negociar y asumir responsabilidades comunes"
tipo: mc
opciones_explicitas: ["dialogar, negociar y asumir responsabilidades comunes", "trabajar siempre en soledad", "evitar el contacto con vecinos"]

enunciado: "Al participar en un proyecto ciudadano, estudiantes y ciudadanos aprenden principalmente a..."

explicacion: |
  Pasar de identificar un problema a ejecutar un proyecto exige aprender
  a dialogar, negociar y compartir responsabilidades con otros.
```

### 16 — pregunta 16

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["tejido social"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los proyectos ciudadanos participativos fortalecen el tejido social y la capacidad de incidencia política."

explicacion: |
  Al organizarse colectivamente, la comunidad gana cohesión y más
  capacidad real de influir en decisiones que la afectan.
```

### 17 — pregunta 17

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["comisiones de barrio"]

variables:
  n: uno_de([1, 1])

respuesta: "Comisiones de Barrio"
tipo: completar

enunciado: "Un ejemplo clásico de instancia formal de participación vecinal en Argentina son las ___."

respuestas_validas:
  - "Comisiones de Barrio"
  - "comisiones de barrio"

explicacion: |
  Junto con el Presupuesto Participativo, las Comisiones de Barrio son
  ejemplos de espacios formales de participación ciudadana.
```

### 18 — pregunta 18

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "avanzado"
  tags: ["valores"]

variables:
  n: uno_de([1, 1])

respuesta: "sostenibilidad y solidaridad"
tipo: mc
opciones_explicitas: ["sostenibilidad y solidaridad", "competencia individual", "indiferencia frente al entorno"]

enunciado: "Las iniciativas como las huertas comunitarias en escuelas educan, además de resolver un problema inmediato, en valores de..."

explicacion: |
  Estas acciones muestran que la participación ciudadana también cumple
  una función educativa, formando valores colectivos.
```

### 19 — pregunta 19

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["asociaciones de vecinos"]

variables:
  problema: uno_de(["la seguridad", "el mantenimiento de espacios públicos", "la defensa del patrimonio histórico"])

respuesta: verdadero
tipo: vf

enunciado: "\"{problema}\" es un tipo de problema local que las Asociaciones de Vecinos suelen gestionar."

explicacion: |
  Las Asociaciones de Vecinos agrupan residentes para atender justamente
  este tipo de problemas de su zona.
```

### 20 — pregunta 20

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["apatia politica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Participar en proyectos ciudadanos ayuda a combatir la apatía política."

explicacion: |
  Al mostrar que la participación produce cambios reales, se contrarresta
  la sensación de que "no vale la pena" involucrarse.
```

### 21 — pregunta 21

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "avanzado"
  tags: ["democracia"]

variables:
  n: uno_de([1, 1])

respuesta: "vigilancia, propuesta y colaboración constante"
tipo: mc
opciones_explicitas: ["únicamente el voto cada cierto tiempo", "vigilancia, propuesta y colaboración constante", "delegar todo en los representantes electos"]

enunciado: "Según la teoría, la democracia requiere, además del voto periódico..."

explicacion: |
  La democracia no se agota en votar: necesita vigilancia ciudadana,
  propuestas concretas y colaboración sostenida en el tiempo.
```

### 22 — pregunta 22

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["formulacion de objetivos"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"Mejorar el parque\" es un ejemplo de objetivo bien formulado (claro, alcanzable y medible) para un proyecto ciudadano."

explicacion: |
  Es demasiado vago; un objetivo bien formulado sería algo como
  "recuperar el área verde del parque mediante limpieza y plantación de
  especies nativas en tres meses".
```

