# Matemática — Demostración matemática: contraejemplo (teoría)

> Tema del MAPA: `DEM1b` (Tronco 2 — Algebraico). Depende de
> `../ecuacion-primer-grado/` (ver `../dependencias.md`) — y
> conceptualmente de "Validez de un razonamiento" (Filosofía, `FI2`), un
> tema que todavía no tiene carpeta en este repo.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es un contraejemplo,
por qué uno solo alcanza, cómo buscarlos, errores comunes).

---

## Qué es un contraejemplo

Un **contraejemplo** es un caso concreto que muestra que una afirmación
**general** ("para todo x, se cumple P(x)") es **falsa**. No hace falta
mostrar que falla siempre — alcanza con encontrar **un único caso** donde
no se cumple.

## Por qué uno solo alcanza

Una afirmación como "todo número impar es primo" dice que **todos** los
números impares cumplen esa propiedad, sin excepción. Si aparece **un
solo** impar que no es primo, la afirmación ya es falsa — no importa
cuántos impares SÍ sean primos (3, 5, 7, 11, 13...). El número 9 es
impar y no es primo (9 = 3×3): con eso solo, la afirmación general queda
refutada.

Es la contracara exacta de `../demostracion-deduccion/`: para **probar**
una afirmación general hace falta un argumento válido para **todos** los
casos (deducción); para **refutarla**, alcanza con encontrar **uno** que
falle.

## Contraejemplos famosos

- **"Todo número impar es primo"** → contraejemplo: 9 (impar, no primo).
- **"n² + n + 41 siempre da un número primo"** (fórmula de Euler, funciona
  para muchísimos n chicos) → contraejemplo: n = 40, donde 40² + 40 + 41
  = 1681 = 41², no es primo.
- **"Si a² = b², entonces a = b"** → contraejemplo: a = 3, b = −3: 3² = 9
  y (−3)² = 9 son iguales, pero 3 ≠ −3.
- **"n² siempre es mayor que n"** → contraejemplo: n = 0 (0² = 0, no es
  mayor que 0) o n = 1 (1² = 1, no es mayor que 1).

## Cómo buscar un contraejemplo

No hay una receta única, pero conviene probar primero los **casos
límite**: 0, 1, números negativos, el número más chico o más grande
permitido, casos donde dos valores coinciden. Muchas afirmaciones que
parecen ciertas fallan justo en esos bordes.

## Un contraejemplo no sirve para todo

Los contraejemplos refutan afirmaciones **universales** ("para todo x...").
No sirven de la misma forma para afirmaciones **existenciales** ("existe
algún x tal que..."): para esas, un ejemplo que cumpla **prueba** la
afirmación (alcanza con encontrar uno), y para refutarlas hace falta
mostrar que **ningún** caso funciona — lo cual sí requiere una
demostración general, no un solo contraejemplo.

## Errores comunes

- Pensar que hace falta encontrar varios contraejemplos para refutar algo
  — con uno solo alcanza.
- Buscar un contraejemplo para una afirmación existencial (ahí no
  aplica: un contraejemplo refuta un "para todo", no un "existe").
- Descartar una afirmación general por no encontrar rápido un
  contraejemplo — que sea difícil de encontrar no significa que no
  exista, ni que la afirmación esté demostrada.
- Confundir "todavía no encontré un contraejemplo" con "está demostrado"
  — no encontrar uno (por ahora) no es lo mismo que probar que no
  existe.
