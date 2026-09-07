# Informatica — segmentacion (cuestionario, 23 preguntas VBLang)

> Tema: `informatica/segmentacion`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["definicion", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación divide la memoria de un programa en bloques de tamaño variable, a diferencia de la paginación, que usa bloques de tamaño fijo."

explicacion: |
  Verdadero. Esa es la diferencia clave: los segmentos corresponden a unidades lógicas del programa (código, datos, pila) y por eso varían de tamaño, mientras que las páginas son siempre del mismo tamaño fijo.
```

### 2 — pregunta 2

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["segmentos", "tipos"]

respuesta: falso
tipo: vf

enunciado: "Un programa en un sistema segmentado tiene un único segmento que contiene todo: código, datos y pila mezclados."

explicacion: |
  Falso. Se dividen en segmentos separados según su función lógica: segmento de código, segmento de datos, segmento de pila, entre otros, cada uno con sus propios permisos.
```

### 3 — pregunta 3

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["direccionamiento", "par"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema con segmentación, una dirección de memoria se expresa como un par (segmento, desplazamiento)."

explicacion: |
  Verdadero. El segmento identifica la unidad lógica y el desplazamiento indica la posición exacta dentro de ese segmento.
```

### 4 — pregunta 4

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["tabla", "segmentos"]

respuesta: "tabla de segmentos"
tipo: completar

enunciado: "El sistema operativo mantiene, por cada proceso, una ___ que registra dónde empieza cada segmento en memoria física y cuál es su tamaño."

explicacion: |
  La tabla de segmentos es el equivalente, para segmentación, de la tabla de páginas en paginación.
```

### 5 — pregunta 5

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["permisos", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "El segmento de código suele configurarse como de solo lectura y ejecución, mientras que el segmento de datos permite lectura y escritura pero no ejecución."

explicacion: |
  Verdadero. Asignar permisos distintos según el tipo de segmento es una ventaja de seguridad propia de la segmentación, que la paginación pura no ofrece de la misma manera.
```

### 6 — pregunta 6

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["mmu", "verificacion"]

respuesta: verdadero
tipo: vf

enunciado: "La MMU verifica que el desplazamiento solicitado no supere el tamaño del segmento correspondiente antes de permitir el acceso."

explicacion: |
  Verdadero. Si el desplazamiento excede el tamaño del segmento, se genera una violación de segmento — el conocido 'segmentation fault'.
```

### 7 — pregunta 7

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["segmentation_fault", "error"]

respuesta: "segmentation fault"
tipo: completar

enunciado: "Cuando un programa en C intenta escribir fuera de los límites de su segmento asignado, el sistema operativo termina el proceso con el error conocido como '___'."

explicacion: |
  Es uno de los errores más famosos para quienes programan en C/C++, y ocurre justamente por una violación de los límites de un segmento de memoria.
```

### 8 — pregunta 8

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["fragmentacion", "externa"]

respuesta: "externa"
tipo: completar

enunciado: "Como los segmentos son de tamaño variable, la memoria libre se va fragmentando en huecos de distinto tamaño — un problema conocido como fragmentación ___."

explicacion: |
  La fragmentación externa es la principal desventaja de la segmentación pura frente a la paginación.
```

### 9 — pregunta 9

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["paginacion", "ventaja"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación no sufre fragmentación externa porque todos sus bloques (páginas y marcos) tienen el mismo tamaño fijo."

explicacion: |
  Verdadero. Esa es justamente la ventaja de la paginación frente a la segmentación pura en cuanto al aprovechamiento de la memoria libre.
```

### 10 — pregunta 10

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "avanzado"
  tags: ["combinado", "moderno"]

respuesta: "segmentación paginada"
tipo: completar

enunciado: "El esquema que combina segmentación lógica (código/datos/pila con permisos) con paginación dentro de cada segmento se llama ___."

explicacion: |
  Es el esquema que efectivamente usa la mayoría del hardware x86 moderno: segmentación para la organización lógica y permisos, paginación para evitar la fragmentación externa.
```

### 11 — pregunta 11

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["pila", "crecimiento"]

respuesta: verdadero
tipo: vf

enunciado: "El segmento de pila (stack) crece de forma dinámica según las llamadas a función que estén activas en cada momento."

explicacion: |
  Verdadero. A diferencia del segmento de código (que no cambia de tamaño en tiempo de ejecución), la pila crece y se reduce constantemente con cada llamada y retorno de función.
```

### 12 — pregunta 12

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["logico", "fisico"]

respuesta: falso
tipo: vf

enunciado: "Un segmento representa siempre un bloque arbitrario de memoria, sin relación con la estructura lógica del programa."

explicacion: |
  Falso. Es exactamente lo contrario: cada segmento corresponde a una unidad lógica real del programa (código, datos, pila) — esa es la diferencia central frente a la paginación, que sí usa bloques arbitrarios de tamaño fijo.
```

### 13 — pregunta 13

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["deteccion", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación puede detectar un acceso indebido a memoria de una manera que la paginación pura no detecta tan naturalmente."

explicacion: |
  Verdadero. Como cada segmento 'sabe' su tamaño lógico real, un acceso que se pasa de ese límite se detecta como violación de segmento — la paginación, al tratar todo como bloques fijos sin significado, no tiene ese mismo tipo de chequeo lógico.
```

### 14 — pregunta 14

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["puntero", "causa"]

respuesta: verdadero
tipo: vf

enunciado: "Seguir un puntero nulo o mal inicializado es una causa común de segmentation fault."

explicacion: |
  Verdadero. Un puntero inválido suele apuntar fuera de los límites del segmento asignado al proceso, disparando la violación de segmento.
```

### 15 — pregunta 15

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["proteccion", "otros_procesos"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando ocurre una violación de segmento, el sistema operativo termina el proceso para evitar que dañe la memoria de otros procesos."

explicacion: |
  Verdadero. Este mecanismo hace que un programa mal escrito falle de forma controlada y visible, en vez de corromper silenciosamente datos de otras aplicaciones.
```

### 16 — pregunta 16

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["segmentos", "ejemplos"]

respuesta: "codigo"
tipo: completar

enunciado: "El segmento de ___ contiene las instrucciones ejecutables del programa y suele ser de solo lectura y ejecución."

explicacion: |
  Proteger el segmento de código contra escritura evita que un programa (accidental o maliciosamente) modifique sus propias instrucciones en tiempo de ejecución.
```

### 17 — pregunta 17

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["mmu", "componente"]

respuesta: "MMU"
tipo: completar

enunciado: "El componente de hardware que verifica los límites de cada segmento antes de permitir un acceso a memoria se llama ___ (Memory Management Unit)."

explicacion: |
  La MMU es el mismo componente de hardware involucrado tanto en segmentación como en paginación — traduce direcciones lógicas a físicas y aplica los controles de acceso.
```

### 18 — pregunta 18

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["fragmentacion", "interna"]

respuesta: falso
tipo: vf

enunciado: "La segmentación pura sufre principalmente de fragmentación interna, igual que la paginación."

explicacion: |
  Falso. La segmentación sufre principalmente fragmentación EXTERNA (huecos de tamaño variable entre segmentos). La fragmentación interna (espacio desperdiciado dentro de un bloque de tamaño fijo) es más propia de la paginación.
```

### 19 — pregunta 19

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["reconstruccion", "logico"]

respuesta: falso
tipo: vf

enunciado: "La segmentación en sistemas operativos tiene como objetivo dividir archivos para enviarlos por una red."

explicacion: |
  Falso — eso seria segmentación/fragmentación de paquetes de red (un concepto de redes, distinto). La segmentación de memoria organiza cómo se divide y protege la memoria de UN programa dentro de la computadora, no cómo viajan los datos por una red.
```

### 20 — pregunta 20

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["x86", "hardware"]

respuesta: verdadero
tipo: vf

enunciado: "La mayoría del hardware x86 moderno usa un esquema de segmentación paginada, no segmentación pura."

explicacion: |
  Verdadero. Combina lo mejor de ambos mundos: organización lógica con permisos (segmentación) y aprovechamiento eficiente de la memoria física sin fragmentación externa (paginación).
```

### 21 — pregunta 21

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["datos", "segmento"]

respuesta: "datos"
tipo: completar

enunciado: "Las variables globales y estáticas de un programa se almacenan típicamente en el segmento de ___."

explicacion: |
  El segmento de datos guarda las variables globales/estáticas, separado del segmento de código y del de pila (que guarda variables locales y direcciones de retorno).
```

### 22 — pregunta 22

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "avanzado"
  tags: ["comparacion", "tamaño"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de los marcos de página, que siempre tienen el mismo tamaño, los segmentos pueden tener tamaños distintos entre sí."

explicacion: |
  Verdadero. Ese es el rasgo definitorio de la segmentación: cada segmento tiene el tamaño que necesita su unidad lógica correspondiente (el código puede ser grande, la pila puede ser chica al inicio, etc.).
```

### 23 — pregunta 23

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["utilidad", "programador"]

respuesta: verdadero
tipo: vf

enunciado: "Entender la segmentación ayuda a comprender por qué ocurren errores como el segmentation fault al programar en lenguajes de bajo nivel como C."

explicacion: |
  Verdadero. Conocer cómo se organiza y protege la memoria por segmentos explica directamente por qué ciertos errores de programación (punteros inválidos, desbordes de array) terminan en ese tipo de falla."
```
