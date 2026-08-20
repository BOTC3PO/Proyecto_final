# Diagramas de Flujo: La base lógica de PSeInt

## Introducción: ¿Qué es y para qué sirve?

Un diagrama de flujo es una representación gráfica de un algoritmo o proceso. Imaginalo como un mapa de ruta: te dice por dónde empezar, qué decisiones tomar en cada cruce y cómo llegar al destino final (el resultado). En el contexto de **PSeInt**, los diagramas de flujo son la herramienta fundamental para nivelar la lógica de programación antes de escribir código real.

A diferencia del pseudocódigo, que se lee como texto, el diagrama de flujo utiliza símbolos geométricos estandarizados (ISO 5807) para visualizar el flujo de control. Esto es crucial para entender la secuencia, la toma de decisiones y los bucles sin distraerse con la sintaxis específica de un lenguaje como C++ o Java.

## Explicación central: Símbolos y estructura

Para construir un diagrama de flujo en PSeInt, debés dominar un conjunto básico de símbolos. No inventes formas; la claridad depende del uso correcto de estos estandartes:

1.  **Inicio/Fin (Óvalo):** Todo diagrama debe comenzar con un óvalo que indica "Inicio" y terminar con otro que indica "Fin". Sin esto, el algoritmo no está definido completamente.
2.  **Proceso (Rectángulo):** Representa cualquier acción que modifique una variable o realice un cálculo.
    *   *Ejemplo:* `x <- x + 1` (suma uno a x).
    *   *Ejemplo:* `resultado <- a * b`.
3.  **Entrada/Salida (Paralelogramo):** Se usa para leer datos del usuario o mostrar resultados en pantalla.
    *   *Ejemplo:* `Escribir "Ingrese su edad"`.
    *   *Ejemplo:* `Leer nombre`.
4.  **Decisión (Rombo):** Es el corazón de la lógica condicional. Permite bifurcar el flujo según una condición verdadera (Sí/V) o falsa (No/F).
    *   *Ejemplo:* ¿Es `edad >= 18`?
5.  **Conectores (Círculo):** Útiles cuando el diagrama es muy grande y las líneas se cruzan de forma confusa. Permiten saltar de un punto a otro dentro del mismo diagrama.

### Flujo lógico básico
El flujo siempre va de arriba hacia abajo y de izquierda a derecha. Las líneas con flechas (conectores de flujo) guían la lectura. Si hay un rombo de decisión, una salida debe ir marcada con "Sí" (o "V") y la otra con "No" (o "F"). Es vital que ambas ramas del rombo vuelvan a unirse o lleven a un final, para evitar caminos sin salida.

## Errores comunes de quienes recién aprenden

*   **Olvidar el cierre de las decisiones:** Muchos principiantes dibujan el rombo pero olvidan que la rama "No" debe tener una acción o llevar a otro paso. Si una rama no hace nada, el diagrama se "corta" en el aire, lo cual es un error lógico grave.
*   **Mezclar símbolos:** Usar un rectángulo para mostrar un mensaje en pantalla (`Escribir`) o un paralelogramo para hacer un cálculo (`x <- x + 1`). Aunque PSeInt a veces lo permite con advertencias, rompe la estandarización y dificulta la lectura profesional.
*   **Falta de conectores en diagramas grandes:** Intentar conectar todo con líneas largas que cruzan el diagrama crea "spaghetti visual". Si el diagrama se vuelve complejo, usá conectores numerados o con letras para mantener la limpieza.
*   **No definir el fin:** Un diagrama sin el óvalo de "Fin" final está incompleto. Siempre debés cerrar el flujo lógico.

## Cuándo usarlo / Cuándo NO usarlo

**Usalo cuando:**
*   Estás diseñando la lógica de un problema nuevo y no estás seguro de cómo estructurar los pasos.
*   Necesitas explicar un algoritmo a alguien que no sabe programar; las imágenes son más intuitivas que el texto.
*   Estás aprendiendo a programar y quieres asegurarte de que tu lógica sea correcta antes de preocuparte por la sintaxis.

**No lo uses (o limitá su uso) cuando:**
*   El algoritmo es trivialmente simple (ej. "sumar dos números"), ya que el diagrama puede ser más engorroso que el pseudocódigo.
*   Trabajas con estructuras de datos complejas o recursión avanzada, donde el diagrama se vuelve ilegible y difícil de mantener. En esos casos, el pseudocódigo o el código directo son más eficientes.

## Ejemplo extendido: Validación de acceso a un sistema

Imaginemos que debés crear un algoritmo que pida un usuario y una contraseña, y verifique si el acceso es correcto.

1.  **Inicio:** Óvalo superior etiquetado "Inicio".
2.  **Entrada:** Paralelogramo que diga `Escribir "Ingrese usuario"` y luego `Leer usuario`. Repetí para la contraseña.
3.  **Decisión Principal:** Rombo con la condición `usuario == "admin" y clave == "1234"`.
    *   **Rama Sí (V):**
        *   Rectángulo: `Escribir "Acceso concedido"`.
        *   Conector o línea directa al final.
    *   **Rama No (F):**
        *   Rombo secundario: `¿Intentos restantes > 0?` (para simular un límite de intentos).
        *   Si es Sí: `Escribir "Clave incorrecta"`, decrementar contador de intentos, y volver a la entrada (usando un conector o línea que suba).
        *   Si es No: `Escribir "Sistema bloqueado"`.
4.  **Fin:** Óvalo inferior al que llegan todas las rutas válidas.

Este ejemplo muestra cómo las decisiones anidadas y los ciclos (bucles) se visualizan claramente en el diagrama, permitiendo detectar errores lógicos (como olvidar restar un intento) antes de pasar a PSeInt o cualquier lenguaje de programación.