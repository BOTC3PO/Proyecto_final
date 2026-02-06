# Política de mora y acceso ENTERPRISE

## Objetivo

La plataforma marca automáticamente el estado de suscripción en `escuelas.subscriptionStatus` según
facturas impagas. Esto controla el nivel de acceso (`active`, `read_only`, `disabled`) aplicado a
las funcionalidades ENTERPRISE y a los endpoints críticos del API.

## Plazos y transición de estado

Se toma la **factura impaga más antigua** por escuela (estado `PENDING` o `FAILED`) y se calcula
cuántos días han pasado desde su emisión:

- **0 a 6 días**: `ACTIVE` (sin restricciones adicionales).
- **7 días o más**: `PAST_DUE` (modo **solo lectura**).
- **30 días o más**: `SUSPENDED` (funcionalidades ENTERPRISE bloqueadas).

> El job de mora se ejecuta de forma periódica. Los umbrales se pueden ajustar mediante
> `BILLING_PAST_DUE_DAYS` y `BILLING_SUSPEND_DAYS`.

## Comportamiento por nivel de acceso

### `PAST_DUE` → `read_only`

Se permite consultar información, pero **no** se permiten escrituras en endpoints críticos
(`POST`, `PUT`, `PATCH`, `DELETE`). En la práctica:

- ✅ Lectura de panel, aulas, reportes, miembros, módulos, mensajes y contratos.
- ❌ Creación o edición de aulas, usuarios, módulos, publicaciones, economía, quizzes, recursos y reportes.
- ✅ Se mantiene disponible la iniciación de pagos para regularizar la cuenta.

### `SUSPENDED` / `INACTIVE` → `disabled`

Se bloquean completamente las funcionalidades ENTERPRISE (cualquier método HTTP) y se mantienen
los bloqueos de escritura:

- ❌ Acceso a endpoints con `requireEnterpriseFeature` (panel, miembros, módulos, reportes, mensajes, contratos, etc.).
- ❌ Escrituras en recursos críticos.
- ✅ Lectura de contenido existente y flujo de pagos para reactivar la cuenta.

## Operación del job de mora

El proceso de mora:

1. Agrupa facturas impagas por `schoolId`.
2. Calcula la antigüedad de la factura impaga más antigua.
3. Actualiza `escuelas.subscriptionStatus` a `ACTIVE`, `PAST_DUE` o `SUSPENDED`.
4. Si todas las facturas están pagadas, retorna la escuela a `ACTIVE`.
