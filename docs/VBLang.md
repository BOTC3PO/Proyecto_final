# VBLang — Especificación del lenguaje de plantillas de ejercicios

> **Versión**: 1.1 — borrador, mayo 2026
> **Estado**: especificación previa a la implementación
> **Audiencia**: docentes que usan Virtual Book, desarrolladores que implementan el parser/evaluador

### Cambios respecto a v1.0

- **Loops** (sección 4.3): incluidos en v1 con alcance acotado (rango/iteración, solo en `variables:`, sin nesting, máx 100 iter).
- **Constantes globales** (sección 6.7): `pi`, `e`, `g`, `c`, `G`, `h_planck`, `k_B`, `N_A`, `R` disponibles sin declarar.
- **Sección 10.3** renombrada a "Valores y fórmulas intermedias" con ejemplo explícito de reutilización dentro de la misma plantilla.
- **`marcar_mapa`** (sección 12.2): alcance reducido a entidades de Natural Earth (países, estados/provincias, ciudades pobladas), con limitaciones explicitadas.
- **Evoluciones futuras** simplificadas: solo dos quedan en v2+ ("Funciones reusables entre plantillas del mismo profesor" y "Validación simbólica de respuestas"). El resto se consolidó en v1 o se descartó.

---

## 1. Introducción

### 1.1 ¿Qué es VBLang?

VBLang es el lenguaje de plantillas de ejercicios de Virtual Book. Permite a los docentes crear ejercicios paramétricos: cada plantilla genera, a partir de una sola descripción, una cantidad arbitraria de ejercicios distintos con valores aleatorios pero con la misma estructura conceptual.

Un ejemplo simple para que se entienda:

```vblang
variables:
  v: random(100, 500)
  t: random(1, 10)

respuesta: v * t
unidad: "km"

enunciado: |
  Un vehículo viaja a {v} km/h durante {t} horas.
  ¿Qué distancia recorre?
```

Esta plantilla genera ejercicios como:

- *"Un vehículo viaja a 234 km/h durante 7 horas. ¿Qué distancia recorre?"* → respuesta: 1638 km
- *"Un vehículo viaja a 412 km/h durante 3 horas. ¿Qué distancia recorre?"* → respuesta: 1236 km

Cada vez que se usa la plantilla, los valores cambian. El docente escribe **una vez**, los alumnos resuelven **versiones distintas**.

### 1.2 ¿Para qué sirve?

VBLang resuelve cuatro problemas concretos del trabajo docente:

1. **Ejercicios únicos por alumno**: cada alumno recibe una versión diferente del mismo problema. Reduce la copia entre compañeros.

2. **Reutilización**: el profesor escribe el modelo conceptual una vez y obtiene infinitas variaciones. No hay que armar 30 ejercicios a mano para 30 alumnos.

3. **Personalización del contexto**: el docente decide el contexto narrativo (cohete, auto, tren, persona caminando) sin que cambie la lógica matemática del ejercicio.

4. **Compartir entre docentes**: las plantillas son contenido como cualquier otro. Un profe arma una plantilla, la comparte con su escuela o con toda la plataforma, y otros la usan tal cual o la modifican.

### 1.3 ¿Quién la usa?

VBLang está pensado para tres roles, en orden de exigencia técnica:

- **Profesores sin experiencia en programación**: usan el editor visual. El código VBLang se escribe automáticamente desde un formulario. Pueden cubrir el 80% de los casos sin ver una línea de código.

- **Profesores con experiencia técnica**: alternan entre el editor visual y el modo código según convenga. Editan directamente el código cuando necesitan algo que el formulario no expresa fácilmente.

- **Profesores expertos en su materia**: usan modo código completo. Crean plantillas avanzadas con restricciones, validaciones, múltiples respuestas válidas, pasos pedagógicos.

### 1.4 Lo que VBLang NO es

Para no generar expectativas equivocadas:

- **No es un lenguaje de programación general**. No tiene loops, ni funciones definidas por el usuario, ni clases. Es declarativo: describe qué generar, no cómo.

- **No reemplaza al editor manual**. Los ejercicios que no encajan en una plantilla (ej. una pregunta única sobre un texto específico) siguen creándose como ejercicios manuales en el editor de cuestionarios.

- **No es independiente de Virtual Book**. VBLang está acoplado a la plataforma. Reusa el sistema de generadores existentes, los visuales, los mapas y la infraestructura de cuestionarios.

---

## 2. Conceptos fundamentales

### 2.1 Modelo mental

Una **plantilla VBLang** tiene siempre la misma estructura: declara variables, define cómo se calcula la respuesta, especifica el enunciado, y opcionalmente agrega restricciones, pasos pedagógicos, visuales y otros bloques.

Cuando un alumno carga un ejercicio, el sistema:

1. **Elige valores aleatorios** para cada variable según los rangos declarados.
2. **Verifica las restricciones**: si alguna no se cumple, vuelve a elegir valores hasta que se cumplan (con un límite de intentos).
3. **Evalúa la respuesta** aplicando la fórmula con los valores elegidos.
4. **Genera las opciones** (si es de múltiple choice) con distractores razonables.
5. **Renderiza el enunciado** sustituyendo las variables.
6. **Envía todo al alumno**.

Cuando el alumno responde:

1. El sistema **compara** la respuesta del alumno con la respuesta calculada (con tolerancia si está definida).
2. **Devuelve feedback** según corresponda.

### 2.2 Determinismo y semillas

Cada ejercicio generado tiene una **semilla** (un número o string). Si dos generaciones usan la misma semilla, producen exactamente los mismos valores. Esto es importante para:

- **Reproducibilidad**: si un alumno reporta un error en un ejercicio, el docente puede regenerar el mismo ejercicio con la semilla y verificar.
- **Equidad**: en una evaluación, el sistema puede asegurar que dos alumnos no reciban el mismo ejercicio o, al contrario, que toda la clase reciba el mismo set.
- **Testing**: los tests automáticos del parser pueden verificar valores específicos.

Las semillas son transparentes para el alumno y el profesor en condiciones normales. Solo aparecen en el panel de administración.

### 2.3 Diferencia con generadores hardcoded

Virtual Book tiene un sistema previo de generadores escritos en TypeScript (Cinematica, Biologia, Quimica, etc.). VBLang **no los reemplaza**, sino que **los reutiliza**:

- Una plantilla VBLang puede **asistirse** por un generador hardcoded. En ese caso, el generador hace el cálculo y la plantilla solo personaliza el enunciado y los rangos.
- Una plantilla VBLang puede **funcionar sin generador**, escribiendo toda la fórmula directamente. Este modo es para ejercicios que no encajan en ningún generador existente.

Esta convivencia tiene una ventaja práctica: las fórmulas validadas por el equipo de desarrollo (cinemática, química, etc.) siguen siendo la opción más segura y rica (con pasos, gráficos, etc.), mientras que VBLang ofrece libertad para todo lo demás.

---

## 3. Estructura de una plantilla

Una plantilla VBLang es un archivo de texto con **bloques con nombre**. Cada bloque cumple un rol específico. El orden de los bloques no importa, pero se recomienda mantener un orden canónico para facilitar la lectura.

### 3.1 Bloques disponibles

| Bloque | Obligatorio | Propósito |
|---|---|---|
| `variables:` | Sí | Declara variables con sus rangos o valores. |
| `restricciones:` | No | Condiciones que deben cumplirse al generar. |
| `respuesta:` | Sí (si no hay generador) | Fórmula que calcula la respuesta correcta. |
| `respuestas_validas:` | No | Lista de respuestas alternativas también correctas. |
| `unidad:` | No | Unidad de la respuesta (ej. `"km"`, `"m/s"`). |
| `tolerancia:` | No | Margen aceptable en la comparación numérica. |
| `opciones:` | No | Cantidad de opciones múltiple-choice. |
| `tipo:` | No | Tipo de pregunta (`mc`, `input`, `vf`, `ordenar`, etc.). Default: `input`. |
| `enunciado:` | Sí | Texto del ejercicio mostrado al alumno. |
| `enunciados:` | Sí (en lugar de `enunciado:`) | Lista de variantes de enunciado; se elige una al azar por ejercicio, de forma estable por seed. Mutuamente excluyente con `enunciado:`. Cada variante puede declarar tipo propio (`- mc "..."`, sólo tipos básicos; ver sección 7). |
| `pasos:` | No | Resolución paso a paso (visible al alumno post-respuesta). |
| `visual:` | No | Visual adjunto (chart, mapa, timeline, imagen). |
| `generador:` | No | Generador hardcoded de Virtual Book a usar. |
| `dataset:` | No | Dataset al que está vinculada la plantilla. |
| `metadata:` | No | Información descriptiva (materia, nivel, tags). |

### 3.2 Orden canónico recomendado

```vblang
metadata:
  materia: "fisica"
  nivel: "intermedio"
  tags: ["cinematica", "MRU"]

generador: fisica/cinematica/MRU   # opcional

variables:
  v: random(100, 500)
  t: random(1, 10)

restricciones:
  v * t > 50

respuesta: v * t
unidad: "km"
tolerancia: 1%
opciones: 4

enunciado: |
  Un vehículo viaja a {v} km/h durante {t} horas.
  ¿Qué distancia recorre?

pasos:
  - "Aplicamos la fórmula del MRU: d = v · t"
  - "Sustituimos: d = {v} × {t} = {respuesta | 2} km"

visual:
  tipo: linechart
  x: tiempo
  y: posicion
  desde: 0
  hasta: t
```

### 3.3 Sintaxis general

- Los **nombres de bloques** terminan con dos puntos (`variables:`, `respuesta:`).
- Los **valores simples** van en la misma línea: `unidad: "km"`.
- Los **valores complejos** (varias líneas) usan indentación de 2 espacios.
- Los **strings multilínea** usan el carácter `|` (estilo YAML).
- Los **comentarios** empiezan con `#` y van hasta el fin de línea.
- Los **strings con espacios** van entre comillas dobles: `"hola mundo"`.

```vblang
# Esto es un comentario.
variables:
  v: random(10, 100)      # comentario al final de línea
  nombre: "Martín"        # string entre comillas

unidad: "km/h"              # string simple

enunciado: |
  Esto es un texto largo
  que ocupa varias líneas
  y se renderiza preservando los saltos.
```

---

## 4. Tipos de datos

VBLang tiene 5 tipos de datos primitivos y 2 estructurados.

### 4.1 Primitivos

#### Número

Cualquier número entero o decimal. Usa punto decimal (estándar internacional), no coma.

```vblang
edad: 15
pi: 3.14159
temperatura: -10
masa_electron: 9.109e-31
```

#### Texto (string)

Cadenas entre comillas dobles.

```vblang
nombre: "Martín"
saludo: "hola mundo"
vacio: ""
```

#### Booleano

`verdadero` o `falso`. (No se usa `true`/`false` para mantener el español rioplatense.)

```vblang
es_capital: verdadero
es_planeta: falso
```

#### Unidad

