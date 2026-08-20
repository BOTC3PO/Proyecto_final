# Fisica — Conservacion energia mecanica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Energía Mecánica

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["definicion", "energia_cinetica", "energia_potencial"]

respuesta: "energia_mecanica"
tipo: mc
opciones_explicitas: ["energia_cinetica", "energia_potencial", "energia_mecanica", "energia_termica"]

enunciado: "La suma de la energía cinética y la energía potencial de un sistema se denomina ___."

explicacion: |
  La energía mecánica es la suma de las energías de movimiento (cinética) y de posición (potencial).
```

### 2 — Conservación sin fricción

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["leyes_de_conservacion"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema donde no actúan fuerzas no conservativas (como la fricción), la energía mecánica total permanece constante durante el movimiento."

explicacion: |
  Si no hay fricción ni resistencia del aire, la energía mecánica se conserva.
```

### 3 — Componentes de la energía

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["componentes"]

respuesta: ["energia_cinetica", "energia_potencial"]
tipo: completar
respuestas_validas:
  - "energia_cinetica"
  - "energia_potencial"

enunciado: "La energía mecánica de un objeto en movimiento se compone de la ___ y la ___."

explicacion: |
  La energía mecánica es la suma de la cinética (movimiento) y la potencial (posición/configuración).
```

### 4 — Dependencia de la altura

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["energia_potencial"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual", "es cero"]

enunciado: "Si un objeto aumenta su altura respecto a un nivel de referencia sin cambiar su masa, su energía potencial ___."

explicacion: |
  La energía potencial gravitatoria es $E_p = m \cdot g \cdot h$. A mayor $h$, mayor $E_p$.
```

