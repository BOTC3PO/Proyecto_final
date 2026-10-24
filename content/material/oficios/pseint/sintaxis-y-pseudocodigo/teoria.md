# PSeInt — Sintaxis y pseudocódigo (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../../informatica/algoritmo-secuencia-de-pasos/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/pseint/sintaxis-y-pseudocodigo/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es PSeInt

**PSeInt** es un programa gratuito para **aprender a programar** escribiendo **pseudocódigo** en español. El **pseudocódigo** describe un algoritmo con palabras claras, sin las reglas estrictas de un lenguaje real. PSeInt lo **ejecuta**, lo **verifica**, dibuja el **diagrama de flujo** y ayuda a entender los errores. Después, esa lógica se traslada a Python, JavaScript u otros.

---

## 2. Estructura de un algoritmo

```
Algoritmo saludo
    Escribir "Hola, mundo"
FinAlgoritmo
```

- Empieza con `Algoritmo` (o `Proceso`) y un **nombre**, y termina con `FinAlgoritmo` (o `FinProceso`).
- Cada **instrucción** va en su línea (o separadas por `;`).
- Los **comentarios** empiezan con `//`.
- Las **mayúsculas** no importan en PSeInt (`escribir` = `Escribir`), pero se escribe consistente.
- Se **indenta** (sangría) lo que está dentro de una estructura, para leer mejor.

---

## 3. Entrada, salida y asignación

```
Algoritmo suma
    Definir a, b Como Entero
    Escribir "Ingrese dos números:"
    Leer a, b
    Escribir "La suma es ", a + b
FinAlgoritmo
```

- **`Escribir`** muestra texto y valores (separados por coma). El texto va entre comillas.
- **`Leer`** pide un dato al usuario y lo guarda en una variable.
- **`<-`** (o `=`) **asigna**: `total <- 10`. Se lee "total recibe 10".
- Un **mensaje antes de `Leer`** le dice al usuario qué ingresar.

---

## 4. Operadores

| Tipo | Operadores |
|:--|:--|
| Aritméticos | `+`, `-`, `*`, `/`, `^` (potencia), `%` o `MOD` (resto) |
| Relacionales | `=` (igual), `<>` (distinto), `<`, `>`, `<=`, `>=` |
| Lógicos | `Y` (`&`), `O` (`\|`), `NO` (`~`) |

> En PSeInt, **`=` en una condición compara**; la **asignación** es `<-`. En muchos lenguajes reales es al revés (`==` compara).

**Precedencia:** paréntesis, `^`, `*` `/` `%`, `+` `-`, comparaciones, `NO`, `Y`, `O`. Los paréntesis despejan dudas.

---

## 5. Funciones matemáticas y de texto

| Función | Resultado |
|:--|:--|
| `RAIZ(x)` | raíz cuadrada |
| `ABS(x)` | valor absoluto |
| `TRUNC(x)` | parte entera (sin decimales) |
| `REDON(x)` | redondeo al entero más cercano |
| `AZAR(n)` | número aleatorio entre 0 y n − 1 |
| `LONGITUD(texto)` | cantidad de caracteres |
| `MAYUSCULAS(t)` / `MINUSCULAS(t)` | cambia las letras |
| `SUBCADENA(t, desde, hasta)` | un trozo de texto |

---

## 6. Cómo se escribe un buen algoritmo

1. **Entender** el problema: ¿qué datos entran? ¿qué se espera obtener?
2. **Nombrar** las variables con significado (`precio`, `cantidad`, no `x`, `y`).
3. **Seguir el orden**: entrada → proceso → salida.
4. **Probar a mano** con datos sencillos (**prueba de escritorio**).
5. Comentar lo que no se entiende de un vistazo.
