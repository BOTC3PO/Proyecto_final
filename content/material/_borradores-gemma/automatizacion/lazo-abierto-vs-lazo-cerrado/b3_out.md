### 1 — El concepto de realimentación
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

### 2 — Error en sistemas de lazo abierto
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

### 3 — El rol del sensor
```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["sensores", "componentes"]

respuestas_validas: ["sensor", "actuador", "controlador", "referencia"]
respuesta: "sensor"
tipo: completar

enunciado: "Para transformar un sistema de lazo abierto en uno de lazo cerrado, es indispensable añadir un ___ que mida la variable de salida."

explicacion: |
  El sensor es el componente encargado de captar la variable de salida y convertirla en una señal que el controlador pueda procesar para calcular el error.
```

### 4 — Componentes de un lazo cerrado
```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["arquitectura", "flujo"]

opciones_explicitas: ["Referencia", "Controlador", "Actuador", "Proceso", "Sensor"]
respuesta: ["Referencia", "Controlador", "Actuador", "Proceso", "Sensor"]
tipo: ordenar

enunciado: "Ordene los componentes de un sistema de control de lazo cerrado siguiendo el flujo lógico desde la entrada hasta la medición de la salida:"

explicacion: |
  El flujo típico es: se establece una Referencia -> el Controlador decide la acción -> el Actuador ejecuta -> el Proceso cambia la variable -> el Sensor mide la salida para cerrar el lazo.
```

### 5 — Estabilidad y perturbaciones
```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "avanzado"
  tags: ["estabilidad", "perturbaciones"]

variables:
  caso: uno_de([["un sistema de control de temperatura de un horno", "la temperatura ambiente sube repentinamente"], ["un sistema de crucero en un auto", "una pendiente fuerte en la carretera"], ["un sistema de llenado de un tanque", "la presión de entrada de agua varía"]])

respuesta: "falso"
tipo: vf

enunciado: "Un sistema de lazo cerrado es inherentemente inmune a las perturbaciones externas, independientemente de su diseño."

explicacion: |
  Falso. Aunque el lazo cerrado tiene la *capacidad* de compensar perturbaciones (como {caso[0]}), su éxito depende del diseño del controlador y la precisión del sensor. Un mal diseño puede incluso causar inestabilidad.
```