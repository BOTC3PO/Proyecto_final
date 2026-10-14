# Scratch — Secuencias y bucles (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../bloques-y-eventos/`, `../../../informatica/estructuras-de-control-bucles/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/scratch/secuencias-y-bucles/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Secuencia

Una **secuencia** es una serie de instrucciones que se ejecutan **una tras otra, en orden**. En Scratch, de arriba hacia abajo. El **orden importa**: cambiar el orden puede cambiar el resultado.

```
al hacer clic en la bandera verde
ir a x: (0) y: (0)
decir [Voy a caminar] por (2) segundos
mover (50) pasos
decir [¡Llegué!] por (2) segundos
```

---

## 2. Repetir: por qué usar bucles

Si hay que **repetir** algo, no se copian los bloques diez veces: se usa un **bucle** (una estructura de repetición). Es **más corto**, **más fácil de leer** y **de cambiar**.

Sin bucle:

```
mover (10) pasos
mover (10) pasos
mover (10) pasos
mover (10) pasos
```

Con bucle:

```
repetir (4)
    mover (10) pasos
```

---

## 3. Tipos de bucle

| Bloque | Qué hace |
|:--|:--|
| **repetir (n)** | repite **n veces** (se sabe cuántas) |
| **por siempre** | repite **sin fin** (hasta detener el proyecto) |
| **repetir hasta que <condición>** | repite **hasta que** la condición se cumpla |
| **esperar hasta que <condición>** | detiene el programa hasta que algo ocurra |

- **Por siempre** se usa para juegos: leer el teclado, mover un enemigo, comprobar si hay choque.
- En **repetir hasta que**, la condición se revisa **antes** de cada vuelta.
- Dentro de un bucle se puede **cambiar algo en cada vuelta** (la posición, el tamaño, el disfraz).

---

## 4. Ejemplos clásicos

**Cuadrado:**

```
repetir (4)
    mover (100) pasos
    girar ↻ (90) grados
```

Un cuadrado tiene 4 lados y **4 giros de 90°** (4 × 90 = 360).

**Caminar con animación:**

```
por siempre
    mover (5) pasos
    siguiente disfraz
    esperar (0.1) segundos
```

**Contar hacia adelante:**

```
repetir (10)
    sumar a [contador] (1)
    decir (contador) por (0.5) segundos
```

---

## 5. Esperas y velocidad

- **esperar (n) segundos:** pausa el programa. Sin esperas, un bucle corre tan rápido que **no se ve** el movimiento.
- Para un movimiento **suave**, se usan pasos **pequeños** y esperas **cortas**.
- Scratch redibuja la pantalla con una frecuencia fija; los **bucles de movimiento** se ven fluidos por eso.

---

## 6. Bucles anidados

Un bucle **dentro** de otro: el interior se repite completo en cada vuelta del exterior. Ejemplo: un **polígono** dentro de un **bucle** que gira un poco cada vez, para dibujar **figuras de estrella** o **espirales**.

---

## 7. Errores frecuentes

- Un **por siempre** que impide que se ejecute lo que está **debajo** (nada se ejecuta después).
- Olvidar **girar** o **esperar** y no ver el efecto.
- Que el **bucle no termina** porque la condición **nunca** se cumple.
- Usar el número **equivocado** de repeticiones (error "por uno").
