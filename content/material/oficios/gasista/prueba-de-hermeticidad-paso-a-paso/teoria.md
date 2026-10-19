# Oficios — Gasista — Prueba de hermeticidad paso a paso (teoria)

> Tema del MAPA: `OF6.prueba-de-hermeticidad-paso-a-paso` (hoy un apartado de `herramientas-gasista/`, propuesto como lección propia en `../../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`). Depende de `herramientas-gasista/` (ver `../dependencias.md`). Lección informativa — la evaluación del oficio se concentra en `diagnostico-gasista-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Aviso previo

Esta lección explica la **lógica** de una prueba de hermeticidad, para entender por qué existe y cómo se razona. **No reemplaza el procedimiento de la norma vigente ni habilita a realizarla**: las presiones, tiempos y criterios de aprobación los fija la norma técnica del ente regulador, y la prueba la hace únicamente un gasista matriculado. Aquí no se citan valores numéricos a propósito.

## Para qué sirve

La **prueba de hermeticidad** (o de estanqueidad) verifica que la cañería de gas **no tiene fugas** antes de ponerla en servicio. Cada unión, cada rosca, cada accesorio es un punto potencial de pérdida; una fuga minúscula, sostenida durante horas en un lugar cerrado, puede acumular gas hasta niveles peligrosos. La prueba se hace **antes de conectar el servicio** y también ante modificaciones o reparaciones.

## El principio: presurizar y observar

La idea es simple. Se **aísla** el tramo de cañería a probar, se lo **llena con un fluido a una presión determinada** y se observa si esa presión **se mantiene** durante un tiempo. Si baja, hay una fuga. Pero hay varios cuidados que separan una prueba confiable de una prueba engañosa:

- **El fluido de prueba**: se usa aire o un gas inerte, **nunca oxígeno** (que con aceites o grasas puede provocar una combustión violenta) ni gas combustible para presurizar una instalación nueva.
- **La presión y el tiempo**: no son arbitrarios; los define la norma según el tipo de instalación. Probar con menos presión o menos tiempo del exigido puede dejar pasar fugas.
- **La estabilización**: al inyectar aire, la temperatura de la cañería cambia y eso hace variar la presión. Por eso se espera un tiempo antes de comenzar a medir, para que la lectura no mienta.
- **El instrumento**: se usa un manómetro apropiado, en buen estado y con la escala adecuada. Un manómetro mal calibrado o con una escala demasiado grande no muestra caídas pequeñas.

## Pasos generales (sin valores)

1. **Preparar**: verificar que todos los tramos estén terminados y accesibles, que las uniones estén visibles (sin cubrir) y que no haya artefactos conectados si la norma así lo indica; **tapar o cerrar** las salidas con tapones adecuados.
2. **Aislar el tramo**: cerrar las llaves de paso que corresponda.
3. **Conectar el manómetro** y la fuente de presurización en un punto accesible.
4. **Presurizar** hasta el valor que establece la norma, de manera gradual.
5. **Esperar la estabilización** del sistema.
6. **Observar** el manómetro durante el tiempo exigido y anotar las lecturas.
7. **Aprobar o corregir**: si la presión se mantiene dentro del criterio de la norma, la prueba está aprobada; si cae, hay que localizar y corregir la fuga y repetir la prueba completa.
8. **Registrar** la prueba: fecha, presión, tiempo, resultado y quién la realizó.
9. **Despresurizar** con cuidado y reponer el sistema.

## Cómo se localiza una fuga

Cuando la presión baja, se recorre la instalación **aplicando agua jabonosa o un líquido espumante específico** en uniones y roscas con la cañería presurizada: donde se forman burbujas, hay fuga. Es un método sencillo y seguro. En cambio, **jamás se busca una fuga con una llama** (un fósforo o un encendedor), porque si hay gas, se produce una explosión o un incendio.

## Errores frecuentes

- Probar con la cañería tapada, sin posibilidad de revisar las uniones.
- No esperar la estabilización y aprobar o rechazar con una lectura inestable.
- Usar un manómetro inadecuado.
- Probar con el artefacto conectado cuando la norma lo prohíbe, y dañarlo.
- No documentar la prueba.
- Dar por aprobada una prueba que "bajó un poquito".

## Y al habilitar el servicio

Aun con la prueba de hermeticidad aprobada, al **habilitar el servicio** se controla la ausencia de fugas con el gas en la instalación, siguiendo el procedimiento que corresponda (con detectores o con solución espumante), antes de poner artefactos en funcionamiento (ver `artefactos-a-gas-instalacion-y-puesta-en-marcha/`).

**Sobre este material**: es informativo. Los valores y el procedimiento exigible están en la norma técnica vigente del ente regulador; la prueba solo puede realizarla un instalador matriculado.
