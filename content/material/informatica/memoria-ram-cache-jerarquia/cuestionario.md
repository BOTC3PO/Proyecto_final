# Informatica — Memoria ram cache jerarquia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — La jerarquía de memoria

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["arquitectura", "memoria"]

tipo: mc
opciones_explicitas: ["Mayor velocidad, menor capacidad", "Menor velocidad, mayor capacidad", "Igual velocidad, mayor costo", "Mayor velocidad, mayor costo"]

enunciado: "En una jerarquía de memoria típica, a medida que nos movemos desde la CPU hacia el almacenamiento secundario (disco), la memoria se vuelve..."

respuesta: "Menor velocidad, mayor capacidad"

explicacion: |
  La jerarquía busca equilibrar costo y rendimiento. Los niveles superiores (Caché) son muy rápidos pero caros y pequeños; los niveles inferiores (Disco) son lentos pero económicos y masivos.
```

### 2 — Memoria volátil

```
metadata:
  materia: "informatica"
  tema: "ram_caracteristicas"
  nivel: "basico"
  tags: ["ram", "volatilidad"]

tipo: vf

enunciado: "La memoria RAM es considerada una memoria volátil porque pierde su contenido al interrumpirse el suministro eléctrico."

respuesta: verdadero

explicacion: |
  La RAM es volátil por definición. Si no hay energía, los datos almacenados en sus capacitores se pierden.
```

### 3 — El rol de la memoria caché

```
metadata:
  materia: "informatica"
  tema: "cache_funcionamiento"
  nivel: "intermedio"
  tags: ["cache", "latencia"]

tipo: completar
respuestas_validas:
  - "L1"
  - "L2"
  - "L3"

enunciado: "En una arquitectura con múltiples niveles de caché, la caché que se encuentra físicamente más cerca del núcleo del procesador es la caché ___."

pasos:
  - "Identificar la posición de la caché en la jerarquía respecto al procesador."
  - "Determinar cuál tiene la menor latencia de acceso."

respuesta: "L1"

explicacion: |
  La caché L1 (Level 1) es la más rápida y cercana al núcleo, seguida de la L2 y finalmente la L3.
```

### 4 — Orden de la jerarquía

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Registros", "Caché", "Memoria RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad de acceso (del más rápido al más lento):"

respuesta_orden: ["Registros", "Caché", "Memoria RAM", "Disco Duro"]

explicacion: |
  Los registros están dentro de la CPU y son instantáneos. La caché es la siguiente, luego la RAM (memoria principal) y finalmente el almacenamiento masivo (disco).
```

### 5 — El concepto de Localidad

```
metadata:
  materia: "informatica"
  tema: "cache_principio_localidad"
  nivel: "avanzado"
  tags: ["localidad", "cache"]

tipo: mc
opciones_explicitas: ["Localidad Espacial", "Localidad Temporal", "Localidad de Datos", "Localidad de Instrucciones"]

enunciado: "Cuando un sistema carga un bloque de memoria porque se ha accedido a una dirección específica, asumiendo que las direcciones contiguas serán accedidas pronto, está aprovechando la ___."

respuesta: "Localidad Espacial"

explicacion: |
  La localidad espacial se refiere al uso de datos cercanos en direcciones de memoria. La localidad temporal se refiere al reuso de un mismo dato en un corto periodo de tiempo.
```

### 6 — Jerarquía de memoria y velocidad

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["hardware", "memoria", "cache"]

enunciado: "En una jerarquía de memoria típica, si comparamos la memoria caché L1 con la memoria RAM, la caché L1 es más ___ que la RAM, pero tiene una capacidad menor."

opciones_explicitas: ["rápida", "lenta", "pequeña", "grande"]

respuesta: "rápida"

tipo: mc

explicacion: |
  La jerarquía de memoria busca equilibrar costo, capacidad y velocidad. La caché (L1, L2, L3) es mucho más rápida que la RAM porque está más cerca del procesador y usa tecnología más costosa, lo que obliga a que su capacidad sea mucho menor.
