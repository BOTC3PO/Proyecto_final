# Reembolsos — flujo manual (Fase 4.6)

## Estado
**Manual.** El reembolso NO se procesa automáticamente vía la API de
MercadoPago. La plataforma solo **registra la solicitud**; un administrador la
ejecuta a mano.

## Flujo actual

1. **Usuario** pide el reembolso desde su perfil
   (`POST /api/suscripciones/reembolso`), dentro de la ventana de **7 días**
   desde el último pago acreditado.
2. El backend valida la ventana y que no haya una solicitud previa, y marca la
   suscripción con `reembolsoSolicitado = 1` y `reembolsoAt = now`. **No** se
   llama a MercadoPago ni se modifica `historialPago`.
3. **Admin** ve las solicitudes pendientes en
   `GET /api/admin/suscripciones/reembolsos`.
4. El admin procesa el reembolso **manualmente** desde el panel de MercadoPago
   y, si corresponde, corta la renovación.

## Por qué manual (decisión de tesis)

Automatizar el refund implica manejar el ciclo de vida del pago en MP (montos
parciales, estados intermedios, idempotencia, conciliación con `historialPago`)
y un endpoint admin con permisos finos. Es un sprint propio; para el alcance
actual, el flujo manual es suficiente y evita errores de plata automatizados.

## Roadmap para automatizarlo

Cuando se decida automatizar:

1. **Cortar la renovación** de la suscripción con `cancelarPreapproval(id)`
   (ya existe en `api/src/lib/mercadopago.ts`).
2. **Refund del pago** vía la API de pagos de MercadoPago
   (`POST /v1/payments/{id}/refunds`), en un endpoint **solo admin**, usando el
   `mpPaymentId` guardado en `historialPago`.
3. **Registrar** el reembolso en `historialPago` (estado `reembolsado`) y
   actualizar la suscripción.
4. **Idempotencia**: usar `X-Idempotency-Key` por solicitud para no reembolsar
   dos veces ante reintentos.
