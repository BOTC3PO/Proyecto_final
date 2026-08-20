# Biología — Dinámica poblacional: crecimiento y capacidad de carga (teoria)

> Tema del MAPA: `BP`. Depende de `../cadenas-redes-troficas/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — 2 modelos de crecimiento poblacional.

---

## 1. ¿Qué es una población, en este contexto?

Una **población** es el conjunto de individuos de una misma especie
que viven en un área determinada al mismo tiempo. La **dinámica
poblacional** estudia cómo cambia su tamaño (número de individuos) a
lo largo del tiempo.

## 2. Crecimiento exponencial: sin límites

Si a una población le sobran recursos (comida, espacio, sin
depredadores), crece de forma **exponencial**: cuantos más individuos
hay, más individuos nuevos se suman por unidad de tiempo — la curva
se dispara cada vez más rápido, sin techo. Esto ocurre en la
naturaleza, pero **sólo por períodos cortos** (ej.: una especie recién
introducida en un ambiente sin depredadores ni competencia).

## 3. Crecimiento logístico: el límite real

En la práctica, ningún ambiente tiene recursos infinitos. A medida
que una población crece, empieza a competir más por comida, agua y
espacio — el crecimiento se **frena** hasta estabilizarse en un techo.
Esa curva (que arranca exponencial y después se aplana) se llama
**crecimiento logístico**, y el techo donde se estabiliza es la
**capacidad de carga** del ambiente (símbolo habitual: **K**).

```
Capacidad de carga (K) ─────────────────────  ← el ambiente ya no
                                /‾‾‾‾‾‾‾‾‾        soporta más individuos
                              /
                            /     ← crecimiento logístico
                          /            (se frena)
                        /
                      /  ← al principio, casi exponencial
                    /
```

## 4. ¿Qué determina la capacidad de carga?

La capacidad de carga (**K**) **no es un número fijo universal** —
depende de los recursos disponibles en ESE ambiente específico:
comida, agua, espacio, refugio frente a depredadores. Si cambian los
recursos (ej.: una sequía reduce el alimento disponible), **K** baja;
si mejoran (ej.: más lluvia), **K** puede subir.

## 5. Qué pasa si una población supera la capacidad de carga

Si una población crece por encima de **K** (por ejemplo, tras un año
excepcionalmente bueno), el ambiente ya no alcanza para todos —
aumenta la mortalidad (por falta de alimento, enfermedades que se
propagan más fácil en densidades altas, etc.) hasta que la población
vuelve a bajar cerca de **K**. La capacidad de carga actúa como un
punto de equilibrio al que la población tiende a volver, no como un
techo absoluto que nunca se cruza.

## 6. Conexión con lo que sigue

Este módulo da el marco general de "cuántos". `../nicho-ecologico/`
explica **por qué** cada especie tiene su propio valor de K en un
mismo ambiente (dos especies usan los recursos de forma distinta), y
`../biodiversidad-indices/` retoma la idea de población para medir
biodiversidad (cuántas especies, y cuántos individuos de cada una).