Math.js maneja unidades reales. Una unidad se escribe entre comillas con la sintaxis estándar internacional.

```vblang
velocidad: unidad("100 km/h")
distancia: unidad("5 m")
masa: unidad("2.5 kg")
```

Las unidades soportan **conversión automática** y operaciones aritméticas:

```vblang
v: unidad("100 km/h")
t: unidad("30 min")

# Math.js convierte automáticamente
d: v * t       # resultado: "50 km" (o "50000 m", depende del contexto)
```

#### Nulo

`nulo` indica ausencia de valor.

```vblang
respuesta_alternativa: nulo
```

### 4.2 Estructurados

#### Array (lista)

Lista ordenada de valores. Pueden ser de tipos mixtos.

```vblang
vehiculos: ["cohete", "auto", "tren"]
numeros: [1, 2, 3, 5, 8, 13]
mixto: ["edad", 15, verdadero]
vacio: []
```

Acceso por índice (base 0):

```vblang
primero: vehiculos[0]   # "cohete"
segundo: vehiculos[1]   # "auto"
```

#### Objeto (tupla con campos nombrados)

Mapeo de claves a valores. Se usa cuando una variable agrupa varios atributos relacionados.

```vblang
vehiculo: {
  nombre: "moto",
  articulo: "la",
  velocidad_max: 180
}
```

Acceso por campo:

```vblang
texto: "{vehiculo.articulo} {vehiculo.nombre}"   # "la moto"
v_max: vehiculo.velocidad_max                     # 180
```

Los objetos son especialmente útiles para resolver la concordancia gramatical en español. El docente declara una lista de objetos y la plantilla elige uno al azar:

```vblang
variables:
  vehiculo: uno_de([
    { nombre: "cohete", articulo: "el" },
    { nombre: "auto",   articulo: "el" },
    { nombre: "moto",   articulo: "la" },
    { nombre: "bicicleta", articulo: "la" }
  ])

enunciado: |
  {vehiculo.articulo | capitalizar} {vehiculo.nombre} viaja...
```

### 4.3 Loops para generar arrays

VBLang permite generar arrays con un loop. Útil para crear tablas, series numéricas, o listas paralelas. Solo se permite **dentro de declaraciones de variables**, no en otros bloques.

#### Sintaxis de rango

```vblang
variables:
  n: random(3, 6)

  # Loop con rango numérico (de 1 a n inclusive)
  tabla_cuadrados: [
    for i in 1..n:
      { numero: i, cuadrado: i^2 }
  ]
```

Si `n = 4`, `tabla_cuadrados` queda:

```
[
  { numero: 1, cuadrado: 1 },
  { numero: 2, cuadrado: 4 },
  { numero: 3, cuadrado: 9 },
  { numero: 4, cuadrado: 16 }
]
```

#### Sintaxis de iteración sobre array

```vblang
variables:
  paises: ["Argentina", "Chile", "Uruguay"]

  saludos: [
    for p in paises:
      "Hola " + p
  ]
  # saludos: ["Hola Argentina", "Hola Chile", "Hola Uruguay"]
```

#### Limitaciones (en v1)

- **Solo dentro del bloque `variables:`**: no se permite en `restricciones:`, `pasos:`, `enunciado:`, ni otros bloques.
- **Solo dentro de literales array** `[ ... ]`: el loop debe estar entre corchetes.
- **No anidados**: un loop dentro de otro no está permitido. Si necesitás generar una matriz, decláarala como tabla con `for i in 1..n: { fila_i: [...] }` pero las filas tienen que ser arrays simples.
- **No `while`**: solo se permite iteración con rango fijo o sobre arrays.
- **No `break`/`continue`**: el loop ejecuta todas las iteraciones.
- **Máximo 100 iteraciones por loop**: el sistema rechaza la plantilla al guardar si algún rango excede 100. Esto previene `for i in 1..random(1, 100000)` que rompería todo.

#### Ejemplos de uso típicos

**Tabla de multiplicar:**

```vblang
variables:
  base: random(2, 12)

  tabla: [
    for i in 1..10:
      { factor: i, producto: base * i }
  ]

tipo: input
respuesta: tabla[random(0, 9)].producto    # se elige una fila al azar

enunciado: |
  ¿Cuánto es {base} × {tabla[random(0,9)].factor}?
```

**Serie de fechas para línea de tiempo:**

```vblang
dataset: eventos_historicos

variables:
  cantidad: random(3, 6)
  eventos_elegidos: n_de(eventos_historicos, cantidad)

  # Construir las opciones desordenadas
  opciones_desordenadas: [
    for ev in mezclar(eventos_elegidos):
      ev.titulo
  ]

tipo: ordenar
respuesta_orden: ordenar_por(eventos_elegidos, "año")
opciones_explicitas: opciones_desordenadas

enunciado: |
  Ordená cronológicamente los siguientes eventos:
```

---

## 5. Operadores

### 5.1 Aritméticos

| Operador | Significado | Ejemplo |
|---|---|---|
| `+` | Suma | `a + b` |
| `-` | Resta | `a - b` |
| `*` | Multiplicación | `a * b` |
| `/` | División | `a / b` |
| `%` | Módulo (resto) | `a % b` |
| `^` | Potencia | `a ^ 2` (también `a ** 2`) |
| `-x` | Negación | `-a` |

Math.js maneja la precedencia estándar: `*` y `/` antes que `+` y `-`. Para clarificar, usá paréntesis.

```vblang
discriminante: b^2 - 4*a*c
mitad: (a + b) / 2
```

### 5.2 Comparación

| Operador | Significado |
|---|---|
| `==` | Igual |
| `!=` | Distinto |
| `<` | Menor |
| `>` | Mayor |
| `<=` | Menor o igual |
| `>=` | Mayor o igual |

Se usan principalmente en `restricciones:`.

```vblang
restricciones:
  v > 0
  t != 0
  v * t < 10000
```

### 5.3 Lógicos

| Operador | Significado |
|---|---|
| `y` | Conjunción (AND) |
| `o` | Disyunción (OR) |
| `no` | Negación (NOT) |

Los operadores lógicos en VBLang van en español. Internamente math.js los traduce a `and`, `or`, `not`.

```vblang
restricciones:
  v > 0 y t > 0
  no (a == 0 y b == 0)
  edad >= 18 o tiene_permiso
```

---

## 6. Funciones builtin

VBLang expone funciones de math.js con nombres en inglés (estándar matemático internacional) y algunas funciones de utilidad con nombres en español. La razón del mix: `sqrt`, `log`, `sin` son universalmente reconocidos; funciones específicas de la plataforma (como `uno_de`, `capitalizar`) van en español.

### 6.1 Aleatoriedad

| Función | Descripción | Ejemplo |
|---|---|---|
| `random(min, max)` | Número entero aleatorio entre min y max (inclusive). | `random(1, 10)` → ej. 7 |
| `random_float(min, max)` | Número decimal aleatorio. | `random_float(0, 1)` → ej. 0.4231 |
| `random_float(min, max, decimales)` | Decimal redondeado. | `random_float(0, 1, 2)` → ej. 0.42 |
| `uno_de(array)` | Elige un elemento al azar de un array. | `uno_de(["a", "b", "c"])` → ej. "b" |
| `n_de(array, n)` | Elige n elementos sin repetir. | `n_de([1,2,3,4,5], 2)` → ej. [3, 1] |
| `mezclar(array)` | Devuelve el array desordenado. | `mezclar([1,2,3])` → ej. [2, 3, 1] |

### 6.2 Matemáticas básicas

| Función | Descripción |
|---|---|
| `abs(x)` | Valor absoluto. |
| `sqrt(x)` | Raíz cuadrada. |
| `raiz(x, n)` | Raíz n-ésima. `raiz(8, 3)` → 2. |
| `cbrt(x)` | Raíz cúbica (atajo). |
| `exp(x)` | e elevado a x. |
| `log(x)` | Logaritmo natural (base e). |
| `log10(x)` | Logaritmo decimal. |
| `log(x, base)` | Logaritmo en base arbitraria. |
| `ceil(x)` | Redondeo hacia arriba. |
| `floor(x)` | Redondeo hacia abajo. |
| `round(x)` | Redondeo al entero más cercano. |
| `redondear(x, n)` | Redondeo a n decimales. |
| `min(a, b, ...)` | Mínimo. |
| `max(a, b, ...)` | Máximo. |
| `signo(x)` | -1, 0 o 1 según el signo. |

### 6.2.1 Teoría de números (WO-8)

| Función | Descripción |
|---|---|
| `mcd(a, b)` | Máximo común divisor (siempre no-negativo; el signo se ignora). `mcd(0, n)` = `n`; `mcd(0, 0)` = `0`. |
| `mcm(a, b)` | Mínimo común múltiplo (siempre no-negativo; `mcm(0, n)` = `0`). |
| `es_primo(n)` | `verdadero` si `n` es primo (`n ≥ 2` y solo divisible por 1 y por sí mismo). `es_primo(1)` = `falso`. |
| `divisores(n)` | Lista de divisores positivos de `n` (ordenada). `divisores(12)` → `[1, 2, 3, 4, 6, 12]`. `divisores(0)` lanza error. |
| `factorizar(n)` | Lista de factores primos con multiplicidad. `factorizar(12)` → `[2, 2, 3]`. Requiere `n ≥ 2`. |

### 6.2.2 Salida de fracción simplificada (WO-8)

`fraccion(p, q)` devuelve un **string** con la fracción irreducible:

- `fraccion(3, 6)` → `"1/2"`.
- `fraccion(4, 1)` → `"4"` (sin `/1` cuando la simplificación colapsa al entero).
- El signo se normaliza en el numerador: `fraccion(3, -4)` → `"-3/4"`, `fraccion(-3, -4)` → `"3/4"`.
- `fraccion(1, 0)` lanza error (denominador no puede ser 0).
- Pensado para usarse directamente como `respuesta:` de un `input` (la validación es por igualdad de string) y para interpolarse en `enunciado` / `pasos`.

### 6.3 Trigonometría

Las funciones trigonométricas trabajan con **radianes** por defecto. Para grados, usar las versiones con sufijo `_deg`.

| Función | Descripción |
|---|---|
| `sin(x)`, `cos(x)`, `tan(x)` | En radianes. |
| `sin_deg(x)`, `cos_deg(x)`, `tan_deg(x)` | En grados. |
| `asin(x)`, `acos(x)`, `atan(x)` | Inversas, devuelven radianes. |
| `asin_deg(x)`, `acos_deg(x)`, `atan_deg(x)` | Inversas, devuelven grados. |
| `atan2(y, x)` | Arco-tangente de 2 argumentos. |

### 6.4 Strings

| Función | Descripción | Ejemplo |
|---|---|---|
| `capitalizar(s)` | Primera letra mayúscula. | `capitalizar("hola")` → "Hola" |
| `mayusculas(s)` | Todo mayúsculas. | `mayusculas("hola")` → "HOLA" |
| `minusculas(s)` | Todo minúsculas. | `minusculas("HOLA")` → "hola" |
| `concatenar(a, b, ...)` | Une strings. | `concatenar("a", "b")` → "ab" |
| `longitud(s)` | Cantidad de caracteres. | `longitud("hola")` → 4 |

