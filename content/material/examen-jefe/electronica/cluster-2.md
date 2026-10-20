# Examen jefe — [PENDIENTE #943]

> Logro #943. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **118 preguntas totales** en 5/5 secciones.

---

## Sección: capacitor-rc-carga-y-descarga (24 preguntas)

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "calculo"]

variables:
  r: uno_de([1000, 2000, 5000, 10000, 20000])
  c: uno_de([10, 22, 47, 100])
  t: redondear(r * c / 1000000, 4)

respuesta: t
tipo: input
tolerancia_abs: 0.0005

enunciado: "Un circuito RC tiene R = {r} Ω y C = {c} µF. ¿Cuánto vale la constante de tiempo, en segundos?"

pasos:
  - "τ = R × C"
  - "Convertir µF a F dividiendo por 1.000.000"

explicacion: |
  τ = R × C, con C en faradios.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "calculo"]

variables:
  r: uno_de([1000, 2200, 4700, 10000])
  c: uno_de([1, 10, 100])
  t: redondear(r * c / 1000, 2)

respuesta: t
tipo: input
tolerancia_abs: 0.01

enunciado: "Un circuito RC tiene R = {r} Ω y C = {c} µF. ¿Cuánto vale τ, en milisegundos?"

pasos:
  - "τ = R × C en segundos, luego pasar a ms"

explicacion: |
  R × C en ohmios por microfaradios da microsegundos; dividido 1000 da milisegundos.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "calculo"]

variables:
  r: uno_de([1000, 2000, 5000, 10000])
  c: uno_de([10, 47, 100])
  t: redondear(5 * r * c / 1000000, 3)

respuesta: t
tipo: input
tolerancia_abs: 0.002

enunciado: "Un capacitor de {c} µF se carga a través de {r} Ω. Considerando carga completa a los 5τ, ¿cuántos segundos tarda?"

pasos:
  - "τ = R × C"
  - "5 × τ"

explicacion: |
  Se estima la carga completa en unos cinco τ.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "avanzado"
  tags: ["rc", "diseno"]

variables:
  r: uno_de([1000, 2000, 5000, 10000])
  tau: uno_de([0.01, 0.02, 0.05, 0.1])
  c: redondear(tau / r * 1000000, 2)

respuesta: c
tipo: input
tolerancia_abs: 0.05

enunciado: "Se necesita una constante de tiempo de {tau} s con una resistencia de {r} Ω. ¿Qué capacidad hace falta, en µF?"

pasos:
  - "C = τ / R"
  - "Convertir a µF multiplicando por 1.000.000"

explicacion: |
  Se despeja C de τ = R × C.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "avanzado"
  tags: ["rc", "diseno"]

variables:
  c: uno_de([1, 10, 100])
  tau: uno_de([0.1, 0.5, 1])
  r: redondear(tau / (c / 1000000), 0)

respuesta: r
tipo: input
tolerancia_abs: 1

enunciado: "Con un capacitor de {c} µF se quiere una constante de tiempo de {tau} s. ¿Qué resistencia hace falta, en Ω?"

pasos:
  - "R = τ / C"

explicacion: |
  Se despeja R de τ = R × C.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "carga"]

enunciado: "Después de un tiempo igual a τ, un capacitor que se carga alcanzó aproximadamente..."
tipo: mc
opciones_explicitas:
  - "El 63 % de la tensión final"
  - "El 37 % de la tensión final"
  - "El 100 % de la tensión final"
respuesta: "El 63 % de la tensión final"

explicacion: |
  Es el valor característico de la curva exponencial de carga.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "descarga"]

enunciado: "Después de un tiempo τ de descarga, el capacitor conserva aproximadamente..."
tipo: mc
opciones_explicitas:
  - "El 37 % de la tensión inicial"
  - "El 63 % de la tensión inicial"
  - "Nada de tensión"
respuesta: "El 37 % de la tensión inicial"

explicacion: |
  En la descarga queda 1/e de la tensión inicial.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "carga"]

enunciado: "En la práctica, se considera que un capacitor está cargado luego de aproximadamente..."
tipo: mc
opciones_explicitas:
  - "5τ"
  - "τ"
  - "0,5τ"
respuesta: "5τ"

explicacion: |
  A los 5τ queda menos del 1 % de diferencia.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "carga"]

respuesta: falso
tipo: vf

enunciado: "Un capacitor conectado a través de una resistencia se carga instantáneamente."

explicacion: |
  La resistencia limita la corriente y la tensión sube gradualmente.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc"]

respuesta: verdadero
tipo: vf

enunciado: "Si aumenta la resistencia del circuito RC, el capacitor tarda más en cargarse."

explicacion: |
  τ = R × C crece al aumentar R.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc"]

respuesta: verdadero
tipo: vf

enunciado: "Si aumenta la capacidad en un circuito RC, el capacitor tarda más en cargarse."

explicacion: |
  Hay más carga para acumular y τ crece.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "carga"]

respuesta: falso
tipo: vf

enunciado: "Según el modelo exponencial, el capacitor llega exactamente al 100 % de la tensión de la fuente en un tiempo finito."

explicacion: |
  Se acerca asintóticamente; a los 5τ la diferencia es despreciable.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "carga"]

respuesta: verdadero
tipo: vf

enunciado: "Al conectar un capacitor descargado, la corriente inicial es la máxima y luego disminuye."

explicacion: |
  Al principio la tensión del capacitor es cero y toda la tensión cae en la resistencia.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "vocabulario"]

