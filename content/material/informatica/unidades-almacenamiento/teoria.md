# Informática — Unidades de almacenamiento (teoria)

> Tema del MAPA: `E11` (Tronco 1 — Numérico), tag `(Informática)`.
> Depende de `../../matematica/notacion-cientifica/` (ver
> `../dependencias.md`). Investigado con búsqueda web en agosto 2026
> (Wikipedia ES, Geeknetic) — estándar IEC de 1998.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — bit/byte, dos sistemas de prefijos que compiten
entre sí, y por qué un disco "de 500 GB" nunca muestra exactamente 500.

---

## Bit y byte

- **Bit**: la unidad mínima de información en una computadora — un 0 o
  un 1.
- **Byte**: un grupo de **8 bits**. Es la unidad base sobre la que se
  arman todas las demás (kilobyte, megabyte, etc.).

## Dos sistemas de prefijos que no son lo mismo

- **Sistema decimal (SI)**: kilo = 1.000, mega = 1.000.000, giga =
  1.000.000.000 — las potencias de **10** de toda la vida. `1 KB = 1.000
  bytes`.
- **Sistema binario (IEC, 1998)**: kibi = 1.024, mebi = 1.024² =
  1.048.576, gibi = 1.024³ = 1.073.741.824 — potencias de **2**. `1 KiB =
  1.024 bytes`.

En diciembre de 1998, la **IEC** (Comisión Electrotécnica Internacional)
adoptó oficialmente los prefijos binarios (**kibi, mebi, gibi**, con la
"i" de más) justamente para **desambiguar**: que "KB" volviera a
significar sólo 1.000 bytes, y "KiB" quedara reservado para 1.024
bytes.

## Por qué existen los dos sistemas

Las computadoras funcionan internamente en **base 2**, así que las
potencias de 2 (1.024, 1.048.576...) son las que aparecen naturalmente
en la memoria RAM y en el direccionamiento de memoria. Pero los
**fabricantes de almacenamiento** (discos rígidos, pendrives, tarjetas
SD) suelen anunciar la capacidad usando el sistema **decimal** (1.000),
que da un número más redondo y, casualmente, también más grande.

## Por qué un disco "de 500 GB" nunca muestra 500 GB

Cuando un fabricante vende un disco de **500 GB**, se refiere a
`500 × 1.000.000.000 = 500.000.000.000 bytes` (sistema decimal). El
sistema operativo, en cambio, suele calcular y mostrar la capacidad
dividiendo por potencias de **1.024** (sistema binario) — pero muchas
veces sigue llamando al resultado "GB" en vez de "GiB", que sería lo
correcto. Ese mismo disco de 500.000.000.000 bytes, dividido por
1.024³, da aproximadamente **465,7** — el sistema operativo lo muestra
como "465,7 GB", aunque en realidad son GiB. **No falta espacio**: es
la misma cantidad de bytes, contada con dos reglas distintas.

## La fórmula

```
bytes = cantidad × 1000^n   (sistema decimal: KB, MB, GB...)
bytes = cantidad × 1024^n   (sistema binario: KiB, MiB, GiB...)
```

con `n = 1` para kilo/kibi, `n = 2` para mega/mebi, `n = 3` para
giga/gibi.

## Dónde aparece en la vida real

- **Entender por qué el "espacio libre" que muestra la computadora** es
  menor al número que dice la caja del disco o pendrive.
- **Comparar productos de almacenamiento** entre fabricantes, sabiendo
  qué sistema de prefijos usa cada uno.
- **Leer con criterio** cuando una especificación técnica dice "GB" sin
  aclarar si es decimal o binario.
