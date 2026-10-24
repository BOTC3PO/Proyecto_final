# Examen jefe — Conocedor del Cuerpo en Movimiento

> Logro #962. Dominaste la frecuencia cardíaca en reposo, el deporte como fenómeno cultural argentino, el pato, la frecuencia cardíaca máxima y sus zonas y el índice de masa corporal. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **121 preguntas totales** en 5/5 secciones.

---

## Sección: frecuencia-cardiaca-reposo (20 preguntas)

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["fcr", "vocabulario"]

enunciado: "¿Qué es la frecuencia cardíaca en reposo (FCR)?"
tipo: mc
opciones_explicitas:
  - "La cantidad de latidos del corazón por minuto, medida cuando el cuerpo está completamente en reposo"
  - "La cantidad máxima de latidos que puede alcanzar el corazón durante un ejercicio intenso"
  - "La presión arterial medida en reposo"
respuesta: "La cantidad de latidos del corazón por minuto, medida cuando el cuerpo está completamente en reposo"

explicacion: |
  Se mide idealmente recién despierto, antes de levantarse de la cama.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["fcr", "problema"]

variables:
  pulsaciones_15s: uno_de([15, 17, 18, 20])

respuesta: pulsaciones_15s * 4
tipo: input
unidad: "lpm"

enunciado: "Contando el pulso durante 15 segundos, se registraron {pulsaciones_15s} latidos. ¿Cuál es la frecuencia cardíaca en latidos por minuto?"

pasos:
  - "FCR = {pulsaciones_15s} × 4 = {pulsaciones_15s * 4} lpm"

explicacion: |
  Se escala el conteo de 15 segundos a un minuto completo (×4).
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["fcr", "problema"]

variables:
  pulsaciones_30s: uno_de([30, 34, 36])

respuesta: pulsaciones_30s * 2
tipo: input
unidad: "lpm"

enunciado: "Contando el pulso durante 30 segundos, se registraron {pulsaciones_30s} latidos. ¿Cuál es la frecuencia cardíaca en latidos por minuto?"

pasos:
  - "FCR = {pulsaciones_30s} × 2 = {pulsaciones_30s * 2} lpm"

explicacion: |
  Se escala el conteo de 30 segundos a un minuto completo (×2).
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["fcr", "vocabulario"]

enunciado: "¿Cuál es el rango típico considerado normal de frecuencia cardíaca en reposo para un adulto?"
tipo: mc
opciones_explicitas:
  - "Entre 60 y 100 latidos por minuto"
  - "Entre 100 y 150 latidos por minuto"
  - "Entre 20 y 40 latidos por minuto"
respuesta: "Entre 60 y 100 latidos por minuto"

