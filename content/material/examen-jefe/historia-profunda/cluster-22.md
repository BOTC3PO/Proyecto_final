# Examen jefe — Explorador de la Carrera Espacial

> Logro #702. Completaste el parcial dominando la carrera espacial de la Guerra Fría: el Sputnik, el vuelo de Gagarin, la llegada del Apolo 11 a la Luna y la misión conjunta Apolo-Soyuz. Pool agregado de los `cuestionario.md` ya validados de sus 1 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **25 preguntas totales** en 1/1 secciones.

---

## Sección: carrera-espacial-sputnik-y-apolo (25 preguntas)

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "basico"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Cómo se llamó el primer satélite artificial de la historia?"
opciones_explicitas:
  - "Sputnik 1"
  - "Explorer 1"
  - "Vostok 1"
  - "Apolo 11"
respuesta: "Sputnik 1"

explicacion: |
  Lo lanzó la Unión Soviética el 4 de octubre de 1957.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "basico"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: completar
enunciado: "El Sputnik 1 se lanzó en el año ___."
respuestas_validas:
  - "1957"

explicacion: |
  El lanzamiento fue el 4 de octubre de 1957 y abrió la era espacial.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "basico"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Qué país lanzó el Sputnik 1?"
opciones_explicitas:
  - "La Unión Soviética"
  - "Estados Unidos"
  - "China"
  - "Francia"
respuesta: "La Unión Soviética"

explicacion: |
  Fue un logro soviético que sorprendió a Estados Unidos.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

respuesta: verdadero
tipo: vf

enunciado: "Los cohetes que ponían satélites en órbita eran, con modificaciones, similares a los que podían llevar un arma a otro continente, por eso la exploración espacial tuvo también una cara militar."

explicacion: |
  Por eso cada logro espacial tenía lectura política y militar en la Guerra Fría.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Qué se discutió en Estados Unidos después del Sputnik?"
opciones_explicitas:
  - "Si el país se había quedado atrás en ciencia y tecnología"
  - "Si convenía cerrar la NASA"
  - "Si había que abandonar las ciencias"
  - "Si la Luna era de la URSS"
respuesta: "Si el país se había quedado atrás en ciencia y tecnología"

explicacion: |
  La «crisis del Sputnik» impulsó cambios en educación científica y en investigación.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "basico"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Quién fue Laika?"
opciones_explicitas:
  - "La perra que fue el primer animal en órbita"
  - "La primera mujer astronauta"
  - "Un cohete estadounidense"
  - "La primera sonda a la Luna"
respuesta: "La perra que fue el primer animal en órbita"

explicacion: |
  Viajó en el Sputnik 2, lanzado en noviembre de 1957.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

variables:
  periodo: 96
  minutos_dia: 24 * 60

respuesta: floor(minutos_dia / periodo)
tipo: input
tolerancia_abs: 0

enunciado: "Si el Sputnik 1 daba una vuelta a la Tierra cada {periodo} minutos, ¿cuántas vueltas completas daba en 24 horas?"

pasos:
  - "Un día tiene {minutos_dia} minutos"
  - "Dividir {minutos_dia} por {periodo}"

explicacion: |
  1440 dividido 96 da 15 vueltas.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Cómo se llamó el primer satélite puesto en órbita por Estados Unidos?"
opciones_explicitas:
  - "Explorer 1"
  - "Sputnik 2"
  - "Vostok 1"
  - "Gemini 4"
respuesta: "Explorer 1"

explicacion: |
  Se lanzó a comienzos de 1958.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Qué tipo de agencia se creó en Estados Unidos en 1958 para el programa espacial?"
opciones_explicitas:
  - "Una agencia civil, la NASA"
  - "Una agencia militar secreta"
  - "Una empresa privada"
  - "Una universidad"
respuesta: "Una agencia civil, la NASA"

explicacion: |
  La NASA se creó en 1958 como agencia civil.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "basico"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Quién fue la primera persona en viajar al espacio?"
opciones_explicitas:
  - "Yuri Gagarin"
  - "Neil Armstrong"
  - "Alan Shepard"
  - "Buzz Aldrin"
respuesta: "Yuri Gagarin"

explicacion: |
  Lo hizo el 12 de abril de 1961 a bordo de la Vostok 1.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: completar
enunciado: "Yuri Gagarin viajó al espacio en el año ___."
respuestas_validas:
  - "1961"

explicacion: |
  Fue el 12 de abril de 1961.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

variables:
  min: 108

respuesta: min / 60
tipo: input
tolerancia_abs: 0.05

enunciado: "El vuelo de Gagarin duró unos {min} minutos. ¿Cuántas horas son? (poné el número con un decimal)"

pasos:
  - "Dividir los minutos por 60"

explicacion: |
  108 dividido 60 da 1,8 horas.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Cómo se llamaba la nave de Gagarin?"
opciones_explicitas:
  - "Vostok 1"
  - "Apolo 11"
  - "Soyuz 19"
  - "Sputnik 1"
respuesta: "Vostok 1"

explicacion: |
  La Vostok 1 dio una órbita a la Tierra.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Qué meta propuso el presidente Kennedy en 1961?"
