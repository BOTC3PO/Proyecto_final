# Historia — Procesos: independencias (cuestionario, 20 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una independencia

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["independencias", "vocabulario"]

enunciado: "¿Qué es un proceso de independencia?"
tipo: mc
opciones_explicitas:
  - "El proceso por el cual un territorio deja de estar bajo la soberanía de otro Estado y se constituye como Estado propio"
  - "Un cambio de gobernante dentro del mismo Estado"
  - "Un tratado comercial entre dos países"
respuesta: "El proceso por el cual un territorio deja de estar bajo la soberanía de otro Estado y se constituye como Estado propio"

explicacion: |
  No es un evento instantáneo: es un proceso que puede durar años.
```

### 2 — Relación con la revolución previa

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "En el caso rioplatense, ¿la independencia fue el primer paso del proceso o la consecuencia de una revolución previa?"
tipo: mc
opciones_explicitas:
  - "Fue la consecuencia de la Revolución de Mayo, un proceso revolucionario previo"
  - "Fue el primer paso, antes de cualquier revolución"
  - "No tuvo ninguna relación con la Revolución de Mayo"
respuesta: "Fue la consecuencia de la Revolución de Mayo, un proceso revolucionario previo"

explicacion: |
  Es la razón por la que `independencias/` depende de
  `../revoluciones/` en `../dependencias.md`.
```

### 3 — Ambigüedad de 1810

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo"]

enunciado: "¿En nombre de quién decía gobernar la Junta de 1810, aunque en la práctica ejercía el poder de forma autónoma?"
tipo: mc
opciones_explicitas:
  - "Del rey depuesto, Fernando VII"
  - "Del rey de Portugal"
  - "De ningún rey, declarándose independiente desde el primer día"
respuesta: "Del rey depuesto, Fernando VII"

explicacion: |
  Era una ambigüedad deliberada para no provocar una reacción militar
  inmediata mientras el nuevo gobierno se afianzaba.
```

### 4 — Por qué la ambigüedad inicial

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo"]

enunciado: "¿Por qué la Junta de 1810 no declaró la independencia total de inmediato?"
tipo: mc
opciones_explicitas:
  - "Para ganar tiempo y consolidarse sin provocar una reacción militar inmediata de España"
  - "Porque no existía ninguna intención de romper con España"
  - "Porque España ya había reconocido la independencia en 1810"
respuesta: "Para ganar tiempo y consolidarse sin provocar una reacción militar inmediata de España"

explicacion: |
  Era una estrategia deliberada de radicalización progresiva, no
  indecisión.
```

### 5 — Año de la declaración de independencia argentina

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["argentina"]

enunciado: "¿En qué año se declaró formalmente la independencia de las Provincias Unidas en Sudamérica?"
tipo: input
respuesta: 1816

explicacion: |
  El Congreso de Tucumán declaró la independencia en 1816, 6 años
  después de la Revolución de Mayo.
```

### 6 — Años entre revolución y declaración

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["argentina", "calculo"]

variables:
  anio_revolucion: 1810
  anio_independencia: 1816

respuesta: anio_independencia - anio_revolucion
tipo: input

enunciado: "Entre la Revolución de Mayo ({anio_revolucion}) y la declaración de independencia en el Congreso de Tucumán ({anio_independencia}), ¿cuántos años pasaron?"

pasos:
  - "{anio_independencia} - {anio_revolucion}"

explicacion: |
  El proceso completo llevó más tiempo que el evento fundacional que
  se suele recordar como "punto de partida".
```

### 7 — Congreso donde se declaró la independencia

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["argentina"]

enunciado: "¿En qué Congreso se declaró la independencia argentina en 1816?"
tipo: mc
opciones_explicitas:
  - "Congreso de Tucumán"
  - "Congreso de Viena"
  - "Congreso de Panamá"
respuesta: "Congreso de Tucumán"

explicacion: |
  Fue el Congreso que reunió representantes de las Provincias Unidas
  para declarar formalmente la independencia.
