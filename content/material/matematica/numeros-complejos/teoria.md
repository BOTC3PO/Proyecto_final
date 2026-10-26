# Matemática — Números complejos: unidad imaginaria y operaciones (teoría)

> Tema del MAPA: `A15` (Tronco 2 — Algebraico). Depende de
> `../ecuacion-cuadratica/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (por qué hace falta i,
operaciones, potencias de i, conjugado y división, errores comunes).

---

## Por qué hace falta la unidad imaginaria

En `../ecuacion-cuadratica/`, cuando el discriminante Δ es negativo, la
fórmula pide calcular √Δ con Δ<0 — y ningún número real, elevado al
cuadrado, da negativo. En vez de decir "no tiene solución" y quedarse
ahí, se define un número nuevo:

```
i = √(−1),  o sea,  i² = −1
```

Con esa única definición nueva, cualquier raíz de un número negativo
tiene sentido: √(−9) = √(9×(−1)) = √9 × √(−1) = 3i.

## Qué es un número complejo

Un número complejo se escribe **a + bi**, donde a es la **parte real** y
b es la **parte imaginaria** (ambos números reales comunes). Los números
reales de siempre son el caso particular b=0.

## Suma y resta

Se suman (o restan) las partes reales entre sí, y las partes imaginarias
entre sí — igual que combinar términos semejantes:

```
(a + bi) + (c + di) = (a+c) + (b+d)i
(a + bi) − (c + di) = (a−c) + (b−d)i
```

## Multiplicación

Se aplica la propiedad distributiva, y se usa i² = −1 para simplificar:

```
(a + bi)(c + di) = ac + adi + bci + bdi²
                 = ac + adi + bci − bd     (porque i² = −1)
                 = (ac − bd) + (ad + bc)i
```

## Potencias de i (patrón cíclico)

```
i⁰ = 1
i¹ = i
i² = −1
i³ = i²×i = −i
i⁴ = i²×i² = (−1)×(−1) = 1   (vuelve a empezar)
```

El patrón se repite cada 4 potencias: para calcular iⁿ con n grande,
alcanza con mirar el resto de n dividido por 4.

## El conjugado y la división

El **conjugado** de a+bi es a−bi (mismo real, imaginaria con el signo
cambiado). Multiplicar un complejo por su conjugado siempre da un número
**real**: (a+bi)(a−bi) = a² + b² (porque el término cruzado se cancela y
−bd se convierte en −b(−b)=b² con d=−b).

Para dividir dos complejos, se multiplica arriba y abajo por el
conjugado del denominador, para que el denominador quede real:

```
(a+bi) / (c+di) = [(a+bi)(c−di)] / [(c+di)(c−di)] = [(a+bi)(c−di)] / (c²+d²)
```

## Ejemplo resuelto

**(3 + 2i) × (1 − 4i)**
= 3×1 + 3×(−4i) + 2i×1 + 2i×(−4i)
= 3 − 12i + 2i − 8i²
= 3 − 10i − 8(−1)
= 3 − 10i + 8
= **11 − 10i**

## Errores comunes

- Tratar i como una letra cualquiera y no reemplazar i² por −1 al
  simplificar.
- Confundir i² = −1 con i² = 1 (error de signo, muy común).
- Al dividir, olvidarse de multiplicar tanto el numerador como el
  denominador por el conjugado (sólo uno de los dos no sirve).
- Perder el patrón cíclico de las potencias de i y calcular i²⁰ como si
  fuera simplemente "un número muy grande" en vez de usar el resto al
  dividir por 4.
