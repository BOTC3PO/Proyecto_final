# Dibujo técnico — Dibujo eléctrico y esquemas de instalaciones (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/dibujo-electrico-y-esquemas-de-instalaciones`. Depende de `../tipos-de-linea-formatos-y-rotulo/` y `../../electronica/circuitos-y-leyes-de-kirchhoff/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se representan circuitos e instalaciones eléctricas con símbolos normalizados.

---

## 1. Un lenguaje de símbolos

En los planos eléctricos no se dibuja la forma real de los componentes sino **símbolos**: figuras simples y normalizadas que representan una lámpara, un interruptor, un tomacorriente, un motor o una resistencia. Con símbolos y líneas se arma un **esquema** que muestra cómo se conecta todo. Los símbolos se definen en normas internacionales (IEC) y nacionales; en las instalaciones de inmuebles en la Argentina, la referencia técnica es la reglamentación de la Asociación Electrotécnica Argentina (AEA). Hay que consultar siempre la edición vigente y la simbología que use la empresa o el plano.

## 2. Tipos de esquema

- **Esquema unifilar**: representa un circuito polifásico o un tablero con **una sola línea** por conjunto de conductores, con trazos pequeños que indican cuántos son. Es el esquema de las instalaciones: muestra tablero, protecciones (llaves termomagnéticas, interruptores diferenciales), alimentación y circuitos. Es compacto y claro.
- **Esquema multifilar** (o desarrollado): dibuja **cada conductor**. Se usa cuando importa la conexión exacta de cada cable, como en circuitos de mando de motores.
- **Esquema topográfico (de ubicación)**: muestra la posición real de los elementos en el espacio, sobre la planta de un edificio.
- **Esquema funcional**: explica cómo opera el circuito de mando, ordenando los elementos para facilitar la comprensión más que su ubicación física.

## 3. Símbolos frecuentes

Fuentes y alimentación, conductores y su cruce con o sin conexión (un punto indica una conexión), interruptores y pulsadores, lámparas, tomacorrientes, fusibles y protecciones, transformadores, motores, resistencias, capacitores, diodos y puesta a tierra. En los planos de viviendas, los símbolos se colocan sobre la planta arquitectónica (`dibujo-arquitectonico-plantas-cortes-y-fachadas/`) en la posición de cada punto de luz, tomacorriente y tablero, y con líneas que unen los puntos con los circuitos.

## 4. Cómo se lee un esquema

1. Ubicar la **fuente** o el tablero de origen.
2. Seguir el recorrido de cada circuito, identificando sus protecciones.
3. Reconocer cada símbolo y su designación (por ejemplo, Q1 para una llave, M1 para un motor, F1 para un fusible).
4. Interpretar las **secciones de los conductores** y la capacidad de las protecciones, anotadas junto al circuito.
5. Verificar las conexiones a tierra.

Una pregunta clave es: ¿qué protege a qué, y qué pasa si falla este elemento? (`circuitos-y-leyes-de-kirchhoff/`).

## 5. Reglas de dibujo

Las conexiones se trazan con líneas rectas, horizontales y verticales, evitando cruces innecesarios. Los cruces sin conexión no llevan punto. Los componentes se identifican con letras y números. Y el esquema se ordena de modo que la energía fluya de izquierda a derecha o de arriba hacia abajo. Las líneas siguen la jerarquía normalizada (`tipos-de-linea-formatos-y-rotulo/`), y el rótulo identifica el proyecto y la revisión.

## 6. Seguridad

Un esquema es una herramienta para trabajar con seguridad: permite entender qué circuito se interviene antes de tocar. Pero un esquema por sí solo no reemplaza el procedimiento de corte y verificación de ausencia de tensión. Las instalaciones eléctricas las debe realizar y firmar personal matriculado, según la normativa vigente.

## N. Conexión con lo que sigue

Este tema conecta con la lectura de planos eléctricos del oficio (`oficios/electricista/lectura-de-planos-electricos/`) y con los circuitos de Electrónica y Física.
