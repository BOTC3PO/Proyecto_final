# Historia Profunda — Estaciones del año (cuestionario, 25 preguntas VBLang)

> Tema: `AS2`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: pregunta cuyo `enunciado`
> interpolaba directamente el valor de `respuesta:` (revelaba la
> respuesta antes de contestar) — reescrita para que el enunciado sólo
> muestre el dato de un hemisferio y pregunte por el otro; `respuesta:`
> envuelta en llaves sueltas (`{escenario[2]}`) y enunciado que repetía
> el mismo hemisferio dos veces en vez de contrastar norte/sur —
> corregido; pregunta `completar` con dos blancos (`___` x2) pero una
> sola `respuesta`/`respuestas_validas` — reducida a un solo blanco;
> `tipo: input` (no confirmado en el DSL) usado dos veces — normalizado
> a `completar`; `respuesta:` con doble sorteo encadenado
> (`uno_de([verdadero,falso])[condicion]`, indexando el resultado de un
> `uno_de` con una condición) — inválido, reescrita como pregunta fija
> (la afirmación siempre es verdadera para el enunciado tal como está
> planteado, no dependía de ningún sorteo real); operador ternario
> `?:` dentro de `respuesta:` — inválido, reescrita como pregunta fija
> (mismo motivo: no había sorteo real detrás); pregunta cuyo enunciado
> afirmaba algo cierto sólo para UNA de las dos opciones sorteadas por
> `uno_de` (afirmaba "diferencia estacional mínima" también para zona
> "templada", donde es falso) — corregida para no sortear, sólo habla
> de la zona ecuatorial; `respuestas_validas` con una opción incorrecta
> mezclada («constancia» junto a «cambio») — acotada a la única
> respuesta correcta; `tipo: ordenar` usado sobre una lista de
> *factores* sin secuencia real (no son pasos ordenados) — reescrita
> como `mc` preguntando cuál es el factor principal; **bug recurrente
> de doble sorteo/doble indexado** (`tabla: uno_de([[...],[...]])` ya
> devuelve UNA fila sorteada, y encima se declaraba un `idx:
# uno_de(...)` separado e indexaba `tabla[idx]` sobre esa fila ya
> elegida, fuera de rango) — repetido en 4 preguntas del último lote;
> corregido en todas usando el patrón correcto: `datos: [[...],
> [...]]` como tabla literal completa + `idx: uno_de([0,1,...])`
> indexando `datos[idx]`; pregunta `ordenar` cuya respuesta fija no
> coincidía con el punto de partida variable declarado en el
> enunciado (`{inicio}` sorteado pero la lista de respuesta siempre
> empezaba en "Verano") — quitado el sorteo, enunciado fijo.

---

### 1 — El mito de la distancia

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["astronomia", "mitos"]

respuesta: falso
tipo: vf

enunciado: "El cambio de las estaciones del año ocurre principalmente porque la Tierra se acerca o se aleja del Sol en su órbita elíptica."

explicacion: |
  Falso. La distancia al Sol no es la causa de las estaciones: de hecho la Tierra está más cerca del Sol en enero (verano austral/invierno boreal) que en julio. La causa real es la inclinación del eje terrestre.
```

### 2 — El factor determinante

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["eje_terrestre", "inclinacion"]

variables:
  angulo_eje: 23.5

respuesta: "inclinación del eje"
tipo: completar
respuestas_validas:
  - "inclinación del eje"
  - "inclinación terrestre"
  - "eje inclinado"

enunciado: "La causa fundamental de que existan las estaciones es la ___ de la Tierra respecto a su plano orbital."

explicacion: |
  La inclinación de aproximadamente {angulo_eje}° hace que la radiación solar se distribuya de forma desigual sobre la superficie terrestre a lo largo del año.
```

### 3 — Ángulo de incidencia

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["radiacion", "angulo"]

respuesta: "mayor intensidad"
tipo: mc
opciones_explicitas: ["menor intensidad", "mayor intensidad", "misma intensidad", "intensidad nula"]

enunciado: "Cuando un hemisferio está inclinado hacia el Sol, los rayos solares inciden con un ángulo más perpendicular y la energía se concentra en un área menor, resultando en una ___ de radiación por unidad de superficie."

