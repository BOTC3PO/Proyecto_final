# Variables y Tipos de Datos en PSeInt

## Introducción

En la programación, una **variable** es un espacio en la memoria del computador destinado a almacenar información. Imaginá una variable como una caja con una etiqueta (el nombre) donde guardás un valor que puede cambiar durante la ejecución del algoritmo.

En **PSeInt**, aunque el lenguaje permite cierta flexibilidad, es fundamental comprender los **tipos de datos** para evitar errores lógicos. PSeInt es un entorno educativo que simula la lógica de programación estructurada, por lo que entender cómo se declaran y usan las variables es el primer paso para escribir algoritmos correctos.

## Explicación Central: Declaración y Tipos

En PSeInt, las variables se deben **declarar** antes de ser usadas. Esto significa que debés informar al algoritmo qué nombre tendrá la variable y qué tipo de dato contendrá. A diferencia de lenguajes como Python, en PSeInt (y en la mayoría de lenguajes estructurados como C o Pascal) el tipo es explícito.

### Tipos de datos básicos en PSeInt

1.  **Numérico**: Para valores enteros (sin decimales) o reales (con decimales).
    *   Sintaxis: `Definir variable Como Entero` o `Definir variable Como Real`.
    *   *Nota*: PSeInt a menudo infiere el tipo si asignas un valor directamente, pero es buena práctica declararlo.
2.  **Cadena (String)**: Para texto.
    *   Sintaxis: `Definir variable Como Cadena`.
    *   Los textos deben ir siempre entre comillas dobles `"Hola"` o simples `'Hola'`.
3.  **Booleano (Lógico)**: Para valores de verdad (`Verdadero` o `Falso`).
    *   Sintaxis: `Definir variable Como Logico`.

### Ejemplos de sintaxis correcta

```pseint
Algoritmo VariablesTipos
    Definir a Como Entero;
    Definir b Como Real;
    Definir nombre Como Cadena;
    Definir esEstudiante Como Logico;

    // Asignación de valores
    a <- 10;
    b <- 3.14;
    nombre <- "Juan";
    esEstudiante <- Verdadero;

    Escribir "El nombre es: ", nombre;
    Escribir "El doble de a es: ", a*2;
FinAlgoritmo
```

**Puntos clave:**
*   El operador de asignación en PSeInt es `<-`.
*   El nombre de la variable no puede comenzar con números ni contener espacios.
*   PSeInt es sensible a mayúsculas y minúsculas en los nombres de variables (aunque la sintaxis del lenguaje es insensible).

## Errores Comunes

1.  **Usar variables sin declararlas**: Intentar usar `x <- 5` sin haber escrito `Definir x Como...` generará un error de compilación o advertencia en PSeInt.
2.  **Confundir asignación con igualdad**: En matemáticas, `a = b` significa que son iguales. En programación, `a <- b` significa "guarda el valor de b en a". No intentes hacer `a <- b <- 5` en una sola línea para asignar a múltiples variables; hazlo paso a paso.
3.  **Errores de tipeo en cadenas**: Escribir `nombre <- Juan` sin comillas hará que PSeInt busque una variable llamada `Juan`, no el texto "Juan". Siempre usa comillas para literales de texto.
4.  **Operaciones mixtas incorrectas**: Sumar un número y una cadena (`5 + "10"`) puede causar errores de tipo o conversión implícita no deseada. Es mejor convertir explícitamente si es necesario.

## Cuándo usarlo / Cuándo NO usarlo

*   **Usa variables cuando**: Necesitás almacenar un dato que cambiará o será reutilizado (ej. un contador, un input del usuario, un resultado intermedio).
*   **NO uses variables cuando**: El valor es constante y nunca cambiará. En ese caso, es más limpio usar **constantes** definidas con la palabra clave `Constante` o simplemente usar el literal directo en el código para mejorar la legibilidad.
*   **Trade-off**: Declarar muchas variables puede hacer el algoritmo más claro pero más largo. Declarar pocas variables reutilizadas puede ahorrar memoria pero hacer el código más difícil de seguir si las variables cambian de propósito.

## Ejemplo Extendido: Calculadora de Promedio

Este ejemplo muestra el flujo completo: declaración, entrada de datos (input), procesamiento y salida.

```pseint
Algoritmo PromedioNotas
    // Declaración de variables
    Definir nota1 Como Real;
    Definir nota2 Como Real;
    Definir nota3 Como Real;
    Definir promedio Como Real;
    Definir mensaje Como Cadena;

    // Entrada de datos
    Escribir "Ingrese la primera nota:";
    Leer nota1;
    
    Escribir "Ingrese la segunda nota:";
    Leer nota2;
    
    Escribir "Ingrese la tercera nota:";
    Leer nota3;

    // Procesamiento
    // Verificamos que las notas estén en rango válido (0-10)
    Si nota1 < 0 O nota1 > 10 Entonces
        Escribir "Error: La primera nota no es válida.";
        // En un caso real, podríamos pedir el dato nuevamente
        Retornar;
    FinSi

    promedio <- (nota1 + nota2 + nota3) / 3;

    // Salida de datos
    Escribir "El promedio es: ", promedio;

    // Lógica condicional basada en el resultado
    Si promedio >= 4 Entonces
        mensaje <- "Aprobado";
    SiNo
        mensaje <- "Desaprobado";
    FinSi

    Escribir "Estado: ", mensaje;
FinAlgoritmo
```

En este caso, usamos `Real` para las notas porque pueden tener decimales. Usamos `Cadena` para el mensaje de estado. La estructura demuestra cómo las variables permiten almacenar inputs temporales y calcular un resultado final que se presenta al usuario.