tipo: completar
enunciado: "La capacidad de un capacitor se mide en ___."
respuestas_validas:
  - "faradios"

explicacion: |
  El faradio (F), con submúltiplos como µF, nF y pF.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "vocabulario"]

tipo: completar
enunciado: "La constante de tiempo de un circuito RC se representa con la letra griega ___ (tau)."
respuestas_validas:
  - "τ"
  - "tau"

explicacion: |
  τ = R × C.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "filtros"]

enunciado: "Un filtro RC pasa bajos..."
tipo: mc
opciones_explicitas:
  - "Deja pasar las señales lentas y atenúa las rápidas"
  - "Deja pasar las rápidas y bloquea las lentas"
  - "No modifica ninguna señal"
respuesta: "Deja pasar las señales lentas y atenúa las rápidas"

explicacion: |
  Se usa, por ejemplo, para suavizar ruido.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "filtros"]

enunciado: "Un filtro RC pasa altos..."
tipo: mc
opciones_explicitas:
  - "Bloquea la continua y deja pasar las variaciones rápidas"
  - "Bloquea las señales rápidas"
  - "Amplifica la señal"
respuesta: "Bloquea la continua y deja pasar las variaciones rápidas"

explicacion: |
  El capacitor en serie no deja pasar la tensión continua.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "avanzado"
  tags: ["rc", "filtros"]

variables:
  r: uno_de([1000, 10000])
  c: uno_de([0.1, 1])
  fc: redondear(1 / (2 * pi * r * c / 1000000), 1)

respuesta: fc
tipo: input
tolerancia_abs: 0.5

enunciado: "Un filtro RC tiene R = {r} Ω y C = {c} µF. ¿Cuál es su frecuencia de corte, en Hz? (redondeá a un decimal)"

pasos:
  - "fc = 1 / (2π R C)"

explicacion: |
  La frecuencia de corte es fc = 1 / (2π R C).
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "calculo"]

variables:
  v: uno_de([5, 9, 12, 24])
  vc: redondear(v * (1 - e ^ (-1)), 2)

respuesta: vc
tipo: input
tolerancia_abs: 0.05

enunciado: "Un capacitor descargado se conecta a {v} V a través de una resistencia. ¿Qué tensión tiene luego de un tiempo igual a τ, en V? (redondeá a dos decimales)"

pasos:
  - "Vc = V × (1 − e^(−1))"

explicacion: |
  A t = τ la carga es aproximadamente el 63 % de V.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "calculo"]

variables:
  v0: uno_de([5, 10, 12, 24])
  vc: redondear(v0 * e ^ (-1), 2)

respuesta: vc
tipo: input
tolerancia_abs: 0.05

enunciado: "Un capacitor cargado a {v0} V se descarga por una resistencia. ¿Qué tensión queda al cabo de un tiempo τ, en V? (redondeá a dos decimales)"

pasos:
  - "Vc = V0 × e^(−1)"

explicacion: |
  A t = τ queda cerca del 37 % de V0.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "aplicaciones"]

enunciado: "¿Cuál es una aplicación típica de los circuitos RC?"
tipo: mc
opciones_explicitas:
  - "Antirrebote de pulsadores"
  - "Generar energía"
  - "Aumentar la tensión de la red"
respuesta: "Antirrebote de pulsadores"

explicacion: |
  También aparecen en temporizadores y filtros de fuentes.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "avanzado"
  tags: ["rc", "calculo"]

enunciado: "Si se duplican tanto R como C, la constante de tiempo se..."
tipo: mc
opciones_explicitas:
  - "Cuadruplica"
  - "Duplica"
  - "Mantiene"
respuesta: "Cuadruplica"

explicacion: |
  τ = R × C, entonces 2R × 2C = 4RC.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "avanzado"
  tags: ["rc", "filtros"]

respuesta: verdadero
tipo: vf

enunciado: "En régimen permanente con tensión continua, un capacitor cargado se comporta como un circuito abierto."

explicacion: |
  Cuando termina de cargarse, deja de circular corriente por él.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "avanzado"
  tags: ["rc", "calculo"]

enunciado: "Con R = 100 kΩ y C = 10 µF, la constante de tiempo es..."
tipo: mc
opciones_explicitas:
  - "1 s"
  - "10 s"
  - "0,1 s"
respuesta: "1 s"

explicacion: |
  100 000 × 0,00001 = 1 s.
