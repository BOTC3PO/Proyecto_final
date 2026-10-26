# Economía — Estados contables: patrimonio y ciclo contable completo (teoria)

> Tema del MAPA: `E20D` (Tronco 1 — Numérico). Depende de
> `../libro-diario-mayor/` (ver `../dependencias.md`). Cierre de la
> sub-rama de Contabilidad (`E20`-`E20D`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — el recorrido completo, desde que ocurre un
movimiento económico hasta que aparece en los estados contables
finales de la empresa.

---

## El ciclo contable completo: de un movimiento a un estado contable

Ya se vio cada pieza por separado: un movimiento se registra como
[asiento de partida doble](../partida-doble/teoria.md), se anota en el
[Libro Diario y se pasa al Libro Mayor](../libro-diario-mayor/teoria.md).
El **ciclo contable** es la secuencia completa que conecta todas esas
piezas, un paso detrás del otro, hasta llegar a los **estados
contables** — los documentos finales que resumen la situación de la
empresa.

1. **Ocurre el hecho económico** (una venta, un pago, un préstamo).
2. **Asiento en el Libro Diario**, respetando partida doble (Debe =
   Haber).
3. **Pasaje al Libro Mayor**: cada línea del asiento va a la hoja de su
   cuenta.
4. **Balance de comprobación**: se suman todos los saldos deudores y
   todos los saldos acreedores del Mayor, para verificar que sigan
   siendo iguales entre sí — si no coinciden, hay un error de carga en
   algún asiento.
5. **Ajustes de cierre**: correcciones que no vienen de un movimiento
   nuevo sino de reconocer algo que ya pasó pero no se había registrado
   (por ejemplo, la depreciación del uso de una máquina durante el
   período).
6. **Estados contables**: con los saldos ya ajustados, se arman los dos
   documentos finales.
7. **Cierre del ejercicio**: las cuentas de Ingresos y Gastos se
   "cierran" (vuelven a cero) y su resultado neto pasa a formar parte
   del Patrimonio Neto, para arrancar el próximo período de cero en
   esas cuentas.

## Los dos estados contables principales

### Estado de Situación Patrimonial (el "Patrimonio")

Es una **foto en un instante**: qué tiene y qué debe la empresa en una
fecha puntual (por ejemplo, el 31 de diciembre). Se arma con la misma
ecuación contable ya vista en
[debe y haber](../debe-haber-balance/teoria.md):

```
Activo = Pasivo + Patrimonio Neto
```

- **Activo**: todo lo que la empresa tiene (Caja, Mercadería, Muebles,
  cuentas por cobrar...).
- **Pasivo**: todo lo que la empresa debe a terceros (préstamos,
  proveedores por pagar...).
- **Patrimonio Neto**: lo que le queda a los dueños después de pagar
  todo el Pasivo (Activo menos Pasivo) — incluye el capital aportado
  originalmente más las ganancias acumuladas que nunca se retiraron.

### Estado de Resultados (la "película" del período)

Mientras el Patrimonio es una foto de un instante, el **Estado de
Resultados** es una película: resume **todo lo que ganó y gastó** la
empresa durante un período completo (un mes, un año), no en un momento
puntual.

```
Resultado = Ingresos - Gastos
```

- Si **Ingresos > Gastos**: **ganancia** (resultado positivo).
- Si **Gastos > Ingresos**: **pérdida** (resultado negativo).

Este resultado del período es, justamente, lo que se suma (o resta) al
Patrimonio Neto en el paso de cierre: una empresa que gana, aumenta su
patrimonio; una que pierde, lo reduce.

> Nota de alcance: el Estado de Resultados en detalle (sus líneas
> propias — Ventas, Costo de Mercadería Vendida, Gastos de
> Administración...) es contenido propio de Administración
> (`ADM6["Estado de resultados"]` en `troncos.md`), una materia que
> todavía no tiene carpeta en este repo. Acá se usa sólo la fórmula
> mínima (Ingresos - Gastos) necesaria para entender de dónde sale el
> número que conecta con el Patrimonio Neto.

## Por qué "patrimonio" y "ciclo contable" son un solo tema

El ciclo contable completo (pasos 1 a 7) **es el proceso**; el
Patrimonio (y el Estado de Resultados) **es el producto** de ese
proceso. No son dos habilidades separadas: entender el ciclo completo
es, exactamente, entender de dónde sale cada número que aparece en los
estados contables finales.

## Dónde aparece en la vida real

- Un banco pide el **Estado de Situación Patrimonial** de una empresa
  para evaluar si le da un crédito: quiere saber qué tiene y qué debe
  hoy.
- Un inversor pide el **Estado de Resultados** de los últimos años para
  saber si la empresa gana o pierde plata de forma sostenida.
- Un contador arma el **balance de comprobación** cada cierre de mes
  para detectar errores de carga antes de que se acumulen.
