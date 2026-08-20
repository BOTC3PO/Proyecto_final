# Electronica — Componentes resistencia capacitor diodo transistor (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Función de la resistencia

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["resistencia", "componente"]

tipo: mc
opciones_explicitas: ["Aumentar la corriente", "Oponerse al paso de la corriente", "Almacenar carga eléctrica", "Amplificar señales"]

enunciado: "La función principal de una resistencia en un circuito es ___ la corriente eléctrica."

respuesta: "Oponerse al paso de la corriente"

explicacion: |
  Una resistencia limita el flujo de electrones, convirtiendo energía eléctrica en calor.
```

### 2 — El condensador

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["capacitor", "condensador"]

tipo: vf

enunciado: "Un capacitor (o condensador) tiene la capacidad de almacenar energía en forma de campo eléctrico."

respuesta: verdadero

explicacion: |
  Los capacitores almacenan energía mediante la separación de cargas en sus placas.
```

### 3 — El diodo semiconductor

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["diodo", "semiconductor"]

tipo: mc
opciones_explicitas: ["Permite el flujo en ambos sentidos", "Permite el flujo en un solo sentido", "Actúa como un interruptor automático", "Almacena energía"]

enunciado: "Un diodo es un componente que ___."

respuesta: "Permite el flujo en un solo sentido"

explicacion: |
  El diodo actúa como una válvula que permite que la corriente fluya en una dirección (polarización directa) pero bloquea el flujo en la dirección opuesta (polarización inversa).
```

### 4 — El transistor bipolar

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["transistor", "amplificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["amplificar una señal", "controlar el flujo de corriente"], ["actuar como interruptor", "conmutar estados"]]

tipo: completar
respuestas_validas:
  - "amplificar una señal"
  - "actuar como interruptor"

enunciado: "Dependiendo de cómo se polarice, un transistor puede utilizarse para ___ o para ___."

respuesta: datos[escenario_idx][0]

explicacion: |
  El transistor es el componente fundamental de la electrónica moderna; puede funcionar en la región activa (amplificación) o en la región de saturación/corte (como interruptor).
```

### 5 — Orden de componentes por función

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["ordenar", "conceptos"]

tipo: ordenar
opciones_explicitas: ["Resistencia", "Capacitor", "Diodo", "Transistor"]

enunciado: "Ordena los siguientes componentes según su función principal de 'limitación', 'almacenamiento', 'rectificación' y 'conmutación' respectivamente:"

respuesta_orden: ["Resistencia", "Capacitor", "Diodo", "Transistor"]

explicacion: |
  La secuencia correcta es: Resistencia (limita), Capacitor (almacena), Diodo (rectifica/direcciona) y Transistor (conmutación/amplificación).
```

### 6 — Función del capacitor en un circuito

```
metadata:
  materia: "electronica"
  tema: "capacitor"
  nivel: "basico"
  tags: ["componentes", "almacenamiento"]

enunciado: "Un capacitor (condensador) actúa como un dispositivo que almacena energía en forma de ___."

respuestas_validas:
  - "campo eléctrico"
  - "campo magnético"

respuesta: "campo eléctrico"
tipo: completar

explicacion: |
  El capacitor almacena energía mediante la acumulación de cargas opuestas en sus placas, generando un campo eléctrico entre ellas.
```

### 7 — Identificación de componente por símbolo

```
metadata:
  materia: "electronica"
  tema: "resistencia"
  nivel: "basico"
  tags: ["componentes", "simbolos"]

enunciado: "Si observamos un componente cuyo símbolo es una línea en zigzag (o un rectángulo) y su función es limitar el paso de la corriente, estamos ante una: ___"

opciones_explicitas: ["resistencia", "capacitor", "diodo", "transistor"]

respuesta: "resistencia"
tipo: mc

explicacion: |
  La resistencia está diseñada para oponerse al flujo de corriente eléctrica, disipando energía en forma de calor.