```

## Sección: compuertas-nand-nor-xor-y-universalidad (23 preguntas)

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["nand"]

enunciado: "Una compuerta NAND de dos entradas da salida 0 cuando..."
tipo: mc
opciones_explicitas:
  - "Ambas entradas son 1"
  - "Alguna entrada es 1"
  - "Ambas entradas son 0"
respuesta: "Ambas entradas son 1"

explicacion: |
  Es un AND seguido de un NOT.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["nor"]

enunciado: "Una compuerta NOR de dos entradas da salida 1 cuando..."
tipo: mc
opciones_explicitas:
  - "Ambas entradas son 0"
  - "Alguna entrada es 1"
  - "Ambas entradas son 1"
respuesta: "Ambas entradas son 0"

explicacion: |
  Es un OR seguido de un NOT.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["xor"]

enunciado: "Una compuerta XOR da salida 1 cuando..."
tipo: mc
opciones_explicitas:
  - "Las entradas son diferentes"
  - "Las entradas son iguales"
  - "Ambas entradas son 0"
respuesta: "Las entradas son diferentes"

explicacion: |
  Es el OR exclusivo.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["xor"]

enunciado: "Una compuerta XNOR da salida 1 cuando..."
tipo: mc
opciones_explicitas:
  - "Las entradas son iguales"
  - "Las entradas son diferentes"
  - "Alguna entrada es 0"
respuesta: "Las entradas son iguales"

explicacion: |
  Es la negación de la XOR.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["nand", "calculo"]

variables:
  a: 1
  b: 1
  s: 1 - a * b

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale la salida (0 o 1) de una NAND cuando A = {a} y B = {b}?"

pasos:
  - "NAND = NOT (A AND B)"

explicacion: |
  1 AND 1 = 1, negado da 0.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["nand", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  s: 1 - a * b

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale la salida (0 o 1) de una NAND cuando A = {a} y B = {b}?"

pasos:
  - "NAND = NOT (A AND B)"

explicacion: |
  La NAND da 0 solo si ambas entradas son 1.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["nor", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  s: 1 - max(a, b)

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale la salida (0 o 1) de una NOR cuando A = {a} y B = {b}?"

pasos:
  - "NOR = NOT (A OR B)"

explicacion: |
  La NOR da 1 solo si ambas entradas son 0.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["xor", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  s: abs(a - b)

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale la salida (0 o 1) de una XOR cuando A = {a} y B = {b}?"

pasos:
  - "XOR = 1 si las entradas son distintas"

explicacion: |
  La salida es 1 cuando difieren.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["xor", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  s: 1 - abs(a - b)

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale la salida (0 o 1) de una XNOR cuando A = {a} y B = {b}?"

pasos:
  - "XNOR = NOT XOR"

explicacion: |
  La salida es 1 cuando son iguales.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["tabla_verdad", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5])
  f: 2 ^ n

respuesta: f
tipo: input
tolerancia_abs: 0

enunciado: "Una función lógica tiene {n} entradas. ¿Cuántas filas tiene su tabla de verdad?"

pasos:
  - "Filas = 2^n"

explicacion: |
  Cada entrada duplica las combinaciones.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["universalidad"]

respuesta: verdadero
tipo: vf

enunciado: "Con compuertas NAND se puede construir cualquier función lógica."

explicacion: |
  Por eso la NAND es una compuerta universal.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["universalidad"]

respuesta: verdadero
tipo: vf

enunciado: "Con compuertas NOR se puede construir cualquier función lógica."

explicacion: |
  La NOR también es universal.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["universalidad"]

respuesta: falso
tipo: vf

enunciado: "Con compuertas AND solamente se puede construir cualquier función lógica."

explicacion: |
  Con AND no se puede obtener la negación.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["universalidad"]

enunciado: "Para obtener un NOT con una compuerta NAND se..."
tipo: mc
opciones_explicitas:
  - "Unen sus dos entradas"
  - "Deja una entrada sin conectar"
  - "Conecta una entrada a masa y otra a la alimentación"
respuesta: "Unen sus dos entradas"

explicacion: |
  NAND(A, A) = NOT A.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["demorgan"]

enunciado: "Según De Morgan, NOT (A · B) es igual a..."
tipo: mc
opciones_explicitas:
  - "NOT A + NOT B"
  - "NOT A · NOT B"
  - "A + B"
respuesta: "NOT A + NOT B"

explicacion: |
  La negación de un producto es la suma de las negaciones.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["demorgan"]

enunciado: "Según De Morgan, NOT (A + B) es igual a..."
tipo: mc
opciones_explicitas:
  - "NOT A · NOT B"
  - "NOT A + NOT B"
  - "A · B"
respuesta: "NOT A · NOT B"

explicacion: |
  La negación de una suma es el producto de las negaciones.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "avanzado"
  tags: ["demorgan"]

enunciado: "Una compuerta NAND equivale a un OR con..."
tipo: mc
opciones_explicitas:
  - "Las entradas invertidas"
  - "La salida a masa"
  - "Las entradas puestas en cero"
respuesta: "Las entradas invertidas"

explicacion: |
  Es consecuencia de De Morgan.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["nand", "aplicaciones"]

enunciado: "El circuito integrado 7400 contiene..."
tipo: mc
opciones_explicitas:
  - "Cuatro compuertas NAND de dos entradas"
  - "Un microcontrolador"
  - "Un amplificador operacional"
respuesta: "Cuatro compuertas NAND de dos entradas"

explicacion: |
  Es un ejemplo clásico de la familia TTL.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["algebra"]

respuesta: verdadero
tipo: vf

enunciado: "Simplificar una expresión booleana permite implementarla con menos compuertas."

explicacion: |
  Baja el costo, el consumo y los retardos.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "avanzado"
  tags: ["algebra"]

respuesta: verdadero
tipo: vf

enunciado: "La expresión A + A·B es equivalente a A."

explicacion: |
  Es la ley de absorción.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["xor"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de dos bits, sin considerar el acarreo, se obtiene con una compuerta XOR."

explicacion: |
  0+0=0, 0+1=1, 1+0=1 y 1+1=0 con acarreo 1.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["xor"]

tipo: completar
enunciado: "La compuerta que da 1 cuando las dos entradas son iguales se llama ___."
respuestas_validas:
  - "XNOR"
  - "xnor"

explicacion: |
  Se usa como comparador de igualdad.
```

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "avanzado"
  tags: ["tabla_verdad"]

