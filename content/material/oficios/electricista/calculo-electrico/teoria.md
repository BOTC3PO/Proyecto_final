# Oficios — Electricista — Cálculo eléctrico (teoria)

> Tema del MAPA: `OF1.calculo-electrico` (`troncos.md`). Depende de
> `materiales-electricista/` (ver `../dependencias.md`). Lección
> informativa — la evaluación del oficio se concentra en
> `diagnostico-electricidad-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## De la carga instalada a la corriente de cálculo

Antes de elegir un cable o una protección, el electricista necesita
saber cuánta corriente va a circular realmente por el circuito. Si se
conoce la potencia total de las cargas (en vatios) y la tensión de
alimentación (220V en un circuito monofásico domiciliario argentino),
la corriente se despeja de la fórmula de potencia: I = P / V. En
instalaciones con muchas cargas que no funcionan todas al mismo
tiempo (por ejemplo, un edificio con varios ascensores), se aplica
además un **coeficiente de simultaneidad**, que corrige el cálculo
hacia abajo para no sobredimensionar la instalación por un pico que en
la práctica nunca ocurre.

## Caída de tensión: la corriente pierde fuerza en el camino

Todo conductor real tiene una resistencia, aunque sea pequeña, que
depende de su longitud, su sección y el material (la **resistividad**
del cobre es, aproximadamente, 1/56 Ω·mm²/m). Esa resistencia hace que
la tensión disponible al final de un cable largo sea un poco menor que
en el origen — es la **caída de tensión**, que se calcula como
Us = Ip × Rs (corriente de cálculo por resistencia del tramo, donde
Rs = ρ × longitud / sección). Cuanto más largo el tramo, o más fina la
sección, mayor la caída. La normativa argentina exige que esa caída
de tensión, en porcentaje sobre la tensión nominal, no supere un
límite (típicamente el 3% para el tramo seccional) — superarlo puede
significar que los artefactos al final de la línea reciban menos
tensión de la que necesitan para funcionar bien.

## Sección de conductor según la carga

Elegir la sección correcta de un cable combina dos verificaciones
independientes: que soporte la corriente de cálculo sin calentarse
más de lo admisible (verificación térmica, según tablas normalizadas
para cada tipo de cable y forma de instalación), y que la caída de
tensión en ese tramo no supere el límite normativo. Puede pasar que
una sección alcance para una verificación pero no para la otra —
sobre todo en tramos largos, donde la caída de tensión suele ser la
condición más exigente, no el calentamiento.

## Factores de demanda

No todas las cargas de una instalación funcionan al 100% de su
potencia nominal todo el tiempo. El **factor de demanda** es un
coeficiente (siempre menor o igual a 1) que ajusta la potencia
instalada total a la potencia que realmente se espera consumir en el
peor momento razonable, evitando sobredimensionar el circuito
principal por sumar simplemente todas las potencias nominales de
todos los artefactos como si fueran a usarse todos a la vez, al
máximo, en simultáneo.

## Por qué estos cálculos no son opcionales

Un error en cualquiera de estos pasos —corriente mal calculada,
caída de tensión ignorada, sección elegida "a ojo"— no se nota el
primer día. Se nota meses después, como un cable que se recalienta
bajo uso normal, un disyuntor que salta sin razón aparente, o
artefactos que funcionan mal por bajo voltaje al final de una línea
larga. El cálculo eléctrico es, en ese sentido, la parte del oficio
que previene fallas que todavía no pasaron.
