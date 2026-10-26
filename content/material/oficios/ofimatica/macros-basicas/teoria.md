# Ofimática — Macros básicas (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../formulas-y-referencias/`, `../../../informatica/estructuras-de-control-bucles/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ofimatica/macros-basicas/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es una macro

Una **macro** es una **secuencia de acciones guardada** que se puede **repetir** con un clic o un atajo. Sirve para automatizar tareas repetitivas: dar formato a un informe, limpiar datos, copiar una tabla, imprimir de una manera fija.

Se pueden **grabar** (el programa anota lo que hacés) o **escribir** en un lenguaje (**VBA** en Microsoft Office, **LibreOffice Basic** en LibreOffice, **Apps Script** en Google).

---

## 2. Grabar una macro

1. **Elegir** dónde se guarda (en el libro actual o en uno personal).
2. **Nombrar** la macro (sin espacios, con un nombre que diga qué hace) y, si se quiere, asignar un atajo.
3. **Realizar** las acciones, con orden y sin errores (se graba todo, incluso los errores).
4. **Detener** la grabación.
5. **Ejecutar** y **probar**.

Cuidados al grabar: usar **referencias** adecuadas (si se graba con una celda seleccionada, la macro repetirá esa celda; para que sirva en cualquier lugar hay que grabar con referencias relativas) y **probar siempre sobre una copia**.

---

## 3. Qué hay detrás

Una macro grabada es **código**. Un ejemplo en VBA:

```vb
Sub FormatoInforme()
    Range("A1:D1").Font.Bold = True
    Range("A1:D1").Interior.Color = RGB(220, 230, 241)
    Columns("A:D").AutoFit
End Sub
```

- `Sub ... End Sub` delimita la macro.
- `Range("A1:D1")` es un rango; `.Font.Bold = True` es una **propiedad**.
- Se puede **editar** el código para quitar pasos sobrantes, agregar bucles (`For ... Next`) o condiciones (`If ... Then`).
- Se aplican los mismos conceptos de la programación: **variables**, **condicionales**, **bucles** y **funciones**.

---

## 4. Seguridad

Las macros son **código que se ejecuta en tu equipo** y se usan para propagar **malware**. Reglas básicas:

- **Desconfiar** de archivos con macros recibidos por correo o descargados, aunque parezcan de alguien conocido.
- **No habilitar** el contenido/las macros si no se espera ni se entiende para qué sirve.
- Los programas **bloquean las macros** de documentos de internet por defecto: no desactivar esa protección.
- Usar formatos **sin macros** (`.xlsx`, `.docx`) para documentos comunes; los que guardan macros tienen otra extensión (`.xlsm`, `.docm`).
- **Firmar** digitalmente las macros propias de uso en una organización.

---

## 5. Cuándo usar una macro y cuándo no

- **Sí:** tarea **repetitiva**, con **pasos fijos**, que se hace muchas veces.
- **No:** si una **fórmula**, una **tabla dinámica** o una **función ya hecha** lo resuelve; si los pasos **cambian cada vez**; si el archivo se compartirá con quienes no pueden usar macros.
- **Documentar** qué hace, quién la hizo y las limitaciones.
- Una macro mal hecha puede **borrar datos**: probar con copia y, si puede, mantener una forma de deshacer (las macros suelen **no poder** deshacerse con Ctrl+Z).
