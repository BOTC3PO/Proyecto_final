# Informática — Funciones y Modularidad (teoría)

> Tema del MAPA: `funciones_y_modularidad`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Introducción a la organización del código mediante funciones y principios de modularidad.

---

## 1. ¿Qué es la modularidad?

La modularidad es el principio que permite dividir un programa complejo en partes más pequeñas, independientes y manejables. En lugar de escribir todo el código en un solo bloque, se lo estructura en bloques lógicos llamados **funciones**, cada uno con una tarea específica. Esto facilita no solo la lectura del código, sino también su mantenimiento: si hay un error, se puede corregir únicamente donde es necesario; si se necesita modificar algo, no afecta al resto del programa. Además, permite reutilizar bloques de código en distintas partes del mismo programa o incluso en otros proyectos.

[IMAGEN: diagrama de un programa dividido en funciones como módulos independientes]

---

## 2. Componentes de una función

Una función se compone de tres elementos clave:

1. **Parámetros:** Son los valores que se le pasan a la función para que realice su tarea. Por ejemplo, si hay una función que calcula el área de un rectángulo, sus parámetros serían la base y la altura.
2. **Cuerpo:** Es el bloque de código que contiene las instrucciones que ejecuta la función.
3. **Retorno:** Es el valor que devuelve la función al programa principal una vez finalizada su ejecución. Puede ser un cálculo, un estado o incluso nada (si no se usa).

La definición de una función incluye su nombre, parámetros y cuerpo. Por ejemplo:  
`def calcular_area(base, altura):`  
`    return base * altura`

---

## 3. Reutilización del código

Uno de los beneficios principales de usar funciones es evitar la **duplicación de código**. Si una operación se repite varias veces en un programa (como validar un formulario o mostrar un mensaje), se puede encapsular en una función y llamarla tantas veces como sea necesario. Esto no solo reduce el tamaño del código, sino que también mejora su claridad: si hay un error en esa operación, se corrige una sola vez.

Además, la reutilización facilita la **prueba unitaria** de cada parte del programa por separado. Por ejemplo, si una función calcula impuestos y otra genera informes, se pueden probar individualmente sin afectar al resto del sistema.

---

## 4. Flujo de ejecución

Cuando un programa incluye funciones, el **flujo de control** cambia dinámicamente. Al llamar a una función (por ejemplo, `calcular_area(5, 3)`), la computadora se detiene en el punto de llamada y ejecuta las instrucciones definidas dentro de esa función. Una vez finalizada, vuelve al lugar donde fue invocada para continuar con lo siguiente.

Este mecanismo es clave para organizar tareas complejas: una función puede llamar a otra, formando cadenas de operaciones que simplifican la lógica principal del programa.

[IMAGEN: flujo de ejecución con llamada a función y retorno]

---

## 5. Ventajas de la modularidad en proyectos grandes

En aplicaciones o sistemas complejos, la modularidad se vuelve indispensable. Permite:

- **Debuggear** partes del código sin afectar al total.
- **Colaborar** en equipos: cada miembro puede desarrollar un módulo sin interferir con otros.
- **Mantener** el software a largo plazo: si cambia una función, no se rompe el programa entero.

Por ejemplo, en un juego, se pueden modularizar las funciones de gráficos, sonido, lógica de jugadores y puntuaciones. Cada módulo puede ser actualizado o reemplazado sin tocar los demás.

---

## N. Conexión con lo que sigue

Este tema sirve como base para entender cómo se manejan los **parámetros** y el **alcance de las variables** dentro de una función, temas desarrollados en `../parametros-y-alcance-de-funciones/`.