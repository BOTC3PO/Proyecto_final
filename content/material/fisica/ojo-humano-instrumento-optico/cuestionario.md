# Fisica — Ojo humano instrumento optico (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El cristalino

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["anatomia", "optica"]

respuesta: "lente convergente"
tipo: completar
respuestas_validas:
  - "lente convergente"
  - "lente divergente"
  - "espejo plano"

enunciado: "El cristalino es una estructura del ojo que actúa como una ___ para enfocar la luz en la retina."
```

### 2 — La retina

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["anatomia", "imagen"]

respuesta: "real e invertida"
tipo: completar
respuestas_validas:
  - "real e invertida"
  - "virtual y derecha"
  - "real y derecha"
  - "virtual e invertida"

enunciado: "La imagen que se forma sobre la ___ es de naturaleza ___."
```

### 3 — Función del cristalino

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["fisiologia"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿El cristalino cambia su distancia focal para permitir la acomodación visual?"
```

### 4 — El proceso de visión

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["secuencia"]

respuesta_orden: ["entrada de luz", "refracción en el cristalino", "proyección en la retina"]
tipo: ordenar
opciones_explicitas: ["entrada de luz", "refracción en el cristalino", "proyección en la retina"]

enunciado: "Ordene el camino de la luz desde el exterior hasta la detección visual:"
```

### 5 — El iris

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["anatomia"]

respuesta: "controlar la cantidad de luz"
tipo: completar
respuestas_validas:
  - "controlar la cantidad de luz"
  - "enfocar la imagen"
  - "producir la visión"

enunciado: "La función principal del iris es ___."
```

### 6 — Miopía

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos", "miopia"]

respuesta: "divergente"
tipo: completar
respuestas_validas:
  - "divergente"
  - "convergente"
  - "plana"

enunciado: "En un ojo con miopía, la imagen se forma antes de la retina, por lo que se requiere una lente ___ para corregirlo."
```

### 7 — Hipermetropía

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos", "hipermetropia"]

respuesta: "convergente"
tipo: completar
respuestas_validas:
  - "convergente"
  - "divergente"
  - "neutra"

enunciado: "Para corregir la hipermetropía, donde el punto focal está detrás de la retina, se utiliza una lente ___."
```

### 8 — Foco de la imagen

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos"]

respuesta: "detrás"
tipo: completar
respuestas_validas:
  - "detrás"
  - "delante"
  - "sobre"

enunciado: "En un ojo miope, el punto focal de los rayos paralelos se encuentra ___ de la retina."
```

### 9 — Astigmatismo

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos"]

respuesta: "cilíndrica"
tipo: completar
respuestas_validas:
  - "cilíndrica"
  - "esférica"
  - "plana"

enunciado: "El astigmatismo se debe a una curvatura irregular de la córnea o el cristalino y se corrige con lentes ___."
```

### 10 — Comparación de defectos

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "miopía"
tipo: mc
opciones_explicitas: ["miopía", "hipermetropía", "astigmatismo", "presbicia"]

enunciado: "¿Qué defecto impide ver con claridad los objetos lejanos?"
```

### 11 — Cálculo de distancia focal

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  f: 25.0
  d: 100.0

respuesta: 0.25
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si un objeto se coloca a {d} cm de una lente con una distancia focal de {f} cm, ¿cuál es la distancia de la imagen en metros? (Use la fórmula 1/f = 1/d + 1/d')"
```

### 12 — Potencia de la lente

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  f_m: 0.5

respuesta: 2.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcule la potencia (en dioptrías) de una lente cuya distancia focal es {f_m} metros."
```

### 13 — Lente del ojo

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  f_ojo: 0.02
  d_obj: 0.5

respuesta: 0.0416
tipo: completar
tolerancia_abs: 0.001

enunciado: "Un ojo tiene una distancia focal de {f_ojo} m. Si un objeto está a {d_obj} m, ¿a qué distancia de la lente se forma la imagen? (Calcule en metros)"
```

### 14 — Magnificación

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  h_obj: 2.0
  h_img: 10.0

respuesta: 5.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si el tamaño de un objeto es {h_obj} cm y el tamaño de su imagen es {h_img} cm, ¿cuál es el aumento lateral?"
```

### 15 — Relación de potencias

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  p_correcta: 2.0
  p_incorrecta: -2.0

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Si una lente tiene una potencia de +2.0 dioptrías, ¿es una lente ___?"
```

### 16 — Verdad o Falso: Luz

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["teoria"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿La luz debe refractarse al pasar del aire al córnea?"
```

### 17 — Verdad o Falso: Retina

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["teoria"]

respuesta: "falso"
tipo: completar
enunciado: "¿La retina es la parte del ojo encargada de enfocar la luz mediante la refracción?"
```

### 18 — Comparación: Miosis

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["fisiologia"]

respuesta: "pupila más pequeña"
tipo: completar
respuestas_validas:
  - "pupila más pequeña"
  - "pupila más grande"
  - "cristalino más plano"

enunciado: "En condiciones de mucha luz, la pupila experimenta miosis, lo que significa que la pupila es ___."
```

### 19 — Comparación: Midriasis

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["fisiologia"]

respuesta: "pupila más grande"
tipo: completar
respuestas_validas:
  - "pupila más grande"
  - "pupila más pequeña"
  - "cristalino más esférico"

enunciado: "La midriasis es la dilatación de la pupila, es decir, la ___."
```

### 20 — El punto remoto

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["teoria"]

respuesta: "distancia mínima"
tipo: completar
respuestas_validas:
  - "distancia mínima"
  - "distancia máxima"
  - "foco infinito"

enunciado: "El punto remoto se define como la ___ a la que un objeto puede estar para ser visto con nitidez por un ojo con un defecto."
```

### 21 — Escenario: Lente para miopía

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  idx: uno_de([0,1])
  tipo_lente: uno_de(["divergente", "convergente"])
  lente_texto: uno_de(["divergente", "convergente"])

respuesta: "divergente"
tipo: mc
opciones_explicitas: ["divergente", "convergente"]

enunciado: "Un paciente tiene miopía. El médico le receta una lente ___ para corregir su visión."
```

### 22 — Escenario: Hipermetropía

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Para un paciente con hipermetropía, el tipo de lente necesario es ___."
```

### 23 — Escenario: El rayo de luz

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "se desvía"
tipo: completar
respuestas_validas:
  - "se desvía"
  - "no cambia"
  - "se refleja"

enunciado: "Cuando la luz pasa del aire al cristalino, su velocidad cambia y, por lo tanto, el rayo ___."
```

### 24 — Escenario: Imagen en la retina

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "real"
tipo: completar
respuestas_validas:
  - "real"
  - "virtual"
  - "imaginaria"

enunciado: "Si la imagen se puede proyectar sobre una pantalla, decimos que la imagen es ___."
```

### 25 — Escenario: El cristalino y la edad

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "presbicia"
tipo: completar
respuestas_validas:
  - "presbicia"
  - "miopía"
  - "astigmatismo"

enunciado: "La pérdida de la capacidad de acomodación del cristalino debido a la edad se conoce como ___."
```