```

### 7 — El concepto de Localidad

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["cache", "localidad", "performance"]

enunciado: "Un procesador accede a una lista de elementos en orden consecutivo (0, 1, 2, 3...). Este tipo de comportamiento favorece la eficiencia de la caché debido a la localidad de referencia, la cual es de tipo ___."

opciones_explicitas: ["espacial", "temporal", "aleatoria"]

respuesta: "espacial"

tipo: mc

explicacion: |
  La localidad espacial ocurre cuando se accede a una posición de memoria y se accede rápidamente a posiciones cercanas. Esto permite que la caché cargue bloques enteros (cache lines) prediciendo que los datos contiguos serán necesarios pronto.
```

### 8 — El proceso de búsqueda (Hit vs Miss)

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["cache", "hit", "miss"]

enunciado: "El procesador solicita el dato en la dirección 0x4F. La unidad de control busca en la caché L1 y el dato no se encuentra allí. A este evento se le denomina ___ y el sistema deberá buscar el dato en la siguiente capa de la jerarquía."

respuestas_validas:
  - "miss"

respuesta: "miss"

tipo: completar

explicacion: |
  Un 'Cache Miss' ocurre cuando el dato requerido no está en la caché, obligando al sistema a buscar en un nivel más lento (como la RAM), lo que aumenta la latencia de la operación.
```

### 9 — Orden de la jerarquía de memoria

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["jerarquia", "orden"]

opciones_explicitas: ["Registros", "Caché L1", "Memoria RAM", "Disco Rígido"]

respuesta_orden: ["Registros", "Caché L1", "Memoria RAM", "Disco Rígido"]

tipo: ordenar

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad (del más rápido al más lento):"

explicacion: |
  La jerarquía se organiza por velocidad: los Registros son parte del CPU y son instantáneos; la Caché es muy rápida; la RAM es el almacenamiento principal de trabajo; y el Disco Rígido (almacenamiento masivo) es el más lento de la cadena.
```

### 10 — Verdad o Falso: Costo y Capacidad

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["costo", "capacidad"]

enunciado: "La memoria RAM tiene un costo por gigabyte significativamente mayor que un disco duro (HDD/SSD)."

respuesta: verdadero

tipo: vf
explicacion: |
  Es verdadero. Debido a que la RAM utiliza tecnología semiconductoras mucho más rápida y compleja para mantener los datos, su costo por unidad de capacidad es mucho más elevado que el de los medios de almacenamiento masivo.
```

### 11 — Jerarquía y Costo

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["memoria", "costo", "velocidad"]

enunciado: "En una arquitectura de memoria jerárquica, si comparamos la memoria caché, la memoria RAM y el disco duro, ¿cuál de ellas tiene el mayor costo por byte?"

opciones_explicitas: ["Disco duro", "Memoria RAM", "Memoria caché"]
respuesta: "Memoria caché"
tipo: mc

explicacion: |
  La jerarquía de memoria busca un equilibrio entre costo y rendimiento. Las memorias más rápidas (como la caché) utilizan tecnología más cara (SRAM) y tienen menos capacidad, mientras que las más lentas (como el disco duro) son mucho más económicas por cada GB almacenado.
```

### 12 — El mito de la velocidad de la RAM

```
metadata:
  materia: "informatica"
  tema: "memoria_ram"
  nivel: "intermedio"
  tags: ["latencia", "velocidad", "confucion"]

enunciado: "Un error común es pensar que tener más capacidad de RAM (ej. 64GB vs 16GB) aumenta automáticamente la velocidad de procesamiento de una tarea que ya cabe en 16GB. ¿Es esto verdadero o falso?"

respuesta: falso
tipo: vf
explicacion: |
  La capacidad de la RAM determina cuánta información puede estar disponible para la CPU. Si el software ya cabe en la memoria disponible, aumentar la capacidad no acelera la ejecución; lo que acelera la ejecución es la velocidad de acceso (frecuencia) y la latencia, no el tamaño total.
```

### 13 — El rol de la Caché

```
metadata:
  materia: "informatica"
  tema: "cache_procesador"
  nivel: "intermedio"
  tags: ["cache", "cpu", "acceso"]

variables:
  datos: [["L1", "muy rápida"], ["L2", "rápida"], ["L3", "moderada"]]
  idx: uno_de([0,1,2])

enunciado: "Considerando la jerarquía de la caché del procesador, la caché de nivel {datos[idx][0]} tiene una latencia de acceso descrita como {datos[idx][1]}."

respuesta: datos[idx][0]
tipo: completar
respuestas_validas:
  - "L1"
  - "L2"
  - "L3"

explicacion: |
  La caché L1 es la más cercana al núcleo del procesador, integrada directamente en él, lo que la hace extremadamente rápida pero de muy pequeña capacidad.
```

