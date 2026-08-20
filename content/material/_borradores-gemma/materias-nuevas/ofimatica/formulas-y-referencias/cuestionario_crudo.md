### 1 — Referencia relativa en fórmula básica
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["referencia-relativa", "copiar-formula"]
tipo: "completar"
enunciado: "Tienes la fórmula `=A1+B1` en la celda C1. Si copias esta fórmula hacia abajo a la celda C2, la fórmula resultante será `=A{0}+B{0}`. Escribe el número que reemplaza a `{0}`."
respuesta: "2"
respuestas_validas:
  - "2"
  - "02"
  - " dos"
  - "dos"
pasos:
  - "Identificar que se trata de una referencia relativa."
  - "Al copiar una fila abajo, los índices de fila aumentan en 1."
  - "De A1 a A2 y de B1 a B2."
explicacion: "Las referencias relativas (sin símbolos $) se ajustan automáticamente según la posición relativa de la celda destino. Al moverse una fila abajo, el 1 se convierte en 2."
```

### 2 — Referencia absoluta en precio con IVA
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["referencia-absoluta", "iva"]
tipo: "completar"
enunciado: "El valor del IVA (0.21) está fijo en la celda E1. En la celda F2 tienes el precio base en E2. Para calcular el precio con IVA arrastrando la fórmula hacia abajo, la fórmula en F2 debe ser `=E2*(1+${0}1)`."
respuesta: "E"
respuestas_validas:
  - "E"
  - "e"
pasos:
  - "El precio base (E2) cambia al arrastrar, por lo que es relativo."
  - "La tasa de IVA (E1) debe permanecer fija en la columna E y fila 1."
  - "Se usa el símbolo $ antes de la letra de columna."
explicacion: "Para fijar la columna E en una referencia relativa de fila, se usa $E1. Si también se quisiera fijar la fila, sería $E$1."
```

### 3 — Función SUMA con rango
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["suma", "rangos"]
tipo: "completar"
enunciado: "Queremos sumar los valores desde la celda A1 hasta la celda A10. La sintaxis correcta en la celda A11 es `={0}(A1:A10)`."
respuesta: "SUMA"
respuestas_validas:
  - "SUMA"
  - "suma"
  - "Suma"
pasos:
  - "Identificar la operación aritmética de adición acumulada."
  - "Usar la función nativa del software de hojas de cálculo."
  - "Escribir el nombre de la función seguido del rango entre paréntesis."
explicacion: "La función SUMA agrega todos los números contenidos en el rango especificado. La sintaxis es `SUMA(inicio_fin)`."
```

### 4 — Error de referencia circular
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["errores", "referencia-circular"]
tipo: "vf"
enunciado: "Si escribes `=A1+1` en la celda A1, el software mostrará un error de 'Referencia circular' o ignorará la celda."
respuesta: verdadero
pasos:
  - "Analizar si la celda depende de sí misma."
  - "A1 está intentando leer su propio valor para calcularlo."
  - "Esto crea un bucle infinito de cálculo."
explicacion: "Una referencia circular ocurre cuando una fórmula hace referencia a su propia celda, directa o indirectamente. Los programas modernos suelen marcarlo como error o requerir configuración de iteración."
```

### 5 — Función PROMEDIO
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["promedio", "estadistica-basica"]
tipo: "completar"
enunciado: "Para calcular el promedio de los valores en el rango B2:B5, la fórmula es `={0}(B2:B5)`."
respuesta: "PROMEDIO"
respuestas_validas:
  - "PROMEDIO"
  - "promedio"
  - "Promedio"
  - "AVERAGE"
  - "average"
pasos:
  - "Identificar que se busca la media aritmética."
  - "Seleccionar la función adecuada para sumar y dividir por la cantidad."
  - "Aplicar al rango deseado."
explicacion: "La función PROMEDIO (o AVERAGE en inglés) suma los valores y divide por el conteo de celdas no vacías con números en el rango."
```

### 6 — Referencia de hoja externa básica
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["referencia-externa", "multihoja"]
tipo: "completar"
enunciado: "Para tomar el valor de la celda A1 de la 'Hoja2', la fórmula en la hoja actual es `={0}!A1`."
respuesta: "'Hoja2"
respuestas_validas:
  - "'Hoja2"
  - "'hoja2"
  - "Hoja2"
  - "hoja2"
  - "'Sheet2"
  - "Sheet2"
pasos:
  - "Identificar que se accede a otra hoja del mismo libro."
  - "El separador entre el nombre de la hoja y la referencia de celda es el signo de exclamación (!)."
  - "Si el nombre tiene espacios, se usa apóstrofo al inicio."
explicacion: "La sintaxis es `NombreHoja!ReferenciaCelda`. Si el nombre contiene espacios o caracteres especiales, debe encerrarse entre comillas simples: `'Mi Hoja'!A1`."
```

