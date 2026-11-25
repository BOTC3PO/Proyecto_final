# Guía: preguntas de cálculo con datos al azar

Para el plan de contenido de Matemática, Física y Química. Modelo: `fisica/ley-de-ohm/` (preguntas 26 a 32 y la
sección «Ejemplos resueltos» de la teoría).

## Por tema

- Al menos **6 preguntas de cálculo** con `random(...)`, `tipo: input`, `unidad:` y su tolerancia.
- Cada una con `pasos:` (datos → fórmula → reemplazo con los números del intento → resultado con unidad) y
  `explicacion:`.
- Al menos **2 con contexto cotidiano** (la red de 220 V, una receta, el colectivo, la boleta de luz…).
- En la teoría, una sección **«Ejemplos resueltos»** con uno o dos casos cortos: datos, despeje, reemplazo, resultado.

## Cómo elegir los números

- **Armar desde el resultado.** Si la respuesta tiene que ser entera, sortear el resultado y un dato, y calcular el
  otro: `R: random(2, 20)`, `I: random(1, 6)`, `V: R * I` → la pregunta da V y R, y la respuesta es I.
- **Rangos realistas.** Una pava toma entre 4 y 11 A; una ducha, entre 15 y 30 A. Nada de lamparitas de 5.000 Ω.
- **Decimales:** `random_float(min, max, decimales)`, o una lista con `uno_de([0.25, 0.5, 0.75])`. Con decimales en la
  respuesta, usar `tolerancia: 1%` (o 2% si se pide redondear) y decir en el enunciado cuánto redondear.
- **Enteros exactos:** `tolerancia_abs: 0`.

## Errores comunes del formato

- En `pasos:` no se puede escribir `{respuesta}`: poner la cuenta, `{I * R | 2}` (el `| 2` deja 2 decimales).
- En `explicacion:` y en LaTeX, **no usar llaves**: `\frac{V}{R}` se lee como la variable `{V}`. Escribir `V / R`.
- **Números negativos en los pasos:** poner paréntesis a mano, «({b})²» y «× ({c})», o el alumno lee −4² como −16.
- Las variables se definen en `variables:`; lo que solo se muestra puede calcularse en el texto entre llaves.

## Comprobar antes de subir

```bash
api/node_modules/.bin/tsx content/material/_qa_tools/validar_lote.ts content/material/<materia>/<tema>/cuestionario.md
```

Tiene que dar todos los bloques OK. Después, revisar a mano tres sorteos con valores extremos (el más chico y el más
grande de cada rango) y que los pasos se lean bien.