enunciado: "Dos expresiones lógicas son equivalentes si..."
tipo: mc
opciones_explicitas:
  - "Dan la misma salida para todas las combinaciones de entrada"
  - "Tienen la misma cantidad de compuertas"
  - "Usan las mismas variables en el mismo orden"
respuesta: "Dan la misma salida para todas las combinaciones de entrada"

explicacion: |
  Se verifica con la tabla de verdad.
```

## Sección: diodo-polarizacion-rectificacion-y-fuentes (24 preguntas)

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["diodo"]

enunciado: "Un diodo ideal conduce cuando..."
tipo: mc
opciones_explicitas:
  - "El ánodo es más positivo que el cátodo"
  - "El cátodo es más positivo que el ánodo"
  - "La tensión es alterna"
respuesta: "El ánodo es más positivo que el cátodo"

explicacion: |
  Esa es la polarización directa.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["diodo"]

enunciado: "En el cuerpo de un diodo, la banda marca..."
tipo: mc
opciones_explicitas:
  - "El cátodo"
  - "El ánodo"
  - "La tensión máxima"
respuesta: "El cátodo"

explicacion: |
  La corriente entra por el ánodo y sale por el cátodo.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["diodo"]

enunciado: "La caída de tensión de un diodo de silicio en directa es de aproximadamente..."
tipo: mc
opciones_explicitas:
  - "0,7 V"
  - "5 V"
  - "0,07 V"
respuesta: "0,7 V"

explicacion: |
  El LED necesita más, según su color.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["diodo"]

respuesta: verdadero
tipo: vf

enunciado: "Un diodo polarizado en inversa bloquea el paso de corriente (salvo una pequeña fuga)."

explicacion: |
  En inversa se comporta casi como un circuito abierto.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["diodo", "calculo"]

variables:
  vf: uno_de([5, 9, 12])
  vled: uno_de([2, 2.2, 3])
  i: uno_de([10, 15, 20])
  r: redondear((vf - vled) / (i / 1000), 0)

respuesta: r
tipo: input
tolerancia_abs: 1

enunciado: "Un LED de {vled} V se alimenta con {vf} V y debe circular una corriente de {i} mA. ¿Qué resistencia en serie hace falta, en Ω?"

pasos:
  - "R = (Vfuente − Vled) / I"
  - "Convertir mA a A"

explicacion: |
  La resistencia limita la corriente cuando el LED fija su caída.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["diodo", "calculo"]

variables:
  vf: uno_de([6, 9, 12])
  v: vf - 0.7

respuesta: v
tipo: input
tolerancia_abs: 0.05

enunciado: "Un diodo de silicio conduce en serie con una resistencia alimentada con {vf} V. ¿Qué tensión cae sobre la resistencia, en V?"

pasos:
  - "Vr = V − 0,7 V"

explicacion: |
  Al diodo le corresponden unos 0,7 V.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["diodo", "calculo"]

variables:
  vf: uno_de([5, 9, 12])
  r: uno_de([430, 860, 1000])
  i: redondear((vf - 0.7) / r * 1000, 1)

respuesta: i
tipo: input
tolerancia_abs: 0.2

enunciado: "Un diodo de silicio y una resistencia de {r} Ω se conectan en serie a {vf} V. ¿Qué corriente circula, en mA? (redondeá a un decimal)"

pasos:
  - "I = (V − 0,7) / R"

explicacion: |
  Se resta la caída del diodo y se aplica Ohm.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["fuente"]

enunciado: "El orden correcto de las etapas de una fuente es..."
tipo: mc
opciones_explicitas:
  - "Transformador, rectificador, filtro, regulador"
  - "Regulador, filtro, rectificador, transformador"
  - "Filtro, transformador, regulador, rectificador"
respuesta: "Transformador, rectificador, filtro, regulador"

explicacion: |
  Primero se reduce la tensión, después se convierte en continua y se estabiliza.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["fuente"]

tipo: completar
enunciado: "El rectificador convierte la tensión alterna en una tensión de un solo ___ (polaridad)."
respuestas_validas:
  - "signo"
  - "sentido"
  - "polaridad"

explicacion: |
  Elimina o invierte la parte negativa.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["rectificador"]

enunciado: "Un rectificador de media onda..."
tipo: mc
opciones_explicitas:
  - "Aprovecha un solo semiciclo"
  - "Aprovecha los dos semiciclos"
  - "Duplica la frecuencia"
respuesta: "Aprovecha un solo semiciclo"

explicacion: |
  Los semiciclos negativos quedan bloqueados.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["rectificador"]

enunciado: "Un puente rectificador de onda completa usa..."
tipo: mc
opciones_explicitas:
  - "Cuatro diodos"
  - "Un diodo"
  - "Dos resistencias"
respuesta: "Cuatro diodos"

explicacion: |
  Se llama puente de Graetz.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["rectificador", "calculo"]

variables:
  f: uno_de([50, 60])
  fs: f * 2

respuesta: fs
tipo: input
tolerancia_abs: 0.5

enunciado: "Un rectificador de onda completa se alimenta con {f} Hz. ¿Cuál es la frecuencia de los pulsos de salida, en Hz?"

pasos:
  - "Se duplica"

explicacion: |
  En onda completa hay dos pulsos por ciclo de entrada.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "avanzado"
  tags: ["rectificador", "calculo"]

variables:
  vp: uno_de([10, 12, 15, 20, 24])
  vdc: redondear(vp / pi, 2)

respuesta: vdc
tipo: input
tolerancia_abs: 0.05

enunciado: "Un rectificador de media onda ideal recibe una señal de pico {vp} V. ¿Cuál es el valor medio de la salida, en V? (redondeá a dos decimales)"

pasos:
  - "Vdc = Vp / π"

explicacion: |
  El valor medio es Vp dividido π.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "avanzado"
  tags: ["rectificador", "calculo"]

variables:
  vp: uno_de([10, 12, 15, 20, 24])
  vdc: redondear(2 * vp / pi, 2)

respuesta: vdc
tipo: input
tolerancia_abs: 0.05

enunciado: "Un rectificador de onda completa ideal recibe una señal de pico {vp} V. ¿Cuál es el valor medio de la salida, en V? (redondeá a dos decimales)"

pasos:
  - "Vdc = 2 Vp / π"

explicacion: |
  El valor medio es el doble que en media onda.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["rectificador", "calculo"]

variables:
  vp: uno_de([10, 12, 15, 20, 24])
  vo: redondear(vp - 1.4, 2)

respuesta: vo
tipo: input
tolerancia_abs: 0.05

enunciado: "A un puente rectificador de silicio llega una señal de pico {vp} V. ¿Cuál es el pico de la salida, en V? (considerá 0,7 V por diodo y dos diodos en conducción)"

pasos:
  - "Vo = Vp − 2 × 0,7 V"

explicacion: |
  En cada semiciclo conducen dos diodos en serie.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["filtro"]

enunciado: "En una fuente, el capacitor de filtro sirve para..."
tipo: mc
opciones_explicitas:
  - "Suavizar la tensión rectificada"
  - "Reducir la tensión de la red"
  - "Bloquear la continua"
respuesta: "Suavizar la tensión rectificada"

explicacion: |
  Se carga en los picos y entrega energía entre ellos.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["filtro"]

respuesta: verdadero
tipo: vf

enunciado: "Con un capacitor de filtro mayor, el rizado de la tensión disminuye."

explicacion: |
  El capacitor se descarga menos entre pico y pico.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["filtro"]

respuesta: verdadero
tipo: vf

enunciado: "Si aumenta el consumo de la carga, el rizado aumenta."

explicacion: |
  El capacitor se descarga más rápido entre picos.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["regulador"]

enunciado: "Un regulador de tensión..."
tipo: mc
opciones_explicitas:
  - "Mantiene una tensión de salida fija"
  - "Convierte alterna en continua"
  - "Almacena energía"
respuesta: "Mantiene una tensión de salida fija"

explicacion: |
  Por ejemplo, un 7805 entrega 5 V.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "avanzado"
  tags: ["regulador"]

enunciado: "El diodo Zener se usa para..."
tipo: mc
opciones_explicitas:
  - "Fijar una tensión de referencia conduciendo en inversa"
  - "Rectificar la red"
  - "Emitir luz"
respuesta: "Fijar una tensión de referencia conduciendo en inversa"

explicacion: |
  En inversa conduce a una tensión definida.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["fuente"]

respuesta: falso
tipo: vf

enunciado: "La red eléctrica domiciliaria en Argentina entrega corriente continua."

explicacion: |
  Entrega corriente alterna de 220 V y 50 Hz.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["fuente"]

tipo: completar
enunciado: "La frecuencia de la red eléctrica argentina es de ___ Hz."
respuestas_validas:
  - "50"

explicacion: |
  Es de 50 Hz.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["diodo"]

respuesta: falso
tipo: vf

enunciado: "Un LED puede conectarse directamente a una fuente sin resistencia en serie."

explicacion: |
  Sin limitación, la corriente crece y lo destruye.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "avanzado"
  tags: ["diodo"]

enunciado: "En un diodo polarizado en inversa, la corriente que circula es..."
tipo: mc
opciones_explicitas:
  - "Muy pequeña (corriente de fuga)"
  - "Igual a la directa"
  - "Infinita"
respuesta: "Muy pequeña (corriente de fuga)"

explicacion: |
  Hasta la tensión de ruptura, el diodo bloquea.
```

