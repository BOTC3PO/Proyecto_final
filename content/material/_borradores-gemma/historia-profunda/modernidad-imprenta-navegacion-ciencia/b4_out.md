### 1 — El motor de la difusión
```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["renacimiento", "imprenta", "difusion"]

tipo: mc
opciones_explicitas: ["La estandarización de textos y diagramas", "La prohibición de la lectura en latín", "El aumento del costo de los libros", "La creación de bibliotecas privadas"]

enunciado: "Antes de la imprenta de tipos móviles, los libros se copiaban a mano, lo que generaba errores constantes. ¿Cuál fue el principal impacto de la imprenta en la difusión del conocimiento científico durante el Renacimiento?"

explicacion: |
  La imprenta permitió la producción masiva de textos idénticos. Esto garantizó que científicos en diferentes partes de Europa pudieran estudiar los mismos diagramas y datos astronómicos sin las variaciones de los copistas manuales.
```

### 2 — La era de los descubrimientos
```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["navegacion", "cartografia", "imprenta"]

variables:
  escenario: uno_de([
    ["mapa_preciso", "cartografía náutica detallada"],
    ["mapa_vago", "esquemas de navegación imprecisos"]
  ])

tipo: mc
opciones_explicitas: ["Permitió la creación de mapas más precisos y repetibles", "Hizo que la navegación fuera más peligrosa", "Eliminó la necesidad de usar la brújula", "Limitó el conocimiento a los capitanes de flota"]

enunciado: "La imprenta facilitó la reproducción de {escenario[0]}. ¿Cómo ayudó esto directamente a la era de las grandes navegaciones?"

explicacion: |
  La capacidad de imprimir mapas y tablas de navegación (como las efemérides) permitió que los navegantes contaran con herramientas de orientación estandarizadas, reduciendo el margen de error en las rutas transoceánicas.
```

### 3 — El orden del conocimiento
```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "avanzado"
  tags: ["metodologia", "ciencia", "orden"]

tipo: ordenar
opciones_explicitas: ["Invención de la imprenta", "Difusión de textos clásicos y nuevos hallazgos", "Revolución Científica y debates académicos"]

enunciado: "Ordena cronológicamente la cadena de causalidad que conectó la tecnología con el cambio de paradigma científico:"

explicacion: |
  La tecnología de la imprenta (1) permitió la circulación masiva de ideas (2), lo que alimentó el debate constante y la validación de experimentos que caracterizan la Revolución Científica (3).
```

### 4 — El cambio de paradigma
```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["autoridad", "ciencia", "humanismo"]

tipo: completar
respuestas_validas: ["observación", "autoridad"]

enunciado: "El Renacimiento promovió el paso de un conocimiento basado en la ___ de los textos antiguos a uno basado en la ___ directa de la naturaleza."

explicacion: |
  La imprenta permitió que los textos antiguos fueran comparados entre sí, revelando contradicciones y fomentando que los científicos confiaran más en sus propios experimentos y observaciones que en la tradición dogmática.
```

### 5 — El impacto en el lenguaje
```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["lenguaje", "ciencia", "comunicacion"]

tipo: mc
opciones_explicitas: ["El ascenso de las lenguas vernáculas", "El dominio exclusivo del latín", "La desaparición de la escritura", "El uso de jeroglíficos científicos"]

enunciado: "Al imprimir libros en idiomas locales (español, francés, alemán) y no solo en latín, ¿qué efecto tuvo la imprenta en la democratización del saber científico?"

explicacion: |
  La impresión en lenguas vernáculas permitió que artesanos, navegantes y técnicos (que no sabían latín pero aplicaban la ciencia práctica) accedieran al conocimiento, uniendo la teoría científica con la práctica técnica.
```