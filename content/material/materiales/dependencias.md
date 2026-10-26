# Ciencia de Materiales — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Fuente: el Tronco 19 — Ciencia de Materiales en `../../troncos.md` (diagrama mermaid, flechas `A --> B`).

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `propiedades-mecanicas-dureza-tenacidad-ductilidad/` | `../ingenieria/resistencia-de-materiales/` | `ING8a/ING8b (Tensión, Compresión) --> CM1a..c --> CM1`. |
| `elasticidad-ley-de-hooke-modulo-de-young/` | `../fisica/trabajo-de-una-fuerza/` | `F7P --> CM2`. |
| `plasticidad-y-punto-de-fluencia/` | `elasticidad-ley-de-hooke-modulo-de-young/` | `CM2 --> CM3`. |
| `fatiga-y-fractura/` | `plasticidad-y-punto-de-fluencia/` | `CM3 --> CM4`. |
| `corrosion/` | `../quimica/oxidacion-reduccion/` | `QWP --> CM5`. |
| `familias-de-materiales-metales-ceramicos-polimeros-compuestos/` | `propiedades-mecanicas-dureza-tenacidad-ductilidad/` | `CM1 --> CM6a..d` (metales, cerámicos, polímeros, compuestos). |
| `enlaces-y-estructura-atomica-de-los-materiales/` | `../quimica/enlace-quimico-polaridad/`, `familias-de-materiales-metales-ceramicos-polimeros-compuestos/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Por qué las familias tienen las propiedades que tienen. |
| `estructuras-cristalinas-y-celdas-unitarias/` | `enlaces-y-estructura-atomica-de-los-materiales/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Celdas unitarias, factor de empaquetamiento y densidad. |
| `defectos-cristalinos-y-dislocaciones/` | `estructuras-cristalinas-y-celdas-unitarias/`, `plasticidad-y-punto-de-fluencia/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Explica a nivel de estructura lo que `plasticidad-y-punto-de-fluencia/` describe. |
| `diagramas-de-fase-y-aleaciones/` | `estructuras-cristalinas-y-celdas-unitarias/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Solución sólida, diagrama binario y regla de la palanca. |
| `diagrama-hierro-carbono-y-aceros/` | `diagramas-de-fase-y-aleaciones/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Ferrita, austenita, cementita y perlita. |
| `tratamientos-termicos-temple-revenido-recocido/` | `diagrama-hierro-carbono-y-aceros/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Cruza con `../oficios/metalurgico/`. |
| `endurecimiento-y-conformado-de-metales/` | `defectos-cristalinos-y-dislocaciones/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Trabajo en frío, recristalización y conformado. |
| `ensayos-de-materiales-traccion-dureza-impacto/` | `plasticidad-y-punto-de-fluencia/`, `../ingenieria/ensayo-y-medicion/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Ensayos normalizados; no cita números de norma vigentes. |
| `ceramicos-y-vidrios/` | `familias-de-materiales-metales-ceramicos-polimeros-compuestos/`, `enlaces-y-estructura-atomica-de-los-materiales/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Estructura, fragilidad, vidrio y cemento. |
| `polimeros-termoplasticos-termoestables-elastomeros/` | `../quimica/polimeros-naturales-sinteticos/`, `enlaces-y-estructura-atomica-de-los-materiales/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Familias de polímeros y temperatura de transición vítrea. |
| `materiales-compuestos-fibras-y-matrices/` | `familias-de-materiales-metales-ceramicos-polimeros-compuestos/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Fibras, matrices, laminados y regla de las mezclas. |
| `propiedades-termicas-dilatacion-y-conductividad/` | `../fisica/transmision-calor-conduccion-conveccion-radiacion/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Dilatación, conductividad, choque térmico y fluencia lenta. |
| `propiedades-electricas-y-magneticas-de-los-materiales/` | `../fisica/resistencia-electrica/`, `../fisica/campo-magnetico-imanes-corrientes/`, `enlaces-y-estructura-atomica-de-los-materiales/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Conductores, aislantes, semiconductores y materiales ferromagnéticos. |
| `prevencion-de-la-corrosion-y-proteccion-superficial/` | `corrosion/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Recubrimientos, protección catódica, galvanizado y pasivación. |
| `seleccion-de-materiales-y-sostenibilidad/` | `ensayos-de-materiales-traccion-dureza-impacto/`, `familias-de-materiales-metales-ceramicos-polimeros-compuestos/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Criterios de selección y ciclo de vida. |
