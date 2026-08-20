# Economía — Libro diario y mayor (teoria)

> Tema del MAPA: `E20C` (Tronco 1 — Numérico). Depende de
> `../partida-doble/` (ver `../dependencias.md`). Sigue
> `../estados-contables/` (`E20D`), cierre de esta sub-rama.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — dos formas de organizar los mismos asientos: por
fecha, y por cuenta.

---

## El mismo conjunto de asientos, organizado de dos formas

Todos los asientos contables (ver
[partida doble](../partida-doble/teoria.md)) que genera una empresa se
organizan, tradicionalmente, en dos libros distintos — que no compiten
entre sí, sino que muestran la misma información desde dos ángulos
diferentes.

## El Libro Diario: orden cronológico

El **Libro Diario** registra **todos** los asientos contables, **en el
orden en que ocurrieron**, día a día. Es la fuente original: ahí queda
la historia completa y en orden de todo lo que le pasó a la empresa
económicamente.

## El Libro Mayor: organizado por cuenta

El **Libro Mayor** reorganiza esa misma información, pero **por
cuenta**: cada cuenta (Caja, Mercadería, Préstamos a pagar...) tiene su
propia "hoja", donde se acumulan **todos** los movimientos que la
afectaron a lo largo del tiempo, sin importar en qué fecha ocurrieron —
para poder calcular de un vistazo el **saldo actual** de esa cuenta
puntual.

## "Pasar al mayor": el proceso que conecta ambos libros

El proceso de trasladar cada línea de cada asiento del Libro Diario a
la hoja correspondiente de cada cuenta en el Libro Mayor se llama,
tradicionalmente, **"pasar al mayor"** (o mayorización). Es un traslado,
no una nueva fuente de información: todo lo que aparece en el Mayor ya
estaba en el Diario, sólo que reorganizado por cuenta en vez de por
fecha.

## La "cuenta T"

Una forma visual simple de representar una cuenta del Libro Mayor es la
**cuenta T**: una letra T donde el Debe se anota a la izquierda y el
Haber a la derecha, con el nombre de la cuenta arriba.

```
        Caja
Debe  |  Haber
------|------
 ...  |  ...
```

## Por qué hacen falta los dos libros

- El **Diario** sirve para **reconstruir la historia**: qué pasó,
  cuándo, y en qué orden — fundamental para una auditoría o para
  entender una secuencia de hechos.
- El **Mayor** sirve para saber el **estado actual** de cada cuenta de
  un vistazo — cuánto hay en Caja hoy, cuánto se debe en total, sin
  tener que revisar asiento por asiento en el Diario.

## Dónde aparece en la vida real

- **Reconstruir qué pasó un día puntual** en la empresa: se busca en el
  Diario, por fecha.
- **Saber cuánto dinero hay en Caja hoy**: se busca directamente en el
  Mayor, en la hoja de esa cuenta.
- **Armar el balance final** de una empresa: se parte de los saldos que
  ya están calculados en el Mayor, cuenta por cuenta.
