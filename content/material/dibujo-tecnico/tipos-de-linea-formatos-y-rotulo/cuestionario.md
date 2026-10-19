# Dibujo técnico — Tipos de línea, formatos y rótulo (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Norma líneas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "¿Qué norma IRAM se usa como referencia para los tipos de línea?"
tipo: mc
opciones_explicitas:
  - "IRAM 4502"
  - "IRAM 9001"
  - "IRAM 3000"
respuesta: "IRAM 4502"

explicacion: |
  Según los programas de cátedra consultados. Verificar la edición vigente.
```

### 2 — Línea gruesa

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La línea continua gruesa se usa para..."
tipo: mc
opciones_explicitas:
  - "Contornos y aristas visibles"
  - "Líneas de cota"
  - "Ejes de simetría"
respuesta: "Contornos y aristas visibles"

explicacion: |
  Lo visible destaca.
```

### 3 — Línea fina

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Las líneas de cota se trazan con línea..."
tipo: mc
opciones_explicitas:
  - "Continua fina"
  - "Continua gruesa"
  - "De trazo y punto gruesa"
respuesta: "Continua fina"

explicacion: |
  Son líneas auxiliares.
```

### 4 — Ocultas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Los contornos y aristas ocultos se dibujan con línea..."
tipo: mc
opciones_explicitas:
  - "De trazos (discontinua)"
  - "Continua gruesa"
  - "Ondulada"
respuesta: "De trazos (discontinua)"

explicacion: |
  Muestran lo que no se ve desde esa vista.
```

### 5 — Ejes

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Los ejes de simetría y los centros de agujeros se dibujan con línea..."
tipo: mc
opciones_explicitas:
  - "De trazo y punto fina"
  - "Continua gruesa"
  - "De trazos gruesa"
respuesta: "De trazo y punto fina"

explicacion: |
  Es la línea mixta.
```

### 6 — Interrupción

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "La línea ondulada o en zigzag se usa para..."
tipo: mc
opciones_explicitas:
  - "Indicar interrupciones de una pieza larga"
  - "Marcar ejes"
  - "Marcar cotas"
respuesta: "Indicar interrupciones de una pieza larga"

explicacion: |
  Permite cortarla en el dibujo.
```

### 7 — Corte

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Los planos de corte se indican con línea..."
tipo: mc
opciones_explicitas:
  - "De trazo y punto, gruesa en los extremos"
  - "Continua fina"
  - "Ondulada"
respuesta: "De trazo y punto, gruesa en los extremos"

explicacion: |
  Con flechas que indican el sentido de mirada.
```

### 8 — Jerarquía

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La jerarquía de líneas busca que..."
tipo: mc
opciones_explicitas:
  - "Lo visible destaque y lo auxiliar quede en segundo plano"
  - "Todo se vea igual"
  - "Todo se oculte"
respuesta: "Lo visible destaque y lo auxiliar quede en segundo plano"

explicacion: |
  Mejora la lectura.
```

### 9 — Proporción

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Una proporción habitual entre línea gruesa y fina es de..."
tipo: mc
opciones_explicitas:
  - "2 a 1"
  - "10 a 1"
  - "1 a 1"
respuesta: "2 a 1"

explicacion: |
  Un trazo grueso es el doble que uno fino.
```

### 10 — A0

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El formato A0 tiene una superficie de aproximadamente..."
tipo: mc
opciones_explicitas:
  - "1 m²"
  - "1 cm²"
  - "10 m²"
respuesta: "1 m²"

explicacion: |
  Con lados en proporción 1 : √2.
```

### 11 — A4

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Las dimensiones del formato A4 son..."
tipo: mc
opciones_explicitas:
  - "210 × 297 mm"
  - "297 × 420 mm"
  - "148 × 210 mm"
respuesta: "210 × 297 mm"

explicacion: |
  Es el tamaño de hoja más usado.
