# Scratch — Bloques y eventos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../../informatica/algoritmo-secuencia-de-pasos/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/scratch/bloques-y-eventos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es Scratch

**Scratch** es un entorno **gratuito** para aprender a programar **armando bloques** como piezas de rompecabezas (desarrollado por el MIT). No se escribe código: se **arrastran** bloques y se **encastran**. Funciona en el navegador (scratch.mit.edu) y también hay una versión de escritorio.

Los programas de Scratch se llaman **proyectos** y se pueden **compartir** y **remezclar**.

---

## 2. Partes de la pantalla

| Zona | Para qué sirve |
|:--|:--|
| **Escenario** | donde se ve y ocurre la acción (480 × 360 puntos) |
| **Objetos** (*sprites*) | los personajes y las cosas del proyecto |
| **Paleta de bloques** | los bloques disponibles, por categoría |
| **Área de programación** | donde se arman los programas del objeto elegido |
| **Pestañas** | **Código**, **Disfraces** y **Sonidos** |

Cada objeto tiene **su propio** código, sus disfraces y sonidos. El **escenario** también puede tener código y **fondos**.

El escenario tiene **coordenadas**: el centro es **x = 0, y = 0**; x va de −240 a 240 (izquierda a derecha) e y de −180 a 180 (abajo a arriba).

---

## 3. Categorías de bloques (por color)

- **Movimiento** (azul): mover, girar, ir a una posición.
- **Apariencia** (violeta): decir, cambiar disfraz, tamaño, mostrar y esconder.
- **Sonido** (fucsia): reproducir sonidos, volumen.
- **Eventos** (amarillo): **disparan** los programas.
- **Control** (naranja): esperar, repetir, decidir.
- **Sensores** (celeste): preguntar, tocar, teclas, mouse.
- **Operadores** (verde): cuentas, comparaciones, números al azar, texto.
- **Variables** (naranja rojizo): guardar datos y listas.
- **Mis bloques**: bloques que uno mismo crea.

---

## 4. Eventos

Todo programa en Scratch **empieza con un bloque de evento** (de "sombrero"), que dice **cuándo** se ejecuta lo que está debajo:

- **Al hacer clic en la bandera verde:** arranca el proyecto.
- **Al presionar la tecla [espacio]:** cuando se presiona esa tecla.
- **Al hacer clic en este objeto.**
- **Cuando el fondo cambie a...** / **cuando la sonoridad sea mayor a...**
- **Al recibir [mensaje]** y **enviar [mensaje]:** forma de **comunicar** objetos entre sí (uno avisa, otro reacciona).

Un objeto puede tener **varios programas** (varios eventos) funcionando **a la vez** (en paralelo).

---

## 5. Armar y probar

1. **Arrastrar** un bloque de evento al área de programación.
2. **Encastrar** debajo los bloques de acción, en orden.
3. **Hacer clic** en el programa (o presionar la bandera) para **probarlo**.
4. **Observar** y **corregir**: se prueba **a cada paso**.

Los bloques que **no** están conectados a un evento **no hacen nada** por sí solos. Se pueden **duplicar**, **borrar** y **comentar**.

---

## 6. Primer ejemplo

```
al hacer clic en la bandera verde
decir [¡Hola!] por (2) segundos
mover (10) pasos
```

Pensar en **secuencia**: Scratch ejecuta **de arriba hacia abajo**, un bloque a la vez.
