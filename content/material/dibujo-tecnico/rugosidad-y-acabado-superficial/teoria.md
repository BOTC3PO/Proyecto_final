# Dibujo técnico — Rugosidad y acabado superficial (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/rugosidad-y-acabado-superficial`. Depende de `../tolerancias-y-ajustes/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué es la rugosidad de una superficie, cómo se mide y cómo se indica en los planos.

---

## 1. Ninguna superficie es lisa

Aunque una pieza parezca perfectamente lisa, vista de cerca su superficie tiene crestas y valles microscópicos dejados por el proceso de fabricación: la marca de la herramienta, la abrasión, la fundición. A ese conjunto de irregularidades finas se le llama **rugosidad**. Se suma a las ondulaciones más grandes y a los errores de forma, y juntos forman la **textura superficial**.

## 2. Por qué importa

La rugosidad influye en el funcionamiento:

- **Rozamiento y desgaste**: dos superficies que deslizan (un eje en su buje, un pistón en su cilindro) necesitan un acabado fino y controlado.
- **Estanqueidad**: una junta o un asiento de válvula debe ser lo bastante liso para sellar.
- **Resistencia a la fatiga**: las marcas profundas concentran tensiones y pueden iniciar fisuras.
- **Corrosión y limpieza**: una superficie muy rugosa retiene suciedad y humedad.
- **Adherencia** de pinturas y recubrimientos, que puede requerir algo de rugosidad.
- **Apariencia y tacto**.

Pero afinar la superficie cuesta: cada reducción de rugosidad requiere procesos más lentos (rectificado, lapeado, pulido). Por eso, igual que con las tolerancias, se especifica solo la que hace falta.

## 3. Parámetros

El parámetro más usado es la **Ra**, la rugosidad media aritmética: el promedio de las alturas de las crestas y los valles respecto de una línea media, medido sobre un tramo de la superficie. Se expresa en **micrómetros (µm)**, es decir, milésimas de milímetro. Cuanto menor, más lisa. Otros parámetros, como **Rz** (altura máxima de crestas a valles en promedio), describen mejor otros aspectos. Dos superficies con igual Ra pueden comportarse distinto si la forma de las irregularidades es distinta.

## 4. Rangos de referencia

Como orden de magnitud habitual en tablas de talleres: el torneado o fresado común da del orden de unos pocos micrómetros de Ra (por ejemplo de 1,6 a 6,3 µm); el rectificado, valores del orden de décimas (0,2 a 0,8 µm); y el lapeado o pulido, del orden de centésimas o décimas. Estos rangos son indicativos y dependen de la máquina, la herramienta y el material.

## 5. Cómo se indica en el plano

El acabado se indica con un **símbolo de rugosidad** sobre la superficie o su línea de cota. El símbolo básico es una "V" a modo de visto; si lleva una línea horizontal se acompaña del valor del parámetro, por ejemplo Ra 1,6. Un círculo en el símbolo indica que la superficie se obtiene sin arranque de material (fundición, forja), y una barra horizontal indica que se obtiene por mecanizado. Cuando la mayoría de las superficies tienen el mismo acabado, se indica el valor general cerca del rótulo y se destacan solo las excepciones. Las normas internacionales sobre textura superficial (la ISO 1302, actualizada por la serie ISO 21920) definen estos símbolos; conviene consultar la edición vigente de la que use la empresa.

## 6. Cómo se mide

Con **rugosímetros**, instrumentos que recorren la superficie con una aguja muy fina (palpador) y registran el perfil; o con métodos ópticos. También se compara visual y táctilmente con **muestras patrón** de rugosidad conocida.

## N. Conexión con lo que sigue

Junto con las tolerancias completa la especificación de una pieza que se verá en `interpretar-planos-de-piezas-y-conjuntos/` y se relaciona con los procesos de los oficios de mecanizado.
