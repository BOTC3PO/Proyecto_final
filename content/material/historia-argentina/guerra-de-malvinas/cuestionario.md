# Historia Profunda — Guerra de malvinas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El conflicto armado

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["conflictos", "soberania", "1982"]

respuesta: "Argentina"
tipo: "mc"
opciones_explicitas: ["Reino Unido", "Argentina", "Chile", "Francia"]

enunciado: "La Guerra de Malvinas, iniciada en 1982, fue un conflicto armado entre ___ y el Reino Unido por la soberanía de las islas."

explicacion: |
  El conflicto se desató tras la invasión de las fuerzas argentinas a las islas, lo que provocó la respuesta militar británica.
```

### 2 — Cronología del conflicto

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

variables:
  eventos: [["Invasión de las islas", "Fuerzas argentinas ocupan las islas"], ["Desembarco en San Carlos", "Fuerzas británicas desembarcan en la isla"], ["Rendición argentina", "Fuerzas argentinas se rinden en Puerto Argentino"]]

respuesta_orden: ["Invasión de las islas", "Desembarco en San Carlos", "Rendición argentina"]
tipo: "ordenar"
opciones_explicitas: ["Invasión de las islas", "Desembarco en San Carlos", "Rendición argentina"]

enunciado: "Ordene cronológicamente los eventos clave del conflicto:"

explicacion: |
  La secuencia lógica fue la ocupación inicial, el desembarco de la Task Force británica y la rendición final.
```

### 3 — El hundimiento del General Belgrano

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["naval", "tactic"]

respuesta: 200
tipo: "input"
tolerancia_abs: 1

enunciado: "El crucero ARA General Belgrano fue hundido por un submarino británico el 2 de mayo de 1982. Si, hipotéticamente, el submarino se encontraba a una profundidad de 200 metros y el crucero estaba en la superficie, ¿cuál sería la distancia vertical (en metros) entre ambos?"

pasos:
  - "Identificar la profundidad del submarino: 200m"
  - "Identificar la posición del crucero: 0m"
  - "Calcular la diferencia: 200 - 0 = 200"

explicacion: |
  La distancia vertical es la diferencia entre la superficie (0m) y la profundidad del submarino (200m).
```

### 4 — El factor diplomático

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["diplomacia", "soberania"]

respuesta: "soberanía"
tipo: "completar"
respuestas_validas:
  - "soberanía"
  - "territorio"
  - "recursos"

enunciado: "El reclamo argentino por las islas se fundamenta en el principio de ___ territorial."

explicacion: |
  Argentina sostiene su derecho basado en la integridad territorial y la herencia de la corona española.
```

### 5 — El contexto político interno

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["politica", "dictadura"]

respuesta: "Junta Militar"
tipo: "mc"
opciones_explicitas: ["Gobierno Democrático", "Junta Militar", "Frente Popular", "Estado de Sitio"]

enunciado: "En 1982, la guerra se desarrolló bajo el mando de la ___ en Argentina."

explicacion: |
  El país se encontraba bajo un proceso de dictadura militar liderado por la Junta Militar en aquel entonces.
```

### 6 — El reclamo de soberanía

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["soberania", "historia", "argentina"]

tipo: mc
opciones_explicitas: ["1833", "1982", "1776", "1810"]
respuesta: "1833"

enunciado: "El Reino Unido ocupó las Islas Malvinas de forma efectiva en el año ___."

explicacion: |
  La ocupación británica de las islas comenzó en 1833, interrumpiendo la presencia argentina en el archipiélago.
```

### 7 — Naturaleza del reclamo

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["derecho_internacional", "soberania"]

tipo: mc
opciones_explicitas: ["Territorial", "Económica", "Religiosa", "Cultural"]
respuesta: "Territorial"

enunciado: "El reclamo argentino sobre las Islas Malvinas es de carácter ___."

explicacion: |
  Argentina sostiene un reclamo de soberanía territorial basado en la herencia de los estados sucesores de España y la continuidad geográfica.
```

### 8 — Cronología de la disputa

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "conflictos"]

variables:
  escenario: uno_de(["A", "B"])
  datos: [["1833", "Ocupación británica", "Inicio de la disputa"], ["1982", "Conflicto bélico", "Guerra de Malvinas"]]

tipo: ordenar
opciones_explicitas: ["1833", "1982", "Actualidad"]

enunciado: "Ordene cronológicamente los hitos clave de la disputa por las islas:"

explicacion: |
  La cronología marca desde la ocupación británica en 1833, pasando por el conflicto armado en 1982, hasta el reclamo diplomático actual.
respuesta_orden: ["1833", "1982", "Actualidad"]
```

