# Química — Equilibrio de solubilidad: Ksp (teoria)

> Tema del MAPA: `QKSP`. Depende de `./equilibrio-quimico-kc/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Texto** — Ksp es un caso particular de Kc, se apoya directo en el
concepto ya construido.

---

## 1. Ksp es un Kc especial

Cuando una sal poco soluble se disuelve en agua hasta el máximo que
puede disolverse (**solución saturada**), se establece un equilibrio
entre el sólido que no se disolvió y los iones disueltos:

```
AB (sólido) ⇌ A⁺ (ac) + B⁻ (ac)
```

Como el sólido puro no entra en la expresión de la constante (ver
`../equilibrio-quimico-kc/`), la constante de este equilibrio particular
se llama **Ksp** (product de **s**olubilidad):

```
Ksp = [A⁺] × [B⁻]
```

## 2. Con coeficientes distintos de 1

Para `AB₂ (sólido) ⇌ A²⁺ (ac) + 2 B⁻ (ac)`:

```
Ksp = [A²⁺] × [B⁻]²
```

(mismo patrón que Kc: cada concentración elevada a su coeficiente).

## 3. Relación entre Ksp y la solubilidad molar (s)

Si se llama `s` a la solubilidad molar (moles de sal que se disuelven
por litro), y la sal se disocia en `AB → A⁺ + B⁻` (1:1), entonces
`[A⁺] = [B⁻] = s`:

```
Ksp = s × s = s²        →   s = √Ksp
```

Para `AB₂ → A²⁺ + 2B⁻`: si se disuelven `s` moles de AB₂, aparecen `s`
moles de A²⁺ pero `2s` moles de B⁻ (el doble, por la estequiometría):

```
Ksp = s × (2s)² = 4s³
```

## 4. Interpretación: Ksp chico = sal poco soluble

Un Ksp muy chico (ej.: 10⁻¹⁰) significa que casi nada de sal se disuelve
antes de saturar la solución — la mayor parte queda como sólido. Un Ksp
más grande significa que se disuelve más antes de saturar.

## 5. Producto iónico (Q) vs. Ksp: ¿precipita o no?

Comparando el **producto iónico actual** (`Q`, con las concentraciones
que hay en un momento dado, no necesariamente en equilibrio) contra
`Ksp`:

- `Q < Ksp`: la solución **no está saturada**, no precipita (podría
  disolver más sal).
- `Q = Ksp`: solución **exactamente saturada**, en equilibrio.
- `Q > Ksp`: solución **sobresaturada** — el exceso **precipita** como
  sólido hasta que `Q` vuelve a igualar `Ksp`.