```

### 12 — Cuántos A4

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  n: random(0, 3)

respuesta: 2 ^ (4 - n)
tipo: input
tolerancia_abs: 0

enunciado: "Cada formato de la serie A tiene el doble de superficie que el siguiente. ¿Cuántas hojas A4 entran, en superficie, en una hoja A{n}?"

pasos:
  - "De A{n} a A4 hay {4 - n} pasos"
  - "Cada paso duplica la superficie"

explicacion: |
  A0 equivale a 16 A4, A1 a 8, A2 a 4 y A3 a 2.
```

### 13 — Mitad del lado

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Un formato A3 se obtiene..."
tipo: mc
opciones_explicitas:
  - "Cortando el A2 por la mitad del lado largo"
  - "Duplicando el A4 a lo ancho y a lo largo"
  - "Sumando 10 cm al A4"
respuesta: "Cortando el A2 por la mitad del lado largo"

explicacion: |
  Cada formato menor es la mitad del anterior.
```

### 14 — Superficie

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Un A4 es..."
tipo: mc
opciones_explicitas:
  - "La mitad en superficie que un A3"
  - "El doble que un A3"
  - "Igual que un A3"
respuesta: "La mitad en superficie que un A3"

explicacion: |
  Cada formato es la mitad del anterior.
```

### 15 — Semejantes

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "La relación 1 : √2 de los lados hace que los formatos A sean..."
tipo: mc
opciones_explicitas:
  - "Semejantes entre sí"
  - "Siempre cuadrados"
  - "Del mismo tamaño"
respuesta: "Semejantes entre sí"

explicacion: |
  Se pueden reducir o ampliar sin deformar.
```

### 16 — Plegar

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: verdadero
tipo: vf

enunciado: "Los planos grandes se pliegan hasta el tamaño A4 de modo que el rótulo quede visible."

explicacion: |
  Facilita el archivo.
```

### 17 — Rótulo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El rótulo de un plano suele ubicarse..."
tipo: mc
opciones_explicitas:
  - "En la esquina inferior derecha"
  - "En el centro"
  - "Al dorso"
respuesta: "En la esquina inferior derecha"

explicacion: |
  Identifica el plano.
```

### 18 — Contenido rótulo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "¿Qué datos lleva el rótulo?"
tipo: mc
opciones_explicitas:
  - "Título, escala, material, unidades y quién dibujó"
  - "Solo el nombre del lápiz"
  - "El precio"
respuesta: "Título, escala, material, unidades y quién dibujó"

explicacion: |
  Datos incompletos causan errores.
```

### 19 — Lista de piezas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "La lista de piezas de un plano de conjunto..."
tipo: mc
opciones_explicitas:
  - "Numera cada componente con su cantidad y material"
  - "Reemplaza las vistas"
  - "Muestra el presupuesto"
respuesta: "Numera cada componente con su cantidad y material"

explicacion: |
  Cada pieza del dibujo lleva un número que remite a la lista.
```

### 20 — Rotulado

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El rotulado de letras y números se normaliza para..."
tipo: mc
opciones_explicitas:
  - "Evitar confusiones, como entre un 1 y un 7"
  - "Embellecer"
  - "Ahorrar tinta"
respuesta: "Evitar confusiones, como entre un 1 y un 7"

explicacion: |
  La claridad es prioritaria.
```

### 21 — Formato

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "basico"
  tags: ["dibujo"]

tipo: completar
enunciado: "El formato de papel de 210 × 297 mm es el ___."
respuestas_validas:
  - "A4"

explicacion: |
  Serie A.
```

### 22 — Convenciones

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tipos_de_linea_formatos_y_rotulo"
  nivel: "basico"
  tags: ["dibujo"]

respuesta: verdadero
tipo: vf

enunciado: "Las convenciones del dibujo técnico permiten que quien no dibujó el plano lo interprete igual."

explicacion: |
  Para eso se normalizan.
```
