# Cómo se escribe una receta de la Ruta B (brief de trabajo)

> Instrucciones para quien siga escribiendo recetas (persona o agente). Resume el método con
> el que se escribieron las 115 recetas ya hechas. El plan y los niveles están en
> [`PLAN-progresion.md`](PLAN-progresion.md); este archivo es el "cómo".

## Modelo y ubicación
- Leer antes la ficha de bloque de la categoría (`../<categoria>/ficha-de-bloque.md`) y 2 recetas
  hermanas ya hechas. Respetar su estructura.
- Archivos: `../<categoria>/{basicas,intermedias,avanzadas}/NN-<slug>.md`, de menor a mayor
  dificultad dentro de cada nivel. Al final de la ficha de bloque se agrega la receta nueva a la lista.

## Niveles y dificultad (escala completa en el plan)
- **B** básica: dificultad 1 a 2,5. **I** intermedia: 2 a 3, dos técnicas combinadas; remite a las
  básicas. **A** avanzada: 3 a 5, varias preparaciones, escalado y costeo.
- Justificar la dificultad en una línea con los 4 factores del plan (técnicas, procesos, margen de
  error, riesgo).

## Plantilla (mismo orden siempre)
```
# <Nombre>
> Ruta B · <Categoría> · Nivel B|I|A · Dificultad X de 5 · Estado: no probada
**Tiempo:** ... · **Rinde:** ... · **Practica (Ruta A):** <tema>
## Ingredientes (en gramos y ml)      + **Proporción clave:** ...
## Antes de empezar (mise en place)
## Pasos            (con temperatura y punto: qué debe verse, no solo minutos)
## Escalado y costeo   <- SOLO en avanzadas
## Lista de cotejo   (3 a 5 ítems observables, para revisar fuera del programa)
## Error común y cómo se corrige   (enlazar un caso de oficios/cocina-gastronomia/diagnostico-cocina-por-casos/ si calza)
## Conservación e inocuidad
## Verificación      (qué fuentes coinciden; qué NO se pudo confirmar con dos fuentes)
## Fuentes
```
"Escalado y costeo" = cómo pasar la receta al doble o a N comensales con la cuenta hecha (qué
escala lineal y qué no) y el método de costeo con un ejemplo cuyos precios son **inventados y
rotulados "de ejemplo, no reales"**.

## Reglas (todas aprendidas escribiendo las primeras recetas)
1. **La práctica no se hace ni se evalúa desde el programa**: sin cuestionario, nota, logro ni
   pedido de fotos o videos a la plataforma. La lista de cotejo es para uso fuera del programa.
2. **Nada se inventa.** Cada receta sale de fuente institucional (programas oficiales argentinos,
   manuales de institutos, fichas de escuelas de hostelería, organismos públicos, extensiones
   universitarias), se reescribe con palabras propias (nunca copiar texto) y se cita (entidad, URL
   o PDF + página). Cantidades y tiempos se contrastan con al menos dos fuentes independientes.
   Si una fuente no da una cantidad, no se completa con una estimación en silencio: otra fuente, o
   "a gusto" anotado en "Verificación". Todo criterio propio se rotula como tal. Los artículos de la
   revista CSIF (Andalucía) comparten bibliografía y cuentan casi como una sola fuente.
3. **Sin alcohol** (la plataforma tiene menores): si la fuente trae vino, licor, coñac, ron, etc.,
   se sustituye o se elige otra receta, y se anota en "Verificación". Fermentación y maceración
   solo como teoría.
4. **Inocuidad**: ANMAT (manual de manipulación higiénica 2024), SENASA y Guías alimentarias.
   Nada de conservas de baja acidez en frasco, embutidos curados crudos, ni huevo crudo sin tratar en
   preparaciones sin cocción (se usa huevo pasteurizado o una versión sin huevo crudo).
5. **Verificar las cantidades chicas en la fuente cruda** (`curl` o `pdftotext`): la herramienta
   WebFetch resume con un modelo chico y ya se equivocó (pimentón 5 g en vez de 0,5 g).
6. Tablas de porcentajes de panadería de la Guía del IFCP y de Panadería Artesanal (FEIG) tienen
   errores de cálculo: recalcular siempre.
7. Si para una receta prevista no hay fuente institucional con cantidades, **no se rellena**: se
   escriben las que sí se pueden respaldar y se registra cuáles faltan y por qué.
8. Remitir a la Ruta A y al Nivel 0 en vez de repetirlos. Español rioplatense, claro.

## Fuentes que ya funcionaron
UNLP (Curso Cocinero), IES 6012 Salta, MAGyP (recetario 2016 y manual de carnes), Ministerio de
Desarrollo Social (¡A cocinar!), Menú bonaerense (Gobierno de la Provincia de Buenos Aires 2023,
licencia Creative Commons), Recetario Cordero Argentino 2023, IPCVA, SENASA, ANMAT, INTA, INET
(*Química de los alimentos*), fichas de la Escuela de Hostelería de Leioa, manuales de panadería de
`/home/javier/libros/segunda tanda/`. No usar libros de marca comercial, de chefs de autor ni con
"todos los derechos reservados".

## Antes de commitear
`python3 content/material/_qa_tools/check_recetas_ruta_b.py [categoria ...]` (estructura; no
reemplaza que alguien cocine la receta).