### 7 — Función MAX
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["maximo", "busqueda"]
tipo: "completar"
enunciado: "Para encontrar el valor más alto en el rango C1:C100, usamos `={0}(C1:C100)`."
respuesta: "MAX"
respuestas_validas:
  - "MAX"
  - "max"
  - "MAXIMO"
  - "maximo"
pasos:
  - "Determinar que se necesita el valor extremo superior."
  - "Seleccionar la función estadística correspondiente."
  - "Aplicar al rango de datos."
explicacion: "La función MAX devuelve el valor numérico más grande encontrado en el conjunto de datos especificado. Ignora texto y celdas vacías."
```

### 8 — Función MIN
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["minimo", "busqueda"]
tipo: "completar"
enunciado: "Para encontrar el valor más bajo en el rango D5:D20, usamos `={0}(D5:D20)`."
respuesta: "MIN"
respuestas_validas:
  - "MIN"
  - "min"
  - "MINIMO"
  - "minimo"
pasos:
  - "Determinar que se necesita el valor extremo inferior."
  - "Seleccionar la función estadística correspondiente."
  - "Aplicar al rango de datos."
explicacion: "La función MIN devuelve el valor numérico más pequeño encontrado en el conjunto de datos especificado. Ignora texto y celdas vacías."
```

### 9 — Operación de resta con referencias
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["operaciones-basicas", "resta"]
tipo: "completar"
enunciado: "Para restar el contenido de la celda B2 al contenido de la celda A2, la fórmula en C2 es `=A2{0}B2`."
respuesta: "-"
respuestas_validas:
  - "-"
  - " menos "
  - "menos"
pasos:
  - "Identificar la operación aritmética de sustracción."
  - "Usar el operador correspondiente en la sintaxis de fórmulas."
  - "Colocar el operando izquierdo, el operador y el operando derecho."
explicacion: "En hojas de cálculo, el guion medio (-) es el operador de resta. La fórmula siempre debe comenzar con el signo igual (=)."
```

### 10 — Operación de multiplicación
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["operaciones-basicas", "multiplicacion"]
tipo: "completar"
enunciado: "Para multiplicar el valor de A1 por el valor de B1, la fórmula es `=A1{0}B1`."
respuesta: "*"
respuestas_validas:
  - "*"
  - " por "
  - "por"
  - "multiplicado por"
pasos:
  - "Identificar la operación aritmética de producto."
  - "Usar el asterisco (*) como operador de multiplicación."
  - "Conectar las dos referencias de celda."
explicacion: "El asterisco (*) es el operador estándar para la multiplicación en la mayoría de los software de hojas de cálculo y lenguajes de programación derivados."
```

### 11 — Operación de división
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["operaciones-basicas", "division"]
tipo: "completar"
enunciado: "Para dividir el valor de A1 entre el valor de B1, la fórmula es `=A1{0}B1`."
respuesta: "/"
respuestas_validas:
  - "/"
  - " dividido por "
  - "dividido por"
  - "entre"
pasos:
  - "Identificar la operación aritmética de cociente."
  - "Usar la barra diagonal (/) como operador de división."
  - "Conectar las dos referencias de celda."
explicacion: "La barra diagonal (/) es el operador estándar para la división. Si B1 es 0, el resultado será un error #DIV/0!"
```

### 12 — Función CONTAR.NÚM
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["conteo", "numeros"]
tipo: "completar"
enunciado: "Para contar cuántas celdas en el rango E1:E10 contienen números (ignora texto y vacías), usamos `={0}(E1:E10)`."
respuesta: "CONTAR.NÚM"
respuestas_validas:
  - "CONTAR.NÚM"
  - "contar.num"
  - "COUNT"
  - "count"
  - "CONTAR"
  - "contar"
pasos:
  - "Determinar que se necesita contar elementos numéricos."
  - "Seleccionar la función específica para conteo de números."
  - "Aplicar al rango."
explicacion: "CONTAR.NÚM (o COUNT en inglés) cuenta solo las celdas que contienen valores numéricos. Celdas con texto o vacías no se cuentan."
```

### 13 — Función SI (lógica básica)
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["si", "logica", "condicional"]
tipo: "completar"
enunciado: "Si A1 es mayor que 10, mostrar 'Alto', sino mostrar 'Bajo'. La fórmula es `=SI(A1>10;"{0}";"Bajo")`."
respuesta: "Alto"
respuestas_validas:
  - "Alto"
  - "alto"
  - " ALTO "
  - "alto"
