# Electrónica — Lógica digital: puertas AND, OR y NOT (teoría)

> Tema del MAPA: `logica_digital_puertas`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Introducción a las puertas lógicas básicas y su funcionamiento en circuitos digitales.

---

## 1. ¿Qué son las puertas lógicas?

Las puertas lógicas son componentes electrónicos que realizan operaciones booleanas sobre una o más señales de entrada para producir una señal de salida. Estas operaciones siguen reglas matemáticas definidas y forman la base de los circuitos digitales, desde calculadoras hasta computadoras.

Cada puerta tiene un símbolo gráfico estándar (como el de AND, OR o NOT) que se usa en diagramas de circuitos. Su propósito es representar funciones lógicas sencillas que luego se combinan para resolver problemas complejos.

---

## 2. La puerta NOT: el inversor

La puerta NOT, también llamada "inversor", tiene una sola entrada y una salida. Su función es invertir el valor de la señal que recibe: si entra un **1** (verdadero), sale un **0** (falso); si entra un **0**, sale un **1**.

Esta operación se representa con un círculo en el símbolo de la puerta, o con una línea curva al lado del terminal de salida. Es útil para negar condiciones, como en circuitos que requieren activar un dispositivo solo cuando una señal no está presente.

[IMAGEN: Símbolo de la puerta NOT con entrada 1 y salida 0]

---

## 3. La puerta AND: lógica de multiplicación

La puerta AND (también llamada "Y") tiene dos o más entradas y una salida. Su regla es simple: **solo devuelve un 1 si todas las entradas son 1**. Si al menos una entrada es 0, la salida será 0.

Por ejemplo:
- Entradas A=0, B=1 → Salida = 0
- Entradas A=1, B=1 → Salida = 1

Esta puerta se usa para "filtrar" señales: solo actúa cuando todas las condiciones están cumplidas. En un circuito de seguridad, podría requerir que una puerta esté abierta *y* una llave esté girada para encender una luz.

---

## 4. La puerta OR: lógica de suma

La puerta OR (también llamada "O") también tiene dos o más entradas y una salida. Su regla es opuesta a la AND: **devuelve un 1 si al menos una entrada es 1**. Solo cuando todas las entradas son 0, la salida será 0.

Ejemplos:
- Entradas A=0, B=0 → Salida = 0
- Entradas A=0, B=1 → Salida = 1
- Entradas A=1, B=1 → Salida = 1

Esta puerta es útil para activar una acción si *cualquiera* de las condiciones se cumple. Por ejemplo, un sistema de alarma que dispara si hay movimiento o si se detecta humo.

---

## 5. Tablas de verdad: guía para todos los casos

Las tablas de verdad son herramientas clave para entender el comportamiento de las puertas lógicas. Muestran todas las combinaciones posibles de entradas y la salida correspondiente.

Para una puerta AND con dos entradas, la tabla sería:

| A | B | Salida |
|---|---|--------|
| 0 | 0 |   0    |
| 0 | 1 |   0    |
| 1 | 0 |   0    |
| 1 | 1 |   1    |

Para OR:

| A | B | Salida |
|---|---|--------|
| 0 | 0 |   0    |
| 0 | 1 |   1    |
| 1 | 0 |   1    |
| 1 | 1 |   1    |

Estas tablas permiten predecir cómo funcionará un circuito antes de construirlo físicamente.

---

## N. Conexión con lo que sigue

Este tema es el punto de partida para entender combinaciones más complejas, como las puertas NAND, NOR o XOR, que se estudian en `../puertas-combinadas/`. También sirve de base para diseñar circuitos lógicos avanzados en `../diseño-circuitos-digitales/`.