explicacion: |
  Por debajo de 60 se llama bradicardia; por encima de 100, taquicardia.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["fcr", "aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una frecuencia cardíaca en reposo por debajo de 60 lpm (bradicardia según el rango general) no siempre es un problema de salud — en atletas de resistencia bien entrenados es común y no indica ninguna afección."

explicacion: |
  Un corazón entrenado bombea más sangre por latido, así que necesita
  latir menos veces para la misma circulación.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["promedio", "problema"]

variables:
  dia1: uno_de([62, 64])
  dia2: uno_de([65, 66])
  dia3: uno_de([63, 67])

respuesta: redondear(promedio([dia1, dia2, dia3]), 1)
tipo: input
tolerancia_abs: 0.1
unidad: "lpm"

enunciado: "Se midió la FCR en 3 días distintos: {dia1}, {dia2} y {dia3} lpm. ¿Cuál es el promedio de esas 3 mediciones?"

pasos:
  - "Promedio = ({dia1}+{dia2}+{dia3}) / 3 = {redondear(promedio([dia1, dia2, dia3]), 1)} lpm"

explicacion: |
  El promedio de varios días da una estimación más confiable que
  cualquiera de las mediciones individuales.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["promedio"]

respuesta: verdadero
tipo: vf

enunciado: "Promediar la FCR de varios días distintos da una estimación más confiable de la FCR real de una persona que confiar en una sola medición aislada."

explicacion: |
  Una sola medición puede estar afectada por factores puntuales
  (nervios, cafeína, mala hora del día).
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué una única medición de FCR, tomada un solo día, puede no representar bien la FCR habitual de una persona?"
tipo: mc
opciones_explicitas:
  - "Porque factores puntuales (nervios, cafeína reciente, mala noche de sueño) pueden alterar esa medición en particular, sin reflejar la condición habitual"
  - "Porque la frecuencia cardíaca siempre es exactamente la misma en cualquier medición"
  - "Porque medir el pulso siempre da un resultado aleatorio, sin ninguna relación con la salud real"
respuesta: "Porque factores puntuales (nervios, cafeína reciente, mala noche de sueño) pueden alterar esa medición en particular, sin reflejar la condición habitual"

explicacion: |
  Es la misma razón por la que conviene promediar varias mediciones
  en vez de confiar en una sola.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["fcr", "aplicacion"]

enunciado: "¿Por qué una FCR más baja suele indicar mejor condición cardiovascular?"
tipo: mc
opciones_explicitas:
  - "Porque un corazón entrenado bombea más sangre por cada latido (mayor volumen sistólico), así que necesita latir menos veces para mover la misma cantidad de sangre"
  - "Porque un corazón que late menos veces se cansa menos, sin ninguna relación con su eficiencia"
  - "Una FCR más baja no tiene ninguna relación con la condición física"
respuesta: "Porque un corazón entrenado bombea más sangre por cada latido (mayor volumen sistólico), así que necesita latir menos veces para mover la misma cantidad de sangre"

explicacion: |
  Es la razón fisiológica detrás de la FCR baja de los atletas de
  resistencia.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "avanzado"
  tags: ["fcr", "problema"]

variables:
  promedio_antes: uno_de([72, 75])
  promedio_despues: uno_de([64, 66])

respuesta: promedio_antes - promedio_despues
tipo: input
unidad: "lpm"

enunciado: "El promedio de FCR de una persona era {promedio_antes} lpm antes de empezar un plan de entrenamiento, y {promedio_despues} lpm después de varios meses. ¿Cuánto bajó el promedio?"

pasos:
  - "Diferencia = {promedio_antes} − {promedio_despues} = {promedio_antes - promedio_despues} lpm"

explicacion: |
  Una baja sostenida en el promedio de FCR, con el mismo nivel de
  reposo, suele indicar mejora de la condición cardiovascular.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar el promedio de FCR de una semana de entrenamiento contra el de semanas anteriores es una forma directa de medir el progreso cardiovascular a lo largo del tiempo."

explicacion: |
  Es más confiable que comparar dos mediciones sueltas de días
  distintos.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "avanzado"
  tags: ["mediana", "problema"]

variables:
  dia1: 62
  dia2: 64
  dia3: 63
  dia_estresado: 95

respuesta: mediana([dia1, dia2, dia3, dia_estresado])
tipo: input
unidad: "lpm"

enunciado: "FCR de 4 días: {dia1}, {dia2}, {dia3} y {dia_estresado} (este último, un día con mucho estrés previo a la medición). ¿Cuál es la MEDIANA de estas 4 mediciones?"

explicacion: |
  La mediana no se deja arrastrar por el valor atípico del día
  estresado, a diferencia de la media.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "avanzado"
  tags: ["mediana", "aplicacion"]

enunciado: "Si una de las mediciones de FCR de la semana quedó muy alta por un día de mucho estrés, ¿por qué podría convenir usar la mediana en vez de la media para resumir esa semana?"
tipo: mc
opciones_explicitas:
  - "Porque la mediana no se deja arrastrar por un valor atípico, mientras que la media sí — sobrestimaría la FCR habitual de esa persona"
  - "Porque la mediana siempre da un número más bajo que la media"
  - "No hay ninguna diferencia práctica entre usar mediana o media en este caso"
respuesta: "Porque la mediana no se deja arrastrar por un valor atípico, mientras que la media sí — sobrestimaría la FCR habitual de esa persona"

explicacion: |
  Es la misma lógica de `../../matematica/cual-miente-y-cuando/`,
  aplicada a mediciones fisiológicas.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "avanzado"
  tags: ["promedio", "problema"]

variables:
  d1: uno_de([58, 60])
  d2: uno_de([59, 61])
  d3: uno_de([57, 62])
  d4: uno_de([60, 63])
  d5: uno_de([58, 59])

respuesta: redondear(promedio([d1, d2, d3, d4, d5]), 1)
tipo: input
tolerancia_abs: 0.1
unidad: "lpm"

enunciado: "FCR medida en 5 días: {d1}, {d2}, {d3}, {d4}, {d5} lpm. ¿Cuál es el promedio semanal?"

pasos:
  - "Promedio = ({d1}+{d2}+{d3}+{d4}+{d5}) / 5 = {redondear(promedio([d1, d2, d3, d4, d5]), 1)} lpm"

explicacion: |
  Cuantas más mediciones se promedien, más estable queda la
  estimación de la FCR habitual.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["fcr", "aplicacion"]

enunciado: "¿Por qué se recomienda medir la FCR recién despierto, antes de levantarse de la cama, en vez de en cualquier otro momento del día?"
tipo: mc
opciones_explicitas:
  - "Porque es el momento en el que el cuerpo está más cerca de un reposo total, sin la influencia de actividad física, estrés del día o estimulantes como la cafeína"
  - "Porque la frecuencia cardíaca es imposible de medir en cualquier otro momento"
  - "No hay ninguna razón real para preferir ese momento del día"
respuesta: "Porque es el momento en el que el cuerpo está más cerca de un reposo total, sin la influencia de actividad física, estrés del día o estimulantes como la cafeína"

explicacion: |
  Medir siempre en condiciones parecidas hace que las mediciones sean
  más comparables entre sí.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["fcr", "vocabulario"]

enunciado: "¿Qué es la taquicardia, en el contexto de la frecuencia cardíaca en reposo?"
tipo: mc
opciones_explicitas:
  - "Una FCR por encima de 100 latidos por minuto"
  - "Una FCR por debajo de 60 latidos por minuto"
  - "La frecuencia cardíaca máxima alcanzable durante ejercicio intenso"
respuesta: "Una FCR por encima de 100 latidos por minuto"

explicacion: |
  Es el extremo opuesto de la bradicardia dentro del rango de
  referencia general.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["fcr", "problema"]

variables:
  promedio_atleta: uno_de([48, 52])
  promedio_sedentario: uno_de([78, 82])

respuesta: promedio_atleta < promedio_sedentario
tipo: vf

enunciado: "Una persona atleta tiene FCR promedio de {promedio_atleta} lpm; una persona sedentaria tiene {promedio_sedentario} lpm. ¿La FCR de la persona atleta es MENOR?"

explicacion: |
  Es consistente con la relación entre entrenamiento cardiovascular y
  FCR más baja.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["fcr"]

respuesta: verdadero
tipo: vf

enunciado: "Es normal que la FCR varíe algunos latidos por minuto de un día a otro, incluso en la misma persona y en las mismas condiciones de medición — por eso conviene mirar el promedio a lo largo de varios días, no una sola medición."

explicacion: |
  Es exactamente la razón por la que este módulo insiste en promediar
  varias mediciones.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un profesor de Educación Física quiere que sus alumnos midan su progreso cardiovascular a lo largo de un trimestre. ¿Qué metodología conviene usar?"
tipo: mc
opciones_explicitas:
  - "Medir la FCR varios días por semana, calcular el promedio semanal, y comparar esos promedios semana a semana a lo largo del trimestre"
  - "Medir la FCR una sola vez, al principio del trimestre, y no volver a medirla"
  - "Medir la FCR sólo durante o inmediatamente después del ejercicio, nunca en reposo"
respuesta: "Medir la FCR varios días por semana, calcular el promedio semanal, y comparar esos promedios semana a semana a lo largo del trimestre"

explicacion: |
  Es la aplicación práctica de todo lo visto en este módulo a un
  seguimiento real de varios meses.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular el promedio de varias mediciones de frecuencia cardíaca en reposo, en vez de confiar en una sola medición?"
tipo: mc
opciones_explicitas:
  - "Para obtener una estimación más confiable de la FCR habitual de una persona, y poder hacer un seguimiento real de su condición cardiovascular a lo largo del tiempo"
  - "El promedio no aporta ninguna ventaja real sobre una sola medición"
  - "Sólo sirve para deportistas de alto rendimiento"
respuesta: "Para obtener una estimación más confiable de la FCR habitual de una persona, y poder hacer un seguimiento real de su condición cardiovascular a lo largo del tiempo"

explicacion: |
  Es la aplicación directa de `../../matematica/media-mediana-y-moda/`
  a fisiología del ejercicio.
```

## Sección: deporte-como-fenomeno-cultural-argentino (24 preguntas)

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "basico"
  tags: ["identidad", "sociedad"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, el deporte se considera un lenguaje común que atraviesa la identidad nacional, más allá de ser solo una actividad física."

explicacion: |
  El deporte funciona como un código compartido que une a personas de diferentes orígenes y clases sociales, moldeando la identidad colectiva.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "basico"
  tags: ["futbol", "rituales"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "El fútbol es el ejemplo más evidente de cómo el deporte genera rituales, símbolos y emociones compartidas en la cultura argentina."

explicacion: |
  Aunque otros deportes son importantes, el fútbol destaca por su capacidad de detener las calles y unir a la población en momentos clave.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "intermedio"
  tags: ["rituales", "canto"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "Los rituales deportivos en Argentina incluyen desde el canto en los estadios hasta la interpretación de música en las tribunas y gestos específicos."

explicacion: |
  Estos elementos transforman el partido en un espectáculo teatral donde el público es protagonista activo, no solo un espectador pasivo.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "intermedio"
  tags: ["orgullo", "crisis"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "El éxito deportivo internacional ha funcionado históricamente como un motor de orgullo nacional en momentos de crisis económica o política en Argentina."

explicacion: |
  El rendimiento en la cancha ofrece un respiro psicológico y una sensación de unidad colectiva cuando otros indicadores sociales están en baja.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "basico"
  tags: ["rugby", "básquet"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "Además del fútbol, el rugby y el básquet juegan roles fundamentales en la construcción del tejido social y la identidad deportiva argentina."

explicacion: |
  Estos deportes tienen sus propias comunidades, rituales y pasiones, contribuyendo a la diversidad de la cultura deportiva nacional.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "intermedio"
  tags: ["género", "inclusión"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "El básquet femenino y el hockey sobre césped han ganado visibilidad, desafiando los estereotipos de género que durante décadas marginaron a las mujeres."

explicacion: |
  La mayor visibilidad de las mujeres en el deporte no solo busca equidad, sino también enriquecer la oferta cultural y deportiva del país.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "basico"
  tags: ["barrio", "informal"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "La cultura deportiva argentina se manifiesta también cuando los barrios se organizan en torneos informales, uniendo a vecinos de diferentes edades."

explicacion: |
  Estas prácticas locales son esenciales para entender el deporte como un fenómeno cultural cotidiano, no solo como evento televisado.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "basico"
  tags: ["familia", "comunicación"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "Las familias argentinas suelen discutir tácticas deportivas durante el almuerzo del domingo, integrando el deporte en la vida cotidiana."

explicacion: |
  El deporte actúa como un tema de conversación y vínculo intergeneracional dentro del núcleo familiar.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "avanzado"
  tags: ["diversidad", "inclusión"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "La cultura deportiva argentina está en constante evolución respecto a la inclusión de personas con diversas orientaciones sexuales en el ámbito deportivo."

explicacion: |
  El deporte se presenta como un espacio de discusión y transformación social hacia una mayor inclusión y respeto a la diversidad.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "intermedio"
  tags: ["vóley", "mujeres"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "El vóley ha ganado visibilidad en Argentina, contribuyendo a desafiar los estereotipos de género tradicionales en el deporte."

explicacion: |
  El éxito y la popularidad del vóley femenino han sido clave para ampliar la participación y el reconocimiento de las mujeres en el deporte.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "basico"
  tags: ["símbolos", "vestimenta"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "La vestimenta y los gestos de los aficionados son elementos rituales que contribuyen a la identidad cultural deportiva en Argentina."

explicacion: |
  Portar la camiseta o realizar gestos específicos es una forma de expresar pertenencia a una comunidad y compartir emociones.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "intermedio"
  tags: ["rivalidad", "historia"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "Las rivalidades históricas entre equipos reflejan dinámicas urbanas y sociales más amplias en la sociedad argentina."

explicacion: |
  Los enfrentamientos deportivos a menudo encapsulan tensiones sociales, geográficas o identitarias de la comunidad.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "avanzado"
  tags: ["psicología", "unidad"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "El éxito deportivo puede ofrecer un respiro psicológico y una sensación de unidad colectiva en momentos difíciles para el país."

explicacion: |
  El deporte actúa como un mecanismo de cohesión y esperanza, permitiendo a la sociedad sentirse unida más allá de las divisiones cotidianas.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "intermedio"
  tags: ["discapacidad", "inclusión"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "La discusión actual sobre inclusión en el deporte argentino abarca la participación de personas con discapacidad."

explicacion: |
  El deporte adaptado y la visibilidad de atletas con discapacidad son parte fundamental de la evolución hacia una cultura deportiva más equitativa.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "basico"
  tags: ["futbol", "cultura"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "El fútbol en Argentina no se limita a la práctica física o la competencia, sino que es un fenómeno cultural profundo."

explicacion: |
  El impacto del fútbol trasciende lo deportivo, influyendo en el lenguaje, las relaciones sociales y la identidad nacional.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "avanzado"
  tags: ["transformación", "cultura"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "Ampliar quiénes pueden participar en el deporte enriquece la oferta cultural argentina, más allá de buscar solo equidad."

explicacion: |
  La diversidad de participantes aporta nuevas perspectivas, estilos y experiencias que enriquecen el ecosistema deportivo nacional.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "intermedio"
  tags: ["equipos", "comunidad"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "Los equipos deportivos suelen representar a comunidades específicas, funcionando como símbolos de identidad local y nacional."

explicacion: |
  La pertenencia a un club o selección es una forma de afirmar la identidad personal y colectiva dentro de la sociedad argentina.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "intermedio"
  tags: ["resiliencia", "valores"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "El deporte permite la expresión de valores como la resiliencia, mostrando la capacidad de superar adversidades tanto en la cancha como en la vida."

explicacion: |
  Las historias de superación deportiva inspiran a la sociedad a enfrentar sus propios desafíos con determinación y esperanza.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "basico"
  tags: ["pertenencia", "identidad"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "El deporte fomenta el sentido de pertenencia, uniendo a las personas frente a un mismo objetivo o pasión compartida."

explicacion: |
  Compartir la afición crea lazos fuertes entre individuos, generando una comunidad unida por emociones y símbolos comunes.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "intermedio"
  tags: ["evolución", "cambio"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "Aunque el fútbol domina la narrativa tradicional, la cultura deportiva argentina está evolucionando hacia una mayor diversidad."

explicacion: |
  La creciente visibilidad de otros deportes y la inclusión de diversos grupos están transformando el panorama deportivo nacional.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "basico"
  tags: ["solidaridad", "valores"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "El deporte actúa como un vehículo para expresar y promover valores como la solidaridad entre los participantes y aficionados."

explicacion: |
  La experiencia deportiva fomenta el apoyo mutuo y la empatía, fortaleciendo los lazos comunitarios.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "avanzado"
  tags: ["aspiraciones", "sociedad"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "El deporte refleja las aspiraciones de la sociedad, mostrando ideales de superación, justicia y reconocimiento colectivo."

explicacion: |
  Los logros deportivos se interpretan como victorias de la sociedad en su conjunto, simbolizando la realización de metas comunes.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "basico"
  tags: ["música", "ritual"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "La interpretación de música en las tribunas es un ritual específico que caracteriza la intensidad emocional del deporte argentino."

explicacion: |
  La música y el canto son herramientas esenciales para crear ambiente, expresar identidad y unir a los aficionados.
```

```
metadata:
  materia: "educacion_fisica"
  tema: "deporte_como_fenomeno_cultural_argentino"
  nivel: "basico"
  tags: ["lenguaje", "comunicación"]

variables:
  p1: random(1, 100)

respuesta: verdadero
tipo: vf

enunciado: "El deporte funciona como un lenguaje común que permite la comunicación y conexión entre personas de diferentes orígenes en Argentina."

explicacion: |
  A través del deporte, se establecen puentes de entendimiento y empatía, trascendiendo barreras sociales y culturales.
```

## Sección: el-pato (27 preguntas)

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "basico"
  tags: ["definicion", "contexto"]

respuesta: "a caballo"
tipo: completar

enunciado: "El Pato es un deporte colectivo que se practica ___, sobre un campo de césped similar al del polo."

explicacion: |
  El Pato es un deporte ecuestre — se juega montado a caballo, no en el agua.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "basico"
  tags: ["objetivo", "reglas"]

respuesta: verdadero
tipo: vf

enunciado: "El objetivo principal del Pato es llevar la pelota hasta el aro rival e intentar encestarla para anotar puntos."

explicacion: |
  Correcto. El Pato combina elementos del polo (juego a caballo) y el básquet (anotar encestando en un aro).
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "intermedio"
  tags: ["equipamiento", "reglas"]

respuesta: "vertical"
tipo: completar

enunciado: "El aro donde se anota, tomado del básquet, está montado en un poste de forma ___, en cada extremo de la cancha."

explicacion: |
  El aro es vertical (a diferencia del aro horizontal del básquet), de aproximadamente un metro de diámetro.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "basico"
  tags: ["equipamiento", "balon"]

respuesta: "asas"
tipo: completar

enunciado: "El balón del Pato tiene seis ___ de cuero para facilitar que el jinete lo agarre con una sola mano al galope."

explicacion: |
  Las seis asas son la característica distintiva del balón, permiten sostenerlo firme mientras se controla el caballo con la otra mano.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "intermedio"
  tags: ["habilidad", "equitacion"]

respuesta: "equitacion"
tipo: completar

enunciado: "Jugar al Pato exige un dominio avanzado de la ___, ya que las dos manos están ocupadas (riendas y pelota) y el caballo se maneja con el cuerpo y las piernas."

explicacion: |
  El manejo ecuestre es la habilidad central: el jinete debe controlar el caballo sin usar directamente las riendas con ambas manos.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "avanzado"
  tags: ["historia", "origen"]

respuesta: verdadero
tipo: vf

enunciado: "El nombre 'pato' viene de un pato vivo real, que en la época colonial se disputaba metido dentro de una bolsa de cuero con asas."

explicacion: |
  Así es — el juego original, mucho más violento, se jugaba con un pato vivo en una bolsa, antes de reglamentarse con una pelota de cuero.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "intermedio"
  tags: ["historia", "prohibicion"]

respuesta: "prohibido"
tipo: completar

enunciado: "Por su extrema violencia (con frecuencia terminaba en muertes o heridas graves), el pato original fue ___ varias veces durante los siglos XVIII y XIX."

explicacion: |
  Tanto autoridades coloniales como gobiernos provinciales prohibieron el juego en distintos momentos antes de su reglamentación.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "basico"
  tags: ["historia", "decreto"]

variables:
  anio: 1953

respuesta: "1953"
tipo: input

enunciado: "El Pato fue declarado deporte nacional argentino por decreto en el año {anio}, durante el gobierno de Juan Domingo Perón."

explicacion: |
  El decreto de 1953 formalizó al Pato como deporte nacional, ya con las reglas modernas (pelota de asas, aro vertical).
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "basico"
  tags: ["contexto", "cancha"]

respuesta: "cesped"
tipo: completar

enunciado: "El campo de juego del Pato es una cancha de ___ similar a la de polo, no un cuerpo de agua."

explicacion: |
  El pato se juega sobre césped, igual que el polo — el error común de asociarlo con el agua no tiene base real.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "intermedio"
  tags: ["reglas", "forcejeo"]

respuesta: verdadero
tipo: vf

enunciado: "Los jugadores pueden forcejear por la pelota mientras cabalgan pegados unos a otros, siempre que ambos tengan al menos una mano en un asa."

explicacion: |
  El 'forcejeo' es una jugada reglamentaria central del Pato, con reglas estrictas de seguridad para evitar caídas peligrosas.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "intermedio"
  tags: ["habilidad", "equilibrio"]

respuesta: "equilibrio"
tipo: completar

enunciado: "Forcejear por la pelota sin caerse del caballo exige fuerza de brazo y un gran sentido del ___."

explicacion: |
  El equilibrio a caballo, en contacto físico con otro jinete, es una de las habilidades técnicas más exigentes del deporte.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "intermedio"
  tags: ["reglas", "equipo"]

variables:
  jinetes: 4

respuesta: "4"
tipo: input

enunciado: "Cada equipo de Pato está formado por {jinetes} jinetes."

explicacion: |
  Se juega con dos equipos de cuatro jinetes cada uno, igual que en el polo tradicional.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "avanzado"
  tags: ["historia", "reforma"]

respuesta: "Alberto del Castillo Posse"
tipo: completar

enunciado: "El gran reformador que, a principios del siglo XX, ayudó a reglamentar el pato moderno (pelota con asas, aro vertical, reglas de seguridad) fue ___."

explicacion: |
  Alberto del Castillo Posse encabezó, junto a otros estancieros, la reglamentación que transformó el juego violento original en el deporte federado actual.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "basico"
  tags: ["terminologia", "balon"]

respuesta: verdadero
tipo: vf

enunciado: "La pelota utilizada en este deporte se conoce, igual que el juego, como 'el pato'."

explicacion: |
  Es común referirse tanto al juego como a la pelota con el mismo nombre.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "avanzado"
  tags: ["condicion_fisica", "resistencia"]

respuesta: "resistencia"
tipo: completar

enunciado: "El Pato combina fuerza, ___ y estrategia, exigiendo buena condición física tanto del jinete como del caballo."

explicacion: |
  La resistencia física es clave para sostener el ritmo de galope, forcejeo y juego durante todo el partido.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "intermedio"
  tags: ["reglas", "puntuacion"]

respuesta: "gol"
tipo: completar

enunciado: "Cada vez que se encesta la pelota en el aro rival se anota un ___ (con un valor mayor si se convierte desde fuera del área)."

explicacion: |
  El sistema de puntuación por gol/tanto es similar en estructura al de otros deportes de cancha con arco o aro.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "avanzado"
  tags: ["valores", "identidad"]

respuesta: "gaucha"
tipo: completar

enunciado: "El Pato está fuertemente ligado a la tradición ___ y a la vida rural del campo argentino."

explicacion: |
  Su origen colonial en el ámbito rural y su vínculo con la equitación lo conectan directamente con la identidad gauchesca.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "intermedio"
  tags: ["habilidad", "tecnica"]

respuesta: "una"
tipo: completar

enunciado: "Gracias a las asas, el jinete puede agarrar y lanzar la pelota con ___ sola mano, dejando la otra libre para las riendas."

explicacion: |
  Este detalle técnico es lo que hace jugable al pato a caballo — sin las asas sería imposible sostenerlo con una mano al galope.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "basico"
  tags: ["seguridad", "equipamiento"]

respuesta: "casco"
tipo: completar

enunciado: "Dado el historial violento del juego original, hoy es obligatorio el uso de ___ y otros elementos de protección en la práctica federada."

explicacion: |
  Las medidas de seguridad modernas (casco, reglas estrictas de forcejeo) buscan evitar los accidentes graves que llevaron a prohibir el juego original.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "intermedio"
  tags: ["reglas", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "Está prohibido cruzarse de forma peligrosa delante de otro caballo al galope durante el juego."

explicacion: |
  Esta regla de seguridad busca evitar caídas y choques graves entre jinetes, un riesgo real dado que se juega a alta velocidad.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "basico"
  tags: ["cultura", "argentina"]

respuesta: "nacional"
tipo: completar

enunciado: "El Pato es, por decreto, el deporte ___ de Argentina."

explicacion: |
  Esa declaración oficial de 1953 es la que le da su lugar simbólico particular en la cultura deportiva argentina.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "intermedio"
  tags: ["habilidad", "ataque"]

respuesta: "precision"
tipo: completar

enunciado: "Se requiere fuerza de brazo y ___ para encestar la pelota en el aro rival mientras el caballo está en movimiento."

explicacion: |
  La precisión es clave porque tanto el jinete como el objetivo (el aro) requieren coordinación en movimiento, a diferencia de un lanzamiento estático.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "avanzado"
  tags: ["comparacion", "polo"]

respuesta: "polo"
tipo: completar

enunciado: "El Pato combina elementos del ___ (juego a caballo, cancha de césped) y del básquet (encestar en un aro para anotar)."

explicacion: |
  Esta combinación de dos deportes es lo que hace único al Pato entre los deportes ecuestres del mundo.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "intermedio"
  tags: ["cultura", "federacion"]

respuesta: "Federación Argentina de Pato"
tipo: completar

enunciado: "El organismo que organiza el campeonato 'Abierto Argentino de Pato' es la ___."

explicacion: |
  La Federación Argentina de Pato regula la práctica federada del deporte y organiza su torneo más prestigioso.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "basico"
  tags: ["seguridad", "entrenamiento"]

respuesta: "entrenados"
tipo: completar

enunciado: "Para jugar al Pato con seguridad, los caballos deben estar específicamente ___ para el deporte, acostumbrados al contacto físico y al forcejeo."

explicacion: |
  Un caballo sin entrenamiento específico puede reaccionar mal al forcejeo o al contacto con otros caballos, aumentando el riesgo de caídas.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "avanzado"
  tags: ["valores", "etica"]

respuesta: "destreza"
tipo: completar

enunciado: "Más allá de lo lúdico, el Pato es valorado como una muestra de ___ ecuestre y de la tradición criolla."

explicacion: |
  La destreza a caballo, heredada de la vida rural, es el valor central que el deporte busca preservar y mostrar.
```

```
metadata:
  materia: "Educación Física"
  tema: "el_pato"
  nivel: "basico"
  tags: ["reglas", "final"]

respuesta: "finalizar"
tipo: completar

enunciado: "El equipo que logre la mayor cantidad de puntos al ___ el tiempo reglamentario es el ganador."

explicacion: |
  La puntuación acumulada hasta el final determina el resultado oficial del partido, igual que en la mayoría de los deportes de cancha.
```

## Sección: frecuencia-cardiaca-maxima-zonas (25 preguntas)

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fcm", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["15", "205"], ["20", "200"], ["35", "185"]]

tipo: completar
respuestas_validas:
  - "205"
  - "200"
  - "185"
respuesta: datos[idx][1]

enunciado: "Utilizando la fórmula de la frecuencia cardíaca máxima (FCM = 220 - edad), calcula la FCM para una persona de {datos[idx][0]} años."

explicacion: |
  La fórmula aplicada es 220 - {datos[idx][0]} = {datos[idx][1]} pulsaciones por minuto (ppm).
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["teoria", "fórmula"]

tipo: mc
opciones_explicitas: ["220 + edad", "220 - edad", "208 - (0.7 * edad)", "150 + edad"]
respuesta: "220 - edad"

enunciado: "¿Cuál es la fórmula simplificada más utilizada para estimar la frecuencia cardíaca máxima (FCM)?"

explicacion: |
  La fórmula estándar para estimación rápida es restar la edad a 220.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["fcm", "comparacion"]

variables:
  idx: uno_de([0, 1])
  datos: [["10", "Es mayor que la de una persona de 30 años"], ["40", "Es menor que la de una persona de 30 años"]]

tipo: mc
opciones_explicitas: ["Es mayor que la de una persona de 30 años", "Es menor que la de una persona de 30 años"]
respuesta: datos[idx][1]

enunciado: "Si comparamos la FCM estimada de una persona de {datos[idx][0]} años con la de una persona de 30 años, ¿qué podemos afirmar?"

explicacion: |
  A menor edad, la frecuencia cardíaca máxima estimada es mayor (y viceversa), porque la fórmula resta directamente la edad a 220.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["fcm", "calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [["12", "208"], ["40", "180"]]

tipo: completar
respuestas_validas:
  - "208"
  - "180"
respuesta: datos[idx][1]

enunciado: "Calcula la frecuencia cardíaca máxima para una persona de {datos[idx][0]} años."

explicacion: |
  Restamos la edad a 220: 220 - {datos[idx][0]} = {datos[idx][1]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["teoria"]

tipo: mc
opciones_explicitas: ["Aumenta con la edad", "Disminuye con la edad", "Se mantiene constante", "Depende del clima"]
respuesta: "Disminuye con la edad"

enunciado: "Según la fórmula FCM = 220 - edad, ¿qué sucede con la frecuencia cardíaca máxima a medida que una persona envejece?"

explicacion: |
  Como la edad se está restando, cuanto mayor es el valor de la edad, menor es el resultado de la FCM.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fcm", "recuperacion"]

tipo: mc
opciones_explicitas: ["Zona 1", "Zona 2", "Zona 3", "Zona 4", "Zona 5"]

enunciado: "Si un estudiante realiza un ejercicio de intensidad muy baja, con un rango de intensidad entre el 50% y 60% de su FCM, ¿en qué zona de entrenamiento se encuentra?"

respuesta: "Zona 1"

explicacion: |
  La Zona 1 (50-60% FCM) es la zona de recuperación activa o calentamiento, ideal para preparar el cuerpo o recuperarse tras esfuerzos intensos.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["quema_grasa", "aerobico"]

tipo: mc
opciones_explicitas: ["Recuperación", "Quema de grasa", "Capacidad aeróbica", "Umbral anaeróbico", "Potencia máxima"]

enunciado: "¿Cuál es el beneficio principal de entrenar en la Zona 2 (60-70% de la FCM)?"

respuesta: "Quema de grasa"

explicacion: |
  La Zona 2 es conocida como la zona de oxidación de grasas, donde el cuerpo utiliza preferentemente lípidos como fuente de energía principal.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["fcm", "aerobico"]

tipo: completar
respuestas_validas:
  - "70-80"
respuesta: "70-80"

enunciado: "Completa el rango de la Zona 3 (Capacidad Aeróbica): el rango de intensidad es del ___% de la FCM (poné los dos números separados por guion, ej. 70-80)."

explicacion: |
  La Zona 3 (70-80% FCM) mejora la eficiencia del sistema cardiovascular y la capacidad aeróbica general.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["anaerobico", "umbral"]

tipo: mc
opciones_explicitas: ["Zona 1", "Zona 2", "Zona 3", "Zona 4", "Zona 5"]

enunciado: "Cuando un atleta trabaja a una intensidad del 80-90% de su FCM, está entrando en la zona anaeróbica, también llamada de umbral. ¿Qué zona es?"

respuesta: "Zona 4"

explicacion: |
  La Zona 4 (80-90% FCM) es la zona anaeróbica, donde se mejora la tolerancia al lactato y el umbral de fatiga.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "avanzado"
  tags: ["fcm", "maximo"]

tipo: completar
respuestas_validas:
  - "90-100"
respuesta: "90-100"

enunciado: "La Zona 5, que se utiliza para entrenar la potencia máxima y la velocidad, corresponde al ___% de la FCM (poné los dos números separados por guion, ej. 90-100)."

explicacion: |
  La Zona 5 (90-100% FCM) es de intensidad máxima y se utiliza para entrenamientos de intervalos de alta intensidad (HIIT) para mejorar la potencia.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fcm", "entrenamiento", "pulsaciones"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["180", "108-144"], ["190", "114-152"], ["200", "120-160"]]

respuestas_validas:
  - "108-144"
  - "114-152"
  - "120-160"
respuesta: datos[idx][1]
tipo: completar

enunciado: "Si una persona tiene una Frecuencia Cardíaca Máxima (FCM) de {datos[idx][0]} lpm, ¿cuál es el rango de pulsaciones para una zona de intensidad del 60% al 80% (poné los dos números separados por guion)?"

explicacion: |
  Para calcular el rango, multiplicamos la FCM por el porcentaje deseado: {datos[idx][0]} × 0,60 y {datos[idx][0]} × 0,80.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fcm", "calentamiento"]

variables:
  idx: uno_de([0, 1])
  datos: [["170", "102 lpm"], ["190", "114 lpm"]]

enunciado: "Un atleta con una FCM de {datos[idx][0]} lpm realiza un calentamiento en la zona del 60%. ¿A cuántas pulsaciones debe situarse?"

opciones_explicitas: ["102 lpm", "114 lpm", "120 lpm", "130 lpm"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El cálculo es FCM × 0,60. Para un valor de {datos[idx][0]}, el resultado es {datos[idx][1]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["fcm", "anaerobico"]

variables:
  idx: uno_de([0, 1])
  datos: [["180", "144"], ["200", "160"]]

enunciado: "Para entrenar en el umbral anaeróbico (80% de la FCM), una persona con FCM de {datos[idx][0]} lpm debería alcanzar las ___ pulsaciones."

respuestas_validas:
  - "144"
  - "160"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El umbral anaeróbico se calcula multiplicando la FCM por 0,80: {datos[idx][0]} × 0,80 = {datos[idx][1]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "avanzado"
  tags: ["fcm", "anaerobico", "esfuerzo_maximo"]

variables:
  idx: uno_de([0, 1])
  datos: [["180", "162 lpm"], ["190", "171 lpm"]]

enunciado: "Si un deportista está trabajando al 90% de su FCM de {datos[idx][0]} lpm, ¿cuál es su frecuencia cardíaca actual?"

opciones_explicitas: ["162 lpm", "171 lpm", "150 lpm", "180 lpm"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El 90% de {datos[idx][0]} es {datos[idx][1]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["fcm", "recuperacion"]

variables:
  idx: uno_de([0, 1])
  datos: [["180", "90"], ["200", "100"]]

enunciado: "En una fase de recuperación activa (50% de la FCM), una persona con FCM de {datos[idx][0]} lpm debe mantener un ritmo de ___ pulsaciones."

respuestas_validas:
  - "90"
  - "100"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La zona de recuperación al 50% se obtiene multiplicando la FCM por 0,50: {datos[idx][0]} × 0,50 = {datos[idx][1]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fatiga", "riesgo"]

respuesta: "fatiga acumulada"
tipo: completar
respuestas_validas:
  - "fatiga acumulada"

enunciado: "Entrenar siempre en la Zona 5 (intensidad máxima) sin períodos de recuperación adecuada provoca una excesiva ___ que impide la supercompensación."

explicacion: |
  El entrenamiento constante al límite no permite que el cuerpo se recupere. La fatiga acumulada impide que el organismo se adapte al estímulo, llevando al sobreentrenamiento.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["adaptacion", "aerobico"]

variables:
  escenario: uno_de([["Zona 2", "base aeróbica"], ["Zona 4", "tolerancia al lactato"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "base aeróbica"
  - "tolerancia al lactato"

enunciado: "Si un atleta entrena en la {escenario[0]}, la capacidad que principalmente está construyendo es su ___."

explicacion: |
  Las zonas de baja intensidad (como la Zona 2) desarrollan la base aeróbica; las zonas altas (como la Zona 4) mejoran la tolerancia al lactato — cada zona construye algo distinto.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["planificacion", "estímulo"]

respuesta: "distinto"
tipo: completar
respuestas_validas:
  - "distinto"

enunciado: "En una planificación deportiva, cada zona de frecuencia cardíaca tiene un objetivo fisiológico ___."

explicacion: |
  Cada zona entrena un sistema diferente: las zonas bajas mejoran la resistencia aeróbica, mientras que las zonas altas mejoran la potencia y la tolerancia al lactato. Entrenar siempre igual limita el progreso.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["lesiones", "seguridad"]

respuesta: "lesión"
tipo: completar
respuestas_validas:
  - "lesión"
  - "lesion"

enunciado: "El uso constante de intensidades máximas (Zona 5) aumenta significativamente el riesgo de ___ debido al impacto mecánico y el estrés sistémico."

explicacion: |
  La intensidad máxima genera una carga muy alta en articulaciones, tendones y el sistema nervioso central, lo que eleva el riesgo de sufrir una lesión si no hay variabilidad.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "avanzado"
  tags: ["periodizacion", "eficiencia"]

respuesta: "variedad"
tipo: completar
respuestas_validas:
  - "variedad"

enunciado: "Para evitar el estancamiento y mejorar el rendimiento, la clave de un entrenamiento efectivo es la ___ de intensidades (alternar zonas altas y bajas, no entrenar siempre igual)."

explicacion: |
  La periodización implica alternar cargas altas con cargas bajas. Esta variedad de estímulos permite que el cuerpo se adapte sin llegar al agotamiento crónico.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fcm", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["15", "205"], ["17", "203"], ["14", "206"]]

enunciado: "Si una persona tiene {datos[idx][0]} años, ¿cuál es su Frecuencia Cardíaca Máxima (FCM) aproximada, usando la fórmula 220 - edad?"

opciones_explicitas: ["205", "203", "206", "200"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La fórmula básica es 220 - edad. Para una persona de {datos[idx][0]} años: 220 - {datos[idx][0]} = {datos[idx][1]} ppm.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["zonas", "aerobico"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["180", "108"], ["190", "114"], ["200", "120"]]

enunciado: "Una persona tiene una FCM de {datos[idx][0]} lpm. Si su zona de entrenamiento aeróbica (Zona 2) es el 60% al 70% de su FCM, ¿cuál es el límite inferior (60%) de su zona?"

opciones_explicitas: ["108", "114", "120", "100"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El límite inferior se calcula multiplicando la FCM por 0,60: {datos[idx][0]} × 0,60 = {datos[idx][1]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["zonas", "intensidad"]

enunciado: "Una persona con FCM de 200 lpm realiza un ejercicio donde su frecuencia cardíaca es de 170 ppm. ¿A qué porcentaje aproximado de su FCM corresponde?"

opciones_explicitas: ["80%", "85%", "90%", "75%"]
respuesta: "85%"
tipo: mc

explicacion: |
  Porcentaje = (170 / 200) × 100 = 85%.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "avanzado"
  tags: ["zonas", "anaerobico"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["180", "162"], ["190", "171"], ["200", "180"]]

enunciado: "Una persona tiene una FCM de {datos[idx][0]} lpm. La Zona 4 (Anaeróbica) es el 80% al 90% de la FCM. ¿Cuál es el límite superior (90%) de su zona?"

respuestas_validas:
  - "162"
  - "171"
  - "180"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El 90% de {datos[idx][0]} es {datos[idx][1]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fcm", "edad"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["12", "208", "28"], ["18", "202", "22"], ["15", "205", "25"]]

enunciado: "Si comparamos a una persona de {datos[idx][0]} años (FCM {datos[idx][1]} lpm) con una de 40 años (FCM 180 lpm), ¿cuál es la diferencia de pulsaciones máximas?"

opciones_explicitas: ["28", "22", "25", "30"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  FCM de la persona más joven: {datos[idx][1]}. FCM de la persona de 40 años: 180. Diferencia: {datos[idx][1]} - 180 = {datos[idx][2]}.
```

## Sección: imc-indice-masa-corporal (25 preguntas)

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["calculo", "salud"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["70", "1.75", "22.86"], ["60", "1.60", "23.44"], ["85", "1.80", "26.23"]]

respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "22.86"
  - "23.44"
  - "26.23"

enunciado: "Una persona tiene un peso de {datos[idx][0]} kg y una altura de {datos[idx][1]} m. ¿Cuál es su Índice de Masa Corporal (IMC), redondeado a dos decimales?"

explicacion: |
  El IMC se calcula dividiendo el peso en kilogramos por la estatura en metros al cuadrado: {datos[idx][0]} / ({datos[idx][1]} × {datos[idx][1]}) = {datos[idx][2]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["clasificacion", "salud"]

variables:
  idx: uno_de([0, 1, 2])
  caso: [["22.5", "Normal"], ["27.0", "Sobrepeso"], ["31.0", "Obesidad"]]

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["Bajo peso", "Normal", "Sobrepeso", "Obesidad"]

enunciado: "Si una persona tiene un IMC de {caso[idx][0]}, según los estándares de la OMS, ¿cuál es su estado nutricional?"

explicacion: |
  Un IMC de {caso[idx][0]} se clasifica como {caso[idx][1]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["teoria"]

respuesta: "peso / (altura * altura)"
tipo: completar
respuestas_validas:
  - "peso / (altura * altura)"

enunciado: "La fórmula matemática para calcular el IMC es: ___"

explicacion: |
  La fórmula es el peso dividido por la altura elevada al cuadrado.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["65", "1.70", "22.5"], ["90", "1.75", "29.4"], ["50", "1.60", "19.5"]]

respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "22.5"
  - "29.4"
  - "19.5"

enunciado: "Calcula el IMC de una persona que pesa {datos[idx][0]} kg y mide {datos[idx][1]} m (resultado con un decimal)."

explicacion: |
  El cálculo es {datos[idx][0]} / ({datos[idx][1]} × {datos[idx][1]}) = {datos[idx][2]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  idx: uno_de([0, 1, 2])
  perfil: [["16.0", "Bajo peso"], ["21.0", "Normal"], ["35.0", "Obesidad"]]

respuesta: perfil[idx][1]
tipo: mc
opciones_explicitas: ["Bajo peso", "Normal", "Sobrepeso", "Obesidad"]

enunciado: "Un estudiante tiene un IMC de {perfil[idx][0]}. ¿Cuál es su categoría?"

explicacion: |
  Para un IMC de {perfil[idx][0]}, la categoría correspondiente es {perfil[idx][1]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["imc", "salud", "categorias"]

variables:
  datos: [["22.5", "Normal"], ["17.0", "Bajo peso"], ["32.0", "Obesidad"], ["27.5", "Sobrepeso"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Si una persona tiene un IMC de {datos[idx][0]}, su categoría de salud es ___."

respuestas_validas:
  - "Normal"
  - "Bajo peso"
  - "Obesidad"
  - "Sobrepeso"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El IMC se clasifica según los rangos establecidos por la OMS: bajo peso (menos de 18,5), normal (18,5–24,9), sobrepeso (25–29,9), obesidad (30 o más).
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["imc", "salud", "categorias"]

variables:
  datos: [["28.0", "Sobrepeso"], ["15.0", "Bajo peso"], ["21.0", "Normal"], ["35.0", "Obesidad"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Un individuo con un IMC de {datos[idx][0]} se encuentra en la categoría de:"

opciones_explicitas: ["Bajo peso", "Normal", "Sobrepeso", "Obesidad"]

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Un IMC de {datos[idx][0]} cae dentro del rango de {datos[idx][1]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["imc", "salud", "categorias"]

enunciado: "Según los estándares de salud, el límite inferior del rango de IMC considerado 'Normal' es ___."

respuestas_validas:
  - "18.5"
respuesta: "18.5"
tipo: completar

explicacion: |
  El rango de peso normal (saludable) según la OMS es un IMC entre 18,5 y 24,9.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["imc", "salud", "categorias"]

variables:
  datos: [["31.2", "Obesidad"], ["26.0", "Sobrepeso"], ["22.0", "Normal"], ["16.5", "Bajo peso"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Si una persona presenta un IMC de {datos[idx][0]}, ¿cuál es su clasificación?"

opciones_explicitas: ["Bajo peso", "Normal", "Sobrepeso", "Obesidad"]

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Un IMC mayor o igual a 30 se clasifica como obesidad; entre 25 y 29,9 como sobrepeso; entre 18,5 y 24,9 como normal; menos de 18,5 como bajo peso.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["imc", "salud", "categorias"]

variables:
  datos: [["16.2", "Bajo peso"], ["20.0", "Normal"], ["28.0", "Sobrepeso"], ["31.0", "Obesidad"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Un valor de IMC de {datos[idx][0]} indica que la persona está en la categoría de ___."

respuestas_validas:
  - "Bajo peso"
  - "Normal"
  - "Sobrepeso"
  - "Obesidad"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El bajo peso se define con un IMC inferior a 18,5.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["limitaciones", "musculo"]

enunciado: "Un atleta de alto rendimiento con una masa muscular muy desarrollada puede presentar un IMC elevado, pero esto no significa necesariamente que tenga exceso de tejido adiposo (grasa), ya que el IMC no distingue masa muscular de masa ___."

respuestas_validas:
  - "grasa"
respuesta: "grasa"
tipo: completar

explicacion: |
  El IMC es un indicador general que sólo relaciona peso y altura. Como el músculo es más denso que la grasa, una persona muy musculosa puede tener un IMC alto sin tener exceso de grasa corporal.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["distribucion", "localizacion"]

enunciado: "Una limitación importante del IMC es que no indica la ___ de la grasa corporal, es decir, no permite saber si la grasa se encuentra acumulada en la zona abdominal o en otras partes del cuerpo."

respuestas_validas:
  - "distribución"
  - "distribucion"
respuesta: "distribución"
tipo: completar

explicacion: |
  El IMC es un valor global. No puede determinar la localización de la grasa, lo cual es crucial para la salud (la grasa abdominal es un factor de riesgo mayor).
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["composicion", "limitacion"]

enunciado: "Si comparamos a dos personas con el mismo IMC, pero una es deportista y la otra es sedentaria, el IMC podría ser engañoso porque no mide la ___ corporal."

respuestas_validas:
  - "composición"
  - "composicion"
respuesta: "composición"
tipo: completar

explicacion: |
  La composición corporal se refiere a la proporción de masa magra (músculos, huesos, órganos) y masa grasa. El IMC ignora esta distinción.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["falso_positivo"]

enunciado: "El IMC puede dar un resultado de 'sobrepeso' en una persona que es físicamente muy sana y tiene un porcentaje de grasa bajo, simplemente porque su masa muscular es muy pesada. A este fenómeno se le conoce como un ___ del indicador."

respuestas_validas:
  - "falso positivo"
respuesta: "falso positivo"
tipo: completar

explicacion: |
  Cuando el indicador señala un problema de salud que no existe (debido a la masa muscular), estamos ante un falso positivo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["limitaciones", "densidad"]

enunciado: "El IMC no tiene en cuenta la ___ ósea ni la densidad de los tejidos, lo que lo hace menos preciso en personas con estructuras óseas muy grandes o muy pequeñas."

respuestas_validas:
  - "densidad"
respuesta: "densidad"
tipo: completar

explicacion: |
  La densidad ósea y la estructura esquelética influyen en el peso total, pero el IMC no puede diferenciarlas de la grasa o el músculo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["conceptos", "salud"]

tipo: mc
opciones_explicitas: ["Un diagnóstico médico definitivo", "Un indicador de salud individual", "Un filtro poblacional rápido", "Una medida de grasa corporal exacta"]

respuesta: "Un filtro poblacional rápido"

enunciado: "El Índice de Masa Corporal (IMC) se utiliza principalmente en salud pública como:"

explicacion: |
  El IMC es una herramienta de tamizaje rápida y barata para estudiar poblaciones enteras, no un diagnóstico médico individual preciso.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["crecimiento", "percentiles"]

tipo: vf
respuesta: falso

enunciado: "El cálculo del IMC en niños y adolescentes debe interpretarse de la misma forma que en adultos, sin considerar la edad o el sexo."

explicacion: |
  Falso. En personas en crecimiento se usan tablas de percentiles según edad y sexo, no las categorías fijas usadas en adultos.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["percentiles", "crecimiento"]

tipo: mc
opciones_explicitas: ["Percentiles", "Escala de colores", "Un número fijo", "Un diagnóstico clínico"]

respuesta: "Percentiles"

enunciado: "Para evaluar el estado nutricional en personas en etapa de crecimiento, el IMC se debe comparar con:"

explicacion: |
  Se usan tablas de percentiles específicas por edad y sexo, porque el cuerpo de niños y adolescentes cambia de proporciones constantemente durante el crecimiento.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "avanzado"
  tags: ["limitaciones", "composición_corporal"]

tipo: vf
respuesta: verdadero

enunciado: "Un atleta con una masa muscular muy elevada puede presentar un IMC alto sin que esto signifique necesariamente exceso de grasa corporal."

explicacion: |
  Verdadero. El músculo pesa más que la grasa en el mismo volumen, así que el IMC (que sólo usa peso y altura) puede clasificar mal a una persona muy musculosa.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["diagnóstico", "salud"]

tipo: mc
opciones_explicitas: ["Es un diagnóstico médico individual", "Es una herramienta de tamizaje", "Es una medida de densidad ósea", "Es un examen de sangre"]

respuesta: "Es una herramienta de tamizaje"

enunciado: "Debido a que no distingue entre masa muscular y masa grasa, el IMC se considera una herramienta de:"

explicacion: |
  El IMC filtra rápido a nivel poblacional, pero no reemplaza una evaluación médica completa de composición corporal.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["formula", "potencias"]

opciones_explicitas: ["peso / altura", "peso * altura", "peso / (altura * altura)", "peso / (altura + altura)"]
respuesta: "peso / (altura * altura)"
tipo: mc

enunciado: "Para calcular el Índice de Masa Corporal (IMC), se utiliza el peso en kilogramos dividido por el cuadrado de la altura en metros. ¿Cuál es la expresión matemática correcta?"

explicacion: |
  El IMC relaciona la masa con la superficie corporal. Como la altura es una medida lineal, debe elevarse al cuadrado para que la unidad de medida sea coherente con la superficie.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["calculo", "aplicacion"]

variables:
  idx: uno_de([0, 1])
  escenario: [["70", "1.75", "22.86"], ["85", "1.80", "26.23"]]

enunciado: "Un estudiante tiene un peso de {escenario[idx][0]} kg y una altura de {escenario[idx][1]} m. ¿Cuál es su IMC (redondeado a dos decimales)?"

opciones_explicitas: ["22.86", "26.23", "30.15", "22.40"]
respuesta: escenario[idx][2]
tipo: mc

explicacion: |
  El cálculo es: {escenario[idx][0]} / ({escenario[idx][1]} × {escenario[idx][1]}) = {escenario[idx][2]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["clasificacion", "categorias"]

variables:
  idx: uno_de([0, 1, 2])
  caso: [["22.0", "Normal"], ["32.0", "Obesidad"], ["16.0", "Bajo peso"]]

enunciado: "Si una persona tiene un IMC de {caso[idx][0]}, ¿cuál es su categoría según la OMS?"

opciones_explicitas: ["Bajo peso", "Normal", "Sobrepeso", "Obesidad"]
respuesta: caso[idx][1]
tipo: mc

explicacion: |
  El valor {caso[idx][0]} corresponde a la categoría {caso[idx][1]} según los rangos oficiales de la OMS.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "avanzado"
  tags: ["logica", "potencias"]

opciones_explicitas: ["sube", "baja", "se mantiene", "se duplica"]
respuesta: "baja"
tipo: mc

enunciado: "Analizando la fórmula del IMC, si una persona mantiene su mismo peso pero su altura aumenta, ¿qué le pasa a su IMC?"

explicacion: |
  Como la altura está en el denominador y elevada al cuadrado, un aumento en la altura provoca una disminución en el resultado del IMC.
```

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["procedimiento", "pasos"]

variables:
  idx: uno_de([0, 1])
  datos: [["80", "1.70", "27.68"], ["60", "1.60", "23.44"]]

enunciado: "Para un sujeto de {datos[idx][0]} kg y {datos[idx][1]} m, el primer paso es elevar la altura al cuadrado; el segundo paso es dividir el peso por ese resultado. El IMC final es ___."

opciones_explicitas: ["27.68", "23.44", "30.00", "25.50"]
respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "27.68"
  - "23.44"

explicacion: |
  {datos[idx][1]} × {datos[idx][1]}, y luego {datos[idx][0]} dividido por ese resultado, da {datos[idx][2]}.
```