```

### 8 — Por qué la declaración no fue suficiente

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué declarar la independencia en 1816 no la hizo efectiva de forma automática?"
tipo: mc
opciones_explicitas:
  - "Porque España no reconoció la declaración y siguió enviando fuerzas militares para reconquistar el territorio"
  - "Porque el Congreso de Tucumán no tenía autoridad legal"
  - "Porque la independencia ya era efectiva desde 1810"
respuesta: "Porque España no reconoció la declaración y siguió enviando fuerzas militares para reconquistar el territorio"

explicacion: |
  La declaración política y la victoria militar que la sostiene son
  dos cosas distintas — ver `../guerras/`.
```

### 9 — Declaración política vs. victoria militar

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Son la declaración política de independencia y la victoria militar que la consolida exactamente lo mismo?"
tipo: vf
respuesta: falso

explicacion: |
  Son dos cosas distintas, aunque en la práctica una depende de la
  otra: sin ganar la guerra, la declaración queda sin efecto real.
```

### 10 — Radicalización progresiva

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo"]

enunciado: "¿Qué provocó que la postura independentista se consolidara como la única salida viable con el paso de los años?"
tipo: mc
opciones_explicitas:
  - "Los intentos de España de reconquistar el territorio"
  - "Un tratado de paz firmado en 1810"
  - "La ausencia total de conflicto con España"
respuesta: "Los intentos de España de reconquistar el territorio"

explicacion: |
  A medida que España insistía en recuperar el control, la ambigüedad
  inicial se volvió insostenible.
```

### 11 — San Martín y el cruce de los Andes

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["proceso_continental"]

enunciado: "¿Qué campaña de San Martín llevó la independencia más allá del territorio rioplatense?"
tipo: mc
opciones_explicitas:
  - "El cruce de los Andes y la liberación de Chile"
  - "La expedición al Amazonas"
  - "La conquista de México"
respuesta: "El cruce de los Andes y la liberación de Chile"

explicacion: |
  Muestra que el proceso se pensó, en parte, como un proyecto
  continental, no aislado a un solo territorio.
```

### 12 — Bolívar y el norte de Sudamérica

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["proceso_continental"]

enunciado: "¿Qué líder independentista lideró procesos en el norte de Sudamérica, en paralelo al de San Martín en el sur?"
tipo: mc
opciones_explicitas:
  - "Simón Bolívar"
  - "Napoleón Bonaparte"
  - "Bernardo O'Higgins"
respuesta: "Simón Bolívar"

explicacion: |
  Junto con San Martín, es una de las dos grandes figuras de la
  independencia hispanoamericana como proceso continental.
```

### 13 — Por qué se pensó como proyecto continental

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["proceso_continental"]

enunciado: "¿Por qué la independencia hispanoamericana se pensó, en parte, como un proyecto continental y no aislado por territorio?"
tipo: mc
opciones_explicitas:
  - "Porque ningún territorio quedaba realmente seguro mientras España mantuviera fuerzas militares en la región"
  - "Porque todos los territorios hispanoamericanos tenían el mismo gobierno"
  - "Porque España ya había reconocido todas las independencias en 1810"
respuesta: "Porque ningún territorio quedaba realmente seguro mientras España mantuviera fuerzas militares en la región"

explicacion: |
  Mientras hubiera fuerzas españolas activas en la región, cualquier
  territorio independizado corría riesgo de reconquista.
```

### 14 — Verdadero o falso: la independencia es un evento instantáneo

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["independencias"]

enunciado: "Un proceso de independencia siempre es un evento instantáneo, que ocurre en un solo día."
tipo: vf
respuesta: falso

explicacion: |
  Es un proceso que puede durar años y atravesar varias etapas antes
  de consolidarse — el caso rioplatense llevó al menos 6 años sólo
  hasta la declaración formal, y más tiempo hasta consolidarse
  militarmente.
```

### 15 — Etapa 1: ambigüedad

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["revolucion_de_mayo"]

enunciado: "Ordená estas 3 etapas del proceso rioplatense: Declaración formal de independencia, Ambigüedad inicial (gobernar \"a nombre\" del rey), Radicalización progresiva."
tipo: ordenar
opciones_explicitas:
  - "Ambigüedad inicial (gobernar \"a nombre\" del rey)"
  - "Radicalización progresiva"
  - "Declaración formal de independencia"