explicacion: |
  Al incidir de forma más perpendicular, la energía solar se concentra en un área más pequeña, lo que aumenta la temperatura local y genera el verano.
```

### 4 — La paradoja de los hemisferios

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "avanzado"
  tags: ["hemisferios", "estaciones"]

variables:
  idx: uno_de([0, 1])
  escenario: [["verano", "invierno"], ["invierno", "verano"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["verano", "invierno"]

enunciado: "Debido a la inclinación del eje, si el hemisferio norte está experimentando {escenario[idx][0]}, ¿qué estación experimenta al mismo tiempo el hemisferio sur?"

explicacion: |
  La inclinación hace que un hemisferio reciba más energía directa mientras el otro recibe rayos más oblicuos y dispersos, creando estaciones opuestas y simultáneas.
```

### 5 — Geometría solar

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["luz_solar"]

respuesta: "perpendicular"
tipo: completar
respuestas_validas:
  - "perpendicular"
  - "directa"
  - "recta"

enunciado: "En el solsticio de verano, el sol alcanza su máxima altura en el cielo porque los rayos inciden de forma casi ___ sobre el trópico correspondiente."

explicacion: |
  La máxima concentración de calor ocurre cuando el ángulo de incidencia es lo más cercano posible a los 90 grados (perpendicular).
```

### 6 — Inclinación y estaciones

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["astronomia", "estaciones"]

tipo: mc
opciones_explicitas: ["Verano", "Invierno", "Equinoccio"]

enunciado: "Cuando un hemisferio terrestre está inclinado hacia el Sol, recibe mayor radiación solar y experimenta la estación de ___."

respuesta: "Verano"

explicacion: |
  La inclinación del eje terrestre hacia el Sol durante un periodo determinado provoca que la radiación sea más directa y los días sean más largos, definiendo el verano.
```

### 7 — Hemisferios opuestos

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["hemisferios", "estaciones"]

variables:
  idx: uno_de([0, 1])
  escenario: [["Norte", "Sur", "Verano", "Invierno"], ["Sur", "Norte", "Invierno", "Verano"]]

tipo: mc
opciones_explicitas: ["Verano", "Invierno"]

enunciado: "Si en el hemisferio {escenario[idx][0]} es {escenario[idx][2]}, ¿qué estación es al mismo tiempo en el hemisferio {escenario[idx][1]}?"

respuesta: escenario[idx][3]

explicacion: |
  Las estaciones están invertidas entre hemisferios: cuando uno está inclinado hacia el Sol (verano), el otro está inclinado alejándose de él (invierno).
```

### 8 — Características del verano

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["radiacion", "duracion_dia"]

tipo: completar
respuestas_validas:
  - "mayor"

enunciado: "Debido a la inclinación hacia el Sol, el verano se caracteriza por recibir una radiación ___ que el resto del año."

respuesta: "mayor"

explicacion: |
  La inclinación aumenta la densidad de energía solar por unidad de superficie y prolonga la duración de la luz solar diaria.
```

### 9 — Secuencia de estaciones

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["ciclo", "orden"]

tipo: ordenar
opciones_explicitas: ["Verano", "Otoño", "Invierno", "Primavera"]

enunciado: "Ordena cronológicamente las estaciones del año comenzando desde el verano."

respuesta_orden: ["Verano", "Otoño", "Invierno", "Primavera"]

explicacion: |
  El ciclo estacional sigue un orden regular determinado por la posición de la Tierra en su órbita.
```

### 10 — Relación de energía

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["energia", "sol"]

tipo: completar
respuestas_validas:
  - "menor"

enunciado: "Si la radiación solar es máxima en el verano, en el invierno la radiación solar es ___ que en el verano."

respuesta: "menor"

explicacion: |
  En el invierno, la inclinación aleja el hemisferio del Sol, resultando en una menor intensidad de radiación solar.
```

### 11 — Duración del día en equinoccios

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["astronomia", "estaciones"]

respuesta: "igual"
tipo: completar
respuestas_validas:
  - "igual"

enunciado: "Durante los equinoccios de primavera y de otoño, la duración del día y la noche es ___."