### 14 — El concepto de Localidad

```
metadata:
  materia: "informatica"
  tema: "principio_localidad"
  nivel: "avanzado"
  tags: ["localidad_temporal", "localidad_espacial"]

enunciado: "La eficiencia de la memoria caché se basa en dos principios: la localidad temporal (reutilizar datos usados recientemente) y la localidad ___ (usar datos que están en direcciones de memoria cercanas)."

pasos:
  - "Identificar el tipo de localidad que complementa a la temporal."

respuesta: "espacial"
tipo: completar
respuestas_validas:
  - "espacial"
  - "secuencial"
  - "distante"

explicacion: |
  La localidad espacial implica que si se accede a una posición de memoria, es muy probable que pronto se acceda a las posiciones adyacentes. La caché aprovecha esto cargando bloques enteros (cache lines) en lugar de bytes individuales.
```

### 15 — Orden de velocidad

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["orden", "velocidad", "jerarquia"]

enunciado: "Ordena los siguientes componentes de memoria de mayor a menor velocidad de acceso (el más rápido primero):"

opciones_explicitas: ["Caché L1", "Memoria RAM", "Disco SSD", "Disco HDD"]
respuesta_orden: ["Caché L1", "Memoria RAM", "Disco SSD", "Disco HDD"]
tipo: ordenar

explicacion: |
  La jerarquía sigue un orden lógico: a medida que nos alejamos del núcleo de la CPU, la velocidad de acceso disminuye drásticamente, pero la capacidad y la economía mejoran.
```

### 16 — Jerarquía de memoria y velocidad

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["memoria", "ram", "cache"]

respuesta: "cache"
tipo: completar
respuestas_validas:
  - "cache"
  - "caché"

enunciado: "En la jerarquía de memoria, la ___ es un tipo de memoria de acceso muy rápido situada entre el procesador y la memoria RAM para reducir el tiempo de espera."

explicacion: |
  La memoria caché es mucho más rápida que la RAM pero tiene mucha menos capacidad. Su función es almacenar copias de los datos que el procesador utiliza con más frecuencia para evitar tener que ir a la RAM (que es más lenta).
```

### 17 — Relación Costo vs. Capacidad

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "intermedio"
  tags: ["costo", "capacidad", "jerarquia"]

respuesta: "Mayor capacidad y menor costo por bit"
tipo: mc
opciones_explicitas: ["Mayor capacidad y menor costo por bit", "Menor capacidad y mayor costo por bit"]

enunciado: "Si comparamos la memoria RAM con la memoria Caché, la RAM se caracteriza por tener una ___."

explicacion: |
  En la jerarquía de memoria, cuanto más cerca está la memoria del núcleo del procesador (como la caché L1), más cara es y menos capacidad tiene. La RAM es más barata y permite almacenar mucha más información, pero es más lenta.
