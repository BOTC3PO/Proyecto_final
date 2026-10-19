# UX y diseño — Arquitectura de información y navegación (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `diseño/arquitectura-de-informacion-y-navegacion`. Depende de `../jerarquia-visual-e-informacion/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo organizar y nombrar el contenido para que la gente lo encuentre.

---

## 1. Qué es la arquitectura de información

Antes de decidir cómo se ve una pantalla hay que decidir qué hay y dónde. La **arquitectura de información (AI)** es la organización, la estructura y el etiquetado del contenido de un producto para que las personas encuentren lo que buscan y entiendan dónde están. Un sitio puede tener un diseño visual impecable y ser inútil si nadie encuentra el trámite que necesita.

## 2. Tres decisiones básicas

**Organizar**: agrupar contenidos por criterios que tengan sentido para quien los usa. Se puede ordenar por tema, por tarea, por tipo de usuario, por orden alfabético o cronológico. Lo importante es elegir el criterio de las personas y no el de la estructura interna de la organización. Una municipalidad que ordena su web por secretarías obliga al vecino a saber qué secretaría atiende su trámite.

**Etiquetar**: ponerle nombre a las secciones y los enlaces. Las etiquetas deben usar el vocabulario de quienes usan el producto, ser claras y distintas entre sí. "Servicios", "Recursos" y "Soluciones" son etiquetas vagas que se pisan.

**Estructurar**: decidir la forma de la jerarquía. Conviene una estructura ni muy profunda (muchos clics) ni muy ancha (demasiadas opciones al mismo nivel). Los **mapas de sitio** son diagramas de árbol que muestran todas las páginas y cómo se conectan.

## 3. Card sorting

El **card sorting** es una técnica para descubrir cómo agrupa y nombra el contenido la gente. Se le da a cada participante tarjetas con los nombres de los contenidos y se le pide que las agrupe y ponga un título a cada grupo. En el modo **abierto** los grupos y sus nombres los inventa la persona; en el **cerrado** se agrupa en categorías ya definidas. Si muchas personas agrupan igual, esa estructura probablemente sea intuitiva. Para comprobar una estructura ya armada se usa la prueba inversa, donde se pide encontrar algo en el árbol de navegación.

## 4. Patrones de navegación

La navegación es la manera concreta de moverse por la estructura. Los patrones más comunes:

- **Menú principal** (barra superior o lateral): las secciones principales, siempre visibles.
- **Menú hamburguesa**: oculta las opciones en una pantalla chica; ahorra espacio pero vuelve menos visibles las opciones.
- **Migas de pan**: muestra la ruta ("Inicio > Tienda > Zapatillas") y permite volver a niveles superiores.
- **Pestañas**: alternan vistas de un mismo nivel.
- **Buscador**: complementa la navegación cuando hay mucho contenido, pero no la reemplaza.

Una buena navegación responde tres preguntas: dónde estoy, adónde puedo ir y cómo vuelvo. Resaltar la sección actual y mantener la navegación en el mismo lugar (consistencia) ayuda a orientarse.

## N. Conexión con lo que sigue

La estructura que se define acá se convierte en wireframes en `prototipado-wireframe-mockup-prototipo-interactivo/` y se evalúa con las pruebas de `pruebas-de-usuario/`.
