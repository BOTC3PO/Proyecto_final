# Para confirmar: Automatización y Ciencia de Materiales (29 temas nuevos)

Los 29 temas (14 en `automatizacion/`, 15 en `materiales/`) se escribieron a partir del plan `tecnicas.md`. Cada uno tiene teoría, 22 a 25 preguntas VBLang y su fila en `dependencias.md`. **Todo está sin commitear por este agente.**

## Verificado por búsqueda web en esta tanda
- NAMUR NE43: rango normal de medición 3,8 a 20,5 mA; falla por debajo de 3,6 mA o por encima de 21 mA (confirmado en una tabla de MicroControl y en una guía de Texas Instruments; la norma original no se abrió).
- Categorías de parada 0, 1 y 2 (IEC 60204-1): confirmadas en manuales de fabricantes (Lenze, Universal Robots, wenglor, Kollmorgen), no en el texto de la norma.
- Ziegler-Nichols de lazo cerrado: PID con Kp = 0,6·Ku, Ti = Pu/2, Td = Pu/8; PI con Ti = Pu/1,2. Variante: algunas tablas usan Kp = Ku/1,7 (cerca de 0,59·Ku) y Ku/2,2 (cerca de 0,45·Ku) para PI.
- Ahorro de energía del aluminio reciclado: alrededor del 95 % (varias fuentes). Para el acero las fuentes no coinciden (por ejemplo 60 % de energía u 80 % de CO₂), por eso el tema no da una cifra.

## Sin verificar con fuente (escritos de memoria)
**Automatización**
- Modbus creado por Modicon en 1979; direcciones de esclavo de 1 a 247; RS-485 hasta alrededor de 1200 m.
- Descripción de GRAFCET (IEC 60848) y sus cinco reglas de evolución; equivalencia con SFC de la IEC 61131-3.
- TON, TOF, TP y contadores CTU, CTD y CTUD (comportamiento estándar de IEC 61131-3).
- ISO 13849-1: niveles PL de la a a la e y categorías B, 1, 2, 3 y 4. IEC 62061 / IEC 61508 y SIL.
- Corriente de arranque estrella-triángulo reducida a un tercio; velocidad sincrónica ns = 120·f/p.
- Ley o norma argentina de seguridad de máquinas: el tema no cita ninguna.
- Receta Z-N de curva de reacción: Kp = 1,2·τ/(K·L), Ti = 2L, Td = 0,5L.

**Ciencia de Materiales**
- Valores de coeficientes de dilatación, conductividades y resistividades (aproximados).
- Temperatura de Curie del hierro (unos 770 °C), vulcanización de Goodyear en 1839 y superconductividad de Onnes en 1911.
- Solubilidad máxima de carbono en ferrita (0,022 %) y en austenita (2,14 %); eutectoide 0,76 %; eutéctico 4,3 %.
- Códigos de reciclado de plásticos 1 a 7 y sus resinas.
- Mención de ASTM, ISO e IRAM sin números de norma (decisión: no citar números vigentes).
- Valor de Ef, Em, densidades y módulos usados en los ejercicios (valores ilustrativos).

## Decisiones tuyas o límites
- `redes-industriales-y-scada` depende de `informatica/protocolo-http-peticion-respuesta` por falta de un tema de redes general (el plan lo señalaba). ¿Se crea un tema de redes en Informática?
- Los temas de Electrónica de los que dependen algunos de Automatización (`electronica/logica-digital-puertas-and-or-not`, `electronica/sensores-y-actuadores`) existen hoy, pero otro agente está ampliando Electrónica.
- Los temas nuevos de Automatización repiten a nivel académico contenidos que hoy están en `oficios/tecnico-electromecanico` y `oficios/tecnico-en-automatizacion-y-robotica`. Esos oficios todavía no apuntan a estos temas como prerrequisito.
- `PLC` y `PID`: no se tocaron los oficios; solo se crearon temas académicos.
- Ninguno de los 29 temas tiene ID en el grafo de `troncos.md`; solo fila en `dependencias.md`.
- Las preguntas con cálculo usan valores ilustrativos: conviene una revisión de un docente de la materia.
