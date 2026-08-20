### 1 — Máscara de capa por transparencia
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["capas", "mascara"]
pasos:
  - "Crear una nueva máscara de capa para ocultar partes seleccionadas."
respuesta: verdadero
tipo: vf
enunciado: "Una máscara de capa utiliza el negro para ocultar píxeles y el blanco para mostrarlos en la vista previa."
explicacion: "En las máscaras de capa, los tonos oscuros (negro) ocultan la visibilidad del contenido mientras que los tonos claros (blanco) revelan el contenido original sin destruirlo permanentemente."
```

### 2 — Definición de máscara de recorte
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["capas", "recorte"]
pasos:
  - "Aplicar una máscara de recorte para restringir el contenido superior."
respuesta: "Capa inferior"
tipo: completar
enunciado: "Una máscara de recorte limita la visibilidad del contenido de la capa actual a los píxeles visibles de la _____."
respuestas_validas:
  - "capa inferior"
  - "layer below"
explicacion: "La máscara de recorte vincula el contenido de una capa con la de la capa inmediatamente debajo, mostrando solo lo que tiene visibilidad en la segunda."
```

### 3 — Herramienta Lazo a selección
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["seleccion", "pena"]
pasos:
  - "Convertir una ruta vectorial creada con la herramienta Lazo en selección."
respuesta: verdadero
tipo: vf
enunciado: "La herramienta Lazo permite crear selecciones precisas definiendo puntos ancla manualmente alrededor de un objeto."
explicacion: "El Lazo (Lasso) es una herramienta manual para seleccionar áreas irregulares dibujando líneas que conectan los bordes del área deseada."
```

### 4 — Modo de color web
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["color", "export"]
pasos:
  - "Preparar un archivo para publicación en una página web estándar."
respuesta: RGB
tipo: completar
enunciado: "El espacio de color _____ es el estándar recomendado para imágenes destinadas a visualización en pantallas digitales y navegadores."
respuestas_validas:
  - "RGB"
  - "Red Green Blue"
  - "modelo RGB"
explicacion: "El modo RGB utiliza luz roja, verde y azul para simular colores en dispositivos emisores de luz como monitores y teléfonos."
```

### 5 — Resolución de pantalla vs impresión
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["resolucion", "impresion"]
pasos:
  - "Configurar la densidad de píxeles para un impreso en papel."
respuesta: 300
tipo: completar
enunciado: "Para garantizar una calidad óptima en impresión profesional, se recomienda una resolución de al menos _____ ppp (píxeles por pulgada)."
respuestas_validas:
  - "300"
  - "300 dpi"
explicacion: "La densidad de píxeles debe ser alta para impresión física; 72 ppp es suficiente para pantallas pero no para papel."
```

### 6 — Ajuste no destructivo
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["capas", "ajuste"]
pasos:
  - "Aplicar curvas de tono sin modificar los píxeles originales."
respuesta: verdadero
tipo: vf
enunciado: "Un Ajuste de Curva aplicado como capa independiente permite editar el tono posterior sin perder la información original de la imagen base."
explicacion: "Las capas de ajuste funcionan de manera no destructiva, aplicando transformaciones sobre los píxeles inferiores mientras se mantiene el archivo original intacto."
```

### 7 — Modo de fusión oscuro
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["capas", "fusion"]
pasos:
  - "Combinar dos capas donde los tonos oscuros prevalezcan."
respuesta: Multiply
tipo: completar
enunciado: "El modo de fusión _____ hace que los píxeles de la capa superior sean más oscuros al multiplicar sus valores con los inferiores."
respuestas_validas:
  - "Multiply"
  - "Multiplicar"
  - "multiply"
explicacion: "Multiply oscurece las áreas superpuestas, ideal para sombreamiento o texturas sobre fondos claros."
```

### 8 — Desenfoco gaussiano
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["filtros", "desenfoque"]
pasos:
  - "Suavizar los bordes de una imagen seleccionada."
respuesta: Desenfocar
tipo: completar
enunciado: "El filtro _____ aplica un desenfoque uniforme basado en el radio especificado para suavizar texturas y bordes."
respuestas_validas:
  - "Desenfocar"
  - "Gaussian Blur"
explicacion: "El desenfoque gaussiano difumina los píxeles adyacentes proporcionalmente a la distancia, creando un efecto suave natural."
```

