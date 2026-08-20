# Fisica — Temperatura equilibrio termico (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de temperatura

```
metadata:
  materia: "fisica"
  tema: "definicion_temperatura"
  nivel: "basico"
  tags: ["conceptos", "energia"]

respuesta: "energia_cinetica_media"
tipo: completar
respuestas_validas:
  - "energia_cinetica_media"

enunciado: "La temperatura es una magnitud física que mide la ___ de las partículas de un cuerpo."

explicacion: |
  La temperatura no mide la energía total, sino el promedio de la energía cinética de las partículas.
```

### 2 — Equilibrio térmico

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico"
  nivel: "basico"
  tags: ["conceptos", "flujo_calorico"]

respuesta: "verdadero"
tipo: completar
enunciado: "Cuando dos cuerpos en contacto alcanzan el equilibrio térmico, sus temperaturas son iguales."

explicacion: |
  Por definición, el equilibrio térmico se alcanza cuando cesa el flujo neto de calor debido a la igualdad de temperaturas.
```

### 3 — Escala Kelvin

```
metadata:
  materia: "fisica"
  tema: "escalas_termometricas"
  nivel: "basico"
  tags: ["unidades", "kelvin"]

respuesta: 273.15
tipo: completar
tolerancia_abs: 0.1

enunciado: "En la escala Kelvin, el cero absoluto equivale a ___ K."

explicacion: |
  El cero absoluto es la temperatura teórica donde el movimiento molecular es mínimo, equivalente a -273.15 °C.
```

### 4 — Calor vs Temperatura

```
metadata:
  materia: "fisica"
  tema: "diferencia_calor_temp"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: "calor"
tipo: completar
respuestas_validas:
  - "calor"

enunciado: "Mientras que la temperatura mide el estado térmico, el ___ es la energía en tránsito entre cuerpos."

explicacion: |
  El calor es energía que fluye de un cuerpo con mayor temperatura a uno de menor temperatura.
```

### 5 — Dirección del flujo

```
metadata:
  materia: "fisica"
  tema: "flujo_calorico"
  nivel: "basico"
  tags: ["ley_cero"]

respuesta: "mayor_a_menor"
tipo: completar
respuestas_validas:
  - "mayor_a_menor"

enunciado: "El calor fluye espontáneamente de un cuerpo con temperatura ___ a uno con temperatura ___."

explicacion: |
  El flujo de calor siempre ocurre desde el cuerpo más caliente hacia el más frío hasta alcanzar el equilibrio.
```

### 6 — Escala Celsius a Kelvin

```
metadata:
  materia: "fisica"
  tema: "conversion_escalas"
  nivel: "basico"
  tags: ["calculo"]

variables:
  idx: uno_de([0,1])
  datos: [[20, 293.15], [100, 373.15]]

respuesta: "datos[idx][1]"
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un objeto tiene una temperatura de {datos[idx][0]} °C, ¿cuál es su valor en Kelvin?"

explicacion: |
  La fórmula es T(K) = T(°C) + 273.15.
```

### 7 — El cero absoluto

```
metadata:
  materia: "fisica"
  tema: "cero_absoluto"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "falso"
tipo: completar
enunciado: "Es posible alcanzar el cero absoluto (0 K) mediante procesos térmicos convencionales."

explicacion: |
  La tercera ley de la termodinámica establece que el cero absoluto es inalcanzable en un número finito de pasos.
```

### 8 — Sensación térmica

```
metadata:
  materia: "fisica"
  tema: "sensacion_termica"
  nivel: "intermedio"
  tags: ["error_comun"]

respuesta: "falso"
tipo: completar
enunciado: "La sensación térmica de una persona es una medida exacta de la temperatura termodinámica de un objeto."

explicacion: |
  La sensación térmica depende de factores como la humedad, el viento y la conductividad térmica de la piel, no solo de la temperatura.