```

### 8 — Comportamiento del diodo

```
metadata:
  materia: "electronica"
  tema: "diodo"
  nivel: "basico"
  tags: ["semiconductores", "polarizacion"]

enunciado: "En un circuito con un diodo conectado en polarización directa, la corriente puede fluir a través de él. ¿Es esto verdadero o falso?"

respuesta: verdadero
tipo: vf

explicacion: |
  El diodo permite el paso de la corriente cuando el ánodo está a un potencial mayor que el cátodo (polarización directa).
```

### 9 — Secuencia de funcionamiento de un transistor BJT

```
metadata:
  materia: "electronica"
  tema: "transistor"
  nivel: "intermedio"
  tags: ["transistor", "funcionamiento"]

enunciado: "Para que un transistor NPN funcione como un interruptor en estado de corte, se deben seguir estos pasos en orden:"

opciones_explicitas: ["Aplicar voltaje en la base", "Corriente en la base es cero", "El transistor no conduce"]

respuesta_orden: ["Aplicar voltaje en la base", "Corriente en la base es cero", "El transistor no conduce"]
tipo: ordenar

explicacion: |
  En el estado de corte, no hay corriente de base, por lo tanto, el canal entre colector y emisor permanece abierto.
```

### 10 — Cálculo de corriente en una resistencia

```
metadata:
  materia: "electronica"
  tema: "resistencia"
  nivel: "basico"
  tags: ["ley_ohm", "calculo"]

variables:
  escenario: [[10.0, 2.0], [5.0, 5.0], [20.0, 4.0]]
  idx: uno_de([0,1,2])

enunciado: "Si tenemos una resistencia de {escenario[idx][0]} Ω conectada a una fuente de voltaje de {escenario[idx][1]} V, la corriente que circula es de ___ A."

respuesta: "resultado"
tipo: completar
tolerancia_abs: 0.01

pasos:
  - "Aplicar la Ley de Ohm: I = V / R"
  - "Calcular: {escenario[idx][1]} / {escenario[idx][0]}"

explicacion: |
  Usando la Ley de Ohm (I = V / R), el cálculo es {escenario[idx][1]} / {escenario[idx][0]} = {escenario[idx][1] / escenario[idx][0]} A.
```

### 11 — La función del capacitor

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["capacitor", "condensador", "carga"]

respuesta: "almacenar_energia"
tipo: completar
respuestas_validas:
  - "almacenar_energia"
  - "almacenar_carga"
  - "almacenar_energia_electrica"

enunciado: "A diferencia de una resistencia que disipa energía en forma de calor, un capacitor tiene la función principal de ___."

explicacion: |
  El capacitor (o condensador) almacena energía en un campo eléctrico mediante la acumulación de cargas en sus placas, permitiendo liberar esa energía cuando el circuito lo requiere.
```

### 12 — La confusión de la resistencia

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["resistencia", "ley_ohm"]

opciones_explicitas: ["Aumentar la corriente", "Disminuir la corriente", "Aumentar el voltaje"]
respuesta: "Disminuir la corriente"
tipo: mc

enunciado: "Si se coloca una resistencia en serie con una fuente de voltaje constante, ¿qué efecto tiene sobre la corriente que circula por el circuito?"

explicacion: |
  Según la Ley de Ohm (I = V/R), la corriente es inversamente proporcional a la resistencia. Al aumentar la resistencia, la corriente disminuye.
```

### 13 — El comportamiento del diodo

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["diodo", "polarizacion"]

respuesta: verdadero
tipo: vf
enunciado: "Si un diodo se encuentra en condiciones de polarización directa, la corriente puede fluir a través de él."

explicacion: |
  Un diodo actúa como una válvula de una sola vía. En polarización directa (ánodo positivo, cátodo negativo), permite el paso de corriente; en inversa, actúa como un aislante.
```

