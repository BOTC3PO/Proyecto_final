# Matemática — Ecuación cuadrática (teoría)

> Tema del MAPA: `A7` (Tronco 2 — Algebraico). Depende de
> `../polinomios-factoreo/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (forma general, fórmula
resolvente, discriminante, resolver por factoreo, relaciones entre
raíces, errores comunes).

---

## Forma general

Una **ecuación cuadrática** (o de segundo grado) tiene la forma
ax² + bx + c = 0, con a ≠ 0 (si a fuera 0, dejaría de ser cuadrática).
A diferencia de una ecuación de primer grado, puede tener **dos**
soluciones (también llamadas raíces).

## La fórmula resolvente

```
x = (−b ± √(b² − 4ac)) / (2a)
```

El símbolo ± significa que hay que calcular **dos** valores: uno sumando
la raíz cuadrada, otro restándola.

```
x₁ = (−b + √(b² − 4ac)) / (2a)
x₂ = (−b − √(b² − 4ac)) / (2a)
```

## El discriminante

La parte de adentro de la raíz, Δ = b² − 4ac, se llama **discriminante**,
y determina cuántas soluciones **reales** tiene la ecuación:

- **Δ > 0**: dos soluciones reales distintas.
- **Δ = 0**: una única solución (una "raíz doble" — x₁ y x₂ coinciden).
- **Δ < 0**: no hay soluciones reales (la raíz cuadrada de un número
  negativo no es un número real — ver `../numeros-complejos/`, donde sí
  existe solución).

## Resolver por factoreo

Cuando el trinomio se puede factorear a ojo (ver
`../polinomios-factoreo/`) como a(x − r₁)(x − r₂), las raíces son
directamente r₁ y r₂ — un producto da 0 sólo si alguno de sus factores da
0. Es más rápido que la fórmula cuando el factoreo es fácil de ver.

## Relaciones entre las raíces (suma y producto)

Sin necesidad de calcular las raíces, se puede saber:

- **Suma de las raíces**: x₁ + x₂ = −b/a
- **Producto de las raíces**: x₁ × x₂ = c/a

Sirven como **verificación rápida** después de resolver: si las raíces
encontradas no cumplen estas dos relaciones, hay un error en alguna
cuenta.

## Ejemplo resuelto

**x² − 5x + 6 = 0**

Con la fórmula: a=1, b=−5, c=6. Δ = 25 − 24 = 1.
x = (5 ± 1) / 2 → x₁ = 3, x₂ = 2.

Verificación: suma = 3+2 = 5 = −(−5)/1 ✓. Producto = 3×2 = 6 = 6/1 ✓.

También se podía resolver por factoreo directo: x²−5x+6 = (x−3)(x−2).

## Errores comunes

- Olvidarse del ± y dar sólo una solución.
- Error de signo en −b (si b es negativo, −b es positivo, y viceversa).
- Dividir sólo el numerador de un lado por 2a, en vez de todo
  (−b ± √Δ) entero.
- Calcular mal el discriminante: confundir b² − 4ac con b² + 4ac, o con
  (b−4ac)².
- Decir "no tiene solución" cuando Δ<0, sin aclarar que es "no tiene
  solución **real**" — sí tiene solución compleja.
