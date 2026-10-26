# Informática — Algoritmo secuencia de pasos (teoría)

> Tema del MAPA: `algoritmo_secuencia_de_pasos`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación básica sobre qué es un algoritmo y cómo se construye una secuencia lógica de pasos para resolver problemas.

---

## 1. ¿Qué es un algoritmo?

Un **algoritmo** es una **secuencia finita de pasos ordenados** que permite resolver un problema o realizar una tarea específica. No se trata solo de hacer cosas, sino de definirlas en forma clara y estructurada para que cualquier persona o máquina pueda seguirlos sin ambigüedades. Por ejemplo, si querés preparar café con una cafetera eléctrica, el algoritmo incluiría encender la cafetera, colocar el filtro, llenar la jarra con agua, etc.

Lo clave es que esos pasos **no pueden faltar ni repetirse de forma infinita**. Si un proceso no termina nunca, ya no es un algoritmo: se convierte en un bucle sin fin, como cuando una computadora intenta resolver algo pero no tiene criterio para detenerse.

---

## 2. Las propiedades que define a un algoritmo

Un algoritmo válido debe cumplir tres condiciones fundamentales:

1. **Finitud**: Debe tener un número definido de pasos y terminar en algún momento. Si un proceso no tiene fin, como un ciclo que se repite para siempre sin condición de parada, no es un algoritmo funcional.
2. **Claridad**: Cada paso debe ser entendible e inambiguo. No puedes escribir algo como "hacer lo necesario" si no está claro qué significa en el contexto.
3. **Efectividad**: Los pasos deben llevar a la solución del problema, sin saltarse etapas ni dejar dudas sobre su propósito.

Estas reglas aseguran que un algoritmo sea útil tanto para humanos como para máquinas, como las computadoras que siguen instrucciones paso a paso.

---

## 3. El orden de los pasos importa

La **secuencia** de los pasos es crucial en cualquier algoritmo. Si se desordena, el resultado puede ser fallido o inútil. Por ejemplo:

- Para lavar platos: primero mojarlos para que no se rompan, luego aplicar jabón y finalmente secarlos.
- Para encender un auto: primero poner la llave en el contacto, luego girarla para encender el motor y después soltar la llave.

Si haces las cosas al revés (como secar antes de mojar), no logras el objetivo. Esto muestra que los pasos deben seguir una **lógica temporal o causal** según lo que se quiera alcanzar.

[IMAGEN: diagrama de flujo con tres pasos en orden correcto y otro con el mismo contenido pero desordenado, marcando la diferencia en el resultado final]

---

## 4. Ejemplos cotidianos de algoritmos

Los algoritmos no son solo para programadores o computadoras. Están presentes en actividades diarias:

- **Recetas de cocina**: Tienen pasos definidos (ejemplo: "calentar la sartén, agregar aceite, freír el huevo").
- **Rutinas matinales**: "Despertar a las 7, cepillarse los dientes, tomar café".
- **Instrucciones de un juego**: "Moverse a la izquierda, evitar obstáculos, llegar al final".

En todos estos casos, se sigue un orden lógico para alcanzar un resultado. La idea es que cualquier tarea compleja puede desglosarse en pasos simples y secuenciales.

---

## 5. Representación de algoritmos

Los algoritmos pueden representarse de distintas formas:

- **Lenguaje natural**: Usando instrucciones escritas o habladas, como se hizo antes.
- **Pseudocódigo**: Un lenguaje intermedio que combina palabras en español con estructuras propias de la programación (ejemplo: `si x > 5 entonces hacer algo`).
- **Diagramas de flujo**: Gráficos donde cada paso se representa como un bloque y se conecta con flechas para mostrar el orden.

Estas herramientas ayudan a visualizar cómo funciona un algoritmo antes de implementarlo en un programa informático.

---

## N. Conexión con lo que sigue

Este tema es la base para entender cómo se diseñan **procedimientos programáticos** y **estructuras lógicas**, que se desarrollarán en `../algoritmos_y_programacion/`.