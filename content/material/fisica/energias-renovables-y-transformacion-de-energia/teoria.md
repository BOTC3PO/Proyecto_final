# Física — Energías renovables y transformación de energía (teoría)

> Tema propuesto en `../../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Dependencias: ver `../dependencias.md`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Fuentes renovables, cadenas de transformación, potencia y energía, factor de capacidad.

---

## 1. La energía no se gasta: se transforma

Por la conservación de la energía (`../conservacion-energia-mecanica/`), cuando "consumimos" energía en realidad la transformamos de una forma a otra, y en cada paso una parte se disipa como calor. El **rendimiento** de una transformación es el cociente entre la energía útil que se obtiene y la que se entrega. En una cadena de varias etapas, los rendimientos se **multiplican**: si una central tiene eficiencias de 0,9 y 0,95 en dos etapas, el rendimiento total es 0,855.

## 2. Fuentes renovables y no renovables

Una fuente es **renovable** cuando se repone en una escala de tiempo humana: el Sol, el viento, el agua en movimiento, la biomasa, el calor de la Tierra (geotermia) y las mareas. Las **no renovables** (petróleo, gas, carbón, uranio) tienen reservas finitas. Que una fuente sea renovable no significa que no tenga impacto: una represa inunda territorio, un parque eólico modifica el paisaje y la fabricación de paneles requiere materiales y energía.

## 3. Cómo se transforma la energía en cada una

- **Hidráulica:** energía potencial del agua en altura, que al caer se convierte en cinética, mueve una turbina y un generador (`../generador-motor-transformador/`). La potencia hidráulica ideal es `P = ρ·g·Q·h` (densidad del agua, gravedad, caudal y desnivel), multiplicada por el rendimiento.
- **Eólica:** la energía cinética del aire mueve las palas. La potencia disponible en el viento es `½·ρ·A·v³`, donde `A` es el área barrida por las palas y `v` la velocidad del viento. Como depende del **cubo** de la velocidad, duplicar el viento multiplica por ocho la potencia. Ninguna turbina puede aprovechar todo: el rendimiento máximo teórico es el límite de Betz, de alrededor del 59 %.
- **Solar fotovoltaica:** las celdas transforman directamente la luz en electricidad. La potencia es `irradiancia × área × rendimiento`; con una irradiancia de 1000 W/m² y un panel con rendimiento del 20 %, cada metro cuadrado entrega unos 200 W en condiciones ideales.
- **Solar térmica:** el Sol calienta un fluido (agua de uso doméstico, por ejemplo).
- **Biomasa y biogás:** energía química de materia orgánica, que se quema o se fermenta.
- **Geotérmica:** calor del interior de la Tierra.

## 4. Potencia y energía

La **potencia** es energía por unidad de tiempo (watt, W). La **energía** consumida o producida es potencia por tiempo y en la factura eléctrica se mide en **kilowatt-hora** (kWh): `1 kWh = 3,6 millones de joules`. Un artefacto de 100 W encendido 10 horas consume 1 kWh.

El **factor de capacidad** compara la energía realmente generada con la que se habría generado funcionando siempre a potencia nominal durante el período. En un parque eólico o solar es menor que el 100 % porque el viento y el Sol son variables.

## 5. Desafíos: intermitencia y almacenamiento

El Sol y el viento no están siempre disponibles, así que se necesita **almacenar** o complementar. Las opciones son las baterías, las centrales de **bombeo** (se sube agua a un embalse cuando sobra energía y se la turbina cuando falta), redes más grandes y otras fuentes de respaldo.

## 6. El caso argentino

La Ley 27.191, que modificó la Ley 26.190, fijó una meta del 20 % de fuentes renovables en el consumo de energía eléctrica al 31 de diciembre de 2025 y del 35 % para 2030. El cumplimiento de esas metas debe consultarse en los informes oficiales actualizados. Argentina combina grandes centrales hidroeléctricas, parques eólicos en la Patagonia y parques solares como Cauchari, en Jujuy, de unos 300 MW y en operación comercial desde 2020, ubicado en la puna, donde la irradiación es muy alta.

## 7. Eficiencia energética

La energía más barata es la que no se consume. Reemplazar una lámpara incandescente por una LED, o aislar bien una vivienda (`../../vida-cotidiana/eficiencia-energetica-domestica/`), reduce la demanda sin renunciar al servicio.