### 6.5 Arrays y objetos

| Función | Descripción |
|---|---|
| `largo(array)` | Cantidad de elementos. |
| `primero(array)` | Primer elemento. |
| `ultimo(array)` | Último elemento. |
| `sumar(array)` | Suma de elementos numéricos. |
| `promedio(array)` | Promedio aritmético. |
| `mediana(array)` | Mediana (elemento central en lista impar; promedio de los dos centrales en lista par). Lanza error sobre array vacío. |
| `moda(array)` | Valor más frecuente. Devuelve `null` si todos los elementos aparecen 1 vez o si hay empate entre varias modas. |
| `ordenar(array)` | Devuelve el array ordenado. |
| `ordenar_por(array, campo)` | Ordena array de objetos por campo. |
| `filtrar(array, condicion)` | Array filtrado. Ver datasets para sintaxis. |
| `unico(array)` | Elimina duplicados. |

### 6.6 Validación y errores

| Función | Descripción |
|---|---|
| `error(mensaje)` | Lanza un error con el mensaje dado. Usar en restricciones complejas. |
| `es_numero(x)` | Verifica que x sea un número finito (no NaN, no Infinity). |
| `es_positivo(x)` | Verifica que x > 0. |
| `es_entero(x)` | Verifica que x sea entero. |

Ejemplo de uso:

```vblang
restricciones:
  b^2 - 4*a*c >= 0    # discriminante no negativo
  a != 0              # no es ecuación lineal disfrazada
```

### 6.7 Constantes globales del sistema

VBLang expone constantes físicas y matemáticas reconocidas internacionalmente. Están disponibles en todas las plantillas sin necesidad de declararlas.

| Constante | Valor | Descripción |
|---|---|---|
| `pi` | 3.14159265358979 | Pi. |
| `e` | 2.71828182845905 | Número de Euler. |
| `g` | 9.8 | Aceleración gravitatoria terrestre (m/s²). |
| `c` | 299792458 | Velocidad de la luz en el vacío (m/s). |
| `G` | 6.67430e-11 | Constante de gravitación universal (N·m²/kg²). |
| `h_planck` | 6.62607015e-34 | Constante de Planck (J·s). |
| `k_B` | 1.380649e-23 | Constante de Boltzmann (J/K). |
| `N_A` | 6.02214076e23 | Número de Avogadro (1/mol). |
| `R` | 8.314462618 | Constante de los gases ideales (J/(mol·K)). |

Ejemplo de uso:

```vblang
variables:
  radio: random(1, 10)

respuesta: pi * radio^2
unidad: "m²"

enunciado: |
  ¿Cuál es el área de un círculo de radio {radio} m?
```

```vblang
variables:
  m: random(1, 100)
  altura: random(10, 1000)

# Acá uso `g` directamente sin declararla
respuesta: m * g * altura
unidad: "J"
```

**Importante**:

- Si el profesor declara una variable con el mismo nombre que una constante global, la variable local **sobreescribe** la constante dentro de esa plantilla. Ejemplo: declarar `g: 10` para usar gravedad redondeada.
- La constante de Planck se llama `h_planck` (no `h`) para no chocar con la convención de llamar `h` a una altura en problemas de física.

---

## 7. Enunciado y interpolación de variables

El bloque `enunciado:` contiene el texto que se le muestra al alumno. Soporta interpolación de variables con sintaxis `{variable}` y modificadores opcionales.

### 7.1 Interpolación básica

```vblang
variables:
  v: random(100, 500)
  t: random(1, 10)

enunciado: |
  Un vehículo viaja a {v} km/h durante {t} horas.
```

Al generar, las llaves se reemplazan por los valores. Si `v = 234` y `t = 7`:

> *"Un vehículo viaja a 234 km/h durante 7 horas."*

### 7.2 Modificadores de formato

| Sintaxis | Significado | Ejemplo |
|---|---|---|
| `{v}` | Valor tal cual. | `234` |
| `{v\|2}` | 2 decimales. | `234.00` |
| `{v\|0}` | Sin decimales. | `234` |
| `{v\|km/h}` | Con unidad al lado. | `234 km/h` |
| `{v\|capitalizar}` | Capitaliza si es texto. | `Cohete` |
| `{v\|mayusculas}` | Todo mayúsculas. | `COHETE` |
| `{v\|minusculas}` | Todo minúsculas. | `cohete` |

Los modificadores son los soportados por `applyEnunciadoTemplateExt` (ya implementado en el sistema). Si un modificador no se reconoce, se trata como unidad y se pega al final del valor.

### 7.3 Acceso a campos de objetos

```vblang
variables:
  vehiculo: uno_de([
    { nombre: "cohete", articulo: "el" },
    { nombre: "moto",   articulo: "la" }
  ])

enunciado: |
  {vehiculo.articulo | capitalizar} {vehiculo.nombre} viaja...
```

Resultado: *"El cohete viaja..."* o *"La moto viaja..."* según el valor elegido.

### 7.4 Acceso a elementos de array

```vblang
variables:
  numeros: [3, 7, 12, 5]

enunciado: |
  El primer número es {numeros[0]} y el último es {numeros[3]}.
```

### 7.5 Expresiones dentro del enunciado

Para casos puntuales, se permite escribir una expresión completa dentro de `{}`. Útil para mostrar valores derivados sin declarar una variable nueva.

```vblang
variables:
  v: random(100, 500)
  t: random(1, 10)

enunciado: |
  Recorre {v * t | 0} km en total.
```

Esto evalúa la expresión y la muestra. Equivale a haber declarado `total: v * t` y usar `{total}`, pero más conciso para casos simples.

**Importante**: las expresiones dentro de `{}` no deben tener efectos secundarios. Son solo lectura.

### 7.6 Strings multilínea

El carácter `|` después de `enunciado:` indica que lo siguiente es texto multilínea preservando saltos de línea.

```vblang
enunciado: |
  Un cuerpo cae desde una altura de {h} metros.
  Si la gravedad es 9.8 m/s², ¿cuánto tarda en llegar al suelo?
  
  Despreciá el rozamiento del aire.
```

Sin `|`, el valor se trata como string de una línea.

### 7.7 Caracteres especiales

Si el profesor necesita una llave literal `{` o `}` en el texto, las duplica:

```vblang
enunciado: |
  La expresión matemática {{a + b}} significa "a más b".
```

Esto renderiza como: *"La expresión matemática {a + b} significa 'a más b'."*

### 7.8 Enunciados con variantes

A veces el docente quiere que el mismo ejercicio aparezca con redacciones distintas: por contexto narrativo, por edad del curso, o simplemente para reducir la copia entre alumnos. El bloque `enunciados:` declara una **lista de variantes** del enunciado; en cada generación el sistema elige una sola.

#### Sintaxis

```vblang
variables:
  a: random(1, 100)
  b: random(1, 100)

enunciados:
  - "Cuanto es {a} + {b}?"
  - "Calcula la suma de {a} y {b}."
  - "Resolvé el ejercicio: cuanto suman {a} y {b}?"

tipo: input
respuesta: a + b
```

Cada ítem es un string entre comillas precedido por `- `, igual que el bloque `pasos:`. Las interpolaciones `{variable}` y los modificadores (`{v|2}`, `{v|mayusculas}`) funcionan igual que en `enunciado:`.

#### Semántica

- **Mutuamente excluyente con `enunciado:`**. Una plantilla debe declarar exactamente uno de los dos. Si aparecen ambos, el parser rechaza con *"Usá `enunciado:` o `enunciados:`, no ambos"*. Si falta el bloque obligatorio, el mensaje menciona las dos opciones.
- **Mínimo 1 variante**. Una lista vacía se rechaza con un error que indica cómo agregar al menos un ítem.
- **Selección por PRNG**. La variante a usar se elige con el PRNG de la simulación, consumiendo un valor antes de interpolar. Esto preserva el determinismo: con la misma semilla, la misma variante.
- **Determinismo por seed**. Mismo seed + misma plantilla → misma variante. Mismos valores de variables. Mismo enunciado final.
- **Cobertura en validación**. La validación de 100 simulaciones (sección 13.1) fuerza cada variante al menos una vez en la ventana inicial, para que un error de interpolación en cualquier variante (ej. una variable mal escrita) haga fallar la validación, no que pase desapercibido con probabilidad 1/N.
- **Linter contextual**. El linter emite un warning por cada variable no declarada con el formato `enunciados[i]: variable "x" no declarada` para que el docente ubique el error en la variante correcta. También avisa si hay variantes duplicadas exactas.

#### Variantes con tipo propio (PLAN-E §15)

Una variante puede declarar su **propio tipo de pregunta** anteponiendo el
tipo al string:

```vblang
variables:
  a: random(1, 100)
  b: random(1, 100)

opciones: 4

enunciados:
  - "Escribí el resultado de {a} + {b}."
  - mc "Marcá el resultado de {a} + {b}."

tipo: input
respuesta: a + b
```

- **Default heredar**: una variante sin tipo usa el `tipo:` de la plantilla.
- **Sólo tipos básicos**: `mc`, `vf`, `input`, `completar` (comparten la
  semántica de `respuesta:`). Sobre plantillas de tipos especiales
  (`ordenar`, `marcar_mapa`, etc.) las variantes con tipo se rechazan al
  compilar.
- **El corrector corrige por la variante servida**: el tipo del ejercicio
  generado (`GenerationResult.tipo`) es el de la variante sorteada; como la
  corrección regenera por seed, alumno y corrector ven siempre el mismo tipo.
- **Una variante `mc` exige `opciones:` o `opciones_explicitas:`**, igual que
  el tipo base `mc`. Una variante `vf` exige que `respuesta:` evalúe a
  booleano (error en runtime/validación si no).

#### Cuándo usar `enunciados:` y cuándo no

- **Sí**: cuando el mismo ejercicio admite varias redacciones equivalentes (tono formal vs. informal, con o sin contexto, distintos verbos de consigna). Sirve también para diversidad entre alumnos.
- **No**: si las variantes cambian la dificultad o los datos, son ejercicios distintos y deberían ser plantillas separadas.

---

## 8. Restricciones

Las restricciones son condiciones que **deben cumplirse** después de generar los valores de las variables. Si alguna no se cumple, el sistema descarta los valores y vuelve a generar (con un límite de intentos).

### 8.1 Sintaxis

```vblang
variables:
  v: random(50, 200)
  t: random(1, 10)

restricciones:
  v > 0
  t > 0
  v * t < 1500
  v != t
```

Cada línea es una condición que debe evaluar a `verdadero`. Si después de 100 intentos no se cumplen todas, el sistema **lanza un error de generación** que vos como profesor verás al guardar la plantilla.

### 8.2 Operadores disponibles

