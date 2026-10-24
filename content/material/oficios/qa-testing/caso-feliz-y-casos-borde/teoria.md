# QA y Testing — Caso feliz y casos borde (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../tipos-de-testing/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/qa-testing/caso-feliz-y-casos-borde/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El caso feliz

El **caso feliz** (*happy path*) es el camino en que **todo sale como se espera**: el usuario ingresa datos válidos, hace lo normal y el sistema responde bien. Es la primera prueba que se hace; si el caso feliz falla, no tiene sentido seguir con casos raros.

Ejemplo: un formulario pide la edad (de 18 a 99). Caso feliz: `30` → se acepta.

---

## 2. Los casos borde

Los **casos borde** (*edge cases*) están en los **límites** de lo permitido. Ahí es donde se concentran muchos errores (`<` en lugar de `<=`, un error "por uno").

Para el rango 18–99:

| Valor | Esperado |
|:--|:--|
| 17 | rechazar (justo debajo del límite) |
| **18** | **aceptar** (límite inferior) |
| 19 | aceptar (justo arriba del límite) |
| 98 | aceptar |
| **99** | **aceptar** (límite superior) |
| 100 | rechazar |

Esta técnica se llama **análisis de valores límite**: se prueba el límite, un valor antes y uno después.

---

## 3. Clases de equivalencia

Muchos valores se comportan igual; no hace falta probarlos todos. Se divide el dominio en **clases** y se prueba **un representante** de cada una:

- Clase válida: 18–99 (probar, por ejemplo, 40).
- Clase inválida baja: menos de 18 (probar 5).
- Clase inválida alta: más de 99 (probar 150).

Junto con los valores límite, es la base de la selección de casos de caja negra.

---

## 4. Otros bordes para pensar

- **Vacío / nulo / en blanco** y solo espacios.
- **Cero, negativo, decimal** donde se espera un entero.
- **Texto muy largo**, caracteres especiales, acentos, emojis, saltos de línea.
- **Fechas:** fin de mes, años bisiestos (29 de febrero), cambio de hora, zonas horarias.
- **Cantidades:** una sola, ninguna, el máximo permitido, una más que el máximo.
- **Listas:** vacía, un elemento, muchos elementos.
- **Concurrencia y tiempo:** dos usuarios a la vez, doble clic, conexión lenta o cortada.

---

## 5. Cómo registrar

Cada caso: **entrada**, **resultado esperado**, **resultado obtenido**. Y en el caso borde conviene anotar **por qué** se eligió (por ejemplo, "límite superior del rango").
