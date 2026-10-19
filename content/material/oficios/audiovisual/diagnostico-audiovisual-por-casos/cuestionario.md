# Audiovisual — Diagnóstico audiovisual por casos (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta.

---
### 1 — Metodo

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Describir el síntoma, ubicar la etapa, probar y corregir", "Corregir sin probar", "Exportar y esperar", "Cambiar el formato siempre"]
respuesta: "Describir el síntoma, ubicar la etapa, probar y corregir"

enunciado: "¿Cuál es el orden del método de diagnóstico?"

explicacion: |
  Se corrige donde nace el problema.
```

### 2 — Metodo

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: vf
respuesta: falso

enunciado: "Un eco de grabación se arregla bien cambiando el formato de exportación."

explicacion: |
  El problema nace en la captura.
```

### 3 — Metodo

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "intermedio"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Si aparece en el archivo original, en el proyecto o solo en el exportado", "Qué color tiene la interfaz", "Cuántos cables hay", "Quién compró el editor"]
respuesta: "Si aparece en el archivo original, en el proyecto o solo en el exportado"

enunciado: "¿Qué pregunta ayuda a acotar un defecto?"

explicacion: |
  Indica en qué etapa buscar.
```

### 4 — Eco

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "basico"
  tags: ["eco"]

tipo: mc
opciones_explicitas: ["Grabación lejos del micrófono o en un espacio con superficies duras", "Un archivo dañado", "Exceso de bitrate", "Falta de subtítulos"]
respuesta: "Grabación lejos del micrófono o en un espacio con superficies duras"

enunciado: "Una voz distante y con rebote suele indicar..."

explicacion: |
  Es un problema de captura.
```

### 5 — Eco

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "intermedio"
  tags: ["eco"]

tipo: mc
opciones_explicitas: ["Se mejora con reducción de reverberación, con resultados limitados", "Se arregla perfectamente con un clic", "No admite ningún proceso", "Se arregla subiendo el volumen"]
respuesta: "Se mejora con reducción de reverberación, con resultados limitados"

enunciado: "Si no se puede volver a grabar, el audio con eco..."

explicacion: |
  Lo mejor es arreglarlo en origen.
```

### 6 — Eco

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "basico"
  tags: ["eco"]

tipo: mc
opciones_explicitas: ["Grabar cerca del micrófono y en un lugar con telas", "Alejar el micrófono", "Grabar en un baño con azulejos", "Subir el ISO"]
respuesta: "Grabar cerca del micrófono y en un lugar con telas"

enunciado: "¿Cuál es una buena solución a futuro para evitar el eco?"

explicacion: |
  Reduce los reflejos.
```

### 7 — Recorte

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "basico"
  tags: ["recorte"]

tipo: completar
enunciado: "Una voz áspera y rota en los momentos fuertes puede indicar ___ de la señal."
respuestas_validas:
  - "recorte"
  - "clipping"
  - "saturación"

explicacion: |
  Los picos superaron el máximo.
```

### 8 — Recorte

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "intermedio"
  tags: ["recorte"]

tipo: mc
opciones_explicitas: ["Los picos aparecen aplanados contra el techo", "La onda es muy corta", "La onda está en silencio", "Faltan colores"]
respuesta: "Los picos aparecen aplanados contra el techo"

enunciado: "¿Cómo se detecta el recorte mirando la forma de onda?"

explicacion: |
  Indica nivel excesivo.
```

### 9 — Recorte

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "basico"
  tags: ["recorte"]

tipo: vf
respuesta: falso

enunciado: "Un recorte producido durante la grabación se repara bien en edición."

explicacion: |
  Hay que volver a grabar con menos ganancia.
```

### 10 — Recorte

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "intermedio"
  tags: ["recorte"]

tipo: mc
opciones_explicitas: ["Bajar el nivel de las pistas o del conjunto y volver a exportar", "Aumentar la ganancia", "Exportar en otro idioma", "Borrar la voz"]
respuesta: "Bajar el nivel de las pistas o del conjunto y volver a exportar"

enunciado: "Si el recorte ocurrió en la mezcla, ¿qué se hace?"

explicacion: |
  El material original está intacto.
```

### 11 — Peso

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "basico"
  tags: ["peso"]

tipo: mc
opciones_explicitas: ["Una tasa de bits muy alta o una resolución mayor que la necesaria", "Un micrófono dinámico", "Un fondo desenfocado", "Un subtítulo corto"]
respuesta: "Una tasa de bits muy alta o una resolución mayor que la necesaria"

enunciado: "Un archivo exportado demasiado pesado puede deberse a..."

explicacion: |
  Se revisan los ajustes de exportación.
