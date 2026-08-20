# Funciones en PSeInt: Retorno de valores y abstracción de lógica

En el ámbito del desarrollo de algoritmos, es fundamental distinguir entre las acciones que producen un efecto secundario (como mostrar un mensaje en pantalla) y aquellas que calculan un resultado para ser utilizado posteriormente. Mientras que las *procedimientos* (definidos con `Procedimiento`) se usan para agrupar tareas que no devuelven un valor directo, las **funciones** son bloques de código diseñados específicamente para recibir datos de entrada, procesarlos y devolver un único resultado. Este mecanismo es la base de la programación modular y permite tratar cálculos complejos como si fueran variables simples.

### Sintaxis y funcionamiento central

Una función en PSeInt se declara mediante la palabra clave `Funcion` y debe terminar con `FinFuncion`. La característica distintiva es que la función debe especificar el tipo de dato que retornará al finalizar su ejecución. Dentro del cuerpo, se utiliza la palabra clave `Retornar` para enviar el valor de vuelta al punto donde fue llamada.

La sintaxis básica sigue este patrón:

```pseudocode
Funcion resultado <- NombreFuncion(parametro1, parametro2)
    // Lógica de procesamiento
    resultado <- parametro1 + parametro2
FinFuncion
```

Es crucial notar que el nombre de la variable `resultado` dentro de la función debe coincidir con el nombre definido en la cabecera. Este nombre actúa como la "salida" de la caja negra.

**Ejemplo de llamada:**
A diferencia de un procedimiento que se llama por sí solo (`MiProcedimiento()`), una función se integra dentro de expresiones. Por ejemplo, para guardar el retorno en una variable local:

```pseudocode
Definir suma Como Entero;
suma <- Sumar(10, 5); // La variable suma ahora vale 15
Escribir "La suma es: ", suma;
```

O directamente en un `Escribir`:

```pseudocode
Escribir "El doble es: ", Doblar(7); // Imprime "El doble es: 14"
```

### Errores comunes en el aprendizaje intermedio

Quienes están transitando de lo básico a lo intermedio suelen caer en tres errores frecuentes:

1.  **Confusión entre `Procedimiento` y `Funcion`:** Se intenta usar una función cuando no se necesita devolver nada, o viceversa. Recuerda: si el bloque de código *no* devuelve un valor que se usa en una expresión, debería ser un procedimiento.
2.  **Olvido de `Retornar`:** Definir la función pero dejar que el flujo termine sin ejecutar `Retornar`. En PSeInt, esto suele generar un error de ejecución o un valor indefinido, ya que la función no sabe qué entregar al llamador.
3.  **Uso incorrecto en la llamada:** Intentar llamar a la función como si fuera un procedimiento aislado, esperando que haga algo por sí mismo sin capturar su resultado. Las funciones *siempre* devuelven algo; ignorar ese retorno es un desperdicio de su propósito.

### Cuándo usarlo y cuándo no

**Usa funciones cuando:**
*   Necesitas realizar un cálculo matemático o lógico que se repetirá en varias partes del algoritmo.
*   Quieres encapsular una regla de negocio específica (ej. calcular el IVA, validar un email).
*   Deseas mejorar la legibilidad dividiendo un algoritmo grande en pasos pequeños y verificables.

**No uses funciones (o usa procedimientos) cuando:**
*   La acción es puramente visual o de entrada/salida sin necesidad de devolver un dato para cálculos posteriores (ej. "Mostrar menú de opciones").
*   La lógica es tan trivial que crear una función añade más complejidad de la necesaria (ej. `x <- x + 1`).

### Ejemplo extendido: Validación de notas con ponderación

Imaginemos un sistema simple que calcula la nota final de un examen, donde la nota es la promedio de dos parciales, pero si alguno es menor a 4, el estudiante está aplazado. Aquí la función es ideal para encapsular la lógica de validación.

```pseudocode
Algoritmo CalculoDeNotas
    Definir nota1, nota2, final Como Real;
    Definir aplazado Como Logico;

    Escribir "Ingrese primera nota:";
    Leer nota1;
    Escribir "Ingrese segunda nota:";
    Leer nota2;

    // Llamada a la función para obtener el promedio y verificar condiciones
    final <- CalcularFinal(nota1, nota2);
    
    // Verificamos si el resultado indica aplazamiento (usaremos -1 como flag)
    Si final = -1 Entonces
        Escribir "El estudiante está APLAZADO."
    Sino
        Escribir "La nota final es: ", final
    FinSi

FinAlgoritmo

// Definición de la función
Funcion resultado <- CalcularFinal(p1, p2)
    Definir promedio Como Real;
    
    // Validación de rangos (0 a 10)
    Si p1 < 0 O p1 > 10 O p2 < 0 O p2 > 10 Entonces
        Escribir "Error: Las notas deben estar entre 0 y 10."
        Retornar -1 // Indicador de error/aplazamiento
    FinSi

    // Cálculo de condición de aplazamiento
    Si p1 < 4 O p2 < 4 Entonces
        Retornar -1 // Aplazado por nota baja en parcial
    FinSi

    // Cálculo normal
    promedio <- (p1 + p2) / 2;
    Retornar promedio;

FinFuncion
```

En este ejemplo, `CalcularFinal` no solo calcula, sino que también encapsula las reglas de negocio (rango válido y condición de aplazamiento). El algoritmo principal se mantiene limpio, delegando la complejidad lógica a la función, lo que facilita futuras modificaciones (por ejemplo, cambiar el umbral de aplazamiento) sin tocar la lógica de entrada de datos.