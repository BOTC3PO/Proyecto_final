# Matemática — Cifras significativas y error (teoría)

> Tema del MAPA: `M5` (Tronco 3.a — Geometría: de la forma a la medida).
> Depende de `../sistema-metrico-y-conversiones/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (qué son, reglas para
contarlas, error absoluto y relativo) mejor separadas en diapositivas.

---

## Por qué toda medición tiene un margen de error

Como se vio en `../magnitud-unidad-instrumento/`, ningún instrumento mide
con precisión infinita: una regla marca hasta el milímetro, una balanza
hasta el gramo. Eso significa que el resultado de una medición nunca es
"exacto" en el sentido matemático — siempre lleva implícito un margen de
incertidumbre, del tamaño de la división más chica del instrumento. Las
**cifras significativas** son la forma de expresar un número respetando
ese margen: ni de más (inventando precisión que el instrumento no tiene),
ni de menos (desperdiciando la precisión que sí se logró).

## Qué son las cifras significativas

Las **cifras significativas** de un número son todos los dígitos que
aportan información real sobre la precisión de una medición — no
incluyen los ceros que sólo están para marcar la posición de la coma
decimal.

## Reglas para contarlas

- **Todos los dígitos distintos de cero son significativos.** 305 tiene 3
  cifras significativas.
- **Los ceros ENTRE dos dígitos distintos de cero son significativos.**
  305 — el 0 del medio cuenta.
- **Los ceros a la IZQUIERDA del primer dígito distinto de cero NO son
  significativos** (sólo ubican la coma). 0,0042 tiene 2 cifras
  significativas (el 4 y el 2), no 5.
- **Los ceros a la DERECHA, después de la coma decimal, SÍ son
  significativos** (indican que se midió con esa precisión). 3,40 tiene 3
  cifras significativas — ese último 0 dice "medí hasta el centésimo, y
  dio exactamente 0". 100,0 tiene 4 cifras significativas.
- **Los ceros al final de un número entero SIN coma decimal son
  ambiguos** (por convención escolar, no se cuentan como significativos
  salvo que el problema aclare lo contrario). 1200 se toma como 2 cifras
  significativas (el 1 y el 2).

## Error absoluto y error relativo

Cuando se conoce el valor real de algo (o un valor de referencia más
preciso) y se lo compara con una medición:

- **Error absoluto = |valor medido − valor real|**. Se expresa en la
  misma unidad que la medición.
- **Error relativo = error absoluto ÷ valor real**. Es un número sin
  unidad (una proporción), que permite comparar la calidad de mediciones
  de magnitudes distintas.
- **Error porcentual = error relativo × 100**. Es el error relativo
  expresado como porcentaje (ver `../porcentaje/`).

## Ejemplo aplicado

Se mide una mesa y da 1,20 m, pero el valor real (con un instrumento más
preciso) es 1,25 m. Error absoluto: |1,20 − 1,25| = 0,05 m. Error
relativo: 0,05 ÷ 1,25 = 0,04. Error porcentual: 4%.

## Precisión del instrumento y error

El error absoluto de una medición nunca puede ser menor que la mitad de la
división más chica del instrumento usado — es el límite físico de lo que
ese instrumento puede distinguir (ver `../magnitud-unidad-instrumento/`).
Este vínculo entre instrumento y margen de error se retoma en detalle en
`../error-sistematico-vs-aleatorio/`.
