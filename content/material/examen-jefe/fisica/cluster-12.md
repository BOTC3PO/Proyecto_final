# Examen jefe — Maestro de la Presión y Potencia

> Logro #167. Completaste el parcial dominando la mecánica, la presión hidrostática y atmosférica, y la potencia. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **119 preguntas totales** en 5/5 secciones.

---

## Sección: potencia-mecanica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["definicion", "trabajo", "tiempo"]

tipo: mc
opciones_explicitas: ["El trabajo realizado por unidad de tiempo", "La energía almacenada en un sistema", "La fuerza aplicada sobre un objeto", "El cambio en la velocidad de un cuerpo"]

enunciado: "La potencia mecánica se define físicamente como ___."

explicacion: |
  La potencia mide la rapidez con la que se realiza un trabajo o se transfiere energía. Su fórmula es P = W/t.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: vf
respuesta: falso

enunciado: "¿La unidad de potencia en el Sistema Internacional de Unidades (SI) es el Joule (J)?"

explicacion: |
  Falso. El Joule (J) es la unidad de trabajo o energía. La unidad de potencia es el Vatio (W), que equivale a 1 Joule por segundo (1 J/s).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

variables:
  escenario: uno_de([[100, 10], [200, 20], [50, 5]])

tipo: completar
respuestas_validas: [10.0, 10.0, 10.0]
respuesta: escenario[0] / escenario[1]

enunciado: "Si un motor realiza un trabajo de {escenario[0]} J en un tiempo de {escenario[1]} s, la potencia mecánica resultante es de ___ W."

pasos:
  - "Identificar el trabajo (W): {escenario[0]} J"
  - "Identificar el tiempo (t): {escenario[1]} s"
  - "Aplicar la fórmula P = W / t"

explicacion: |
  Dividiendo el trabajo entre el tiempo obtenemos: {escenario[0]} / {escenario[1]} = {escenario[0]/escenario[1]} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["proporcionalidad", "conceptos"]

tipo: mc
opciones_explicitas: ["Directamente proporcional al trabajo realizado", "Inversamente proporcional al tiempo", "Inversamente proporcional al trabajo realizado", "Directamente proporcional al tiempo"]

enunciado: "Si mantenemos el tiempo constante, la potencia es ___ al trabajo realizado. Si mantenemos el trabajo constante, la potencia es ___ al tiempo empleado."

explicacion: |
  Según la fórmula P = W/t: si W aumenta, P aumenta (directamente proporcional). Si t aumenta, P disminuye (inversamente proporcional).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["procesos", "conceptos"]

tipo: ordenar
opciones_explicitas: ["Aplicar una fuerza", "Desplazar un objeto", "Realizar un trabajo", "Calcular la potencia"]

enunciado: "Ordene lógicamente los pasos para determinar la potencia mecánica en un proceso físico:"

explicacion: |
  Primero debe existir una fuerza que cause un desplazamiento, lo cual genera un trabajo (W). Una vez obtenido el trabajo y el tiempo, se puede calcular la potencia (P).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["definicion", "trabajo", "tiempo"]

respuesta: "trabajo / tiempo"
tipo: completar
respuestas_validas: ["trabajo / tiempo", "W / t", "trabajo dividido tiempo"]

enunciado: "La potencia mecánica se define matemáticamente como el ___ realizado por un objeto por unidad de tiempo."

explicacion: |
  La potencia (P) mide la rapidez con la que se realiza un trabajo (W). Su fórmula es P = W / t.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["calculo", "unidades"]

variables:
  escenario: uno_de([[100, 10, 10], [500, 5, 100], [1200, 20, 60]])

respuesta: escenario[0][0] / escenario[0][1]

tipo: mc
opciones_explicitas: ["10.0", "10.0", "10.0"]

enunciado: "Un motor realiza un trabajo de {escenario[0][0]} Joules en un tiempo de {escenario[0][1]} segundos. ¿Cuál es su potencia mecánica?"

pasos:
  - "Identificar el trabajo (W): {escenario[0][0]} J"
  - "Identificar el tiempo (t): {escenario[0][1]} s"
  - "Aplicar la fórmula: P = W / t"
  - "Calcular: {escenario[0][0]} / {escenario[0][1]} = {escenario[0][0] / escenario[0][1]}"

explicacion: |
  La potencia se calcula dividiendo el trabajo total por el tiempo empleado. En este caso: 100J / 10s = 10 W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "si_sistema"]

respuesta: verdadero

tipo: vf

enunciado: "¿La unidad de potencia en el Sistema Internacional (SI) es el Vatio (Watt), que equivale a 1 Julio por segundo?"

explicacion: |
  Correcto. 1 W = 1 J/s.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["relacion", "tiempo"]

variables:
  caso: uno_de([[10, 2], [20, 5], [30, 3]])

respuesta: caso[0][0] / caso[0][1]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Si un sistema realiza un trabajo de {caso[0][0]} J en {caso[0][1]} segundos, ¿cuántos Watts de potencia está desarrollando?"

pasos:
  - "Datos: W = {caso[0][0]} J, t = {caso[0][1]} s"
  - "Fórmula: P = W / t"
  - "Cálculo: {caso[0][0]} / {caso[0][1]}"

explicacion: |
  Dividiendo el trabajo entre el tiempo obtenemos la potencia: {caso[0][0]} / {caso[0][1]} = {caso[0][0] / caso[0][1]} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["procedimiento", "pasos"]

respuesta: ["Identificar el trabajo realizado (W) en Joules", "Identificar el tiempo transcurrido (t) en segundos", "Dividir el trabajo por el tiempo (W/t) para obtener Watts"]
tipo: ordenar
opciones_explicitas: ["Dividir el trabajo por el tiempo (W/t) para obtener Watts", "Identificar el trabajo realizado (W) en Joules", "Identificar el tiempo transcurrido (t) en segundos"]

enunciado: "Ordena los pasos lógicos para calcular la potencia mecánica de un objeto dado un trabajo y un tiempo."

explicacion: |
  Para resolver problemas de potencia, primero debemos asegurar que tenemos las magnitudes de trabajo y tiempo en unidades SI, y luego aplicar la división.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "trabajo"]

respuesta: falso
tipo: vf

enunciado: "Si un objeto realiza el mismo trabajo que otro, pero lo hace en la mitad del tiempo, ambos han desarrollado la misma potencia mecánica."

explicacion: |
  La potencia se define como $P = W/t$. Si el tiempo disminuye, la potencia aumenta. Por lo tanto, quien realiza el mismo trabajo en menos tiempo es más potente.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

variables:
  escenario: uno_de([
    ["100 J en 5 s", "20"],
    ["50 J en 2 s", "25"],
    ["10 J en 10 s", "1"]
  ])

