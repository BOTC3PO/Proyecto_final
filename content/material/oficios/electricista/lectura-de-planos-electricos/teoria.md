# Oficios — Electricista — Lectura de planos y tableros (teoria)

> Tema del MAPA: `OF1.lectura-de-planos-electricos` (`troncos.md`).
> Depende de `calculo-electrico/` (ver `../dependencias.md`). Lección
> informativa — la evaluación del oficio se concentra en
> `diagnostico-electricidad-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## La simbología eléctrica: un lenguaje compartido

Un plano eléctrico usa símbolos normalizados (en Argentina, según la
norma IRAM) para representar cada elemento: interruptores, tomas,
bocas de luz, tableros, motores. Esa estandarización es lo que permite
que cualquier electricista, en cualquier obra, entienda un plano hecho
por otra persona sin necesidad de una leyenda extensa — el símbolo de
un disyuntor diferencial, por ejemplo, se reconoce igual en Buenos
Aires que en Mendoza.

## Plano unifilar vs. multifilar

El **plano unifilar** representa un circuito con una sola línea, aun
cuando en la realidad tenga varios conductores (fase, neutro, tierra)
— es el más usado para tener una visión general y compacta de la
instalación, sobre todo en tableros. El **plano multifilar** (o
funcional) representa cada conductor por separado, mostrando con
detalle cómo se conecta cada uno — es el que se necesita para cablear
físicamente un tablero o entender la lógica exacta de un circuito de
mando.

## Diagramas de mando y de potencia

En instalaciones con motores o automatismos, se separan dos planos con
funciones distintas: el **diagrama de potencia** muestra el camino
por el que circula la corriente que realmente mueve la carga (el
motor, la bomba); el **diagrama de mando** muestra la lógica de
control — qué contactor se activa, con qué botonera, bajo qué
condición — sin la corriente de potencia involucrada. Confundir ambos
diagramas al interpretar un plano es un error común de quien recién
empieza.

## Tableros eléctricos: estructura y distribución

Un tablero organiza en un mismo gabinete las protecciones de todos los
circuitos que alimenta, conectadas a una o varias **barras** de
distribución que reciben la alimentación principal. El **esquema
unifilar del tablero** muestra, de un vistazo, qué protección
corresponde a cada circuito y su capacidad nominal — es el primer
documento que cualquier electricista debería revisar antes de
intervenir un tablero que no armó él mismo.

## Detectar errores en un plano o en un tablero

Parte del oficio es poder mirar un plano o un tablero armado y
detectar inconsistencias: una protección con una capacidad que no
coincide con la sección del cable que protege, un circuito que en el
plano aparece con una carga pero en la instalación real alimenta otra
cosa, o un tablero donde la numeración de los circuitos no coincide
con la etiqueta física. Encontrar estos errores antes de energizar
evita fallas que, de otro modo, aparecerían recién en uso.

## Diseñar un plano eléctrico simple

Para una instalación domiciliaria básica, diseñar el plano implica
decidir cuántos circuitos independientes va a tener (por ejemplo, uno
para iluminación, otro para tomacorrientes de uso general, otro para
cargas especiales como el termotanque o el aire acondicionado —
separar cargas por tipo evita que una falla en un electrodoméstico
deje sin luz a toda la casa), ubicar cada boca y toma en el plano
arquitectónico, y trazar el recorrido de las canalizaciones antes de
que se levanten las paredes.