### 14 — El transistor como interruptor

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["transistor", "base", "emisor", "colector"]

opciones_explicitas: ["Base", "Emisor", "Colector"]
respuesta: "Base"
tipo: mc

enunciado: "En un transistor BJT, el terminal que se utiliza para controlar el flujo de corriente entre el emisor y el colector mediante una pequeña corriente externa es la ___."

explicacion: |
  El transistor funciona como un amplificador o interruptor controlado por la corriente que entra en la terminal de la Base.
```

### 15 — Flujo de corriente en un circuito serie

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["circuito_serie", "ordenar"]

opciones_explicitas: ["Resistencia", "Capacitor", "Diodo"]
respuesta_orden: ["Resistencia", "Capacitor", "Diodo"]
tipo: ordenar

enunciado: "Ordena los siguientes componentes según el orden en que se encuentran en un circuito serie hipotético (de entrada a salida):"

pasos:
  - "Componente 1 (Resistencia)"
  - "Componente 2 (Capacitor)"
  - "Componente 3 (Diodo)"

explicacion: |
  En un circuito en serie, los componentes se colocan uno tras otro en la misma trayectoria de la corriente.
```

### 16 — El rol del capacitor

```
metadata:
  materia: "electronica"
  tema: "capacitor_vs_resistencia"
  nivel: "basico"
  tags: ["componentes", "capacitor", "resistencia"]

tipo: mc
opciones_explicitas: ["Almacena energía en un campo eléctrico", "Disipa energía en forma de calor", "Regula el flujo de corriente de forma constante", "Amplifica la tensión de una señal"]

enunciado: "A diferencia de una resistencia, que disipa la energía eléctrica mediante el efecto Joule, un capacitor se distingue por su capacidad de..."

respuesta: "Almacena energía en un campo eléctrico"

explicacion: |
  La resistencia consume energía transformándola en calor, mientras que el capacitor la almacena temporalmente en un campo eléctrico entre sus placas.
```

### 17 — El comportamiento del diodo

```
metadata:
  materia: "electronica"
  tema: "diodo_unidireccional"
  nivel: "basico"
  tags: ["diodo", "semiconductor"]

tipo: vf

enunciado: "Un diodo se diferencia de un cable conductor en que el diodo permite el paso de la corriente en un solo sentido (polarización directa) y lo bloquea en el sentido contrario (polarización inversa)."

respuesta: verdadero

explicacion: |
  El diodo actúa como una válvula unidireccional para la corriente eléctrica, a diferencia de un conductor ideal que permite el flujo en ambos sentidos.
```

### 18 — El transistor como interruptor

```
metadata:
  materia: "electronica"
  tema: "transistor_vs_resistencia"
  nivel: "intermedio"
  tags: ["transistor", "control", "resistencia"]

variables:
  idx: uno_de([0, 1])
  escenario: [["resistencia", "limita"], ["transistor", "controla"]]

tipo: completar
respuestas_validas:
  - "limita"
  - "controla"

enunciado: "Mientras que una resistencia se utiliza para ___ la corriente de manera pasiva, un transistor permite ___ la corriente mediante una señal externa en su terminal de base."

respuesta: escenario[idx][1]

explicacion: |
  La resistencia es un componente pasivo que ofrece oposición al flujo; el transistor es un dispositivo activo que puede actuar como interruptor o amplificador según la corriente de control.
```

### 19 — Diferencia de almacenamiento: Capacitor vs Batería

```
metadata:
  materia: "electronica"
  tema: "capacitor_vs_bateria"
  nivel: "intermedio"
  tags: ["capacitor", "bateria", "energia"]

tipo: mc
opciones_explicitas: ["El capacitor libera la energía muy rápidamente; la batería la libera lentamente", "La batería es un componente pasivo; el capacitor es activo", "El capacitor almacena energía química; la batería energía eléctrica", "No hay diferencia en su funcionamiento"]

enunciado: "En términos de la velocidad de descarga, un capacitor se distingue de una batería porque..."

respuesta: "El capacitor libera la energía muy rápidamente; la batería la libera lentamente"

explicacion: |
  Los capacitores almacenan energía en campos eléctricos y pueden descargar su energía casi instantáneamente, mientras que las baterías dependen de reacciones químicas más lentas.
```

