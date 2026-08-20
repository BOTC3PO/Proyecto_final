# Examen jefe — De Grecia al Absolutismo

> Logro #99. Completaste el parcial de Historia profunda con nota de 10. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **123 preguntas totales** en 5/5 secciones.

---

## Sección: absolutismo-europeo (24 preguntas)

```
### 2 — Teoría del derecho divino (Completa)
```

```
### 3 — Edicto de Fontainebleau (VF)
```

```
### 4 — El Palacio de Versalles (MC)
```

```
### 5 — Paz de Westfalia (VF)
```

```
### 6 — Colbertismo (Completar)
```

```
### 7 — Carlos II de España (MC)
```

```
### 8 — Revolución Gloriosa (VF)
```

```
### 9 — Pedro I de Rusia (MC)
```

```
### 10 — Levantamiento de los Pugachev (VF)
```

```
### 11 — Edicto de Fontainebleau (Completar)
```

```
### 12 — Carlos V y la Reforma (VF)
```

```
### 13 — Richelieu y los Hugenotes (MC)
```

```
### 14 — Leyes de Indias (VF)
```

```
### 15 — Federico II de Prusia (MC)
```

```
### 16 — Guerra de los Ochenta Años (VF)
```

```
### 17 — Catalina de Médici (Completar)
```

```
### 18 — José II de Austria (MC)
```

```
### 19 — Tratado de Utrecht (VF)
```

```
### 20 — Mazarino y las Frondas (MC)
```

```
### 21 — Ley Sálica (VF)
```

```
### 22 — Guillermo de Orange (Completar)
```

```
### 23 — Pedro I y la Reforma del Vestuario (VF)
```

```
### 24 — Enrique IV y la Paz de Vervins (MC)
```

```
### 25 — Despotismo Ilustrado en España (VF)
```

## Sección: agujeros-negros (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["estrellas", "supernova", "gravedad"]

respuesta: "supernova"
tipo: completar
respuestas_validas: ["supernova"]

enunciado: "Un agujero negro se forma cuando una estrella muy masiva colapsa gravitacionalmente tras agotar su combustible nuclear y explotar como una ___."

explicacion: |
  Cuando las estrellas masivas agotan su combustible, la presión hacia afuera cesa y la gravedad gana la batalla, provocando una explosión catastrófica llamada supernova.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["gravedad", "fuerza", "colapso"]

variables:
  fuerza_dominante: uno_de(["gravedad", "electromagnetismo", "fuerza_nuclear_fuerte"])
  idx: uno_de([0, 1, 2])