explicacion: |
  En los equinoccios, el Sol está directamente sobre el ecuador terrestre, lo que provoca que el día y la noche tengan aproximadamente la misma duración.
```

### 12 — Solsticio de verano en el hemisferio norte

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["solsticio", "verano"]

respuesta: verdadero
tipo: vf

enunciado: "Si nos encontramos en el Hemisferio Norte, el solsticio de verano coincide con el día más largo del año."

explicacion: |
  En el Hemisferio Norte, el solsticio de verano marca el punto donde el Sol alcanza su máxima declinación norte, resultando en el día más largo del año.
```

### 13 — Secuencia de estaciones astronómicas

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["secuencia", "estaciones"]

respuesta_orden: ["equinoccio de primavera", "solsticio de verano", "equinoccio de otoño", "solsticio de invierno"]
tipo: ordenar
opciones_explicitas: ["equinoccio de primavera", "solsticio de verano", "equinoccio de otoño", "solsticio de invierno"]

enunciado: "Ordena cronológicamente las estaciones del año comenzando por el equinoccio de primavera:"

explicacion: |
  El ciclo estándar comienza con la primavera (equinoccio), sigue con el verano (solsticio), luego el otoño (equinoccio) y termina con el invierno (solsticio).
```

### 14 — El día más corto

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["solsticio", "invierno"]

respuesta: "solsticio de invierno"
tipo: mc
opciones_explicitas: ["solsticio de verano", "equinoccio de primavera", "equinoccio de otoño", "solsticio de invierno"]

enunciado: "¿En qué momento astronómico ocurre el día más corto del año (en el hemisferio correspondiente)?"

explicacion: |
  El solsticio de invierno es el momento en que el hemisferio está más inclinado lejos del Sol, resultando en el día más corto y la noche más larga.
```

### 15 — Duración relativa en el solsticio de verano

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "avanzado"
  tags: ["calculo", "astronomia"]

respuesta: "mayor"
tipo: completar
respuestas_validas:
  - "mayor"

enunciado: "Si estamos en el solsticio de verano (en el hemisferio correspondiente), la duración del día es ___ que la de la noche."

explicacion: |
  En el solsticio de verano, la inclinación de la Tierra permite que ese hemisferio reciba luz solar por más tiempo, haciendo que el día sea más largo que la noche.
```

### 16 — Diferencia estacional cerca del ecuador

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["geografia", "clima", "latitud"]

respuesta: verdadero
tipo: vf

enunciado: "En las regiones de clima ecuatorial, la diferencia estacional de temperatura es mínima porque el ángulo de incidencia solar se mantiene casi constante durante todo el año."

explicacion: |
  En las zonas ecuatoriales, el sol incide de forma casi perpendicular todo el año, manteniendo temperaturas estables. En las zonas templadas y polares, en cambio, el ángulo cambia mucho más a lo largo del año, provocando estaciones marcadas.
```

### 17 — El ángulo de incidencia en zonas polares

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["astronomia", "clima"]

respuesta: "cambio"
tipo: completar
respuestas_validas:
  - "cambio"

enunciado: "En las zonas polares, la marcada diferencia estacional se debe a que el ángulo de incidencia solar experimenta un gran ___ durante el ciclo anual."

explicacion: |
  El movimiento de traslación combinado con la inclinación del eje hace que en los polos el ángulo de incidencia solar varíe drásticamente, causando cambios extremos de temperatura.
```

### 18 — Comparativa de variabilidad térmica

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["clima", "latitud"]

variables:
  idx: uno_de([0, 1])
  datos: [["Ecuador", "mínima"], ["Zonas Templadas", "máxima"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["mínima", "máxima"]

enunciado: "Considerando el escenario de {datos[idx][0]}, la variación estacional de la temperatura es ___."

explicacion: |
  En el Ecuador, la radiación solar es constante durante todo el año, por lo que la variación térmica es mínima; en las zonas templadas, en cambio, la variación es máxima.
```

### 19 — El factor principal de la estacionalidad

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "avanzado"
  tags: ["astronomia", "geografia"]

respuesta: "inclinación del eje"
tipo: mc
opciones_explicitas: ["inclinación del eje", "distancia al Sol", "velocidad de rotación", "forma de la órbita"]

