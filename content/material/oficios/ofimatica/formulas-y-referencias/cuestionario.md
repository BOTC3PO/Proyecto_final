# Ofimática — Fórmulas y referencias (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Inicio

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["formula"]

tipo: mc
opciones_explicitas: ["=", "+ solamente", "#", "@"]
respuesta: "="

enunciado: "¿Con qué carácter empieza una fórmula?"

explicacion: |
  El signo igual indica que lo que sigue es un cálculo.
```

### 2 — Orden

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["orden"]

tipo: mc
opciones_explicitas: ["14", "20", "24", "9"]
respuesta: "14"

enunciado: "¿Cuánto da `=2+3*4`?"

explicacion: |
  La multiplicación se hace antes que la suma: 2 + 12.
```

### 3 — Paréntesis

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["orden"]

tipo: mc
opciones_explicitas: ["20", "14", "24", "9"]
respuesta: "20"

enunciado: "¿Cuánto da `=(2+3)*4`?"

explicacion: |
  Los paréntesis fijan el orden.
```

### 4 — Rango

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["rango"]

tipo: mc
opciones_explicitas: ["Un rango de celdas, de la A1 a la A10", "Una división", "Un error", "Una hoja"]
respuesta: "Un rango de celdas, de la A1 a la A10"

enunciado: "¿Qué representa `A1:A10`?"

explicacion: |
  Se usa dentro de funciones como `SUMA`.
```

### 5 — Suma

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["suma"]

tipo: mc
opciones_explicitas: ["Suma los valores de B2 a B10", "Los multiplica", "Los cuenta", "Los ordena"]
respuesta: "Suma los valores de B2 a B10"

enunciado: "¿Qué hace `=SUMA(B2:B10)`?"

explicacion: |
  En inglés, `SUM`.
```

### 6 — Relativa

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["referencias"]

tipo: mc
opciones_explicitas: ["Se ajusta a la nueva posición", "No cambia nunca", "Se borra", "Se convierte en texto"]
respuesta: "Se ajusta a la nueva posición"

enunciado: "Una referencia relativa (`A1`), al copiar la fórmula a otra celda..."

explicacion: |
  Es el comportamiento por defecto.
```

### 7 — Absoluta

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["referencias"]

tipo: mc
opciones_explicitas: ["`$A$1`", "`A1`", "`#A1`", "`A$$1`"]
respuesta: "`$A$1`"

enunciado: "¿Cómo se escribe una referencia absoluta a A1?"

explicacion: |
  Con `$` no cambia al copiar.
```

### 8 — Para qué

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "intermedio"
  tags: ["referencias"]

tipo: mc
opciones_explicitas: ["Para que la tasa de E1 no cambie al copiar la fórmula hacia abajo", "Para sumar dos veces", "Para ocultar E1", "Para borrar E1"]
respuesta: "Para que la tasa de E1 no cambie al copiar la fórmula hacia abajo"

enunciado: "¿Para qué se usa `$E$1` en `=B2*$E$1`?"

explicacion: |
  Si fuera relativa, bajaría a E2, E3...
```

### 9 — F4

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["f4"]

tipo: mc
opciones_explicitas: ["Alterna entre relativa, absoluta y mixta", "Guarda el archivo", "Borra la fórmula", "Cierra el programa"]
respuesta: "Alterna entre relativa, absoluta y mixta"

enunciado: "¿Qué hace la tecla F4 al editar una referencia?"

explicacion: |
  Es un atajo muy útil.
```

### 10 — Separadores

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["separadores"]

tipo: mc
opciones_explicitas: ["El punto y coma", "El punto", "Los dos puntos", "El guion"]
respuesta: "El punto y coma"

enunciado: "¿Qué suele separar los argumentos de una función en español?"

explicacion: |
  En inglés suele ser la coma.
```

### 11 — Idioma

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["idioma"]

tipo: mc
opciones_explicitas: ["Porque los nombres de las funciones cambian con el idioma (`SUMA`)", "Porque no existe la suma", "Porque falta el signo", "Porque está en mayúsculas"]
respuesta: "Porque los nombres de las funciones cambian con el idioma (`SUMA`)"

enunciado: "¿Por qué `=SUM(A1:A3)` puede dar error en un programa en español?"

explicacion: |
  La función es la misma con otro nombre.
