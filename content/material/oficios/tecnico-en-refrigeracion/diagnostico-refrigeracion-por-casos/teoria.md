# Oficios — Técnico en Refrigeración — Diagnóstico por casos (teoria)

> Tema del MAPA: `OF7.diagnostico-refrigeracion-por-casos`
> (`troncos.md`). Depende de `../instalaciones-refrigeracion/` (ver
> `../dependencias.md`). Cierre del oficio: acá se concentra la
> evaluación (`cuestionario.md`), a diferencia de las lecciones
> anteriores, que son informativas.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Por qué el diagnóstico combina dos mundos

Un equipo de refrigeración puede fallar por una causa termodinámica
(algo relacionado con el gas, la presión, el ciclo) o por una causa
eléctrica (el compresor, sus protecciones, su sistema de arranque) —
y muchos síntomas visibles desde afuera pueden tener origen en
cualquiera de los dos mundos. Saber en cuál de los dos buscar primero,
según el síntoma exacto, ahorra tiempo y desarmes innecesarios.

## Caso 1: el equipo no enfría en absoluto

Si el equipo enciende, el ventilador funciona, pero no hay ninguna
diferencia de temperatura, la sospecha principal recae en el
**compresor** (no está comprimiendo, por una falla eléctrica o
mecánica interna) o en una **pérdida total de gas refrigerante** (el
circuito está vacío, sin refrigerante que pueda completar el ciclo).
Medir la presión con los manómetros distingue rápido entre ambas: sin
gas, la presión medida será prácticamente nula; con gas pero sin
compresión, la presión mostrará un patrón distinto.

## Caso 2: el equipo enfría poco

Cuando el equipo sí enfría, pero menos de lo esperado, las causas más
comunes son una carga de gas insuficiente (una fuga parcial, no
total), un filtro de aire sucio que restringe el flujo sobre el
evaporador, o un condensador sucio que no puede liberar bien el calor
al ambiente exterior — en los tres casos el sistema sigue funcionando,
pero con una eficiencia reducida.

## Caso 3: se congela el evaporador

Cuando aparece hielo sobre el evaporador (en vez de simple
condensación de humedad), la causa más común es un **flujo de aire
insuficiente** sobre el evaporador (filtro obstruido, ventilador
fallando) combinado con una temperatura de evaporación demasiado baja
— el aire no logra "barrer" el frío generado a la velocidad
necesaria, y la humedad del ambiente se congela directamente sobre la
superficie fría en vez de sólo condensarse. También puede deberse a
una carga de gas incorrecta que altera la presión de evaporación
esperada.

## Caso 4: consumo eléctrico anormal

Un consumo eléctrico notablemente más alto de lo habitual, sin que el
equipo enfríe mejor por eso, suele indicar que el compresor está
forzando: trabajando contra una presión más alta de la normal (un
condensador sucio que no disipa bien el calor, por ejemplo) o con un
problema mecánico interno que le exige más energía para el mismo
trabajo útil. Es un síntoma que conviene atender rápido, porque un
compresor forzado de forma sostenida tiende a fallar antes de lo
esperado.

## El método, resumido

En los cuatro casos, el orden de diagnóstico es: primero, medir presión
y temperatura con los instrumentos correspondientes antes de suponer;
segundo, distinguir si la causa probable es termodinámica (gas,
presión, flujo de aire) o eléctrica (compresor, protecciones,
consumo); tercero, recordar que varias causas pueden combinarse — un
condensador sucio, por ejemplo, puede explicar a la vez que el equipo
enfríe poco Y que consuma de más, porque ambos síntomas vienen de la
misma causa raíz.