respuesta: fuerza_dominante[idx
tipo: mc
opciones_explicitas: ["gravedad", "electromagnetismo", "fuerza_nuclear_fuerte"]

enunciado: "Durante el colapso de una estrella masiva que da origen a un agujero negro, ¿qué fuerza es la responsable de vencer la presión de la fusión nuclear y comprimir la materia?"

explicacion: |
  La gravedad es la fuerza fundamental que, al no encontrar resistencia por la falta de fusión nuclear, colapsa el núcleo de la estrella hacia un punto de densidad infinita.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["ciclo_estelar", "combustible"]

respuesta: "agotado"
tipo: completar
respuestas_validas: ["agotado"]

enunciado: "El proceso de formación de un agujero negro comienza cuando el combustible nuclear de la estrella se ha ___."

explicacion: |
  Sin la energía de la fusión nuclear que empuja hacia afuera, la estrella pierde su equilibrio hidrostático y colapsa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["secuencia", "supernova", "colapso"]

respuesta: ["colapso gravitacional", "supernova", "agujero negro"]
tipo: ordenar
opciones_explicitas: ["colapso gravitacional", "supernova", "agujero negro"]

enunciado: "Ordena cronológicamente los eventos que llevan a la formación de un agujero negro a partir de una estrella masiva:"

explicacion: |
  Primero ocurre el colapso del núcleo, seguido de la explosión de la capa externa (supernova) y finalmente la formación del remanente denso (agujero negro).
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["masa", "estrellas", "supernova"]

variables:
  es_masiva: uno_de([true, false])

respuesta: es_masiva

tipo: mc
opciones_explicitas: [true, false]

enunciado: "Para que una estrella termine su vida como un agujero negro tras una supernova, ¿es necesario que su masa sea muy grande (masiva)?"

explicacion: |
  Solo las estrellas con una masa lo suficientemente grande pueden generar la presión gravitatoria necesaria para colapsar en un agujero negro; las estrellas pequeñas terminan como enanas blancas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["astronomia", "gravedad"]

respuesta: "horizonte de eventos"
tipo: completar
respuestas_validas: ["horizonte de eventos"]

enunciado: "El límite esférico alrededor de un agujero negro más allá del cual la velocidad de escape es mayor que la velocidad de la luz se denomina ___."

explicacion: |
  El horizonte de eventos marca la frontera física donde la gravedad es tan intensa que nada, ni siquiera la radiación electromagnética (luz), puede escapar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["fisica", "luz"]

opciones_explicitas: ["menor que la velocidad de la luz", "igual a la velocidad de la luz", "mayor que la velocidad de la luz"]

respuesta: "mayor que la velocidad de la luz"
tipo: mc

enunciado: "Para que un objeto pueda escapar de un agujero negro tras cruzar su horizonte de eventos, su velocidad debería ser..."

explicacion: |
  Por definición, el horizonte de eventos es la región donde la velocidad de escape necesaria supera la velocidad de la luz ($c$), haciendo que el escape sea físicamente imposible.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["estructura", "singularidad"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un agujero negro de masa estelar", "un agujero negro supermasivo"], ["se forma por el colapso de una estrella masiva", "reside en el centro de las galaxias"]]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["se forma por el colapso de una estrella masiva", "reside en el centro de las galaxias"]

enunciado: "Si estamos analizando {escenario[idx][0]}, es correcto afirmar que este {escenario[idx][1]}."

explicacion: |
  El horizonte de eventos es una propiedad geométrica del espacio-tiempo que depende de la masa del objeto, ya sea que provenga del colapso estelar o de procesos galácticos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["luz", "gravedad"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es posible que un fotón (partícula de luz) escape de la atracción gravitatoria una vez que ha cruzado el horizonte de eventos?"

explicacion: |
  No. La luz es la entidad más rápida del universo y, aun así, queda atrapada por la curvatura extrema del espacio-tiempo en el horizonte de eventos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["proceso", "caida"]

opciones_explicitas: ["Aproximación orbital", "Cruzar el horizonte de eventos", "Colapso hacia la singularidad"]

respuesta: ["Aproximación orbital", "Cruzar el horizonte de eventos", "Colapso hacia la singularidad"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos que experimentaría una partícula que cae hacia un agujero negro:"

pasos:
  - "La partícula se acerca siguiendo una trayectoria curva."
  - "La partícula atraviesa la frontera de no retorno."
  - "La partícula es comprimida hacia el centro matemático de densidad infinita."

explicacion: |
  Primero la partícula orbita o se acerca, luego cruza el horizonte de eventos (sin que un observador externo vea el paso instantáneo, pero para la partícula es un límite real) y finalmente cae hacia la singularidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["estrellas", "evolucion_estelar"]

variables:
  escenario: uno_de([
    ["una estrella de baja masa", "enana blanca"],
    ["una estrella masiva", "estrella de neutrones"],
    ["una estrella supermasiva", "agujero negro"]
  ])

enunciado: "Dependiendo de su masa inicial, el destino de una estrella varía. Una {escenario[0]} puede evolucionar hacia una {escenario[1]}."

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["enana blanca", "estrella de neutrones", "agujero negro"]

explicacion: |
  Las estrellas pequeñas como nuestro Sol terminan su vida como enanas blancas. Solo las estrellas con masas extremadamente altas pueden colapsar hasta formar objetos más densos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["masa", "colapso"]

variables:
  tipo_colapso: uno_de([
    ["estrella de neutrones", "estrella de neutrones"],
    ["agujero negro", "agujero negro"]
  ])

enunciado: "Si el núcleo remanente de una supernova supera el límite de Tolman-Oppenheimer-Volkoff, el colapso gravitatorio no se detiene y se forma un/a {tipo_colapso[0]}."

respuesta: tipo_colapso[1
tipo: completar
respuestas_validas: ["estrella de neutrones", "agujero negro"]

explicacion: |
  Cuando la presión de degeneración de neutrones no puede contrarrestar la gravedad, el objeto colapsa indefinidamente hacia una singularidad, formando un agujero negro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion"]

enunciado: "Ordena el proceso de evolución de una estrella masiva que termina en un agujero negro:"

pasos:
  - "Secuencia principal (fusión de hidrógeno)"
  - "Supernova (colapso del núcleo)"
  - "Agujero negro (singularidad)"

opciones_explicitas: [
    "Secuencia principal (fusión de hidrógeno)",
    "Supernova (colapso del núcleo)",
    "Agujero negro (singularidad)"
  ]

respuesta: [
    "Secuencia principal (fusión de hidrógeno)",
    "Supernova (colapso del núcleo)",
    "Agujero negro (singularidad)"
  ]
tipo: ordenar

explicacion: |
  La evolución sigue un orden lógico: la fusión mantiene el equilibrio, la supernova es el evento explosivo de muerte y el agujero negro es el remanente final.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["remanentes"]

enunciado: "Si una estrella tiene una masa inicial moderada (menor que el límite para una supernova masiva), el remanente final será una ___."

respuesta: enana blanca
tipo: completar
respuestas_validas: ["enana blanca", "estrella de neutrones", "agujero negro"]

explicacion: |
  Las estrellas de masa baja o media expulsan sus capas externas y dejan un núcleo denso llamado enana blanca.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["clasificacion", "densidad"]

variables:
  objeto: uno_de([
    ["enana blanca", "enana blanca"],
    ["estrella de neutrones", "estrella de neutrones"],
    ["agujero negro", "agujero negro"]
  ])

enunciado: "El objeto con la mayor densidad teórica, donde la gravedad impide incluso la salida de la luz, es el/la {objeto[0]}."

respuesta: objeto[1
tipo: mc
opciones_explicitas: ["enana blanca", "estrella de neutrones", "agujero negro"]

explicacion: |
  El agujero negro representa el límite extremo de la densidad, donde la curvatura del espacio-tiempo es infinita en la singularidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["galaxias", "centro_galactico"]

respuesta: "supermasivo"
tipo: completar
respuestas_validas: ["supermasivo"]

enunciado: "A diferencia de los agujeros negros estelares, aquellos que residen en el centro de la mayoría de las galaxias, incluida la nuestra, se denominan agujeros negros ___."

explicacion: |
  Los agujeros negros supermasivos se encuentran en el núcleo de casi todas las galaxias grandes y poseen masas de millones o miles de millones de soles.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["masa", "comparacion"]

variables:
  escenario: uno_de([["estelar", "pequeño"], ["supermasivo", "gigante"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["pequeño", "gigante"]

enunciado: "Considerando la escala de masa, si comparamos un agujero negro estelar con uno situado en el centro de una galaxia, el segundo es un objeto de tamaño ___."

explicacion: |
  Los agujeros negros supermasivos son órdenes de magnitud más masivos que sus contrapartes estelares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["via_lactea", "ubicacion"]

respuesta: "Sagitario A*"
tipo: mc
opciones_explicitas: ["Sagitario A*", "Sirio", "Betelgeuse", "Polaris"]

enunciado: "¿Cómo se denomina al agujero negro supermasivo situado en el centro de nuestra galaxia, la Vía Láctea?"

explicacion: |
  El objeto masivo en el centro de la Vía Láctea es conocido como Sagitario A*.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["evolucion", "masa"]

variables:
  caso: uno_de([["estelar", "10"], ["supermasivo", "1000000"]])

respuesta: caso[1
tipo: completar
tolerancia_abs: 0

enunciado: "Si un agujero negro estelar típico tiene una masa de aproximadamente {caso[0]} veces la masa solar, un agujero negro supermasivo promedio en una galaxia espiral puede tener aproximadamente {caso[1]} de masas solares. Escribe el valor numérico de la segunda escala (sin unidades)."

explicacion: |
  Los agujeros negros supermasivos superan con creces las escalas estelares, alcanzando millones de masas solares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["clasificacion", "origen"]

respuesta: "supermasivo"
tipo: mc
opciones_explicitas: ["estelar", "supermasivo", "primordial"]

enunciado: "Los agujeros negros que se forman por el colapso de estrellas masivas se conocen como estelares. ¿Cuál es la clasificación de aquellos que habitan en el centro de las galaxias y poseen masas extremas?"

explicacion: |
  La distinción principal radica en su masa y su ubicación en el núcleo galáctico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["astronomia", "estrellas"]

variables:
  escenario: uno_de([["8 masas solares", "enana blanca"], ["15 masas solares", "estrella de neutrones"], ["40 masas solares", "agujero negro"]])
  masa_inicial: escenario[0]
  resultado_final: escenario[1]

tipo: mc
opciones_explicitas: ["enana blanca", "estrella de neutrones", "agujero negro"]

enunciado: "Una estrella con una masa inicial de {masa_inicial} evolucionará, tras agotar su combustible, convirtiéndose en un/a ___."

explicacion: |
  El destino de una estrella depende de su masa remanente. Una estrella de {masa_inicial} terminará como un/a {resultado_final}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["fisica_estelar"]

variables:
  caso: uno_de([["1.4", "enana blanca"], ["2.5", "estrella de neutrones"], ["5.0", "agujero negro"]])
  valor: caso[0]
  destino: caso[1]

tipo: completar
respuestas_validas: ["enana blanca", "estrella de neutrones", "agujero negro"]

enunciado: "Si el núcleo remanente de una estrella tiene una masa de {valor} masas solares, el objeto resultante será una ___."

explicacion: |
  El límite de Chandrasekhar (~1.4 M☉) determina si un remanente se convierte en enana blanca o colapsa más allá. En este caso, con {valor} M☉, el destino es {destino}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["evolucion_estelar"]

tipo: ordenar
opciones_explicitas: ["Secuencia principal", "Supernova", "Remanente compacto"]
respuesta: ["Secuencia principal", "Supernova", "Remanente compacto"]

enunciado: "Ordena las etapas evolutivas de una estrella masiva que culminará en un agujero negro:"

explicacion: |
  Las estrellas masivas pasan por la secuencia principal, explotan como supernova y dejan un remanente (agujero negro si la masa es suficiente).
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["astronomia"]

variables:
  datos: [["enana blanca", "presión de degeneración electrónica"], ["estrella de neutrones", "presión de degeneración de neutrones"], ["agujero negro", "colapso gravitatorio total"]]
  idx: uno_de([0, 1, 2])
  objeto: datos[idx][0]
  causa: datos[idx][1]

tipo: mc
opciones_explicitas: ["presión de degeneración electrónica", "presión de degeneración de neutrones", "colapso gravitatorio total"]

enunciado: "Un/a {objeto} se mantiene estable gracias a la {causa}."

explicacion: |
  El mecanismo de soporte depende de la masa: la {causa} es lo que define al/a {objeto}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["densidad", "gravedad"]

variables:
  par: uno_de([["estrella de neutrones", "1.5"], ["agujero negro", "10.0"]])
  tipo_obj: par[0]
  masa_critica: par[1]

tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un objeto tiene una masa de {masa_critica} masas solares y no puede ser sostenido por la presión de degeneración de neutrones, ¿cuántas masas solares (aproximadamente) superan el límite de formación de un agujero negro en este escenario?"

pasos:
  - "Identificar la masa del objeto: {masa_critica} M☉"
  - "Comparar con el límite de Tolman-Oppenheimer-Volkoff (aprox 2-3 M☉)"

explicacion: |
  Al superar el límite crítico de ~3 M☉, la gravedad vence a todas las fuerzas conocidas, resultando en un {tipo_obj}.
```

## Sección: ampliacion-democratica-ley-saenz-pena (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["argentina", "democracia", "ley_saenz_pena"]

opciones_explicitas:
  - "Voto secreto, universal (masculino) y obligatorio"
  - "Voto cantado, restringido y facultativo"
  - "Voto secreto, restringido y obligatorio"
  - "Voto cantado, universal y facultativo"

respuesta: "Voto secreto, universal (masculino) y obligatorio"
tipo: mc

enunciado: "La Ley Sáenz Peña, sancionada en 1912, introdujo un cambio fundamental en el sistema electoral argentino al establecer el voto ___."

explicacion: |
  La Ley 8.831, conocida como Ley Sáenz Peña, transformó la vida política argentina al garantizar el voto secreto, universal (para varones) y obligatorio, terminando con el fraude electoral de la época.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["fraude", "sistema_electoral", "cambio_politico"]

opciones_explicitas:
  - "El sistema de voto cantado"
  - "El sistema de voto secreto"
  - "El sistema de voto obligatorio"
  - "El sistema de voto universal"

respuesta: "El sistema de voto cantado"
tipo: mc

enunciado: "Antes de la reforma de 1912, el sistema predominante que facilitaba el fraude y la coacción era el voto ___."

explicacion: |
  El voto cantado permitía que el elector manifestara su elección en voz alta frente a la autoridad de mesa, lo que facilitaba la intimidación y el control de los votos por parte de los sectores dominantes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["participacion", "sufragio"]

variables:
  idx: uno_de([0, 1])

datos:
  - ["masculino", "masculino"]
  - ["femenino", "femenino"]

respuesta: datos[idx][1
tipo: completar
respuestas_validas:
  - "masculino"
  - "femenino"

enunciado: "En el contexto de 1912, la universalidad del sufragio establecida por la ley se refería únicamente al sexo ___."

explicacion: |
  Aunque la ley fue un avance democrático enorme, la universalidad estaba limitada al género masculino. El sufragio femenino en Argentina se lograría recién en 1947.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "avanzado"
  tags: ["orden", "proceso_historico"]

opciones_explicitas:
  - "Fraude electoral"
  - "Voto cantado"
  - "Ley Sáenz Peña"
  - "Democracia representativa"

respuesta: ["Fraude electoral", "Voto cantado", "Ley Sáenz Peña", "Democracia representativa"]
tipo: ordenar

enunciado: "Ordene cronológicamente los procesos o elementos que definieron la transición hacia la democracia moderna en Argentina:"

explicacion: |
  La secuencia lógica muestra la crisis del sistema de fraude y voto cantado, que llevó a la sanción de la Ley Sáenz Peña y, finalmente, a la consolidación de un sistema de representación más democrático.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["consecuencias", "radicalismo", "poder"]

variables:
  idx: uno_de([0, 1])

escenarios:
  - ["1916", "La llegada de la UCR al poder"]
  - ["1916", "La continuidad del régimen conservador"]

respuesta: escenarios[idx][1
tipo: completar
tolerancia_abs: 0

enunciado: "Gracias a la implementación de la Ley Sáenz Peña, el año ___ marcó ___."

explicacion: |
  La aplicación de la nueva ley permitió que en las elecciones de 1916 la Unión Cívica Radical (UCR) llegara a la presidencia con Hipólito Yrigoyen, rompiendo el monopolio del régimen conservador.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["electoral", "fraude", "argentina"]

respuesta: "voto cantado"
tipo: mc
opciones_explicitas: ["voto secreto", "voto cantado", "voto digital", "voto por sorteo"]

enunciado: "Antes de la sanción de la Ley Sáenz Peña en 1912, el sistema electoral en Argentina se caracterizaba por ser un ___ , lo que facilitaba la presión de los caudillos locales sobre los votantes."

explicacion: |
  El sistema de "voto cantado" obligaba al ciudadano a declarar su elección en voz alta frente a la autoridad de mesa, lo que permitía identificar el voto y aplicar represalias o incentivos, facilitando el fraude sistemático.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["fraude", "oligarquia", "control"]

variables:
  escenario: uno_de([["voto cantado", "manipulación"], ["voto secreto", "transparencia"]])

respuesta: escenario[1
tipo: completar
respuestas_validas: ["manipulación", "transparencia"]

enunciado: "En el régimen de la Generación del '80, la combinación del voto no secreto y la falta de padrones confiables permitía la ___ de los resultados electorales por parte del oficialismo de turno."

explicacion: |
  La falta de secreto en el sufragio permitía que el poder político controlara el comportamiento del elector, asegurando la continuidad de la hegemonía de la oligarquía mediante la manipulación de los resultados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["ley_saenz_pena", "reforma", "democracia"]

respuesta: "universal, secreto y obligatorio"
tipo: completar
respuestas_validas: ["universal, secreto y obligatorio", "opcional, secreto y universal"]

enunciado: "La reforma introducida por la Ley Sáenz Peña estableció que el sufragio debía ser ___."

explicacion: |
  La Ley 8.830 transformó el sistema electoral argentino al establecer tres pilares: el voto debe ser universal (para varones), secreto (para evitar coacciones) y obligatorio (para asegurar la participación masiva).
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["proceso", "ley", "reforma"]

respuesta: ["Crisis del régimen oligárquico", "Presión de la Unión Cívica Radical", "Sanción de la Ley Sáenz Peña"]
tipo: ordenar
opciones_explicitas: ["Crisis del régimen oligárquico", "Presión de la Unión Cívica Radical", "Sanción de la Ley Sáenz Peña"]

enunciado: "Ordene cronológicamente los eventos que llevaron a la democratización del sistema electoral en Argentina:"

explicacion: |
  La crisis del modelo oligárquico y la presión constante de la oposición (especialmente la UCR) forzaron al gobierno de Roque Sáenz Peña a sancionar la ley para legitimar el sistema y evitar una revolución.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "avanzado"
  tags: ["consecuencia", "radicalismo", "voto"]

variables:
  caso: uno_de([["1916", "triunfo de Hipólito Yrigoyen"], ["1916", "triunfo del conservadurismo"]])

respuesta: caso[1
tipo: mc
opciones_explicitas: ["triunfo de Hipólito Yrigoyen", "triunfo del conservadurismo"]

enunciado: "Como consecuencia directa de la implementación de la nueva ley, en las elecciones de {caso[0]} se produjo el ___."

explicacion: |
  La implementación del voto secreto permitió que la Unión Cívica Radical, liderada por Hipólito Yrigoyen, lograra su primera victoria presidencial, rompiendo el monopolio de los partidos conservadores.
```

```
metadata:
  materia: "historia"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["argentina", "democracia", "irrigoyen"]

tipo: mc
opciones_explicitas: ["Unión Cívica Radical", "Partido Demócrata", "Partido Conservador", "Partido Socialista"]

enunciado: "En las elecciones presidenciales de 1916, tras la implementación de la Ley Sáenz Peña, el partido ganador fue la ___."

respuesta: "Unión Cívica Radical"

explicacion: |
  La Ley Sáenz Peña (1912) estableció el voto universal, secreto y obligatorio. Esto permitió que la Unión Cívica Radical, liderada por Hipólito Yrigoyen, llegara a la presidencia en 1916, rompiendo el hegemonismo del régimen conservador.
```

```
metadata:
  materia: "historia"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["ley_saenz_pena", "voto_secreto"]

variables:
  escenario: uno_de([["el voto era abierto y fraudulento", "el régimen conservador"], ["el voto era secreto y obligatorio", "la democracia representativa"]])

tipo: mc
opciones_explicitas: ["el régimen conservador", "la democracia representativa"]

enunciado: "Antes de la reforma de 1912, el sistema electoral se caracterizaba por {escenario[0]}. Esto permitía que {escenario[1]} fuera controlada por la oligarquía."

respuesta: {escenario[1]}

explicacion: |
  El sistema anterior permitía el fraude mediante el voto cantado, lo que facilitaba la manipulación de resultados por parte de los sectores dominantes.
```

```
metadata:
  materia: "historia"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["caracteristicas", "voto"]

tipo: ordenar
opciones_explicitas: ["Voto Cantado", "Voto Secreto", "Voto Universal", "Voto Obligatorio"]

enunciado: "Ordene cronológicamente la evolución del sistema de votación en Argentina, desde el modelo previo a la Ley Sáenz Peña hasta el modelo implementado por esta ley."

respuesta: ["Voto Cantado", "Voto Secreto", "Voto Universal", "Voto Obligatorio"]

explicacion: |
  La Ley Sáenz Peña transformó el sistema de un modelo de voto cantado (abierto) a uno basado en la universalidad (masculina), la obligatoriedad y, fundamentalmente, el secreto para evitar el fraude.
```

```
metadata:
  materia: "historia"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["irrigoyen", "presidencia"]

tipo: completar
respuestas_validas: ["Hipólito Yrigoyen"]

enunciado: "El primer presidente elegido bajo el nuevo sistema de sufragio universal, secreto y obligatorio fue ___."

respuesta: "Hipólito Yrigoyen"

explicacion: |
  Hipólito Yrigoyen asumió la presidencia en 1916, representando el triunfo de las fuerzas populares y el fin del control exclusivo de la oligarquía sobre el Poder Ejecutivo.
```

```
metadata:
  materia: "historia"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "avanzado"
  tags: ["consecuencias", "politica"]

variables:
  caso: uno_de([[1, "fin del régimen conservador"], [2, "fortalecimiento de la oligarquía"]])

tipo: mc
opciones_explicitas: ["fin del régimen conservador", "fortalecimiento de la oligarquía"]

enunciado: "La implementación de la Ley Sáenz Peña tuvo como consecuencia principal el {caso[0]} en Argentina."

respuesta: {caso[1]}

explicacion: |
  La apertura democrática permitió que sectores que habían estado excluidos del poder político, como la Unión Cívica Radical, pudieran competir y ganar mediante el voto popular.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["sufragio", "argentina", "ley_saenz_pena"]

respuesta: "varones"
tipo: mc
opciones_explicitas: ["mujeres", "varones", "todos los ciudadanos", "extranjeros"]

enunciado: "Aunque la Ley Sáenz Peña de 1912 introdujo el voto universal, secreto y obligatorio, en la práctica este derecho estaba limitado exclusivamente a los ___."

explicacion: |
  La Ley Sáenz Peña garantizó el voto para los varones mayores de 18 años, pero excluyó sistemáticamente a las mujeres del proceso electoral.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["sufragio_femenino", "evita", "derechos"]

variables:
  escenario: uno_de([["1947", "Ley de Sufragio Femenino"], ["1912", "Ley Sáenz Peña"]])
  año: escenario[0]
  evento: escenario[1]

respuesta: escenario[0
tipo: completar
respuestas_validas: ["1947", "1912"]

enunciado: "Si bien la reforma de 1912 fue un paso hacia la democracia, las mujeres en Argentina no pudieron ejercer el voto hasta el año ___."

explicacion: |
  Fue mediante la sanción de la Ley 13.512, impulsada por el voto femenino, que las mujeres argentinas obtuvieron el derecho político pleno en 1947.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["cronologia", "historia_argentina"]

respuesta: ["Ley Sáenz Peña", "Ley de Sufragio Femenino", "Ley de Ciudadanía Argentina"]
tipo: ordenar
opciones_explicitas: ["Ley Sáenz Peña", "Ley de Sufragio Femenino", "Ley de Ciudadanía Argentina"]

enunciado: "Ordena cronológicamente los hitos que ampliaron la base electoral en Argentina:"

explicacion: |
  La secuencia correcta marca la transición desde un voto masculino (1912), pasando por la inclusión de la mujer (1947), hasta la plena ciudadanía para inmigrantes (1972).
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["caracteristicas", "voto"]

respuesta: "secreto"
tipo: mc
opciones_explicitas: ["público", "secreto", "opcional", "electivo"]

enunciado: "Uno de los pilares de la Ley Sáenz Peña para evitar el fraude mediante el control de la voluntad del votante fue el voto ___."

explicacion: |
  El voto secreto fue fundamental para terminar con el sistema de "voto cantado" que permitía la coacción de los patrones sobre los trabajadores.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "avanzado"
  tags: ["democracia", "exclusiones"]

variables:
  caso: uno_de([[true, "se incluyeron"], [false, "se excluyeron"]])
  resultado: caso[0]

respuesta: caso[1

tipo: mc
opciones_explicitas: ["se incluyeron", "se excluyeron"]

enunciado: "Considerando la composición de la población argentina en 1912, ¿qué ocurrió con el género femenino en la implementación de la Ley Sáenz Peña? Las mujeres ___ del derecho al voto."

explicacion: |
  A pesar de la modernización del sistema, la exclusión de la mitad de la población (las mujeres) demuestra que la "universalidad" de la época era solo para el género masculino.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["voto_cantado", "sistema_oligarquico"]

variables:
  datos: [["El voto era realizado de forma ___", "abierto"], ["El voto era realizado de forma ___", "secreto"], ["El voto era realizado de forma ___", "obligatorio"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["abierto", "secreto", "obligatorio"]

enunciado: "Antes de la sanción de la Ley Sáenz Peña, el sistema electoral se caracterizaba porque el voto era ___."

explicacion: |
  Antes de 1912, el sistema era el "voto cantado", lo que permitía el fraude y la presión de los caudillos locales, ya que no había secreto.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["caracteristicas_ley"]

variables:
  datos: [["voto universal", "masivo"], ["voto secreto", "anónimo"], ["voto obligatorio", "deber_ciudadano"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["masivo", "anónimo", "deber_ciudadano"]

enunciado: "Con la implementación de la Ley Sáenz Peña, el voto pasó a ser ___."

explicacion: |
  La ley estableció tres pilares: el voto era universal (para varones), secreto y obligatorio, rompiendo el control de la oligarquía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["comparativa", "fraude"]

variables:
  datos: [["Antes de 1912 el voto era ___ y después era ___", ["cantado", "secreto"]], ["Antes de 1912 el voto era ___ y después era ___", ["opcional", "obligatorio"]], ["Antes de 1912 el voto era ___ y después era ___", ["fraudulento", "transparente"]]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]

tipo: completar
respuestas_validas: ["cantado", "secreto", "opcional", "obligatorio", "fraudulento", "transparente"]

enunciado: "{datos[idx][0]}"

explicacion: |
  La transición buscaba pasar de un sistema controlado y abierto a uno donde la voluntad popular fuera respetada mediante el secreto y la obligatoriedad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["obligatoriedad"]

variables:
  datos: [["En el sistema anterior, votar era ___", "un privilegio"], ["En el sistema anterior, votar era ___", "un derecho"], ["En el sistema anterior, votar era ___", "una carga"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["un privilegio", "un derecho", "una carga"]

enunciado: "Antes de la reforma, el sufragio no era un derecho para todos, sino ___ para una élite restringida."

explicacion: |
  El sistema previo era restrictivo y estaba diseñado para que solo ciertos sectores sociales (la oligarquía) pudieran participar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "avanzado"
  tags: ["consecuencias_politicas"]

variables:
  datos: [["La ley permitió el ascenso de ___", "la UCR"], ["La ley permitió el ascenso de ___", "el radicalismo"], ["La ley permitió el ascenso de ___", "el triunfo de Hipólito Yrigoyen"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["la UCR", "el radicalismo", "el triunfo de Hipólito Yrigoyen"]

enunciado: "La democratización del voto fue el factor clave que permitió el ascenso político de ___ en Argentina."

explicacion: |
  La Ley Sáenz Peña permitió que las fuerzas de masas, como la Unión Cívica Radical, pudieran ganar elecciones de manera legítima.
```

## Sección: antigua-grecia (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["guerra", "atenas", "esparta"]
tipo: mc
enunciado: El conflicto que marcó el declive de la hegemonía ateniense y reconfiguró el mapa político griego en el siglo V a.C. fue causado principalmente por el temor de los estados del Peloponeso a:
opciones_explicitas:
  - El crecimiento económico de Corinto
  - El poder naval y político de Atenas
  - La invasión persa de 480 a.C.
  - La alianza de Tebas con Esparta
respuesta: El poder naval y político de Atenas
explicacion: La Guerra del Peloponeso (431-404 a.C.) estalló debido al miedo de Esparta y sus aliados al creciente poder de Atenas, especialmente después de la formación de la Liga de Delos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["batalla", "naval", "salamina"]
tipo: vf
enunciado: La Batalla de Salamina (480 a.C.) fue una victoria decisiva de la flota griega unida sobre la armada persa, evitando la conquista de Grecia continental por Jerjes I.
respuesta: verdadero
explicacion: La batalla de Salamina frenó el avance persa y permitió a los griegos consolidar su resistencia, siendo un punto de inflexión crucial en las Guerras Médicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["esparta", "agoge", "sociedad"]
tipo: completar
enunciado: En Esparta, el sistema educativo y militar obligatorio para los varones ciudadanos desde los 7 años se denominaba __________.
respuesta: agoge
respuestas_validas:
  - Agoge
  - agoge
  - AGOGE
explicacion: El Agoge era el programa de entrenamiento físico y moral diseñado para crear soldados disciplinados y leales al estado espartano.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "socrates", "etica"]
tipo: mc
enunciado: ¿Qué filósofo ateniense es conocido por su método de interrogatorio dialéctico (mayéutica) y su ejecución por impiedad en 399 a.C.?
opciones_explicitas:
  - Platón
  - Aristóteles
  - Sócrates
  - Diógenes
respuesta: Sócrates
explicacion: Sócrates no escribió obras propias; su pensamiento se conoce a través de sus discípulos, principalmente Platón. Fue condenado a beber cicuta.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["sociedad", "atenas", "mujeres"]
tipo: completar
enunciado: En la democracia ateniense clásica, las mujeres, los esclavos y los metecos (extranjeros residentes) estaban __________ del proceso político directo.
respuesta: excluidos
respuestas_validas:
  - excluidos
  - Excluidos
  - EXCLUIDOS
explicacion: Solo los varones adultos hijos de padres atenienses tenían derechos políticos plenos, a pesar de que Atenas es considerada la cuna de la democracia.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["arte", "partenon", "pericles"]
tipo: mc
enunciado: Durante el gobierno de Pericles, ¿qué arquitecto supervisó la construcción del Partenón en la Acrópolis de Atenas?
opciones_explicitas:
  - Fidias
  - Ictino
  - Calícrates
  - Praxíteles
respuesta: Ictino
explicacion: Ictino, junto con Calícrates, diseñó el Partenón, mientras que Fidias supervisó las esculturas y la estatua crisoelefantina de Atenea.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["mitologia", "troya", "homero"]
tipo: vf
enunciado: La Ilíada de Homero narra principalmente los últimos días de la guerra de Troya, centrada en la cólera del héroe Aquiles, no toda la guerra.
respuesta: verdadero
explicacion: La Ilíada se concentra en la "cólera de Aquiles" durante un breve periodo al final de la guerra, dejando otros eventos fuera de su narrativa inmediata.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["termopilas", "leonidas", "persas"]
tipo: completar
enunciado: El rey __________ de Esparta lideró a un pequeño grupo de hoplitas y aliados en la defensa del Paso de las Termópilas contra el ejército persa de Jerjes.
respuesta: leonidas
respuestas_validas:
  - Leonidas
  - leonidas
  - LEONIDAS
explicacion: Leonidas I murió junto con sus 300 espartanos (y otros aliados) en 480 a.C., simbolizando la resistencia heroica contra la invasión persa.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "aristoteles", "logica"]
tipo: mc
enunciado: ¿Quién fue el fundador del Liceo y sistematizó la lógica formal, siendo discípulo de Platón?
opciones_explicitas:
  - Sócrates
  - Aristóteles
  - Epicuro
  - Zenón de Citio
respuesta: Aristóteles
explicacion: Aristóteles amplió el conocimiento en biología, física, metafísica y ética, estableciendo las bases del pensamiento lógico occidental.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["democracia", "eklesia", "atenas"]
tipo: completar
enunciado: La asamblea popular ateniense, donde los ciudadanos votaban directamente las leyes y decisiones de estado, se llamaba __________.
respuesta: ekklesia
respuestas_validas:
  - ekklesia
  - Ekklesia
  - EKKELESIA
explicacion: La Ekklesia era el órgano soberano de la democracia ateniense, reunida regularmente en la Pnice para deliberar.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["guerra", "derrota", "atenas"]
tipo: vf
enunciado: Atenas perdió la Guerra del Peloponeso en 404 a.C. debido al bloqueo naval espartano liderado por Lisandro, que cortó su suministro de grano de Hellesponto.
respuesta: verdadero
explicacion: La flota ateniense fue destruida en la batalla de Egospótamos, lo que llevó al asedio y rendición de Atenas, poniendo fin a la guerra.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["politica", "demagogos", "atenas"]
tipo: mc
enunciado: ¿Qué político ateniense fue considerado un demagogo influyente que promovió el empoderamiento de la Asamblea sobre el Areópago?
opciones_explicitas:
  - Címon
  - Mirónides
  - Efialtes
  - Temístocles
respuesta: Efialtes
explicacion: Efialtes, junto con Pericles, redujo el poder del Areópago (aristocracia) y fortaleció la democracia radical en Atenas.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["arte", "escultura", "mirón"]
tipo: completar
enunciado: La escultura __________, que representa a un atleta lanzando un disco, es una obra maestra del periodo clásico de Mirón, conocida por su contrapposto inicial.
respuesta: discóbolo
respuestas_validas:
  - discóbolo
  - Discóbolo
  - DISCOBOLO
explicacion: El Discóbolo de Mirón captura el momento de máxima tensión antes del lanzamiento, mostrando movimiento y equilibrio.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "estoicismo", "zenon"]
tipo: mc
enunciado: ¿Quién fundó la escuela estoica en Atenas, enseñando que la virtud es el único bien y que se debe vivir conforme a la naturaleza?
opciones_explicitas:
  - Epicuro
  - Zenón de Citio
  - Pitágoras
  - Heráclito
respuesta: Zenón de Citio
explicacion: Zenón de Citio estableció el estoicismo en el Pórtico Pintado (Stoa Poikile) de Atenas tras el 300 a.C. aproximadamente.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["batalla", "maraton", "miltiades"]
tipo: completar
enunciado: La primera invasión persa de Grecia fue detenida por los atenienses en la Batalla de __________ en 490 a.C., bajo el mando de Miltíades.
respuesta: maratón
respuestas_validas:
  - maratón
  - Maraton
  - MARATON
explicacion: La victoria en Maratón demostró que los persas podían ser derrotados y consolidó la confianza de Atenas en su poder naval.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["teatro", "tragedia", "esquilo"]
tipo: mc
enunciado: ¿Qué dramaturgo es considerado el padre de la tragedia griega y escribió la obra "Los persas", la única tragedia que sobrevive con tema contemporáneo a su autor?
opciones_explicitas:
  - Sófocles
  - Eurípides
  - Esquilo
  - Aristófanes
respuesta: Esquilo
explicacion: Esquilo introdujo el segundo actor, permitiendo el diálogo dramático. "Los persas" se basa en la batalla de Salamina.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["alianza", "delos", "tesoro"]
tipo: completar
eniciado: La __________ de Delos era una alianza militar de ciudades griegas liderada por Atenas, cuyo tesoro estaba originalmente en la isla de Delos.
respuesta: liga
respuestas_validas:
  - liga
  - Liga
  - LIGA
explicacion: La Liga de Delos evolucionó hacia el primer imperio ateniense, con el tesoro trasladado a Atenas y los fondos usados para construir el Partenón.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "pitagoras", "matematica"]
tipo: mc
enunciado: ¿Qué filósofo y matemático fundó una escuela en Crotona que combinaba matemáticas, música y misticismo, y es famoso por el teorema que lleva su nombre?
opciones_explicitas:
  - Tales de Mileto
  - Pitágoras
  - Anaximandro
  - Parménides
respuesta: Pitágoras
explicacion: Pitágoras y su secta creían que la realidad es fundamentalmente matemática y practicaban la metempsicosis (reencarnación).
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["batalla", "filipo", "macedonia"]
tipo: vf
enunciado: La Batalla de Queronea (338 a.C.) puso fin a la independencia de las polis griegas y estableció la hegemonía de Filipo II de Macedonia.
respuesta: verdadero
explicacion: La victoria macedonia en Queronea obligó a las ciudades griegas a unirse en la Liga de Corinto bajo liderazgo macedonio.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["historiografia", "herodoto", "persas"]
tipo: completar
enunciado: __________, conocido como el padre de la Historia, escribió "Historias" detallando las Guerras Médicas y describiendo las costumbres de los pueblos conocidos.
respuesta: Herodoto
respuestas_validas:
  - Herodoto
  - herodoto
  - HERODOTO
explicacion: Herodoto recopiló relatos orales y observaciones para documentar el conflicto entre Grecia y Persia, aunque a veces incluía mitos.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "talos", "agua"]
tipo: mc
enunciado: ¿Qué filósofo de Mileto fue considerado el primer pensador occidental al proponer que el agua es el arjé (principio) de todas las cosas?
opciones_explicitas:
  - Anaxímenes
  - Tales de Mileto
  - Anaximandro
  - Heráclito
respuesta: Tales de Mileto
explicacion: Tales buscó una explicación natural y material para el origen del universo, alejándose de las explicaciones mitológicas.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["batalla", "temistocles", "estrategia"]
tipo: completar
enunciado: El almirante ateniense __________ persuadió a los griegos de luchar en las estrechas aguas de Salamina, neutralizando la ventaja numérica persa.
respuesta: temistocles
respuestas_validas:
  - temistocles
  - Temistocles
  - TEMISTOCLES
explicacion: Temístocles, creador de la flota ateniense, argumentó que el estrecho canal impediría la maniobra de la flota persa más grande.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "epicuro", "placer"]
tipo: mc
enunciado: ¿Qué filósofo fundó una escuela en su jardín en Atenas, enseñando que el fin último de la vida es la búsqueda del placer (aponía) y la ausencia de dolor?
opciones_explicitas:
  - Zenón
  - Epicuro
  - Aristóteles
  - Platón
respuesta: Epicuro
explicacion: Epicuro promovía una vida sencilla y tranquila, evitando el miedo a los dioses y a la muerte, definiendo el placer como la ausencia de sufrimiento.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["guerra", "inicio", "431"]
tipo: completar
enunciado: La Guerra del Peloponeso comenzó oficialmente en el año __________ a.C., tras una serie de incidentes diplomáticos y la disputa por Corcira y Potidea.
respuesta: 431
respuestas_validas:
  - 431
  - 431 a.C.
  - 431 AC
explicacion: El año 431 a.C. marca el inicio formal del conflicto, aunque las tensiones habían crecido durante décadas.
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "heraclito", "cambio"]
tipo: mc
enunciado: ¿Qué filósofo de Éfeso es famoso por su doctrina de que "todo fluye" y que "no te puedes bañar dos veces en el mismo río"?
opciones_explicitas:
  - Parménides
  - Heráclito
  - Demócrito
  - Empédocles
respuesta: Heráclito
explicacion: Heráclito enfatizaba el cambio constante y el conflicto como la fuente de toda realidad, opuesto a la estática de Parménides.
```

## Sección: antigua-roma (24 preguntas)

```
### 2 — Monarquía Romana
```

```
### 3 — República Romana
```

```
### 4 — Cónsules
```

```
### 5 — Plebeyos vs Patricios
```

```
### 6 — Guerras Púnicas
```

```
### 7 — Aníbal
```

```
### 8 — Escipión el Africano
```

```
### 9 — Senado Romano
```

```
### 10 — Ley de las XII Tablas
```

```
### 11 — Julio César
```

```
### 12 — Pompeyo
```

```
### 13 — Primer Triunvirato
```

```
### 14 — Asesinato de César
```

```
### 15 — Segundo Triunvirato
```

```
### 16 — Batalla de Actium
```

```
### 17 — Pax Romana
```

```
### 18 — Trajano
```

```
### 19 — Adriano
```

```
### 20 — Constantino I
```

```
### 21 — Edicto de Milán
```

```
### 22 — División del Imperio
```

```
### 23 — Sack of Rome
```

```
### 24 — Caída de Roma
```

```
### 25 — Derecho Romano
```
