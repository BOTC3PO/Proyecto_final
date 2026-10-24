# Automatizacion — Seguridad funcional y paradas de emergencia (teoría)

> Tema del MAPA: `automatizacion/seguridad-funcional-y-paradas-de-emergencia`. Depende de `plc-logica-de-control-industrial/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué es la seguridad funcional, cómo se diseña una parada de emergencia y qué dispositivos y normas intervienen.

---

## 1. Qué es la seguridad funcional

Las máquinas automáticas pueden lastimar: una prensa que baja, una cinta que arrastra, un robot que se mueve más rápido de lo que una persona reacciona. La **seguridad funcional** es la parte de la seguridad de una máquina que depende de que funcionen correctamente sus sistemas de control y protección. No se trata solo de poner una reja: se trata de que cuando algo falla, la máquina pase a un estado seguro.

Un principio básico: el sistema de seguridad debe suponer que las fallas pueden ocurrir (un cable que se corta, un contacto que se pega, un sensor que deja de responder). Tiene que estar diseñado para que esas fallas no produzcan un peligro.

## 2. La parada de emergencia

El dispositivo más conocido es el pulsador de **parada de emergencia**: un hongo rojo sobre fondo amarillo. Al apretarlo se traba mecánicamente en la posición pulsada, y soltarlo exige una acción deliberada (girarlo o tirar de él). Reglas esenciales:

- Debe ser fácil de alcanzar, visible y de acción directa.
- Al activarlo, la máquina se detiene y **no vuelve a arrancar sola** al liberarlo: hace falta una orden de rearme y de marcha.
- Se cablea con contactos normalmente cerrados, de modo que un cable cortado se interprete como una parada.
- No reemplaza a las protecciones: es una medida complementaria, no la forma normal de operar ni de proteger.

## 3. Categorías de parada

La norma de equipamiento eléctrico de máquinas (IEC 60204-1) distingue tres formas de parar:

- **Categoría 0**: corte inmediato de la energía a los actuadores. La parada no es controlada: la máquina se frena por inercia o por un freno mecánico.
- **Categoría 1**: parada controlada, con energía para frenar de forma ordenada, y recién al detenerse se corta la energía.
- **Categoría 2**: parada controlada que mantiene la energía en los actuadores (por ejemplo, para quedar en posición).

Para emergencias se usan las categorías 0 o 1. La elección depende del riesgo: a veces es más seguro frenar con control que cortar en seco.

## 4. Enlaces y protecciones

Además del pulsador, hay otros dispositivos:

- **Protecciones fijas y móviles** con interruptores de seguridad: si se abre una puerta, la máquina se detiene.
- **Cortinas de luz** y escáneres que detectan la presencia de una persona en la zona.
- **Mandos a dos manos**, que obligan a mantener ambas manos fuera de la zona de peligro.
- **Enclavamientos** que evitan secuencias peligrosas, como arrancar un motor mientras una puerta está abierta.

## 5. Relés y PLC de seguridad

Para las funciones críticas se usan **relés de seguridad** o **PLC de seguridad**, que verifican su propio funcionamiento, tienen contactos redundantes y se diseñan para detectar fallas internas. Un PLC común no alcanza para estas funciones: no está certificado para ello y puede fallar sin avisar. Los circuitos de seguridad suelen usar **redundancia** (dos canales) y **monitoreo** (verificar que ambos coincidan).

## 6. Normas y niveles de integridad

Dos marcos se usan para clasificar la confiabilidad que debe tener cada función de seguridad:

- **ISO 13849-1**: define el **nivel de desempeño (PL)**, de la "a" a la "e", y categorías de arquitectura (B, 1, 2, 3 y 4).
- **IEC 62061 / IEC 61508**: usan el **nivel de integridad de seguridad (SIL)**.

La asignación del nivel requerido surge de una **evaluación de riesgos**: cuán grave puede ser el daño, con qué frecuencia se expone una persona al peligro y cuán posible es evitarlo. A mayor riesgo, mayor exigencia.

## 7. Bloqueo y etiquetado

Para trabajos de mantenimiento se aplica el procedimiento de **bloqueo y etiquetado** (LOTO). Se desconecta cada fuente de energía (eléctrica, neumática, hidráulica, mecánica) y se la bloquea con candado personal. Después se verifica la ausencia de energía y se coloca una etiqueta. Cada persona que trabaja coloca su propio candado, y solo ella lo retira.