## Sección: divisor-de-tension-y-codigo-de-colores (23 preguntas)

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores"]

enunciado: "En el código de colores de resistencias, ¿qué dígito representa el rojo?"
tipo: mc
opciones_explicitas:
  - "2"
  - "1"
  - "3"
respuesta: "2"

explicacion: |
  Negro 0, marrón 1, rojo 2, naranja 3.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores"]

enunciado: "¿Qué color representa el dígito 0?"
tipo: mc
opciones_explicitas:
  - "Negro"
  - "Blanco"
  - "Marrón"
respuesta: "Negro"

explicacion: |
  El negro es 0 y el blanco es 9.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores"]

enunciado: "Una banda dorada de tolerancia indica..."
tipo: mc
opciones_explicitas:
  - "5 %"
  - "10 %"
  - "1 %"
respuesta: "5 %"

explicacion: |
  El plateado indica 10 %.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores"]

enunciado: "Una banda plateada de tolerancia indica..."
tipo: mc
opciones_explicitas:
  - "10 %"
  - "5 %"
  - "2 %"
respuesta: "10 %"

explicacion: |
  El dorado indica 5 %.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores"]

enunciado: "En una resistencia de cuatro bandas, ¿qué indica la tercera banda?"
tipo: mc
opciones_explicitas:
  - "El multiplicador"
  - "El segundo dígito"
  - "La potencia"
respuesta: "El multiplicador"

explicacion: |
  Las dos primeras son dígitos, la tercera el multiplicador y la cuarta la tolerancia.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores"]

respuesta: verdadero
tipo: vf

