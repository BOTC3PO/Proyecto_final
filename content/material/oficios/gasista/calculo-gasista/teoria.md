# Oficios — Gasista — Cálculo de instalaciones de gas (teoria)

> Tema del MAPA: `OF6.calculo-gasista` (`troncos.md`). Depende de
> `instalaciones-gasista/` (ver `../dependencias.md`). Lección
> informativa — la evaluación del oficio se concentra en
> `diagnostico-gasista-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Dimensionar cañería por caudal de gas

Igual que en plomería, la cañería de gas se dimensiona según el
**caudal** que necesita transportar — en este caso, calculado a partir
de la potencia total (en kilocalorías o kilovatios) de todos los
artefactos que alimenta ese tramo, convertida a caudal de gas mediante
el poder calorífico del gas utilizado. Una cañería subdimensionada no
entrega el caudal necesario a los artefactos del extremo más alejado,
aunque la presión de origen sea correcta.

## Pérdida de carga en gas

Igual que el agua, el gas pierde presión a medida que recorre la
cañería, por la fricción contra las paredes del caño y por cada codo o
accesorio en el camino — es la **pérdida de carga**, aplicada acá al
gas en vez de al agua. Un tramo muy largo, con diámetro insuficiente o
muchos accesorios, puede hacer que un artefacto en el extremo final
reciba menos presión de la necesaria para funcionar correctamente,
incluso si el regulador de origen está bien calibrado.

## Selección de regulador

Elegir el **regulador** correcto para una instalación implica
considerar el caudal máximo que puede necesitar en conjunto (la
demanda simultánea de todos los artefactos, no la suma de sus máximos
individuales) y la presión de entrada disponible. Un regulador
subdimensionado no puede entregar el caudal necesario en el momento
de mayor demanda; uno sobredimensionado, en cambio, puede tener
dificultades para regular con precisión caudales bajos.

## Por qué estos cálculos se toman con más rigor que en otros oficios

El margen de error tolerable en el cálculo de una instalación de gas
es menor que en otros oficios: una instalación mal dimensionada no
sólo funciona peor —puede generar una combustión incompleta por falta
de gas suficiente en el quemador, con el riesgo de monóxido de carbono
que eso implica. Por eso el cálculo de gas se hace siempre con
márgenes de seguridad conservadores, nunca ajustando al límite exacto
de lo calculado.
