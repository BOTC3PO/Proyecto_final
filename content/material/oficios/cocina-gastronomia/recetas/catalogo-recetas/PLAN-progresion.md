# Plan de la Ruta B: de recetas básicas a especiales

> Plan, no contenido. Define **en qué orden** se escriben y se hacen las 150 recetas del
> catálogo (`README.md` de esta carpeta tiene las categorías y cantidades) y **qué reglas**
> tiene cada nivel. No hay ninguna receta nueva escrita acá: los nombres que aparecen son
> *ejemplos de anclaje* tomados de programas oficiales, a confirmar contra la fuente antes de
> generar nada. Fecha: 2026-10-03.

## 1. Qué dicen las fuentes (y qué no)

| Fuente | Qué aporta | Límite |
|---|---|---|
| [Curso Cocinero Niveles I-III, UNLP (Escuela Universitaria de Oficios)](https://unlp.edu.ar/wp-content/uploads/2022/07/Programa-EUO-COCINERO.pdf), marco Res. CFE 149/11 Anexo IX | Perfil y contenidos oficiales del cocinero en Argentina: 360 h en 3 niveles de 120 h, ≥ 60 % prácticas, evaluación por **lista de cotejo**, ejercicio de integración y evaluación oral/escrita, acompañamiento de un tutor | Lista los contenidos pero deja a cada docente agruparlos por nivel: **no existe una lista oficial de recetas por nivel**. La progresión de este plan es propia |
| [Introducción a la cocina profesional y artesanal, IES 6012 (Salta)](https://isfdrec-sal.infd.edu.ar/sitio/wp-content/uploads/2024/05/Prof.-Valentina-Chavez-INTRODUCCION-A-LA-COCINA-PROFESIONAL-Y-ARTESANAL-2024-Gastronomia.pdf) | Orden de unidades: higiene y BPM → alimentos → vegetales y cortes → fondos y salsas (bechamel, holandesa, filetto, vinagreta, demi-glacé; huevos: duro, mollet, poché, frito, revuelto, omelette, crepes) → carnes, aves, pescados → harinas, masas y panes | Programa de una institución, no norma nacional |
| [Cocina profesional regional, 2º año, IES 6012](https://isfdrec-sal.infd.edu.ar/sitio/wp-content/uploads/2024/05/Prof.-Valentina-Chavez-COCINA-PROFESIONAL-REGIONAL-2a-Ano-2024-Gastronomia.pdf) y [Práctica Profesional II](https://isfdrec-sal.infd.edu.ar/sitio/wp-content/uploads/2024/05/Prof.-Franco-Tolaba-Garces-Practica-Profesional-II-Planificacion-Anual-2024-Gastronomia.pdf) | Regional como **segundo año**, después de lo básico: conservas tradicionales (sol, sal, humo, helada), marinadas, cultivos andinos, harinas no trigo, preparaciones regionales (bollos, tortillas, alfajores, capias, gaznates, empanadillas), recuperar recetarios de pueblos originarios, criollos e inmigrantes | Solo NOA |
| [Recetario Federal sin TACC "Sabores Argentinos"](https://www.todojujuy.com/pais/primer-recetario-federal-personas-celiacas-n215731) (Ministerios de Salud y Desarrollo Social) | 40 recetas regionales, 2 por provincia, con productos locales: fuente natural para "regional poco conocido" | No pude abrir la página oficial del recurso (`bancos.salud.gob.ar`, conexión rechazada desde esta máquina). Hay que bajar el PDF a mano y leer licencia y recetas |
| [Guías alimentarias para la población argentina](https://iah.msal.gov.ar/doc/Documento110.pdf) | Marco para equilibrio nutricional y para los textos de cada receta | No es un recetario |

**Conclusión de método:** la secuencia que usan los programas es siempre la misma
(higiene → cortes y vegetales → fondos, salsas y huevos → carnes → masas → regional/avanzado).
La Ruta B la sigue: lo básico primero, lo regional y lo especial al final.

## 2. Niveles

Cada receta enseña **una cosa nueva** apoyada en las anteriores. Cuatro niveles, y las
especiales van **siempre al final**:

| Nivel | Qué se pide | Requisito de Ruta A | Ejemplos de anclaje (de los programas citados) |
|---|---|---|---|
| **B. Básicas** | Pocos ingredientes, una técnica, resultado verificable a la vista | `fundamentos-cocina` y `seguridad-e-higiene-cocina` | huevo duro / mollet / poché / revuelto / omelette, arroz blanco, fondo claro de verdura, bechamel, vinagreta, salsa de tomate, masa de pan simple, verduras salteadas |
| **I. Intermedias** | Dos técnicas combinadas, tiempos y puntos de cocción | `tecnicas-de-coccion` y `materia-prima-cocina` | holandesa, fondo oscuro, pastas caseras rellenas, guisos, cortes de carne, pan enriquecido, bizcochuelo, crema pastelera |
| **A. Avanzadas** | Varias preparaciones a la vez, escalado y costeo | `calculo-cocina` | demi-glacé, repostería con cremas y merengues, cordero o cerdo en cocción larga, laminados, embutidos y conservas |
| **E. Especiales** | Recetas particulares, poco convencionales a propósito (decisión de Javier, 2026-08-10) | Ruta A completa, incluido `diagnostico-cocina-por-casos` | recetas del equipo, regional poco conocida, y al final la receta más difícil: medallón en pan brioche relleno (ya escrita en `../05-receta-final/`) |

La cadena harina → panificación → tipos de pan → brioche de `../01-harina/` a `../05-receta-final/`
es el camino concreto de Panificación hacia su especial.

## 3. Reparto de las 150 recetas por nivel

| Categoría | B | I | A | E | Total |
|---|---:|---:|---:|---:|---:|
| Fondos, salsas y guarniciones clásicas | 6 | 5 | 3 | 1 | 15 |
| Cortes y técnicas de carnes | 3 | 4 | 2 | 1 | 10 |
| Parrilla y asado | 3 | 5 | 4 | 3 | 15 |
| Pastas caseras | 4 | 4 | 3 | 1 | 12 |
| Panificación | 4 | 5 | 3 | 3 | 15 |
| Repostería y pastelería | 3 | 5 | 5 | 2 | 15 |
| Cocina regional argentina | 3 | 4 | 4 | 4 | 15 |
| Cocina internacional (por región) | 3 | 6 | 6 | 5 | 20 |
| Vegetales y guarniciones | 6 | 3 | 1 | 0 | 10 |
| Fiambres, embutidos y conservas | 2 | 3 | 2 | 1 | 8 |
| Bebidas sin alcohol | 4 | 2 | 1 | 1 | 8 |
| Postres helados y fríos | 2 | 3 | 1 | 1 | 7 |
| **Total** | **43** | **49** | **35** | **23** | **150** |

El reparto es una propuesta para ajustar. Respeta las cantidades por categoría que Javier ya
fijó (150 en total) y pone casi todo lo regional y lo internacional después de lo básico, como
hacen los programas.

## 4. Las especiales (23 lugares, sin llenar)

Una receta entra a E solo si cumple una de estas tres:
1. **La aporta el equipo** (`../recetas-del-equipo/`), con su autor.
2. **Regional poco conocida**, con respaldo institucional: recetarios regionales oficiales, el
   Recetario Federal (2 por provincia) o los programas citados. Candidatos a verificar contra la
   fuente, **no son recetas**: capias, gaznates, charqui, chupín, platos con quinoa o llama de
   los Andes, frutas patagónicas (calafate), empanadas mendocinas.
3. **Poco convencional a propósito**, definida por Javier o los devs.

El último lugar de E (y de toda la ruta) es el medallón en pan brioche relleno.
Todo lo demás de la ruta tiene que poder hacerse antes sin haber visto las especiales.

## 5. Ficha de cada receta

Mismas reglas del catálogo (sin alcohol por los menores; fermentación y maceración solo como
teoría) y una ficha fija:
- Nivel, categoría, tiempo, rinde.
- Ingredientes en **gramos** (y la proporción clave en %, por ejemplo sal como % del peso de la harina).
- Pasos numerados con **temperatura y punto** (qué tiene que verse, no solo cuánto tiempo).
- **Lista de cotejo de evidencia** para el tutor: 3 a 5 ítems observables en foto o video
  (mismo instrumento que usan los programas oficiales).
- Error común, enlazado a un caso de `diagnostico-cocina-por-casos` cuando exista.
- Tema de Ruta A que practica (escalado, costeo, higiene).
- **Fuente** (institucional) y estado: `no probada` hasta que alguien la cocine.

## 6. Cómo producirlas

1. Nada se inventa. Cada receta sale de una fuente institucional, reescrita con palabras propias
   y citada; las proporciones se chequean (sal 1-2 % de la harina, hidratación del pan, etc.).
2. Se produce **en orden de nivel**: primero las 43 básicas. Piloto de 10 (Fondos y salsas más
   Panificación) para revisar formato y tono antes de seguir.
3. Intermedias y avanzadas después. Las especiales quedan al final y dependen del equipo.
4. Entrega y corrección por tutor: la app todavía no la implementa. Mientras tanto, las recetas
   se publican como contenido y la lista de cotejo queda lista para cuando exista.

## 7. Pendiente de decidir

- Si el reparto 43 / 49 / 35 / 23 queda así.
- Quién carga las especiales del equipo y cuándo.
- Si se baja el Recetario Federal para extraer las 40 regionales (necesita descarga manual).
