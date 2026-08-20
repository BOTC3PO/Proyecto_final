# Automatizacion — Lazo abierto vs lazo cerrado (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de realimentación

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["control", "realimentacion"]

respuesta: "realimentación"
tipo: completar
respuestas_validas:
  - "realimentación"
  - "retroalimentación"

enunciado: "La diferencia fundamental entre un sistema de lazo abierto y uno de lazo cerrado es la presencia o ausencia de una señal de ___."

explicacion: |
  En un sistema de lazo cerrado, la salida se mide y se compara con la entrada mediante una señal de realimentación para corregir errores.
```

### 2 — Identificación de sistema

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["clasificacion", "lazo_abierto"]

variables:
  escenario: uno_de([["un tostador de pan", "no mide el color del pan"], ["un ventilador con velocidad fija", "no detecta la temperatura"]])

respuesta: "lazo abierto"
tipo: mc
opciones_explicitas: ["lazo abierto", "lazo cerrado"]

enunciado: "Un dispositivo que opera según una consigna preestablecida sin verificar si se ha alcanzado el objetivo (como {escenario[0]}, que {escenario[1]}) se clasifica como un sistema de ___."

explicacion: |
  Al no tener un sensor que verifique el estado real de la salida para ajustar la entrada, el sistema es de lazo abierto.
```

### 3 — Verdad o Falso: Perturbaciones

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["perturbaciones", "estabilidad"]

respuesta: falso
tipo: vf

enunciado: "Un sistema de lazo abierto es inherentemente más robusto ante perturbaciones externas que un sistema de lazo cerrado."

explicacion: |
  Falso. Los sistemas de lazo cerrado son más robustos porque pueden detectar la desviación causada por una perturbación y actuar para compensarla.
```

### 4 — Componentes del lazo cerrado

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["componentes", "sensores"]

respuesta: "sensor"
tipo: completar
respuestas_validas:
  - "sensor"
  - "actuador"
  - "controlador"

enunciado: "Para que un sistema pase de lazo abierto a lazo cerrado, es indispensable la incorporación de un ___ que permita medir la variable de salida."

explicacion: |
  El sensor es el componente encargado de capturar la información de la salida para cerrar el lazo de control.
```

### 5 — Secuencia de un lazo cerrado

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["flujo", "proceso"]

respuesta_orden: ["referencia", "controlador", "actuador", "planta", "sensor"]
tipo: ordenar
opciones_explicitas: ["referencia", "controlador", "actuador", "planta", "sensor"]

enunciado: "Ordene los componentes de un sistema de control de lazo cerrado siguiendo el flujo de la señal desde la consigna hasta la medición de la salida:"

pasos:
  - "Se establece el valor deseado (setpoint)."
  - "Se procesa el error resultante."
  - "Se aplica la acción correctiva."
  - "Se produce el cambio en el proceso físico."
  - "Se mide la salida para cerrar el ciclo."

explicacion: |
  El flujo correcto es: Referencia (entrada) -> Controlador -> Actuador -> Planta (proceso) -> Sensor (realimentación) -> vuelve al controlador.
```

### 6 — Concepto fundamental de realimentación

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["control", "realimentacion"]

respuesta: falso
tipo: vf

enunciado: "En un sistema de control de lazo abierto, la salida del sistema es medida y comparada con la referencia para corregir el error."

explicacion: |
  La característica definitoria de un sistema de lazo cerrado es la presencia de un sensor que mide la salida y proporciona realimentación. En lazo abierto, no hay medición de la salida para corregir la acción de control.
```

