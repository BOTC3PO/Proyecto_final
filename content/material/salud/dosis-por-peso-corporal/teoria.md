# Salud — Dosis por peso corporal (teoria)

> Tema del MAPA: `S2`. Depende de `../biologia/sistemas-cuerpo-humano/`
> (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — por qué la dosis depende del peso + cálculo directo.

---

## 1. Por qué un medicamento no tiene una dosis fija para todos

Muchos medicamentos (sobre todo en pediatría, pero también en adultos
según el caso) se dosifican **por kilogramo de peso corporal**, no con
una cantidad fija para cualquier persona. La razón: el cuerpo procesa
el medicamento en relación a su tamaño — una dosis pensada para un
adulto de 80 kg puede ser peligrosamente alta para un niño de 20 kg
si se administra igual, sin ajustar.

## 2. La fórmula

```
Dosis total = dosis por kg × peso de la persona (kg)
```

Ejemplo: un medicamento se indica a razón de 10 mg por cada kg de
peso. Para una persona de 25 kg:

```
Dosis total = 10 mg/kg × 25 kg = 250 mg
```

**Es la misma idea de proporcionalidad** ya vista en Matemática
(`../../matematica/proporcion/`, `../../matematica/regla-de-tres-directa/`):
a más peso, más dosis, en una relación directa y constante — el
"precio por kilo" aplicado a medicina en vez de a compras.

## 3. Por qué importa hacerlo bien

Un error en este cálculo tiene consecuencias reales:

- **Subdosificación**: el medicamento no alcanza para hacer efecto —
  la infección o el problema no se trata bien.
- **Sobredosificación**: puede causar efectos adversos serios,
  incluso graves, especialmente en niños/as donde el margen de
  seguridad suele ser más chico.

Por eso el cálculo de dosis por peso, aunque matemáticamente simple
(una multiplicación), se hace siempre con cuidado y verificación —
nunca "a ojo".

## 4. Otros contextos donde aparece la dosis por peso

No es exclusivo de medicamentos — la misma lógica aparece en:

- Anestesia (dosis calculada por kg antes de una cirugía).
- Suplementos y vitaminas para bebés/niños.
- Dosis veterinarias (medicamentos para mascotas, ajustados al peso
  del animal).

## 5. Conexión con lo que ya se vio

Este tema es un ejemplo más de aplicar proporcionalidad matemática a
un contexto de salud real — la misma estructura que aparece en el
Índice de Pearl (`../../esi/indice-de-pearl/`) o el IMC
(`../../../ed-fisica/imc-indice-masa-corporal/`): una fórmula simple,
pero con consecuencias reales si se aplica mal.