opciones_explicitas:
  - "Llevar a una persona a la Luna y traerla de regreso antes de que terminara la década"
  - "Prohibir los cohetes"
  - "Compartir el programa con la URSS en 1961"
  - "Llegar a Marte en 1970"
respuesta: "Llevar a una persona a la Luna y traerla de regreso antes de que terminara la década"

explicacion: |
  Esa meta hizo de la Luna el centro de la competencia.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Quién fue la primera mujer en el espacio?"
opciones_explicitas:
  - "Valentina Tereshkova"
  - "Sally Ride"
  - "Laika"
  - "Valeri Kubasov"
respuesta: "Valentina Tereshkova"

explicacion: |
  Fue en 1963, con la Unión Soviética.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "avanzado"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Quién realizó la primera caminata espacial, en 1965?"
opciones_explicitas:
  - "Alexei Leonov"
  - "Neil Armstrong"
  - "Yuri Gagarin"
  - "Vance Brand"
respuesta: "Alexei Leonov"

explicacion: |
  Fue un cosmonauta soviético.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "avanzado"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Qué ocurrió en 1967 con la tripulación del Apolo 1?"
opciones_explicitas:
  - "Murieron tres astronautas en un incendio en tierra durante una prueba"
  - "Llegaron a la Luna"
  - "Se acoplaron con una nave soviética"
  - "Fueron los primeros en órbita"
respuesta: "Murieron tres astronautas en un incendio en tierra durante una prueba"

explicacion: |
  No llegó a despegar: ocurrió en una prueba en tierra.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "avanzado"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Qué estableció el Tratado del Espacio Exterior de 1967?"
opciones_explicitas:
  - "Que el espacio no puede ser apropiado por ningún Estado y no se pueden colocar armas nucleares en órbita"
  - "Que la Luna pertenece a Estados Unidos"
  - "Que solo la URSS puede lanzar satélites"
  - "Que el espacio es de las empresas"
respuesta: "Que el espacio no puede ser apropiado por ningún Estado y no se pueden colocar armas nucleares en órbita"

explicacion: |
  Es el marco básico del derecho espacial.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "basico"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Qué misión llevó a las primeras personas a la superficie de la Luna?"
opciones_explicitas:
  - "Apolo 11"
  - "Apolo 1"
  - "Vostok 1"
  - "Soyuz 19"
respuesta: "Apolo 11"

explicacion: |
  Fue el 20 de julio de 1969.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Quiénes pisaron la Luna en la misión Apolo 11?"
opciones_explicitas:
  - "Neil Armstrong y Buzz Aldrin"
  - "Neil Armstrong y Michael Collins"
  - "Yuri Gagarin y Alexei Leonov"
  - "Buzz Aldrin y Thomas Stafford"
respuesta: "Neil Armstrong y Buzz Aldrin"

explicacion: |
  Michael Collins esperó en órbita lunar.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

variables:
  a: 1957
  b: 1969

respuesta: b - a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos años pasaron entre el lanzamiento del Sputnik 1 ({a}) y la llegada del Apolo 11 a la Luna ({b})?"

pasos:
  - "Restar {a} a {b}"

explicacion: |
  1969 menos 1957 da 12 años.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Qué fue el Proyecto de Prueba Apolo-Soyuz de 1975?"
opciones_explicitas:
  - "Una misión conjunta en la que se acoplaron naves de Estados Unidos y la URSS"
  - "Un conflicto armado"
  - "Una misión a Marte"
  - "El lanzamiento del Sputnik"
respuesta: "Una misión conjunta en la que se acoplaron naves de Estados Unidos y la URSS"

explicacion: |
  Fue la primera misión tripulada en la que participaron dos países.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "avanzado"
  tags: ["carrera_espacial", "guerra_fria"]

tipo: mc
enunciado: "¿Quiénes integraron la tripulación soviética del Soyuz 19 en 1975?"
opciones_explicitas:
  - "Alexei Leonov y Valeri Kubasov"
  - "Yuri Gagarin y Alexei Leonov"
  - "Thomas Stafford y Vance Brand"
  - "Valentina Tereshkova y Valeri Kubasov"
respuesta: "Alexei Leonov y Valeri Kubasov"

explicacion: |
  Los estadounidenses fueron Stafford, Brand y Slayton.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "intermedio"
  tags: ["carrera_espacial", "guerra_fria"]

respuesta: verdadero
tipo: vf

enunciado: "La misión Apolo-Soyuz fue un símbolo de distensión entre las dos potencias en los años setenta."

explicacion: |
  Las tripulaciones se dieron la mano en vivo cuando las naves se acoplaron.
```

```
metadata:
  materia: "historia-profunda"
  tema: "carrera_espacial_sputnik_y_apolo"
  nivel: "avanzado"
  tags: ["carrera_espacial", "guerra_fria"]

respuesta: falso
tipo: vf

enunciado: "Todos los relatos coinciden en cuál de las dos potencias «ganó» la carrera espacial."

explicacion: |
  Se la cuenta de formas distintas: la URSS tuvo varios primeros logros y Estados Unidos llegó a la Luna.
```

