# PowerShell — Condicionales: if y switch (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../pipeline-de-objetos/` y `../../../informatica/estructuras-de-control-condicionales/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/powershell/condicionales-powershell/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. if / elseif / else

```powershell
$edad = 17
if ($edad -ge 18) {
    "Mayor de edad"
} elseif ($edad -ge 13) {
    "Adolescente"
} else {
    "Menor"
}
```

- La condición va entre **paréntesis** y el bloque entre **llaves**. Se escribe `elseif` (junto).
- Los operadores de comparación son **con guion**: `-eq`, `-ne`, `-gt`, `-ge`, `-lt`, `-le`. Los símbolos `>` y `<` **no comparan**: redirigen a archivos.
- Los lógicos son `-and`, `-or`, `-not` (o `!`): `if ($edad -ge 18 -and $tieneEntrada) { ... }`.

---

## 2. Más operadores

| Operador | Hace |
|:--|:--|
| `-like` / `-notlike` | compara con comodines (`*`, `?`) |
| `-match` / `-notmatch` | compara con una expresión regular |
| `-in` / `-notin` | el valor está (o no) en una lista: `'a' -in 'a','b'` |
| `-contains` | la lista contiene el valor: `'a','b' -contains 'a'` |
| `-is` | comprueba el tipo: `$x -is [int]` |

Por defecto las comparaciones de **texto no distinguen mayúsculas**; con `-ceq`, `-clike`... sí.

---

## 3. Verdadero y falso

`$true` y `$false` son los booleanos. Se interpretan como **falsos**: `$false`, `$null`, `0`, el texto vacío `""` y la lista vacía. Todo lo demás es verdadero. `Test-Path ruta` devuelve `$true` o `$false` según exista.

```powershell
if (-not (Test-Path C:\Respaldo)) { New-Item -ItemType Directory C:\Respaldo }
```

---

## 4. switch

```powershell
switch ($dia) {
    'sábado'  { "Fin de semana" }
    'domingo' { "Fin de semana" }
    default   { "Día de semana" }
}
```

Compara un valor con varios casos. Admite `-Wildcard` y `-Regex`. **Cuidado:** puede ejecutar **más de un caso** si varios coinciden; `break` corta.

---

## 5. Una trampa muy común

`if ($a = 5)` **asigna** 5 a `$a` (y el resultado es verdadero); no compara. Y como las listas devuelven resultados de formas distintas, para preguntar si algo es `$null` se escribe `$null -eq $x` (con `$null` a la izquierda).
