# Proyecto Simple en Scratch: De la idea al producto final

### Introducción: Qué es y para qué sirve

En el contexto del aprendizaje de programación, un "proyecto simple" en Scratch no se refiere necesariamente a un código complejo, sino a la capacidad de integrar múltiples bloques de diferentes categorías para crear una experiencia interactiva coherente. Mientras que los ejercicios básicos suelen centrarse en un solo sprite o una sola mecánica, un proyecto intermedio implica la coordinación de al menos dos personajes (sprites), comunicación entre ellos, gestión de variables y una lógica de flujo más ramificada.

El objetivo de este nivel es dejar de pensar en "bloques sueltos" y empezar a pensar en "sistemas". ¿Cómo sabe el gato que ha tocado al perro? ¿Cómo se actualiza el puntaje cuando aparece una moneda? Este tipo de proyectos sirve para consolidar la lógica secuencial, el manejo de eventos simultáneos y el uso de datos globales.

### Explicación central: Integrando variables y comunicación

Para construir un proyecto intermedio sólido, debemos dominar tres pilares técnicos:

1.  **Variables como estado global:** Las variables en Scratch son globales por defecto. Esto es útil para puntajes o vidas, pero peligroso si no se controla.
    *   *Ejemplo:* Usar `poner [Puntaje] a (0)` al inicio del evento `cuando se presiona la bandera verde` asegura que el juego empiece limpio cada vez.
2.  **Comunicación entre sprites (Broadcasting):** Para que dos personajes interactúen sin conocerse directamente, usamos mensajes.
    *   *Sintaxis real:* `enviar [mensaje]` y `cuando recibo [mensaje]`.
    *   *Caso de uso:* Cuando el jugador completa una fase, el sprite principal envía un mensaje "FaseCompleta" y el sprite del fondo cambia la imagen.
3.  **Condiciones anidadas y sensores:**
    *   *Lógica común:* `si <tocando [borde]?> entonces`, `si <señal de [radio] < 10?> entonces`.

**Ejemplo de estructura lógica:**
En un juego de esquivar obstáculos, el sprite del jugador no debe moverse solo. La lógica debe ser:
1.  Esperar a que el jugador presione las teclas de dirección.
2.  Verificar si la nueva posición colisiona con un obstáculo.
3.  Si hay colisión, detener todo y mostrar "Fin del Juego".

### Errores comunes de quien recién aprende este punto

*   **Olvido de inicialización de variables:** Un error clásico es calcular `cambiar [Puntaje] por (1)` sin haberlo puesto a cero antes. Esto hace que el puntaje se acumule indefinidamente si el usuario reinicia el proyecto sin recargar la página.
*   **Confusión entre `esperar` y `esperar hasta`:** Usar `esperar (1) segundos` pausa *todo* el script, bloqueando la respuesta a otros eventos. Para esperar una condición externa (como que aparezca un enemigo), usar `esperar hasta <[Enemigo] = [verdadero]>` es mucho más eficiente.
*   **Sprites que se superponen invisiblemente:** Al mover objetos con `ir a x: (0) y: (0)`, a veces se pierden de vista si el lienzo es grande. Es vital usar `poner en primer plano` o ajustar las coordenadas iniciales.
*   **Lógica de colisión ingenua:** Usar `si <tocando [color]>` es impreciso. Es preferible usar `si <tocando [sprite]?>` o calcular la distancia con `distancia a [sprite]` para mayor control.

### Cuándo usarlo / cuándo NO usarlo

**Usa proyectos simples/integrados cuando:**
*   Necesitas prototipar una mecánica de juego rápida.
*   Quieres enseñar conceptos de estado (vida, puntaje, nivel) a principiantes.
*   El objetivo es la narrativa interactiva (historias con diálogos complejos).

**NO lo uses (o busca alternativas) cuando:**
*   El proyecto requiere cálculos matemáticos complejos o renderizado gráfico de alto rendimiento. Scratch no es una herramienta de diseño gráfico avanzado ni de cálculo científico.
*   Necesitas trabajar con archivos externos complejos (imágenes de alta resolución, bases de datos). Scratch maneja bien archivos pequeños, pero se vuelve lento con librerías grandes.
*   El objetivo es aprender sintaxis tipada estricta. Scratch enseña lógica visual, no la gramática de lenguajes como Python o Java.

### Ejemplo extendido en contexto: Juego "Atrapa la Manzana"

Imaginemos un proyecto donde un gato debe atrapar manzanas que caen del cielo.

**1. Configuración del Sprite "Gato":**
*   Al presionar la bandera verde: `poner [Puntaje] a (0)`, `poner [Vidas] a (3)`, `ocultar [MensajeFin]`.
*   Bucle principal: `siempre` -> `si <tocando [Manzana]?> entonces` -> `cambiar [Puntaje] por (1)`, `enviar [NuevaManzana]`, `decir [¡Mmm!] por (1) segundos`.
*   Detección de fin: `si <[Vidas] = (0)> entonces` -> `mostrar [MensajeFin]`, `detener todo`.

**2. Configuración del Sprite "Manzana":**
*   Al presionar la bandera verde: `esperar (2) segundos`, `enviar [NuevaManzana]`.
*   Evento `cuando recibo [NuevaManzana]`: `ir a x: (aleatorio entre -200 y 200) y: (200)`, `mostrar`.
*   Bucle de caída: `siempre` -> `cambiar y por (-5)` -> `si <y < (-180)> entonces` -> `cambiar [Vidas] por (-1)`, `enviar [NuevaManzana]`, `esperar (0.5) segundos`.

**3. Lógica de sincronización:**
Aquí, la variable `Vidas` es compartida. La manzana no sabe quién es el gato, solo sabe que si llega al suelo, resta una vida. El gato no sabe cuándo cae la manzana, solo reacciona al tocarla. Esta separación de responsabilidades es la clave de un proyecto bien estructurado en Scratch. Al finalizar, un mensaje global puede activar un sprite de "Victoria" o "Derrota", completando el ciclo de la experiencia de usuario.