enunciado: "Una resistencia marrón, negro, rojo, dorado vale 1 kΩ con tolerancia de 5 %."

explicacion: |
  1, 0 y multiplicador 100: 10 × 100 = 1000 Ω.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["tolerancia"]

enunciado: "Una resistencia de 1 kΩ al 5 % puede medir entre..."
tipo: mc
opciones_explicitas:
  - "950 Ω y 1050 Ω"
  - "900 Ω y 1100 Ω"
  - "995 Ω y 1005 Ω"
respuesta: "950 Ω y 1050 Ω"

explicacion: |
  El 5 % de 1000 Ω son 50 Ω hacia arriba y hacia abajo.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["series"]

respuesta: falso
tipo: vf

enunciado: "Las resistencias se fabrican en todos los valores posibles, sin series normalizadas."

explicacion: |
  Se fabrican en series normalizadas como la E12 o la E24.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["series"]

tipo: completar
enunciado: "La serie de valores de uso común con tolerancia del 10 % se llama E___."
respuestas_validas:
  - "12"

explicacion: |
  La serie E12 tiene doce valores por década.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores", "calculo"]

variables:
  d1: random(1, 9)
  d2: random(0, 9)
  m: random(0, 3)
  valor: (d1 * 10 + d2) * 10 ^ m

respuesta: valor
tipo: input
tolerancia_abs: 0.5

enunciado: "Una resistencia tiene las dos primeras bandas {d1} y {d2} (dígitos) y el multiplicador es 10 elevado a {m}. ¿Cuánto vale, en ohmios?"

pasos:
  - "Número formado: {d1 * 10 + d2}"
  - "Multiplicar por 10 ^ {m}"

explicacion: |
  El valor es el número de dos dígitos por el multiplicador.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["codigo_de_colores"]

variables:
  colores: ["negro", "marrón", "rojo", "naranja", "amarillo", "verde", "azul", "violeta", "gris", "blanco"]
  d: uno_de([2, 3, 4, 5, 6, 7])

enunciado: "¿Qué color representa el dígito {d}?"
tipo: mc
opciones_explicitas:
  - colores[d]
  - colores[d - 1]
  - colores[d + 1]
respuesta: colores[d]

explicacion: |
  Negro 0, marrón 1, rojo 2, naranja 3, amarillo 4, verde 5, azul 6, violeta 7.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["potencia", "calculo"]

variables:
  v: random(2, 24)
  i: random(1, 5)
  p: v * i

respuesta: p
tipo: input
tolerancia_abs: 0.01

enunciado: "Una resistencia tiene {v} V entre sus extremos y circulan {i} A. ¿Qué potencia disipa, en W?"

pasos:
  - "P = V × I"

explicacion: |
  La potencia es el producto de tensión por corriente.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["potencia", "calculo"]

variables:
  i: random(1, 4)
  r: random(2, 20)
  p: i * i * r

respuesta: p
tipo: input
tolerancia_abs: 0.01

enunciado: "Por una resistencia de {r} Ω circulan {i} A. ¿Qué potencia disipa, en W?"

pasos:
  - "P = I² × R"
  - "{i}² × {r}"

explicacion: |
  Con la corriente y la resistencia se usa P = I² × R.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["potencia", "calculo"]

variables:
  v: uno_de([5, 10, 12, 20])
  r: uno_de([5, 10, 20, 25, 50])
  p: redondear(v * v / r, 2)

respuesta: p
tipo: input
tolerancia_abs: 0.01

enunciado: "Una resistencia de {r} Ω se conecta a {v} V. ¿Qué potencia disipa, en W?"

pasos:
  - "P = V² / R"

