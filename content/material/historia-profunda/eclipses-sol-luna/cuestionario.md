# Historia Profunda — Eclipses sol luna (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El fenómeno del eclipse solar

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "eclipse_solar"]

tipo: mc
opciones_explicitas: ["La Luna se interpone entre la Tierra y el Sol", "La Tierra se interpone entre el Sol y la Luna", "El Sol se interpone entre la Tierra y la Luna"]
respuesta: "La Luna se interpone entre la Tierra y el Sol"

enunciado: "Un eclipse solar ocurre cuando ___."

explicacion: |
  Para que ocurra un eclipse solar, la Luna debe estar posicionada exactamente entre la Tierra y el Sol, proyectando su sombra sobre nuestra superficie.
```

### 2 — Fases lunares y eclipses

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["fases_lunares", "eclipse_solar"]

enunciado: "Para que sea posible observar un eclipse solar, la Luna debe encontrarse en fase de ___."

pasos:
  - "Identificar la fase lunar necesaria para que la Luna esté entre la Tierra y el Sol."

opciones_explicitas: ["Luna Llena", "Luna Nueva"]
respuesta: "Luna Nueva"
tipo: mc

explicacion: |
  Solo cuando la Luna está en fase de Luna Nueva puede alinearse entre la Tierra y el Sol para producir un eclipse solar.
```

### 3 — El eclipse lunar

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["eclipse_lunar", "fases_lunares"]

tipo: completar
enunciado: "Un eclipse lunar ocurre únicamente durante la fase de ___."
respuesta: "Luna Llena"
explicacion: |
  Un eclipse lunar requiere que la Tierra esté entre el Sol y la Luna, lo cual solo sucede cuando la Luna está en su fase de Luna Llena.
```

### 4 — Orden de los cuerpos celestes

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["secuencia", "eclipse_lunar"]

tipo: ordenar
opciones_explicitas: ["Sol", "Tierra", "Luna"]
respuesta_orden: ["Sol", "Tierra", "Luna"]

enunciado: "Ordena los cuerpos celestes desde el que emite la luz hasta el que recibe la sombra durante un eclipse lunar:"

explicacion: |
  En un eclipse lunar, la secuencia es: la luz del Sol viaja hacia la Tierra, la Tierra bloquea la luz y proyecta su sombra sobre la Luna.
```

### 5 — Completar la relación

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["conceptos", "eclipse"]

variables:
  escenario: uno_de([0, 1])
  datos: [["Sol - Tierra - Luna", "lunar"], ["Sol - Luna - Tierra", "solar"]]

enunciado: "Si la posición de los astros es {datos[escenario][0]}, entonces el eclipse es de tipo ___."

opciones_explicitas: ["solar", "lunar"]
respuestas_validas:
  - "lunar"
  - "solar"
respuesta: datos[escenario][1]
tipo: completar

explicacion: |
  La clave para identificar el eclipse es observar qué cuerpo está en el medio: si es la Luna, el eclipse es solar; si es la Tierra, es lunar.
```

### 6 — La inclinación orbital

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "geometria_celestial"]

respuesta: 5
tipo: completar
tolerancia_abs: 0.1

enunciado: "Aunque la Luna orbita la Tierra cada mes, no siempre se produce un eclipse porque su órbita está inclinada aproximadamente ___ grados respecto a la eclíptica (el plano de la órbita terrestre)."

explicacion: |
  La órbita de la Luna tiene una inclinación de unos 5° respecto al plano de la Tierra alrededor del Sol. Esta inclinación hace que, la mayoría de las veces, la Luna pase por encima o por debajo del Sol desde nuestra perspectiva.
```

### 7 — El concepto de alineación

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "alineacion"]

opciones_explicitas: ["Eclíptica", "Eje terrestre", "Órbita solar", "Cinturón de asteroides"]

respuesta: "Eclíptica"
tipo: mc

enunciado: "Para que ocurra un eclipse, la Luna debe estar alineada con el Sol y la Tierra en el plano de la ___."

explicacion: |
  Un eclipse solo ocurre cuando la Luna, la Tierra y el Sol se encuentran en un punto llamado 'nodos lunares', donde la órbita lunar cruza el plano de la eclíptica.
```

### 8 — Fases y alineación

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["fases_lunares", "eclipses"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Luna Nueva", "Solar"], ["Luna Llena", "Lunar"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Solar", "Lunar", "Ninguno"]

enunciado: "Si la Luna se encuentra en fase de {datos[escenario_idx][0]}, se requiere una alineación perfecta para producir un eclipse de tipo {datos[escenario_idx][1]}."

explicacion: |
  La fase de Luna Nueva es necesaria para los eclipses solares, mientras que la Luna Llena es necesaria para los eclipses lunares.
```

### 9 — El proceso de alineación

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "avanzado"
  tags: ["geometria", "nodos"]

