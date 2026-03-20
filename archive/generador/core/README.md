# Versionado de generadores

Los generadores expuestos a través de `GeneratorDescriptor` incluyen un `version` que se adjunta al output como
`generatorId` + `generatorVersion`. Esto permite que el backend regenere el mismo ejercicio incluso si la lógica
de generación evoluciona.

## ¿Cuándo incrementar la versión?

Incrementá `version` cuando cambie cualquiera de estos puntos:

- Algoritmo de aleatoriedad (nuevas distribuciones, rangos, PRNG).
- Formato del output (campos, orden, nombres, estructura).
- Reglas de corrección, distractores o explicación.
- Cualquier cambio que haga que el mismo seed produzca un ejercicio distinto.

## ¿Dónde actualizarla?

- **Matemáticas / Química / Economía / Basic:** actualizá la constante de versión en el registro correspondiente
  (`GENERADORES_*_DESCRIPTORES` o `GENERADORES_MATEMATICAS_POR_TEMA`).
- **Física:** actualizá la propiedad `version` en el generador (o en `BaseGenerator` si aplica a todos).

Luego, asegurate de persistir la nueva versión en los módulos/cuestionarios generados para que el backend pueda
regenerar con la versión correcta.