```

### 12 — Peso

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "intermedio"
  tags: ["peso"]

tipo: mc
opciones_explicitas: ["MP4 con H.264, resolución acorde y bitrate razonable", "Un formato sin compresión", "Una resolución desmedida", "Un archivo de audio"]
respuesta: "MP4 con H.264, resolución acorde y bitrate razonable"

enunciado: "Una exportación razonable para web sería..."

explicacion: |
  Equilibra calidad y peso.
```

### 13 — Peso

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "basico"
  tags: ["peso"]

tipo: vf
respuesta: verdadero

enunciado: "Conviene conservar siempre una copia de alta calidad por si hace falta volver a exportar."

explicacion: |
  No se debe depender del archivo ya comprimido.
```

### 14 — Peso

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "basico"
  tags: ["peso"]

tipo: vf
respuesta: verdadero

enunciado: "Quitar tramos innecesarios también reduce el peso del archivo."

explicacion: |
  Menos duración, menos datos.
```

### 15 — Desfase

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "intermedio"
  tags: ["desfase"]

tipo: mc
opciones_explicitas: ["Material de celular con cuadros por segundo variables", "Un exceso de graves", "Un título mal ubicado", "Un LUT de color"]
respuesta: "Material de celular con cuadros por segundo variables"

enunciado: "Los labios no coinciden con la voz y el desfase crece. ¿Qué causa es frecuente?"

explicacion: |
  El editor lo interpreta con tasa fija.
```

### 16 — Desfase

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "avanzado"
  tags: ["desfase"]

tipo: mc
opciones_explicitas: ["Convirtiendo el material a una tasa de cuadros constante", "Subiendo el volumen", "Agregando música", "Quitando los subtítulos"]
respuesta: "Convirtiendo el material a una tasa de cuadros constante"

enunciado: "¿Cómo se soluciona ese desfase?"

explicacion: |
  Luego se abre el proyecto con esa tasa.
```

### 17 — Desfase

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "intermedio"
  tags: ["desfase"]

tipo: mc
opciones_explicitas: ["Una señal de referencia como una palmada al inicio", "Un filtro de color", "Una transición", "Bajar la resolución"]
respuesta: "Una señal de referencia como una palmada al inicio"

enunciado: "Para sincronizar un audio externo con el video, ¿qué ayuda?"

explicacion: |
  Se alinean visualmente los picos.
```

### 18 — Desfase

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "avanzado"
  tags: ["desfase"]

tipo: vf
respuesta: verdadero

enunciado: "Conviene revisar si el desfase es constante o creciente, porque indica causas distintas."

explicacion: |
  Un desfase creciente sugiere diferencia de tasas.
```

### 19 — Color

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "intermedio"
  tags: ["color"]

tipo: mc
opciones_explicitas: ["Calibración del monitor y espacio de color de la exportación", "La duración", "El nombre del archivo", "El tipo de micrófono"]
respuesta: "Calibración del monitor y espacio de color de la exportación"

enunciado: "Un video se ve bien en el editor y lavado en otro dispositivo. ¿Qué se revisa?"

explicacion: |
  También se prueba en varios dispositivos.
```

### 20 — Color

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "intermedio"
  tags: ["color"]

tipo: mc
opciones_explicitas: ["Igualarlos tomando uno como referencia", "Exportar igual", "Subir el volumen", "Agregar más efectos"]
respuesta: "Igualarlos tomando uno como referencia"

enunciado: "Los planos de una escena tienen colores distintos. ¿Qué conviene?"

explicacion: |
  Se usan forma de onda y vectorscopio.
```

### 21 — Color

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "intermedio"
  tags: ["color"]

tipo: vf
respuesta: verdadero

enunciado: "Aplicar un estilo antes de corregir puede apoyar el estilo sobre errores."

explicacion: |
  Primero se corrige y luego se estiliza.
```

### 22 — Color

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "avanzado"
  tags: ["color"]

tipo: mc
opciones_explicitas: ["Colores exagerados o fuera de lugar", "Más cuadros por segundo", "Mejor audio", "Menor peso"]
respuesta: "Colores exagerados o fuera de lugar"

enunciado: "Una LUT aplicada dos veces puede producir..."

explicacion: |
  Es una causa común de color extraño.
```

### 23 — Cierre

```
metadata:
  materia: "audiovisual"
  tema: "diagnostico_audiovisual_por_casos"
  nivel: "intermedio"
  tags: ["cierre"]

tipo: mc
opciones_explicitas: ["Cada decisión de captura, edición y entrega deja huella en el resultado", "Todo se arregla al exportar", "La captura no influye", "Solo importa la imagen"]
respuesta: "Cada decisión de captura, edición y entrega deja huella en el resultado"

enunciado: "¿Qué idea une todos los casos de la ruta?"

explicacion: |
  Por eso se corrige en origen cuando se puede.
```
