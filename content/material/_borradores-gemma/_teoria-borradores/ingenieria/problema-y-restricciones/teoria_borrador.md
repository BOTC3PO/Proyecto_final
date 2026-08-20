# Ingeniería — Problema y restricciones (teoría)

> Tema del MAPA: `P01`. Depende de `../conceptos_basicos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de cómo los problemas y sus limitaciones guían el diseño en ingeniería.

---

## 1. El problema como punto de partida

En ingeniería, todo proceso comienza con un **problema**: una situación que requiere una solución para satisfacer necesidades específicas. Por ejemplo, si un puente colapsa, el problema es garantizar su seguridad y funcionalidad. La solución no surge de la nada: debe cumplir con ciertos **requisitos** (qué se espera que haga) y respetar **restricciones** (lo que no puede hacer o cómo debe hacerse). Sin entender estos elementos, cualquier diseño será ineficaz.

## 2. ¿Qué es una solución técnica?

Una **solución técnica** es el resultado del proceso de diseño: un producto, sistema o método que resuelve el problema planteado. No se trata solo de "hacer algo", sino de hacerlo de manera que cumpla con todos los requisitos establecidos. Por ejemplo, si se necesita construir una batería para un coche eléctrico, la solución debe garantizar autonomía, durabilidad y compatibilidad con el vehículo, entre otros factores.

## 3. Requisitos: lo que la solución debe cumplir

Los **requisitos** definen qué debe hacer la solución. Son las expectativas mínimas o ideales del cliente, usuario o contexto. Por ejemplo, un requisito podría ser "el puente debe soportar 50 toneladas de peso". Estos son objetivos claros que orientan el diseño: si no se cumplen, la solución no es válida.

[IMAGEN: Diagrama comparando requisitos (ej.: "soportar 50 t") con restricciones (ej.: "costo máximo $1M")] 

## 4. Restricciones: lo que limita las opciones

Las **restricciones** son condiciones externas o internas que no pueden ignorarse. Pueden ser técnicas, económicas, legales o de tiempo. Por ejemplo, si el presupuesto para un puente es de $1 millón, esa es una restricción: la solución no puede costar más. A diferencia de los requisitos (lo que se quiere), las restricciones (lo que no se permite) definen los límites del espacio de soluciones posibles.

## 5. Diferencias clave entre requisito y restricción

Un **requisito** responde a la pregunta "¿qué debe hacer la solución?". Un **restricción**, en cambio, responde a "¿cómo puede hacerse o qué no se permite?". Por ejemplo:  
- Requisito: El puente debe permitir el paso de camiones.  
- Restricción: No se pueden usar materiales más caros que $500 por tonelada.

Un error común es clasificar una restricción como un requisito (como confundir "costo máximo" con "mejor rendimiento"). Esto lleva a soluciones inviables o ineficientes.

## 6. Cómo afectan el proceso de diseño

Los requisitos y las restricciones actúan como **filtros** en la búsqueda de soluciones. Los requisitos definen la meta; las restricciones, los caminos permitidos para alcanzarla. Por ejemplo: si un requisito es "el puente debe durar 100 años" (vida útil) y una restricción es "no se puede usar acero especial", el ingeniero debe buscar alternativas de diseño que compensen la limitación del material con otros elementos (como estructuras más robustas).

## N. Conexión con lo que sigue

Este tema conecta con `../analisis_de_soluciones/`, donde se evalúan si las propuestas cumplen los requisitos y respetan las restricciones, antes de pasar a la implementación.