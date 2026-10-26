# Economía — Cómo se calcula el IPC en Argentina (teoría)

> Tema del MAPA: nodo propuesto en `../../PLAN-REPARACIONES-TRONCOS.md` (`como-se-calcula-el-ipc-argentina`, sin ID en `troncos.md` todavía). Depende de `../pbi-e-inflacion/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se construye el índice con el que se mide la inflación, para poder leer críticamente un dato de inflación.

---

## 1. Qué es el IPC y quién lo calcula

El Índice de Precios al Consumidor (IPC) mide cómo cambia, mes a mes, el precio de un conjunto fijo de bienes y servicios que consumen los hogares. En Argentina lo elabora y publica el INDEC (Instituto Nacional de Estadística y Censos), generalmente a mediados del mes siguiente al que se mide. No mide "cuánto cuesta vivir" en general: mide cuánto cambia el precio de una canasta determinada. Si la canasta cuesta 5% más que el mes anterior, la inflación del mes es del 5%.

`pbi-e-inflacion/` ya explicó qué es la inflación como fenómeno del país entero. Este tema muestra cómo se llega al número concreto que aparece en las noticias.

## 2. La canasta y los ponderadores

Para armar el índice hay que decidir qué incluir y cuánto pesa cada cosa. Un aumento del pan afecta a casi todos los hogares, mientras que un aumento de las entradas de teatro afecta a pocos; por eso los productos no valen lo mismo en el índice.

Los pesos se llaman **ponderadores** y se calculan a partir de una encuesta sobre cuánto gastan los hogares en cada rubro: la **Encuesta Nacional de Gastos de los Hogares (ENGHo)**. Si en esa encuesta los hogares destinan una parte grande del gasto a alimentos, ese rubro recibe un ponderador grande. Los productos se agrupan en divisiones (alimentos y bebidas, prendas de vestir, vivienda y servicios básicos, transporte, salud, educación, recreación, comunicación, etc.) y cada división tiene su peso.

Los ponderadores no se actualizan todos los meses: se fijan con una encuesta y se mantienen hasta que se hace una nueva. Por eso, cuanto más vieja es la encuesta, más se aleja la canasta de los hábitos de consumo reales (por ejemplo, el peso de las comunicaciones o de las tarifas de servicios). El INDEC anunció la actualización de la canasta con una encuesta más reciente; para saber cuál está vigente hoy conviene consultar la metodología publicada en indec.gob.ar, porque ese dato cambia con el tiempo.

## 3. Relevamiento de precios

Todos los meses, encuestadores del INDEC y de las direcciones provinciales de estadística relevan los precios de miles de productos en comercios de distintas ciudades. También hay precios que se toman de fuentes administradas, como las tarifas públicas. Para que la comparación tenga sentido se sigue **el mismo producto, de la misma marca y presentación, en el mismo tipo de local**, mes tras mes. Si el producto desaparece, se lo reemplaza por uno equivalente.

El país se divide en **regiones** (GBA, Pampeana, Noreste, Noroeste, Cuyo y Patagonia), cada una con su propio IPC y sus propios ponderadores. El dato nacional combina las seis. Por eso la inflación puede ser algo distinta entre regiones, y también por eso el índice no refleja con exactitud la experiencia de cada hogar.

## 4. Cómo se calcula la variación

El IPC se expresa en forma de **número índice**: se elige un mes base con valor 100 y los demás meses se comparan con él. Lo que se informa en las noticias es la **variación porcentual** entre dos meses:

variación (%) = (IPC del mes actual ÷ IPC del mes anterior − 1) × 100

Si el índice pasó de 200 a 210, la inflación mensual fue (210 ÷ 200 − 1) × 100 = 5%.

Las variaciones **no se suman**, se **componen**. Si un mes la inflación es 10% y el siguiente 10%, el acumulado no es 20% sino 1,10 × 1,10 − 1 = 21%. Para la acumulada de varios meses se multiplican los factores (1 + tasa) de cada mes y se resta 1. La **inflación interanual** compara el índice de un mes con el del mismo mes del año anterior.

## 5. Para qué sirve el IPC

Sirve para medir el **poder adquisitivo**: si el salario nominal sube 8% y la inflación fue 10%, el salario real baja (cada peso compra menos). También se usa para **actualizar** valores: algunos contratos de alquiler, cuotas, jubilaciones o paritarias se ajustan por IPC u otros índices pactados. Y sirve para pasar de valores nominales a **reales** (a precios constantes), como se vio con el PBI.

## 6. Límites del índice

- Es un promedio: una familia que gasta mucho en alquiler o transporte puede sentir una inflación distinta de la oficial.
- Los ponderadores quedan atrasados si la encuesta es vieja.
- Mide precios, no calidad: si un producto empeora o achica su envase sin cambiar el precio, la captura es imperfecta.
- Dato de un mes no es tendencia: se mira la evolución de varios meses.

## N. Conexión con lo que sigue

Este tema conecta con `plazo-fijo-vs-inflacion/` (rendimiento real de una inversión) y con `sueldo-promedio-pais/` (salarios a precios constantes).
