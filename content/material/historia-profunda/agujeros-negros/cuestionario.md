# Historia Profunda — Agujeros negros (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El origen del colapso

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["estrellas", "supernova", "gravedad"]

respuesta: "supernova"
tipo: completar
respuestas_validas:
  - "supernova"

enunciado: "Un agujero negro se forma cuando una estrella muy masiva colapsa gravitacionalmente tras agotar su combustible nuclear y explotar como una ___."

explicacion: |
  Cuando las estrellas masivas agotan su combustible, la presión hacia afuera cesa y la gravedad gana la batalla, provocando una explosión catastrófica llamada supernova.
```

### 2 — El motor del colapso

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["gravedad", "fuerza", "colapso"]

respuesta: "gravedad"
tipo: mc
opciones_explicitas: ["gravedad", "electromagnetismo", "fuerza nuclear fuerte"]

enunciado: "Durante el colapso de una estrella masiva que da origen a un agujero negro, ¿qué fuerza es la responsable de vencer la presión de la fusión nuclear y comprimir la materia?"

explicacion: |
  La gravedad es la fuerza fundamental que, al no encontrar resistencia por la falta de fusión nuclear, colapsa el núcleo de la estrella hacia un punto de densidad infinita.
```

### 3 — El ciclo de vida estelar

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["ciclo_estelar", "combustible"]

respuesta: "agotado"
tipo: completar
respuestas_validas:
  - "agotado"

enunciado: "El proceso de formación de un agujero negro comienza cuando el combustible nuclear de la estrella se ha ___."

explicacion: |
  Sin la energía de la fusión nuclear que empuja hacia afuera, la estrella pierde su equilibrio hidrostático y colapsa.
```

### 4 — Eventos precedentes

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["secuencia", "supernova", "colapso"]

respuesta_orden: ["colapso gravitacional", "supernova", "agujero negro"]
tipo: ordenar
opciones_explicitas: ["colapso gravitacional", "supernova", "agujero negro"]

enunciado: "Ordena cronológicamente los eventos que llevan a la formación de un agujero negro a partir de una estrella masiva:"

explicacion: |
  Primero ocurre el colapso del núcleo, seguido de la explosión de la capa externa (supernova) y finalmente la formación del remanente denso (agujero negro).
```

### 5 — Masa crítica

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["masa", "estrellas", "supernova"]

variables:
  es_masiva: uno_de([verdadero, falso])

respuesta: verdadero

tipo: vf

enunciado: "Para que una estrella termine su vida como un agujero negro tras una supernova, ¿es necesario que su masa sea muy grande (masiva)?"

explicacion: |
  Solo las estrellas con una masa lo suficientemente grande pueden generar la presión gravitatoria necesaria para colapsar en un agujero negro; las estrellas pequeñas terminan como enanas blancas.
```

### 6 — El límite de no retorno

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["astronomia", "gravedad"]

respuesta: "horizonte de eventos"
tipo: completar
respuestas_validas:
  - "horizonte de eventos"

enunciado: "El límite esférico alrededor de un agujero negro más allá del cual la velocidad de escape es mayor que la velocidad de la luz se denomina ___."

explicacion: |
  El horizonte de eventos marca la frontera física donde la gravedad es tan intensa que nada, ni siquiera la radiación electromagnética (luz), puede escapar.
```

### 7 — Velocidad de escape crítica

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

