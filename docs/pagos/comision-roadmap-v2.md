# Modelo de comisión — estado actual y roadmap v2

> Fase 5.1. Documenta lo implementado (demostrable para la tesis) y lo que
> queda como trabajo futuro (split real con MercadoPago).

## Implementado (v1 — demostrable)

Modelo contable simple, suficiente para demostrar el flujo en vivo sin integrar
el split real de fondos:

- **`Escuela.modoGestion`** (`"centralizado" | "autogestionado"`) y
  **`Escuela.comisionPct`** (Float, % que retiene VB).
- **`TransaccionEscuela`**: asiento por cada cobro de una escuela
  autogestionada (`montoTotal`, `comisionVB`, `montoNeto`, `estado`,
  `mpPaymentId`). Lo crea `registrarTransaccionEscuela` (`api/src/lib/comisiones.ts`),
  invocado desde el webhook de suscripciones al acreditar (`status: authorized`).
- **`LiquidacionEscuela`**: liquidación periódica del saldo neto pendiente.
- **Rutas** (`api/src/routes/comisiones.ts`):
  - `GET /api/comisiones/escuela/:id/resumen` — panel de la escuela.
  - `POST /api/comisiones/escuela/:id/modo` — elegir modo + %.
  - `GET /api/comisiones/admin` — agregado por escuela (admin).
  - `POST /api/comisiones/admin/liquidar` — liquidar saldo pendiente.
  - `GET /api/comisiones/admin/export.csv` — export contable.
- **Paneles web**: `EnterpriseComisiones` (directivo) y `AdminComisiones` (admin).

En v1 **VB cobra el total** y registra contablemente la comisión y el neto a
liquidar; la liquidación a la escuela es **manual** (botón "Liquidar" + método).

## Roadmap v2 (NO implementado)

Split real de fondos con MercadoPago Marketplace:

1. **OAuth de MP**: cada escuela autogestionada conecta su cuenta de MP
   (`mercadopago.com/.../authorization`) y guardamos su `access_token` /
   `user_id` de vendedor.
2. **`marketplace_fee`**: al crear el pago/preferencia se cobra contra la cuenta
   de la escuela y se aplica `marketplace_fee = montoTotal * comisionPct`, de
   modo que MP **deposita el neto directo a la escuela** y la comisión a VB.
   Desaparece la liquidación manual.
3. **Liquidaciones automáticas**: conciliación con los reportes/settlements de MP.

### Nota legal (Argentina)

Retener fondos de terceros puede configurar la figura de **agente de cobro /
recaudación**, con implicancias impositivas (percepciones, IIBB, facturación de
la comisión como servicio). **Consultar con un contador** antes de operar el
split real. El modelo v1 evita esto porque VB factura el servicio y la
liquidación es un pago saliente documentado, no una retención automática.
