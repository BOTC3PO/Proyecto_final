### 1 — Diferencia entre Lazo Abierto y Lazo Cerrado
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_conceptos_basicos"
  nivel: "basico"
  tags: ["control", "realimentacion"]

respuesta: "realimentacion"
tipo: completar
respuestas_validas: ["realimentacion"]

enunciado: "La característica fundamental que distingue a un servomecanismo de un sistema de control de lazo abierto es la presencia de una señal de ___."

explicacion: |
  Un sistema de lazo abierto actúa según una consigna sin verificar el resultado. Un servomecanismo (lazo cerrado) utiliza la realimentación para comparar la salida con la entrada y corregir el error.
```

### 2 — El rol del Error en el Control
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_error"
  nivel: "intermedio"
  tags: ["error", "consigna"]

variables:
  escenario: uno_de([
    ["consiga_10", "10", "12"],
    ["consiga_50", "50", "48"]
  ])

respuesta: escenario[0][2]
tipo: mc
opciones_explicitas: ["12", "48", "10", "50"]

enunciado: "En un servomecanismo, si la consigna es {escenario[0][1]} y el sensor detecta que la posición actual es {escenario[0][2]}, el valor del error (consigna - medida) es:"

explicacion: |
  El error es la diferencia entre el valor deseado (setpoint) y el valor real medido. En este caso: 12 - 10 = 2 (o la diferencia correspondiente según el escenario sorteado).
```

### 3 — Componentes de un Servomecanismo
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_componentes"
  nivel: "basico"
  tags: ["sensores", "actuadores"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un servomecanismo requiere obligatoriamente de un elemento sensor para cerrar el lazo de control?"

explicacion: |
  Verdadero. Sin un sensor que mida la variable de salida, el sistema no puede conocer el error y, por lo tanto, no puede realizar ajustes automáticos, convirtiéndose en un sistema de lazo abierto.
```

### 4 — Secuencia de la Realimentación
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_flujo_señal"
  nivel: "intermedio"
  tags: ["flujo", "proceso"]

respuesta: ["consigna", "comparador", "controlador", "actuador", "planta", "sensor"]
tipo: ordenar
opciones_explicitas: ["consigna", "comparador", "controlador", "actuador", "planta", "sensor"]

enunciado: "Ordene los elementos de un lazo de control típico siguiendo el flujo de la señal desde la entrada hasta la medición de la salida:"

explicacion: |
  El flujo comienza con la consigna (setpoint), pasa por el comparador (donde se calcula el error), el controlador que procesa el error, el actuador que mueve la planta, y finalmente el sensor que mide la salida para volver al comparador.
```

### 5 — Error de Estado Estacionario
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_error_estado_estacionario"
  nivel: "avanzado"
  tags: ["estabilidad", "error"]

variables:
  caso: uno_de([
    ["P", "Proporcional", "error_persistente"],
    ["PI", "Proporcional-Integral", "error_cero"]
  ])

respuesta: caso[1][2]
tipo: mc
opciones_explicitas: ["error_persistente", "error_cero", "error_infinito"]

enunciado: "En un sistema de control de posición, un controlador puramente Proporcional (P) suele presentar un ___ cuando se le exige mantener un valor constante frente a una carga."

explicacion: |
  El control Proporcional puro a menudo no puede eliminar el error de estado estacionario (offset) porque requiere un error no nulo para generar una señal de corrección. El control Integral (I) es el encargado de eliminar este error.
```