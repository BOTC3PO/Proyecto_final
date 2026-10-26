# UX y diseño — Color en interfaces (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `diseño/color-en-interfaces`. Depende de `../jerarquia-visual-e-informacion/` y `../../arte/principios-de-diseno/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo usar el color para comunicar, organizar y no excluir.

---

## 1. El color comunica

En una interfaz el color no es solo estética. Dirige la atención hacia un botón principal, agrupa elementos, marca estados y transmite una personalidad de marca. Los principios de color de `arte/principios-de-diseno/` y el contraste de `jerarquia-visual-e-informacion/` se aplican acá con una restricción adicional: la gente usa pantallas distintas, en ambientes distintos y con percepciones del color distintas.

## 2. Construir una paleta

Una paleta de interfaz suele tener pocos grupos de colores con roles claros:

- **Color de marca o primario**: identifica el producto y se usa en las acciones principales.
- **Colores neutros**: grises, blancos y negros para fondos, textos y bordes. Son los que más se usan.
- **Colores semánticos**: comunican estados (éxito, advertencia, error, información).
- **Variaciones**: tonos más claros y más oscuros de cada color para fondos, bordes y estados al pasar el cursor.

Una regla práctica es limitar los colores llamativos: si todo es de color, nada destaca (`jerarquia-visual-e-informacion/`). El color de acento se reserva para lo que más importa.

## 3. Significado y cultura

Los colores semánticos se apoyan en convenciones: verde para éxito, rojo para error o peligro, amarillo o naranja para advertencia. Pero esas asociaciones dependen de la cultura y del contexto, y no deben ser la única señal. En un gráfico financiero, el rojo y el verde pueden significar cosas distintas según el país.

## 4. Color y accesibilidad

Dos reglas centrales:

1. **Contraste suficiente** entre el texto y su fondo (`accesibilidad-wcag-contraste-lectores-de-pantalla/`). Las pautas WCAG piden como mínimo 4,5 a 1 para el texto normal y 3 a 1 para el texto grande y para componentes de interfaz como bordes de campos y botones.
2. **No depender solo del color.** Una proporción importante de varones (alrededor de 1 de cada 12) tiene alguna forma de daltonismo, en particular dificultad para distinguir rojo y verde. Si un error se señala solo con un borde rojo, esa persona puede no verlo. Hay que sumar un ícono, un texto o un patrón.

Una manera de comprobar es mirar la pantalla en escala de grises: si la información se sigue entendiendo, no depende solo del color.

## 5. Modo oscuro

El modo oscuro cambia fondos claros por oscuros. No consiste en invertir los colores: hay que revisar contrastes, evitar el negro puro con blanco puro (que cansa), y ajustar los colores saturados que vibran sobre fondos oscuros. Ofrecerlo respeta preferencias y condiciones de uso, pero debe seguir cumpliendo el contraste.

## N. Conexión con lo que sigue

Junto con `tipografia-en-interfaces/`, el color alimenta `sistemas-de-diseno-y-componentes/`, donde los colores se nombran por su función y no por su valor.