Ver sección 5.2 y 5.3. Resumen: `==`, `!=`, `<`, `>`, `<=`, `>=`, y los lógicos `y`, `o`, `no`.

### 8.3 Restricciones con varias condiciones

```vblang
restricciones:
  # condición simple
  a != 0
  
  # condición compuesta
  b^2 - 4*a*c >= 0
  
  # con lógicos
  (v > 100 y v < 300) o tipo_calculo == "lineal"
  
  # negación
  no (a == 0 y b == 0)
```

### 8.4 Errores explícitos

Para casos donde la condición es compleja, podés usar `error(mensaje)`:

```vblang
variables:
  a: random(-5, 5)
  b: random(-10, 10)
  c: random(-20, 20)
  discriminante: b^2 - 4*a*c

restricciones:
  a != 0
  discriminante >= 0
  # si discriminante == 0, las dos raíces coinciden,
  # no queremos eso para este ejercicio
  discriminante != 0
```

### 8.5 Buenas prácticas

- **Restricciones acotadas**: si una restricción tiene muy baja probabilidad de cumplirse (ej. `random(0, 1000) == 42`), el sistema va a iterar 100 veces y fallar. Mejor diseñá los rangos para que la restricción se cumpla naturalmente.

- **Evitá restricciones redundantes**: si declarás `v: random(1, 100)`, no agregues `restricciones: v > 0` — ya está garantizado.

- **Probá rangos amplios al principio**: empezá con rangos generosos y agregá restricciones si los valores extremos rompen el ejercicio.

---

## 9. Generadores asistidos

VBLang puede **delegar el cálculo** a un generador hardcoded de Virtual Book (Cinemática, Biología, Química, etc.). Esto es útil cuando ya existe un generador que hace exactamente la matemática que necesitás, pero querés personalizar el enunciado, los rangos o el contexto narrativo.

### 9.1 Sintaxis

```vblang
generador: fisica/cinematica/MRU

variables:
  velocidad: random(100, 500)   # override del rango por defecto del generador
  tiempo: random(1, 10)
  actor: uno_de(["cohete", "auto", "tren"])

enunciado: |
  Un {actor} viaja a {velocidad} km/h durante {tiempo} horas.
  ¿Qué distancia recorre?

# No hace falta declarar `respuesta:` — la calcula el generador MRU
# automáticamente.
```

### 9.2 Cómo funciona

Cuando el sistema ve `generador: fisica/cinematica/MRU`, hace lo siguiente:

1. Carga el generador hardcoded `Cinemática.MRU`.
2. **Usa los rangos del profesor** si los declaró (en este caso `velocidad: random(100, 500)`). Si no los declaró, usa los rangos por defecto del generador.
3. Llama a `generador.generate()` para obtener el cálculo, las opciones y los pasos.
4. **Usa el enunciado del profesor** (con las variables interpoladas) en lugar del enunciado hardcoded del generador.
5. Si el profesor declara `pasos:`, los usa; si no, usa los del generador.
6. Si el profesor declara `visual:`, lo usa; si no, usa el visual del generador (si tiene).

### 9.3 Listado de generadores disponibles

El listado completo está en `documentacion_generadores.json` del backend. En el editor visual aparece como dropdown. Algunos ejemplos:

- `fisica/cinematica/MRU`, `fisica/cinematica/MRUV`, `fisica/cinematica/caida_libre`, ...
- `fisica/dinamica/segunda_ley`, `fisica/energia/cinetica`, ...
- `quimica/gases/boyle`, `quimica/equilibrio/Kc`, `quimica/acido_base/pH_acido_fuerte`, ...
- `economia/finanzas/interes_simple`, `economia/economia_ar/iva`, ...
- `matematicas/aritmetica/operaciones`, `matematicas/algebra/factoreo`, ...
- `biologia/biologia/genetica_mendel`, `biologia/biologia/piramide_biomasas`, ...

### 9.4 Variables expuestas por el generador

Cada generador expone variables que el profesor puede usar en el enunciado. Por ejemplo, `fisica/cinematica/MRU` expone:

- `velocidad`: valor de la velocidad generada.
- `tiempo`: valor del tiempo generado.
- `respuesta`: el resultado del cálculo (distancia).

El editor visual muestra estas variables como chips clickeables al lado del campo de enunciado.

### 9.5 Combinar con variables propias

El profesor puede declarar variables **adicionales** que no existen en el generador:

```vblang
generador: fisica/cinematica/MRU

variables:
  actor: uno_de(["cohete", "auto", "tren", "bicicleta"])
  destino: uno_de(["Mar del Plata", "Bariloche", "Iguazú"])
  # velocidad y tiempo los genera el generador

enunciado: |
  Un {actor} viaja a {destino} a {velocidad} km/h durante {tiempo} horas.
  ¿Qué distancia recorre?
```

### 9.6 Override de rangos

Para sobrescribir el rango por defecto de una variable del generador, declarala explícitamente:

```vblang
generador: fisica/cinematica/MRU

variables:
  velocidad: random(800, 1200)   # mucho más rápido que el default
  tiempo: random(0.5, 2, 1)      # tiempos cortos en decimales
```

### 9.7 Cuándo NO usar generador asistido

Si tu ejercicio no encaja en ningún generador existente, no uses `generador:`. Escribí toda la fórmula manualmente con `respuesta:`. Ejemplos típicos:

- Problemas combinados que mezclan dos generadores (ej. cinemática + energía).
- Variantes específicas no cubiertas (ej. "movimiento con resistencia del aire").
- Ejercicios de materias sin generador (Lengua, Historia, Geografía).

---

## 10. Resolución estructurada

VBLang soporta dos formas de enriquecer la respuesta: **múltiples respuestas válidas** y **pasos de resolución explicados**.

### 10.1 Múltiples respuestas válidas

Para problemas que admiten varias respuestas correctas (ecuaciones cuadráticas, ecuaciones modulares, etc.):

```vblang
variables:
  a: random(1, 5)
  b: random(-10, 10)
  c: random(-20, -1)

restricciones:
  b^2 - 4*a*c > 0     # discriminante positivo: dos raíces reales

# Ambas raíces son respuestas correctas
respuestas_validas:
  - (-b + sqrt(b^2 - 4*a*c)) / (2*a)
  - (-b - sqrt(b^2 - 4*a*c)) / (2*a)

unidad: ""
tolerancia: 1%

enunciado: |
  Resolvé la ecuación cuadrática: {a}x² + {b}x + {c} = 0
  (escribí una sola raíz)
```

El alumno ingresa **una** respuesta. El sistema compara contra las dos. Si coincide con alguna (dentro de la tolerancia), está correcta.

### 10.2 Pasos de resolución

El bloque `pasos:` es una lista ordenada de strings que se muestran al alumno **después** de que responde (correcta o incorrectamente). Cada paso puede contener interpolación de variables y expresiones.

```vblang
variables:
  m: random(1, 10)
  v: random(5, 20)
  h: random(2, 15)
  g: 9.8

respuesta: m * g * h + 0.5 * m * v^2
unidad: "J"

enunciado: |
  Un cuerpo de masa {m} kg se mueve a {v} m/s a una altura de {h} m.
  ¿Cuál es su energía mecánica total? (g = 9.8 m/s²)

pasos:
  - "**Paso 1**: Calculamos la energía potencial."
  - "Ep = m · g · h = {m} × {g} × {h} = {m * g * h | 2} J"
  - "**Paso 2**: Calculamos la energía cinética."
  - "Ec = ½ · m · v² = 0.5 × {m} × {v}² = {0.5 * m * v^2 | 2} J"
  - "**Paso 3**: Sumamos las dos energías."
  - "E = Ep + Ec = {m * g * h | 2} + {0.5 * m * v^2 | 2} = {respuesta | 2} J"
```

Cada paso puede:

- Contener **markdown** (negritas con `**`, listas, etc.).
- **Interpolar variables** declaradas en `variables:`.
- **Interpolar la respuesta** con `{respuesta}`.
- **Evaluar expresiones** dentro de `{}`.

### 10.3 Valores y fórmulas intermedias

Si una fórmula se usa varias veces dentro de la misma plantilla (en `respuesta:`, `respuestas_validas:` o `pasos:`), declarala como variable intermedia y referenciá esa variable en cada uso. Evita repetir y facilita refactorizar.

```vblang
variables:
  m: random(1, 10)
  v: random(5, 20)
  h: random(2, 15)
  ep: m * 9.8 * h
  ec: 0.5 * m * v^2

respuesta: ep + ec
unidad: "J"

pasos:
  - "Energía potencial: Ep = {ep | 2} J"
  - "Energía cinética: Ec = {ec | 2} J"
  - "Total: E = Ep + Ec = {respuesta | 2} J"
```

Las "variables intermedias" se calculan a partir de las random y se pueden usar como cualquier otra variable.

**Caso típico — reusar una fórmula en múltiples lugares**:

```vblang
variables:
  a: random(1, 5)
  b: random(-10, 10)
  c: random(-20, -1)

  # Declaramos las dos raíces UNA vez
  raiz_pos: (-b + sqrt(b^2 - 4*a*c)) / (2*a)
  raiz_neg: (-b - sqrt(b^2 - 4*a*c)) / (2*a)

restricciones:
  a != 0
  b^2 - 4*a*c > 0

respuestas_validas:
  - raiz_pos        # usadas acá
  - raiz_neg

pasos:
  - "x₁ = {raiz_pos | 3}"     # y también acá
  - "x₂ = {raiz_neg | 3}"
```

Esto es útil cuando la misma expresión aparece más de una vez en la plantilla. Si más adelante el profesor ajusta la fórmula, cambia una sola línea.

**Limitación**: este patrón sirve solo dentro de **una misma plantilla**. Si el profesor tiene 20 plantillas que usan la misma fórmula, hoy debe declararla en cada una. La reutilización entre plantillas queda como evolución futura (ver sección 19.1).

### 10.4 Visibilidad de los pasos

Los pasos son visibles al alumno solo:

- **Después de que responda** (no antes, para evitar copia).
- **Si el ejercicio es modo "práctica"**.
- **Si en modo "evaluación"** el profesor habilitó la opción "Mostrar resolución al finalizar".

Esto es configuración del cuestionario, no de la plantilla en sí.

---

## 11. Datasets

Un **dataset** es una tabla de datos que el profesor carga una vez y usa en múltiples plantillas. Sirve para casos donde la "aleatoriedad" no es generar números, sino **elegir una fila** entre muchas opciones precargadas.

Casos típicos:

- Capitales de países (preguntar la capital de un país elegido al azar).
- Figuras retóricas (preguntar la figura de un ejemplo elegido al azar).
- Eventos históricos (preguntar la fecha o el orden).
- Taxonomía biológica (preguntar el reino de un ser vivo).

### 11.1 Estructura de un dataset

Un dataset tiene:

- **Nombre**: identificador único (ej. `paises_sudamerica`).
- **Columnas**: nombres tipados de los campos (ej. `nombre`, `capital`, `poblacion`).
- **Filas**: los datos en sí.

