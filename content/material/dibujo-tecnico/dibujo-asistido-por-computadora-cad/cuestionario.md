# Dibujo técnico — Dibujo asistido por computadora (CAD) (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Sigla

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "CAD significa..."
tipo: mc
opciones_explicitas:
  - "Diseño asistido por computadora"
  - "Corte angular directo"
  - "Circuito analógico digital"
respuesta: "Diseño asistido por computadora"

explicacion: |
  De Computer-Aided Design.
```

### 2 — Reglas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "basico"
  tags: ["dibujo"]

respuesta: falso
tipo: vf

enunciado: "El CAD cambia las normas del dibujo técnico (líneas, cotas, escalas)."

explicacion: |
  Las normas se mantienen; cambia la herramienta.
```

### 3 — Libres

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Un programa libre de CAD 2D es..."
tipo: mc
opciones_explicitas:
  - "LibreCAD"
  - "Photoshop"
  - "Excel"
respuesta: "LibreCAD"

explicacion: |
  FreeCAD es para modelado 3D.
```

### 4 — Offset

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El comando 'desfasar' (offset) sirve para..."
tipo: mc
opciones_explicitas:
  - "Crear una paralela a una distancia dada"
  - "Borrar todo"
  - "Girar la pantalla"
respuesta: "Crear una paralela a una distancia dada"

explicacion: |
  Se usa mucho en construcciones.
```

### 5 — Fillet

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El comando 'empalme' (fillet) sirve para..."
tipo: mc
opciones_explicitas:
  - "Redondear la unión de dos líneas con un arco tangente"
  - "Cortar una pieza"
  - "Rotular"
respuesta: "Redondear la unión de dos líneas con un arco tangente"

explicacion: |
  Automatiza los enlaces.
```

### 6 — Coordenadas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Para dibujar con precisión se ingresan..."
tipo: mc
opciones_explicitas:
  - "Valores numéricos o se usan referencias a objetos"
  - "Medidas a ojo"
  - "Fotos"
respuesta: "Valores numéricos o se usan referencias a objetos"

explicacion: |
  El 'snap' captura puntos exactos.
```

### 7 — Snap

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Una referencia a objetos (snap) permite..."
tipo: mc
opciones_explicitas:
  - "Capturar puntos exactos como centro, medio o intersección"
  - "Imprimir"
  - "Guardar"
respuesta: "Capturar puntos exactos como centro, medio o intersección"

explicacion: |
  Evita errores invisibles.
```

### 8 — Escala 1:1

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "En CAD se dibuja normalmente a escala..."
tipo: mc
opciones_explicitas:
  - "1:1 (tamaño real)"
  - "1:50"
  - "10:1"
respuesta: "1:1 (tamaño real)"

explicacion: |
  La escala se aplica al imprimir.
```

### 9 — Dibujar a escala

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: falso
tipo: vf

enunciado: "En CAD hay que dibujar con las medidas ya reducidas a escala."

explicacion: |
  Se dibuja a tamaño real.
```

### 10 — Capas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Una capa agrupa..."
tipo: mc
opciones_explicitas:
  - "Elementos con color, tipo y grosor de línea comunes"
  - "Papeles"
  - "Archivos"
respuesta: "Elementos con color, tipo y grosor de línea comunes"

explicacion: |
  Se pueden ocultar y modificar en grupo.
```

### 11 — Ejemplo capas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "¿Qué se suele asignar a capas distintas?"
tipo: mc
opciones_explicitas:
  - "Contorno, cotas, ejes, texto y rayado"
  - "Solo el contorno"
  - "Solo el texto"
respuesta: "Contorno, cotas, ejes, texto y rayado"

explicacion: |
  Garantiza la jerarquía de líneas.
```

### 12 — Bloques

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Un bloque es..."
tipo: mc
opciones_explicitas:
  - "Un grupo de objetos reutilizable"
  - "Un error"
  - "Un tipo de papel"
respuesta: "Un grupo de objetos reutilizable"

explicacion: |
  Por ejemplo una puerta o un símbolo.
```

### 13 — Modificar bloque

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Si se modifica la definición de un bloque..."
tipo: mc
opciones_explicitas:
  - "Se actualizan todas sus copias"
  - "Solo cambia la primera copia"
  - "No cambia nada"
respuesta: "Se actualizan todas sus copias"

explicacion: |
  Ventaja para mantener consistencia.
```

### 14 — Plantilla

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Una plantilla de dibujo contiene..."
tipo: mc
opciones_explicitas:
  - "Unidades, capas, estilos y rótulo ya configurados"
  - "Una pieza terminada"
  - "Un manual"
respuesta: "Unidades, capas, estilos y rótulo ya configurados"

explicacion: |
  Ahorra tiempo y asegura consistencia.
```

### 15 — Tipos 3D

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El modelo 3D más usado en mecánica es el..."
tipo: mc
opciones_explicitas:
  - "Sólido"
  - "Alámbrico"
  - "De textura"
respuesta: "Sólido"

explicacion: |
  Tiene volumen y propiedades físicas.
```

### 16 — Extrusión

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La extrusión consiste en..."
tipo: mc
opciones_explicitas:
  - "Dar volumen a un boceto 2D empujándolo en una dirección"
  - "Girar la pantalla"
  - "Hacer un agujero en la mesa"
respuesta: "Dar volumen a un boceto 2D empujándolo en una dirección"

explicacion: |
  Es una operación básica del modelado.
```

### 17 — Revolución

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "La operación de revolución genera un sólido..."
tipo: mc
opciones_explicitas:
  - "Girando un perfil alrededor de un eje"
  - "Estirándolo en línea recta"
  - "Copiándolo"
respuesta: "Girando un perfil alrededor de un eje"

explicacion: |
  Típico de piezas cilíndricas.
```

### 18 — Paramétrico

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "En un modelo paramétrico, cambiar una cota..."
tipo: mc
opciones_explicitas:
  - "Actualiza todo el modelo"
  - "No afecta"
  - "Borra el modelo"
respuesta: "Actualiza todo el modelo"

explicacion: |
  Las medidas quedan como parámetros.
```

### 19 — Vistas automáticas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Del modelo 3D se pueden obtener automáticamente..."
tipo: mc
opciones_explicitas:
  - "Vistas, cortes y listas de piezas"
  - "Solo imágenes"
  - "Nada"
respuesta: "Vistas, cortes y listas de piezas"

explicacion: |
  Ahorra mucho trabajo.
```

### 20 — Formato 3D

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Un formato de intercambio habitual para modelos 3D es..."
tipo: mc
opciones_explicitas:
  - "STEP"
  - "DOC"
  - "MP3"
respuesta: "STEP"

explicacion: |
  DXF y DWG se usan sobre todo en 2D.
```

### 21 — Salida

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El trabajo CAD termina habitualmente en..."
tipo: mc
opciones_explicitas:
  - "Un plano exportado, por ejemplo a PDF"
  - "Un video"
  - "Un audio"
respuesta: "Un plano exportado, por ejemplo a PDF"

explicacion: |
  Con formato, rótulo y escala.
```

### 22 — Entender

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: falso
tipo: vf

enunciado: "Usar CAD reemplaza la necesidad de entender el dibujo técnico."

explicacion: |
  Un dibujo mal acotado sale mal aunque se vea prolijo.
```

### 23 — Capa

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_asistido_por_computadora_cad"
  nivel: "basico"
  tags: ["dibujo"]

tipo: completar
enunciado: "Cada elemento del dibujo se asigna a una ___ con su color y grosor de línea."
respuestas_validas:
  - "capa"

explicacion: |
  Ayuda a ordenar.
```
