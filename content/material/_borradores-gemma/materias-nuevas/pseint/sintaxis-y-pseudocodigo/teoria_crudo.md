# Sintaxis y Pseudocódigo en PSeInt: Fundamentos Básicos

## Introducción

PSeInt (PSeudocódigo e Interpretador) es una herramienta educativa diseñada para facilitar la enseñanza y el aprendizaje de la lógica de programación. Su objetivo principal es permitir al estudiante concentrarse en la **lógica algorítmica** sin distracciones propias de lenguajes compilados o interpretados complejos (como la gestión de memoria o tipos de datos estrictos).

En este nivel básico, el **pseudocódigo** actúa como un puente entre el pensamiento humano y el código real. No se trata de escribir un programa que la computadora ejecute directamente, sino de describir un algoritmo de forma estructurada, legible y universal. La sintaxis de PSeInt es estricta en cuanto a la estructura, pero flexible en cuanto al estilo, siempre que respete las reglas de indentación y palabras reservadas.

## Explicación Central: Estructura y Sintaxis Básica

Un programa en PSeInt debe comenzar con la palabra reservada `Proceso` y finalizar con `FinProceso`. Todo el código lógico se escribe entre estos dos límites.

### 1. Declaración de Variables
En PSeInt, no es estrictamente necesario declarar variables antes de usarlas (a diferencia de C++ o Java), pero es una **buena práctica** inicializarlas para evitar confusiones. Los tipos principales son:
*   `Entero`: Números sin decimales.
*   `Real`: Números con decimales.
*   `Caracter` o `Cadena`: Textos.

### 2. Entrada y Salida de Datos
Para interactuar con el usuario, se utilizan `Escribir` (salida) y `Leer` (entrada).

```pseudocode
Proceso EjemploBasico
    // Declaración implícita o inicialización
    Edad <- 0
    Nombre <- ""

    // Salida de texto
    Escribir "Bienvenido al sistema"
    
    // Entrada de datos
    Escribir "Por favor, ingrese su nombre:"
    Leer Nombre
    
    Escribir "Hola ", Nombre
FinProceso
```

### 3. Estructuras de Control Básicas
La indentación (sangría) es **obligatoria** en PSeInt. Si no se respeta, el intérprete generará un error de sintaxis.

*   **Condicionales (`Si ... Entonces`)**:
    ```pseudocode
    Si Edad >= 18 Entonces
        Escribir "Es mayor de edad"
    SiNo
        Escribir "Es menor de edad"
    FinSi
    ```

*   **Ciclos (`Mientras`)**:
    ```pseudocode
    Contador <- 1
    Mientras Contador <= 5 Hacer
        Escribir "Iteración número: ", Contador
        Contador <- Contador + 1
    FinMientras
    ```

### 4. Asignación
El operador de asignación es `<-`. Es crucial no confundirlo con el operador de igualdad (`==` o `=` según la configuración, pero en PSeInt estándar se usa `==` para comparación y `<-` para asignación).

```pseudocode
X <- X + 1  // Esto suma 1 al valor actual de X
```

## Errores Comunes de Principiantes

1.  **Olvidar `FinSi` o `FinMientras`**: PSeInt es muy estricto con el cierre de estructuras. Si abres un `Si`, debes cerrarlo con `FinSi`. El error más frecuente es cerrar la estructura incorrectamente o en el lugar equivocado.
2.  **Confundir asignación con comparación**: Escribir `X = 5` dentro de una condición para comparar suele dar error o comportamiento inesperado. Debe usarse `X == 5`. Para asignar, siempre `<-`.
3.  **Indentación incorrecta**: Aunque el código pueda parecer lógico visualmente, si la sangría no coincide con la estructura anidada, el analizador sintáctico rechazará el programa. Usa siempre la tecla `Tab` o espacios consistentes.
4.  **No inicializar variables numéricas**: Aunque PSeInt a veces asigna 0 por defecto, es peligroso depender de eso. Si lees un dato y luego lo usas en un cálculo sin verificar que llegó correctamente, puedes obtener resultados nulos o erróneos.
5.  **Uso de caracteres especiales en nombres de variables**: Nunca uses espacios ni acentos en los nombres de variables. Ejemplo válido: `edadUsuario`, no `edad usuario` ni `edad_uso`.

## Cuándo usarlo / Cuándo NO usarlo

*   **Usa PSeInt cuando**:
    *   Estás aprendiendo los fundamentos de la lógica (secuencial, condicional, cíclica).
    *   Necesitas diseñar algoritmos complejos antes de pasar a un lenguaje real (Java, Python, C#).
    *   Quieres verificar la lógica de un algoritmo sin preocuparte por la sintaxis estricta de un lenguaje de producción.

*   **No uses PSeInt cuando**:
    *   Necesitas crear una aplicación funcional, gráfica o web.
    *   Trabajas en un entorno profesional donde se requiere integración con bases de datos, APIs o sistemas operativos.
    *   Necesitas rendimiento de ejecución en tiempo real.
    *   El objetivo es aprender un lenguaje específico de programación; en ese caso, pasa directamente a la documentación de ese lenguaje (ej. Python Docs, Java Docs).

## Ejemplo Extendido: Calculadora de Promedio Simple

Imaginemos que debemos crear un algoritmo que pida las notas de tres materias, calcule el promedio y diga si el alumno aprobó (promedio >= 4).

```pseudocode
Proceso CalculadoraPromedio
    // Declaración de variables
    Definir nota1, nota2, nota3, promedio Como Real
    Definir resultado Como Caracter

    // Entrada de datos
    Escribir "=== Sistema de Notas ==="
    Escribir "Ingrese la nota de la materia 1 (0-10):"
    Leer nota1
    
    Escribir "Ingrese la nota de la materia 2 (0-10):"
    Leer nota2
    
    Escribir "Ingrese la nota de la materia 3 (0-10):"
    Leer nota3

    // Proceso de cálculo
    // Validación simple de rango (opcional pero recomendada)
    Si nota1 < 0 o nota1 > 10 Entonces
        Escribir "Error: La nota 1 está fuera de rango."
        // En un caso real, podríamos usar un ciclo para pedirlo de nuevo
        parar
    FinSi

    promedio <- (nota1 + nota2 + nota3) / 3

    // Lógica condicional para determinar el estado
    Si promedio >= 4 Entonces
        resultado <- "Aprobado"
    SiNo
        resultado <- "Reprobado"
    FinSi

    // Salida de resultados
    Escribir ""
    Escribir "El promedio final es: ", promedio
    Escribir "El estado del alumno es: ", resultado

FinProceso
```

**Análisis del ejemplo**:
Este caso muestra el flujo completo: entrada -> procesamiento -> salida. Se observa el uso de variables `Real` para manejar decimales en el promedio. La estructura `Si...SiNo...FinSi` es anidada correctamente con la indentación. Finalmente, la salida combina texto literal y variables para dar feedback claro al usuario. Este patrón es la base para cualquier algoritmo más complejo.