Ejemplo conceptual (no es sintaxis VBLang, es lo que el profesor carga en el editor de datasets):

| nombre | capital | poblacion | codigo_iso |
|---|---|---|---|
| Argentina | Buenos Aires | 45000000 | AR |
| Chile | Santiago | 19000000 | CL |
| Uruguay | Montevideo | 3500000 | UY |
| ... | ... | ... | ... |

### 11.2 Usar un dataset en una plantilla

```vblang
dataset: paises_sudamerica

variables:
  pais: uno_de(paises_sudamerica)

respuesta: pais.capital
tipo: input

enunciado: |
  ¿Cuál es la capital de {pais.nombre}?
```

`uno_de(dataset)` devuelve un **objeto** con todos los campos de la fila elegida. Se accede a cada campo con `.` como cualquier otro objeto.

### 11.3 Opciones múltiples desde un dataset

Para hacer un múltiple choice con distractores tomados del mismo dataset:

```vblang
dataset: paises_sudamerica

variables:
  pais: uno_de(paises_sudamerica)
  # distractores: 3 países distintos al elegido
  distractores: n_de(filtrar(paises_sudamerica, item.nombre != pais.nombre), 3)

respuesta: pais.capital
tipo: mc
opciones_explicitas:
  - pais.capital
  - distractores[0].capital
  - distractores[1].capital
  - distractores[2].capital

enunciado: |
  ¿Cuál es la capital de {pais.nombre}?
```

`filtrar(dataset, condicion)` devuelve una sub-tabla. La variable `item` dentro de la condición refiere a la fila siendo evaluada.

### 11.4 Selección con criterio

```vblang
dataset: paises_sudamerica

variables:
  pais: uno_de(filtrar(paises_sudamerica, item.poblacion > 10000000))

enunciado: |
  Considerando solo países con más de 10 millones de habitantes:
  ¿Cuál es la capital de {pais.nombre}?
```

### 11.5 Múltiples filas para ordenar

```vblang
dataset: revoluciones_americanas

variables:
  eventos: n_de(revoluciones_americanas, 4)

respuesta_orden: ordenar_por(eventos, "año")
tipo: ordenar

enunciado: |
  Ordená cronológicamente los siguientes eventos:

opciones_explicitas:
  - eventos[0].titulo
  - eventos[1].titulo
  - eventos[2].titulo
  - eventos[3].titulo
```

El tipo de pregunta `ordenar` se trata en la sección 12.

### 11.6 Compartir datasets

Los datasets tienen el mismo modelo de visibilidad que las plantillas:

- **Privada**: solo el profesor que la creó.
- **Escuela**: cualquier docente de la escuela.
- **Pública**: aprobada por admin, disponible para todas las escuelas.

Esto permite que un profesor de geografía cargue una vez 100 países y los comparta. Otros profesores arman plantillas usando ese mismo dataset.

---

## 12. Tipos de pregunta especiales

Además de los tipos básicos (`mc`, `vf`, `input`, `completar`), VBLang soporta tres tipos especiales que requieren UI dedicada.

### 12.1 Tipo `ordenar`

El alumno ordena una lista de elementos (drag-and-drop en desktop, tap secuencial en mobile).

```vblang
dataset: revoluciones_americanas

variables:
  eventos: n_de(revoluciones_americanas, 4)

tipo: ordenar
respuesta_orden: ordenar_por(eventos, "año")

enunciado: |
  Ordená cronológicamente:

opciones_explicitas:
  - eventos[0].titulo
  - eventos[1].titulo
  - eventos[2].titulo
  - eventos[3].titulo
```

**Validación**: el alumno acierta si su orden coincide con `respuesta_orden`. Tolerancia: cero (debe ser exacto).

**Variante "ordenar con tolerancia"**: en algunos casos, dos elementos pueden estar en cualquier orden (eventos del mismo año). Esto se modela con `respuestas_validas` listando todos los órdenes aceptables.

### 12.2 Tipo `marcar_mapa`

El alumno hace click sobre una región de un mapa mundial. Reusa el sistema de mapas existente (`api/src/routes/maps.ts` + TopoJSON de Natural Earth).

```vblang
variables:
  pais: uno_de([
    { nombre: "Argentina", iso: "ARG" },
    { nombre: "Brasil",    iso: "BRA" },
    { nombre: "Chile",     iso: "CHL" },
    { nombre: "Perú",      iso: "PER" }
  ])

tipo: marcar_mapa
mapa: world_countries
respuesta_iso: pais.iso

enunciado: |
  Marcá en el mapa la ubicación de {pais.nombre}.
```

**Mapas disponibles** (basados en Natural Earth):

| Identificador | Granularidad | Campo de respuesta esperado |
|---|---|---|
| `world_countries` | Países del mundo | `respuesta_iso`: código ISO 3166-1 alfa-3 (ej. `"ARG"`). |
| `world_states_provinces` | Estados/provincias del mundo | `respuesta_nombre`: nombre exacto según Natural Earth (ej. `"Buenos Aires"`). |
| `world_cities` | Ciudades pobladas marcadas en Natural Earth | `respuesta_nombre`: nombre de la ciudad. |

**Validación**:

- El alumno hace click. El sistema detecta qué feature del TopoJSON quedó bajo el click (con point-in-polygon).
- Extrae el código/nombre de esa feature según el mapa elegido.
- Compara con `respuesta_iso` o `respuesta_nombre`.
- Sin tolerancia: acierta o no.

**Limitaciones importantes** (qué NO soporta este tipo de pregunta):

- **No se pueden marcar regiones custom** ("la Patagonia", "el sudeste asiático", "Centroamérica") porque no son entidades discretas en Natural Earth. Para esos casos usá `mc` con texto.
- **No se pueden marcar accidentes geográficos** como ríos, montañas, lagos. Existen en Natural Earth como features pero no son clickeables como respuesta única.
- **No se puede pedir "click en una coordenada arbitraria"**. La respuesta tiene que coincidir con una feature precargada.
- **No hay tolerancia espacial**: si el alumno hace click justo en la frontera, el sistema decide por el polígono que contenga el punto exacto.

**Editor visual del profesor**: en la interfaz para crear plantillas con `marcar_mapa`, el profesor marca la respuesta correcta clickeando el mapa (no escribiendo el código ISO a mano). El sistema captura el código y lo guarda. El profesor nunca tipea códigos ISO directamente.

**Ejemplo de uso con dataset**:

```vblang
dataset: paises_sudamerica
# columnas del dataset: nombre, capital, iso, poblacion

variables:
  pais: uno_de(paises_sudamerica)

tipo: marcar_mapa
mapa: world_countries
respuesta_iso: pais.iso

enunciado: |
  Marcá en el mapa la ubicación de {pais.nombre}.
```

### 12.3 Tipo `analisis_sintactico`

El alumno marca rangos de palabras en una oración y los etiqueta (sujeto, predicado, etc.). Requiere un componente UI especializado.

```vblang
dataset: oraciones_simples

variables:
  oracion: uno_de(oraciones_simples)

tipo: analisis_sintactico
texto_analizar: oracion.texto

etiquetas_pedidas:
  - id: sujeto
    label: "Sujeto"
    color: "#3b82f6"
    rango_correcto: [oracion.sujeto_inicio, oracion.sujeto_fin]
  - id: predicado
    label: "Predicado"
    color: "#10b981"
    rango_correcto: [oracion.predicado_inicio, oracion.predicado_fin]
  - id: nucleo_verbal
    label: "Núcleo verbal"
    color: "#ef4444"
    rango_correcto: [oracion.nucleo_verbal, oracion.nucleo_verbal]

enunciado: "Identificá las partes de la siguiente oración:"
```

**Carga del dataset**: el profesor carga oraciones con sus índices ya marcados. La interfaz para cargarlas es un editor visual donde el profesor escribe la oración y clickea las palabras de cada parte (no se cargan los índices a mano).

**Validación**:
- Cada etiqueta se compara independientemente.
- El feedback es granular: *"Sujeto: ✓ correcto. Predicado: ✗ incluiste 'al' que es parte del sujeto."*
- La nota final es el promedio de etiquetas correctas.

### 12.4 Tipo `identificar_palabras`

Variante de `analisis_sintactico`: el alumno hace click en palabras sueltas (no rangos) que cumplen una condición.

```vblang
dataset: textos_con_figuras

variables:
  texto: uno_de(textos_con_figuras)

tipo: identificar_palabras
texto_analizar: texto.contenido
respuesta_indices: texto.indices_metaforas    # array de índices de tokens

enunciado: |
  Marcá las palabras del texto que forman parte de una metáfora.
```

### 12.5 Tipo `analisis_spans` (PLAN-E §21 Parte B)

Análisis sintáctico por **rangos de palabras contiguas**: el alumno marca un
rango (clic en la primera y la última palabra), le asigna una etiqueta de la
lista visible y agrega el span. Los spans **pueden solaparse** (el núcleo vive
dentro del sujeto) — es el caso real del análisis sintáctico escolar.

```vblang
enunciado: "Analizá la oración."
tipo: analisis_spans
texto_analizar: "El perro grande corre por el parque"

spans_pedidos:
  - { desde: 0, hasta: 2, etiqueta: "sujeto" }
  - { desde: 3, hasta: 6, etiqueta: "predicado" }
  - { desde: 1, hasta: 1, etiqueta: "nucleo_sujeto" }

etiquetas_disponibles:
  - "objeto directo"        # distractor; las correctas se agregan solas

puntaje_parcial: proporcional # opcional; default todo_o_nada
```

- **Unidad = PALABRA** (token separado por espacios; sin morfemas). `desde`/
  `hasta` son índices 0-based **inclusive** sobre `texto_analizar`; el
  generador valida rango (`0 ≤ desde ≤ hasta < cantidad de palabras`).
- **Etiquetas visibles**: `etiquetas_disponibles:` es opcional; las etiquetas
  usadas en `spans_pedidos:` se agregan solas si faltan. Sirve para sumar
  distractores.
- **Selección múltiple por token** (nivel 1b): dos spans con el mismo rango y
  distinta etiqueta ("perro" = núcleo Y sustantivo) — el formato ya lo cubre.
- **Corrección**: exacta por conjunto, NO NLP. Cada span viaja como string
  canónico `"desde-hasta:etiqueta"` en `answerKey` (la sanitización lo cubre
  con el canario: la clave no llega al alumno). Con
  `puntaje_parcial: proporcional`, el puntaje es
  `max(0, spans correctos − spans de más) / total correctos` (mismo esquema
  que el `mc` múltiple de `multiple: true`).
- **Diferencia con `analisis_sintactico`**: aquel etiqueta palabras SUELTAS
  (pares palabra → etiqueta, todo-o-nada); `analisis_spans` etiqueta rangos,
  admite solapamiento y puntaje parcial.

### 12.6 Resumen de tipos

