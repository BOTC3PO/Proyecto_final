# Informática — POO: Clases y Objetos (teoría)

> Tema del MAPA: `informatica/poo-clases-y-objetos`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Introducción a los conceptos básicos de programación orientada a objetos.

---

## 1. Concepto de Clase

En la programación orientada a objetos, una **clase** es un molde o plantilla que define qué elementos y acciones tendrán los objetos creados a partir de ella. No es un objeto en sí mismo, sino el patrón que se usa para construirlos. Por ejemplo, si pensás en una clase "Perro", esta contendrá las características generales de todos los perros (como nombre, raza o edad) y las acciones que pueden realizar (como ladrar o correr). Cada objeto que se cree a partir de esa clase será un perro específico con sus propias cualidades.

[IMAGEN: Diagrama de una clase "Perro" con atributos como `nombre`, `raza` y métodos como `ladrar()`]

---

## 2. Atributos y Métodos

Los objetos están compuestos por **atributos** y **métodos**. Los **atributos** son las variables que definen el estado de un objeto; es decir, los datos que lo caracterizan. Por ejemplo, en un objeto "Coche", los atributos podrían ser `marca`, `modelo` o `color`. 

Por otro lado, los **métodos** son funciones asociadas al objeto que representan su comportamiento. Estos métodos definen qué puede hacer el objeto: por ejemplo, un método `acelerar()` en un coche o un método `comer()` en un perro.

Juntos, atributos y métodos forman la estructura completa de un objeto, permitiendo que interactúe con otros objetos del sistema.

---

## 3. Instanciación

El proceso de crear un objeto a partir de una clase se llama **instanciación**. Cuando instancias una clase, estás generando un objeto real basado en ese molde. Por ejemplo, si tenés la clase "Coche", podrías instanciar un objeto llamado `mi_coche` que tenga atributos específicos como `marca: "Ford"` y `modelo: "Focus"`. 

Este objeto no es la clase en sí, sino una **instancia** de ella. Cada instancia puede tener valores diferentes para sus atributos, pero sigue el mismo diseño definido por la clase.

---

## 4. Diferencia entre Clase y Objeto

La **clase** es como un plano o receta: define qué elementos tendrá un objeto, pero no lo crea directamente. Por ejemplo, una clase "Libro" podría tener atributos como `título` y `autor`, y métodos como `leer()`. 

El **objeto**, en cambio, es la realidad de ese plano: es el libro específico que se construye con esa receta. Si tenés un objeto `libro1` basado en la clase "Libro", podría tener `título: "Cien años de soledad"` y `autor: "Gabriel García Márquez".

En resumen, la clase es el modelo, y el objeto es una copia concreta de ese modelo.

---

## N. Conexión con lo que sigue

Este tema es fundamental para entender cómo se construyen estructuras complejas en programación orientada a objetos; por eso, se conecta directamente con herencia y polimorfismo, donde se exploran las relaciones entre clases y sus extensiones.