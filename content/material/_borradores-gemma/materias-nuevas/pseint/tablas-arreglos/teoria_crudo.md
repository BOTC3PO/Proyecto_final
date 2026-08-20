# Tablas y Arreglos en PSeInt: Gestión de Datos Estructurados

## Introducción

En la programación, los **arreglos** (también llamados tablas, vectores o arrays) son estructuras de datos que permiten almacenar múltiples valores del mismo tipo bajo un mismo nombre. En lugar de declarar variables individuales como `nota1`, `nota2`, `nota3`, utilizamos una sola variable `notas` que contiene un conjunto de elementos accesibles mediante un índice.

En **PSeInt**, esta estructura es fundamental para procesar listas de datos, como calificaciones de alumnos, registros de ventas o coordenadas en un grafo. El uso de arreglos simplifica el código al permitir iteraciones mediante ciclos `Para` o `Mientras`, evitando la repetición innecesaria de instrucciones.

## Explicación Central

En PSeInt, los arreglos se definen declarando el tamaño máximo de la estructura al momento de su declaración. Es crucial recordar que, por defecto, los índices comienzan en **1** (a menos que se especifique lo contrario con la directiva `#1` o se configure el entorno, pero la convención pedagógica estándar asume base 1).

### Sintaxis de Declaración
```pseudocode
Definir notas Como Entero;
Dimension notas[10];
```
Aquí creamos un arreglo de 10 posiciones enteras, accesibles desde `notas[1]` hasta `notas[10]`.

### Inicialización y Acceso
Para trabajar con ellos, generalmente se utiliza un ciclo `Para` que recorre los índices válidos.

```pseudocode
Definir i Como Entero;
Definir notas Como Entero;
Dimension notas[5];

// Llenar el arreglo con datos ingresados por el usuario
Para i <- 1 Hasta 5 Con Paso 1 Hacer
    Escribir "Ingrese la nota del alumno ", i;
    Leer notas[i];
FinPara

// Calcular el promedio
suma <- 0;
Para i <- 1 Hasta 5 Con Paso 1 Hacer
    suma <- suma + notas[i];
FinPara
promedio <- suma / 5;
Escribir "El promedio es: ", promedio;
```

### Ejemplo Real de Búsqueda
Un caso común es buscar si un valor existe dentro del arreglo:

```pseudocode
Definir buscar Como Entero;
Definir encontrado Como Logico;
Definir i Como Entero;
Definir lista Como Entero;

Dimension lista[3];
lista[1] <- 10;
lista[2] <- 25;
lista[3] <- 8;

escribir "Ingrese el número a buscar:";
leer buscar;
encontrado <- Falso;

Para i <- 1 Hasta 3 Con Paso 1 Hacer
    Si lista[i] == buscar Entonces
        encontrado <- Verdadero;
        // Opcional: romper el ciclo si solo interesa saber si existe
        i <- 3; // Forzamos el fin del ciclo ya que el índice máximo es 3
    FinSi
FinPara

Si encontrado Entonces
    escribir "El número sí existe en la lista.";
SiNo
    escribir "El número no fue encontrado.";
FinSi
```

## Errores Comunes

1.  **Desbordamiento de índice (Off-by-one):** Acceder a `notas[11]` cuando el arreglo fue dimensionado como `Dimension notas[10]`. Esto genera un error de tiempo de ejecución en muchos entornos o resultados impredecibles en simulaciones.
2.  **Confusión con la base de los índices:** Asumir que el primer elemento está en `notas[0]`. En PSeInt estándar, el primer elemento es `notas[1]`.
3.  **No inicializar el acumulador:** Al sumar elementos, olvidar poner `suma <- 0` antes del ciclo `Para`, lo que provoca que el resultado sea incorrecto si la variable tenía un valor residual de ejecuciones anteriores.
4.  **Dimensionar dinámicamente sin soporte:** Intentar cambiar el tamaño de un arreglo una vez declarado. En PSeInt, el tamaño es fijo al momento de la declaración.

## Cuándo usarlo / Cuándo NO usarlo

### Usa Arreglos Cuando:
*   Sabes de antemano el **máximo** de elementos que necesitarás procesar (ej. 30 alumnos en una clase).
*   Necesitas acceder a elementos específicos por su posición (ej. obtener la calificación del alumno en la posición 5).
*   Debes realizar operaciones globales sobre el conjunto (promedios, ordenamientos, búsquedas).

### Evítalos (o ten cuidado) Cuando:
*   La cantidad de datos es **ilimitada** o muy grande y variable: considera usar archivos o listas enlazadas (si la herramienta lo permite) para no desperdiciar memoria.
*   Necesitas insertar o eliminar elementos en posiciones intermedias frecuentemente: los arreglos estáticos son rígidos; mover elementos requiere desplazar todo el resto, lo cual es ineficiente.
*   Los elementos son de **tipos diferentes**: un arreglo en PSeInt debe ser homogéneo (todos enteros, todos reales, todos cadenas). Para datos heterogéneos, se requieren estructuras de registros (structs) o tablas de hash (dependiendo de la versión y extensión).

## Ejemplo Extendido: Sistema de Notas con Filtro

Supongamos que un docente necesita cargar las notas de 5 alumnos y luego mostrar únicamente aquellas que son aprobatorias (>= 6).

```pseudocode
Algoritmo SistemaDeNotas
    Definir i Como Entero;
    Definir notas Como Entero;
    Dimension notas[5];
    
    // 1. Entrada de datos
    Para i <- 1 Hasta 5 Con Paso 1 Hacer
        Escribir "Ingrese la nota del alumno ", i, " (0-10):";
        Leer notas[i];
        
        // Validación básica
        Mientras notas[i] < 0 O notas[i] > 10 Hacer
            Escribir "Error: Nota inválida. Ingrese un valor entre 0 y 10.";
            Leer notas[i];
        FinMientras
    FinPara
    
    // 2. Procesamiento y Salida
    Escribir "";
    Escribir "--- Lista de Aprobados ---";
    
    Para i <- 1 Hasta 5 Con Paso 1 Hacer
        Si notas[i] >= 6 Entonces
            Escribir "Alumno ", i, ": ", notas[i];
        FinSi
    FinPara
    
    // Contar cuántos aprobados hubo
    contador <- 0;
    Para i <- 1 Hasta 5 Con Paso 1 Hacer
        Si notas[i] >= 6 Entonces
            contador <- contador + 1;
        FinSi
    FinPara
    
    Escribir "Total de aprobados: ", contador;
    
FinAlgoritmo
```

Este ejemplo ilustra la potencia de los arreglos: permitieron almacenar datos temporalmente, validarlos individualmente y luego procesarlos en masa sin necesidad de crear 5 variables distintas (`nota1`, `nota2`, etc.), haciendo el código escalable y mantenible.