```

### 12 — Condicional

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["si"]

tipo: mc
opciones_explicitas: ["Muestra Aprobado si C2 es 6 o más y Desaprobado si no", "Suma C2", "Cuenta C2", "Siempre da Aprobado"]
respuesta: "Muestra Aprobado si C2 es 6 o más y Desaprobado si no"

enunciado: "¿Qué hace `=SI(C2>=6;\"Aprobado\";\"Desaprobado\")`?"

explicacion: |
  `SI(prueba; si_verdadero; si_falso)`.
```

### 13 — Sumar si

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "intermedio"
  tags: ["sumar.si"]

tipo: mc
opciones_explicitas: ["Suma los valores de C que están en filas donde A dice Frutas", "Cuenta las frutas", "Ordena las frutas", "Borra las frutas"]
respuesta: "Suma los valores de C que están en filas donde A dice Frutas"

enunciado: "¿Qué hace `=SUMAR.SI(A2:A20;\"Frutas\";C2:C20)`?"

explicacion: |
  Suma solo lo que cumple el criterio.
```

### 14 — Contar

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "intermedio"
  tags: ["contar"]

tipo: mc
opciones_explicitas: ["`CONTAR` cuenta celdas con números; `CONTARA`, celdas con cualquier dato", "Ninguna", "`CONTAR` cuenta texto", "`CONTARA` solo cuenta fechas"]
respuesta: "`CONTAR` cuenta celdas con números; `CONTARA`, celdas con cualquier dato"

enunciado: "¿Qué diferencia hay entre `CONTAR` y `CONTARA`?"

explicacion: |
  Con una columna de nombres, `CONTARA` sirve y `CONTAR` da 0.
```

### 15 — Buscarv

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "intermedio"
  tags: ["buscarv"]

tipo: mc
opciones_explicitas: ["El dato de la tercera columna de la fila donde se encuentra E2 en la primera columna", "El primer dato de la tabla", "El número de fila", "La suma de la tabla"]
respuesta: "El dato de la tercera columna de la fila donde se encuentra E2 en la primera columna"

enunciado: "En `=BUSCARV(E2;A2:C20;3;FALSO)`, ¿qué devuelve?"

explicacion: |
  `FALSO` pide coincidencia exacta.
```

### 16 — Exacta

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "avanzado"
  tags: ["buscarv"]

tipo: mc
opciones_explicitas: ["Una coincidencia exacta", "Una coincidencia aproximada", "Ordenar", "Ignorar mayúsculas"]
respuesta: "Una coincidencia exacta"

enunciado: "¿Qué pide el último argumento `FALSO` de `BUSCARV`?"

explicacion: |
  Con VERDADERO se necesita la tabla ordenada.
```

### 17 — Div cero

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["División por cero o por una celda vacía", "Un texto muy largo", "Una función mal escrita", "Una referencia perdida"]
respuesta: "División por cero o por una celda vacía"

enunciado: "¿Qué significa `#DIV/0!`?"

explicacion: |
  Se evita controlando el divisor.
```

### 18 — Valor

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["Un tipo de dato incorrecto, como texto donde va un número", "Que la columna es angosta", "Que no se encontró un dato", "Que se borró una celda"]
respuesta: "Un tipo de dato incorrecto, como texto donde va un número"

enunciado: "¿Qué indica `#VALOR!`?"

explicacion: |
  Se revisan los datos de entrada.
```

### 19 — Referencia

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["Una referencia a una celda que ya no existe", "Un decimal", "Un texto", "Una función nueva"]
respuesta: "Una referencia a una celda que ya no existe"

enunciado: "¿Qué indica `#REF!`?"

explicacion: |
  Suele aparecer al borrar filas o columnas.
```

### 20 — Almohadillas

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["Que la columna es demasiado angosta para el valor", "Un error de cálculo", "Una fórmula circular", "Un virus"]
respuesta: "Que la columna es demasiado angosta para el valor"

enunciado: "¿Qué significa ver `#####` en una celda?"

explicacion: |
  Se ensancha la columna.
```

### 21 — Texto

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "intermedio"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["Están guardados como texto", "Es un error del programa", "Son negativos", "Son decimales"]
respuesta: "Están guardados como texto"

enunciado: "Los números no suman y están alineados a la izquierda. ¿Qué es lo más probable?"

explicacion: |
  Hay que convertirlos a número.
```

### 22 — Circular

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "intermedio"
  tags: ["circular"]

tipo: mc
opciones_explicitas: ["Una celda cuya fórmula depende de sí misma", "Una celda sin fórmula", "Un gráfico de torta", "Una hoja oculta"]
respuesta: "Una celda cuya fórmula depende de sí misma"

enunciado: "¿Qué es una referencia circular?"

explicacion: |
  El programa avisa porque no se puede calcular.
```

### 23 — Constantes

```
metadata:
  materia: "ofimatica"
  tema: "formulas_y_referencias"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Porque si cambia hay que corregir todas; conviene ponerla en una celda", "Porque no funciona", "Porque es ilegal", "Porque pesa más"]
respuesta: "Porque si cambia hay que corregir todas; conviene ponerla en una celda"

enunciado: "¿Por qué no conviene escribir la tasa de IVA dentro de las fórmulas?"

explicacion: |
  Una celda de parámetros facilita los cambios.
```

