# QA y Testing — Tipos de testing (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../que-es-testear/`, `../../../informatica/pruebas-unitarias-integracion/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/qa-testing/tipos-de-testing/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Por nivel (qué parte se prueba)

| Nivel | Prueba | Quién suele hacerlo |
|:--|:--|:--|
| **Unitaria** | una función o clase aislada | programadores |
| **De integración** | cómo se conectan módulos (por ejemplo, el código con la base de datos) | programadores / QA |
| **De sistema** | el producto completo, de punta a punta | QA |
| **De aceptación** | si satisface lo que el cliente pidió | cliente / usuarios / QA |

La "pirámide de pruebas" recomienda **muchas** pruebas unitarias (rápidas y baratas), **algunas** de integración y **pocas** de punta a punta (lentas y frágiles).

---

## 2. Por objetivo (qué se verifica)

- **Funcional:** ¿hace lo que debe? (calcular, guardar, mostrar).
- **No funcional:** *cómo* lo hace:
  - **Rendimiento:** velocidad. **Carga**: muchos usuarios a la vez. **Estrés**: más allá del límite, ¿cómo cae?
  - **Seguridad:** ¿resiste ataques? (acceso no autorizado, inyecciones).
  - **Usabilidad:** ¿es fácil de usar?
  - **Compatibilidad:** navegadores, dispositivos, versiones.
  - **Accesibilidad:** ¿lo puede usar cualquier persona?
- **De regresión:** repetir pruebas tras un cambio para ver que nada se rompió.
- **De humo** (*smoke*): pocas pruebas rápidas para ver si la versión "enciende" y vale la pena probarla más.
- **De cordura** (*sanity*): una revisión acotada, tras un arreglo o cambio pequeño.

---

## 3. Por conocimiento del interior

- **Caja negra:** se prueba sin ver el código, solo entradas y salidas según los requisitos.
- **Caja blanca:** se diseñan pruebas viendo el código (por ejemplo, para recorrer todas las ramas).
- **Caja gris:** una mezcla (se conoce algo de la estructura, como la base de datos).

---

## 4. Por forma de ejecución

- **Manual:** una persona sigue los pasos. Útil para explorar, usabilidad y casos que se hacen una vez.
- **Automatizada:** un programa ejecuta las pruebas. Ideal para repetir muchas veces (regresión). Tiene un costo de armado y mantenimiento; **no reemplaza** a las pruebas manuales ni sirve para todo.

---

## 5. Cómo elegir

No se prueba todo del mismo modo: según el **riesgo** y el momento. Una regla simple: lo **crítico y repetitivo** se automatiza; lo **nuevo, visual o cambiante** se prueba a mano y con exploración (`../testing-exploratorio/`).