```

### 9 — Identificación de sistemas

```
metadata:
  materia: "fisica"
  tema: "sistemas_termicos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "sistema_abierto"
tipo: completar
respuestas_validas:
  - "sistema_abierto"

enunciado: "Un sistema que intercambia energía y materia con su entorno se denomina ___."

explicacion: |
  Un sistema abierto permite el intercambio tanto de calor como de masa con el medio ambiente.
```

### 10 — Equilibrio térmico (mc)

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "igualdad_temperaturas"
tipo: mc
opciones_explicitas: ["igualdad_temperaturas", "igualdad_masas", "igualdad_volumenes", "igualdad_presiones"]

enunciado: "Al alcanzar el equilibrio térmico, ¿qué propiedad se iguala entre los cuerpos?"

explicacion: |
  El equilibrio térmico implica que no hay transferencia neta de calor porque las temperaturas se han igualado.
```

### 11 — Calor específico (Concepto)

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["propiedades"]

respuesta: "capacidad_para_cambiar_temperatura"
tipo: completar
respuestas_validas:
  - "capacidad_para_cambiar_temperatura"

enunciado: "El calor específico es la propiedad que mide la ___ de una sustancia."

explicacion: |
  Es la cantidad de calor necesaria para elevar un grado la temperatura de una unidad de masa.
```

### 12 — Calor específico (Comparación)

```
metadata:
  materia: "fisica"
  tema: "comparacion_materiales"
  nivel: "intermedio"
  tags: ["propiedades"]

respuesta: "agua"
tipo: mc
opciones_explicitas: ["agua", "hierro", "arena", "aluminio"]

enunciado: "De los siguientes materiales, ¿cuál tiene un calor específico mucho más alto (tarda más en calentarse)?"

explicacion: |
  El agua tiene un calor específico muy elevado (~4186 J/kg·K), lo que la hace un excelente regulador térmico.
```

### 13 — Proceso de calentamiento

```
metadata:
  materia: "fisica"
  tema: "pasos_calentamiento"
  nivel: "intermedio"
  tags: ["procedimiento"]

respuesta_orden: ["medir_temp_inicial", "suministrar_calor", "medir_temp_final"]
tipo: ordenar
opciones_explicitas: ["medir_temp_inicial", "suministrar_calor", "medir_temp_final"]

enunciado: "Ordena los pasos para realizar un experimento de transferencia de calor:"

explicacion: |
  Primero se establece el estado inicial, luego se aplica la energía y finalmente se observa el estado final.
```

### 14 — Transferencia de calor

```
metadata:
  materia: "fisica"
  tema: "modos_transferencia"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "conduccion"
tipo: completar
respuestas_validas:
  - "conduccion"

enunciado: "La transferencia de calor a través del contacto directo entre sólidos se llama ___."

explicacion: |
  La conducción es el mecanismo principal en materiales sólidos.
```

### 15 — Calor vs Temperatura (mc)

```
metadata:
  materia: "fisica"
  tema: "diferencia_calor_temp"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: "calor"
tipo: mc
opciones_explicitas: ["calor", "temperatura", "entalpía", "entropía"]

enunciado: "Si un bloque de metal se calienta, la energía que absorbe se llama ___."

explicacion: |
  La energía absorbida o transferida se define como calor.
```

### 16 — Escenario de mezcla (Cálculo)

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico_calculo"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  idx: uno_de([0,1])
  datos: [[100, 50], [20, 80]] 
  # datos[idx][0] es T_inicial, datos[idx][1] es T_final

respuesta: "datos[idx][1]"
tipo: completar
tolerancia_abs: 0.1

enunciado: "En un sistema ideal de calor específico iguales, si se mezclan dos masas iguales, la temperatura de equilibrio será la media de {datos[idx][0]} y {datos[idx][1]} °C. ¿Cuál es el resultado?"

explicacion: |
  (100 + 50) / 2 = 75. (20 + 80) / 2 = 50.
```

