# Informática — Pruebas unitarias integración (teoría)

> Tema del MAPA: `pruebas_unitarias_e_integracion`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de las pruebas unitarias y de integración, sus diferencias y aplicaciones en desarrollo de software.

---

## 1. ¿Qué son las pruebas unitarias?

Las pruebas unitarias son un tipo de verificación que se centra en validar el funcionamiento correcto de unidades individuales de código, como funciones o métodos. Estas pruebas se realizan aisladas del resto del sistema, sin involucrar dependencias externas como bases de datos, servicios web o interfaces gráficas. Su objetivo principal es asegurar que cada componente cumpla con su lógica interna y sus contratos definidos (por ejemplo, que un cálculo matemático devuelva el resultado esperado). 

Para aplicar una prueba unitaria, se simulan entradas específicas y se comparan las salidas obtenidas con los valores predeterminados. Esta metodología permite detectar errores temprano en el ciclo de desarrollo, antes de que afecten a otros módulos del software.

[IMAGEN: Diagrama mostrando una función aislada con flechas de entrada/salida y un indicador de "OK" o "Error"]

---

## 2. ¿Qué son las pruebas de integración?

Las pruebas de integración, en cambio, evalúan cómo interactúan los componentes entre sí dentro del sistema. A diferencia de las unitarias, no se aíslan los módulos: se prueban juntos para verificar que el flujo de datos y la comunicación entre ellos funcionen correctamente. Por ejemplo, si una función llama a otra o a un servicio externo, una prueba de integración asegurará que esa conexión sea estable y que los resultados sean consistentes.

Estas pruebas son esenciales para detectar problemas en la interfaz entre módulos, como errores de compatibilidad, fallos en la transmisión de parámetros o conflictos de estado. Aunque suelen requerir más recursos (como un entorno simulado), son clave para garantizar que el software funcione como una unidad coherente.

[IMAGEN: Esquema mostrando dos módulos conectados con flechas y un mensaje "Prueba de interacción"]

---

## 3. Diferencias clave entre ambas

La principal diferencia radica en su alcance: las pruebas unitarias miran hacia adentro (la lógica interna de cada pieza), mientras que las de integración observan hacia afuera (cómo se comunican las partes). Esto no significa una jerarquía de importancia, sino complementariedad. 

Las unitarias son más rápidas y fáciles de implementar, pero no garantizan que el sistema completo funcione. Las de integración, aunque más complejas, detectan errores que solo aparecen cuando múltiples componentes trabajan juntos. Por ejemplo, una función podría pasar todas sus pruebas unitarias, pero fallar al interactuar con un módulo que no maneja bien ciertos valores.

---

## 4. Cuándo usar cada tipo de prueba

Las pruebas unitarias se aplican en etapas tempranas del desarrollo, idealmente junto con la escritura del código (práctica conocida como *test-driven development*). Son útiles para refactorizar funciones sin romper su comportamiento original.

Las pruebas de integración, por otro lado, se realizan después de que los módulos individuales están validados. Se usan cuando el sistema alcanza una etapa donde la interacción entre componentes es crítica, como al conectar con APIs externas o bases de datos reales. 

Ambos tipos de prueba son parte de un enfoque integral para asegurar calidad, pero no suelen sustituirse: una buena estrategia combina ambas.

---

## 5. Conexión con lo que sigue

Este tema sirve como base para entender modelos más avanzados de testing, como las pruebas de aceptación o las automatizadas en entornos de despliegue, explorados en `../testing_automatizado/`.