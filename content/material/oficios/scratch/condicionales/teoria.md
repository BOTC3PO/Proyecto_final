# Scratch — Condicionales (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../secuencias-y-bucles/`, `../../../informatica/estructuras-de-control-condicionales/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/scratch/condicionales/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Decidir: si... entonces

Un **condicional** hace que el programa **elija** qué hacer **según una condición**: algo que es **verdadero o falso** (una **condición booleana**).

Bloques de **Control**:

- **si <condición> entonces** → ejecuta lo de adentro **solo si** es verdadera.
- **si <condición> entonces ... si no ...** → un camino u otro.

```
si <(puntos) > (9)> entonces
    decir [¡Ganaste!]
si no
    decir [Seguí intentando]
```

---

## 2. Condiciones: bloques hexagonales

Las condiciones son bloques de forma **hexagonal** (puntiaguda), que **encajan** en los espacios del `si`. Pueden venir de:

- **Sensores:** `¿tocando [objeto / borde / color]?`, `¿tecla [espacio] presionada?`, `¿mouse presionado?`.
- **Operadores de comparación:** `( ) > ( )`, `( ) < ( )`, `( ) = ( )`.
- **Operadores lógicos:** `<> y <>`, `<> o <>`, `no <>`.

```
si <¿tocando [Fantasma]?> entonces
    cambiar [vidas] por (-1)
```

---

## 3. Los condicionales dentro de bucles

Un `si` **se evalúa una sola vez**. Para **vigilar continuamente**, se pone **dentro de un bucle** (por ejemplo, `por siempre`):

```
por siempre
    si <¿tecla [flecha derecha] presionada?> entonces
        cambiar x por (10)
    si <¿tecla [flecha izquierda] presionada?> entonces
        cambiar x por (-10)
```

Sin el `por siempre`, el programa revisaría la tecla **una sola vez** al empezar.

---

## 4. Operadores lógicos

| Operador | Significa | Ejemplo |
|:--|:--|:--|
| **y** | las **dos** condiciones deben ser verdaderas | `<¿tocando [Meta]?> y <(llaves) = (3)>` |
| **o** | **alguna** de las dos | `<¿tocando [Lava]?> o <¿tocando [Pinchos]?>` |
| **no** | **invierte** el resultado | `no <¿tocando [borde]?>` |

---

## 5. Anidar y encadenar

- **Anidar:** un `si` dentro de otro (se evalúa el segundo solo si el primero fue verdadero).
- **Encadenar:** `si ... si no` con otro `si` adentro, para elegir entre **varios casos** (por ejemplo, nota alta, media o baja).

```
si <(nota) > (8)> entonces
    decir [Muy bien]
si no
    si <(nota) > (5)> entonces
        decir [Aprobado]
    si no
        decir [A recuperar]
```

---

## 6. Usos típicos

- **Choques y colisiones:** ¿toca un enemigo o una pared?
- **Controles:** ¿se presionó una tecla?
- **Puntaje y vidas:** ¿se llegó a cierto valor? ¿se perdió el juego?
- **Preguntas y respuestas:** compara la respuesta del usuario con la correcta (`respuesta = Buenos Aires`).
- **Rebotar en el borde:** el bloque "rebotar si toca un borde" lo hace solo; con un `si <¿tocando [borde]?>` se puede decidir otra reacción (por ejemplo, perder una vida).

---

## 7. Errores frecuentes

- **Sin bucle**: la condición se evalúa una sola vez.
- **Comparar** con el valor equivocado, o confundir `>` con `=`.
- **Mayúsculas:** al comparar textos, Scratch **ignora** las mayúsculas (`hola` = `Hola` es verdadero); conviene saberlo al validar respuestas.
- Poner la condición **al revés**.
- Olvidar el `si no` cuando debe haber una respuesta para el otro caso.
