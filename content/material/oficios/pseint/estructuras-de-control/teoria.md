# PSeInt — Estructuras de control (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../variables-y-tipos/`, `../../informatica/estructuras-de-control-condicionales/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/pseint/estructuras-de-control/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Tres formas de ejecutar

Un algoritmo puede ejecutar sus instrucciones de tres modos:

- **Secuencia:** una tras otra, en orden.
- **Selección (decisión):** elige un camino según una **condición**.
- **Repetición (bucle):** repite un bloque mientras se cumpla algo o una cantidad de veces.

---

## 2. Selección: Si

```
Si nota >= 6 Entonces
    Escribir "Aprobado"
SiNo
    Escribir "Desaprobado"
FinSi
```

- Se puede escribir **solo** el `Entonces` (sin `SiNo`).
- Se pueden **anidar** (un `Si` dentro de otro) o encadenar casos.
- La condición debe dar `Verdadero` o `Falso`: `nota >= 6 Y nota <= 10`, no `6 <= nota <= 10`.

```
Si nota >= 9 Entonces
    Escribir "Sobresaliente"
SiNo
    Si nota >= 6 Entonces
        Escribir "Aprobado"
    SiNo
        Escribir "Desaprobado"
    FinSi
FinSi
```

---

## 3. Selección múltiple: Segun

```
Segun opcion Hacer
    1:
        Escribir "Alta"
    2:
        Escribir "Baja"
    3, 4:
        Escribir "Otra opción"
    De Otro Modo:
        Escribir "Opción inválida"
FinSegun
```

Compara **una variable con varios valores**. `De Otro Modo` cubre el resto.

---

## 4. Repetición

| Estructura | Se usa cuando... | Comprueba la condición |
|:--|:--|:--|
| **Para** | se sabe **cuántas veces** repetir | al comienzo |
| **Mientras** | se repite **mientras** algo sea verdadero (puede ser **0 veces**) | al comienzo |
| **Repetir ... Hasta Que** | se debe ejecutar **al menos una vez** | al final |

```
Para i <- 1 Hasta 5 Con Paso 1 Hacer
    Escribir i
FinPara

Mientras saldo > 0 Hacer
    saldo <- saldo - 10
FinMientras

Repetir
    Escribir "Ingrese un número positivo:"
    Leer n
Hasta Que n > 0
```

- **`Repetir ... Hasta Que`** sale cuando la condición **es verdadera** (al revés que `Mientras`, que sigue mientras sea verdadera).
- En `Para`, el **paso** puede ser negativo (`Con Paso -1`) para contar hacia abajo.
- El **bucle infinito** ocurre cuando la condición nunca cambia (olvidar actualizar la variable).

---

## 5. Patrones comunes

- **Contar** cuántas veces ocurre algo (contador).
- **Sumar** valores (acumulador) y calcular el **promedio**.
- **Mayor y menor** de una lista: guardar el mayor visto hasta ahora.
- **Validar la entrada** con `Repetir ... Hasta Que` hasta recibir un valor válido.
- **Menú** con `Segun` dentro de un `Repetir`.

---

## 6. Errores frecuentes

- Olvidar el `FinSi`, `FinPara` o `FinMientras`.
- Poner `=` donde se quería asignar (o `<-` donde se quería comparar).
- **Error "por uno"** en los límites del `Para` (`1 Hasta n` y no `0 Hasta n`).
- No inicializar el acumulador antes del bucle.
