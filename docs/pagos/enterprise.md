# Pagos enterprise — gateado hasta tener persistencia (Fase 4.7)

## Estado
**Deshabilitado por default.** `POST /api/payments/initiate` está gateado
detrás del flag `ENABLE_ENTERPRISE_PAYMENTS` (default `false`). Con el flag
apagado el endpoint responde **501** con un mensaje claro.

## Por qué

`api/src/lib/payments/index.ts` construye `Invoice`/`Receipt` pero **no los
persiste**: no existe un modelo Prisma para ellos (`createInvoice`,
`updateInvoiceStatus` y `createReceiptForInvoice` solo logean y devuelven el
objeto). Exponer `initiate` así permitiría **iniciar un cobro que no queda
registrado** → riesgo de cobrar sin rastro ni forma de conciliar.

Hasta resolver la persistencia, gatear es más seguro que implementar el modelo
a medias.

## Cómo habilitarlo (cuando exista persistencia)

1. Agregar modelos Prisma `Invoice` y `Receipt` (o reutilizar
   `enterpriseContrato`/`enterpriseReporte` con un esquema definido).
2. Implementar de verdad `createInvoice` / `updateInvoiceStatus` /
   `createReceiptForInvoice` contra esos modelos.
3. Setear `ENABLE_ENTERPRISE_PAYMENTS=true` en el entorno.

> Nota: el webhook `POST /api/payments/webhook` y `GET /api/enterprise/payments`
> ya leen/escriben sobre `enterpriseContrato`/`enterpriseReporte`; el gate
> aplica solo a **iniciar** un cobro nuevo (`initiate`).
