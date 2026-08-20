### 1 — Concepto de realimentación
```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["control", "realimentacion"]

respuesta: "realimentación"
tipo: completar
respuestas_validas: ["realimentación", "retroalimentación"]

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
  escenario_idx: uno_de([0, 1])
  escenarios: [[["un tostador de pan", "no mide el color del pan"], ["un ventilador con velocidad fija", "no detecta la temperatura"]]]

respuesta: uno_de(["lazo abierto", "lazo cerrado"])
tipo: mc
opciones_explicitas: ["lazo abierto", "lazo cerrado"]

enunciado: "Un dispositivo que opera según una consigna preestablecida sin verificar si se ha alcanzado el objetivo (como {escenarios[escenario_idx][0]}) se clasifica como un sistema de ___."

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
respuestas_validas: ["sensor", "actuador", "controlador"]

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

respuesta: ["referencia", "controlador", "actuador", "planta", "sensor"]
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