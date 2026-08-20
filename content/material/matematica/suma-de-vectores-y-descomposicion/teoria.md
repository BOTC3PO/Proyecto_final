# Matemática — Suma de vectores y descomposición (teoría)

> Tema del MAPA: `M9` (Tronco 3.b — Geometría analítica, trigonometría y
> vectores). Depende de `../vectores-modulo-y-direccion/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias operaciones distintas (suma, resta,
multiplicación por escalar, descomposición) mejor separadas en
diapositivas.

---

## Sumar vectores por componentes

La forma más directa de sumar dos vectores es sumando sus componentes
por separado:

```
(x₁, y₁) + (x₂, y₂) = (x₁ + x₂, y₁ + y₂)
```

Cada componente se suma con su análoga — la componente x del resultado
sale de sumar las dos componentes x, y lo mismo con la y.

## Restar vectores

Restar es exactamente igual, componente a componente:

```
(x₁, y₁) − (x₂, y₂) = (x₁ − x₂, y₁ − y₂)
```

## Multiplicar un vector por un escalar

Multiplicar un vector por un número (un **escalar**) `k` multiplica cada
componente por ese número:

```
k × (x, y) = (kx, ky)
```

- Si `k > 1`: el vector se **alarga**, sin cambiar de dirección.
- Si `0 < k < 1`: el vector se **acorta**.
- Si `k` es **negativo**: el vector cambia de dirección (queda apuntando
  exactamente al lado opuesto, 180° girado) — el caso `k = −1` da el
  **vector opuesto**, con el mismo módulo pero dirección contraria.

Es la misma lógica de la homotecia
(`../transformaciones-geometricas/homotecia/`), aplicada a vectores en
vez de a figuras completas.

## El método gráfico: unir "punta con cola"

Gráficamente, para sumar dos vectores se dibuja el segundo empezando
justo donde termina el primero (la "punta" del primero se une con la
"cola" del segundo); el vector suma resultante va desde el origen del
primero hasta el extremo del segundo. Da exactamente el mismo resultado
que sumar por componentes — el método gráfico es útil para visualizar,
pero el método por componentes es más preciso para calcular.

## Descomponer un vector en sus componentes

**Descomponer** un vector es el proceso inverso: dado su módulo `|v|` y
su dirección `θ`, hallar sus componentes horizontal y vertical (ya
adelantado en `../vectores-modulo-y-direccion/`):

```
x = |v| × cos(θ)
y = |v| × sen(θ)
```

## Por qué se descompone antes de sumar

Cuando dos o más vectores **no** están alineados con los ejes (por
ejemplo, dos fuerzas que empujan en direcciones distintas, ninguna
puramente horizontal ni vertical), la forma práctica de sumarlos es:

1. **Descomponer** cada vector en sus componentes x e y.
2. **Sumar** todas las componentes x entre sí, y todas las componentes
   y entre sí, por separado.
3. El resultado `(x_total, y_total)` son las componentes del vector
   suma; su **módulo** se calcula con Pitágoras, como siempre.

## Para qué sirve

Sumar y descomponer vectores es la base de la dinámica: cuando varias
fuerzas actúan sobre un mismo objeto en direcciones distintas, hay que
descomponer cada una y sumar las componentes para saber el efecto neto
— el paso que conecta directamente con las leyes de Newton en Física.
