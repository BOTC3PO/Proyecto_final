# Estructuras de Control en PSeInt: Profundizando en la Lógica

## Introducción

En PSeInt, las estructuras de control son el mecanismo fundamental que permite alterar el flujo secuencial predeterminado de un algoritmo. Mientras que en el nivel básico se trabaja con instrucciones lineales (una tras otra), el nivel intermedio exige el dominio de la toma de decisiones y la repetición condicional. Estas estructuras son esenciales para crear programas que reaccionen a datos variables, validen entradas o procesen grandes volúmenes de información sin escribir código redundante. Dominar `Si`, `Segun` y los bucles `Mientras`, `Para` y `Hasta` es lo que separa un diagrama de flujo estático de un algoritmo dinámico y útil.

## Explicación Central y Sintaxis

A diferencia de lenguajes de programación reales que dependen de llaves `{}` o indentación estricta, PSeInt utiliza palabras clave explícitas (`FinSi`, `FinMientras`, etc.) para delimitar los bloques. Esto reduce errores de sintaxis visuales, pero exige precisión lógica.

### 1. Condicionales Anidadas (`Si-Entonces`)
Para decisiones complejas, no se debe abusar de la estructura `Si-Entonces-SiNo` simple. Cuando hay múltiples caminos, se puede usar la forma `Si-Entonces-Sino` anidada o la estructura `Segun`.

```pseint
Si nota >= 90 Entonces
    Escribir "Sobresaliente"
SiNo
    Si nota >= 70 Entonces
        Escribir "Aprobado"
    SiNo
        Si nota >= 40 Entonces
            Escribir "Regular"
        SiNo
            Escribir "Reprobado"
        FinSi
    FinSi
FinSi
```

### 2. La estructura `Segun` (Switch)
Es ideal cuando se evalúa una misma variable contra valores constantes discretos. Es más legible que una cadena larga de `Si` y evita cálculos repetidos de la condición.

```pseint
Segun opcion Hacer
    1:
        Escribir "Opción Uno seleccionada"
    2:
        Escribir "Opción Dos seleccionada"
    De Otro Modo:
        Escribir "Opción inválida"
FinSegun
```
*Nota:* PSeInt permite omitir `De Otro Modo` si no se requiere manejo de errores, pero es buena práctica incluirlo para depuración.

### 3. Bucles con Contador (`Para`)
Se utiliza cuando sabemos de antemano cuántas veces se repetirá la acción. La variable de control es automática y no debe modificarse manualmente dentro del bucle.

```pseint
Para i <- 1 Hasta 10 Con Paso 2 Hacer
    Escribir "Número par (salteando impares): ", i
FinPara
```

### 4. Bucles con Condición (`Mientras` y `Hasta`)
*   **Mientras (Pre-condicional):** Verifica la condición *antes* de entrar. Si es falsa inicialmente, el bloque nunca se ejecuta.
*   **Hasta (Post-condicional):** Ejecuta el bloque al menos una vez y luego verifica. Útil para menús de usuario donde siempre se desea ver la opción al menos una vez.

## Errores Comunes de Quien Recién Aprende

1.  **Olvidar las palabras de cierre:** En PSeInt, no cerrar un `Si` con `FinSi` o un `Mientras` con `FinMientras` es un error fatal que detiene la compilación. A diferencia de otros lenguajes, la indentación no sustituye a las palabras clave.
2.  **Confusión en la inicialización del bucle `Para`:** Intentar modificar la variable de control (ej. `i <- i + 2` dentro del `Para`) es una mala práctica y puede causar comportamientos indefinidos o errores de lógica. La variable debe ser de solo lectura durante la iteración.
3.  **Bucles infinitos en `Mientras`:** Olvidar actualizar la variable que controla la condición dentro del cuerpo del bucle es el error más común. Si la condición nunca se vuelve falsa, el algoritmo no terminará.
4.  **Uso incorrecto de `Segun` con rangos:** `Segun` solo evalúa igualdad exacta. No se puede escribir `Segun nota Hacer 70-80: Escribir "Bien"`. Para rangos, se debe usar `Si`.

## Cuándo usarlo / Cuándo NO usarlo

*   **Usar `Para`** cuando el número de iteraciones es conocido y fijo (ej. leer un archivo de 100 líneas, sumar los primeros 10 números). Es más eficiente y claro.
*   **Usar `Mientras`** cuando la condición de salida depende de un dato externo o de un cálculo interno que no sabemos cuándo ocurrirá (ej. "mientras el usuario no presione salir", "mientras el saldo sea positivo").
*   **Evitar `Segun`** si las condiciones requieren comparaciones complejas (mayor que, menor que, entre rangos). En ese caso, `Si` es más apropiado.
*   **Evitar anidamiento excesivo:** Si tienes más de 3 niveles de `Si` anidados, considera refactorizar usando funciones o la estructura `Segun` para mejorar la legibilidad.

## Ejemplo Extendido: Validación de Entrada y Cálculo de Promedio

El siguiente caso muestra la integración de `Mientras` para validación (garantizar datos correctos) y `Para` para procesamiento (calcular promedio de un conjunto conocido).

```pseint
Algoritmo CalculoPromedioValidado
    Definir suma, i, nota Como Entero;
    suma <- 0;
    
    // Fase 1: Obtención de datos con validación (Mientras)
    Escribir "Ingrese la cantidad de notas (mínimo 1):";
    Leer cantidadNotas;
    
    Mientras cantidadNotas < 1 Hacer
        Escribir "Error: La cantidad debe ser al menos 1.";
        Leer cantidadNotas;
    FinMientras
    
    // Fase 2: Proceso iterativo (Para)
    Para i <- 1 Hasta cantidadNotas Hacer
        Escribir "Ingrese la nota número ", i;
        Leer nota;
        
        // Validación interna de cada nota
        Mientras nota < 0 o nota > 10 Hacer
            Escribir "Nota inválida. Debe estar entre 0 y 10.";
            Leer nota;
        FinMientras
        
        suma <- suma + nota;
    FinPara
    
    // Fase 3: Resultado
    promedio <- suma / cantidadNotas;
    Escribir "El promedio final es: ", promedio;
    
FinAlgoritmo
```

En este ejemplo, la robustez del algoritmo depende de la correcta combinación de estructuras: `Mientras` asegura que los datos sean válidos antes de procesarlos, y `Para` automatiza la repetición sin necesidad de escribir código duplicado para cada nota.