# Modelo de comisión, interés por mora y aportes voluntarios

Estado al 2026-10-28. Reemplaza al viejo «comision-roadmap-v2.md»: el split con Mercado Pago ya está implementado.

## Cómo se cobra

- La escuela conecta **su propia cuenta de Mercado Pago** por OAuth (`EscuelaPasarela`, `lib/mercadopago-oauth.ts`).
  La preferencia se crea con el token de la escuela y Mercado Pago separa la comisión de VB con `marketplace_fee`.
  VB no maneja la plata de la escuela.
- Cryptomus (pagos del exterior) solo se usa si el administrador lo habilita para esa escuela: ahí el dinero pasa por la
  cuenta de VB y se liquida a mano.
- Sin pasarela conectada, el pago queda como «manual» y lo confirma la dirección.
- Cada pago confirmado deja un asiento en `TransaccionEscuela` (total, comisión, neto) y el administrador registra las
  liquidaciones en `LiquidacionEscuela`.

## Comisión escalonada (`lib/comisiones.ts`)

| Regla | Valor por defecto |
|---|---|
| Base | 6 % |
| La cuota supera $100.000 | −1 punto |
| La escuela tiene 30 alumnos activos o más | −1 punto |
| La escuela tiene 350 alumnos activos o más | −1 punto |
| Mínimo (servicio de mantenimiento) | 3 % |
| Tope por cuota | $40.000 |
| Pagos internacionales (Cryptomus) | 1,5 % (1 a 2 %) |
| Cooperadora y aporte solidario | 0 a 1 %, lo elige la institución |

- Los parámetros los edita el administrador (`GET/PUT /api/comisiones/admin/config`, tabla `comision_config`).
- `Escuela.comisionPct` es un **acuerdo particular** que solo fija el administrador (3 a 7 %, con el mismo tope);
  vacío = escalonada. La escuela ve cómo se calcula, pero no lo puede cambiar.
- La comisión se calcula sobre la cuota **sin** el interés por mora: el interés es todo de la escuela.

## Interés por mora (`lib/mora.ts`)

- Lo configura la dirección de cada escuela (`GET/PUT /api/escuelas/:id/config-cobros`). Viene apagado.
- Tasa **mensual o anual**, a elección de la escuela. Por defecto 2 % mensual, apenas por encima de la inflación
  (1,8 % mensual en octubre de 2026).
- Tope de la plataforma (Términos y Condiciones, sección 6): **60 % anual o 2 veces la inflación anual, lo que sea
  mayor**; la tasa mensual equivalente es la anual dividida por 12. La inflación anual de referencia la carga el
  administrador junto con los parámetros de la comisión (24 % por defecto: tope de 60 % anual = 5 % mensual).
  La ley no fija un número para la mora de una cuota, pero un juez puede reducir intereses excesivos (Código
  Civil y Comercial, art. 771) y las cláusulas abusivas no valen (Ley 24.240, art. 37).
- Interés simple prorrateado por día de atraso, después de los días de gracia (0 a 60).
- Se calcula al leer la cuota (`GET /api/cuotas/mias`, que además la marca «vencida») y se congela en el `Pago` al
  iniciar el checkout (`montoOriginal`, `interesMora`, `montoBruto`). Si la familia vuelve otro día, el pago pendiente
  se actualiza al monto de ese día.

## Cooperadora y aportes solidarios

- Son otro tipo de cobro (`CobroEscuela.tipo`): `cooperadora` o `aporte_solidario`.
- Son voluntarios: no generan mora y no pueden condicionar la inscripción, el boletín ni el acceso del alumno.
- La escuela puede cargar el tope que fija la ley de su jurisdicción (`Escuela.topeAporteLegal`); un aporte mayor se
  rechaza.
- La **cooperadora** es una asociación aparte, con CUIT propio. La dirección la registra (al dar de alta la
  escuela o después, en Cobros) y el administrador la verifica (Escuelas → Cooperadoras por verificar). Verificada,
  conecta **su propia** cuenta de Mercado Pago (`?titular=cooperadora` en la autorización). Los cobros de tipo
  `cooperadora` van solo a esa cuenta (`escuelas_pasarelas.titular`); si no la conectó, el pago queda manual y
  nunca cae en la cuenta de la escuela. Cambiar el nombre o el CUIT la vuelve a dejar pendiente y desactiva su
  cuenta conectada.
- El aporte solidario es de la escuela (va a su cuenta).
