# Matemática — Familias de funciones: exponencial y logarítmica (teoría)

> Tema del MAPA: `A11` (Tronco 2 — Algebraico). Depende de
> `../funcion-cuadratica-parabola/`, `../funcion-dominio/` y
> `../funcion-imagen/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (función exponencial,
función logarítmica, cómo se relacionan entre sí, errores comunes).

---

## Función exponencial

f(x) = aˣ (con a > 0, a ≠ 1) es una **función exponencial**. A
diferencia de una potencia (donde la base es fija y el exponente
varía, tema de Tronco 1), acá la variable está en el **exponente**.

- **Dominio**: todos los reales (cualquier exponente tiene sentido).
- **Imagen**: y > 0 — una potencia con base positiva **nunca** da 0 ni
  negativo, sea cual sea el exponente.
- **Ordenada al origen**: f(0) = a⁰ = **1**, siempre, sin importar la
  base.
- **Asíntota horizontal**: y = 0 — la curva se acerca cada vez más al
  eje x sin tocarlo nunca (para x muy negativo, si a>1).
- Si **a > 1**: crecimiento exponencial (crece cada vez más rápido, no
  a un ritmo constante como una función lineal).
- Si **0 < a < 1**: decaimiento exponencial (decrece, acercándose a 0
  sin tocarlo nunca).

## Función logarítmica

f(x) = logₐ(x) es la función **inversa** de la exponencial de la misma
base (ver `../funcion-inversa-composicion/`).

- **Dominio**: x > 0 (no se puede sacar logaritmo de 0 ni de un
  negativo — mismo criterio que `../funcion-dominio/`).
- **Imagen**: todos los reales.
- f(1) = logₐ(1) = **0**, siempre, sin importar la base.
- **Asíntota vertical**: x = 0.

## La relación inversa

Exponencial y logarítmica **deshacen** la operación de la otra:

```
a^(logₐ x) = x
logₐ(aˣ) = x
```

Sus gráficos son reflejos uno del otro respecto a la recta y = x — el
dominio de una es la imagen de la otra, y viceversa (por eso el dominio
de log es x>0, que es exactamente la imagen de la exponencial).

## Ejemplo con base 10 (la más simple para calcular a mano)

f(x) = 10ˣ: f(0)=1, f(1)=10, f(2)=100, f(3)=1000...
g(x) = log₁₀(x): g(1)=0, g(10)=1, g(100)=2, g(1000)=3...

Son exactamente inversas: g(f(2)) = log₁₀(100) = 2. ✓

## Comparar crecimiento exponencial con lineal

Una función lineal crece **sumando siempre lo mismo** por cada paso; una
exponencial crece **multiplicando siempre por lo mismo** — por eso, a la
larga, cualquier exponencial con a>1 termina superando a cualquier
función lineal, sin importar cuán grande sea la pendiente de esta
última.

## Errores comunes

- Pensar que una función exponencial puede dar 0 o negativo — nunca, la
  imagen es siempre y>0.
- Confundir el dominio y la imagen de la exponencial con los de la
  logarítmica (se invierten exactamente entre sí).
- Tratar el crecimiento exponencial como si fuera lineal (sumar en vez
  de multiplicar por cada paso).
- Olvidar que f(0)=1 para CUALQUIER exponencial, y que f(1)=0 para
  CUALQUIER logaritmo — son puntos fijos que no dependen de la base.
