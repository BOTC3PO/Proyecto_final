# Salud — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Materia nueva, creada en esta sesión: el nodo `S2` de `troncos.md`
("Dosis por peso corporal", tag `(Salud)` en `lista-temas-plana.md`)
no es un caso suelto — mismo criterio que Geografía, Biología, ESI,
Ed. Física o Cívica: un tag de materia real implica carpeta propia.

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `dosis-por-peso-corporal/` | `../biologia/sistemas-cuerpo-humano/` | Nodo `S2` de `troncos.md` (`BK --> S2`). Calcular una dosis por kg de peso corporal presupone ya saber qué es el cuerpo y por qué el peso importa fisiológicamente; también reusa el vocabulario de proporcionalidad ya construido en Matemática (ver tabla de cruces de `troncos.md`: "Dosis por peso — Proporcionalidad — Matemáticas"). |
| `bullying-y-acoso-escolar/` | `../civica/derechos-nino/`, `../esi/cuidado-vinculo-grooming/` | Nodo propuesto en `../PLAN-REPARACIONES-TRONCOS.md` (hallazgo Salud y Adolescencia; sin ID en `troncos.md`). Deducida: el acoso escolar se entiende desde los derechos de niños/as y adolescentes y se conecta con el cuidado en los vínculos (también digitales). Ley 26.892 de convivencia escolar. |
| `discapacidad-y-educacion-inclusiva/` | `../civica/derechos-nino/` | Nodo propuesto en `../PLAN-REPARACIONES-TRONCOS.md`. Deducida: mandato legal (Convención sobre los Derechos de las Personas con Discapacidad, Ley 26.378) y derecho a la educación. |
| `trastornos-alimentarios/` | `../esi/anatomia-y-pubertad/`, `../psicologia/salud-mental-ansiedad-depresion-pedir-ayuda/` | Nodo SENSIBLE propuesto en `../PLAN-REPARACIONES-TRONCOS.md`. Deducida: cambios de la pubertad y pedido de ayuda. Diseño: sólo señales de alerta, mitos y cómo ayudar; nunca métodos, ni cifras de peso/calorías. Ley 26.396. |
| `prevencion-del-suicidio/` | `../psicologia/salud-mental-ansiedad-depresion-pedir-ayuda/` | Nodo SENSIBLE propuesto en `../PLAN-REPARACIONES-TRONCOS.md`. Deducida. Diseño: mensajes seguros (guías OMS), señales de alerta, cómo acompañar y dónde pedir ayuda (línea 135); nunca métodos. Ley 27.130. |
| `sueno-y-descanso/` | `../biologia/sistemas-cuerpo-humano/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). Deducida (decisión de Claude, no pedida): el sueño se entiende desde los sistemas del cuerpo. Información general, sin indicaciones médicas. |
| `alimentacion-saludable-y-etiquetado/` | `trastornos-alimentarios/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). Depende del tema de trastornos alimentarios para enmarcar el discurso sobre comida y cuerpo; enlaza con `../vida-cotidiana/etiqueta-*` y `seguridad-alimentaria`. Decisión de Claude, no pedida. Ley 27.642: plazos de aplicación a verificar en la normativa. |
| `consumos-problematicos/` | `../ed-fisica/prevencion-adicciones-ley-26586/`, `../ed-fisica/politicas-de-drogas/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). SENSIBLE: sin formas de consumo ni dosis. Amplía el marco de Ley 26.586 con Ley 26.934 (IACOP) y los consumos más frecuentes. Línea 141 SEDRONAR: verificar vigencia. Decisión de Claude, no pedida. |
| `primeros-auxilios-basicos/` | `../ed-fisica/primeros-auxilios-rcp-dea/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). Complementa RCP/DEA/atragantamiento/quemaduras/golpe de calor (ya en Educación Física) con heridas, hemorragias, fracturas, desmayo, convulsiones e intoxicaciones. Sin duplicar. No reemplaza un curso de primeros auxilios. |
| `actividad-fisica-y-salud/` | `../ed-fisica/fisiologia-del-ejercicio/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). Recomendaciones OMS (5-17 años: 60 min diarios; adultos: 150-300 min semanales). Mensaje centrado en salud, no en el cuerpo (cruza con `trastornos-alimentarios/`). Decisión de Claude, no pedida. |
| `vacunas-y-prevencion/` | `../biologia/sistemas-cuerpo-humano/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). Ley 27.491 y Calendario Nacional (cambia: remitir al vigente). Cruza con `../ciudadania-digital/verificacion-de-una-noticia/` por los mitos. Decisión de Claude, no pedida. |
