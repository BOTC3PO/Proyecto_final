# PSeInt — Funciones y subprocesos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../tablas-arreglos/`, `../../../informatica/funciones-y-modularidad/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/pseint/funciones/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Para qué sirven

Una **función** (o **subproceso**) es un **bloque con nombre** que realiza una tarea y se puede **usar muchas veces**. Ventajas: **evita repetir** código, **divide** un problema grande en partes pequeñas, **facilita** las pruebas y la lectura.

---

## 2. Dos tipos en PSeInt

- **`Funcion`:** **devuelve un valor** (se usa dentro de una expresión).
- **`SubProceso`:** **no devuelve nada**; realiza una acción (por ejemplo, mostrar un menú).

```
Funcion resultado <- cuadrado(n)
    resultado <- n * n
FinFuncion

SubProceso saludar(nombre)
    Escribir "Hola, ", nombre
FinSubProceso

Algoritmo principal
    Escribir cuadrado(5)        // muestra 25
    saludar("Ana")
FinAlgoritmo
```

- En la `Funcion`, **se asigna el valor de retorno a la variable que está a la izquierda de `<-`** (acá, `resultado`).
- La función se define **antes** o **después** del algoritmo principal (PSeInt lo admite) pero **fuera** de él.
- Un `SubProceso` se **llama** como una instrucción; una `Funcion`, dentro de una expresión.

---

## 3. Parámetros y variables locales

- Los **parámetros** son los datos que recibe la función entre paréntesis (`n`).
- Las **variables definidas dentro** de la función son **locales**: solo existen ahí y desaparecen al terminar.
- Las del algoritmo principal **no se ven** dentro de la función a menos que se pasen como parámetros.

**Por valor y por referencia:**

- **Por valor** (por defecto): la función recibe **una copia**; si la modifica, el original no cambia.
- **Por referencia:** la función trabaja sobre **el original** (`Por Referencia`); se usa para devolver varios resultados o modificar un arreglo.

Los **arreglos** se pasan **por referencia**.

---

## 4. Ejemplos de uso

```
Funcion r <- esPar(n)
    r <- (n MOD 2 = 0)
FinFuncion

Funcion r <- mayorDe(a, b)
    Si a > b Entonces
        r <- a
    SiNo
        r <- b
    FinSi
FinFuncion
```

Funciones típicas: **validar** un dato, **calcular** un impuesto, **buscar** en un arreglo, **mostrar** un menú.

---

## 5. Buenas prácticas

1. **Una función, una tarea.**
2. **Nombres** que digan qué hace (`calcularPromedio`, no `f1`).
3. **Parámetros** en lugar de variables globales.
4. **Probar** cada función por separado con casos conocidos.
5. **Comentar** qué recibe y qué devuelve.

---

## 6. Errores frecuentes

- **Olvidar asignar** el valor de retorno.
- Llamar a la función con **otra cantidad** de parámetros o con **otro tipo**.
- Usar una **variable local** fuera de la función.
- Que una función **muestre y calcule a la vez**: es mejor que calcule y devuelva, y que otra parte muestre.
- **Recursión** sin un caso de salida: una función que se llama a sí misma sin fin.