| Tipo | UI | Respuesta del alumno | Cuándo usar |
|---|---|---|---|
| `mc` | Opciones radio | Una opción | Múltiple choice clásica. |
| `vf` | 2 botones | Verdadero o falso | Verdadero/falso. |
| `input` | Campo texto | Texto o número | Respuesta abierta. |
| `completar` | Campo texto inline | Palabra(s) | Completar huecos. |
| `ordenar` | Drag-and-drop | Lista ordenada | Cronología, jerarquía. |
| `marcar_mapa` | Mapa interactivo | Click en región | Geografía. |
| `analisis_sintactico` | Texto + etiquetas | Palabras etiquetadas | Lengua (palabras sueltas). |
| `analisis_spans` | Texto + rangos | Spans etiquetados (solapables) | Lengua (sujeto/predicado/núcleos). |
| `identificar_palabras` | Texto tokenizado | Set de índices | Lengua, literatura. |

---

## 13. Validación

Una de las características centrales de VBLang es que los errores se detectan **al guardar** la plantilla, no al cargar el ejercicio. Esto significa que cuando un alumno carga un ejercicio, el sistema ya tiene garantía de que no va a fallar (salvo casos extremos).

### 13.1 Validación al guardar

Cuando el profesor presiona "Guardar", el sistema:

1. **Parsea el código VBLang**. Si hay errores de sintaxis, los muestra en línea con posición exacta.
2. **Compila el plan de generación**: convierte variables, restricciones, fórmula y enunciado a representación intermedia.
3. **Corre 100 simulaciones** con valores random extremos dentro de los rangos declarados.
4. **Para cada simulación**:
   - Verifica que las restricciones se cumplan dentro del límite de intentos (default: 50).
   - Evalúa la fórmula de respuesta. Si da NaN, Infinity, raíz de negativo, log de no-positivo, división por cero: registra el problema.
   - Renderiza el enunciado con los valores generados. Si hay variables no encontradas: registra.
   - Si hay visual: verifica que la spec sea válida.
5. **Reporta el resultado**:
   - Si el 100% de las simulaciones pasaron: ✓ la plantilla se guarda.
   - Si el 1-5% falla: ⚠ advertencia, el profesor decide si guardar igual.
   - Si más del 5% falla: ✗ no se permite guardar, hay que arreglar el problema.

### 13.2 Validación al cargar

Cuando el alumno solicita un ejercicio:

1. El sistema obtiene la plantilla precompilada.
2. Genera valores con la semilla del attempt.
3. Si **por casualidad** los valores caen en un caso problemático que la validación al guardar no detectó (probabilidad estimada <1% gracias al paso anterior), el sistema:
   - **Reintenta** con la siguiente semilla determinista (semilla + 1).
   - Hasta 10 reintentos.
   - Si después de 10 reintentos no logra generar un ejercicio válido, **marca el ejercicio como inválido** y lo loguea para revisión del profesor.

El alumno **nunca ve un ejercicio roto**. Si todo falla, recibe un mensaje *"No se pudo generar este ejercicio. Por favor avisá a tu profesor."* y el sistema notifica internamente al profesor.

### 13.3 Validación del editor visual

En el editor visual (sin código), las validaciones son **inmediatas y por campo**:

- Si el profesor escribe `random(100, 50)` (min mayor que max), aparece error inline.
- Si el enunciado referencia `{velocidad}` y no existe la variable, se subraya en rojo.
- Si el profesor declara `respuesta: a / b` y `b` puede ser 0, advertencia automática sugiriendo agregar `b != 0` a restricciones.

### 13.4 Modo "previa"

Al lado del editor hay un panel "Vista previa" con 3 ejercicios generados. Cada vez que el profesor cambia algo, el panel se actualiza (con debounce de 500ms). Si los 3 ejercicios se generan bien, hay alta confianza de que la plantilla funciona.

---

## 14. Manejo de errores

VBLang reporta errores en **texto plano, en español rioplatense, con sugerencia de fix cuando aplica**. No hay códigos numéricos: el mensaje es la documentación. Cuando un error es frecuente, el editor visual ofrece "arreglarlo automáticamente" con un click.

### 14.1 Errores de sintaxis (detectados al parsear)

**Bloque desconocido**

> *"Línea 5: no reconozco el bloque `variabbles:`. ¿Quisiste decir `variables:`?"*

**Falta cierre de string**

> *"Línea 12: el string `"Martín` no tiene comilla de cierre. Agregá `"` al final."*

**Indentación inconsistente**

> *"Línea 8: esta línea tiene 4 espacios de indentación, pero la anterior tenía 2. Usá indentación consistente (2 espacios recomendado)."*

**Falta el `:` después de un bloque**

> *"Línea 3: después de `variables` falta `:`."*

**Carácter inesperado**

> *"Línea 7: encontré un `=` inesperado. ¿Quisiste declarar una variable? Usá `:` en lugar de `=`. Ejemplo: `v: random(10, 100)`."*

**Llave sin cerrar en el enunciado**

> *"Línea 18 del enunciado: la llave abierta en `{velocidad` no se cierra. Agregá `}` al final."*

### 14.2 Errores de tipos (detectados al compilar)

**Función con argumentos equivocados**

> *"Línea 4: la función `random()` necesita 2 argumentos (mínimo, máximo). Recibió 1."*

**Comparación entre tipos incompatibles**

> *"Línea 9: no podés comparar un número con un texto. `v == "hola"` no es válido. ¿Quisiste comparar con un número?"*

**Acceso a campo en valor que no es objeto**

> *"Línea 11: estás accediendo al campo `.nombre` en `v`, pero `v` es un número, no un objeto. Solo los objetos tienen campos."*

**Variable no declarada**

> *"Línea 6 del enunciado: la variable `{vlocidad}` no existe. Variables declaradas: `velocidad`, `tiempo`. ¿Quisiste escribir `{velocidad}`?"*

### 14.3 Errores de generación (detectados al validar con 100 simulaciones)

**División por cero**

> *"En 23 de 100 simulaciones, la fórmula `a / b` dio división por cero porque `b` puede ser 0. Sugerencia: agregá `b != 0` al bloque `restricciones:`."*

**Raíz de número negativo**

> *"En 17 de 100 simulaciones, `sqrt(discriminante)` dio error porque `discriminante` puede ser negativo. Sugerencia: agregá `b^2 - 4*a*c >= 0` al bloque `restricciones:` para garantizar solo discriminante no negativo."*

**Logaritmo de cero o negativo**

> *"En 8 de 100 simulaciones, `log(x)` dio error porque `x` puede ser ≤ 0. Sugerencia: agregá `x > 0` al bloque `restricciones:`."*

**Restricción imposible**

> *"La restricción `v > 1000 y v < 100` no se puede cumplir (es una contradicción). Revisá los operadores."*

**Restricción muy restrictiva**

> *"La restricción `random(1, 1000) == 42` solo se cumple en ~1 de 1000 generaciones. Después de 50 intentos no logré generar un ejercicio válido. Sugerencia: cambiá el rango o la restricción."*

**Resultado infinito**

> *"En 5 de 100 simulaciones, la fórmula dio Infinity. Esto ocurre cuando un valor crece sin límite (típicamente división por valor muy pequeño). Revisá los rangos de las variables del denominador."*

**Resultado NaN**

> *"En 2 de 100 simulaciones, la fórmula dio NaN (no es un número). Esto ocurre típicamente por `0/0`, `Infinity - Infinity`, o `0 * Infinity`. Revisá la fórmula."*

### 14.4 Errores de unidades

**Conversión imposible**

> *"Línea 10: estás multiplicando una velocidad (km/h) por una temperatura (°C). Esa operación no tiene sentido físico. Math.js no puede convertir entre unidades incompatibles."*

**Unidad esperada distinta**

> *"Declaraste `unidad: \"km\"` pero la fórmula da metros. Math.js convertirá automáticamente, pero quizás quisiste declarar `unidad: \"m\"`."*

**Unidad mal escrita**

> *"Línea 4: `kmh` no es una unidad válida. ¿Quisiste decir `km/h`?"*

### 14.5 Errores de generadores asistidos

**Generador no encontrado**

> *"El generador `fisica/cinematica/MRX` no existe. Generadores disponibles para `fisica/cinematica`: `MRU`, `MRUV`, `caida_libre`, `movimiento_vertical`, `movimiento_horizontal`, `relacion_distancia_tiempo`, `conversion_unidades`."*

**Variable del generador no usada**

> *"El generador `fisica/cinematica/MRU` expone las variables `velocidad`, `tiempo`, `respuesta`. Tu enunciado no usa ninguna. ¿Está bien?"*

**Variable usada que no existe en el generador**

> *"Estás usando `{altura}` en el enunciado, pero el generador `fisica/cinematica/MRU` no expone esa variable. Variables disponibles: `velocidad`, `tiempo`, `respuesta`."*

### 14.6 Errores de dataset

**Dataset no encontrado**

> *"El dataset `paises_centroamerica` no existe. Datasets disponibles para tu escuela: `paises_sudamerica`, `paises_europa`, `figuras_retoricas`."*

**Acceso a columna inexistente**

> *"El dataset `paises_sudamerica` tiene columnas: `nombre`, `capital`, `poblacion`, `iso`. Estás accediendo a `pais.continente` que no existe."*

**Dataset vacío**

> *"El dataset `paises_sudamerica` no tiene filas. Agregá al menos una fila antes de usarlo en una plantilla."*

**Filtro que deja conjunto vacío**

> *"El filtro `item.poblacion > 100000000` aplicado al dataset `paises_sudamerica` no devolvió ninguna fila. Revisá la condición."*

---

## 15. Sharing y versionado

Las plantillas VBLang siguen el mismo modelo de visibilidad que los cuestionarios del editor V2 y los módulos.

### 15.1 Visibilidad

| Nivel | ¿Quién la ve? | ¿Quién la puede editar? |
|---|---|---|
| `privada` | Solo el creador. | Solo el creador. |
| `escuela` | Docentes de la misma escuela. | Solo el creador. Otros docentes deben "forkear". |
| `publica` | Todos los docentes (post-aprobación admin). | Solo admin. Otros forkean. |

El default al crear es `privada`. El profesor cambia a `escuela` cuando quiere compartirla, y solicita `publica` cuando considera que la plantilla está pulida para uso general.

### 15.2 Fork ("guardar copia")

Cuando un docente quiere usar una plantilla de otro pero modificarla, forkea:

- El sistema crea una copia con `visibility: privada` y `owner: docente_actual`.
- La copia mantiene un campo `basado_en` apuntando a la plantilla original (para trazabilidad).
- Las dos plantillas son **independientes**: cambios en la original no afectan al fork ni viceversa.

Esto es importante porque resuelve el caso típico: *"esta plantilla me sirve pero le quiero cambiar el rango de la velocidad"*. El docente no necesita pedirle permiso al original, simplemente forkea y modifica.

### 15.3 Versionado

Cada plantilla mantiene **historial de versiones**:

- Cada vez que se guarda, se incrementa `version` (entero).
- La versión anterior queda accesible para rollback.
- Los ejercicios ya generados (en attempts de alumnos) están atados a la versión específica que se usó.

Esto significa que si el profesor edita una plantilla mientras un alumno está resolviendo un ejercicio basado en ella, el alumno **completa su ejercicio con la versión vieja**. Cambios futuros solo afectan ejercicios nuevos.

### 15.4 Modelo de datos

```prisma
model PlantillaEjercicio {
  id            String   @id
  ownerUserId   String   @map("owner_user_id")
  schoolId      String?  @map("school_id")
  visibility    String   // "privada" | "escuela" | "publica"
  nombre        String
  descripcion   String?
  materia       String?  // "fisica" | "matematicas" | etc.
  tags          String?  // JSON array de strings
  codigoDsl     String   @map("codigo_dsl")
  version       Int      @default(1)
  basadoEn      String?  @map("basado_en")
  publicAprobado Boolean @default(false) @map("public_aprobado")
  createdAt     String   @map("created_at")
  updatedAt     String   @map("updated_at")

  @@map("plantillas_ejercicio")
  @@index([ownerUserId])
  @@index([schoolId, visibility])
  @@index([materia, visibility])
}

model PlantillaEjercicioVersion {
  id         String @id
  plantillaId String @map("plantilla_id")
  version    Int
  codigoDsl  String @map("codigo_dsl")
  createdAt  String @map("created_at")
  createdBy  String @map("created_by")

  @@map("plantillas_ejercicio_versiones")
  @@unique([plantillaId, version])
  @@index([plantillaId])
}
```

### 15.5 API endpoints

```
GET    /api/plantillas?visibility=escuela&materia=fisica&q=cinematica
GET    /api/plantillas/:id
POST   /api/plantillas                      # crear
PUT    /api/plantillas/:id                  # editar (crea nueva versión)
POST   /api/plantillas/:id/fork             # forkear
DELETE /api/plantillas/:id                  # archivar (no borra de verdad)
GET    /api/plantillas/:id/versions
GET    /api/plantillas/:id/preview          # devuelve 3 ejercicios generados
```

---

## 16. Ejemplos completos

Esta sección contiene 8 plantillas reales cubriendo todos los tipos de ejercicio. Cada una está validada conceptualmente y debería funcionar tal cual cuando se implemente el parser.

### 16.1 Cinemática — MRU sin generador

```vblang
metadata:
  nombre: "Distancia recorrida en MRU"
  materia: "fisica"
  tags: ["cinematica", "MRU", "basico"]

variables:
  v: random(50, 200)
  t: random(1, 8)
  actor: uno_de(["cohete", "auto", "tren", "moto"])

restricciones:
  v > 0
  t > 0

respuesta: v * t
unidad: "km"
tolerancia: 1%
opciones: 4

enunciado: |
  Un {actor} viaja a {v} km/h durante {t} horas.
  ¿Qué distancia recorre?

pasos:
  - "Aplicamos la fórmula del MRU: **d = v · t**"
  - "Sustituimos: d = {v} × {t} = {respuesta | 2} km"
```

### 16.2 Cinemática — MRU con generador asistido

Mismo problema que arriba, pero delegando el cálculo a Cinemática:

```vblang
metadata:
  nombre: "Distancia MRU (asistido)"
  materia: "fisica"
  tags: ["cinematica", "MRU"]

generador: fisica/cinematica/MRU

variables:
  velocidad: random(50, 200)   # override del rango del generador
  tiempo: random(1, 8)
  actor: uno_de(["cohete", "auto", "tren", "moto"])

enunciado: |
  Un {actor} viaja a {velocidad} km/h durante {tiempo} horas.
  ¿Qué distancia recorre?

# No se declara respuesta ni pasos; los provee el generador.
```

### 16.3 Cuadrática con dos respuestas válidas

```vblang
metadata:
  nombre: "Ecuación cuadrática"
  materia: "matematicas"
  tags: ["algebra", "cuadratica", "intermedio"]

variables:
  a: random(1, 5)
  b: random(-10, 10)
  c: random(-20, -1)

restricciones:
  a != 0
  b^2 - 4*a*c > 0       # discriminante positivo
  b^2 - 4*a*c != 0      # raíces distintas

respuestas_validas:
  - (-b + sqrt(b^2 - 4*a*c)) / (2*a)
  - (-b - sqrt(b^2 - 4*a*c)) / (2*a)

unidad: ""
tolerancia: 2%

enunciado: |
  Resolvé la ecuación cuadrática:

  **{a}x² + {b}x + ({c}) = 0**

  (escribí una sola raíz; cualquiera de las dos es válida)

pasos:
  - "Aplicamos la fórmula resolvente: **x = (-b ± √(b² - 4ac)) / (2a)**"
  - "Calculamos el discriminante: Δ = {b}² - 4·{a}·({c}) = {b^2 - 4*a*c}"
  - "Como Δ > 0, hay dos raíces reales distintas."
  - "x₁ = (-({b}) + √{b^2 - 4*a*c}) / (2·{a}) = {(-b + sqrt(b^2 - 4*a*c)) / (2*a) | 3}"
  - "x₂ = (-({b}) - √{b^2 - 4*a*c}) / (2·{a}) = {(-b - sqrt(b^2 - 4*a*c)) / (2*a) | 3}"
```

### 16.4 Energía con pasos explicados

```vblang
metadata:
  nombre: "Energía mecánica total"
  materia: "fisica"
  tags: ["energia", "intermedio"]

variables:
  m: random(1, 10)
  v: random(5, 20)
  h: random(2, 15)
  g: 9.8
  ep: m * g * h
  ec: 0.5 * m * v^2

respuesta: ep + ec
unidad: "J"
tolerancia: 2%
opciones: 4

enunciado: |
  Un cuerpo de masa **{m} kg** se mueve a **{v} m/s** a una altura de **{h} m**
  sobre el nivel de referencia.

  ¿Cuál es su energía mecánica total? (Considerar g = 9,8 m/s²)

pasos:
  - "**Paso 1**: Calculamos la energía potencial gravitatoria."
  - "Ep = m · g · h = {m} × {g} × {h} = **{ep | 2} J**"
  - "**Paso 2**: Calculamos la energía cinética."
  - "Ec = ½ · m · v² = 0,5 × {m} × {v}² = **{ec | 2} J**"
  - "**Paso 3**: Sumamos ambas energías."
  - "E = Ep + Ec = {ep | 2} + {ec | 2} = **{respuesta | 2} J**"
```

### 16.5 Geografía — Capitales sudamericanas (con dataset)

```vblang
metadata:
  nombre: "Capitales de América del Sur"
  materia: "geografia"
  tags: ["capitales", "sudamerica"]

dataset: paises_sudamerica   # columnas: nombre, capital, iso, poblacion

variables:
  pais: uno_de(paises_sudamerica)
  distractores: n_de(
    filtrar(paises_sudamerica, item.iso != pais.iso),
    3
  )

tipo: mc
respuesta: pais.capital

opciones_explicitas:
  - pais.capital
  - distractores[0].capital
  - distractores[1].capital
  - distractores[2].capital

enunciado: |
  ¿Cuál es la capital de {pais.nombre}?
```

### 16.6 Geografía — Marcar país en el mapa

```vblang
metadata:
  nombre: "Localizar países en el mapa"
  materia: "geografia"
  tags: ["mapa", "sudamerica"]

dataset: paises_sudamerica   # columnas: nombre, capital, iso

variables:
  pais: uno_de(paises_sudamerica)

tipo: marcar_mapa
mapa: world_countries
respuesta_iso: pais.iso

enunciado: |
  Marcá en el mapa la ubicación de {pais.nombre}.
```

### 16.7 Lengua — Análisis sintáctico

```vblang
metadata:
  nombre: "Identificar sujeto y predicado"
  materia: "lengua"
  tags: ["sintaxis", "oracion_bimembre"]

dataset: oraciones_simples
# Columnas:
#   - texto                (string)
#   - sujeto_inicio        (int, índice de token)
#   - sujeto_fin           (int)
#   - predicado_inicio     (int)
#   - predicado_fin        (int)
#   - nucleo_verbal        (int, índice puntual)

variables:
  oracion: uno_de(oraciones_simples)

tipo: analisis_sintactico
texto_analizar: oracion.texto

etiquetas_pedidas:
  - id: sujeto
    label: "Sujeto"
    color: "#3b82f6"
    rango_correcto: [oracion.sujeto_inicio, oracion.sujeto_fin]
  - id: predicado
    label: "Predicado"
    color: "#10b981"
    rango_correcto: [oracion.predicado_inicio, oracion.predicado_fin]
  - id: nucleo_verbal
    label: "Núcleo verbal"
    color: "#ef4444"
    rango_correcto: [oracion.nucleo_verbal, oracion.nucleo_verbal]

enunciado: "Identificá las partes de la siguiente oración."
```

### 16.8 Historia — Ordenar eventos cronológicamente

```vblang
metadata:
  nombre: "Cronología de la independencia americana"
  materia: "historia"
  tags: ["independencia", "siglo_xix"]

dataset: revoluciones_americanas
# Columnas: titulo, año, lugar, descripcion

variables:
  eventos: n_de(revoluciones_americanas, 4)

tipo: ordenar
respuesta_orden: ordenar_por(eventos, "año")

opciones_explicitas:
  - eventos[0].titulo
  - eventos[1].titulo
  - eventos[2].titulo
  - eventos[3].titulo

enunciado: |
  Ordená cronológicamente los siguientes eventos:
```

---

## 17. Gramática formal (BNF)

Para el implementador del parser. Notación BNF extendida con `?` para opcional, `*` para cero o más, `+` para uno o más, `|` para alternativas.