### 7 — Identificación de sistemas

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["ejemplos", "identificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un tostador de pan que funciona por tiempo fijo sin sensor de color de pan", "lazo abierto", "no utiliza la salida para ajustar la entrada"], ["Un aire acondicionado con termostato que apaga el compresor al llegar a la temperatura seteada", "lazo cerrado", "utiliza un sensor para comparar la salida con el valor deseado"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["lazo abierto", "lazo cerrado"]

enunciado: "Identifica el tipo de control del siguiente caso: {escenarios[escenario_idx][0]}"

explicacion: |
  El caso {escenarios[escenario_idx][0]} es de tipo {escenarios[escenario_idx][1]} porque {escenarios[escenario_idx][2]}.
```

### 8 — Análisis de componentes

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["componentes", "sensores"]

respuesta: "sensor"
tipo: completar
respuestas_validas:
  - "sensor"
  - "actuador"
  - "controlador"

enunciado: "En un sistema de control de lazo cerrado, el componente encargado de medir la variable de salida para enviarla al controlador se denomina ___."

explicacion: |
  El sensor es el elemento de realimentación. Sin el sensor, el sistema no puede conocer el estado real de la salida y, por lo tanto, no puede actuar sobre el error, convirtiéndose en un lazo abierto.
```

### 9 — Flujo de señales en lazo cerrado

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["flujo", "secuencia"]

respuesta_orden: ["Referencia", "Controlador", "Actuador", "Proceso", "Sensor"]
tipo: ordenar

opciones_explicitas: ["Referencia", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordena los elementos de un sistema de lazo cerrado siguiendo el flujo de señal desde la consigna hasta la realimentación:"

explicacion: |
  El flujo correcto es: 1. Referencia (setpoint) -> 2. Controlador (decide la acción) -> 3. Actuador (ejecuta la acción) -> 4. Proceso (cambia la variable) -> 5. Sensor (mide la salida y vuelve al controlador).
```

### 10 — Impacto de perturbaciones

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "avanzado"
  tags: ["perturbaciones", "estabilidad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un sistema de lazo abierto es ___ ante perturbaciones externas.", "más vulnerable"], ["Un sistema de lazo cerrado es ___ ante perturbaciones externas.", "más robusto"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["más vulnerable", "más robusto"]

enunciado: "Considerando la respuesta ante una perturbación que altera la salida: {casos[caso_idx][0]}"

explicacion: |
  En lazo abierto, si una perturbación cambia la salida, el sistema no lo nota y no puede corregirlo. En lazo cerrado, el sensor detecta el cambio y el controlador compensa la perturbación para volver al setpoint.
```

### 11 — El concepto de realimentación

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["control", "realimentacion"]

respuesta: verdadero
tipo: vf

enunciado: "La diferencia fundamental entre un sistema de lazo abierto y uno de lazo cerrado es la presencia de un sensor que permite la realimentación de la variable de salida hacia la entrada."

explicacion: |
  En un sistema de lazo abierto, la acción de control es independiente de la salida (no hay sensor de error). En un lazo cerrado, la salida se mide y se compara con la referencia para corregir la acción de control.
```

### 12 — Error en sistemas de lazo abierto

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["error", "perturbaciones"]

variables:
  escenario: uno_de([["un tostador de pan", "el tiempo de tostado es fijo"], ["un ventilador común", "la velocidad es constante"], ["un semáforo", "el ciclo de luces es predeterminado"]])

respuesta: "el tiempo de tostado es fijo"
tipo: mc
opciones_explicitas: ["el tiempo de tostado es fijo", "el nivel de quemado del pan", "la temperatura interna del pan", "la humedad del aire"]

enunciado: "En un sistema de lazo abierto, como {escenario[0]}, el sistema no puede compensar una perturbación porque su acción de control es ___."

explicacion: |
  Al no tener realimentación, el sistema de lazo abierto no "sabe" si el objetivo se cumplió o si una perturbación (como un pan más grueso) afectó el resultado.
```

### 13 — El rol del sensor

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["sensores", "componentes"]

respuestas_validas:
  - "sensor"
  - "actuador"
  - "controlador"
  - "referencia"
respuesta: "sensor"
tipo: completar

enunciado: "Para transformar un sistema de lazo abierto en uno de lazo cerrado, es indispensable añadir un ___ que mida la variable de salida."

explicacion: |
  El sensor es el componente encargado de captar la variable de salida y convertirla en una señal que el controlador pueda procesar para calcular el error.
```

### 14 — Componentes de un lazo cerrado

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["arquitectura", "flujo"]

opciones_explicitas: ["Referencia", "Controlador", "Actuador", "Proceso", "Sensor"]
respuesta_orden: ["Referencia", "Controlador", "Actuador", "Proceso", "Sensor"]
tipo: ordenar

enunciado: "Ordene los componentes de un sistema de control de lazo cerrado siguiendo el flujo lógico desde la entrada hasta la medición de la salida:"

explicacion: |
  El flujo típico es: se establece una Referencia -> el Controlador decide la acción -> el Actuador ejecuta -> el Proceso cambia la variable -> el Sensor mide la salida para cerrar el lazo.
```

### 15 — Estabilidad y perturbaciones

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "avanzado"
  tags: ["estabilidad", "perturbaciones"]

variables:
  caso: uno_de([["un sistema de control de temperatura de un horno", "la temperatura ambiente sube repentinamente"], ["un sistema de crucero en un auto", "una pendiente fuerte en la carretera"], ["un sistema de llenado de un tanque", "la presión de entrada de agua varía"]])

respuesta: "falso"
tipo: completar
enunciado: "Un sistema de lazo cerrado es inherentemente inmune a las perturbaciones externas, independientemente de su diseño."

explicacion: |
  Falso. Aunque el lazo cerrado tiene la *capacidad* de compensar perturbaciones (como {caso[0]}), su éxito depende del diseño del controlador y la precisión del sensor. Un mal diseño puede incluso causar inestabilidad.
```

### 16 — Diferencia fundamental en la estructura

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["control", "realimentacion"]

tipo: mc
opciones_explicitas: ["La presencia de un sensor que mide la salida", "La velocidad de procesamiento del controlador", "El uso de actuadores de alta potencia", "La conexión a una fuente de alimentación externa"]

enunciado: "La diferencia clave que distingue a un sistema de lazo cerrado de uno de lazo abierto es ___"

respuesta: "La presencia de un sensor que mide la salida"

explicacion: |
  En un sistema de lazo cerrado, la salida se mide constantemente y se compara con la referencia para corregir errores. En lazo abierto, el sistema actúa sin conocer el resultado real de su acción.
```

### 17 — Verdad o Falso: Reacción ante perturbaciones

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["perturbaciones", "estabilidad"]

tipo: vf

enunciado: "Un sistema de control de lazo abierto es capaz de compensar automáticamente las perturbaciones que afectan a la variable de proceso."

respuesta: falso

explicacion: |
  Falso. Al no tener realimentación (lazo abierto), el sistema no detecta si una perturbación desvió la salida de su objetivo, por lo que no puede realizar ajustes correctivos.
```

### 18 — Completar: Componentes del lazo

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["componentes", "sensores"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["un termostato simple", "sensor de temperatura"], ["un horno industrial", "termocupla"]]

tipo: completar
respuestas_validas:
  - "sensor de temperatura"
  - "termocupla"

enunciado: "Para transformar un sistema de lazo abierto en uno de lazo cerrado, es indispensable añadir un ___ que detecte el estado de la variable."

respuesta: datos[escenario_idx][1]

explicacion: |
  El elemento de medición (sensor) es el componente que cierra el lazo al proporcionar información sobre la salida real.
```

### 19 — Ordenar: Flujo de información en lazo cerrado

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["flujo", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Referencia (Set-point)", "Comparación (Error)", "Controlador", "Actuador", "Proceso", "Sensor"]

respuesta_orden: ["Referencia (Set-point)", "Comparación (Error)", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordene correctamente el flujo de información en un sistema de control de lazo cerrado, desde la intención hasta la medición de la salida:"

explicacion: |
  El ciclo comienza con el valor deseado (referencia), se calcula el error, el controlador actúa, el actuador modifica el proceso, y el sensor cierra el ciclo midiendo el resultado.
```

### 20 — Comparación de complejidad y costo

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["costo", "complejidad"]

tipo: mc
opciones_explicitas: ["Lazo abierto es más simple y económico", "Lazo cerrado es más simple y económico", "Lazo abierto es más preciso ante cambios externos", "Lazo cerrado es más propenso a errores por falta de sensores"]

enunciado: "Al comparar ambos sistemas, se puede afirmar que un sistema de lazo abierto es generalmente ___ que uno de lazo cerrado."

respuesta: "Lazo abierto es más simple y económico"

explicacion: |
  Debido a que no requiere sensores de retroalimentación ni algoritmos de comparación de error, los sistemas de lazo abierto son más sencillos y económicos de implementar.
```

### 21 — Identificación de lazo

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["control", "realimentacion"]

variables:
  escenarios: [["un tostador de pan que funciona por tiempo", "lazo abierto"], ["un aire acondicionado con termostato", "lazo cerrado"]]
  idx: uno_de([0,1])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["lazo abierto", "lazo cerrado"]

enunciado: "Si el sistema descrito es {escenarios[idx][0]}, ¿qué tipo de control está utilizando?"

explicacion: |
  La diferencia fundamental es la realimentación. Un tostador solo mide el tiempo (lazo abierto), mientras que un aire acondicionado mide la temperatura real para ajustar su salida (lazo cerrado).
```

### 22 — El rol de la variable de error

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["error", "control"]

variables:
  casos: [["lazo abierto", falso], ["lazo cerrado", verdadero]]
  idx: uno_de([0,1])

respuesta: casos[idx][1]
tipo: completar
enunciado: "En un sistema de {casos[idx][0]}, el controlador puede calcular la diferencia entre el valor deseado (setpoint) y la salida real (error) para ajustar la acción de control."

explicacion: |
  En el lazo cerrado, el sensor permite conocer la salida real, permitiendo calcular el error. En el lazo abierto, el sistema no sabe si la salida es la correcta.
```

### 23 — Componentes de un sistema cerrado

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["componentes", "sensores"]

respuesta: "sensor"
tipo: completar
respuestas_validas:
  - "sensor"
  - "actuador"
  - "controlador"

enunciado: "Para transformar un sistema de lazo abierto en uno de lazo cerrado, es indispensable la incorporación de un ___ que mida la variable de salida."

explicacion: |
  El sensor es el elemento encargado de la realimentación, permitiendo que la información de la salida regrese al controlador.
```

### 24 — Secuencia de un lazo cerrado

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["flujo", "proceso"]

respuesta_orden: ["Setpoint", "Controlador", "Actuador", "Proceso", "Sensor"]
tipo: ordenar
opciones_explicitas: ["Setpoint", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordene los elementos de un sistema de control de lazo cerrado siguiendo el flujo de información desde la referencia hasta la medición de la salida:"

explicacion: |
  El flujo comienza con el valor deseado (Setpoint), pasa por el cerebro (Controlador), la acción (Actuador), la ejecución (Proceso) y finalmente la medición (Sensor) que cierra el lazo.
```

### 25 — Análisis de perturbaciones

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "avanzado"
  tags: ["perturbaciones", "estabilidad"]

variables:
  ejemplos: [["Un sistema de lazo abierto es ___ ante perturbaciones externas.", "más"], ["Un sistema de lazo cerrado es ___ ante perturbaciones externas.", "menos"]]
  idx: uno_de([0,1])

respuesta: ejemplos[idx][1]
tipo: mc
opciones_explicitas: ["más", "menos"]

enunciado: "Considerando la capacidad de compensar cambios no deseados en el entorno, un sistema de {ejemplos[idx][0]} es ___ capaz de corregir su error automáticamente."

explicacion: |
  El lazo cerrado es más robusto ante perturbaciones porque detecta el desvío y actúa para corregirlo. El lazo abierto simplemente sigue su programa sin importar el resultado.
```
