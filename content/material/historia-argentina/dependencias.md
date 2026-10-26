# Historia argentina — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Esta materia se separó de **Historia** y de **Historia profunda** el 2026-10-22. Reúne los 23 temas de historia argentina que estaban repartidos
entre las dos: la cadena `AH1`-`AH15` (de los pueblos originarios a la historia reciente, que vivía en Historia profunda como 8.c) y los nodos
`AH6B`, `AH6C`, `AH7B`, `AH7C`, `AH9B`, `AH9C`, `ISI1` y `AH15B` (que vivían en Historia). Las dependencias hacia temas que no son argentinos se
escriben con la ruta de su materia (`../historia/...`, `../pensamiento-historico/...`).

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `pueblos-originarios-territorio-argentino/` | `../historia/poblamiento-planeta-america/`, `../historia/civilizaciones-de-america-precolombinas/` | Nodo `AH1` de `troncos.md` (raíz de 8.c, sin flecha entrante dentro de 8.c). *Deducido acá, no está en el MAPA* (el MAPA sólo dice que 8.c está "colgada de 8.b"). Se apoya en el poblamiento de América y en las civilizaciones precolombinas. |
| `conquista-y-colonia-argentina/` | `pueblos-originarios-territorio-argentino/`, `../historia/conquista-colonizacion-america/` | Nodo `AH2` de `troncos.md` (`AH1 → AH2`). La segunda dependencia (`conquista-colonizacion-america`) está deducida acá, no en el MAPA. |
| `virreinato-y-comercio/` | `conquista-y-colonia-argentina/` | Nodo `AH3` de `troncos.md` (`AH2 → AH3`). |
| `revolucion-de-mayo/` | `virreinato-y-comercio/`, `../historia/ilustracion/` | Nodo `AH4` de `troncos.md` (`AH3 → AH4`). La dependencia de `ilustracion` está deducida acá, no en el MAPA. |
| `guerras-de-independencia-argentina/` | `revolucion-de-mayo/` | Nodo `AH5` de `troncos.md` (`AH4 → AH5`). |
| `guerras-civiles-unitarios-federales/` | `guerras-de-independencia-argentina/` | Nodo `AH6` de `troncos.md` (`AH5 → AH6`). |
| `organizacion-nacional-constitucion-1853/` | `guerras-civiles-unitarios-federales/` | Nodo `AH7` de `troncos.md` (`AH6 → AH6B → AH6C → AH7`). `AH6B`/`AH6C` aún no tienen carpeta, por eso se colapsa a `AH6`. |
| `modelo-agroexportador-inmigracion/` | `organizacion-nacional-constitucion-1853/` | Nodo `AH8` de `troncos.md` (`AH7 → AH7B → AH7C → AH8`). `AH7B`/`AH7C` aún no tienen carpeta, se colapsa a `AH7`. Alimenta `../economia/estructura-productiva-dependencia/`. |
| `ampliacion-democratica-ley-saenz-pena/` | `modelo-agroexportador-inmigracion/` | Nodo `AH9` de `troncos.md` (`AH8 → AH9`). Alimenta `../civica/sufragio-restringido-universal/`. |
| `golpes-de-estado-interrupciones/` | `ampliacion-democratica-ley-saenz-pena/`, `../historia/entreguerras-y-crisis-de-1929/` | Nodo `AH10` de `troncos.md` (`AH9 → AH9B/AH9C → AH10`). `AH9B`/`AH9C` aún no tienen carpeta, se colapsa a `AH9`. La dependencia de `entreguerras-y-crisis-de-1929` (contexto del golpe de 1930) está deducida acá, no en el MAPA. |
| `peronismo-derechos-sociales/` | `golpes-de-estado-interrupciones/` | Nodo `AH11` de `troncos.md` (`AH10 → ISI1 → AH11`). `ISI1` aún no tiene carpeta, se colapsa a `AH10`. |
| `terrorismo-de-estado-argentina/` | `peronismo-derechos-sociales/` | Nodo `AH12` de `troncos.md` (`AH11 → AH12`). Alimenta `../civica/estado-de-derecho-por-que-importa/`. |
| `guerra-de-malvinas/` | `terrorismo-de-estado-argentina/` | Nodo `AH13` de `troncos.md` (`AH12 → AH13`). |
| `recuperacion-democratica-memoria/` | `guerra-de-malvinas/` | Nodo `AH14` de `troncos.md` (`AH13 → AH14`). |
| `historia-reciente-argentina/` | `recuperacion-democratica-memoria/` | Nodo `AH15` de `troncos.md` (`AH14 → AH15`). |
| `rosas-y-la-confederacion/` | `guerras-civiles-unitarios-federales/`, `../pensamiento-historico/guerras/` | Nodo `AH6B` (`AH6 --> AH6B`). Desarrollo real de Rosas/Confederación que `AH6` sólo mencionaba de pasada. |
| `economias-regionales-tempranas/` | `rosas-y-la-confederacion/` | Nodo `AH6C` (`AH6B --> AH6C`). |
| `guerra-del-paraguay-y-triple-alianza/` | `organizacion-nacional-constitucion-1853/`, `../pensamiento-historico/guerras/` | Nodo `AH7B` (`AH7 --> AH7B`). Antes figuraba como `guerra-del-paraguay/` (nombre viejo de la carpeta). `guerras/` como prerrequisito local *deducido acá, no está en el MAPA*: es un caso concreto del proceso general de guerra que ese tema explica. |
| `conquista-del-desierto-y-campana-al-chaco/` | `guerra-del-paraguay-y-triple-alianza/` | Nodo `AH7C` (`AH7B --> AH7C`). Antes figuraba como `conquista-del-desierto/` (nombre viejo de la carpeta). |
| `reforma-universitaria-1918/` | `ampliacion-democratica-ley-saenz-pena/` | Nodo `AH9B` (`AH9 --> AH9B`). Confirmado 4 veces en fuentes independientes durante esta ronda. |
| `semana-tragica-1919/` | `ampliacion-democratica-ley-saenz-pena/` | Nodo `AH9C` (`AH9 --> AH9C`), hermano de `AH9B`. |
| `industrializacion-por-sustitucion-de-importaciones-isi/` | `reforma-universitaria-1918/`, `semana-tragica-1919/` | Nodo `ISI1` (`AH10 --> ISI1`, y `ISI1 --> AH11` Peronismo). Modelo económico que explica de dónde sale el peronismo que viene después. |
| `crisis-de-2001/` | `historia-reciente-argentina/` | Nodo `AH15B` (`AH15 --> AH15B`). |