### 17 — Calor específico del agua

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calculo"]

respuesta: 4186
tipo: completar
tolerancia_abs: 10

enunciado: "El calor específico del agua es aproximadamente ___ J/(kg·K)."

explicacion: |
  Es un valor estándar utilizado en termodinámica.
```

### 18 — Calor latente (Concepto)

```
metadata:
  materia: "fisica"
  tema: "cambio_fase"
  nivel: "intermedio"
  tags: ["cambio_fase"]

respuesta: "falso"
tipo: completar
enunciado: "Durante un cambio de fase (como la fusión del hielo), la temperatura del sistema aumenta aunque se siga suministrando calor."

explicacion: |
  Falso. Durante el cambio de fase, la temperatura permanece constante mientras se rompen los enlaces moleculares.
```

### 19 — Sistema térmico cerrado

```
metadata:
  materia: "fisica"
  tema: "sistemas_termicos"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: "sistema_cerrado"
tipo: completar
respuestas_validas:
  - "sistema_cerrado"

enunciado: "Un sistema que intercambia energía pero no materia con su entorno se llama ___."

explicacion: |
  En un sistema cerrado, la masa permanece constante pero la energía puede entrar o salir.
```

### 20 — Escala Kelvin (mc)

```
metadata:
  materia: "fisica"
  tema: "escalas_termometricas"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "absoluta"
tipo: mc
opciones_explicitas: ["absoluta", "relativa", "celcius", "fahrenheit"]

enunciado: "La escala Kelvin es conocida como la escala ___."

explicacion: |
  Se llama absoluta porque parte del cero absoluto, donde no hay energía térmica.
```

### 21 — Calor específico y masa

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calculo"]

respuesta: "proporcional"
tipo: completar
respuestas_validas:
  - "proporcional"

enunciado: "La cantidad de calor necesaria para elevar la temperatura de un cuerpo es ___ a su masa."

explicacion: |
  A mayor masa, se requiere más calor para producir el mismo cambio de temperatura (Q = m·c·ΔT).
```

### 22 — Escenario de enfriamiento

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico"
  nivel: "avanzado"
  tags: ["flujo_calorico"]

respuesta: "verdadero"
tipo: completar
enunciado: "Si un objeto caliente se coloca en un ambiente frío, el calor fluirá del objeto al ambiente hasta que sus temperaturas se igualen."

explicacion: |
  Este es el proceso natural de transferencia de energía hacia el equilibrio térmico.
```

### 23 — Ley Cero de la Termodinámica

```
metadata:
  materia: "fisica"
  tema: "ley_cero"
  nivel: "avanzado"
  tags: ["leyes_termodinamica"]

respuesta: "termómetro"
tipo: completar
respuestas_validas:
  - "termómetro"

enunciado: "La Ley Cero de la Termodinámica permite el uso de un tercer cuerpo (como un ___) para medir la temperatura de otros dos."

explicacion: |
  Si A=C y B=C, entonces A=B. El termómetro actúa como el cuerpo C.
```

### 24 — Temperatura y movimiento

```
metadata:
  materia: "fisica"
  tema: "microscopico_temperatura"
  nivel: "intermedio"
  tags: ["moleculas"]

respuesta: "mayor"
tipo: completar
respuestas_validas:
  - "mayor"

enunciado: "A una temperatura más alta, las partículas de un gas tienen una energía cinética ___."

explicacion: |
  La temperatura es una medida directa de la agitación térmica de las partículas.
```

### 25 — Identificación de equilibrio (mc)

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "0"
tipo: mc
opciones_explicitas: ["0", "positivo", "negativo", "infinito"]

enunciado: "Cuando dos cuerpos están en equilibrio térmico, el flujo neto de calor entre ellos es ___."

explicacion: |
  En equilibrio, la energía que sale de uno es igual a la que entra al otro, por lo que el flujo neto es cero.
```
