# Ofimática — Fórmulas y referencias (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../formato-y-estilos/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ofimatica/formulas-y-referencias/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Fórmulas

Una **fórmula** empieza con `=` y calcula con valores, referencias a celdas y funciones.

```
=A1+B1          suma de dos celdas
=B2*0,21        el 21 % de B2
=(A1+A2)/2      promedio de dos celdas (los paréntesis fijan el orden)
=SUMA(B2:B10)   suma de un rango
```

> En español, el separador decimal es la **coma** y el de argumentos el **punto y coma** (`=SI(A1>5;"Sí";"No")`). En inglés es el punto y la coma. Los **nombres de las funciones** también cambian con el idioma del programa: `SUMA`/`SUM`, `SI`/`IF`, `BUSCARV`/`VLOOKUP`.

**Orden de operaciones:** paréntesis, potencias, multiplicación y división, suma y resta. `=2+3*4` da 14.

---

## 2. Referencias

| Tipo | Ejemplo | Al copiar la fórmula... |
|:--|:--|:--|
| **Relativa** | `A1` | se **ajusta** a la nueva posición |
| **Absoluta** | `$A$1` | **no cambia** (queda fija) |
| **Mixta** | `$A1` o `A$1` | se fija solo la columna o solo la fila |

La tecla **F4** alterna los tipos. Ejemplo típico: una tasa de IVA en `$E$1` usada por toda una columna: `=B2*$E$1`.

Un **rango** es un grupo de celdas (`A1:A10`). Se puede referir a **otra hoja** (`Hoja2!A1`) y se puede **nombrar** un rango (por ejemplo, `Tasa`) para leer mejor las fórmulas.

---

## 3. Funciones de uso diario

| Función | Qué hace |
|:--|:--|
| `SUMA`, `PROMEDIO`, `MIN`, `MAX` | resumen de números |
| `CONTAR` / `CONTARA` | cuenta celdas con números / con cualquier dato |
| `SI(prueba; si_verdadero; si_falso)` | decide según una condición |
| `SUMAR.SI`, `CONTAR.SI` | suman o cuentan **si cumplen** un criterio |
| `Y`, `O`, `NO` | combinan condiciones |
| `BUSCARV` / `BUSCARX` | busca un valor en una tabla y devuelve otro dato |
| `REDONDEAR` | redondea a cierta cantidad de decimales |
| `HOY`, `AHORA` | fecha y hora actuales |
| `CONCATENAR`, `IZQUIERDA`, `LARGO` | trabajan con textos |

```
=SI(C2>=6;"Aprobado";"Desaprobado")
=SUMAR.SI(A2:A20;"Frutas";C2:C20)
=BUSCARV(E2;A2:C20;3;FALSO)
```

`BUSCARV(valor; tabla; columna; FALSO)`: el último argumento **FALSO** pide coincidencia **exacta** (con VERDADERO se necesita la tabla ordenada y da aproximada).

---

## 4. Errores comunes

| Resultado | Significa |
|:--|:--|
| `#DIV/0!` | división por cero o celda vacía |
| `#VALOR!` | tipo de dato incorrecto (texto donde va un número) |
| `#REF!` | referencia a una celda que ya no existe |
| `#NOMBRE?` | nombre de función o rango mal escrito |
| `#N/A` | el valor buscado no se encontró |
| `#####` | la columna es demasiado angosta |
| `#NUM!` | número inválido (por ejemplo, raíz de un negativo) |

También: **números guardados como texto** (alineados a la izquierda, no suman), **referencias circulares** (una celda que depende de sí misma) y **referencias relativas** donde hacía falta una absoluta.

---

## 5. Buenas prácticas

- No escribir **constantes** dentro de fórmulas (la tasa de IVA va en una celda).
- Comprobar con **ejemplos conocidos**.
- Un cálculo por celda, para poder revisar paso a paso.
- Usar **"Evaluar fórmula"** o **"Mostrar fórmulas"** para depurar.
