# Informática — CPU: Unidad de Control y ALU (teoría)

> Tema del MAPA: `cpu_unidad_de_control_y_alu`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría

**Presentación** — Explicación de cómo funciona la CPU desde sus componentes principales.

---

## 1. Componentes principales de la CPU

La **CPU (Unidad Central de Procesamiento)** es el cerebro del computador, responsable de ejecutar instrucciones y procesar datos. Está dividida en dos bloques funcionales clave: la **Unidad de Control (UC)** y la **ALU (Unidad Aritmético-Lógica)**. La UC actúa como coordinadora, gestionando el flujo de información entre los componentes del sistema, mientras que la ALU se enfoca exclusivamente en realizar operaciones matemáticas y lógicas.

Estos dos elementos trabajan en conjunto para cumplir con las tareas que le asigna el software. Por ejemplo, cuando un programa pide que se sume dos números, la UC interpreta la instrucción y delega el cálculo a la ALU. Si hay que tomar una decisión (como comparar valores), también es la ALU quien ejecuta esa operación lógica.

---

## 2. Función de la Unidad de Control

La **Unidad de Control** se encarga de dirigir todas las operaciones dentro del computador. Su trabajo principal es **interpretar instrucciones**, **coordinar el flujo de datos** entre la memoria, dispositivos de entrada/salida y otros componentes, y **activar los circuitos necesarios para cumplirlas**.

Para hacerlo, sigue un proceso llamado **ciclo de instrucción**, que se divide en tres etapas: primero busca (fetch) la instrucción en la memoria RAM, luego la decodifica (decode) para entender qué debe hacer y finalmente ejecuta (execute) la acción correspondiente. En esta última fase, si la operación requiere cálculos numéricos o comparaciones lógicas, la UC envía la tarea a la ALU.

Un ejemplo práctico: al abrir un documento de texto, la UC busca en la memoria la instrucción "abrir archivo", interpreta qué componentes deben interactuar (como el teclado y la pantalla) y organiza los pasos para que todo funcione correctamente.

---

## 3. Función de la ALU

La **ALU (Unidad Aritmético-Lógica)** es un circuito especializado en realizar operaciones matemáticas y lógicas. Las operaciones aritméticas incluyen suma, resta, multiplicación y división, mientras que las lógicas abarcan funciones como AND, OR, NOT o XOR.

A diferencia de la Unidad de Control, la ALU **no toma decisiones ni gestiona el flujo general del sistema**. Su rol es estrictamente operativo: cuando recibe una instrucción (por ejemplo, "calcular 5 + 3"), ejecuta el cálculo y devuelve el resultado a la UC para que lo use en su proceso.

La ALU también se usa en decisiones condicionales, como en un programa que pregunta si un número es mayor que otro. En ese caso, la ALU compara los valores y envía una señal a la UC indicando el resultado de la operación lógica.

---

## 4. El ciclo de instrucción

El **ciclo de instrucción** es el proceso por el cual la CPU interpreta y ejecuta cada orden del software. Se divide en tres etapas:

1. **Fetch (Buscar)**: La UC localiza la instrucción en la memoria RAM, leyendo su contenido byte a byte.
2. **Decode (Decodificar)**: La UC analiza la instrucción para determinar qué operación debe realizar y qué componentes están involucrados.
3. **Execute (Ejecutar)**: Si la tarea requiere cálculos o decisiones, la UC envía la instrucción a la ALU; de lo contrario, gestiona directamente el flujo de datos.

Este ciclo se repite constantemente mientras el computador está encendido, permitiendo que los programas funcionen de manera fluida y organizada.

---

## 5. Interacción entre UC y ALU

Aunque la Unidad de Control y la ALU tienen funciones distintas, su trabajo es interdependiente. La UC no puede realizar cálculos por sí sola ni tomar decisiones sin la ayuda de la ALU, y la ALU no actúa fuera del marco definido por la UC.

Por ejemplo, cuando se ejecuta un juego que requiere rapidez en las operaciones matemáticas (como calcular colisiones entre objetos), la UC delega el cálculo a la ALU, que lo resuelve en milisegundos. Sin esta colaboración, el sistema no podría procesar tantas instrucciones de forma eficiente.

---

## N. Conexión con lo que sigue

Este tema es base para entender cómo se estructuran los programas en niveles bajos (como ensamblador) y cómo interactúa la CPU con otros componentes del computador, como se explica en `../arquitectura_del_sistema/`.