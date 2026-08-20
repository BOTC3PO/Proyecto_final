# Variables en Scratch: Gestión de Estado y Lógica Dinámica

## Introducción
En Scratch, las variables son contenedores de memoria que permiten almacenar información temporal o persistente durante la ejecución de un proyecto. A diferencia de los valores estáticos (como números fijos o textos escritos directamente en los bloques), las variables permiten que el programa "recuerde" datos entre eventos, reaccione a cambios y mantenga el estado del juego o la aplicación. En un nivel intermedio, el dominio de las variables trasciende el simple conteo; implica entender cómo gestionar múltiples estados, sincronizar datos entre sprites y optimizar el rendimiento.

## Explicación Central y Sintaxis Correcta

El manejo de variables en Scratch se realiza a través del bloque `datos`. Es crucial distinguir entre dos modos de alcance:

1.  **Variable para este sprite:** Solo el bloque que la creó y los scripts de ese sprite pueden acceder a ella. Es ideal para datos locales, como la posición X de un personaje o la vida de un enemigo específico.
2.  **Variable para todos los sprites:** Accesible desde cualquier objeto en el escenario. Se usa para datos globales, como el puntaje total, el nivel del juego o el estado del menú principal.

### Sintaxis y Operaciones Clave

*   **Asignación:** El bloque `establecer [variable v] a (0)` reemplaza completamente el valor anterior. Úsalo al iniciar el juego o al reiniciar una partida.
*   **Incremento/Decremento:** El bloque `cambiar [variable v] por (1)` suma (o resta, si el valor es negativo) al valor actual. Es más eficiente y legible que `establecer [variable v] a ([variable v] + (1))`, aunque ambos funcionan.
*   **Condiciones:** Las variables se evalúan dentro de bloques `si < > entonces`. Por ejemplo, `si <(vidas) > (0)> entonces`.

### Ejemplo de Configuración
Imagina un juego de naves espaciales.
*   Crea una variable `Puntaje` para todos los sprites.
*   Crea una variable `Velocidad` solo para el sprite de la nave.
*   En el inicio del juego, usa `establecer [Puntaje v] a (0)` y `establecer [Velocidad v] a (5)`.

## Errores Comunes en el Aprendizaje Intermedio

1.  **Confundir asignación con comparación:** Un error frecuente es usar el bloque `cambiar [x v] por (y)` cuando se quiere verificar un valor. Recuerda: `cambiar` modifica el dato; `si <(x) = (y)>` lo verifica.
2.  **Variables innecesariamente globales:** Crear una variable para todos los sprites cuando solo un objeto la necesita. Esto ensucia el proyecto, dificulta la depuración y puede causar conflictos si dos sprites intentan modificarla simultáneamente sin control.
3.  **No inicializar variables:** Si un script lee una variable que nunca ha sido establecida, Scratch la trata como 0 (o cadena vacía). Esto puede causar comportamientos erráticos si el usuario inicia una acción antes de que el bloque de inicialización se ejecute. Siempre define el estado inicial en el evento `al presionar bandera verde`.
4.  **Uso excesivo de `esperar` en bucles:** Para leer una variable dentro de un bucle `repetir infinitamente`, el uso de `esperar (0.1) segundos` es crítico. Sin él, el bucle se ejecutará tantas veces como el procesador permita, congelando el proyecto y haciendo que las lecturas de variables sean inestables.

## Cuándo Usar / Cuándo NO Usar

*   **Usa variables cuando:** Necesitas rastrear cambios a lo largo del tiempo (tiempo transcurrido, distancia recorrida), almacenar resultados de cálculos intermedios para reutilizarlos, o compartir estado entre múltiples objetos.
*   **NO uses variables cuando:** El valor es constante y no cambia (usa un número literal o una lista de un solo elemento si es muy grande). Tampoco las uses para almacenar datos temporales de un solo bloque de código que no necesitas fuera de ese bloque; para eso, mejor usa una lista temporal o simplemente encadena los cálculos.
*   **Trade-off:** Las variables globales facilitan la comunicación entre sprites pero aumentan la complejidad del estado del proyecto. Si tu proyecto se vuelve difícil de seguir, considera usar listas para agrupar datos relacionados en lugar de crear una variable global por cada dato pequeño.

## Ejemplo Extendido: Sistema de Vida y Game Over

Supongamos que estás creando un juego donde el jugador debe evitar obstáculos. Necesitas un sistema robusto de vidas que detenga el juego correctamente.

1.  **Configuración:** Crea una variable global `Vidas` y una variable local `TamañoObstaculo` para el sprite de los obstáculos.
2.  **Inicialización:** En el sprite del jugador, al presionar la bandera verde, ejecuta `establecer [Vidas v] a (3)`.
3.  **Lógica de Colisión:** Dentro del sprite del jugador, en el bucle principal:
    ```scratch
    si <tocando [obstáculo v]?> entonces
        cambiar [Vidas v] por (-1)
        borrar [todos los gráficos v]
        esperar (1) segundos
        si <(Vidas) = (0)> entonces
            detener [todo v]
        fin
    fin
    ```
    *Nota:* Aquí, `borrar todos los gráficos` da feedback visual inmediato. La verificación `si <(Vidas) = (0)>` dentro de la colisión asegura que el juego solo termine cuando se agoten las vidas, no en el primer impacto si aún quedan vidas.
4.  **Feedback Visual:** En el escenario, añade un sprite de texto que diga: `di [Vidas: (Vidas)] por (2) segundos`. Esto mantiene al usuario informado en tiempo real.

Este enfoque garantiza que el estado de las vidas se gestione de manera consistente, evitando que el juego continúe indefinidamente tras una derrota o que se reinicie prematuramente.