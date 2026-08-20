### 1 — Diferencia fundamental en la estructura
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

### 2 — Verdad o Falso: Reacción ante perturbaciones
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

### 3 — Completar: Componentes del lazo
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
respuestas_validas: ["sensor de temperatura", "termocupla"]

enunciado: "Para transformar un sistema de lazo abierto en uno de lazo cerrado, es indispensable añadir un ___ que detecte el estado de la variable."

respuesta: datos[escenario_idx][1]

explicacion: |
  El elemento de medición (sensor) es el componente que cierra el lazo al proporcionar información sobre la salida real.
```

### 4 — Ordenar: Flujo de información en lazo cerrado
```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["flujo", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Referencia (Set-point)", "Comparación (Error)", "Controlador", "Actuador", "Proceso", "Sensor"]

respuesta: ["Referencia (Set-point)", "Comparación (Error)", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordene correctamente el flujo de información en un sistema de control de lazo cerrado, desde la intención hasta la medición de la salida:"

explicacion: |
  El ciclo comienza con el valor deseado (referencia), se calcula el error, el controlador actúa, el actuador modifica el proceso, y el sensor cierra el ciclo midiendo el resultado.
```

### 5 — Comparación de complejidad y costo
```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["costo", "complejidad"]

tipo: mc
opciones_explicitas: ["Lazo abierto es más complejo y costoso", "Lazo cerrado es más simple y económico", "Lazo abierto es más preciso ante cambios externos", "Lazo cerrado es más propenso a errores por falta de sensores"]

enunciado: "Al comparar ambos sistemas, se puede afirmar que un sistema de lazo abierto es generalmente ___ que uno de lazo cerrado."

respuesta: "Lazo abierto es más simple y económico"

explicacion: |
  Debido a que no requiere sensores de retroalimentación ni algoritmos de comparación de error, los sistemas de lazo abierto son más sencillos y económicos de implementar.
```