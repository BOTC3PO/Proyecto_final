# Matemática — Integral (teoría)

> Tema del MAPA: `A14` (Tronco 2 — Algebraico). Depende de
> `../derivada/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (integral indefinida,
regla de la potencia, integral definida, área bajo la curva, errores
comunes).

---

## La integral como operación inversa de la derivada

Así como la resta deshace la suma, o la división deshace la
multiplicación, la **integral** deshace la derivada. Si F'(x) = f(x), se
dice que F es una **antiderivada** (o primitiva) de f.

## Integral indefinida

Se escribe ∫f(x)dx, y representa **todas** las antiderivadas de f a la
vez — como la derivada de cualquier constante es 0, si F(x) es una
antiderivada, F(x)+C también lo es, para cualquier número C. Por eso
siempre se agrega **"+ C"** (la constante de integración) al resultado.

## Regla de la potencia (para integrar)

```
∫xⁿ dx = x^(n+1) / (n+1) + C     (para n ≠ −1)
```

Es el movimiento **inverso** al de derivar: en vez de restar 1 al
exponente y multiplicar por él, se **suma 1** al exponente y se
**divide** por el nuevo exponente.

Ejemplo: ∫x³ dx = x⁴/4 + C.

## Reglas básicas

- **Constante**: ∫k dx = kx + C.
- **Constante por función**: ∫k·f(x) dx = k·∫f(x) dx.
- **Suma**: se integra término a término, igual que al derivar.

## Integral definida: el área bajo la curva

La integral **definida** entre a y b, ∫[a,b] f(x)dx, es un **número**
(no una familia de funciones) — representa el área entre el gráfico de f
y el eje x, entre x=a y x=b. Se calcula con el **teorema fundamental del
cálculo**:

```
∫[a,b] f(x)dx = F(b) − F(a)
```

donde F es cualquier antiderivada de f (la constante C se cancela al
restar, así que no hace falta incluirla acá).

## Ejemplo resuelto: integral indefinida

**∫(3x² + 4x) dx**
= 3·(x³/3) + 4·(x²/2) + C
= x³ + 2x² + C

## Ejemplo resuelto: integral definida

**∫[1,3] (2x) dx**
1. Antiderivada: F(x) = x².
2. F(3) − F(1) = 9 − 1 = 8.

El área bajo la recta y=2x, entre x=1 y x=3, es 8.

## Verificar una integral: derivar el resultado

Para comprobar que ∫f(x)dx = F(x)+C está bien calculada, se deriva F(x)
y tiene que dar exactamente f(x) — el mismo tipo de verificación
"deshacer para comprobar" ya usado en otros temas.

## Errores comunes

- Restar 1 al exponente (como en derivar) en vez de **sumar** 1.
- Olvidarse de dividir por el nuevo exponente después de sumarlo.
- Olvidar la constante "+C" en una integral indefinida.
- En la integral definida, calcular F(a) − F(b) en vez de F(b) − F(a)
  (invertir el orden cambia el signo del resultado).