respuesta_orden: ["Ambigüedad inicial (gobernar \"a nombre\" del rey)", "Radicalización progresiva", "Declaración formal de independencia"]

explicacion: |
  Es la secuencia real: 1810 (ambigüedad) → años intermedios
  (radicalización) → 1816 (declaración formal).
```

### 16 — Reconocimiento internacional

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["independencias"]

enunciado: "¿Qué necesita un territorio, además de declararse independiente, para consolidarse como Estado propio?"
tipo: mc
opciones_explicitas:
  - "Gobierno y reconocimiento internacional autónomos"
  - "Sólo una bandera y un himno nuevos"
  - "La aprobación exclusiva de la antigua metrópoli"
respuesta: "Gobierno y reconocimiento internacional autónomos"

explicacion: |
  Un Estado necesita ejercer soberanía real y ser reconocido, no sólo
  declarar la intención.
```

### 17 — Independencia como proceso, no evento

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["independencias"]

enunciado: "¿Por qué conviene analizar la independencia rioplatense como un \"proceso\" y no como un único \"evento\" (la Revolución de Mayo)?"
tipo: mc
opciones_explicitas:
  - "Porque incluyó varias etapas a lo largo de años: ambigüedad, radicalización, declaración formal y consolidación militar"
  - "Porque la Revolución de Mayo no tuvo ninguna relación con la independencia"
  - "Porque el proceso terminó exactamente en 1810"
respuesta: "Porque incluyó varias etapas a lo largo de años: ambigüedad, radicalización, declaración formal y consolidación militar"

explicacion: |
  Reducirlo a un solo evento (la Revolución de Mayo) pierde toda la
  complejidad del proceso completo.
```

### 18 — Guerra necesaria para consolidar

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué el proceso de independencia rioplatense se conecta directamente con `../guerras/`?"
tipo: mc
opciones_explicitas:
  - "Porque España resistió militarmente la independencia declarada, generando las Guerras de independencia"
  - "Porque `../guerras/` trata sobre un conflicto sin ninguna relación con la independencia"
  - "Porque la independencia se logró sin ningún conflicto armado"
respuesta: "Porque España resistió militarmente la independencia declarada, generando las Guerras de independencia"

explicacion: |
  Es la razón por la que `H2c` (guerras) depende de `H2b`
  (independencias) en `../dependencias.md`.
```

### 19 — Qué distingue independencia de revolución

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Cuál es la diferencia central entre \"revolución\" e \"independencia\" como procesos históricos?"
tipo: mc
opciones_explicitas:
  - "La revolución cambia el poder o la estructura interna de una sociedad; la independencia rompe la relación de soberanía con otro Estado"
  - "Son exactamente el mismo proceso con dos nombres distintos"
  - "La independencia siempre ocurre antes que cualquier revolución"
respuesta: "La revolución cambia el poder o la estructura interna de una sociedad; la independencia rompe la relación de soberanía con otro Estado"

explicacion: |
  Pueden estar conectadas (como en el caso rioplatense) pero son
  conceptos distintos.
```

### 20 — Por qué remite a Tronco 8.c

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Por qué el desarrollo real y detallado de la independencia argentina se ubica en la cadena `AH4`-`AH5` de Tronco 8.c y no acá?"
tipo: mc
opciones_explicitas:
  - "Para no duplicar el mismo contenido con dos IDs distintos — acá se explica el proceso general, allá el caso puntual con más contexto"
  - "Porque Tronco 8.c no tiene relación alguna con la independencia"
  - "Porque este tema y `AH4`/`AH5` tratan procesos completamente distintos"
respuesta: "Para no duplicar el mismo contenido con dos IDs distintos — acá se explica el proceso general, allá el caso puntual con más contexto"

explicacion: |
  Mismo criterio de "no repetir el mismo tema dos veces" que ya usa el
  MAPA en varios puntos (ver nota v2.4 sobre `AH12`/`AH13`).
```
