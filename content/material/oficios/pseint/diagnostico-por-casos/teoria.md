# PSeInt — Diagnóstico de algoritmos por casos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../diagramas-de-flujo/` y los temas anteriores de PSeInt (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/pseint/diagnostico-por-casos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El método

1. **Leer el mensaje** de PSeInt (indica línea y motivo).
2. **Reproducir** el problema con **datos sencillos**.
3. **Seguir el algoritmo a mano** (prueba de escritorio) y anotar los valores de las variables.
4. **Comparar** lo que **debería** pasar con lo que **pasa**: ¿en qué paso se separan?
5. **Corregir una sola cosa** y volver a probar.
6. Probar **casos límite**: cero, uno, el máximo, vacío, negativos.

---

## 2. Síntomas y causas

| Síntoma | Hipótesis para revisar primero |
|:--|:--|
| Error de sintaxis "Se esperaba FinSi / FinPara..." | falta cerrar una estructura |
| "Variable no definida" | falta `Definir` o un error de tipeo en el nombre |
| el programa **no termina** | bucle infinito: la condición nunca cambia, falta actualizar la variable |
| el bucle **no entra** | condición falsa desde el comienzo, mala inicialización |
| el bucle repite **una vez de más o de menos** | límites del `Para` o `<` en lugar de `<=` |
| un **acumulador** da un valor raro | no se inicializó en 0 |
| el **promedio** da mal | se dividió por una cantidad equivocada o antes de sumar todo |
| un `Si` siempre entra o nunca entra | `=` y `<-` confundidos, `Y` y `O` invertidos, condición mal escrita |
| `7 / 2` da 3.5 y se esperaba 3 | la división da real: usar `TRUNC` |
| el texto no suma | se usan textos como números (`"5" + "3"`) |
| "Subíndice fuera de rango" | índice mayor al tamaño o menor a 1 |
| la función no devuelve nada | no se asignó el valor de retorno |
| los cambios en una función no se ven afuera | paso por valor |
| el resultado cambia entre ejecuciones | hay `AZAR` o datos no inicializados |
| mayúsculas y minúsculas en una comparación de texto | los textos se comparan tal cual: convertir con `MINUSCULAS` |

---

## 3. Herramientas de PSeInt

- **Ejecución paso a paso:** ver cada instrucción y los valores de las variables.
- **Puntos de parada** y seguimiento de variables.
- **Verificación de sintaxis** antes de ejecutar.
- **Diagrama de flujo** para ver la lógica.
- **Escribir** valores intermedios para ver qué pasa.

---

## 4. Casos para pensar

- Un `Mientras i <= 10` que nunca incrementa `i` → **infinito**.
- Un `Para i <- 1 Hasta 10` que **suma** `i * 2` sin inicializar `suma` → resultado inesperado.
- `Si edad > 18` cuando debía permitir a los de 18: debía ser `>=`.
- Una prueba **solo con el caso feliz** que oculta un error en el límite.