opciones_explicitas: ["Nodos lunares", "Equinoccios", "Solsticios", "Perigeos"]

respuesta: "Nodos lunares"
tipo: mc

enunciado: "La razón por la cual los eclipses no ocurren en cada fase de Luna Nueva o Luna Llena es que la Luna solo cruza el plano de la eclíptica en dos puntos específicos llamados ___."

explicacion: |
  Esos puntos de intersección se llaman nodos. Solo cuando la Luna está en uno de estos nodos durante la fase de luna nueva o llena, se produce el fenómeno.
```

### 10 — Secuencia de alineación

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["orden", "alineacion"]

opciones_explicitas: ["Luna Nueva -> Eclipse Solar", "Luna Llena -> Eclipse Lunar"]

respuesta_orden: ["Luna Nueva -> Eclipse Solar", "Luna Llena -> Eclipse Lunar"]
tipo: ordenar

enunciado: "Ordena las condiciones necesarias para los dos tipos principales de eclipses:"

pasos:
  - "Condición para eclipse solar"
  - "Condición para eclipse lunar"

explicacion: |
  Para un eclipse solar necesitamos Luna Nueva y alineación en el nodo. Para un eclipse lunar necesitamos Luna Llena y alineación en el nodo.
```

### 11 — Sombras en un eclipse

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "conceptos_basicos"]

respuesta: "umbra"
tipo: completar
respuestas_validas:
  - "umbra"
  - "penumbra"

enunciado: "La parte más oscura y central de la sombra proyectada por la Luna sobre la Tierra se denomina ___."

explicacion: |
  La umbra es la zona de sombra total donde la luz del Sol queda completamente bloqueada. La penumbra es la zona exterior donde solo se bloquea una parte de la luz.
```

### 12 — Tipos de eclipse solar

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["eclipses", "solar"]

variables:
  escenario: uno_de([["la Luna cubre totalmente el Sol", "total"], ["la Luna cubre solo una parte del Sol", "parcial"], ["la Luna está entre la Tierra y el Sol pero es más pequeña y deja un anillo", "anular"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["total", "parcial", "anular"]

enunciado: "Si durante un eclipse solar la Luna no logra cubrir completamente el disco solar, dejando ver un borde luminoso alrededor, estamos ante un eclipse ___."

explicacion: |
  En un eclipse parcial, la Luna solo cubre una fracción del Sol. En el total, lo cubre todo; en el anular, el diámetro aparente de la Luna es menor que el del Sol.
```

### 13 — La zona de penumbra

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia"]

respuesta: "penumbra"
tipo: mc
opciones_explicitas: ["umbra", "penumbra", "antumbra"]

enunciado: "Cuando un observador se encuentra en la región donde el Sol es parcialmente ocultado por la Luna, se encuentra en la zona de:"

explicacion: |
  La penumbra es la región de sombra parcial que rodea a la umbra.
```

### 14 — Secuencia de un eclipse total

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["observacion"]

respuesta_orden: ["crescendo", "totalidad", "decrescendo"]
tipo: ordenar
opciones_explicitas: ["crescendo", "totalidad", "decrescendo"]

enunciado: "Ordena cronológicamente las fases de un eclipse solar total desde que comienza el oscurecimiento hasta que termina:"

explicacion: |
  Primero ocurre el aumento gradual de la sombra (crescendo), luego la fase de oscuridad máxima (totalidad) y finalmente el regreso de la luz (decrescendo).
```

### 15 — Cálculo de la sombra

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "avanzado"
  tags: ["calculo", "geometria"]

variables:
  distancia_luna: uno_de([384400, 405500])

respuesta: redondear(distancia_luna, 0)
tipo: completar
tolerancia_abs: 0

enunciado: "Si la Luna se encuentra a una distancia de {distancia_luna} km de la Tierra, ¿cuál es ese valor en kilómetros?"

explicacion: |
  El valor de la distancia varía según la órbita elíptica de la Luna.
```

### 16 — Visibilidad del eclipse lunar

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "visibilidad"]

respuesta: "Luna"
tipo: "mc"
opciones_explicitas: ["Sol", "Luna", "Estrellas", "Planetas"]

enunciado: "Durante un eclipse lunar, el cuerpo celeste que se oscurece debido a la sombra de la Tierra es la ___."

explicacion: |
  En un eclipse lunar, la Tierra se interpone entre el Sol y la Luna, proyectando su sombra sobre el satélite. Como la Luna está visible para cualquier punto de la Tierra que esté en la zona de noche, el fenómeno es observable desde toda la mitad nocturna del planeta.
```

### 17 — Geometría de la sombra solar

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["geometria", "sombra"]

variables:
  caso: uno_de([0, 1])

respuesta: "umbra"
tipo: "completar"
respuestas_validas:
  - "umbra"
  - "penumbra"