### 20 — Secuencia de flujo en un circuito con diodo

```
metadata:
  materia: "electronica"
  tema: "secuencia_componentes"
  nivel: "basico"
  tags: ["orden", "circuito"]

tipo: ordenar
opciones_explicitas: ["Fuente de tensión", "Resistencia", "Diodo", "Carga"]

respuesta_orden: ["Fuente de tensión", "Resistencia", "Diodo", "Carga"]

enunciado: "En un circuito de protección simple donde queremos limitar la corriente antes de que llegue a un diodo que protege una carga, el orden lógico de los componentes desde el polo positivo es:"

explicacion: |
  El orden estándar es: Fuente -> Resistencia (para limitar corriente) -> Diodo (para rectificar/proteger) -> Carga (el elemento que consume).
```

### 21 — Identificación de componentes

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["componentes", "identificacion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [["resistencia", "limita la corriente"], ["capacitor", "almacena energía"], ["diodo", "permite flujo en un sentido"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["limita la corriente", "almacena energía", "permite flujo en un sentido", "amplifica señal"]

enunciado: "Si tenemos un componente llamado {datos[escenario_idx][0]}, ¿cuál es su función en el circuito?"

explicacion: |
  El componente seleccionado es un/a {datos[escenario_idx][0]}, cuya función es {datos[escenario_idx][1]}.
```

### 22 — El rol del capacitor

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["capacitor", "condensador"]

tipo: vf

enunciado: "¿Un capacitor (condensador) puede actuar como una fuente de energía temporal en un circuito?"

respuesta: verdadero

explicacion: |
  Verdadero. Los capacitores almacenan energía en un campo eléctrico y pueden liberarla rápidamente cuando el circuito lo requiere.
```

### 23 — Comportamiento del diodo

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["diodo", "polarizacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["directa", "conduce"], ["inversa", "bloquea"]]
  tipo_polar: ["directa", "inversa"]
  resultado: ["conduce", "bloquea"]

tipo: completar

enunciado: "Si un diodo se encuentra en polarización ___, la corriente será ___."

respuestas_validas:
  - "directa"
  - "inversa"
  - "conduce"
  - "bloquea"

respuesta: "si tipo_polar == 'directa' entonces 'conduce' sino 'bloquea'"

explicacion: |
  En polarización directa, el diodo permite el paso de corriente. En polarización inversa, actúa como un aislante (bloquea).
```

### 24 — El transistor como interruptor

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["transistor", "conmutacion"]

tipo: mc
opciones_explicitas: ["Controlar el flujo de corriente mediante una señal pequeña", "Aumentar la resistencia de forma infinita", "Almacenar carga eléctrica", "Rectificar corriente alterna"]

enunciado: "¿Cuál es la función principal de un transistor cuando se utiliza en modo de conmutación?"

respuesta: "Controlar el flujo de corriente mediante una señal pequeña"

explicacion: |
  El transistor puede actuar como un interruptor electrónico, donde una pequeña corriente en la base controla una corriente mayor entre colector y emisor.
```

### 25 — Secuencia de montaje de un circuito simple

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["montaje", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Fuente de alimentación", "Resistencia", "LED", "Tierra/GND"]
respuesta_orden: ["Fuente de alimentación", "Resistencia", "LED", "Tierra/GND"]

enunciado: "Ordena los componentes para crear un circuito de protección simple para un LED (de positivo a negativo):"

explicacion: |
  El orden lógico es: primero la fuente, luego la resistencia para limitar corriente, el LED para emitir luz y finalmente el retorno a tierra.
```
