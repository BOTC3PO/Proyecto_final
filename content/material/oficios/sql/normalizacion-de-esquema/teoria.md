# SQL — Normalización de esquema (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../join/`, `../../../informatica/normalizacion-bases-datos/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/sql/normalizacion-de-esquema/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El problema

Una sola tabla con todo mezclado:

| id_pedido | cliente | telefono | productos |
|:--|:--|:--|:--|
| 1 | Ana | 11-2222 | lápiz, goma |
| 2 | Ana | 11-9999 | cuaderno |

Problemas: el teléfono de Ana está repetido y **ya no coincide** (anomalía de modificación); una celda tiene varios valores; no se puede registrar un cliente sin pedido (anomalía de inserción); al borrar el único pedido de un cliente, se pierden sus datos (anomalía de borrado).

**Normalizar** es organizar los datos en tablas para **evitar redundancias y anomalías**.

---

## 2. Las formas normales

- **1FN:** cada celda tiene **un solo valor** (nada de listas) y no hay grupos repetidos (`producto1`, `producto2`...). Cada fila se identifica por una clave.
- **2FN:** (ya en 1FN) cada columna depende de **toda** la clave, no de una parte. Importa cuando la clave es compuesta.
- **3FN:** (ya en 2FN) las columnas dependen **solo de la clave** y no de otras columnas no clave (no hay dependencias "transitivas").

Regla práctica: *"cada dato en un solo lugar, y cada tabla trata de una sola cosa"*.

---

## 3. Un esquema normalizado

```sql
CREATE TABLE clientes (
  id INTEGER PRIMARY KEY,
  nombre TEXT NOT NULL,
  telefono TEXT
);
CREATE TABLE pedidos (
  id INTEGER PRIMARY KEY,
  id_cliente INTEGER NOT NULL REFERENCES clientes(id),
  fecha DATE NOT NULL
);
CREATE TABLE productos (id INTEGER PRIMARY KEY, nombre TEXT NOT NULL, precio NUMERIC NOT NULL);
CREATE TABLE lineas_pedido (
  id_pedido INTEGER REFERENCES pedidos(id),
  id_producto INTEGER REFERENCES productos(id),
  cantidad INTEGER NOT NULL,
  PRIMARY KEY (id_pedido, id_producto)
);
```

- Relación **uno a muchos**: un cliente tiene muchos pedidos (clave foránea en el lado "muchos").
- Relación **muchos a muchos** (pedidos–productos): se resuelve con una **tabla intermedia** (`lineas_pedido`).
- Se guarda `precio` en `productos`, pero el precio **al momento de la venta** conviene copiarlo en la línea (los precios cambian y la factura no debe cambiar).

---

## 4. Desnormalizar a propósito

A veces se repite un dato **a propósito** para ganar velocidad de lectura o conservar un histórico (el precio de la venta, un total precalculado). Es una decisión consciente, con el costo de mantener las copias coherentes. Se normaliza primero y se desnormaliza solo con motivo medido.

---

## 5. Tipos y restricciones

Un buen esquema también usa **tipos adecuados** (fechas como `DATE`, dinero como `NUMERIC`/`DECIMAL` y no como flotante), `NOT NULL` donde corresponde, `UNIQUE` para datos que no se repiten (correo) y **claves foráneas** para mantener la integridad.