pasos:
  - "Identificar la estructura de la función SI: prueba_lógica; valor_si_verdadero; valor_si_falso."
  - "Rellenar el valor a devolver si la condición es verdadera."
  - "Asegurar que el texto esté entre comillas."
explicacion: "La función SI evalúa una condición. Si es verdadera, devuelve el segundo argumento; si es falsa, devuelve el tercero."
```

### 14 — Función BUSCARV (búsqueda vertical)
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["buscarv", "busqueda"]
tipo: "completar"
enunciado: "Para buscar el valor de A1 en la primera columna del rango B2:D10 y devolver el valor de la segunda columna, usamos `=BUSCARV(A1;{0};2;FALSO)`."
respuesta: "B2:D10"
respuestas_validas:
  - "B2:D10"
  - "b2:d10"
  - "B2 : D10"
  - "b2 : d10"
pasos:
  - "Identificar el argumento de 'matriz_tabla' en BUSCARV."
  - "Especificar el rango donde se encuentra la tabla de datos."
  - "El primer argumento es la clave de búsqueda, el segundo la tabla."
explicacion: "BUSCARV busca un valor en la primera columna de una tabla y devuelve un valor en la misma fila desde una columna especificada."
```

### 15 — Función CONCATENAR (o UNIONO)
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["texto", "concatenar"]
tipo: "completar"
enunciado: "Para unir el texto de A1 y B1 con un espacio entre ellos, usamos `=CONCATENAR(A1;" "{0}";B1)`."
respuesta: "0"
respuestas_validas:
  - "0"
  - " cero "
  - "cero"
  - " "
  - "espacio"
pasos:
  - "Identificar que se necesita insertar un literal de espacio."
  - "Dentro de las comillas, para un solo espacio, se escribe un carácter de espacio."
  - "La sintaxis requiere comillas alrededor del literal."
explicacion: "En `CONCATENAR`, los literales de texto deben ir entre comillas. Un espacio se representa como `" "` (comillas con un espacio adentro)."
```

### 16 — Función HOY
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["fecha", "dinamica"]
tipo: "completar"
enunciado: "Para insertar la fecha actual del sistema en la celda, se usa `={0}()`."
respuesta: "HOY"
respuestas_validas:
  - "HOY"
  - "hoy"
  - "TODAY"
  - "today"
pasos:
  - "Identificar la necesidad de una fecha dinámica."
  - "Seleccionar la función que no requiere argumentos."
  - "Escribir el nombre de la función."
explicacion: "La función HOY (TODAY) devuelve la fecha actual del sistema. No toma argumentos y se actualiza cada vez que se recalcula la hoja."
```

### 17 — Función AHORA
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["fecha", "hora", "dinamica"]
tipo: "completar"
enunciado: "Para insertar la fecha y hora actuales del sistema, se usa `={0}()`."
respuesta: "AHORA"
respuestas_validas:
  - "AHORA"
  - "ahora"
  - "NOW"
  - "now"
pasos:
  - "Identificar la necesidad de fecha y hora dinámicas."
  - "Seleccionar la función correspondiente."
  - "Escribir el nombre de la función."
explicacion: "La función AHORA (NOW) devuelve la fecha y hora actuales. A diferencia de HOY, incluye la componente temporal."
```

### 18 — Referencia de rango nombrado
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["rangos-nombrados", "gestion"]
tipo: "completar"
enunciado: "Si has definido el nombre 'Precios' para el rango C1:C10, para sumar ese rango usas `=SUMA({0})`."
respuesta: "Precios"
respuestas_validas:
  - "Precios"
  - "precios"
  - " PRECIOS "
  - "precios"
pasos:
  - "Recordar que un rango nombrado actúa como una variable."
  - "Usar el nombre definido en lugar de la referencia de celda."
  - "La función SUMA acepta nombres definidos."
explicacion: "Los rangos nombrados permiten usar nombres descriptivos en lugar de referencias de celda, facilitando la lectura y mantenimiento de fórmulas."
```

### 19 — Función REDONDEAR
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["redondeo", "matematica"]
tipo: "completar"
enunciado: "Para redondear el valor de A1 a 2 decimales, usamos `={0}(A1;2)`."
respuesta: "REDONDEAR"
respuestas_validas:
  - "REDONDEAR"
  - "redondear"
  - "ROUND"
  - "round"
pasos:
  - "Identificar la necesidad de ajustar la precisión decimal."
  - "Seleccionar la función de redondeo estándar."
  - "Especificar el número de decimales como segundo argumento."
explicacion: "REDONDEAR (ROUND) aproxima un número al número de dígitos especificado. El segundo argumento indica los decimales."
```