enunciado: "En un eclipse solar, la parte de la sombra donde la totalidad del Sol es bloqueada por la Luna se denomina ___."

explicacion: |
  La sombra de la Luna tiene dos partes: la umbra (sombra total) y la penumbra (sombra parcial). La umbra es un cono muy estrecho que toca la superficie terrestre solo en una franja muy pequeña, razón por la cual los eclipses totales de Sol son raros de ver en un lugar específico.
```

### 18 — Comparación de áreas de visibilidad

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["comparacion", "visibilidad"]

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Comparado con la franja angosta de un eclipse solar, el área de visibilidad de un eclipse lunar es ___."

explicacion: |
  Un eclipse lunar es visible para cualquier persona que esté en la parte de la Tierra donde la Luna está en el cielo (la mitad nocturna). Un eclipse solar requiere que la pequeña sombra de la Luna pase exactamente por tu ubicación.
```

### 19 — Secuencia de alineación

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["alineacion", "orden"]

tipo: "ordenar"
opciones_explicitas: ["Sol", "Tierra", "Luna"]
respuesta_orden: ["Sol", "Tierra", "Luna"]

enunciado: "Para que ocurra un eclipse lunar, los astros deben alinearse en el siguiente orden desde el Sol hacia la Luna:"

explicacion: |
  En el eclipse lunar, el orden es Sol - Tierra - Luna. La Tierra queda en el medio, proyectando su sombra sobre la Luna.
```

### 20 — Frecuencia de observación local

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "avanzado"
  tags: ["probabilidad", "observacion"]

variables:
  escenario: uno_de([0, 1])

respuesta: "frecuente"
tipo: "mc"
opciones_explicitas: ["frecuente", "infrecuente"]

enunciado: "Debido a que la sombra de la Luna es muy pequeña y se desplaza rápidamente por la Tierra, ver un eclipse solar total en un mismo punto es un evento ___."

explicacion: |
  Como la umbra lunar es un cono estrecho, la probabilidad de que esa línea exacta pase por tu ciudad es muy baja, haciendo que los eclipses solares totales sean eventos muy poco frecuentes en una ubicación geográfica dada.
```

### 21 — Identificación de eclipse solar

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "posiciones"]

variables:
  idx: uno_de([0, 1])
  datos: [["Luna entre la Tierra y el Sol", "Solar"], ["Tierra entre la Luna y el Sol", "Lunar"]]

enunciado: "Si observamos que la posición de los cuerpos celestes es {datos[idx][0]}, estamos presenciando un eclipse de tipo ___."

respuestas_validas:
  - "Solar"
  - "Lunar"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Un eclipse solar ocurre cuando la Luna se interpone entre la Tierra y el Sol, proyectando su sombra sobre nuestro planeta.
```

### 22 — El fenómeno de la sombra lunar

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia"]

variables:
  escenario_datos: [["Luna-Sol-Tierra", "Solar"], ["Sol-Luna-Tierra", "Lunar"], ["Sol-Tierra-Luna", "Lunar"]]
  idx: uno_de([0, 1, 2])

enunciado: "Dada la configuración {escenario_datos[idx][0]}, el tipo de eclipse es ___."

respuestas_validas:
  - "Solar"
  - "Lunar"

respuesta: escenario_datos[idx][1]
tipo: completar

explicacion: |
  La posición relativa determina qué cuerpo proyecta la sombra sobre el otro.
```

### 23 — Clasificación de eclipses

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["astronomia"]

variables:
  idx: uno_de([0, 1])
  datos: [["La Tierra bloquea la luz solar hacia la Luna", "Lunar"], ["La Luna bloquea la luz solar hacia la Tierra", "Solar"]]

enunciado: "Si ocurre que {datos[idx][0]}, el eclipse es ___."

respuestas_validas:
  - "Lunar"
  - "Solar"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El eclipse se nombra según el cuerpo que queda en la zona de sombra.
```

### 24 — ¿Qué eclipse es?

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia"]

variables:
  datos: [["Sol - Luna - Tierra", "Solar"], ["Sol - Tierra - Luna", "Lunar"]]
  idx: uno_de([0, 1])

enunciado: "En la configuración {datos[idx][0]}, el eclipse es ___."

opciones_explicitas:
  - "Solar"
  - "Lunar"

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  En el primer caso la Luna está en el medio (Solar), en el segundo la Tierra (Lunar).
```

### 25 — Identificación por sombra

```
metadata:
  materia: "historia_profucha"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["astronomia"]

variables:
  idx: uno_de([0, 1])
  datos: [["La Luna entra en la umbra terrestre", "Lunar"], ["La Tierra entra en la umbra lunar", "Solar"]]

enunciado: "Si el evento es {datos[idx][0]}, el tipo de eclipse es ___."

respuestas_validas:
  - "Lunar"
  - "Solar"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Cuando la Luna entra en la sombra de la Tierra, vemos un eclipse lunar.
```
