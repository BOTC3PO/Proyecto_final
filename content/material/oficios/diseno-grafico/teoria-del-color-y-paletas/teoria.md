# Diseño gráfico — Teoría del color y paletas (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de `../edicion-de-imagen/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Cómo se produce el color

En pantalla, el color se forma sumando luz. El modelo RGB, por rojo, verde y azul en inglés, combina esas tres luces: al sumarlas todas se obtiene blanco, y sin luz queda negro. Es un modelo aditivo, propio de monitores, celulares y proyectores. En impresión, el color se forma con tintas que absorben luz. El modelo CMYK, por cian, magenta, amarillo y negro (key), es sustractivo: cuantas más tintas se superponen, más oscuro es el resultado.

Los dos modelos no cubren los mismos colores. Algunos tonos muy vivos de pantalla, como ciertos verdes y azules brillantes, no se pueden reproducir con tintas, y por eso un diseño pensado en RGB puede verse más apagado al imprimirse. Hay que decidir el modelo según el destino: RGB para lo digital y CMYK para lo impreso.

## 2. Matiz, saturación y luminosidad

Para hablar del color de forma práctica, se usan tres atributos. El matiz (hue) es el color en sí, como rojo o verde. La saturación es su intensidad: un color saturado es vivo y uno desaturado tiende al gris. La luminosidad o valor indica cuán claro u oscuro es. El modelo HSL, por hue, saturation y lightness, permite ajustar cada atributo por separado y es más intuitivo que mezclar RGB a mano.

Variar la luminosidad y la saturación de un mismo matiz genera tintes, tonos y sombras que forman una escala cromática coherente. Esa escala se usa para botones, fondos y estados de una interfaz. El color tiene además una temperatura: los tonos rojos, naranjas y amarillos se perciben cálidos, y los azules y verdes, fríos.

## 3. El círculo cromático y las armonías

El círculo cromático ordena los matices en una rueda. Sirve para pensar combinaciones. Los colores complementarios están enfrentados en el círculo, como azul y naranja, y generan el máximo contraste. Los análogos son vecinos, como amarillo, naranja y rojo, y dan un conjunto armonioso y tranquilo. La combinación monocromática usa un solo matiz con distintas luminosidades. La tríada toma tres colores equidistantes, y es más vibrante.

Estas fórmulas son puntos de partida y no reglas. Un buen resultado depende de las proporciones: una pauta práctica es la regla 60-30-10, con un color dominante para el 60 por ciento, uno secundario para el 30 y un acento para el 10. El acento se reserva para lo que debe llamar la atención, como una acción principal.

## 4. Armar una paleta

Una paleta de proyecto suele tener un color principal vinculado a la identidad, uno o dos secundarios, una escala de neutros (blancos, grises y negros) para fondos y textos, y colores de estado, como verde para éxito, rojo para error y amarillo para advertencia. Se definen valores exactos en cada modelo que se vaya a usar, por ejemplo un código hexadecimal para pantalla y valores CMYK para impresión.

Es mejor una paleta corta y bien usada que una larga. Cada color debe tener una función. Y se prueba en contexto: un color elegido sobre un fondo blanco puede comportarse distinto sobre uno oscuro o junto a otro color, por el fenómeno del contraste simultáneo.

## 5. Contraste y accesibilidad

El color debe leerse. Las pautas de accesibilidad web, que se vieron en UX, piden una razón de contraste de al menos 4,5 a 1 entre el texto normal y su fondo, y de 3 a 1 para el texto grande. Existen herramientas gratuitas que calculan ese valor. Un texto gris claro sobre blanco suele quedarse por debajo del mínimo aunque se vea elegante.

Además, no se debe transmitir información solamente con color. Un error indicado únicamente en rojo no lo distinguen bien las personas con daltonismo, así que se suma un ícono o un texto. El significado de los colores, finalmente, depende de la cultura y del contexto: el blanco o el rojo no significan lo mismo en todos los lugares, de modo que se piensa en el público y no se asumen significados universales.
