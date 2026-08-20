# Prototipado Interactivo Avanzado en Figma: Más allá de los enlaces simples

El prototipado avanzado en diseño gráfico trasciende la conexión básica entre pantallas estáticas. Se trata de recrear la lógica y el comportamiento del producto final, incluyendo micro-interacciones, estados condicionales y transiciones fluidas. En la práctica, esto permite validar la experiencia de usuario (UX) con alto realismo antes de que el equipo de desarrollo empiece a codificar, ahorrando tiempo y dinero en correcciones posteriores.

El núcleo del prototipado avanzado reside en el uso estratégico de **Componentes con Variantes** y la herramienta **Smart Animate**.

1.  **Variantes:** No creés cada estado manualmente (por ejemplo, un botón normal y otro hover). Usá Auto Layout para agrupar elementos y conviértelos en componentes. Definí variantes dentro del panel de propiedades para estados como `hover`, `active` o `disabled`. En el modo prototipo, vinculás estos cambios de variante a triggers específicos (clicks o scrolls) para que se actualicen dinámicamente.
2.  **Smart Animate:** Para transiciones, seleccioná dos frames y activá la opción "Smart Animate". Configurá parámetros como `Easing` (aceleración/curva de velocidad) y `Delay`. Esto anima propiedades como posición, opacidad o escala automáticamente si los elementos comparten nombres de capa entre el frame inicial y final.

**Errores comunes de quien recién aprende este punto:**

*   **Animaciones imposibles:** Intentar animar un frame completo sin anclajes (*constraints*) definidos. Esto genera comportamientos extraños al redimensionar la ventana del navegador o en diferentes dispositivos, ya que el motor de prototipado no sabe cómo mover los elementos internos.
*   **Componentes aislados:** Crear botones separados para cada estado visual en lugar de usar variantes. Esto duplica trabajo y rompe la consistencia visual si modificás el original y olvidás actualizar las copias.
*   **Ignorar restricciones:** No vincular los elementos a su contenedor padre hace que el diseño se rompa al cambiar el tamaño del dispositivo, afectando la experiencia en móviles.

**Cuándo usarlo / cuándo NO usarlo (trade-offs)**

Usalo cuando necesites validar flujos críticos (login, checkout) o handoff de assets