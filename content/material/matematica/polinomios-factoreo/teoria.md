# Matemática — Polinomios y factoreo (teoría)

> Tema del MAPA: `A6` (Tronco 2 — Algebraico). Depende de
> `../expresiones-equivalentes/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es un polinomio,
operaciones, factoreo con sus distintos casos, errores comunes).

---

## Qué es un polinomio

Un **polinomio** es una expresión con varios términos, cada uno con una
variable elevada a un exponente entero no negativo, multiplicada por un
coeficiente: 3x² + 5x − 2. El **grado** del polinomio es el exponente más
alto que aparece (acá, 2). Un polinomio de un término es un
**monomio** (5x³); de dos, un **binomio** (x + 3); de tres, un
**trinomio** (x² + 2x + 1).

## Operaciones con polinomios

- **Suma y resta**: se combinan los términos semejantes (misma parte
  literal), igual que en `../expresiones-equivalentes/`, pero ahora con
  distintos grados: (3x² + 2x) + (x² − 5x) = 4x² − 3x.
- **Multiplicación**: se aplica la propiedad distributiva a cada término
  contra cada término del otro polinomio, y después se combinan
  semejantes: (x + 3)(x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6.

## Factoreo: el camino inverso

**Factorear** un polinomio es escribirlo como un **producto** de
factores más simples — el camino inverso a multiplicar. Los casos más
comunes:

### Factor común

Cuando todos los términos comparten un factor, se lo "saca" afuera de un
paréntesis: ax + ay = a(x + y). Ejemplo: 6x² + 9x = 3x(2x + 3) (el
factor común es 3x, no sólo 3).

### Diferencia de cuadrados

a² − b² = (a + b)(a − b). Se reconoce cuando hay dos términos, ambos
cuadrados perfectos, restándose. Ejemplo: x² − 16 = (x + 4)(x − 4).

### Trinomio cuadrado perfecto

a² + 2ab + b² = (a + b)², y a² − 2ab + b² = (a − b)². Se reconoce cuando
el primer y tercer término son cuadrados perfectos, y el del medio es
**exactamente** el doble del producto de sus raíces. Ejemplo:
x² + 6x + 9 = (x + 3)² (porque 2×x×3 = 6x, coincide).

### Trinomio x² + bx + c

Se busca un par de números p y q tales que p×q = c y p+q = b — entonces
x² + bx + c = (x + p)(x + q). Ejemplo: x² + 7x + 12: se buscan dos
números que multiplicados den 12 y sumados den 7 → 3 y 4 →
x² + 7x + 12 = (x + 3)(x + 4).

## Verificar un factoreo

Se multiplica el resultado factoreado y tiene que dar exactamente el
polinomio original — el mismo tipo de chequeo que verificar una
expresión equivalente (ver `../expresiones-equivalentes/teoria.md`).

## Ejemplo resuelto

**Factorear 2x² + 8x + 8**
1. Factor común: 2x² + 8x + 8 = 2(x² + 4x + 4)
2. El trinomio de adentro es cuadrado perfecto: x² + 4x + 4 = (x + 2)²
   (porque 2×x×2 = 4x, coincide)
3. Resultado: **2(x + 2)²**

## Errores comunes

- Sacar sólo parte del factor común (sacar 3 en vez de 3x cuando los dos
  términos también comparten una x).
- Aplicar diferencia de cuadrados a una SUMA de cuadrados (a² + b² no se
  factorea con números reales de esta forma).
- En el trinomio cuadrado perfecto, no verificar que el término del medio
  sea exactamente 2ab — si no coincide, no es un cuadrado perfecto y hay
  que usar otro método.
- En x² + bx + c, buscar dos números que sumen c y multipliquen b (al
  revés de lo que corresponde).
