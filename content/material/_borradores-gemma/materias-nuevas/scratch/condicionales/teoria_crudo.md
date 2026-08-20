# Condicionales en Scratch: Tomando decisiones en tus proyectos

## Introducción

En el mundo de la programación, las instrucciones suelen ejecutarse en secuencia, una tras otra. Sin embargo, los programas útiles necesitan reaccionar al entorno o al estado actual del juego. Aquí es donde entran los **bloque condicionales**. En Scratch, estos bloques permiten que el script verifique una condición específica (como "¿Está tocando el borde?" o "¿El puntaje es mayor a 10?") y ejecute un conjunto de acciones solo si esa condición se cumple. Son la base para crear interactividad real en lugar de animaciones pregrabadas.

## Explicación central: El bloque "Si"

El bloque fundamental para la toma de decisiones básica es el bloque **"Si <condición> entonces"** (`if` en otros lenguajes). Este bloque tiene forma de "U" con un espacio en la parte superior donde se inserta una condición lógica (un bloque de forma de diamante o hexagonal, dependiendo de la versión, que devuelve verdadero o falso).

### Sintaxis y funcionamiento

La estructura es simple:
1.  **Condición:** Un bloque que evalúa una verdad o falsedad. Ejemplos comunes incluyen:
    *   `Tocando [color/borde/objeto]?`
    *   `[tecla] presionada?`
    *   `[] > []` (comparación numérica)
    *   `[] = []` (comparación de texto o números)
2.  **Acciones:** Bloques que se ejecutan *solo* si la condición es verdadera. Si es falsa, el script salta esa sección y continúa por debajo.

**Ejemplo real de sintaxis:**
```scratch
si <tocando [borde v]?> entonces
    girar (180) grados
    decir [¡Ay! Chocaste] por (2) segundos
fin
```

Es importante notar que Scratch evalúa esta condición constantemente dentro de un bucle `Siempre` (loop) o al presionar la bandera verde. Si la condición cambia a falso, el bloque deja de ejecutar sus acciones internas.

## Errores comunes de principiantes

*   **Confundir asignación con comparación:** Un error clásico es intentar usar bloques de cálculo para asignar valores dentro de la condición sin entender que la condición solo *lee* valores. Por ejemplo, poner `[] = []` esperando que guarde un dato; esto solo *compara* si dos valores son iguales.
*   **Olvidar el bucle:** Colocar un bloque "Si" una sola vez fuera de un bucle `Siempre` o `Repetir` hace que la condición se verifique una única vez al inicio del programa. Si la condición no se cumple en ese milisegundo inicial, nunca se volverá a verificar.
*   **Usar bloques de texto donde se necesitan números:** Intentar comparar `[] > []` con textos que no son números puede generar resultados inesperados o errores silenciosos. Asegúrate de que las variables comparadas sean del mismo tipo.
*   **Anidación excesiva:** Meter muchos "Si" dentro de otros "Si" sin necesidad puede hacer el código ilegible. A veces es mejor usar bloques "Si entonces sino" (`if-else`) para simplificar la lógica.

## Cuándo usarlo / Cuándo NO usarlo

**Úsalo cuando:**
*   Necesitas que un personaje reaccione a un evento inmediato (colisión, tecla presionada).
*   Quieres cambiar el estado del juego dinámicamente (por ejemplo, ganar o perder).
*   Necesitas validar datos antes de realizar una acción crítica (ej. verificar si la contraseña es correcta).

**No lo uses (o ten cuidado) cuando:**
*   La lógica es puramente secuencial y no depende del estado actual. En ese caso, una secuencia lineal de bloques es más eficiente.
*   Estás buscando eficiencia extrema en proyectos con cientos de sprites. Evaluar condiciones en cada frame puede consumir recursos. Considera usar eventos (`al recibir [mensaje v]`) para activar la lógica solo cuando es necesario, en lugar de verificar constantemente en un bucle.

## Ejemplo extendido en contexto: Juego de "Esquivar Obstáculos"

Imagina que estás creando un juego donde un pájaro debe volar entre tuberías. El pájaro no puede saber si ganó o perdió hasta que interactúa con el entorno.

**Escenario:**
El pájaro se mueve hacia la derecha constantemente. Necesitamos detectar si choca con una tubería o si sale de la pantalla.

**Implementación en el sprite del Pájaro:**

1.  **Bucle principal:** Coloca un bloque `al presionar [bandera verde v]` seguido de un bucle `siempre` (`forever`).
2.  **Detección de colisión:** Dentro del bucle, usa un bloque condicional:
    ```scratch
    si <tocando [Tubería v]?> entonces
        decir [¡Juego terminado!] por (2) segundos
        detener [todo v]
    fin
    ```
    *Análisis:* Aquí, la condición `tocando [Tubería]` se verifica en cada iteración del bucle. En el instante exacto en que los sprites se superponen, la condición pasa a ser verdadera, ejecutando el mensaje y deteniendo el proyecto.

3.  **Detección de límites:** Agrega otra condición para evitar que el pájaro desaparezca:
    ```scratch
    si <tocando [borde v]?> entonces
        girar (180) grados
    fin
    ```
    *Análisis:* Si el pájaro toca el borde, invierte su dirección. Esto crea un rebote básico sin necesidad de calcular coordenadas matemáticas complejas.

Este ejemplo demuestra cómo los condicionales permiten que el juego responda dinámicamente a las acciones del usuario y al estado del entorno, creando una experiencia interactiva en lugar de una animación estática.