### 9 — Compresión JPEG
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["export", "formato"]
pasos:
  - "Reducir el tamaño de archivo eliminando datos visuales."
respuesta: verdadero
tipo: vf
enunciado: "El formato JPEG utiliza compresión con pérdida, lo que significa que la calidad visual disminuye a medida que se reduce el tamaño del archivo."
explicacion: "JPEG sacrifica detalles finos para lograr tamaños de archivo pequeños, lo cual es útil para web pero no ideal para edición posterior."
```

### 10 — Soporte PNG
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["formato", "transparencia"]
pasos:
  - "Exportar un gráfico con fondo transparente para una interfaz."
respuesta: PNG
tipo: completar
enunciado: "El formato _____ es el estándar preferido para gráficos web que requieren fondos transparentes sin pérdida de calidad en los bordes."
respuestas_validas:
  - "PNG"
  - "Portable Network Graphics"
explicacion: "PNG soporta transparencia alfa (gradientes) y compresión sin pérdida, ideal para iconos y elementos gráficos sobre fondos diversos."
```

### 11 — Tolerancia de selección
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["seleccion", "magia"]
pasos:
  - "Seleccionar áreas de color similar usando la herramienta Lazo Mágico."
respuesta: "Tolerancia"
tipo: completar
enunciado: "El parámetro _____ en la herramienta Lazo Mágico determina qué rango de colores se considera similar para la selección automática."
respuestas_validas:
  - "Tolerancia"
  - "tolerancia"
explicacion: "A mayor tolerancia, más variaciones de color se seleccionan; a menor, solo los píxeles idénticos al clic inicial."
```

### 12 — Pincel Clonar
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["herramienta", "reparacion"]
pasos:
  - "Copiar píxeles de un área de origen a un área destino."
respuesta: Origen
tipo: completar
enunciado: "La herramienta Clonar usa un punto _____ definido por el cursor para copiar información de una zona a otra."
respuestas_validas:
  - "Origen"
  - "source point"
explicacion: "El pincel clon toma píxeles exactos de la ubicación definida en la muestra y los pinta en la nueva posición sin alterar el original."
```

### 13 — Pincel Reparar
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["herramienta", "reparacion"]
pasos:
  - "Eliminar una mancha ajustando automáticamente el entorno circundante."
respuesta: Reparar
tipo: completar
enunciado: "La herramienta _____ analiza la textura y el color del área circundante para eliminar defectos de manera más natural que el clonar."
respuestas_validas:
  - "Reparar"
  - "Healing Brush"
explicacion: "El pincel reparador combina la información de color y textura del entorno, ideal para retoque facial o eliminación de objetos pequeños."
```

### 14 — Selección de rango Hueso
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["ajuste", "color"]
pasos:
  - "Ajustar el tono de un color específico en toda la imagen."
respuesta: Matiz
tipo: completar
enunciado: "En el Ajuste de _____ y Saturación, se puede seleccionar un rango específico de colores para modificar solo ese tono."
respuestas_validas:
  - "Matiz"
  - "Hue"
explicacion: "El ajuste de Matiz permite cambiar los tonos cromáticos sin afectar necesariamente la luminosidad o saturación del área seleccionada."
```

### 15 — Objeto Inteligente
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["capas", "filtros"]
pasos:
  - "Aplicar un filtro a una capa para poder editarlo después."
respuesta: verdadero
tipo: vf
enunciado: "Si una imagen se convierte en Objeto Inteligente, los filtros aplicados sobre él se pueden reeditar sin perder calidad original."
explicacion: "Los objetos inteligentes encapsulan la información de píxeles y permiten transformar o filtrar el contenido de forma no destructiva y reversible."
```

### 16 — Canal Alfa
```yaml
metadata:
  materia: "diseño-grafico"
  tema: "edicion-de-imagen"
  nivel: "intermedio"
  tags: ["canal", "seleccion"]
pasos:
  - "Guardar una selección compleja para usarla en otro proyecto."
respuesta: Alfa
tipo: completar
enunciado: "Los canales _____ almacenan información de transparencia o selecciones que pueden ser cargadas y utilizadas nuevamente como máscaras."
respuestas_validas:
  - "Alfa"
  - "Alpha"
explicacion: "El canal alfa actúa como un mapa de bits donde el blanco es visible y el negro es transparente, útil para guardar selecciones complejas."
```

### 17 — Opacidad de capa
```yaml
metadata:
  materia: "diseño-grafico"
  tema