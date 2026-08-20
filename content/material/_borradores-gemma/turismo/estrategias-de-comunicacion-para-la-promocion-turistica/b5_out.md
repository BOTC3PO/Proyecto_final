### 1 — El canal de difusión ideal
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "basico"
  tags: ["canales", "promocion"]

variables:
  escenario: uno_de([["un destino de lujo para parejas", "Instagram"], ["un parque nacional para mochileros", "TikTok"], ["un centro cultural para adultos mayores", "Facebook"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Instagram", "TikTok", "Facebook"]

enunciado: "Un destino turístico busca atraer a un perfil de viajero específico. Si el objetivo es promocionar {escenario[idx][0]}, ¿cuál es la red social más adecuada para su estrategia de comunicación?"

explicacion: |
  La elección del canal depende del segmento de mercado. Instagram es visual y estético (ideal para lujo/parejas), TikTok es dinámico y rápido (ideal para jóvenes/mochileros) y Facebook permite segmentación detallada para públicos de mayor edad.
```

### 2 — El concepto de Branding Destino
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "intermedio"
  tags: ["branding", "identidad"]

variables:
  caso: uno_de([["un eslogan que resalta la gastronomía local", "Identidad"], ["un logo con colores de la naturaleza", "Identidad"], ["una campaña de influencers", "Promoción"]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: vf

enunciado: "En el caso de {caso[idx][0]}, estamos trabajando principalmente sobre la ________ del marca-destino."

pasos:
  - "Identificar si el elemento pertenece al núcleo de identidad o a la acción de difusión."

explicacion: |
  La identidad define 'quién es' el destino (valores, símbolos, eslogan), mientras que la promoción es el acto de comunicarlo para atraer visitantes.
```

### 3 — El proceso de una campaña integral
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "avanzado"
  tags: ["planificacion", "pasos"]

respuesta: ["Investigación de mercado", "Definición de objetivos", "Selección de canales", "Ejecución de la campaña"]
tipo: ordenar
opciones_explicitas: ["Investigación de mercado", "Definición de objetivos", "Selección de canales", "Ejecución de la campaña"]

enunciado: "Para lanzar una estrategia de promoción turística exitosa, se deben seguir las fases del proceso de comunicación en el orden correcto."

explicacion: |
  No se pueden elegir canales sin conocer el mercado ni tener objetivos claros. El orden lógico es: 1. Diagnóstico/Investigación, 2. Planificación/Objetivos, 3. Mix de medios/Canales y 4. Implementación/Ejecución.
```

### 4 — El impacto de la comunicación digital
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "basico"
  tags: ["digital", "engagement"]

variables:
  dato: uno_de([["un destino que recibe comentarios positivos en TripAdvisor", verdadero], ["un destino con fotos de baja calidad en su web", falso]])
  idx: uno_de([0, 1])

respuesta: dato[idx][1]
tipo: vf

enunciado: "Si un destino cuenta con una gestión activa de la reputación online y recibe comentarios positivos en plataformas de reseñas como TripAdvisor, ¿se considera que su estrategia de comunicación digital está funcionando positivamente? ___"

explicacion: |
  La reputación online es un pilar de la comunicación moderna. El feedback positivo de los usuarios actúa como validación social para futuros turistas.
```

### 5 — El mensaje de marca
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "intermedio"
  tags: ["mensaje", "segmentacion"]

variables:
  mensaje: uno_de([["'Aventura extrema y adrenalina'", "Aventureros"], [""'Relajación y paz absoluta'", "Wellness"], [""'Cultura y tradición viva'", "Cultural"]])
  idx: uno_de([0, 1, 2])

respuesta: mensaje[idx][1]
tipo: completar

enunciado: "Si el mensaje principal de una campaña es: \"{mensaje[idx][0]}\", el segmento de mercado objetivo es el de tipo ________."

pasos:
  - "Analizar el concepto clave del mensaje."
  - "Relacionar el concepto con el perfil de viajero correspondiente."

explicacion: |
  La segmentación requiere que el mensaje sea coherente con las necesidades del público objetivo. Un mensaje de adrenalina busca perfiles activos, mientras que uno de paz busca perfiles de descanso o bienestar.
```