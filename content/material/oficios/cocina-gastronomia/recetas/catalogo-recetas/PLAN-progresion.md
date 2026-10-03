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

## 2. Qué hace y qué no hace la plataforma

La práctica de cocina **no se puede hacer ni evaluar desde el programa**: cocinar es lo único
del oficio que no se simula (como intentar programar la "mama's cooking"). Lo que sí hace el
programa es **entregar el contenido**: teoría, técnica, recetas y la lista de cotejo. Cocinar,
probar y corregir pasa fuera de la plataforma, con la persona y, si lo hay, un tutor.

Consecuencias para todo el plan:
- La Ruta B **no tiene cuestionario ni nota** y no desbloquea ningún logro. El logro
  "Cocinero Profesional" sigue atado a la Ruta A (secciones + diagnóstico).
- La plataforma **no recibe fotos ni videos** ni corrige: la lista de cotejo de cada receta es
  para que la persona (o su tutor, fuera del programa) revise su resultado.
- Por eso lo que sí se puede controlar desde el programa es la calidad del **texto**: teoría
  correcta, técnica bien explicada y recetas con cantidades verificadas.

## 3. Niveles

Se empieza por teoría y técnica y recién después se cocina. Cada receta enseña **una cosa
nueva** apoyada en las anteriores, y las especiales van **siempre al final**:

| Nivel | Qué se pide | Requisito de Ruta A | Ejemplos de anclaje (de los programas citados) |
|---|---|---|---|
| **0. Técnica sin receta** | Ejercicios cortos para practicar una sola habilidad, sin cocinar un plato completo. **No cuentan entre las 150 recetas** | `fundamentos-cocina` y `seguridad-e-higiene-cocina` | medir y pesar, cortes de cuchillo (juliana, brunoise, cubos), mise en place de una receta simple, control del fuego, sazonar y probar |
| **B. Básicas** | Pocos ingredientes, una técnica, resultado verificable a la vista | `fundamentos-cocina` y `seguridad-e-higiene-cocina` | huevo duro / mollet / poché / revuelto / omelette, arroz blanco, fondo claro de verdura, bechamel, vinagreta, salsa de tomate, masa de pan simple, verduras salteadas |
| **I. Intermedias** | Dos técnicas combinadas, tiempos y puntos de cocción | `tecnicas-de-coccion` y `materia-prima-cocina` | holandesa, fondo oscuro, pastas caseras rellenas, guisos, cortes de carne, pan enriquecido, bizcochuelo, crema pastelera |
| **A. Avanzadas** | Varias preparaciones a la vez, escalado y costeo | `calculo-cocina` | demi-glacé, repostería con cremas y merengues, cordero o cerdo en cocción larga, laminados, embutidos y conservas |
| **E. Especiales** | Recetas particulares, poco convencionales a propósito (decisión de Javier, 2026-08-10) | Ruta A completa, incluido `diagnostico-cocina-por-casos` | recetas del equipo, regional poco conocida, y al final la receta más difícil: medallón en pan brioche relleno (ya escrita en `../05-receta-final/`) |

La cadena harina → panificación → tipos de pan → brioche de `../01-harina/` a `../05-receta-final/`
es el camino concreto de Panificación hacia su especial.

### Ficha de bloque (teoría y técnica antes de las recetas)

Cada una de las 12 categorías abre con una **ficha corta** (2 o 3 párrafos, sin cuestionario)
que explica el porqué antes del cómo: por ejemplo, antes de las pastas, qué es el gluten y qué
cambia al amasar; antes de los fondos, qué se extrae y por qué se hierve despacio; antes de la
parrilla, cómo actúa el calor sobre la carne. Tiene tres partes: **teoría** (qué pasa), **técnica**
(cómo se controla) y **qué mirar** (cómo se ve cuando sale bien). La teoría se apoya en lo ya
dado en Ruta A y no la repite. Son 12 fichas, no recetas.

Orden dentro de la ruta: Nivel 0 → fichas y recetas básicas → intermedias → avanzadas →
especiales. La teoría y la técnica de cada bloque nunca van después de sus recetas.

## 4. Reparto de las 150 recetas por nivel

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

## 5. Las especiales (23 lugares, sin llenar)

Una receta entra a E solo si cumple una de estas tres:
1. **La aporta el equipo** (`../recetas-del-equipo/`), con su autor.
2. **Regional poco conocida**, con respaldo institucional: recetarios regionales oficiales, el
   Recetario Federal (2 por provincia) o los programas citados. Candidatos a verificar contra la
   fuente, **no son recetas**: capias, gaznates, charqui, chupín, platos con quinoa o llama de
   los Andes, frutas patagónicas (calafate), empanadas mendocinas.
3. **Poco convencional a propósito**, definida por Javier o los devs.

El último lugar de E (y de toda la ruta) es el medallón en pan brioche relleno.
Todo lo demás de la ruta tiene que poder hacerse antes sin haber visto las especiales.

**Receta final con actualización pendiente (2026-10-03):** la receta de los devs (medallón de
hamburguesa) fue actualizada por el equipo para **reducir el gusto interno a cebolla**. Hoy el
repo todavía tiene la versión anterior (2 cebollas chicas o 1 mediana picadas dentro de la carne,
en `../05-receta-final/teoria.md`). No se tocaron las cantidades porque falta la receta nueva:
cuando llegue, se reemplaza en `../05-receta-final/`, en este catálogo y en
`oficios-orientacion-vocacional-PLANIFICACION.md`. Mientras tanto, `../05-receta-final/` lleva
un aviso de que esa parte está desactualizada.

## 6. Ficha de cada receta

Mismas reglas del catálogo (sin alcohol por los menores; fermentación y maceración solo como
teoría) y una ficha fija:
- Nivel, categoría, tiempo, rinde.
- Ingredientes en **gramos** (y la proporción clave en %, por ejemplo sal como % del peso de la harina).
- Pasos numerados con **temperatura y punto** (qué tiene que verse, no solo cuánto tiempo).
- **Lista de cotejo** de 3 a 5 ítems observables (color, textura, punto, aspecto) para que la
  persona o su tutor revisen el resultado **fuera del programa** (mismo instrumento que usan los
  programas oficiales). La plataforma no recibe ni evalúa nada de esto.
- Error común, enlazado a un caso de `diagnostico-cocina-por-casos` cuando exista.
- Tema de Ruta A que practica (escalado, costeo, higiene).
- **Fuente** (institucional) y estado: `no probada` hasta que alguien la cocine.

## 7. Cómo producirlas

1. Nada se inventa. Cada receta sale de una fuente institucional, reescrita con palabras propias
   y citada; las proporciones se chequean (sal 1-2 % de la harina, hidratación del pan, etc.).
2. Se produce **en orden de ruta**: Nivel 0 y las fichas de bloque de las categorías del piloto,
   luego las 43 básicas. Piloto: Nivel 0 más 10 recetas (Fondos y salsas más Panificación) para
   revisar formato y tono antes de seguir.
3. Intermedias y avanzadas después. Las especiales quedan al final y dependen del equipo.
4. Como nadie puede cocinar las recetas desde el programa, el estado `no probada` solo cambia
   cuando una persona real las cocina y avisa; hasta entonces el texto sale marcado así.

## 8. Pendiente de decidir

- Si el reparto 43 / 49 / 35 / 23 queda así.
- La receta actualizada de los devs (sin cebolla fuerte): hace falta el texto nuevo.
- Quién carga las demás especiales del equipo y cuándo.
- Si se baja el Recetario Federal para extraer las 40 regionales (necesita descarga manual).
