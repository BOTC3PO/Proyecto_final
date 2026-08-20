# Química — Balanceo de ecuaciones químicas (teoría)

> Tema del MAPA: `Q1` (puente Álgebra → Química). Depende de
> `../../matematica/sistemas-dos-ecuaciones/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (por qué hace falta
balancear, método de tanteo, método algebraico, ejemplo resuelto,
errores comunes).

---

## Por qué hace falta balancear

Una reacción química no crea ni destruye átomos — sólo los reorganiza
(ley de conservación de la masa). Por eso, en una ecuación química bien
escrita, la cantidad de átomos de **cada elemento** tiene que ser
exactamente la misma de los dos lados (reactivos → productos).
"Balancear" significa encontrar los **coeficientes** (los números
grandes delante de cada fórmula) que hacen que eso se cumpla.

**Importante**: los coeficientes son lo único que se puede cambiar. Los
**subíndices** (los números chicos, pegados a un elemento dentro de una
fórmula, como el 2 de H₂O) nunca se tocan — cambiarlos convertiría la
sustancia en otra distinta.

## Método de tanteo

Ajustar los coeficientes de a poco, empezando por el elemento que
aparece en menos fórmulas, hasta que los átomos de cada elemento
coincidan en los dos lados. Funciona bien para ecuaciones simples.

## Método algebraico

Para ecuaciones más complejas, conviene plantearlo como
`../../matematica/sistemas-dos-ecuaciones/`:

1. Asignar una **letra** a cada coeficiente desconocido.
2. Por cada **elemento** que aparece en la ecuación, plantear una
   ecuación: (átomos de ese elemento en reactivos) = (átomos de ese
   elemento en productos).
3. Resolver el sistema resultante.
4. Si algún coeficiente queda fraccionario, multiplicar **todos** los
   coeficientes por el número que haga falta para que todos sean
   enteros.

## Ejemplo resuelto: síntesis del agua

**H₂ + O₂ → H₂O**

1. Asignar letras: a H₂ + b O₂ → c H₂O
2. Balance de H: 2a = 2c → a = c
3. Balance de O: 2b = c
4. Fijar a=1 (arbitrario) → c=1, y de 2b=1 → b=1/2 (fraccionario)
5. Multiplicar todo por 2 para volverlo entero: a=2, b=1, c=2

**Ecuación balanceada: 2H₂ + O₂ → 2H₂O**

## Verificar el balance

Se cuentan los átomos de cada elemento de los dos lados y tienen que
coincidir exactamente:
- H: 2×2 (de 2H₂) = 4 en reactivos; 2×2 (de 2H₂O) = 4 en productos. ✓
- O: 1×2 (de O₂) = 2 en reactivos; 2×1 (de 2H₂O) = 2 en productos. ✓

## Coeficientes: los enteros más chicos posibles

Una ecuación balanceada tiene que usar el conjunto de coeficientes
enteros **más chico** posible — si todos comparten un factor común, hay
que simplificar (4H₂+2O₂→4H₂O es matemáticamente correcta, pero no está
"bien escrita": se simplifica a 2H₂+O₂→2H₂O).

## Errores comunes

- Cambiar un subíndice en vez de (o además de) un coeficiente — nunca se
  toca la fórmula de una sustancia.
- Balancear sólo algunos elementos y dar por terminado sin revisar
  todos los que aparecen en la ecuación.
- Dejar un coeficiente fraccionario sin multiplicar todo por el número
  que lo vuelve entero.
- No simplificar al final, si todos los coeficientes comparten un
  factor común.
