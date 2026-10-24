# Automatizacion — Neumática e hidráulica básica (teoría)

> Tema del MAPA: `automatizacion/neumatica-e-hidraulica-basica`. Depende de `../fisica/presion-f-sobre-a/` y `plc-logica-de-control-industrial/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se mueve y se controla un cilindro con aire o aceite a presión, y cómo se calcula su fuerza.

---

## 1. Dos formas de mover cosas con fluidos

La **neumática** usa aire comprimido para generar movimiento y fuerza; la **hidráulica** usa un líquido, normalmente aceite. Ambas transmiten energía a través de un fluido a presión y se aplican en prensas, líneas de envasado, frenos de camiones, maquinaria agrícola y vial, ascensores y mucho más. La base física es la presión: fuerza dividida por superficie. Por eso la fuerza que entrega un cilindro es igual a la presión por el área del émbolo.

## 2. Diferencias entre aire y aceite

- **Compresibilidad**: el aire se comprime, el aceite prácticamente no. Los movimientos neumáticos son más elásticos y rápidos; los hidráulicos son más rígidos y precisos, y mantienen una carga sin ceder.
- **Presiones y fuerzas**: los sistemas neumáticos de planta suelen trabajar a unos pocos bar (alrededor de 6 es lo habitual). Los hidráulicos usan presiones mucho mayores, de decenas a cientos de bar, y por eso generan fuerzas enormes con cilindros chicos.
- **Limpieza**: una fuga de aire es inofensiva y limpia, apta para alimentos o farmacia; una fuga de aceite ensucia y contamina.
- **Costo y complejidad**: el aire se toma de la atmósfera y se descarga libremente; el aceite requiere circuito cerrado con depósito, bomba, filtros y refrigeración.

## 3. Componentes de un circuito neumático

- **Compresor y tratamiento del aire**: comprime el aire, lo enfría y lo seca. En cada máquina suele haber una unidad de mantenimiento con filtro, regulador de presión y a veces lubricador.
- **Válvulas**: dirigen el aire. Se describen con dos números: vías y posiciones. Una válvula 3/2 tiene tres vías y dos posiciones; una 5/2, cinco vías y dos posiciones, que es la habitual para gobernar cilindros de doble efecto.
- **Actuadores**: los cilindros. El de **simple efecto** recibe aire para avanzar y vuelve por un resorte. El de **doble efecto** recibe aire para avanzar y para retroceder. También hay motores neumáticos y ventosas.
- **Sensores y mandos**: finales de carrera, sensores magnéticos, pulsadores, electroválvulas controladas por un PLC.

## 4. Componentes de un circuito hidráulico

Un circuito hidráulico básico tiene un **depósito** de aceite y una **bomba**, que impulsa el caudal. Tiene una **válvula limitadora de presión**, que protege el sistema abriendo cuando la presión excede el máximo. Tiene **válvulas distribuidoras**, para elegir el sentido del flujo. Y tiene **actuadores** (cilindros o motores hidráulicos), filtros y tuberías o mangueras. La bomba entrega caudal; la presión la fija la carga, hasta el límite de la válvula.

## 5. Fuerza de un cilindro

La fuerza teórica es:

F = P · A

con F en newton, P en pascal (1 bar = 100 000 Pa) y A el área del émbolo en metros cuadrados. Para un émbolo circular, A = π · d² / 4.

En el avance, el aire actúa sobre toda el área del émbolo. En el retroceso de un cilindro de doble efecto actúa sobre el área anular, que es menor porque el vástago ocupa parte: por eso la fuerza de retroceso es menor. En la práctica hay que descontar el rozamiento, por lo que la fuerza útil es algo menor a la teórica.

## 6. Cómo se representan

Los circuitos se dibujan con símbolos normalizados (ISO 1219) que muestran la función y no la forma física de los componentes: cilindros, válvulas con sus cuadros de posiciones, fuentes de presión, silenciadores y retornos. Existe software de simulación, como FluidSIM, que permite armar el circuito y ver cómo funciona antes de montarlo.

## 7. Seguridad

Los sistemas a presión almacenan energía. Antes de intervenir, hay que despresurizarlos y bloquearlos. Una manguera hidráulica con una fuga puede inyectar aceite bajo la piel, lo que es una emergencia médica. Los cilindros pueden moverse solos al soltar la presión si hay cargas. Las mangueras y conexiones deben ser las adecuadas a la presión de trabajo.
