# Prueba de carga (L16)

Fecha: 29 de octubre de 2026. Entorno de **prueba** (base `virtualbook_test`), nunca producción.

## Cómo se hizo

- Se crearon 500 alumnos de prueba en la escuela de demostración, todos en el mismo aula
  (`tools/carga/sembrar.ts`), y una instancia aparte de la API con sus propios tokens
  (`tools/carga/tokens.ts`). El límite de pedidos de la API es por usuario, así que cada alumno virtual
  usa su propia sesión.
- `tools/carga/prueba.mjs` simula a cada alumno recorriendo en bucle lo que pide la app al navegar:
  perfil, aulas, progreso, tareas, cuotas, mensajes sin leer, encuestas y módulos.
- La API corrió en modo desarrollo (`tsx`, sin compilar y con el registro de pedidos activo) en el mini PC
  del servidor (Ryzen AI 9 HX 470, 32 GB), junto con PostgreSQL 16. En producción corre compilada.

## Resultados de la API

| Escenario (pausa entre pedidos) | Alumnos | Pedidos/s | Errores | p50 (ms) | p95 (ms) | p99 (ms) |
|---|---|---|---|---|---|---|
| Realista (3 s) | 500 | 155 | 0 % | 3 | 8 | 10 |
| Exigente (1 s, incluye arranque en frío) | 500 | 367 | 0 % | 31 | 951 | 1112 |
| Muy exigente (0,3 s) | 500 | 751 | 0 % | 350 | 518 | 583 |

- Ningún error en ninguno de los tres escenarios.
- Con el uso realista de 500 alumnos a la vez, la API responde en menos de 10 ms en el 99 % de los
  pedidos. Con 750 pedidos por segundo sostenidos, el 95 % sigue por debajo de 0,6 s.
- El primer escenario exigente mostró colas de ~1 s en el p95 al principio (arranque en frío de la API y del
  conjunto de conexiones a la base); con la API ya caliente, una carga el doble de alta dio mejores colas.

## Página principal

Con red simulada de 10 Mbps y 40 ms de latencia, la página principal y el inicio de sesión cargan en
**1,3 s** (1,4 MB sin comprimir: el servidor de vista previa no comprime; en producción Nginx lo hace).
El objetivo del documento 5 era 2 s o menos.

## Conclusión frente a los objetivos del documento 5

- 2 s o menos para la página principal: **cumple** (1,3 s).
- 500 usuarios por institución: **cumple** con amplio margen en uso realista.
- 50 aulas simultáneas: el escenario de 500 alumnos activos a la vez equivale a 50 aulas de 10 alumnos o
  20 aulas de 25 con todos usando la plataforma al mismo tiempo: **cumple**.

## Para repetirla

```bash
# Solo contra la base de pruebas (los scripts se niegan con otra base).
npx tsx tools/carga/sembrar.ts 500
JWT_SECRET=<el de la instancia de prueba> npx tsx tools/carga/tokens.ts 500 tokens.json
node tools/carga/prueba.mjs http://localhost:5252 tokens.json 500 60 3000
npx tsx tools/carga/sembrar.ts borrar
```
