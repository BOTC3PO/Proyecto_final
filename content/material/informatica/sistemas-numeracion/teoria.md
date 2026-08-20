# Informática — Sistemas de numeración: binario y hexadecimal (teoria)

> Tema del MAPA: `E12` (Tronco 1 — Numérico), tag `(Informática)`.
> Depende de `../../matematica/potencias/` (ver `../dependencias.md`).
> Prerrequisito real, reusado más adelante por otros temas de
> Informática y Arquitectura de Computadoras (no construidos acá).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — sistemas posicionales, por qué las computadoras
usan binario, y por qué el hexadecimal es "binario compacto".

---

## Qué es un sistema de numeración posicional

En un sistema **posicional**, el valor de cada dígito depende de **en
qué posición** está escrito: cada posición vale una potencia de la
**base** del sistema. El sistema decimal (base 10, el de todos los
días) es uno más de estos sistemas, no el único posible.

```
valor = ... + dígito₂ × base² + dígito₁ × base¹ + dígito₀ × base⁰
```

## El sistema binario (base 2)

Usa sólo **2 dígitos posibles: 0 y 1**. Cada posición vale una potencia
de 2 (1, 2, 4, 8, 16...). Es el sistema que usan las computadoras
internamente, porque sus componentes electrónicos trabajan naturalmente
con **dos estados** (encendido/apagado, hay corriente/no hay corriente)
— representar más de dos estados de forma confiable sería mucho más
complejo.

**Ejemplo**: el binario `1011` vale, en decimal, `1×8 + 0×4 + 1×2 + 1×1
= 11`.

## El sistema hexadecimal (base 16)

Usa **16 dígitos posibles**: los 10 dígitos decimales (0-9) más 6
letras (**A, B, C, D, E, F**) para representar los valores 10 a 15
(`A=10, B=11, C=12, D=13, E=14, F=15`). Cada posición vale una potencia
de 16.

## Por qué existe el hexadecimal: es "binario compacto"

El hexadecimal no es un capricho: **16 = 2⁴**, así que **cada dígito
hexadecimal representa exactamente 4 bits** (un grupo de 4 bits se
llama, informalmente, un "nibble"). Como consecuencia, **2 dígitos
hexadecimales representan exactamente 1 byte (8 bits)** — escribir
binario largo es tedioso y propenso a errores; escribir el mismo valor
en hexadecimal es mucho más corto y más fácil de leer para una persona,
sin perder la correspondencia exacta con los bits.

**Ejemplo**: el byte binario `11111111` (8 bits, todos en 1) se escribe
en hexadecimal como `FF` — mucho más compacto — y en decimal equivale a
`255`.

## Agrupar de a 4 bits para pasar de binario a hexadecimal

Para convertir un número binario a hexadecimal, se lo agrupa de a 4 bits
empezando desde la derecha, y cada grupo de 4 bits se convierte a su
dígito hexadecimal correspondiente por separado.

## Dónde aparece en la vida real

- **Direcciones de memoria y colores en diseño web** (`#FF0000` es rojo
  puro) se escriben habitualmente en hexadecimal, justo por ser
  compacto.
- **Todo lo que procesa una computadora**, en el fondo, es binario —
  aunque las personas rara vez lo vean directamente, porque las
  herramientas suelen mostrarlo en hexadecimal o en decimal.
- **Direcciones MAC de red y códigos de error de hardware**, casi
  siempre expresados en hexadecimal.