```bnf
plantilla       ::= bloque+

bloque          ::= metadata_block
                  | generador_block
                  | dataset_block
                  | variables_block
                  | restricciones_block
                  | respuesta_block
                  | respuestas_validas_block
                  | unidad_block
                  | tolerancia_block
                  | opciones_block
                  | tipo_block
                  | enunciado_block
                  | pasos_block
                  | visual_block
                  | mapa_block
                  | respuesta_iso_block
                  | respuesta_nombre_block
                  | respuesta_region_block
                  | respuesta_orden_block
                  | texto_analizar_block
                  | etiquetas_pedidas_block
                  | opciones_explicitas_block

metadata_block  ::= "metadata" ":" INDENT (campo)+ DEDENT

generador_block ::= "generador" ":" generador_id NEWLINE
generador_id    ::= IDENT "/" IDENT "/" IDENT

dataset_block   ::= "dataset" ":" IDENT NEWLINE

variables_block ::= "variables" ":" INDENT (declaracion)+ DEDENT
declaracion     ::= IDENT ":" expresion NEWLINE

restricciones_block ::= "restricciones" ":" INDENT (expresion NEWLINE)+ DEDENT

respuesta_block ::= "respuesta" ":" expresion NEWLINE

respuestas_validas_block ::= "respuestas_validas" ":" INDENT (lista_item)+ DEDENT
lista_item      ::= "-" expresion NEWLINE

unidad_block    ::= "unidad" ":" STRING NEWLINE
tolerancia_block ::= "tolerancia" ":" porcentaje NEWLINE
porcentaje      ::= NUMBER "%" | NUMBER

opciones_block  ::= "opciones" ":" NUMBER NEWLINE
tipo_block      ::= "tipo" ":" tipo_valor NEWLINE
tipo_valor      ::= "mc" | "vf" | "input" | "completar" | "ordenar"
                  | "marcar_mapa" | "analisis_sintactico" | "identificar_palabras"

enunciado_block ::= "enunciado" ":" (STRING | multilinea_string) NEWLINE
multilinea_string ::= "|" INDENT (LINEA)+ DEDENT

pasos_block     ::= "pasos" ":" INDENT (lista_item)+ DEDENT

visual_block    ::= "visual" ":" INDENT (campo)+ DEDENT

# Expresiones
expresion       ::= or_expr
or_expr         ::= and_expr ("o" and_expr)*
and_expr        ::= not_expr ("y" not_expr)*
not_expr        ::= "no" comparacion | comparacion
comparacion     ::= aritmetica ((">" | "<" | ">=" | "<=" | "==" | "!=") aritmetica)?
aritmetica      ::= termino (("+" | "-") termino)*
termino         ::= factor (("*" | "/" | "%") factor)*
factor          ::= base ("^" base)?
base            ::= "(" expresion ")"
                  | NUMBER
                  | STRING
                  | "verdadero" | "falso" | "nulo"
                  | array_literal
                  | objeto_literal
                  | llamada_funcion
                  | acceso_variable
                  | "-" base                       # negación unaria

array_literal   ::= "[" (expresion ("," expresion)*)? "]"
                  | "[" for_comprehension "]"

for_comprehension ::= "for" IDENT "in" iterable ":" expresion
iterable        ::= aritmetica ".." aritmetica   # rango numérico
                  | expresion                      # array existente
objeto_literal  ::= "{" (par ("," par)*)? "}"
par             ::= IDENT ":" expresion

llamada_funcion ::= IDENT "(" (expresion ("," expresion)*)? ")"
acceso_variable ::= IDENT (("." IDENT) | ("[" expresion "]"))*

# Interpolación en strings
interpolacion   ::= "{" expresion ("|" modificador)? "}"
modificador     ::= NUMBER | IDENT  # ej. "2" para decimales, "km/h" para unidad

# Léxicos
IDENT           ::= [a-záéíóúñ_][a-záéíóúñ_0-9]*
NUMBER          ::= [0-9]+ ("." [0-9]+)? ("e" [+-]? [0-9]+)?
STRING          ::= '"' (escape | [^"])* '"'
escape          ::= "\\" ("n" | "t" | "\"" | "\\" | "{" | "}")
NEWLINE         ::= "\n"
INDENT          ::= aumento de indentación
DEDENT          ::= disminución de indentación
```

### 17.1 Reglas de léxico importantes

1. **Indentación**: 2 espacios. Tabs no permitidos.
2. **Identificadores**: aceptan caracteres con acento y `ñ`. `Ej. velocidad_máxima` es válido.
3. **Strings**: solo comillas dobles. Las simples no son válidas para evitar ambigüedad con apóstrofes en español.
4. **Comentarios**: `#` hasta fin de línea.
5. **Llaves duplicadas en strings** (`{{` y `}}`) se renderizan como `{` y `}` literales.

### 17.2 Reglas de evaluación

1. **Orden de declaración**: las variables se declaran en orden. Una variable puede usar variables declaradas antes pero no después.
2. **Lazy evaluation**: las expresiones no se evalúan hasta que el sistema las necesita.
3. **Determinismo**: dada una semilla, dos generaciones producen exactamente los mismos valores.
4. **Aislamiento**: el evaluador (math.js) corre en un scope aislado. No tiene acceso a `window`, `process`, ni a globales del sistema.

---

## 18. Glosario

Terminología consistente para usar en UI, mensajes de error y documentación. Todos los términos en español rioplatense.

| Término | Significado |
|---|---|
| **Plantilla** | Archivo VBLang que describe un ejercicio paramétrico. |
| **Variable** | Valor declarado en el bloque `variables:` que puede ser aleatorio o derivado. |
| **Restricción** | Condición que debe cumplirse después de generar valores. |
| **Generador** | Código TypeScript hardcoded (ej. Cinemática.MRU) que calcula la respuesta. Reusable desde plantillas. |
| **Generador asistido** | Modo donde una plantilla delega el cálculo a un generador hardcoded. |
| **Dataset** | Tabla de datos precargada por el profesor, usable en múltiples plantillas. |
| **Ejercicio** | Instancia generada a partir de una plantilla, con valores random concretos. Lo que ve el alumno. |
| **Semilla** | Número o string que determina los valores random. Misma semilla = mismo ejercicio. |
| **Validación al guardar** | Proceso que corre 100 simulaciones para detectar problemas antes de publicar. |
| **Validación al cargar** | Segunda red de seguridad al servir el ejercicio al alumno. |
| **Visibilidad** | Quién puede ver y usar una plantilla. Tres niveles: privada, escuela, pública. |
| **Fork** | Copia editable de una plantilla ajena. La copia es independiente del original. |
| **Versión** | Snapshot de una plantilla en un momento dado. Cada edición crea una versión nueva. |
| **Interpolación** | Reemplazo de `{variable}` por su valor en el enunciado o en los pasos. |
| **Modificador** | Sufijo después de `|` en una interpolación que formatea el valor. |
| **Distractor** | Opción incorrecta de un múltiple choice, generada automáticamente o tomada de un dataset. |
| **Tolerancia** | Margen aceptable entre la respuesta esperada y la del alumno (típicamente porcentual). |
| **Resolución estructurada** | Bloque `pasos:` que explica cómo llegar a la respuesta. |
| **Tipo de pregunta** | Cómo responde el alumno: `mc`, `vf`, `input`, `completar`, `ordenar`, `marcar_mapa`, `analisis_sintactico`, `identificar_palabras`. |

---

## 19. Evoluciones futuras

Lo que VBLang v1 NO incluye pero podría agregarse en v2 sin reescribir el parser. Cada item incluye el "gancho arquitectónico" que debería preverse en la implementación de v1.

### 19.1 Funciones y constantes reusables entre plantillas del mismo profesor

**Idea**: cuando un docente tiene muchas plantillas que usan la misma fórmula (ej. la resolvente cuadrática), poder declararla **una sola vez** y reusarla en todas las plantillas. Hoy en v1, si la fórmula aparece en 20 plantillas, hay que escribirla 20 veces.

```vblang
# Hipotético archivo de "funciones del profesor":
funciones:
  resolvente_pos(a, b, c): (-b + sqrt(b^2 - 4*a*c)) / (2*a)
  resolvente_neg(a, b, c): (-b - sqrt(b^2 - 4*a*c)) / (2*a)

constantes:
  mi_tolerancia: 2%
```

Y en cada plantilla:

```vblang
usar: funciones_matematica_3ro

respuestas_validas:
  - resolvente_pos(a, b, c)
  - resolvente_neg(a, b, c)

tolerancia: mi_tolerancia
```

**Gancho arquitectónico**: math.js ya soporta funciones definidas en su scope. Lo que falta es:
- Bloque sintáctico nuevo (`usar:`, `funciones:`, `constantes:`).
- Modelo de datos nuevo: tabla `BibliotecaVBLang` con su propio sharing (privada/escuela/pública).
- Resolver de imports al parsear.
- UI para crear y editar bibliotecas.

Es trabajo serio. No entra en v1 pero la sintaxis es backward-compatible.

### 19.2 Validación simbólica de respuestas

**Idea**: el alumno responde con una fórmula (no un número), y el sistema verifica que sea matemáticamente equivalente a la esperada.

```vblang
respuesta_simbolica: m * g * h
# El alumno puede responder "mgh", "m·g·h", "g*m*h", "h*g*m" — todas válidas
```

**Gancho**: math.js tiene `simplify` y `equal` para comparación simbólica. La sintaxis se agrega como bloque adicional. Backward-compatible.

---

## 20. Notas para el implementador

Esta sección es para el desarrollador (o agente) que implemente el parser y el evaluador. No es parte de la documentación de uso.

### 20.1 Stack recomendado

- **Parser**: escribir a mano un parser recursivo descendente. NO usar generadores de parsers (PEG.js, ANTLR) — el lenguaje es lo suficientemente chico para mantenerlo a mano y los mensajes de error específicos son mucho mejores con parser manual.
- **Evaluador**: math.js ≥ 12.0 con `evaluate()` en scope aislado. Configurar `math.import` con las funciones builtin custom (`uno_de`, `capitalizar`, etc.).
- **Validación al guardar**: usar el mismo evaluador con seeds determinísticas distintas. 100 corridas, agrupar errores por tipo y por línea.
- **Storage**: Postgres via Prisma. Ver modelo de datos en sección 15.4.

### 20.2 Orden recomendado de implementación

1. **Lexer**: tokeniza el código en una secuencia de tokens (KEYWORD, IDENT, NUMBER, STRING, etc.). 1-2 días.
2. **Parser**: tokens → AST. Empezar con bloques simples (`unidad`, `tolerancia`). Después expresiones. Después bloques compuestos (`variables`, `restricciones`). 3-4 días.
3. **Evaluador**: AST → ejecución con math.js. 2-3 días.
4. **Validación al guardar**: correr 100 simulaciones, agregar errores. 1 día.
5. **Editor visual** (formulario): UI bidireccional con el código. 1 semana.
6. **Integración con editor V2**: agregar el panel "Plantillas" en columna 1. 2-3 días.
7. **Sharing**: CRUD endpoints + UI de listado + fork. 3-4 días.
8. **Tipos de pregunta especiales** (uno a uno): `ordenar` primero, después `marcar_mapa`, después `analisis_sintactico`. 1 semana cada uno.

**Total estimado**: 6-8 semanas para versión completa, dependiendo de cuánto se priorice testing.

### 20.3 Tests críticos

- Cada ejemplo de la sección 16 debe tener un test que verifique:
  - Parsea sin error.
  - Compila sin error.
  - Genera 10 ejercicios distintos con la misma plantilla.
  - Cada ejercicio respeta las restricciones.
  - La respuesta calculada coincide con el resultado esperado para una seed específica.
- Tests de errores: cada mensaje de error de sección 14 debe tener un test que verifique que se dispara cuando corresponde y que el mensaje contiene la sugerencia esperada.

### 20.4 Performance

Las plantillas se compilan una vez al guardar. La generación de un ejercicio individual debe ser **<50ms** en hardware típico. Si una plantilla excede ese tiempo, el editor visual debe mostrar warning de optimización (típicamente: restricciones demasiado restrictivas que generan muchos retries).

---

*Fin del documento. Versión 1.0 — borrador de mayo 2026.*