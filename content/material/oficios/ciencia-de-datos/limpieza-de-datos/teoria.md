# Ciencia de datos — Limpieza de datos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../estadistica-descriptiva/`, `../../../informatica/archivos-y-persistencia/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ciencia-de-datos/limpieza-de-datos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Por qué se limpia

Los datos **reales** llegan **sucios**: vacíos, repetidos, mal escritos, en formatos distintos, con errores. **"Basura entra, basura sale"** (*garbage in, garbage out*): **un análisis** sobre datos sucios **da resultados falsos** aunque la técnica sea buena. La limpieza suele llevar **la mayor parte del tiempo** de un proyecto de datos.

**Regla de oro:** **nunca modificar el archivo original**. Se trabaja sobre **una copia** y se **documenta** cada cambio, para que **sea repetible** (idealmente con un **script**, no a mano).

---

## 2. Primero, conocer los datos

- **Cuántas filas y columnas** hay.
- **Tipo** de cada columna (número, texto, fecha).
- **Primeras filas** y **resumen estadístico** (mínimo, máximo, media).
- **Cuántos vacíos** hay por columna.
- **Valores únicos** de las columnas de categorías.
- **Fuente, fecha y significado** de cada columna (**diccionario de datos**).

---

## 3. Problemas típicos y soluciones

| Problema | Ejemplo | Qué se hace |
|:--|:--|:--|
| **Valores faltantes** | celda vacía, `NA`, `-`, `999` | entender **por qué**; **eliminar**, **completar** o **dejar** como faltante |
| **Duplicados** | la misma persona dos veces | **identificar** con una **clave** y **eliminar** repetidos |
| **Tipos incorrectos** | números guardados como texto (`"1.250"`) | **convertir** al tipo correcto |
| **Formatos distintos** | `14/10/2026`, `2026-10-14`, `Oct 14` | **unificar** (ISO 8601: `2026-10-14`) |
| **Texto inconsistente** | `Buenos Aires`, `bs as`, `BUENOS AIRES ` | **normalizar** mayúsculas, espacios, acentos y sinónimos |
| **Unidades mezcladas** | metros y centímetros; pesos y dólares | **convertir** a una sola unidad |
| **Valores imposibles** | edad −5, fecha futura de nacimiento | **corregir** si se puede o **marcar como faltante** |
| **Atípicos** | un ingreso 1000 veces mayor | **investigar** (¿error o caso real?) |
| **Errores de carga** | letras en una columna numérica, separadores raros | **revisar la fuente** |
| **Categorías raras** | "Otro", "Sin dato", pocas veces | **agrupar** o **dejar** según el análisis |

---

## 4. Valores faltantes

**Por qué faltan** importa:

- **Al azar** (un error de carga): se puede **eliminar** la fila o **imputar** con poco sesgo.
- **No al azar** (las personas con ingresos altos **no responden** esa pregunta): **eliminar o completar con el promedio** **sesga** el resultado.

Opciones:

1. **Eliminar filas** (si son pocas y no sistemáticas).
2. **Eliminar la columna** (si casi no tiene datos).
3. **Imputar:** completar con un **valor estimado** (la **mediana** o la **moda**, o un valor **según otras columnas**). La **media** se distorsiona con extremos.
4. **Marcar** que falta (una columna `dato_faltante`).
5. **Dejarlo** como faltante y que el análisis lo maneje.

**Siempre se informa** qué se hizo y **cuántos datos** se vieron afectados. **El cero no es "faltante"**: `0` es un valor real.

---

## 5. Duplicados

- **Duplicado exacto:** **todas** las columnas iguales.
- **Duplicado "parcial":** **la misma entidad** con **pequeñas diferencias** (`Ana Pérez` y `ana perez`): primero **normalizar** y luego comparar.
- **Clave:** una columna (o combinación) que **identifica** una fila de forma única (DNI, número de pedido).
- Antes de borrar, **decidir cuál conservar** (la más reciente, la más completa).

---

## 6. Validar

Después de limpiar:

- **Rangos** razonables (edad entre 0 y 120).
- **Categorías válidas** (solo los valores permitidos).
- **Consistencia** entre columnas (la fecha de egreso **no** es anterior a la de ingreso).
- **Totales** que coinciden con la fuente (**la cantidad de filas** antes y después, y por qué cambió).
- **Revisar a ojo** una muestra.

---

## 7. Herramientas

- **Planillas de cálculo** (filtros, buscar y reemplazar, quitar duplicados): para **pocos datos**.
- **OpenRefine**: limpieza interactiva.
- **SQL**: filtros, agrupaciones, `DISTINCT`.
- **Python con pandas** o **R**: para **procesos repetibles** y **grandes volúmenes**.

```python
import pandas as pd

df = pd.read_csv("ventas.csv")
df = df.drop_duplicates()
df["ciudad"] = df["ciudad"].str.strip().str.title()
df["fecha"] = pd.to_datetime(df["fecha"], errors="coerce")
df["precio"] = pd.to_numeric(df["precio"], errors="coerce")
df = df[df["precio"] > 0]
```

---

## 8. Privacidad y ética

- **Datos personales** (nombre, DNI, dirección, salud): **pedir solo lo necesario**, **protegerlos** y **anonimizar** o **seudonimizar** cuando sea posible.
- **Cumplir las leyes** (en Argentina, la **Ley 25.326** de protección de datos personales).
- **Sesgos:** la limpieza **no** debe **borrar** a grupos minoritarios ni **ocultar** problemas.
- **Documentar** para que otros puedan **verificar**.
- **No inventar datos.**
