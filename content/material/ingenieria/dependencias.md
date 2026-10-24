# Ingeniería — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Fuente: el Tronco 11 (Ingeniería: del problema al prototipo) en `../../troncos.md` (diagrama mermaid, flechas `A --> B`).
Las dependencias con `../` apuntan a otra materia (documentación; el
script de `examen-jefe` las ignora). Se usa para ordenar los temas por
conocimientos previos al armar los clusters de examen-jefe.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `problema-y-restricciones/` | `../informatica/procesos-tecnicos-artesanales-e-industriales/`, `../investigacion/conclusion-y-comunicacion-de-resultados/` | Nodo `ING1` (`TEC0c --> ING1`, `INV6 --> ING1`). Arranca el ciclo de diseño: qué tiene que cumplir la solución. Raíz dentro de Ingeniería. |
| `investigar-soluciones-existentes/` | `problema-y-restricciones/` | Nodo `ING0` (`ING1 --> ING0`). |
| `diseno-conceptual/` | `investigar-soluciones-existentes/` | Nodo `ING2` (`ING0 --> ING2`). |
| `modelizacion-matematica/` | *(ninguna — nodo raíz; el MAPA no le da flecha entrante)* | Nodo `MODP` (`MODP --> ING3`). Se enseña como representación simplificada de un sistema (variables, parámetros, etapas) y no presupone otro tema de Ingeniería. **Sin prerrequisito en el MAPA**: revisar si conviene colgarlo de matemática. |
| `modelado-y-calculo/` | `diseno-conceptual/`, `modelizacion-matematica/`, `../fisica/dinamica-fuerzas-concurrentes/`, `../fisica/ley-de-ohm/`, `../fisica/maquinas-simples/` | Nodo `ING3` (`ING2 --> ING3`, `MODP --> ING3`, `F5 --> ING3`, `FIS5 --> ING3`, `F14 --> ING3`). |
| `prototipo/` | `modelado-y-calculo/` | Nodo `ING4` (`ING3 --> ING4`). |
| `ensayo-y-medicion/` | `prototipo/`, `../matematica/cifras-significativas-y-error/` | Nodo `ING5` (`ING4 --> ING5`, `M5 --> ING5`). |
| `optimizacion-e-iteracion/` | `ensayo-y-medicion/` | Nodo `ING6` (`ING5 --> ING6`). |
| `comunicar-la-solucion/` | `optimizacion-e-iteracion/`, `../dibujo-tecnico/acotacion-normalizada/` | Nodo `ING7` (`ING6 --> ING7`, `DT5 --> ING7`). |
| `resistencia-de-materiales/` | `modelado-y-calculo/`, `../fisica/resonancia-frecuencia-natural/` | Nodos `ING8a`/`ING8b`/`ING8c` (tensión, compresión, rigidez del triángulo), fusionados en una carpeta: `ING3 --> ING8a`, `ING3 --> ING8b`, `ING8a/ING8b --> ING8c`, `OND6 --> ING8c`. |
| `disciplinas-de-la-ingenieria/` | `problema-y-restricciones/` | Nodos `ING9a`-`ING9g` (civil, mecánica, eléctrica, química, industrial, aeroespacial, biomédica), fusionados en una carpeta: `ING1 --> ING9x`. |