### 8 — Componentes de la singularidad

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["estructura", "singularidad"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un agujero negro de masa estelar", "se forma por el colapso de una estrella masiva"], ["un agujero negro supermasivo", "reside en el centro de las galaxias"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["se forma por el colapso de una estrella masiva", "reside en el centro de las galaxias"]

enunciado: "Si estamos analizando {escenario[idx][0]}, es correcto afirmar que este {escenario[idx][1]}."

explicacion: |
  El horizonte de eventos es una propiedad geométrica del espacio-tiempo que depende de la masa del objeto, ya sea que provenga del colapso estelar o de procesos galácticos.
```

### 9 — La frontera de la luz

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

### 10 — Secuencia de captura

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["proceso", "caida"]

opciones_explicitas: ["Aproximación orbital", "Cruzar el horizonte de eventos", "Colapso hacia la singularidad"]

respuesta_orden: ["Aproximación orbital", "Cruzar el horizonte de eventos", "Colapso hacia la singularidad"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos que experimentaría una partícula que cae hacia un agujero negro:"

pasos:
  - "La partícula se acerca siguiendo una trayectoria curva."
  - "La partícula atraviesa la frontera de no retorno."
  - "La partícula es comprimida hacia el centro matemático de densidad infinita."

explicacion: |
  Primero la partícula orbita o se acerca, luego cruza el horizonte de eventos (sin que un observador externo vea el paso instantáneo, pero para la partícula es un límite real) y finalmente cae hacia la singularidad.
```

### 11 — El destino de las estrellas

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["estrellas", "evolucion_estelar"]

variables:
  escenario: uno_de([["una estrella de baja masa", "enana blanca"], ["una estrella masiva", "estrella de neutrones"], ["una estrella supermasiva", "agujero negro"]])

enunciado: "Dependiendo de su masa inicial, el destino de una estrella varía. Una {escenario[0]} puede evolucionar hacia una {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["enana blanca", "estrella de neutrones", "agujero negro"]

explicacion: |
  Las estrellas pequeñas como nuestro Sol terminan su vida como enanas blancas. Solo las estrellas con masas extremadamente altas pueden colapsar hasta formar objetos más densos.
```

### 12 — Umbrales de masa

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["masa", "colapso"]

enunciado: "Si el núcleo remanente de una supernova supera el límite de Tolman-Oppenheimer-Volkoff, el colapso gravitatorio no se detiene y se forma un/a ___."

respuesta: "agujero negro"
tipo: completar
respuestas_validas:
  - "agujero negro"

explicacion: |
  Cuando la presión de degeneración de neutrones no puede contrarrestar la gravedad, el objeto colapsa indefinidamente hacia una singularidad, formando un agujero negro.
```

### 13 — Secuencia de muerte estelar

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

opciones_explicitas: ["Secuencia principal (fusión de hidrógeno)", "Supernova (colapso del núcleo)", "Agujero negro (singularidad)"]

respuesta_orden: ["Secuencia principal (fusión de hidrógeno)", "Supernova (colapso del núcleo)", "Agujero negro (singularidad)"]
tipo: ordenar

explicacion: |
  La evolución sigue un orden lógico: la fusión mantiene el equilibrio, la supernova es el evento explosivo de muerte y el agujero negro es el remanente final.
```

### 14 — ¿Qué queda después?

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["remanentes"]

enunciado: "Si una estrella tiene una masa inicial moderada (menor que el límite para una supernova masiva), el remanente final será una ___."

respuesta: "enana blanca"
tipo: completar
respuestas_validas:
  - "enana blanca"

explicacion: |
  Las estrellas de masa baja o media expulsan sus capas externas y dejan un núcleo denso llamado enana blanca.
```

### 15 — Clasificación de remanentes

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["clasificacion", "densidad"]

respuesta: "agujero negro"
tipo: mc
opciones_explicitas: ["enana blanca", "estrella de neutrones", "agujero negro"]

enunciado: "El objeto con la mayor densidad teórica, donde la gravedad impide incluso la salida de la luz, es el/la ___."

explicacion: |
  El agujero negro representa el límite extremo de la densidad, donde la curvatura del espacio-tiempo es infinita en la singularidad.
```

### 16 — El gigante central

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["galaxias", "centro_galactico"]

respuesta: "supermasivo"
tipo: completar
respuestas_validas:
  - "supermasivo"

enunciado: "A diferencia de los agujeros negros estelares, aquellos que residen en el centro de la mayoría de las galaxias, incluida la nuestra, se denominan agujeros negros ___."

explicacion: |
  Los agujeros negros supermasivos se encuentran en el núcleo de casi todas las galaxias grandes y poseen masas de millones o miles de millones de soles.
```

### 17 — Comparativa de escala

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["masa", "comparacion"]

variables:
  escenario: uno_de([["estelar", "pequeño"], ["supermasivo", "gigante"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["pequeño", "gigante"]

enunciado: "Considerando la escala de masa, si comparamos un agujero negro estelar con uno situado en el centro de una galaxia, el segundo es un objeto de tamaño ___."

explicacion: |
  Los agujeros negros supermasivos son órdenes de magnitud más masivos que sus contrapartes estelares.
```

### 18 — Ubicación galáctica

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

### 19 — Evolución de la masa

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["evolucion", "masa"]

respuesta: 1000000
tipo: completar
tolerancia_abs: 0

enunciado: "Si un agujero negro estelar típico tiene una masa de aproximadamente 10 veces la masa solar, un agujero negro supermasivo promedio en una galaxia espiral puede tener aproximadamente ___ masas solares. Escribe el valor numérico (sin unidades)."

explicacion: |
  Los agujeros negros supermasivos superan con creces las escalas estelares, alcanzando millones de masas solares.
```

### 20 — Clasificación de orígenes

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

### 21 — Destino estelar: Masa inicial

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
respuesta: resultado_final

enunciado: "Una estrella con una masa inicial de {masa_inicial} evolucionará, tras agotar su combustible, convirtiéndose en un/a ___."

explicacion: |
  El destino de una estrella depende de su masa remanente. Una estrella de {masa_inicial} terminará como un/a {resultado_final}.
```

### 22 — El límite de Chandrasekhar

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
respuestas_validas:
  - destino

enunciado: "Si el núcleo remanente de una estrella tiene una masa de {valor} masas solares, el objeto resultante será una ___."

explicacion: |
  El límite de Chandrasekhar (~1.4 M☉) determina si un remanente se convierte en enana blanca o colapsa más allá. En este caso, con {valor} M☉, el destino es {destino}.
```

### 23 — Secuencia de colapso

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["evolucion_estelar"]

tipo: ordenar
opciones_explicitas: ["Secuencia principal", "Supernova", "Remanente compacto"]
respuesta_orden: ["Secuencia principal", "Supernova", "Remanente compacto"]

enunciado: "Ordena las etapas evolutivas de una estrella masiva que culminará en un agujero negro:"

explicacion: |
  Las estrellas masivas pasan por la secuencia principal, explotan como supernova y dejan un remanente (agujero negro si la masa es suficiente).
```

### 24 — Identificación de remanentes

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
  respuesta_correcta: datos[idx][1]

tipo: mc
opciones_explicitas: ["presión de degeneración electrónica", "presión de degeneración de neutrones", "colapso gravitatorio total"]
respuesta: respuesta_correcta

enunciado: "Un/a {objeto} se mantiene estable gracias a la {causa}."

explicacion: |
  El mecanismo de soporte depende de la masa: la {causa} es lo que define al/a {objeto}.
```

### 25 — Masa y densidad

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["densidad", "gravedad"]

tipo: completar
tolerancia_abs: 0.1

enunciado: "El límite de Tolman-Oppenheimer-Volkoff, la masa máxima que puede sostener la presión de degeneración de neutrones antes de colapsar en un agujero negro, es de aproximadamente ___ masas solares."

pasos:
  - "Recordar el rango aceptado para el límite de Tolman-Oppenheimer-Volkoff (aprox 2-3 M☉)"

respuesta: 3

explicacion: |
  Al superar el límite crítico de ~3 M☉, la presión de degeneración de neutrones ya no puede contrarrestar la gravedad, y el objeto colapsa en un agujero negro.
```
