# Informatica — paginacion (cuestionario, 21 preguntas VBLang)

> Tema: `informatica/paginacion`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["conceptos", "memoria-virtual"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación es un mecanismo que permite a un programa utilizar más espacio de memoria del que físicamente está disponible en la RAM."

explicacion: |
  Correcto. La paginación gestiona la memoria virtual, dividiendo la memoria lógica en páginas y la física en marcos, permitiendo usar el disco duro como extensión de la RAM.
```

### 2 — pregunta 2

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["fallos", "procesos"]

respuesta: verdadero
tipo: vf

enunciado: "Un 'fallo de página' ocurre cuando un programa intenta acceder a una página que no se encuentra actualmente en la RAM."

explicacion: |
  Verdadero. El sistema operativo debe entonces detener el proceso, buscar un marco libre (o liberar uno), cargar la página desde el disco y actualizar la tabla de páginas.
```

### 3 — pregunta 3

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["estructura", "traduccion"]

respuesta: verdadero
tipo: vf

enunciado: "La tabla de páginas es una estructura de datos utilizada por el sistema operativo para mapear las páginas virtuales a los marcos de página físicos."

explicacion: |
  Verdadero. Esta tabla es esencial para que la MMU sepa dónde está cada página en la memoria física.
```

### 4 — pregunta 4

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["rendimiento", "discos"]

respuesta: verdadero
tipo: vf

enunciado: "El intercambio constante de datos entre la RAM y el disco duro debido a fallos de página puede degradar significativamente el rendimiento del sistema."

explicacion: |
  Verdadero. El disco duro es mucho más lento que la RAM. Si hay muchos fallos de página (thrashing), el sistema pasa más tiempo moviendo datos que ejecutando instrucciones.
```

### 5 — pregunta 5

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["conceptos", "ilusion"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación crea la ilusión de tener una memoria infinita, aunque la RAM física sea limitada."

explicacion: |
  Correcto. Esta ilusión se llama memoria virtual y permite ejecutar programas que son más grandes que la memoria física disponible.
```

### 6 — pregunta 6

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["eficiencia", "tipos"]

respuesta: falso
tipo: vf

enunciado: "La paginación introduce fragmentación externa porque los bloques de memoria asignados pueden ser de tamaños variables."

explicacion: |
  Falso. La paginación elimina la fragmentación externa porque las páginas y marcos tienen tamaños fijos. Sin embargo, puede haber fragmentación interna (espacio desperdiciado dentro de un marco).
```

### 7 — pregunta 7

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["problemas", "rendimiento"]

respuesta: verdadero
tipo: vf

enunciado: "El 'thrashing' o agotamiento de memoria ocurre cuando el sistema pasa más tiempo gestionando fallos de página que ejecutando procesos útiles."

explicacion: |
  Verdadero. Es una condición crítica donde la actividad de paginación impide el progreso real de los programas.
```

### 8 — pregunta 8

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["procesos", "mmu"]

respuesta: verdadero
tipo: vf

enunciado: "La traducción de direcciones virtuales a físicas se realiza completamente por software, sin intervención del hardware."

explicacion: |
  Falso. La MMU (hardware) realiza la traducción en tiempo real. El sistema operativo (software) gestiona las tablas, pero la traducción es hardware.
```

### 9 — pregunta 9

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["eficiencia", "desperdicio"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación puede causar fragmentación interna, que es el espacio desperdiciado dentro del último marco de página de un proceso si este no llena el marco completamente."

explicacion: |
  Verdadero. Como el tamaño de la última página lógica puede ser menor que el tamaño del marco físico, el espacio restante en ese marco se pierde.
```

### 10 — pregunta 10

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["comparacion", "segmentacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una ventaja clave de la paginación sobre la segmentación es que no requiere que el espacio de direcciones del programa sea contiguo en la memoria física."

explicacion: |
  Correcto. Las páginas pueden estar dispersas en la RAM, mientras que los segmentos suelen requerir bloques contiguos.
```

### 11 — pregunta 11

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["optimizacion", "estructuras"]

respuesta: verdadero
tipo: vf

enunciado: "Una tabla de páginas invertida indexa por marcos de página físicos en lugar de por direcciones virtuales, lo que puede ahorrar memoria en sistemas con mucho espacio de direcciones."

explicacion: |
  Verdadero. En lugar de una entrada por página virtual, hay una entrada por marco físico, reduciendo el tamaño de la tabla en sistemas con grandes espacios virtuales.
```

### 12 — pregunta 12

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["algoritmos", "reemplazo"]

respuesta: verdadero
tipo: vf

enunciado: "El algoritmo LRU (Least Recently Used) selecciona para reemplazo la página que no se ha utilizado durante el periodo de tiempo más largo."

explicacion: |
  Verdadero. Se basa en la premisa de que las páginas usadas recientemente probablemente se usarán de nuevo pronto, y las no usadas en mucho tiempo, menos.
```

### 13 — pregunta 13

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["hardware", "caché"]

respuesta: verdadero
tipo: vf

enunciado: "La TLB es una caché de hardware que almacena las traducciones más recientes de direcciones virtuales a físicas para acelerar el acceso."

explicacion: |
  Verdadero. Sin la TLB, cada acceso a memoria requeriría dos accesos a la RAM (uno para la tabla de páginas y otro para el dato), lo cual es muy lento.
```

### 14 — pregunta 14

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["procesos", "io"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando ocurre un fallo de página, el sistema operativo debe realizar una operación de entrada/salida (I/O) desde el disco para cargar la página."

explicacion: |
  Verdadero. La página debe ser leída desde el archivo de paginación o swap en el disco hasta un marco libre en la RAM.
```

### 15 — pregunta 15

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["conceptos", "disco"]

respuesta: verdadero
tipo: vf

enunciado: "El área del disco duro utilizada para guardar páginas que no están en la RAM se denomina comúnmente 'swap' o archivo de paginación."

explicacion: |
  Verdadero. Es el espacio de memoria virtual en el disco que actúa como extensión de la RAM.
```

### 16 — pregunta 16

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["algoritmos", "reemplazo"]

respuesta: verdadero
tipo: vf

enunciado: "El algoritmo FIFO (First-In, First-Out) reemplaza la página que ha estado en la memoria física por el mayor tiempo, independientemente de su frecuencia de uso."

explicacion: |
  Verdadero. Es simple pero puede tener un comportamiento subóptimo comparado con LRU, ya que no considera el patrón de acceso.
```

### 17 — pregunta 17

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["eficiencia", "recursos"]

respuesta: verdadero
tipo: vf

enunciado: "Un inconveniente de la paginación es el consumo de memoria RAM para almacenar las tablas de páginas de cada proceso."

explicacion: |
  Verdadero. Cada proceso necesita su propia tabla de páginas, lo que consume memoria física, especialmente si el espacio de direcciones es muy grande.
```

### 18 — pregunta 18

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["estructuras", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación directa usa tablas indexadas por dirección virtual, mientras que la paginación inversa usa tablas indexadas por dirección física."

explicacion: |
  Verdadero. Esto cambia la forma en que se busca la traducción y el tamaño de la estructura de datos.
```

### 19 — pregunta 19

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["seguridad", "aislamiento"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación ayuda al aislamiento de procesos porque cada proceso tiene su propio espacio de direcciones virtuales."

explicacion: |
  Verdadero. Un proceso no puede acceder directamente a la memoria de otro, ya que sus direcciones virtuales se traducen a marcos físicos diferentes o no mapeados.
```

### 20 — pregunta 20

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["algoritmos", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "El algoritmo de reemplazo óptimo (OPT) reemplaza la página que no se usará durante el periodo de tiempo más largo en el futuro. Es ideal pero no implementable en la práctica."

explicacion: |
  Verdadero. OPT requiere conocer la secuencia futura de accesos a memoria, lo cual es imposible de predecir con certeza en un sistema en ejecución.
```

### 21 — pregunta 21

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["consistencia", "hardware"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando el sistema operativo modifica la tabla de páginas, puede ser necesario invalidar las entradas correspondientes en la TLB para evitar que se usen direcciones obsoletas."

explicacion: |
  Verdadero. La TLB puede tener caché de traducciones antiguas. Si la tabla de páginas cambia, esas entradas en la TLB deben ser descartadas o actualizadas.
```