explicacion: |
  P = V² / R. Si superás la potencia nominal, la resistencia se sobrecalienta.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["potencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la potencia calculada supera la que soporta la resistencia, esta se calienta en exceso y puede dañarse."

explicacion: |
  Hay que elegir una resistencia de mayor potencia, con margen.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["divisor", "calculo"]

variables:
  vin: uno_de([5, 9, 12, 24])
  r1: uno_de([1000, 2000, 3000, 4000])
  r2: uno_de([1000, 2000, 3000, 4000, 6000])
  vout: redondear(vin * r2 / (r1 + r2), 2)

respuesta: vout
tipo: input
tolerancia_abs: 0.02

enunciado: "En un divisor de tensión, Vin = {vin} V, R1 = {r1} Ω y R2 = {r2} Ω. ¿Cuánto vale Vout (la tensión en R2), en V?"

pasos:
  - "Vout = Vin × R2 / (R1 + R2)"

explicacion: |
  La tensión se reparte en proporción a las resistencias.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["divisor", "calculo"]

variables:
  vin: random(4, 30)
  vout: redondear(vin / 2, 2)

respuesta: vout
tipo: input
tolerancia_abs: 0.02

enunciado: "Un divisor de tensión tiene dos resistencias iguales y Vin = {vin} V. ¿Cuánto vale Vout, en V?"

pasos:
  - "Si R1 = R2, la salida es la mitad"

explicacion: |
  Con resistencias iguales, cada una recibe la mitad de la tensión.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["divisor", "calculo"]

variables:
  vin: uno_de([6, 9, 12, 24])
  r1: uno_de([100, 200, 300])
  r2: uno_de([100, 200, 600])
  i: redondear(vin / (r1 + r2) * 1000, 1)

respuesta: i
tipo: input
tolerancia_abs: 0.1

enunciado: "Un divisor de tensión con R1 = {r1} Ω y R2 = {r2} Ω se alimenta con {vin} V. ¿Qué corriente circula por la serie, en mA?"

pasos:
  - "I = Vin / (R1 + R2)"
  - "Convertir de A a mA multiplicando por 1000"

explicacion: |
  En serie la corriente es la misma en las dos resistencias.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["divisor"]

enunciado: "Si R2 es mucho mayor que R1, la salida del divisor..."
tipo: mc
opciones_explicitas:
  - "Se acerca a Vin"
  - "Se acerca a cero"
  - "Es exactamente la mitad de Vin"
respuesta: "Se acerca a Vin"

explicacion: |
  Casi toda la tensión cae en la resistencia más grande.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["divisor", "carga"]

enunciado: "Si se conecta una carga en paralelo con R2, la tensión de salida..."
tipo: mc
opciones_explicitas:
  - "Baja"
  - "Sube"
  - "No cambia"
respuesta: "Baja"

explicacion: |
  La resistencia equivalente de esa parte disminuye, y recibe una fracción menor de la tensión.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "avanzado"
  tags: ["divisor", "carga"]

respuesta: falso
tipo: vf

enunciado: "Un divisor de tensión es una buena forma de alimentar un equipo que consume mucha corriente."

explicacion: |
  Sirve para señales de poca corriente; para alimentar equipos se usa un regulador.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "avanzado"
  tags: ["divisor", "carga"]

enunciado: "Una regla práctica para que la carga no altere mucho el divisor es que su resistencia sea..."
tipo: mc
opciones_explicitas:
  - "Al menos diez veces mayor que R2"
  - "Igual a R2"
  - "Mucho menor que R2"
respuesta: "Al menos diez veces mayor que R2"

explicacion: |
  Una carga de resistencia alta casi no modifica el equivalente.
```

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "avanzado"
  tags: ["divisor", "diseno"]

variables:
  vin: uno_de([5, 10, 12])
  r1: uno_de([1000, 2000, 4000])
  k: uno_de([1, 2])
  r2: r1 * k

respuesta: redondear(vin * r2 / (r1 + r2), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un divisor tiene R1 = {r1} Ω y R2 = {r2} Ω con Vin = {vin} V. ¿Cuál es la salida, en V?"

pasos:
  - "Vout = Vin × R2 / (R1 + R2)"

explicacion: |
  Se aplica la fórmula del divisor.
```

## Sección: inductores-y-bobinas (24 preguntas)

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor"]

enunciado: "La inductancia se mide en..."
tipo: mc
opciones_explicitas:
  - "Henrios"
  - "Faradios"
  - "Ohmios"
respuesta: "Henrios"

explicacion: |
  El henrio (H); se usan mH y µH.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor"]

enunciado: "Un inductor está formado básicamente por..."
tipo: mc
opciones_explicitas:
  - "Un alambre enrollado, a veces sobre un núcleo magnético"
  - "Dos placas separadas por un aislante"
  - "Una unión de semiconductores"
respuesta: "Un alambre enrollado, a veces sobre un núcleo magnético"

explicacion: |
  El capacitor son dos placas; el diodo, una unión.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor"]

enunciado: "Un inductor se opone a..."
tipo: mc
opciones_explicitas:
  - "Los cambios de corriente"
  - "Los cambios de tensión"
  - "La existencia de corriente continua constante"
respuesta: "Los cambios de corriente"

explicacion: |
  Si la corriente no cambia, no hay tensión inducida.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor"]

respuesta: verdadero
tipo: vf

enunciado: "Si la corriente que circula por un inductor es constante, la tensión inducida es cero."

explicacion: |
  La tensión inducida depende de la rapidez de cambio de la corriente.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor", "continua"]

enunciado: "En régimen permanente de corriente continua, un inductor ideal se comporta como..."
tipo: mc
opciones_explicitas:
  - "Un cortocircuito"
  - "Un circuito abierto"
  - "Una resistencia alta"
respuesta: "Un cortocircuito"

explicacion: |
  Es el comportamiento opuesto al del capacitor.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "calculo"]

variables:
  l: uno_de([1, 2, 5, 10])
  di: uno_de([0.5, 1, 2, 4])
  dt: uno_de([0.1, 0.5, 1, 2])
  v: redondear(l * di / dt, 2)

respuesta: v
tipo: input
tolerancia_abs: 0.02

enunciado: "Un inductor de {l} H ve cambiar su corriente {di} A en {dt} s. ¿Qué tensión se induce, en V?"

pasos:
  - "V = L × (ΔI / Δt)"

explicacion: |
  La tensión es la inductancia por la rapidez de cambio.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor", "calculo"]

variables:
  l: uno_de([0.1, 0.5, 1, 2])
  r: uno_de([10, 20, 50, 100])
  t: redondear(l / r, 4)

respuesta: t
tipo: input
tolerancia_abs: 0.0005

enunciado: "Un circuito RL tiene L = {l} H y R = {r} Ω. ¿Cuánto vale la constante de tiempo, en segundos?"

pasos:
  - "τ = L / R"

explicacion: |
  En un circuito RL, τ = L / R.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "calculo"]

variables:
  v: uno_de([6, 12, 24])
  r: uno_de([10, 20, 30, 60])
  i: redondear(v / r, 3)

respuesta: i
tipo: input
tolerancia_abs: 0.002

enunciado: "Un inductor ideal en serie con una resistencia de {r} Ω se conecta a {v} V de continua. ¿Qué corriente alcanza en régimen permanente, en A?"

