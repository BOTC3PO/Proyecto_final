# Diseño gráfico — Componentes y sistemas de diseño (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de `../prototipado/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Por qué hace falta un sistema

Cuando un producto digital crece, aparecen decenas de pantallas con botones, formularios y tarjetas. Si cada pantalla se diseña desde cero, los botones terminan con tamaños, colores y esquinas ligeramente distintos, y la experiencia se vuelve irregular. Además, cada cambio obliga a modificar muchos lugares a mano. Un sistema de diseño resuelve esto: reúne las piezas reutilizables y las reglas para usarlas, de manera que todo el producto se vea y se comporte de forma coherente.

Un sistema de diseño no es solo una biblioteca de elementos gráficos. Incluye principios, componentes, patrones, reglas de uso y documentación. Es una herramienta compartida entre quienes diseñan y quienes programan.

## 2. Componentes y variantes

Un componente es una pieza reutilizable de la interfaz: un botón, un campo de texto, una tarjeta, un menú. Se diseña una vez y se utiliza muchas. Si se modifica el componente original, todos los usos se actualizan, lo que ahorra tiempo y evita inconsistencias. Los componentes pequeños se combinan para armar otros más grandes: un campo de texto, una etiqueta y un botón forman un formulario.

Las variantes son versiones de un mismo componente: un botón principal, uno secundario, uno deshabilitado, con ícono o sin él. También se definen los estados, como reposo, foco, presionado, deshabilitado y error. Diseñar todos los estados es parte del trabajo, no un detalle: el usuario los encuentra continuamente.

## 3. Tokens de diseño

Los tokens son valores con nombre que guardan decisiones de diseño: colores, tamaños de tipografía, espaciados, radios de esquina, sombras. En lugar de usar un código de color suelto, se usa un nombre con sentido, como color de texto principal o color de acción. Si más adelante cambia la identidad, se modifica el token y el cambio se propaga a todo el sistema.

Conviene organizar los tokens en niveles: valores básicos, como una paleta completa, y valores semánticos que expresan la función, como el color para errores. Así es posible, por ejemplo, ofrecer un modo oscuro sin rediseñar cada pantalla, solo reasignando los valores. Los espaciados se definen con una escala, como múltiplos de 4 u 8 píxeles, para mantener un ritmo uniforme.

## 4. Documentación y nomenclatura

Un sistema que nadie entiende no se usa. Cada componente debería documentarse con su propósito, cuándo usarlo y cuándo no, sus variantes y estados, ejemplos de uso correcto e incorrecto y las consideraciones de accesibilidad, como contraste y navegación con teclado. Los nombres deben ser claros y consistentes, y comprendidos por diseño y desarrollo por igual.

El sistema se versiona: se registra qué cambió y cuándo, y se avisa a los equipos. Un sistema vivo tiene responsables, un proceso para proponer componentes nuevos y una revisión periódica para eliminar lo que ya no se usa.

## 5. Entrega a desarrollo (handoff)

El handoff es el traspaso del diseño a quienes lo programan. Un buen handoff incluye los archivos de diseño ordenados, las especificaciones de medidas, colores y tipografías, los componentes del sistema, los recursos gráficos exportados en los formatos adecuados y la descripción del comportamiento: qué ocurre al presionar, al cargar o al fallar. Las herramientas de diseño actuales permiten inspeccionar valores directamente.

Lo más importante es la conversación temprana. Si diseño y desarrollo usan el mismo vocabulario y los mismos componentes, la implementación es más fiel y rápida. Se revisa el resultado construido contra el diseño y se corrigen las diferencias. Esta práctica conecta con lo visto en prototipado y en las pruebas con usuarios: el sistema asegura que lo que se probó es lo que finalmente se construye.