respuesta: escenario[1
tipo: completar
respuestas_validas: ["20", "25", "1"]

enunciado: "Calcula la potencia mecánica realizada en el siguiente caso: {escenario[0]}."

pasos:
  - "Identifica el trabajo realizado (W): {escenario[0].split(' ')[0]} J"
  - "Identifica el tiempo empleado (t): {escenario[0].split(' ')[2]} s"
  - "Aplica la fórmula P = W / t"

explicacion: |
  La potencia se calcula dividiendo el trabajo (Joules) por el tiempo (segundos), resultando en Watts (W).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["dinamica", "conceptos"]

respuesta: "La potencia mecánica depende de la fuerza aplicada y la velocidad."
tipo: mc
opciones_explicitas: [
  "La potencia mecánica depende únicamente de la fuerza aplicada.",
  "La potencia mecánica depende únicamente de la velocidad del objeto.",
  "La potencia mecánica depende de la fuerza aplicada y la velocidad.",
  "La potencia mecánica no depende de la fuerza si la velocidad es constante."
]

enunciado: "Un error común es pensar que si un objeto se mueve a velocidad constante, la potencia es cero. ¿Cuál es la relación correcta entre potencia, fuerza y velocidad?"

explicacion: |
  Para un objeto en movimiento, la potencia instantánea se puede expresar como $P = F \cdot v$. Aunque el trabajo neto sea cero en un ciclo cerrado, la potencia mecánica de la fuerza aplicada puede ser distinta de cero.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["analisis_dimensional"]

respuesta: "verdadero"
tipo: completar
enunciado: "Si duplicamos la fuerza aplicada a un objeto y también duplicamos su velocidad, la potencia mecánica resultante se cuadruplica."

explicacion: |
  Dado que $P = F \cdot v$, si $F' = 2F$ y $v' = 2v$, entonces $P' = (2F) \cdot (2v) = 4(F \cdot v)$, es decir, $4P$.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "avanzado"
  tags: ["procedimiento", "calculo"]

variables:
  datos: uno_de([
    ["1000 N", "5 m/s", "2 s"],
    ["500 N", "10 m/s", "5 s"],
    ["200 N", "2 m/s", "10 s"]
  ])

respuesta: [
    "Calcular el trabajo realizado (W = F * d)",
    "Identificar el tiempo total (t)",
    "Dividir el trabajo por el tiempo (P = W / t)"
  ]
tipo: ordenar
opciones_explicitas: [
  "Calcular el trabajo realizado (W = F * d)",
  "Identificar el tiempo total (t)",
  "Dividir el trabajo por el tiempo (P = W / t)",
  "Multiplicar la fuerza por el tiempo (P = F * t)"
]

enunciado: "Para calcular la potencia mecánica de un motor que levanta una carga de {datos[0]} con una velocidad de {datos[1]} durante {datos[2]}, ¿cuál es el orden lógico de resolución?"

explicacion: |
  Primero debemos obtener la energía transferida (Trabajo) o usar la relación directa de potencia instantánea, y finalmente dividir por el intervalo de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "velocidad"
tipo: completar
respuestas_validas: ["velocidad", "rapidez", "aceleracion"]

enunciado: "Mientras que el trabajo describe la transferencia de energía en un proceso, la potencia describe la ___ con la que se realiza dicho trabajo."

explicacion: |
  La potencia es la rapidez con la que se realiza un trabajo o se transfiere energía. Se define matemáticamente como el trabajo realizado dividido por el tiempo empleado ($P = W/t$).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

variables:
  escenario: uno_de([["Realiza 100J en 2s", 20, 50], ["Realiza 100J en 5s", 20, 20], ["Realiza 100J en 10s", 20, 10]])
  valor_w: escenario[0]
  valor_t: escenario[1]
  valor_p: escenario[2]

respuesta: valor_p
tipo: mc
opciones_explicitas: [20, 50, 10, 100]

enunciado: "Si un sistema realiza un trabajo de {valor_w} Joules en un tiempo de {valor_t} segundos, su potencia mecánica es de ___ Watts."

explicacion: |
  Aplicando la fórmula $P = W/t$, tenemos que $P = {valor_w} / {valor_t} = {valor_p}$ W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["conceptos", "tiempo"]

respuesta: falso
tipo: vf

enunciado: "Si se realiza el mismo trabajo en el doble de tiempo, la potencia mecánica resultante será el doble de la potencia original."

explicacion: |
  Falso. Como la potencia es inversamente proporcional al tiempo ($P \propto 1/t$), si el tiempo se duplica, la potencia se reduce a la mitad.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

respuesta: "W"
tipo: mc
opciones_explicitas: ["J", "W", "N", "m/s"]

enunciado: "En el Sistema Internacional (SI), la unidad de potencia mecánica es el ___ (Watt), que equivale a un Joule por segundo."

explicacion: |
  El Watt (W) es la unidad derivada que combina la unidad de trabajo (Joule) y la de tiempo (segundo).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["comparacion", "calculo"]

variables:
  caso: uno_de([[100, 2, 50], [200, 5, 40], [50, 10, 5]])
  w: caso[0]
  t: caso[1]
  p: caso[2]

respuesta: p
tipo: completar
tolerancia_abs: 0

enunciado: "Un motor realiza un trabajo de {w} J en un intervalo de tiempo de {t} s. ¿Cuál es su potencia en Watts?"

pasos:
  - "Identificar el trabajo (W) y el tiempo (t)."
  - "Dividir el trabajo por el tiempo: P = W / t."

explicacion: |
  El cálculo realizado es $P = {w} / {t} = {p}$ W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["trabajo", "tiempo", "potencia"]

variables:
  escenario: uno_de([[1000, 500, 2000], [2500, 1000, 400], [1500, 800, 600]])
  w: escenario[0]
  t: escenario[1]
  p: escenario[2]

respuesta: w / t
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un motor realiza un trabajo de {w} J para elevar una carga durante un tiempo de {t} s. ¿Cuál es la potencia mecánica desarrollada por el motor en Watts?"

pasos:
  - "Identificar el trabajo realizado (W = {w} J)"
  - "Identificar el tiempo transcurrido (t = {t} s)"
  - "Aplicar la fórmula de potencia: P = W / t"

explicacion: |
  La potencia mecánica se define como la rapidez con la que se realiza un trabajo. 
  En este caso: P = {w} J / {t} s = {redondear(w/t, 2)} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["conceptos", "unidades"]

respuesta: "W"
tipo: mc
opciones_explicitas: ["J", "W", "N", "m/s"]

enunciado: "Si un objeto realiza un trabajo de 500 Joules en 10 segundos, la unidad de medida de la potencia resultante es la unidad de..."

explicacion: |
  La potencia es la relación entre trabajo (J) y tiempo (s). 
  J/s es equivalente a la unidad de potencia, el Watt (W).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["comparacion", "calculo"]

variables:
  datos: [[100, 5, 1000, 20], [50, 2, 500, 50], [200, 10, 100, 5]]
  idx: uno_de([0, 1, 2])
  w1: datos[idx][0]
  t1: datos[idx][1]
  w2: datos[idx][2]
  t2: datos[idx][3]
  p1: w1 / t1
  p2: w2 / t2

respuesta: p1 > p2
tipo: completar
enunciado: "Se comparan dos máquinas. La máquina A realiza {w1} J en {t1} s. La máquina B realiza {w2} J en {t2} s. ¿Es la potencia de la máquina A mayor que la de la máquina B?"

explicacion: |
  Calculamos las potencias:
  P_A = {w1} / {t1} = {redondear(p1, 2)} W
  P_B = {w2} / {t2} = {redondear(p2, 2)} W
  La afirmación es {p1 > p2}.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["despeje", "tiempo"]

variables:
  escenario: uno_de([[500, 100], [1200, 300], [400, 50]])
  w: escenario[0]
  p: escenario[1]
  t: w / p

respuesta: t
tipo: completar
respuestas_validas: [5, 4, 8]

enunciado: "Una máquina tiene una potencia constante de {p} W. ¿Cuántos segundos tardará en realizar un trabajo de {w} J? La respuesta es ___ s."

explicacion: |
  Para hallar el tiempo, despejamos la fórmula de potencia:
  P = W / t  =>  t = W / P
  t = {w} / {p} = {t} s.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular el trabajo realizado", "Dividir el trabajo por el tiempo", "Identificar los datos de trabajo y tiempo"]
respuesta: ["Calcular el trabajo realizado", "Dividir el trabajo por el tiempo", "Identificar los datos de trabajo y tiempo"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide la potencia, pero solo se conocen la fuerza, la distancia y el tiempo."

pasos:
  - "Paso 1: Identificar los datos de trabajo y tiempo"
  - "Paso 2: Calcular el trabajo realizado (W = F * d)"
  - "Paso 3: Dividir el trabajo por el tiempo (P = W / t)"

explicacion: |
  Primero debemos obtener el trabajo (W) usando la fuerza y la distancia, y luego aplicar la definición de potencia dividiendo por el tiempo.
```

## Sección: precipitacion (22 preguntas)

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "basico"
  tags: ["precipitacion", "vocabulario"]

enunciado: "¿Qué es la precipitación, en el sentido meteorológico?"
tipo: mc
opciones_explicitas:
  - "Cualquier forma de agua, líquida o sólida, que cae de una nube hacia la superficie"
  - "El proceso por el cual el agua se evapora de los océanos"
  - "El movimiento de una masa de aire de un lugar a otro"
respuesta: "Cualquier forma de agua, líquida o sólida, que cae de una nube hacia la superficie"

explicacion: |
  Incluye lluvia, nieve, granizo y aguanieve.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "mecanismo"]

enunciado: "¿Por qué las gotitas o cristales de una nube no caen todo el tiempo?"
tipo: mc
opciones_explicitas:
  - "Son demasiado pequeñas y livianas: flotan sostenidas por las corrientes de aire"
  - "Porque el aire dentro de una nube no tiene corrientes"
  - "Porque el agua dentro de una nube no pesa nada"
respuesta: "Son demasiado pequeñas y livianas: flotan sostenidas por las corrientes de aire"

explicacion: |
  Sólo caen cuando crecen lo suficiente al chocar y unirse con otras.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "basico"
  tags: ["precipitacion", "ciclo_del_agua"]

tipo: ordenar
opciones_explicitas:
  - "evaporación"
  - "condensación"
  - "precipitación"
respuesta:
  - "evaporación"
  - "condensación"
  - "precipitación"

enunciado: "Ordená estas tres etapas del ciclo del agua en el orden en que ocurren."

explicacion: |
  El agua se evapora, sube y condensa en nubes, y luego cae como
  precipitación.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "ciclo_del_agua"]

enunciado: "¿Qué etapa del ciclo del agua cierra el ciclo después de la precipitación?"
tipo: mc
opciones_explicitas:
  - "Escurrimiento e infiltración, de vuelta a ríos, lagos, napas u océanos"
  - "Una nueva condensación inmediata"
  - "El ciclo del agua no se cierra nunca"
respuesta: "Escurrimiento e infiltración, de vuelta a ríos, lagos, napas u océanos"

explicacion: |
  El agua que cae vuelve al sistema, listo para evaporarse de nuevo.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "tipos"]

enunciado: "¿Bajo qué condición de temperatura cae lluvia (agua líquida)?"
tipo: mc
opciones_explicitas:
  - "Cuando la temperatura se mantiene por encima de 0°C desde la nube hasta el suelo"
  - "Cuando la temperatura está por debajo de 0°C en todo el trayecto"
  - "La temperatura no influye en si cae lluvia o nieve"
respuesta: "Cuando la temperatura se mantiene por encima de 0°C desde la nube hasta el suelo"

explicacion: |
  Los cristales de hielo formados en la nube se derriten antes de llegar
  al suelo.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "tipos"]

enunciado: "¿Bajo qué condición de temperatura cae nieve?"
tipo: mc
opciones_explicitas:
  - "Cuando la temperatura se mantiene por debajo de 0°C en todo el trayecto hasta el suelo"
  - "Cuando la temperatura está por encima de 0°C en todo el trayecto"
  - "Sólo cuando hay granizo al mismo tiempo"
respuesta: "Cuando la temperatura se mantiene por debajo de 0°C en todo el trayecto hasta el suelo"

explicacion: |
  El cristal de hielo no llega a derretirse en ningún punto del camino.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "tipos"]

enunciado: "¿Qué es la aguanieve?"
tipo: mc
opciones_explicitas:
  - "Una mezcla de lluvia y nieve, cuando la temperatura está justo en el límite de 0°C en parte del trayecto"
  - "Otro nombre para el granizo"
  - "Nieve que cayó hace muchos días y se derritió"
respuesta: "Una mezcla de lluvia y nieve, cuando la temperatura está justo en el límite de 0°C en parte del trayecto"

explicacion: |
  El cristal ni termina de derretirse ni de mantenerse completamente
  sólido.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "avanzado"
  tags: ["precipitacion", "granizo"]

enunciado: "¿Cómo se forma el granizo dentro de una nube de desarrollo vertical muy intensa?"
tipo: mc
opciones_explicitas:
  - "Una gotita es arrastrada varias veces hacia arriba y abajo por corrientes fuertes, congelándose en capas sucesivas"
  - "Cae directo desde una nube estrato, sin ningún proceso previo"
  - "Se forma por la unión de dos gotas de lluvia comunes a nivel del suelo"
respuesta: "Una gotita es arrastrada varias veces hacia arriba y abajo por corrientes fuertes, congelándose en capas sucesivas"

explicacion: |
  Cae cuando pesa demasiado para que la corriente de aire la siga
  sosteniendo.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "avanzado"
  tags: ["precipitacion", "granizo"]

respuesta: verdadero
tipo: vf

enunciado: "El granizo se forma en capas sucesivas de hielo, cada vez que la gotita sube a la parte más fría de la nube."

explicacion: |
  Por eso una piedra de granizo grande, cortada al medio, muestra anillos
  como una cebolla.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "mecanismo"]

respuesta: verdadero
tipo: vf

enunciado: "Hay nubes, como los cúmulos chicos de buen tiempo o los cirros, que nunca producen precipitación."

explicacion: |
  Sus gotitas o cristales nunca crecen lo suficiente como para vencer la
  corriente de aire que las sostiene.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "frentes"]

enunciado: "¿Qué tipo de precipitación es típica de un frente cálido (nubes tipo estrato/nimboestrato)?"
tipo: mc
opciones_explicitas:
  - "Llovizna sostenida y suave, de gotas chicas y caída lenta"
  - "Lluvia intensa de corta duración"
  - "Granizo severo únicamente"
respuesta: "Llovizna sostenida y suave, de gotas chicas y caída lenta"

explicacion: |
  El ascenso lento y uniforme del aire genera nubes en capas, con
  precipitación pareja.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "frentes"]

enunciado: "¿Qué tipo de precipitación es típica de un frente frío muy activo (cumulonimbos)?"
tipo: mc
opciones_explicitas:
  - "Lluvia intensa de corta duración, y en los casos más fuertes, granizo"
  - "Llovizna suave durante varios días seguidos"
  - "Nunca produce ningún tipo de precipitación"
respuesta: "Lluvia intensa de corta duración, y en los casos más fuertes, granizo"

explicacion: |
  Las corrientes internas fuertes de estas nubes son justamente lo que
  arma las capas de hielo del granizo.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "basico"
  tags: ["precipitacion", "medicion"]

enunciado: "¿En qué unidad se mide la cantidad de lluvia caída?"
tipo: mc
opciones_explicitas:
  - "Milímetros (mm)"
  - "Kilogramos (kg)"
  - "Grados Celsius (°C)"
respuesta: "Milímetros (mm)"

explicacion: |
  1 mm de lluvia equivale a 1 litro de agua por cada metro cuadrado.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "medicion"]

respuesta: verdadero
tipo: vf

enunciado: "1 mm de lluvia equivale a 1 litro de agua caída por cada metro cuadrado de superficie."

explicacion: |
  Es la definición práctica que usan los pluviómetros.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "calculo"]

variables:
  mm_llovidos: random(5, 60)
  area_m2: random(10, 200)

respuesta: mm_llovidos * area_m2
tipo: input
tolerancia_abs: 0

enunciado: "Cayeron {mm_llovidos} mm de lluvia sobre un terreno de {area_m2} m². ¿Cuántos litros de agua cayeron en total?"

pasos:
  - "Litros = mm × área (m²) = {mm_llovidos} × {area_m2}"

explicacion: |
  Cada mm de lluvia equivale a 1 litro por m², así que se multiplica
  directo.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "calculo"]

variables:
  mm_ciudad_a: random(10, 40)
  mm_ciudad_b: random(41, 90)

respuesta: mm_ciudad_b - mm_ciudad_a
tipo: input
tolerancia_abs: 0

enunciado: "La ciudad A registró {mm_ciudad_a} mm de lluvia y la ciudad B registró {mm_ciudad_b} mm. ¿Cuántos mm más llovió en la ciudad B?"

explicacion: |
  Se resta la menor cantidad de la mayor.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "avanzado"
  tags: ["precipitacion", "medicion"]

respuesta: verdadero
tipo: vf

enunciado: "1 cm de nieve fresca equivale aproximadamente a 1 mm de agua líquida, aunque esto varía según qué tan compacta caiga la nieve."

explicacion: |
  Es una equivalencia aproximada, no exacta, porque la nieve puede caer
  más o menos compacta.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "basico"
  tags: ["precipitacion", "vocabulario"]

tipo: completar
respuestas_validas:
  - "cumulonimbos"
  - "cumulonimbo"

enunciado: "El granizo se forma en nubes de desarrollo vertical muy intensas, llamadas ____."

explicacion: |
  Son cúmulos que crecieron mucho y produjeron tormenta.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "tipos"]

tipo: ordenar
opciones_explicitas:
  - "llovizna de un frente cálido"
  - "lluvia de un cúmulo mediano"
  - "granizo de un cumulonimbo intenso"
respuesta:
  - "llovizna de un frente cálido"
  - "lluvia de un cúmulo mediano"
  - "granizo de un cumulonimbo intenso"

enunciado: "Ordená estos tipos de precipitación de menor a mayor intensidad típica."

explicacion: |
  A mayor desarrollo vertical de la nube, más intensa (y potencialmente
  más severa) la precipitación.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "avanzado"
  tags: ["precipitacion", "sintesis"]

respuesta: verdadero
tipo: vf

enunciado: "El tipo de precipitación que cae depende directamente del tipo de nube (su desarrollo vertical) y de la temperatura del aire debajo de ella."

explicacion: |
  Es la conexión con el módulo de Formación de nubes: el tipo de nube ya
  formado determina qué precipitación cae.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "avanzado"
  tags: ["precipitacion", "calculo"]

variables:
  mm: random(5, 40)
  area: random(10, 100)
  correcto: mm * area
  error: uno_de([0, 0, 0, 50, -50])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "Cayeron {mm} mm de lluvia sobre {area} m². Según un cálculo, cayeron {mostrado} litros en total. ¿Es correcto ese resultado?"

explicacion: |
  Litros = mm × área = {correcto}.
```

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "avanzado"
  tags: ["precipitacion", "sintesis"]

enunciado: "¿Cuál resume mejor por qué cae la precipitación?"
tipo: mc
opciones_explicitas:
  - "Las gotitas o cristales de una nube crecen al chocar entre sí hasta que su peso vence a la corriente de aire que los sostiene"
  - "Toda nube, sin excepción, llueve apenas se forma"
  - "La precipitación no tiene relación con el tamaño de las gotas dentro de la nube"
respuesta: "Las gotitas o cristales de una nube crecen al chocar entre sí hasta que su peso vence a la corriente de aire que los sostiene"

explicacion: |
  Es el mecanismo físico central detrás de cualquier tipo de
  precipitación.
```

## Sección: presion-atmosferica (22 preguntas)

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Qué es la presión atmosférica?"
tipo: mc
opciones_explicitas:
  - "El peso del aire que hay por encima de un punto, repartido sobre su área"
  - "La temperatura del aire en un punto dado"
  - "La cantidad de nubes que hay en el cielo"
respuesta: "El peso del aire que hay por encima de un punto, repartido sobre su área"

explicacion: |
  Es la misma idea general de presión (P=F/A) aplicada al peso de la
  columna de aire de la atmósfera.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "formula"]

respuesta: verdadero
tipo: vf

enunciado: "La presión atmosférica se calcula con la misma fórmula general de presión, P = F/A."

explicacion: |
  El "F" es el peso de la columna de aire, y el "A" el área sobre la que
  se reparte.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Aproximadamente cuánto vale la presión atmosférica a nivel del mar, en hectopascales (hPa)?"
tipo: mc
opciones_explicitas:
  - "1013 hPa"
  - "100 hPa"
  - "10000 hPa"
respuesta: "1013 hPa"

explicacion: |
  Esa es la presión de referencia de "1 atmósfera" (1 atm).
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "altitud"]

respuesta: verdadero
tipo: vf

enunciado: "A mayor altitud, la presión atmosférica disminuye, porque hay menos columna de aire por encima empujando hacia abajo."

explicacion: |
  Por eso cuesta más respirar en la cima de una montaña alta.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "altitud"]

enunciado: "¿Por qué los aviones presurizan la cabina en vuelo?"
tipo: mc
opciones_explicitas:
  - "Porque a la altitud de crucero la presión externa es demasiado baja para respirar sin ayuda"
  - "Porque a la altitud de crucero la presión externa es demasiado alta"
  - "Para que los pasajeros no sientan el frío"
respuesta: "Porque a la altitud de crucero la presión externa es demasiado baja para respirar sin ayuda"

explicacion: |
  A esa altura hay muy poca columna de aire por encima, la presión (y el
  oxígeno disponible) cae mucho.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "temperatura"]

respuesta: verdadero
tipo: vf

enunciado: "El aire caliente es menos denso que el aire frío, porque sus moléculas están más separadas."

explicacion: |
  Por eso el aire caliente tiende a subir.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "temperatura"]

enunciado: "¿Qué zona de presión en superficie tiende a generar el aire cálido, que asciende y se aleja?"
tipo: mc
opciones_explicitas:
  - "Una zona de baja presión"
  - "Una zona de alta presión"
  - "No afecta a la presión en superficie"
respuesta: "Una zona de baja presión"

explicacion: |
  Al subir y alejarse, el aire cálido deja una zona de menor presión
  detrás.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "temperatura"]

enunciado: "¿Qué zona de presión en superficie tiende a generar el aire frío, más denso, que desciende y se acumula?"
tipo: mc
opciones_explicitas:
  - "Una zona de alta presión"
  - "Una zona de baja presión"
  - "No afecta a la presión en superficie"
respuesta: "Una zona de alta presión"

explicacion: |
  El aire frío es más denso, baja y se acumula, generando mayor presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "isobaras"]

enunciado: "¿Qué es una isobara en un mapa del clima?"
tipo: mc
opciones_explicitas:
  - "Una línea que une puntos con la misma presión atmosférica"
  - "Una línea que une puntos con la misma temperatura"
  - "Una línea que marca el límite entre dos países"
respuesta: "Una línea que une puntos con la misma presión atmosférica"

explicacion: |
  Es análoga a las curvas de nivel de un mapa de relieve, pero para
  presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "isobaras"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando las isobaras de un mapa están muy juntas entre sí, eso indica vientos más fuertes."

explicacion: |
  Isobaras juntas significan un cambio de presión brusco en poco
  espacio, lo que genera vientos fuertes.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Cómo se llama una zona de alta presión, con aire frío que desciende y suele traer cielo despejado?"
tipo: mc
opciones_explicitas:
  - "Anticiclón"
  - "Ciclón"
  - "Frente"
respuesta: "Anticiclón"

explicacion: |
  El aire que baja se comprime y se seca, dificultando que se formen
  nubes.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Cómo se llama una zona de baja presión, con aire cálido y húmedo que asciende y suele traer nubosidad e inestabilidad?"
tipo: mc
opciones_explicitas:
  - "Ciclón (o depresión)"
  - "Anticiclón"
  - "Isobara"
respuesta: "Ciclón (o depresión)"

explicacion: |
  El aire que sube se enfría y puede condensar su humedad, generando
  nubes y lluvia.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "viento"]

respuesta: verdadero
tipo: vf

enunciado: "El viento siempre sopla desde la zona de alta presión hacia la zona de baja presión, buscando equilibrar la diferencia."

explicacion: |
  Es el mismo principio que iguala cualquier diferencia de presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "calculo"]

variables:
  fuerza: random(100, 1000)
  area: random(2, 10)

respuesta: fuerza / area
tipo: input
tolerancia_abs: 0.1

enunciado: "Una fuerza de {fuerza} N actúa sobre un área de {area} m². ¿Cuál es la presión resultante, en Pa?"

pasos:
  - "P = F/A = {fuerza}/{area}"

explicacion: |
  Se aplica la fórmula general de presión, P = F/A.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "calculo"]

variables:
  presion: random(50, 500)
  area: random(2, 8)

respuesta: presion * area
tipo: input
tolerancia_abs: 0.1

enunciado: "Sobre un área de {area} m² se ejerce una presión de {presion} Pa. ¿Cuál es la fuerza total, en N?"

pasos:
  - "F = P·A = {presion}·{area}"

explicacion: |
  Se despeja F de P = F/A, multiplicando ambos lados por A.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "altitud"]

variables:
  altura_a: random(0, 1000)
  altura_b: random(2000, 5000)

respuesta: "el punto A"
tipo: mc
opciones_explicitas:
  - "el punto A"
  - "el punto B"
  - "tienen la misma presión"

enunciado: "El punto A está a {altura_a} m de altitud, y el punto B está a {altura_b} m de altitud. ¿En cuál de los dos la presión atmosférica es mayor?"

explicacion: |
  A menor altitud hay más columna de aire por encima, así que la
  presión es mayor.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "clima"]

respuesta: verdadero
tipo: vf

enunciado: "Muchas zonas desérticas del planeta coinciden con bandas de alta presión subtropical permanente, donde el aire que desciende se comprime y se seca."

explicacion: |
  La presión atmosférica es una pieza del mecanismo que explica por qué
  ciertas regiones tienen clima seco o húmedo.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "clima"]

enunciado: "¿Qué tipo de presión predomina en las zonas ecuatoriales, donde el aire cálido y húmedo asciende casi todo el año?"
tipo: mc
opciones_explicitas:
  - "Baja presión"
  - "Alta presión"
  - "Presión constante, igual que en los polos"
respuesta: "Baja presión"

explicacion: |
  El aire que asciende deja zonas de baja presión, asociadas a las
  fuertes lluvias tropicales.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "vocabulario"]

tipo: completar
respuestas_validas:
  - "hectopascales"
  - "hPa"

enunciado: "Los mapas del clima suelen expresar la presión atmosférica en ____ (unidad, o su abreviatura)."

explicacion: |
  Hectopascal (hPa) es la unidad más usada en meteorología para la
  presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "altitud"]

variables:
  nivel_mar: 0
  cerro: 1500
  montana: 4000

tipo: ordenar
opciones_explicitas:
  - "nivel del mar"
  - "cerro (1500 m)"
  - "montaña (4000 m)"
respuesta:
  - "nivel del mar"
  - "cerro (1500 m)"
  - "montaña (4000 m)"

enunciado: "Ordená estos tres lugares de mayor a menor presión atmosférica."

explicacion: |
  A mayor altitud, menor presión: nivel del mar tiene la mayor presión,
  la montaña la menor.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "calculo"]

variables:
  fuerza: random(100, 500)
  area: random(2, 5)
  presion_correcta: fuerza / area
  error: uno_de([0, 0, 0, 5, -5])
  presion_mostrada: presion_correcta + error

respuesta: (abs(presion_mostrada - presion_correcta) < 0.01)
tipo: vf

enunciado: "Una fuerza de {fuerza} N sobre un área de {area} m² da, según un cálculo, una presión de {presion_mostrada} Pa. ¿Es correcto ese resultado?"

explicacion: |
  La presión correcta es P = F/A = {presion_correcta}.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "sintesis"]

enunciado: "¿Cuál de estas afirmaciones resume mejor la relación entre presión, altitud y temperatura?"
tipo: mc
opciones_explicitas:
  - "A mayor altitud la presión baja, y el aire cálido (menos denso) genera zonas de baja presión al ascender"
  - "A mayor altitud la presión sube, y el aire cálido genera zonas de alta presión"
  - "La presión atmosférica no depende ni de la altitud ni de la temperatura"
respuesta: "A mayor altitud la presión baja, y el aire cálido (menos denso) genera zonas de baja presión al ascender"

explicacion: |
  Son las dos relaciones centrales del tema: presión vs. altitud, y
  presión vs. temperatura.
```

## Sección: presion-f-sobre-a (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["La fuerza aplicada por unidad de área", "La fuerza total aplicada sobre un objeto", "La aceleración producida por una fuerza", "La energía transferida por unidad de superficie"]

enunciado: "La presión se define físicamente como la ___ aplicada sobre una superficie."

respuesta: "La fuerza aplicada por unidad de área"

explicacion: |
  La presión (P) es una magnitud escalar que mide la razón entre la fuerza perpendicular aplicada (F) y el área (A) sobre la que actúa: P = F/A.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: mc
opciones_explicitas: ["Newton (N)", "Pascal (Pa)", "Joule (J)", "Watt (W)"]

enunciado: "En el Sistema Internacional de Unidades, la unidad de presión es el ___."

respuesta: "Pascal (Pa)"

explicacion: |
  Un Pascal (Pa) equivale a un Newton por metro cuadrado (1 N/m²).
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["relacion_proporcional", "analisis"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["2", "4"], ["5", "10"]] # [fuerza, area]

tipo: vf
enunciado: "Si mantenemos la fuerza constante, al aumentar el área de contacto, la presión ___."

respuesta: falso

explicacion: |
  Dado que la fórmula es P = F/A, la presión es inversamente proporcional al área. Si el área aumenta, la presión disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["calculo", "aplicacion"]

variables:
  caso_idx: uno_de([0, 1, 2])
  escenario: [
    ["100", "2"], # [fuerza, area]
    ["50", "5"],
    ["200", "4"]
  ]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se aplica una fuerza de {escenario[caso_idx][0]} N sobre una superficie de {escenario[caso_idx][1]} m². ¿Cuál es la presión resultante en Pa?"

pasos:
  - "Identificar la fuerza (F) y el área (A)."
  - "Aplicar la fórmula P = F/A."

respuesta: escenario[caso_idx][0] / escenario[caso_idx][1]

explicacion: |
  Utilizando la fórmula P = F/A, dividimos la fuerza entre el área proporcionada.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["completar", "terminologia"]

tipo: completar
respuestas_validas: ["fuerza", "área"]

enunciado: "Para calcular la presión, es necesario conocer la ___ aplicada y el ___ sobre el cual actúa."

respuesta: ["fuerza", "área"]

explicacion: |
  La presión depende directamente de la magnitud de la fuerza y de la extensión de la superficie (área) donde se distribuye dicha fuerza.
```

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "basico"
  tags: ["definicion", "presion"]

tipo: mc
opciones_explicitas: ["La presión es la fuerza aplicada por unidad de área", "La presión es la fuerza multiplicada por el área", "La presión es la masa dividida por el volumen", "La presión es la aceleración de un cuerpo"]

enunciado: "Si aplicamos una fuerza sobre una superficie, la magnitud de la presión resultante depende de la fuerza y del área. ¿Cuál es la definición física de presión?"

explicacion: |
  La presión se define como la magnitud de la fuerza aplicada perpendicularmente sobre una superficie, dividida por el área de dicha superficie ($P = F/A$).
```

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "intermedio"
  tags: ["calculo", "numerico"]

variables:
  escenario: uno_de([
    [100, 2],
    [50, 5],
    [200, 10]
  ])

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se aplica una fuerza de {escenario[0]} N sobre una superficie de {escenario[1]} m². ¿Cuál es la presión ejercida en Pascales (Pa)?"

pasos:
  - "Identificar la fuerza: F = {escenario[0]} N"
  - "Identificar el área: A = {escenario[1]} m²"
  - "Aplicar la fórmula: P = F / A"

respuesta: escenario[0] / escenario[1]

explicacion: |
  Usando la fórmula $P = F/A$:
  $P = {escenario[0]} / {escenario[1]} = {escenario[0] / escenario[1]} \text{ Pa}$.
```

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "intermedio"
  tags: ["relacion", "conceptual"]

tipo: vf

enunciado: "Si mantenemos la fuerza constante pero aumentamos el área de la superficie sobre la que se aplica, la presión resultante será mayor."

respuesta: falso

explicacion: |
  Como la presión es inversamente proporcional al área ($P \propto 1/A$), si el área aumenta, la presión disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: completar
respuestas_validas: ["Pascal", "Pa"]

enunciado: "En el Sistema Internacional de Unidades, la unidad de medida de la presión es el ___."

explicacion: |
  El Pascal (Pa) es la unidad derivada del Newton (N) y el metro cuadrado (m²), definida como $1 \text{ Pa} = 1 \text{ N/m}^2$.
```

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "basico"
  tags: ["ordenar", "componentes"]

tipo: ordenar
opciones_explicitas: ["Fuerza (N)", "Área (m²)", "Presión (Pa)"]
respuesta: ["Fuerza (N)", "Área (m²)", "Presión (Pa)"]

enunciado: "Para resolver un problema de presión mediante la fórmula $P = F/A$, ¿cuál es el orden lógico de los datos que debemos identificar para realizar la división?"

explicacion: |
  Primero identificamos la fuerza (numerador), luego el área (denominador) y finalmente calculamos el cociente que es la presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["presion", "area", "fuerza"]

enunciado: "Si se mantiene la misma fuerza aplicada sobre una superficie, pero el área de contacto se reduce a la mitad, la presión resultante será ___ veces la presión original."

respuestas_validas: ["2", "0.5", "1", "4"]
respuesta: "2"
tipo: completar

explicacion: |
  La presión es inversamente proporcional al área ($P = F/A$). Si el área disminuye ($A/2$), la presión se duplica ($2P$).
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["unidades", "error_comun"]

variables:
  datos: [[100, 2, 50], [200, 4, 50], [50, 0.5, 100]]
  idx: uno_de([0, 1, 2])

enunciado: "Se aplica una fuerza de {datos[idx][0]} N sobre una superficie de {datos[idx][1]} cm². ¿Cuál es la presión en Pascales (Pa)? (Nota: Recuerde que $1\text{ m}^2 = 10000\text{ cm}^2$)."

pasos:
  - "Convertir el área de $\text{cm}^2$ a $\text{m}^2$ dividiendo por $10000$."
  - "Dividir la fuerza por el área en $\text{m}^2$."

respuesta: datos[idx][2
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Un error común es no convertir las unidades de área. Para obtener Pascales ($N/m^2$), el área debe estar en $\text{m}^2$.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "Un clavo tiene una punta muy afilada. Esto se hace para que, al aplicar una fuerza, la presión sobre la superficie sea:"

opciones_explicitas: ["mayor", "menor", "igual"]
respuesta: "mayor"
tipo: mc

explicacion: |
  Al reducir el área de contacto (punta afilada), la presión aumenta significativamente para una misma fuerza aplicada.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["conceptos", "distincion"]

enunciado: "Si un objeto se sumerge en un fluido y la presión sobre él aumenta debido a la profundidad, ¿la fuerza total ejercida por el fluido sobre el objeto cambia necesariamente?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: completar
explicacion: |
  La presión es una magnitud intensiva (no depende de la cantidad de materia), pero la fuerza es la presión multiplicada por el área ($F = P \cdot A$). Si la presión aumenta y el área es constante, la fuerza también aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "avanzado"
  tags: ["ordenar", "conceptos"]

enunciado: "Ordene las siguientes situaciones de MAYOR a MENOR presión aplicada, asumiendo que la fuerza aplicada es siempre la misma en todos los casos:"

opciones_explicitas: ["Persona sobre tacones finos", "Persona sobre pies descalzos", "Persona sobre raquetas de nieve"]
respuesta: ["Persona sobre tacones finos", "Persona sobre pies descalzos", "Persona sobre raquetas de nieve"]
tipo: ordenar

explicacion: |
  A menor área, mayor presión. Los tacones concentran la fuerza en un área muy pequeña (máxima presión), mientras que las raquetas de nieve distribuyen la fuerza en un área grande (mínima presión).
```

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza"
  nivel: "basico"
  tags: ["presion", "fuerza", "conceptos"]

respuesta: "fuerza"
tipo: "mc"
opciones_explicitas: ["fuerza", "presion", "area", "densidad"]

enunciado: "Mientras que la presión es la magnitud que describe la intensidad de una interacción por unidad de superficie, la ___ es la magnitud escalar que mide la intensidad de una interacción sin considerar el área de aplicación."

explicacion: |
  La fuerza es la causa (medida en Newtons), mientras que la presión es la distribución de esa fuerza sobre una superficie (medida en Pascales).
```

```
metadata:
  materia: "fisica"
  tema: "presion_area"
  nivel: "intermedio"
  tags: ["presion", "area", "relacion_inversa"]

variables:
  escenario: uno_de([
    [100, 2],
    [50, 5],
    [200, 4]
  ])

respuesta: escenario[1
tipo: "vf"

enunciado: "Si aplicamos una fuerza constante de 100 N sobre una superficie, y la superficie se reduce a la mitad de su tamaño original, ¿la presión resultante será mayor que la inicial? (verdadero/falso)"

explicacion: |
  Dado que P = F/A, si el área (A) disminuye, la presión (P) aumenta. En este caso, al reducir el área a la mitad, la presión se duplica.
```

```
metadata:
  materia: "fisica"
  tema: "unidades_presion"
  nivel: "basico"
  tags: ["unidades", "pascal", "newton"]

respuestas_validas: ["Pascal", "Pa"]
tipo: "completar"

enunciado: "La unidad de medida de la presión en el Sistema Internacional de Unidades es el ___."

explicacion: |
  El Pascal (Pa) se define como un Newton por metro cuadrado (1 N/m²).
```

```
metadata:
  materia: "fisica"
  tema: "presion_comparacion"
  nivel: "intermedio"
  tags: ["presion", "comparacion"]

variables:
  caso: uno_de([
    [10, 5],
    [20, 2],
    [5, 10]
  ])

respuesta: caso[0
tipo: "mc"
opciones_explicitas: ["El caso con mayor área", "El caso con menor área", "Ambos casos tienen la misma presión"]

enunciado: "Se tienen dos objetos con la misma fuerza aplicada. El objeto A tiene un área de {caso[0]} m² y el objeto B tiene un área de {caso[1]} m². ¿Cuál de los dos presenta una mayor presión?"

explicacion: |
  A menor área, mayor presión. El objeto con el área más pequeña ({caso[1]} m²) tendrá la presión más alta.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "avanzado"
  tags: ["presion", "densidad", "profundidad"]

respuesta: "densidad"
tipo: "completar"

enunciado: "En un fluido en reposo, la presión hidrostática depende de la profundidad y de la ___ del fluido, pero es independiente de la forma del recipiente."

explicacion: |
  La fórmula de la presión hidrostática es P = rho * g * h, donde rho es la densidad del fluido.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["presion", "fuerza", "area"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [[400, 0.02], [600, 0.05]]
  fuerza: datos[escenario_idx][0]
  area: datos[escenario_idx][1]

respuesta: fuerza / area
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una persona de {fuerza} N de peso se apoya sobre una superficie con un área de contacto de {area} m². ¿Cuál es la presión ejercida en Pascales (Pa)?"

explicacion: |
  La presión se define como la fuerza aplicada por unidad de área: P = F / A.
  En este caso: {fuerza} / {area} = {respuesta} Pa.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["conceptos", "presion"]

respuesta: "menor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Si una misma fuerza se aplica sobre una superficie con un área de contacto más grande, la presión resultante será ___."

explicacion: |
  Como la presión es inversamente proporcional al área (P = F/A), al aumentar el área, la presión disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["presion", "area"]

variables:
  caso: uno_de([0,1])
  fuerza: uno_de([10, 20])
  area_punta: 0.0001
  area_cabeza: 0.01

respuesta: tabla[caso][1
tipo: completar
tabla: [["mayor", "mayor"], ["menor", "menor"]]
respuestas_validas: ["mayor", "menor"]

enunciado: "Considerando un clavo con una punta muy fina y una cabeza ancha. Si aplicamos una fuerza constante, la presión en la punta es ___ que la presión en la cabeza."

explicacion: |
  A menor área (la punta), la presión es mucho más alta, lo que permite que el clavo penetre la madera.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que la unidad de presión en el Sistema Internacional es el Newton (N)?"

explicacion: |
  Falso. El Newton (N) es unidad de fuerza. La presión es Newton por metro cuadrado (N/m²), también llamado Pascal (Pa).
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["procedimiento", "calculo"]

opciones_explicitas: ["Identificar la fuerza y el área", "Dividir la fuerza por el área", "Verificar las unidades de medida"]
respuesta: ["Identificar la fuerza y el área", "Dividir la fuerza por el área", "Verificar las unidades de medida"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema de presión donde te dan la fuerza en Newtons y el área en centímetros cuadrados:"

explicacion: |
  1. Identificar los datos (F y A).
  2. Convertir unidades si es necesario (cm² a m²).
  3. Aplicar la fórmula P = F/A.
```

## Sección: presion-hidrostatica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["definicion", "fluido"]

respuesta: "presion"
tipo: "completar"
respuestas_validas: ["presion"]

enunciado: "La ________ es la presión que ejerce un fluido en reposo sobre las paredes del recipiente que lo contiene y sobre cualquier cuerpo sumergido en él."

explicacion: |
  La presión hidrostática es la presión que ejerce un fluido en reposo debido al peso de la columna de fluido que tiene encima.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["relaciones", "profundidad"]

opciones_explicitas: ["aumenta", "disminuye", "se mantiene constante"]
respuesta: "aumenta"
tipo: "mc"

enunciado: "Si nos sumergimos en un lago y descendemos hacia el fondo, la presión hidrostática sobre nuestro cuerpo ________."

explicacion: |
  A mayor profundidad (mayor $h$), mayor es el peso de la columna de fluido sobre nosotros, por lo tanto, la presión aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["variables", "formula"]

respuesta: verdadero
tipo: "vf"

enunciado: "La presión hidrostática depende de la densidad del fluido y de la profundidad, pero no depende de la forma del recipiente."

explicacion: |
  Correcto. La fórmula $P = \rho \cdot g \cdot h$ muestra que la presión solo depende de la densidad ($\rho$), la gravedad ($g$) y la profundidad ($h$), no de la geometría del contenedor.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["variables", "formula"]

variables:
  datos: [[1000, "densidad", "kg/m^3"], [9.8, "gravedad", "m/s^2"], [5, "profundidad", "m"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: "mc"
opciones_explicitas: ["densidad", "gravedad", "profundidad"]

enunciado: "En la fórmula de la presión hidrostática $P = \rho \cdot g \cdot h$, la variable $\rho$ representa la ________."

explicacion: |
  La letra griega $\rho$ (rho) se utiliza convencionalmente en física para representar la densidad de una sustancia.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["conceptos", "orden"]

opciones_explicitas: ["Densidad", "Gravedad", "Profundidad"]
respuesta: ["Densidad", "Gravedad", "Profundidad"]
tipo: "ordenar"

enunciado: "Ordena los factores que determinan la presión hidrostática según aparecen en la fórmula $P = \rho \cdot g \cdot h$ (de izquierda a derecha):"

explicacion: |
  La secuencia correcta es: Densidad ($\rho$), Gravedad ($g$) y Profundidad ($h$).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

respuesta: "f"
tipo: "mc"
opciones_explicitas: ["a", "b", "c", "d"]

enunciado: "La presión hidrostática en un fluido en reposo depende de la profundidad, la densidad del fluido y la aceleración de la gravedad. Si un recipiente tiene una forma irregular, la presión en el fondo dependerá de:"

pasos:
  - "Identificar que la presión hidrostática no depende de la forma del recipiente, sino de la altura de la columna de fluido."

explicacion: |
  La fórmula es P = ρ · g · h. Como puedes ver, la geometría del recipiente no aparece en la ecuación, solo importa la profundidad vertical (h).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["calculo", "hidrostatica"]

variables:
  escenario: uno_de([
    [1000, 10, 20, 200000],
    [800, 5, 10, 40000],
    [1260, 4, 5, 30870]
  ])

respuesta: escenario[3
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Calcula la presión hidrostática en el fondo de un tanque que contiene un fluido con densidad de {escenario[0]} kg/m³, a una profundidad de {escenario[1]} m. Considera la gravedad g = {escenario[2]} m/s²."

pasos:
  - "Identificar los datos: ρ = {escenario[0]} kg/m³, h = {escenario[1]} m, g = {escenario[2]} m/s²."
  - "Aplicar la fórmula: P = ρ · g · h."
  - "Calcular: {escenario[0]} * {escenario[2]} * {escenario[1]} = {escenario[3]} Pa."

explicacion: |
  El resultado es {escenario[3]} Pascales (Pa).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["teoria", "relaciones"]

respuesta: "verdadero"
tipo: "vf"

enunciado: "Si sumergimos un objeto en un fluido y luego cambiamos ese fluido por uno de mayor densidad (manteniendo la profundidad constante), la presión hidrostática sobre el objeto aumentará."

explicacion: |
  Correcto. Como P = ρ · g · h, la presión es directamente proporcional a la densidad (ρ).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["formula"]

respuesta: "rho * g * h"
tipo: "completar"
respuestas_validas: ["rho * g * h", "ρ * g * h"]

enunciado: "La expresión matemática para calcular la presión hidrostática es P = ___."

explicacion: |
  La fórmula completa es el producto de la densidad (ρ), la gravedad (g) y la profundidad (h).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["ordenar", "procedimiento"]

respuesta: ["Identificar datos", "Calcular producto", "Verificar unidades"]
tipo: "ordenar"
opciones_explicitas: ["Identificar datos", "Calcular producto", "Verificar unidades"]

enunciado: "Ordena los pasos lógicos para resolver un problema de presión hidrostática:"

pasos:
  - "Primero extraemos la densidad, la profundidad y la gravedad."
  - "Luego multiplicamos los tres valores obtenidos."
  - "Finalmente nos aseguramos de que el resultado esté en Pascales (N/m²)."

explicacion: |
  Un procedimiento sistemático evita errores de cálculo y de unidades.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["presion", "fluido", "conceptos_clave"]

enunciado: "Un buceador se encuentra a una profundidad de 10 metros bajo la superficie del mar. Si la presión atmosférica en la superficie es de 1 atm, la presión que experimenta el buceador es la suma de la presión atmosférica más la presión hidrostática. ¿La presión hidrostática depende de la presión atmosférica superficial?"

respuesta: falso
tipo: vf

explicacion: |
  La presión hidrostática depende únicamente de la densidad del fluido ($\rho$), la gravedad ($g$) y la profundidad ($h$). La presión atmosférica es una presión externa que se suma para obtener la presión absoluta, pero no altera el valor de la presión hidrostática en sí misma.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["densidad", "presion", "fluido"]

variables:
  escenario: uno_de([
    [1000, "agua"],
    [800, "aceite"],
    [1300, "glicerina"]
  ])

enunciado: "Se tienen tres recipientes de igual forma y dimensiones, con la misma profundidad de 2 metros. El primero contiene {escenario[0]} kg/m³ de {escenario[1]}, el segundo contiene {escenario[0]} kg/m³ de {escenario[1]}, y el tercero contiene {escenario[0]} kg/m³ de {escenario[1]}. Si la gravedad es 9.8 m/s², ¿cuál es la presión hidrostática en el recipiente con {escenario[1]}?"

pasos:
  - "Identificar la densidad del fluido: {escenario[0]} kg/m³"
  - "Aplicar la fórmula P = $\rho \cdot g \cdot h$"
  - "Calcular: {escenario[0]} * 9.8 * 2"

respuesta: redondear(escenario[0] * 9.8 * 2, 2)
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  La presión hidrostática se calcula multiplicando la densidad por la gravedad por la profundidad. En este caso: {escenario[0]} * 9.8 * 2 = {redondear(escenario[0] * 9.8 * 2, 2)} Pa.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["conceptos", "variables"]

enunciado: "Un recipiente cilíndrico contiene un líquido en reposo. Si aumentamos la profundidad de un punto dentro del líquido sin cambiar la densidad del fluido ni la gravedad, la presión hidrostática en ese punto ___."

opciones_explicitas: ["disminuye", "aumenta", "se mantiene igual"]

respuesta: "aumenta"
tipo: mc

explicacion: |
  De acuerdo a la fórmula $P = \rho \cdot g \cdot h$, la presión es directamente proporcional a la profundidad ($h$). A mayor profundidad, mayor presión hidrostática.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["paradoja_hidrostatica", "forma_recipiente"]

enunciado: "Se tienen dos recipientes: uno es un cilindro recto y el otro es un cono invertido. Ambos están llenos de agua hasta la misma altura de 0.5 metros. ¿Cuál de los dos presenta mayor presión en el fondo debido únicamente a la presión hidrostática?"

opciones_explicitas: ["El cilindro", "El cono", "Ambos tienen la misma presión"]

respuesta: "Ambos tienen la misma presión"
tipo: mc

explicacion: |
  Este es un error común. La presión hidrostática depende de la profundidad y la densidad, NO de la forma del recipiente ni del volumen total de líquido. Como la altura ($h$) es la misma, la presión en el fondo es igual.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["formula", "simbolos"]

enunciado: "En la expresión de la presión hidrostática $P = \rho \cdot g \cdot h$, la variable $\rho$ representa la ___ del fluido."

respuestas_validas: ["densidad"]

respuesta: "densidad"
tipo: completar

explicacion: |
  En la fórmula de la presión hidrostática, $\rho$ (rho) es el símbolo utilizado para representar la densidad del fluido.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["presion", "fuerza", "conceptos"]

enunciado: "Mientras que la fuerza es una interacción que puede ser vectorial y depender del área de contacto, la presión se define como la ___ ejercida por una superficie sobre un objeto."

respuestas_validas: ["fuerza"]

respuesta: "fuerza"
tipo: completar

explicacion: |
  La presión es la magnitud escalar que mide la distribución de una fuerza sobre una superficie ($P = F/A$).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["paradoja_de_pascal", "presion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[40, 100, 200], [50, 150, 250]]

enunciado: "Considerando un recipiente con un área de base de {datos[escenario_idx][0]} cm² y una profundidad de {datos[escenario_idx][1]} cm, la presión hidrostática en el fondo depende únicamente de la densidad del fluido, la gravedad y la profundidad, siendo independiente del {datos[escenario_idx][2]} del recipiente."

opciones_explicitas: ["área", "volumen", "forma"]

respuesta: uno_de(["área", "volumen", "forma"])
tipo: mc

explicacion: |
  De acuerdo con la ecuación de la presión hidrostática $P = \rho \cdot g \cdot h$, la forma del recipiente o el área de la base no afectan la presión en un punto determinado a una profundidad $h$ constante.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["presion_atmosferica", "presion_total"]

enunciado: "¿Es correcto afirmar que la presión total en el fondo de un tanque con fluido es igual a la suma de la presión atmosférica más la presión hidrostática?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: mc

explicacion: |
  La presión absoluta o total es la suma de la presión manométrica (hidrostática) y la presión ambiental (atmosférica).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["densidad", "comparacion"]

variables:
  fluido_idx: uno_de([0, 1])
  fluidos: [[1000, 800], [800, 1000]]

enunciado: "Si tenemos dos columnas de igual radio y misma altura $h$, pero una contiene un fluido de densidad {fluidos[fluido_idx][0]} kg/m³ y la otra uno de {fluidos[fluido_idx][1]} kg/m³, la presión en la base de la columna con mayor densidad será ___ que la otra."

opciones_explicitas: ["mayor", "menor", "igual"]

respuesta: uno_de(["mayor", "menor", "igual"])
tipo: mc

explicacion: |
  Dado que $P$ es directamente proporcional a la densidad $\rho$, a mayor densidad, mayor presión hidrostática para una misma profundidad.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["profundidad", "relacion"]

enunciado: "Si la profundidad de un buzo aumenta al doble, la presión hidrostática ejercida por el agua sobre él será exactamente el ___ de la presión inicial (asumiendo densidad y gravedad constantes)."

respuestas_validas: ["doble", "cuádruple", "mitad"]

respuesta: "doble"
tipo: completar

explicacion: |
  La presión hidrostática es directamente proporcional a la profundidad ($P \propto h$). Si la profundidad se duplica, la presión también.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["fluidos", "presion"]

variables:
  escenarios: [["densidad_agua_dulce", 1000, "densidad_agua_salada", 1030, "profundidad_buzo", 15, "profundidad_buzo", 30], ["densidad_agua_dulce", 1000, "densidad_agua_salada", 1030, "profundidad_buzo", 10, "profundidad_buzo", 25], ["densidad_agua_dulce", 1000, "densidad_agua_salada", 1030, "profundidad_buzo", 5, "profundidad_buzo", 40]]
  idx: uno_de([0, 1, 2])
  rho: escenario[idx][1]
  h: escenario[idx][3]

respuesta: rho * g * h
tipo: completar
tolerancia_abs: 1

enunciado: "Un buzo se encuentra sumergido en un fluido cuya densidad es de {rho} kg/m³ a una profundidad de {h} metros. ¿Cuál es la presión hidrostática que soporta (en Pascales)?"

pasos:
  - "Identificar la densidad del fluido (ρ)."
  - "Identificar la profundidad (h)."
  - "Multiplicar ρ * g * h (usando g = 9.8 m/s²)."

explicacion: |
  La presión hidrostática se calcula con la fórmula P = ρ · g · h.
  Para este caso: {rho} * 9.8 * {h} = {rho * g * h} Pa.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["comparacion", "fluidos"]

variables:
  datos: [["agua_dulce", 1000, "agua_salada", 1030], ["agua_dulce", 1000, "mercurio", 13600], ["agua_dulce", 1000, "aceite", 800]]
  idx: uno_de([0, 1, 2])
  rho1: datos[idx][0]
  rho2: datos[idx][2]

respuesta: rho1 < rho2
tipo: completar
enunciado: "Si dos recipientes iguales están llenos con {rho1} y {rho2} respectivamente, y se miden a la misma profundidad, ¿la presión en el recipiente con {rho1} es menor que en el de {rho2}?"

explicacion: |
  La presión hidrostática es directamente proporcional a la densidad del fluido. Como la densidad de {rho1} es menor que la de {rho2}, la presión también lo será.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["completar", "fluidos"]

variables:
  casos: [["10", "20", "500"], ["5", "40", "200"], ["2", "100", "2000"]]
  idx: uno_de([0, 1, 2])
  rho: 1000
  h: casos[idx][1]
  p_calc: rho * g * h

respuesta: tabla[idx][2
tipo: completar
respuestas_validas: ["500", "200", "2000"]

enunciado: "Un tanque con un fluido de densidad 1000 kg/m³ tiene una profundidad de ___ metros. Si la presión hidrostática en el fondo es de ___ Pa, ¿cuál es la profundidad?"

explicacion: |
  Despejando la fórmula P = ρ · g · h para la profundidad (h):
  h = P / (ρ · g)
  En este caso: {p_calc} / (1000 * 9.8) ≈ {h} m.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["mc", "fluidos"]

variables:
  escenarios: [["10000", "10300"], ["25000", "26500"], ["50000", "52000"]]
  idx: uno_de([0, 1, 2])
  p_base: escenarios[idx][0]
  p_sal: escenarios[idx][1]

respuesta: "Presión en agua salada"
tipo: mc
opciones_explicitas: ["Presión en agua dulce", "Presión en agua salada"]

enunciado: "Si comparamos un objeto a la misma profundidad en agua dulce (densidad 1000 kg/m³) y agua salada (densidad 1030 kg/m³), ¿en qué fluido la presión será de aproximadamente {p_sal} Pa?"

explicacion: |
  A mayor densidad, mayor presión hidrostática. El agua salada es más densa, por lo tanto ejerce una presión mayor ({p_sal} Pa) que el agua dulce ({p_base} Pa).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatic"
  nivel: "intermedio"
  tags: ["ordenar", "fluidos"]

variables:
  niveles: [["1m", "5m", "10m"], ["10m", "2m", "5m"], ["20m", "10m", "30m"]]
  idx: uno_de([0, 1, 2])

respuesta: ["1m", "5m", "10m"]
tipo: ordenar
opciones_explicitas: ["1m", "5m", "10m"]

enunciado: "Ordena las profundidades de un buzo de menor a mayor presión hidrostática (asumiendo el mismo fluido):"

explicacion: |
  La presión hidrostática aumenta linealmente con la profundidad. Por lo tanto, el orden de menor a mayor presión corresponde al orden de menor a mayor profundidad.
```