### 9 — El principio de integridad territorial

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["derecho_internacional", "onu"]

tipo: completar
respuestas_validas:
  - "integridad"

enunciado: "Argentina sostiene que el principio de ___ territorial debe prevalecer sobre el principio de autodeterminación en el caso de las Malvinas."

explicacion: |
  Argentina argumenta que la población actual es una población implantada, por lo que el principio de autodeterminación no es aplicable, debiendo prevalecer la integridad territorial.
```

### 10 — El conflicto de 1982

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["guerra", "1982"]

tipo: mc
opciones_explicitas: ["desembarco", "cese", "tratado", "armisticio"]
respuesta: "cese"

enunciado: "El conflicto bélico de 1982 se caracterizó por el cese de las tropas argentinas en las islas."

explicacion: |
  El conflicto terminó con el cese de las hostilidades y la rendición de las fuerzas argentinas en junio de 1982.
```

### 11 — El contexto de la dictadura

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["dictadura", "contexto"]

respuesta: "dictadura militar"
tipo: completar
respuestas_validas:
  - "dictadura militar"

enunciado: "En 1982, Argentina se encontraba bajo el gobierno de una ___ que enfrentaba una profunda crisis interna."

explicacion: |
  La última dictadura militar argentina buscaba recuperar legitimidad mediante una acción bélica ante el desgaste social y económico.
```

### 12 — El objetivo del desembarco

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["legitimidad", "objetivos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[ "reforzar la legitimidad", "recuperar el apoyo popular" ], [ "distraer de la crisis", "ocultar el malestar social" ]]

respuesta: escenario[escenario_idx][1]
tipo: mc
opciones_explicitas: ["reforzar la legitimidad", "recuperar el apoyo popular", "ocultar el malestar social", "evitar la crisis económica"]

enunciado: "Uno de los objetivos estratégicos de la junta militar al ordenar el desembarco en las islas era ___."

explicacion: |
  La dictadura intentó utilizar el conflicto bélico para generar un sentimiento de unidad nacional y así recuperar el apoyo popular que había perdido por la crisis económica y la represión.
```

### 13 — Cronología del conflicto

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "fechas"]

respuesta_orden: ["Crisis interna de la dictadura", "Orden de desembarco", "Inicio de la guerra"]
tipo: ordenar
opciones_explicitas: ["Crisis interna de la dictadura", "Orden de desembarco", "Inicio de la guerra"]

enunciado: "Ordene cronológicamente los hechos que llevaron al conflicto de 1982:"

explicacion: |
  Primero existió una crisis de legitimidad, luego la junta ordenó el desembarco en abril y finalmente se inició el conflicto armado.
```

### 14 — El factor de la crisis

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["causas", "crisis"]

respuesta: "crisis"
tipo: mc
opciones_explicitas: ["crisis", "estabilidad", "bonanza", "prosperidad"]

enunciado: "El contexto socio-político de Argentina en abril de 1982 se caracterizaba por una profunda ___."

explicacion: |
  La crisis política y económica de la dictadura fue un motor fundamental para la decisión de iniciar el conflicto en las islas.
```

### 15 — La decisión de la Junta

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["junta_militar", "decisión"]

respuesta: "abril 1982"
tipo: completar
respuestas_validas:
  - "abril 1982"

enunciado: "La orden de desembarco en las islas Malvinas se produjo en ___."

explicacion: |
  El desembarco ocurrió en abril de 1982, marcando el inicio de la disputa armada con el Reino Unido.
```

### 16 — El fin del proceso de dictadura

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["politica", "dictadura", "democracia"]

respuesta: "aceleró"
tipo: completar
respuestas_validas:
  - "aceleró"
  - "acelerar"
  - "aceleración"

enunciado: "La derrota militar argentina en la guerra de Malvinas en junio de 1982 ___ el proceso de deslegitimación de la Junta Militar y ___ el retorno a la democracia en 1983."

explicacion: |
  La derrota bélica destruyó el prestigio de la Junta Militar, que había iniciado el conflicto para consolidar su poder, acelerando la crisis del régimen y la transición democrática.
```

### 17 — Consecuencias políticas inmediatas

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["consecuencias", "dictadura"]

opciones_explicitas: ["Consolidación de la dictadura", "Crisis del régimen militar", "Guerra civil inmediata", "Alianza con el Reino Unido"]
respuesta: "Crisis del régimen militar"
tipo: mc

enunciado: "¿Cuál fue la principal consecuencia política interna de la derrota en Malvinas para el gobierno de facto?"

