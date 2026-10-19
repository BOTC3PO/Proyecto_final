# Electrónica — Transistor como interruptor y amplificador (teoría)

> Tema del MAPA: `electronica/transistor-como-interruptor-y-amplificador` (nodo propuesto, ver `../dependencias.md`). Depende de `../componentes-resistencia-capacitor-diodo-transistor/` y de `../divisor-de-tension-y-codigo-de-colores/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo un transistor bipolar usa una corriente pequeña para controlar una grande, y los dos usos básicos que se le dan.

---

## 1. El transistor bipolar (BJT)

El transistor bipolar de juntura tiene tres terminales: base (B), colector (C) y emisor (E). Existen dos tipos: NPN y PNP; en este tema se trabaja con el NPN, que es el más usado. La idea central es que una corriente pequeña que entra por la base controla una corriente mucho mayor que circula entre el colector y el emisor.

La relación entre ambas corrientes se llama ganancia de corriente y se representa con la letra beta (β): IC = β × IB. Para un transistor típico de baja potencia, β puede valer cien o más, pero varía mucho entre ejemplares y con la temperatura, por lo que no conviene depender de un valor exacto. Además, la corriente del emisor es la suma de las otras dos: IE = IC + IB.

## 2. Las tres regiones de trabajo

Un transistor puede operar en tres regiones. En corte, no hay corriente de base y el transistor no conduce: se comporta como un interruptor abierto. En saturación, la corriente de base es suficientemente grande como para que el transistor conduzca al máximo; entre colector y emisor queda una tensión muy baja (unas décimas de voltio) y el transistor se comporta como un interruptor cerrado. Entre ambas está la región activa, donde IC = β × IB y el transistor funciona como amplificador.

Para que un transistor NPN de silicio conduzca, la unión base-emisor debe tener una tensión directa de aproximadamente 0,7 V, igual que un diodo.

## 3. El transistor como interruptor

Para encender una carga (un LED, un relé, un motor pequeño) con una señal débil, como la de un microcontrolador, se coloca la carga en el colector y se aplica la señal a la base mediante una resistencia. Si la señal es baja, el transistor está en corte y la carga no se enciende. Si es alta, el transistor satura y la carga recibe casi toda la tensión de la fuente.

La resistencia de base se calcula con RB = (Vin − 0,7 V) / IB. Y como la corriente de base necesaria es IB = IC / β, para garantizar la saturación se usa una corriente de base mayor a la mínima, por ejemplo el doble, tomando un valor de β conservador. Sin la resistencia de base, la corriente sería excesiva y la unión se destruiría.

## 4. El transistor como amplificador

En la región activa, una pequeña variación de la corriente de base produce una variación mucho mayor de la corriente de colector. Si se pone una resistencia de colector, esa variación de corriente se traduce en una variación grande de tensión. La relación entre la variación de la tensión de salida y la de entrada se llama ganancia de tensión. Para que amplifique sin deformar la señal, hace falta polarizar el transistor, es decir, fijarle un punto de trabajo en el medio de la región activa, normalmente con un divisor de tensión en la base.

## 5. Precauciones

Cuando la carga es inductiva, como un relé o un motor, hay que colocar un diodo en paralelo con ella para proteger al transistor de los picos de tensión al apagarse. Y cuando se excede la potencia máxima, el transistor se calienta; se calcula la potencia como el producto de la tensión colector-emisor por la corriente de colector.

## N. Conexión con lo que sigue

Este tema es la base de `../amplificador-operacional/`, que internamente se construye con transistores, y de la etapa de salida de `../microcontrolador-entradas-y-salidas-digitales/`.