enunciado: "De los siguientes factores, ¿cuál es el que determina principalmente la variación del ángulo de incidencia solar y, con ella, la estacionalidad en cada latitud?"

explicacion: |
  La inclinación del eje terrestre es el factor principal que hace que el ángulo de incidencia varíe según la latitud y la época del año, no la distancia al Sol.
```

### 20 — Estabilidad angular en el ecuador

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["clima"]

respuesta: "estabilidad"
tipo: completar
respuestas_validas:
  - "estabilidad"
  - "constancia"

enunciado: "En el ecuador, la ausencia de estaciones térmicas marcadas se debe principalmente a la ___ del ángulo de incidencia solar a lo largo del año."

explicacion: |
  A diferencia de las latitudes altas, en el ecuador el ángulo de incidencia solar casi no cambia entre enero y julio, así que no hay una estación notablemente más fría o más cálida que otra.
```

### 21 — Estaciones opuestas según mes y hemisferio

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["astronomia", "hemisferios"]

variables:
  idx: uno_de([0, 1, 2, 3])
  datos: [["Diciembre", "Verano", "Hemisferio Sur"], ["Junio", "Invierno", "Hemisferio Sur"], ["Diciembre", "Verano", "Hemisferio Norte"], ["Junio", "Invierno", "Hemisferio Norte"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Verano", "Invierno", "Otoño", "Primavera"]

enunciado: "Si nos encontramos en el mes de {datos[idx][0]} y estamos en el {datos[idx][2]}, ¿qué estación del año estamos experimentando?"

explicacion: |
  En el Hemisferio Sur, el sol incide más directamente sobre el Trópico de Capricornio en diciembre (verano) y sobre el Trópico de Cáncer en junio (invierno); en el Hemisferio Norte es al revés.
```

### 22 — El solsticio de invierno según hemisferio

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["astronomia", "solsticio"]

variables:
  idx: uno_de([0, 1])
  datos: [["Solsticio de Junio", "Invierno", "Hemisferio Norte"], ["Solsticio de Diciembre", "Invierno", "Hemisferio Sur"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Verano", "Invierno", "Otoño", "Primavera"]

enunciado: "Durante el {datos[idx][0]}, en el {datos[idx][2]} la duración del día es la más corta del año. Esto define la estación de:"

explicacion: |
  El solsticio de invierno marca el inicio de la estación más fría en el hemisferio correspondiente, debido a la inclinación del eje terrestre.
```

### 23 — Comparativa de estaciones entre hemisferios

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["comparacion", "hemisferios"]

variables:
  idx: uno_de([0, 1])
  datos: [["Primavera", "Otoño"], ["Otoño", "Primavera"]]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Primavera"
  - "Otoño"

enunciado: "Si en el Hemisferio Norte estamos en la estación de {datos[idx][0]}, en el Hemisferio Sur estamos en la estación de ___."

explicacion: |
  Las estaciones son opuestas entre hemisferios debido a la inclinación del eje de la Tierra respecto al plano de su órbita.
```

### 24 — El equinoccio según hemisferio

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["equinoccio", "astronomia"]

variables:
  idx: uno_de([0, 1])
  datos: [["Equinoccio de Marzo", "Primavera", "Hemisferio Norte"], ["Equinoccio de Septiembre", "Otoño", "Hemisferio Norte"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Primavera", "Otoño", "Verano", "Invierno"]

enunciado: "En el {datos[idx][0]} en el {datos[idx][2]}, el día y la noche tienen la misma duración. Esto marca el inicio de la:"

explicacion: |
  Los equinoccios (marzo y septiembre) representan los momentos en que el sol cruza el ecuador celeste, equilibrando la luz y la sombra en todo el planeta.
```

### 25 — Secuencia estacional completa

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["secuencia", "ciclos"]

respuesta_orden: ["Verano", "Otoño", "Invierno", "Primavera"]
tipo: ordenar
opciones_explicitas: ["Verano", "Otoño", "Invierno", "Primavera"]

enunciado: "Ordena las estaciones siguiendo el ciclo natural comenzando desde el Verano."

explicacion: |
  El ciclo astronómico sigue siempre el mismo orden: Verano → Otoño → Invierno → Primavera (y vuelve a empezar).
```