pasos:
  - "I = V / R"
  - "El inductor ideal no tiene caída en continua"

explicacion: |
  En régimen permanente solo limita la resistencia.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "calculo"]

variables:
  l: uno_de([0.1, 0.2, 0.5])
  f: uno_de([50, 100, 500])
  x: redondear(2 * pi * f * l, 1)

respuesta: x
tipo: input
tolerancia_abs: 0.2

enunciado: "Un inductor de {l} H trabaja a {f} Hz. ¿Cuánto vale su reactancia inductiva, en Ω? (redondeá a un decimal)"

pasos:
  - "XL = 2π × f × L"

explicacion: |
  La reactancia inductiva crece con la frecuencia.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor", "alterna"]

respuesta: verdadero
tipo: vf

enunciado: "La reactancia inductiva aumenta cuando aumenta la frecuencia."

explicacion: |
  XL = 2π × f × L.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "filtros"]

enunciado: "Por su reactancia, un inductor en serie con una línea tiende a..."
tipo: mc
opciones_explicitas:
  - "Bloquear las altas frecuencias"
  - "Bloquear la continua"
  - "Amplificar las señales"
respuesta: "Bloquear las altas frecuencias"

explicacion: |
  Deja pasar la continua y frena las altas frecuencias.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "capacitor"]

enunciado: "Respecto de la frecuencia, el inductor se comporta..."
tipo: mc
opciones_explicitas:
  - "De forma opuesta al capacitor"
  - "Igual que el capacitor"
  - "Igual que una resistencia"
respuesta: "De forma opuesta al capacitor"

explicacion: |
  El capacitor deja pasar altas frecuencias y bloquea continua; el inductor, al revés.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "vocabulario"]

tipo: completar
enunciado: "En un circuito RL la constante de tiempo es L dividido ___."
respuestas_validas:
  - "R"
  - "la resistencia"

explicacion: |
  τ = L / R.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor", "vocabulario"]

tipo: completar
enunciado: "La inductancia se mide en ___."
respuestas_validas:
  - "henrios"

explicacion: |
  El henrio.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "continua"]

enunciado: "En un circuito RL, la corriente llega a su valor final prácticamente luego de..."
tipo: mc
opciones_explicitas:
  - "Unos 5τ"
  - "Un instante"
  - "Una hora"
respuesta: "Unos 5τ"

explicacion: |
  Igual que la carga de un capacitor.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "proteccion"]

respuesta: verdadero
tipo: vf

enunciado: "Interrumpir bruscamente la corriente de un inductor puede producir una tensión inducida muy alta."

explicacion: |
  Por eso se protege con un diodo de rueda libre.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "proteccion"]

tipo: completar
enunciado: "El diodo que se coloca en paralelo con una bobina para proteger el circuito se llama diodo de rueda ___."
respuestas_validas:
  - "libre"

explicacion: |
  Da un camino a la corriente de la bobina al abrir el interruptor.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "aplicaciones"]

enunciado: "Un uso típico de un inductor es..."
tipo: mc
opciones_explicitas:
  - "En fuentes conmutadas para almacenar energía"
  - "Como indicador de tensión"
  - "Para producir luz"
respuesta: "En fuentes conmutadas para almacenar energía"

explicacion: |
  También se usa en filtros y sintonía.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "avanzado"
  tags: ["inductor", "transformador"]

respuesta: verdadero
tipo: vf

enunciado: "Un transformador está formado por dos bobinas acopladas por un mismo núcleo."

explicacion: |
  La corriente variable de una bobina induce tensión en la otra.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "avanzado"
  tags: ["inductor"]

enunciado: "Colocar un núcleo de material magnético dentro de una bobina..."
tipo: mc
opciones_explicitas:
  - "Aumenta su inductancia"
  - "Disminuye su inductancia"
  - "No la modifica"
respuesta: "Aumenta su inductancia"

explicacion: |
  El núcleo concentra el campo magnético.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "avanzado"
  tags: ["inductor", "calculo"]

variables:
  x1: uno_de([100, 200, 300, 500])
  x2: x1 * 2

respuesta: x2
tipo: input
tolerancia_abs: 0.5

enunciado: "Un inductor tiene una reactancia de {x1} Ω a cierta frecuencia. Si la frecuencia se duplica, ¿cuánto vale la reactancia, en Ω?"

pasos:
  - "XL es proporcional a f"

explicacion: |
  Al duplicar f se duplica XL.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "avanzado"
  tags: ["inductor"]

enunciado: "Si la corriente cambia el doble de rápido, la tensión inducida en un mismo inductor..."
tipo: mc
opciones_explicitas:
  - "Se duplica"
  - "Se reduce a la mitad"
  - "No cambia"
respuesta: "Se duplica"

explicacion: |
  V = L × ΔI / Δt.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "avanzado"
  tags: ["inductor"]

respuesta: falso
tipo: vf

enunciado: "Un inductor ideal se opone igual a todas las frecuencias."

explicacion: |
  Su reactancia crece con la frecuencia.
```

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "avanzado"
  tags: ["inductor", "aplicaciones"]

enunciado: "En un receptor de radio, los inductores combinados con capacitores sirven para..."
tipo: mc
opciones_explicitas:
  - "Sintonizar una frecuencia"
  - "Almacenar datos"
  - "Medir la temperatura"
respuesta: "Sintonizar una frecuencia"

explicacion: |
  Un circuito LC resuena a una frecuencia determinada.
```