```

### 18 — Verdad o Falso: Volatilidad

```
metadata:
  materia: "informatica"
  tema: "propiedades_memoria"
  nivel: "basico"
  tags: ["volatilidad", "ram", "almacenamiento"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria RAM es una memoria volátil, lo que significa que pierde toda la información almacenada cuando se corta el suministro eléctrico."

explicacion: |
  Correcto. A diferencia del disco duro (almacenamiento secundario), la RAM necesita energía para mantener los datos. Si apagas la computadora, los datos en la RAM se borran.
```

### 19 — Orden de la jerarquía de velocidad

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "intermedio"
  tags: ["orden", "velocidad", "jerarquia"]

respuesta_orden: ["Registros", "Caché L1", "RAM", "Disco Duro"]
tipo: ordenar
opciones_explicitas: ["Registros", "Caché L1", "RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de mayor a menor velocidad de acceso (del más rápido al más lento):"

explicacion: |
  La jerarquía se organiza por velocidad: los Registros están dentro de la CPU (ultra rápidos), seguidos por la Caché (L1, L2, L3), luego la RAM y finalmente el almacenamiento masivo como el Disco Duro (HDD/SSD), que es mucho más lento pero permite guardar datos permanentemente.
```

### 20 — El propósito de la jerarquía

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "avanzado"
  tags: ["eficiencia", "costo", "arquitectura"]

respuesta: "Maximizar la velocidad de acceso a los datos con un costo equilibrado"
tipo: mc
opciones_explicitas: ["Maximizar la velocidad de acceso a los datos con un costo equilibrado", "Aumentar la capacidad total de almacenamiento del sistema"]

enunciado: "El objetivo principal de implementar una jerarquía de memoria con distintos niveles es ___."

explicacion: |
  No es posible tener toda la memoria del sistema a la velocidad de la CPU porque sería extremadamente cara. La jerarquía permite que el sistema se comporte como si tuviera una memoria muy grande y muy rápida, equilibrando rendimiento y costo.
```

### 21 — Jerarquía de velocidad y costo

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["arquitectura", "hardware"]

variables:
  escenario_idx: uno_de([0,1,2])
  datos: [["La memoria con mayor velocidad pero menor capacidad es la ___.", "Caché"], ["La memoria que es más lenta que la caché pero más rápida que el disco es la ___.", "RAM"], ["La memoria de mayor capacidad y menor costo por bit es el ___.", "Disco"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "Caché"
  - "RAM"
  - "Disco"

enunciado: "Analizando la jerarquía de memoria, se observa que: {datos[escenario_idx][0]}"

explicacion: |
  En una jerarquía de memoria, cuanto más cerca está del procesador, más rápida y cara es (Caché), y cuanto más lejos, más lenta y económica es (Disco).
```

### 22 — Propiedades de la memoria RAM

```
metadata:
  materia: "informatica"
  tema: "memoria_ram"
  nivel: "basico"
  tags: ["volatilidad", "hardware"]

respuesta: falso
tipo: vf

enunciado: "La memoria RAM es una memoria de tipo no volátil, lo que significa que la información se mantiene grabada incluso si se apaga el ordenador."

explicacion: |
  Falso. La RAM es memoria volátil; requiere energía para mantener los datos almacenados. Al apagar el equipo, los datos se pierden.
```

### 23 — Comparativa de latencia

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["latencia", "rendimiento"]

variables:
  opcion_idx: uno_de([0,1])
  comparativa: [["La caché L1 tiene una latencia ___ que la memoria RAM.", "menor"], ["La memoria RAM tiene una latencia ___ que la memoria caché L1.", "mayor"]]

respuesta: comparativa[opcion_idx][1]
tipo: mc
opciones_explicitas: ["menor", "mayor"]

enunciado: "Considerando el acceso a datos en un sistema computacional: {comparativa[opcion_idx][0]}"

explicacion: |
  La latencia es el tiempo de espera. La caché, al estar integrada en el procesador, responde mucho más rápido (menor latencia) que la RAM.
```

### 24 — Orden de la jerarquía de memoria

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["orden", "arquitectura"]

respuesta_orden: ["Registros", "Caché L1", "Memoria RAM", "Disco Duro"]
tipo: ordenar
opciones_explicitas: ["Registros", "Caché L1", "Memoria RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad (del más rápido al más lento):"

explicacion: |
  La jerarquía correcta de velocidad es: Registros del CPU > Caché (L1, L2, L3) > Memoria RAM > Almacenamiento secundario (Disco).
```

### 25 — Relación Capacidad vs Costo

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "avanzado"
  tags: ["costo", "capacidad"]

variables:
  item_idx: uno_de([0,1])
  comparacion: [["Si comparamos la Caché con la RAM, la caché tiene un costo por GB ___ que la RAM.", "mayor"], ["Si comparamos la RAM con el Disco Duro, la RAM tiene un costo por GB ___ que el disco.", "mayor"]]

respuesta: comparacion[item_idx][1]
tipo: mc
opciones_explicitas: ["mayor", "menor"]

enunciado: "En términos de arquitectura de computadores: {comparacion[item_idx][0]}"

explicacion: |
  Existe una relación inversa: a mayor velocidad de acceso, mayor es el costo por unidad de capacidad (GB/TB). Por eso las memorias rápidas son pequeñas y las lentas son masivas.
```
