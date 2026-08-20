# Informática — Algoritmos: búsqueda y ordenamiento (teoría)

> Tema del MAPA: `informatica/algoritmos-busqueda-ordenamiento`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Introducción a los fundamentos de búsqueda y ordenamiento en la computación.

---

## 1. ¿Qué son los algoritmos de búsqueda?

Los algoritmos de búsqueda son métodos que permiten localizar un elemento específico dentro de una estructura de datos, como una lista o array. Su objetivo es minimizar el tiempo necesario para encontrar lo que se busca, aunque la eficiencia depende del método utilizado. Por ejemplo, en una lista desordenada, la **búsqueda lineal** revisa cada elemento uno por uno desde el primero hasta el último, hasta dar con el valor buscado o confirmar que no está presente. Este enfoque es intuitivo pero puede ser lento si los datos son muchos.

[IMAGEN: Diagrama de flujo de búsqueda lineal, mostrando un ciclo que recorre elementos hasta encontrar el objetivo]

---

## 2. Búsqueda binaria: rapidez con condiciones

La **búsqueda binaria** es una alternativa mucho más rápida, pero solo funciona si los datos están **ordenados previamente**. El proceso divide la lista en mitades sucesivas, comparando el valor buscado con el del elemento central. Si no coincide, descarta la mitad donde no puede estar y repite el procedimiento hasta encontrarlo o agotar las opciones. Esta estrategia reduce exponencialmente el número de elementos a revisar, lo que la hace ideal para grandes conjuntos.

[IMAGEN: Representación gráfica de la búsqueda binaria en una lista ordenada, mostrando divisiones sucesivas]

---

## 3. Eficiencia: ¿por qué importa?

La **complejidad algorítmica** mide cuán eficiente es un método a medida que crece el tamaño de los datos. La búsqueda lineal tiene una complejidad de **O(n)**, lo que significa que en el peor caso revisará todos los elementos. En cambio, la búsqueda binaria alcanza **O(log n)** gracias a su división por mitades. Esta diferencia es crítica cuando se manejan bases de datos o aplicaciones que requieren accesos rápidos.

---

## 4. Algoritmos de ordenamiento: el desafío

Los algoritmos de ordenamiento organizan elementos en un criterio específico, como ascendente o descendente. Uno de los más sencillos es el **ordenamiento burbuja**, que compara pares adyacentes de la lista y los intercambia si están en el orden incorrecto. Este proceso se repite hasta que no haya más inversiones, lo que garantiza que los elementos "más grandes" se "suelten" hacia el final.

[IMAGEN: Ejemplo visual del ordenamiento burbuja con una lista de números que se van reordenando paso a paso]

---

## 5. Limitaciones y elección de algoritmos

No todos los métodos son igualmente útiles en cada situación. La **búsqueda lineal** es sencilla pero lenta, mientras que la **búsqueda binaria** requiere orden previo y no funciona con estructuras dinámicas. En cuanto al ordenamiento, el burbuja tiene una complejidad de **O(n²)**, lo cual lo hace poco eficiente para grandes listas. La elección del algoritmo depende siempre del contexto: tamaño de los datos, requisitos de velocidad y si la información está previamente organizada.

---

## N. Conexión con lo que sigue

Este tema prepara el terreno para explorar algoritmos más avanzados en algoritmos avanzados, donde se comparan métodos como quicksort o búsqueda por dispersión, y su aplicación en sistemas reales.