### 5 — Dependencia de la velocidad

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["energia_cinetica"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual", "es cero"]

enunciado: "Si la velocidad de un objeto aumenta, su energía cinética ___."

explicacion: |
  La energía cinética depende del cuadrado de la velocidad ($E_c = \frac{1}{2} m \cdot v^2$).
```

### 6 — Cálculo de energía cinética

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["calculo", "energia_cinetica"]

variables:
  m: 10
  v: 5

respuesta: 125
tipo: completar
tolerancia_abs: 0.1

enunciado: "Calcula la energía cinética de un objeto de {m} kg que se desplaza a una velocidad de {v} m/s."

pasos:
  - "Identificar la masa (m = 10 kg) y la velocidad (v = 5 m/s)."
  - "Aplicar la fórmula $E_c = \\frac{1}{2} \\cdot m \\cdot v^2$."

explicacion: |
  $E_c = 0.5 \cdot 10 \cdot 5^2 = 0.5 \cdot 10 \cdot 25 = 125$ Joules.
```

### 7 — Cálculo de energía potencial

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["calculo", "energia_potencial"]

variables:
  m: 2
  h: 10
  g: 9.8

respuesta: 196
tipo: completar
tolerancia_abs: 0.1

enunciado: "Calcula la energía potencial gravitatoria de un objeto de {m} kg situado a una altura de {h} metros. (usa g = {g})"

pasos:
  - "Identificar masa (m=2) y altura (h=10)."
  - "Usar la fórmula $E_p = m \\cdot g \\cdot h$."

explicacion: |
  $E_p = 2 \cdot 9.8 \cdot 10 = 196$ Joules.
```

### 8 — Energía mecánica total inicial

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["calculo", "energia_total"]

variables:
  m: 5
  v: 4
  h: 10
  g: 9.8

respuesta: 530
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un objeto de {m} kg se encuentra a una altura de {h} metros con una velocidad de {v} m/s. ¿Cuál es su energía mecánica total?"

pasos:
  - "Calcular Ec = 0.5 * {m} * {v}^2 = 40 J."
  - "Calcular Ep = {m} * {g} * {h} = 490 J."
  - "Sumar Ec + Ep = 40 + 490 = 530."

explicacion: |
  La energía mecánica total es la suma de la energía cinética y la potencial.
  Ec = 0.5 * m * v^2 = 0.5 * 5 * 16 = 40 J
  Ep = m * g * h = 5 * 9.8 * 10 = 490 J
  Et = 40 + 490 = 530 J
```

### 9 — Error común: Fricción

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["friccion", "error"]

respuesta: falso
tipo: vf

enunciado: "Si un objeto desliza por un plano inclinado con mucha fricción, la energía mecánica total se mantiene constante."

explicacion: |
  Falso. La fricción convierte la energía mecánica en energía térmica (calor).
```

### 10 — Transformación de energía (Caída libre)

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["transformacion"]

respuesta: "cinetica"
tipo: mc
opciones_explicitas: ["cinetica", "potencial", "termica", "nuclear"]

enunciado: "Cuando un objeto que estaba en reposo a una altura $h$ cae libremente, la energía potencial se transforma principalmente en energía ___."

explicacion: |
  A medida que baja, la altura disminuye (menor $E_p$) y la velocidad aumenta (mayor $E_c$).
```

### 11 — Error común: Masa en la velocidad

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["error", "relacion"]

respuesta: falso
tipo: vf

enunciado: "Si duplicamos la masa de un objeto, su energía cinética se duplica para una misma velocidad."

explicacion: |
  Verdadero. $E_c = 0.5 \cdot m \cdot v^2$, por lo tanto es directamente proporcional a la masa. (Nota: El usuario debe saber que es verdadero).
```

### 12 — Comparación de energías

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["comparacion"]

variables:
  idx: uno_de([0,1])
  escenario: [[10, 5], [5, 10]]

respuesta: "el_objeto_con_mas_energia"
tipo: mc
opciones_explicitas: ["el_objeto_con_mas_energia", "ambos_tienen_la_misma"]

enunciado: "Si comparamos un objeto A con datos {escenario[idx][0]} kg y 5 m/s, contra un objeto B con 5 kg y 10 m/s, ¿cuál tiene mayor energía cinética?"

explicacion: |
  Se debe calcular $0.5 \cdot m \cdot v^2$ para ambos.
```

### 13 — Montaña rusa

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["aplicacion", "montaña_rusa"]

variables:
  h_inicial: 50
  v_inicial: 0
  m: 100
  g: 9.8

respuesta: 49000
tipo: completar
tolerancia_abs: 1

enunciado: "En una montaña rusa, un carrito de {m} kg parte del reposo desde una altura de {h_inicial} m. ¿Cuál es su energía mecánica total en ese punto?"

pasos:
  - "Como está en reposo, E_c = 0."
  - "Calcular E_p = m * g * h = 100 * 9.8 * 50."

explicacion: "E_total = 49000 J."
```

### 14 — Conservación de energía mecánica

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["energia_mecanica", "conservacion"]

respuesta: verdadero
tipo: vf

enunciado: "La energía mecánica total (Ec + Ep) se conserva en ausencia de fuerzas no conservativas como la fricción."

explicacion: |
  La energía mecánica total se conserva cuando sólo actúan fuerzas conservativas (como la gravedad o un resorte ideal), sin pérdidas de calor, sonido u otras formas de disipación.
```

### 15 — Transformación de energía en un péndulo

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["pendulo", "transformacion_energia"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[1.5, "5.42"], [2.0, "6.26"], [3.0, "7.67"]]

enunciado: "Un péndulo se suelta desde una altura de {datos[idx][0]} metros. ¿Cuál es la velocidad (en m/s) al pasar por el punto más bajo? (g = 9.8 m/s²)"

pasos:
  - "Usar conservación de energía mecánica: Ep_inicial = Ec_final"
  - "m·g·h = (1/2)·m·v² → v = sqrt(2·g·h)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]
tolerancia_abs: 0.1

explicacion: |
  La energía potencial gravitatoria se transforma íntegramente en cinética al pasar por el punto más bajo: v = sqrt(2·g·h).
```

### 16 — Comparación de sistemas con y sin fricción

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["friccion", "comparacion"]

opciones_explicitas: ["sí se conserva", "no se conserva", "depende de la masa"]
respuesta: "no se conserva"
tipo: mc

enunciado: "En un sistema donde actúa fricción, ¿se conserva la energía mecánica total?"

explicacion: |
  La fricción es una fuerza no conservativa que disipa energía en forma de calor. Por lo tanto, la energía mecánica total no se conserva en presencia de fricción.
```

### 17 — Cálculo de altura máxima en caída libre

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["caida_libre", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[17, "14.74"], [20, "20.41"], [23, "26.99"]]

enunciado: "Una pelota se lanza hacia arriba con velocidad inicial {datos[idx][0]} m/s. ¿A qué altura máxima (en metros) alcanzará? (g = 9.8 m/s²)"

pasos:
  - "Usar conservación de energía mecánica: Ec_inicial = Ep_final"
  - "m·v²/2 = m·g·h → h = v²/(2·g)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]
tolerancia_abs: 0.1

explicacion: |
  La energía cinética inicial se transforma completamente en potencial gravitatoria: h = v²/(2g).
```

### 18 — Identificación de fuerzas conservativas

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["fuerzas_conservativas", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "La gravedad es una fuerza conservativa."

explicacion: |
  Las fuerzas conservativas son aquellas donde el trabajo realizado no depende de la trayectoria seguida (como la gravedad o la fuerza elástica). La gravedad sí es conservativa.
```

### 19 — Velocidad en una montaña rusa

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["montana_rusa", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[30, "24.25"], [45, "29.70"], [60, "34.29"]]

enunciado: "Una montaña rusa parte desde una altura de {datos[idx][0]} metros con velocidad inicial cero. ¿Cuál es su velocidad (en m/s) en el punto más bajo? (g = 9.8 m/s²)"

pasos:
  - "Usar conservación de energía mecánica: Ep_inicial = Ec_final"
  - "m·g·h = (1/2)·m·v² → v = sqrt(2·g·h)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]
tolerancia_abs: 0.1

explicacion: |
  La energía potencial inicial se transforma en cinética: v = sqrt(2·g·h). La masa del vehículo no afecta el resultado.
```

### 20 — Comparación de sistemas conservativos

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["comparacion", "resorte"]

opciones_explicitas: ["sí se conserva", "no se conserva"]
respuesta: "sí se conserva"
tipo: mc

enunciado: "En un resorte ideal sin fricción, ¿se conserva la energía mecánica total?"

explicacion: |
  Un resorte ideal es un sistema conservativo. La energía se transforma entre cinética y potencial elástica, pero no hay pérdidas.
```

### 21 — Pérdida de energía por fricción

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["friccion", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[150, "7.25"], [200, "8.37"], [250, "9.35"]]
  m: 4

enunciado: "Un bloque de {m} kg se desliza por una superficie con fricción, perdiendo el 30% de su energía mecánica. Si inicialmente tiene {datos[idx][0]} J de energía cinética, ¿cuál es su velocidad final (en m/s)?"

pasos:
  - "Energía restante = 70% de la energía cinética inicial"
  - "Ec_final = (m·v²)/2 → v = sqrt(2·0.7·Ec_inicial/m)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]
tolerancia_abs: 0.1

explicacion: |
  La fricción disipa el 30% de la energía, dejando el 70% disponible como energía cinética final.
```

### 22 — Energía en un sistema con fricción

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["comparacion", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema con fricción, la energía mecánica total disminuye con el tiempo."

explicacion: |
  La fricción convierte parte de la energía mecánica en calor, reduciendo la suma total (Ec + Ep) con el tiempo.
```

### 23 — Transformación energética en un péndulo

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["pendulo", "completar"]

respuestas_validas:
  - "máximo"
  - "maximo"
respuesta: "máximo"
tipo: completar

enunciado: "En un péndulo, la energía cinética es ___ cuando pasa por el punto más bajo."

explicacion: |
  El punto más bajo corresponde a la máxima velocidad y, por lo tanto, a la máxima energía cinética. La energía potencial es mínima allí.
```

### 24 — Velocidad inicial para alcanzar una altura específica

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["calculo", "caida_libre"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[15, "17.15"], [20, "19.80"], [25, "22.14"]]

enunciado: "¿Con qué velocidad inicial (en m/s) debe lanzarse un objeto hacia arriba para alcanzar una altura de {datos[idx][0]} metros? (g = 9.8 m/s²)"

pasos:
  - "Usar conservación de energía mecánica: Ec_inicial = Ep_final"
  - "m·v²/2 = m·g·h → v = sqrt(2·g·h)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]
tolerancia_abs: 0.1

explicacion: |
  Toda la energía cinética inicial debe transformarse en potencial gravitatoria: v = sqrt(2·g·h).
```

### 25 — Identificación de sistema conservativo

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["sistema_conservativo", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema donde sólo actúan fuerzas conservativas (como la gravedad) es un ejemplo de conservación de la energía mecánica."

explicacion: |
  En sistemas ideales donde sólo actúan fuerzas conservativas, la energía mecánica total (Ec + Ep) se mantiene constante.
```