### 20 — Función ABS (valor absoluto)
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["matematica", "valor-absoluto"]
tipo: "completar"
enunciado: "Para obtener el valor absoluto de A1 (ignorando el signo), usamos `={0}(A1)`."
respuesta: "ABS"
respuestas_validas:
  - "ABS"
  - "abs"
  - "VALOR.ABSOLUTO"
  - "valor.absoluto"
pasos:
  - "Identificar la necesidad de convertir un número negativo en positivo."
  - "Seleccionar la función matemática de valor absoluto."
  - "Aplicar al número deseado."
explicacion: "ABS devuelve el valor numérico sin signo. Si A1 es -5, ABS(A1) devuelve 5."
```

### 21 — Función CONTAR.SI
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["conteo-condicional", "si"]
tipo: "completar"
enunciado: "Para contar cuántas veces aparece el texto 'Apple' en el rango A1:A10, usamos `=CONTAR.SI(A1:A10;"{0}")`."
respuesta: "Apple"
respuestas_validas:
  - "Apple"
  - "apple"
  - " APPLE "
  - "manzana"
  - "Manzana"
  - "MANZANA"
  - "'Apple'"
  - "'apple'"
pasos:
  - "Identificar la necesidad de contar basado en un criterio de texto."
  - "El criterio debe ser un literal de texto entre comillas."
  - "Escribir el valor exacto a buscar."
explicacion: "CONTAR.SI cuenta celdas que cumplen un criterio específico. El criterio puede ser un texto literal, un número o una expresión."
```

### 22 — Función SUMAR.SI
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["suma-condicional", "si"]
tipo: "completar"
enunciado: "Para sumar los valores en C1:C10 donde la columna B1:B10 es igual a 'Ventas', usamos `=SUMAR.SI(B1:B10;"{0}";C1:C10)`."
respuesta: "Ventas"
respuestas_validas:
  - "Ventas"
  - "ventas"
  - " VENTAS "
  - "sales"
  - "Sales"
  - "'Ventas'"
  - "'ventas'"
pasos:
  - "Identificar la necesidad de sumar condicionalmente."
  - "Especificar el rango de criterios (B1:B10)."
  - "Especificar el criterio ('Ventas')."
  - "Especificar el rango de suma (C1:C10)."
explicacion: "SUMAR.SI suma los valores en un rango si cumplen una condición definida en otro rango."
```

### 23 — Función CONTAR.VACIO
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["conteo", "vacias"]
tipo: "completar"
enunciado: "Para contar cuántas celdas en el rango D1:D50 están vacías, usamos `=CONTAR.VACIO({0})`."
respuesta: "D1:D50"
respuestas_validas:
  - "D1:D50"
  - "d1:d50"
  - "D1 : D50"
  - "d1 : d50"
pasos:
  - "Identificar la necesidad de contar celdas sin contenido."
  - "Especificar el rango a evaluar."
  - "Aplicar la función específica para vacíos."
explicacion: "CONTAR.VACIO (COUNTBLANK) cuenta las celdas que no contienen datos, incluyendo celdas con solo espacios o fórmulas que devuelven cadena vacía."
```

### 24 — Función ENCONTRAR (posición de texto)
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["texto", "posicion"]
tipo: "completar"
enunciado: "Para encontrar la posición de la primera aparición de 'z' en el texto de A1, usamos `={0}("z";A1)`."
respuesta: "ENCONTRAR"
respuestas_validas:
  - "ENCONTRAR"
  - "encontrar"
  - "FIND"
  - "find"
pasos:
  - "Identificar la necesidad de obtener la posición de un carácter."
  - "Seleccionar la función de búsqueda de posición."
  - "El primer argumento es la cadena a buscar, el segundo la celda."
explicacion: "ENCONTRAR (FIND) devuelve la posición inicial de una cadena de texto dentro de otra. Es sensible a mayúsculas/minúsculas."
```

### 25 — Función IZQUIERDA (extraer texto)
```yaml
metadata:
  materia: "ofimatica"
  tema: "formulas-y-referencias"
  nivel: "basico"
  tags: ["texto", "extraccion"]
tipo: "completar"
enunciado: "Para extraer los 3 primeros caracteres del texto en A1, usamos `={0}(A1;3)`."
respuesta: "IZQUIERDA"
respuestas_validas:
  - "IZQUIERDA"
  - "izquierda"
  - "LEFT"
  - "left"
pasos:
  - "Identificar la necesidad de extraer texto desde el inicio."
  - "Seleccionar la función de extracción izquierda."
  - "Especificar la cantidad de caracteres."
explicacion: "IZQUIERDA (LEFT) extrae un número especificado de caracteres desde el lado izquierdo de una cadena de texto."
```