explicacion: |
  La pérdida de la guerra expuso la incapacidad de gestión de la dictadura, provocando una crisis de autoridad que hizo insostenible la continuidad del mando militar.
```

### 18 — El camino a la democracia

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["democracia", "elecciones"]

variables:
  datos: [["Dictadura", "Democracia"]]

respuesta: datos[0][1]
tipo: mc
opciones_explicitas: ["Dictadura", "Democracia"]

enunciado: "Tras la derrota en Malvinas, el proceso político argentino se desplazó desde el mando de una {datos[0][0]} hacia la restauración de la {datos[0][1]} en 1983."

pasos:
  - "Analizar el cambio de régimen tras la crisis de junio de 1982."
  - "Identificar el sistema de gobierno que se restauró en 1983."

explicacion: |
  La transición democrática fue impulsada por el vacío de poder y la presión social surgida tras el fracaso bélico.
```

### 19 — Cronología del fin del régimen

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["orden", "cronologia"]

opciones_explicitas: ["Conflicto bélico", "Retorno a la democracia", "Inicio de la dictadura"]
respuesta_orden: ["Inicio de la dictadura", "Conflicto bélico", "Retorno a la democracia"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes hitos de la historia argentina reciente:"

explicacion: |
  La secuencia correcta es: Golpe de Estado (1976), Guerra de Malvinas (1982) y Elecciones de 1983.
```

### 20 — El impacto en la legitimidad

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["legitimidad", "juicio"]

respuesta: 0
tipo: completar
tolerancia_abs: 0

enunciado: "En una escala del 0 al 10, donde 0 es 'nula' y 10 es 'total', ¿cómo se podría calificar la legitimidad política que la Junta Militar intentó recuperar tras la derrota? (Responda con el número 0 para indicar que fue nula)"

explicacion: |
  La derrota eliminó cualquier base de apoyo social para la Junta, dejando su legitimidad en un nivel prácticamente nulo (0).
```

### 21 — El desembarco en las islas

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["cronologia", "conflicto"]

respuesta: "2 de abril de 1982"
tipo: completar
respuestas_validas:
  - "2 de abril de 1982"

enunciado: "La operación de desembarco de las fuerzas argentinas en las islas Malvinas tuvo lugar el ___."

explicacion: |
  El desembarco de las fuerzas argentinas en las islas Malvinas ocurrió el 2 de abril de 1982, marcando el inicio del conflicto bélico.
```

### 22 — El hundimiento del General Belgrano

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["hechos", "maritimo"]

respuesta: "2 de mayo de 1982"
tipo: completar
respuestas_validas:
  - "2 de mayo de 1982"

enunciado: "El hundimiento del crucero ARA General Belgrano por parte de un submarino británico ocurrió el ___."

explicacion: |
  El ataque al crucero General Belgrano fue uno de los eventos más significativos del conflicto, ocurrido el 2 de mayo de 1982.
```

### 23 — Secuencia de eventos clave

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["ordenar", "cronologia"]

variables:
  orden_correcta: ["Desembarco en las islas", "Hundimiento del Belgrano", "Rendición argentina"]

respuesta_orden: orden_correcta
tipo: ordenar
opciones_explicitas: ["Desembarco en las islas", "Hundimiento del Belgrano", "Rendición argentina"]

enunciado: "Ordene cronológicamente los siguientes hitos de la guerra:"

explicacion: |
  La secuencia correcta es: Desembarco (2 de abril), Hundimiento del Belgrano (2 de mayo) y la Rendición (14 de junio).
```

### 24 — La rendición final

```
metadata:
  materia: "historia_profucha"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["final", "rendicion"]

respuesta: "14 de junio de 1982"
tipo: completar
respuestas_validas:
  - "14 de junio de 1982"

enunciado: "La firma de la rendición de las fuerzas argentinas en las islas Malvinas se produjo el ___."

explicacion: |
  El conflicto terminó formalmente el 14 de junio de 1982 con la rendición de las fuerzas argentinas ante las británicas.
```

### 25 — El inicio de las hostilidades

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["inicio", "fecha"]

variables:
  escenario: uno_de([[0, "2 de abril de 1982"], [1, "1 de mayo de 1982"]])
  fecha_inicio: escenario[1]

respuesta: "2 de abril de 1982"
tipo: mc
opciones_explicitas: ["2 de abril de 1982", "1 de mayo de 1982", "2 de mayo de 1982", "14 de junio de 1982"]

enunciado: "¿En qué fecha se produjo el desembarco argentino que dio inicio al conflicto?"

explicacion: |
  El conflicto bélico comenzó con el desembarco argentino el 2 de abril de 1982.
```
