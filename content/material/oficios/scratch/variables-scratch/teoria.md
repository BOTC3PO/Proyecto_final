# Scratch — Variables y listas (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../condicionales/`, `../../../informatica/variables-y-tipos-de-dato/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/scratch/variables-scratch/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es una variable

Una **variable** es una **caja con nombre** donde el programa **guarda un dato** que puede **cambiar**: puntaje, vidas, nivel, tiempo, nombre del jugador.

Se crea en la categoría **Variables** con **"Crear una variable"**. Al crearla se elige:

- **Para todos los objetos:** la pueden usar todos (el **puntaje** del juego).
- **Solo para este objeto:** únicamente ese objeto (la **velocidad** de un enemigo).

La variable aparece como **monitor** en el escenario (se puede mostrar u ocultar con el casillero o con los bloques `mostrar variable` y `esconder variable`).

---

## 2. Bloques de variables

| Bloque | Qué hace |
|:--|:--|
| **fijar [puntos] a (0)** | le da un **valor** (se usa para **empezar de cero**) |
| **sumar a [puntos] (1)** | **cambia** el valor sumando (o restando si es negativo) |
| **( puntos )** | **entrega el valor** para usarlo en otro bloque |
| **mostrar / esconder variable** | muestra u oculta el monitor |

```
al hacer clic en la bandera verde
fijar [puntos] a (0)
fijar [vidas] a (3)
por siempre
    si <¿tocando [Moneda]?> entonces
        sumar a [puntos] (1)
```

> **Siempre se inicializan** las variables con `fijar ... a ...` al empezar. Si no, **conservan el valor de la partida anterior**.

---

## 3. Usos

- **Contador:** cuenta eventos (monedas, clics).
- **Puntaje y vidas:** el estado del juego.
- **Temporizador:** una variable que aumenta o disminuye con el tiempo (o el bloque `cronómetro`).
- **Dato del usuario:** se guarda la `respuesta` del bloque `preguntar` en una variable para usarla después.
- **Nivel o dificultad:** cambia el comportamiento (la velocidad crece con el nivel).
- **Banderas:** una variable que vale 0 o 1 para indicar un estado (por ejemplo, `juego_terminado`).

Un **contador** se puede usar en **condiciones**: `si <(puntos) > (9)> entonces decir [¡Ganaste!]`.

---

## 4. Operaciones con variables

Los **operadores** (verdes) permiten hacer cuentas y combinar:

- **Aritméticos:** `( ) + ( )`, `( ) − ( )`, `( ) × ( )`, `( ) / ( )`, `( ) mod ( )` (resto).
- **Números al azar:** `número al azar entre (1) y (10)`.
- **Texto:** `unir [hola ] [mundo]`, `letra (1) de [hola]`, `longitud de [hola]`.
- **Redondeo y funciones:** `redondear`, `valor absoluto de`.

```
fijar [dado] a (número al azar entre (1) y (6))
decir (unir [Salió un ] (dado)) por (2) segundos
```

---

## 5. Listas

Una **lista** guarda **muchos datos en orden**, cada uno con su **posición** (**índice**, desde 1): los nombres de los jugadores, las respuestas, los puntajes.

| Bloque | Qué hace |
|:--|:--|
| **añadir [cosa] a [lista]** | agrega al final |
| **eliminar (1) de [lista]** | quita el de esa posición |
| **insertar [cosa] en (2) de [lista]** | agrega en una posición |
| **reemplazar el elemento (1) de [lista] con [cosa]** | cambia uno |
| **elemento (1) de [lista]** | entrega el dato |
| **longitud de [lista]** | cuántos hay |
| **¿[lista] contiene [cosa]?** | busca |

Para **recorrer** una lista se usa un **bucle** con un contador que va de 1 hasta su longitud.

---

## 6. Variables vs. listas

- **Variable:** un solo dato.
- **Lista:** muchos datos relacionados (en lugar de crear `jugador1`, `jugador2`, `jugador3`...).

---

## 7. Errores frecuentes

- **No inicializar** el puntaje al inicio.
- **Confundir** `fijar` con `sumar a`.
- Usar una variable **local** de un objeto en otro objeto.
- **Texto en lugar de número**: `10` y `"10"` se ven igual, pero hay que cuidar los cálculos.
- **Nombres confusos** (`x`, `cosa`): se usan nombres que expliquen el dato.
