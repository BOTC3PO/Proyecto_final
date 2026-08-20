# Informática — Variables y tipos de dato (teoría)

> Tema del MAPA: `informatica/variables-y-tipos-de-dato`. Depende de: fundamentos de programacion (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Introducción a los conceptos básicos que permiten manejar información en un programa.

---

## 1. ¿Qué es una variable?

Una **variable** es un contenedor en la memoria de la computadora que guarda un valor y puede cambiar durante la ejecución del programa. Cada variable tiene un nombre, como `edad` o `precio`, que sirve para referirse a su contenido desde distintos puntos del código. Al crear una variable, se le asigna un tipo de dato que define qué clase de información podrá almacenar: números, texto, verdadero/falso, etc.

[IMAGEN: Diagrama sencillo mostrando una variable "edad" con valor 18 en la memoria]

---

## 2. Tipos de datos comunes

Los **tipos de datos** determinan qué operaciones se pueden realizar con el valor almacenado y cómo lo guarda la computadora. Los más usados son:

- **Entero**: Números sin decimales, como `15` o `-3`. Se usan para contar elementos, calcular cantidades.
- **Decimal**: Números con coma flotante, como `3.14` o `-0.75`. Sirven para medidas precisas o cálculos matemáticos complejos.
- **Texto (cadena)**: Secuencias de caracteres entre comillas, como `'Hola'` o `"Buen día"`. Se usan para mensajes, nombres, descripciones.
- **Booleano**: Solo puede tomar dos valores: `verdadero` (`true`) o `falso` (`false`). Es clave en decisiones condicionales y validaciones.

[IMAGEN: Tabla comparando ejemplos de cada tipo de dato]

---

## 3. Características del tipo booleano

El **tipo booleano** es estrictamente binario: no admite valores intermedios ni palabras como "sí", "no" o "tal vez". Solo reconoce `true` (verdadero) y `false` (falso). Este tipo se usa para controlar flujos de ejecución, por ejemplo, en instrucciones como *"si el usuario está logueado, mostrar perfil"*.

Un valor booleano puede surgir de comparaciones entre datos:  
- `5 > 3` → `true`  
- `'a' == 'b'` → `false`

---

## 4. Elección del tipo de dato correcto

Elegir el tipo adecuado es fundamental para evitar errores y optimizar la memoria. Por ejemplo:
- Usar un entero en lugar de decimal si no se necesitan fracciones.
- Evitar texto cuando se requieren cálculos matemáticos, ya que puede causar conflictos (ej: sumar `'10'` + `'20'` da `'1020'`, no `30`).

Cada lenguaje de programación tiene reglas específicas para declarar variables y asignar tipos. En algunos casos, el sistema deduce automáticamente el tipo según el valor asignado.

---

## N. Conexión con lo que sigue

Este tema es base para entender cómo se manejan los datos en estructuras más complejas como listas o objetos, tratados en estructuras de datos.