# Resolución de problemas — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md).

Fuente: el meta-tronco "Resolución de problemas, decisión y proyectos" en `../../troncos.md` (diagrama mermaid, flechas `A --> B`).

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `detectar-el-problema/` | — | `RP1`, raíz del ciclo. |
| `analizar-causas-y-restricciones/` | `detectar-el-problema/` | `RP1 --> RP2`. |
| `disenar-posibles-soluciones/` | `analizar-causas-y-restricciones/` | `RP2 --> RP3`. |
| `implementar-la-solucion/` | `disenar-posibles-soluciones/` | `RP3 --> RP4`. |
| `evaluar-el-resultado/` | `implementar-la-solucion/` | `RP4 --> RP5`. |
| `mejorar-o-iterar/` | `evaluar-el-resultado/` | `RP5 --> RP6`. |
| `identificar-alternativas/` | `disenar-posibles-soluciones/` | `RP3 --> TD1`. |
| `costo-beneficio/` | `identificar-alternativas/` | `TD1 --> TD2`. |
| `riesgo-e-incertidumbre/` | `costo-beneficio/` | `TD2 --> TD3`. |
| `trade-offs-y-priorizacion/` | `riesgo-e-incertidumbre/` | `TD3 --> TD4`. |
| `definir-alcance-y-objetivos/` | `implementar-la-solucion/` | `RP4 --> GP1`. |
| `planificacion-tareas-e-hitos/` | `definir-alcance-y-objetivos/` | `GP1 --> GP2`. |
| `asignacion-de-recursos/` | `planificacion-tareas-e-hitos/` | `GP2 --> GP3`. |
| `seguimiento-y-control/` | `asignacion-de-recursos/` | `GP3 --> GP4`. |
| `cierre-y-lecciones-aprendidas/` | `seguimiento-y-control/` | `GP4 --> GP5`. |
