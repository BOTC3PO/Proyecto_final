### 1 — Identificación de sesgo en titulares
```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo"
  nivel: "basico"
  tags: ["sesgo", "titulares", "critica"]

enunciado: "Un portal de noticias publica el siguiente titular: 'El polémico candidato X propone medidas que podrían destruir la economía nacional'. Este titular presenta un ___ evidente, ya que utiliza adjetivos con carga emocional para influir en la opinión del lector."

respuestas_validas: ["sesgo de confirmación", "sesgo de presentación", "sesgo de encuadre"]
respuesta: "sesgo de presentación"
tipo: completar

explicacion: |
  El titular utiliza palabras con fuerte carga negativa ('polémico', 'destruir') para guiar la interpretación del lector hacia una conclusión específica, lo cual es un ejemplo de sesgo en la presentación de la información.
```

### 2 — Verificación de Deepfakes
```
metadata:
  materia: "ciudadania_digital"
  tema: "deepfakes"
  nivel: "intermedio"
  tags: ["ia", "video", "falsificacion"]

enunciado: "Se observa un video de un líder político diciendo algo extremadamente inusual. Al analizarlo con cuidado, se nota que el parpadeo es irregular y los movimientos de la boca no coinciden perfectamente con el audio. ¿Es este video un Deepfake?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  Los deepfakes son contenidos audiovisuales creados o manipulados mediante inteligencia artificial para que parezca que alguien dice o hace algo que nunca ocurrió. Las inconsistencias en el parpadeo o la sincronización labial son señales comunes de manipulación.
```

### 3 — Pasos para verificar una noticia sospechosa
```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion"
  nivel: "intermedio"
  tags: ["metodologia", "verificacion"]

enunciado: "Ordena los pasos lógicos para verificar si una noticia viral en redes sociales es real o desinformación:"

opciones_explicitas: ["1. Buscar la noticia en fuentes oficiales o medios de prestigio", "2. Analizar el origen y la fecha de la publicación", "3. Verificar si la imagen o video tiene marcas de manipulación", "4. Contrastar la información con otros medios independientes"]
respuesta: ["1. Buscar la noticia en fuentes oficiales o medios de prestigio", "2. Analizar el origen y la fecha de la publicación", "3. Verificar si la imagen o video tiene marcas de manipulación", "4. Contrastar la información con otros medios independientes"]
tipo: ordenar

explicacion: |
  Para combatir la desinformación, es fundamental seguir un proceso de triangulación: verificar la fuente, el contexto temporal, la integridad del contenido multimedia y la concordancia con otras fuentes confiables.
```

### 4 — El impacto de los algoritmos de personalización
```
metadata:
  materia: "ciudadania_digital"
  tema: "sesgo_confirmacion"
  nivel: "avanzado"
  tags: ["algoritmos", "burbujas_filtro"]

variables:
  escenario_idx: uno_de([0, 1])
  casos: [["Usuario A recibe solo noticias que refuerzan su opinión política.", "Usuario B recibe noticias de una variedad de perspectivas distintas."], ["sesgo de confirmación", "pensamiento crítico"]]

enunciado: "En el caso del {casos[escenario_idx][0]}, el usuario está atrapado en una 'burbuja de filtro' que alimenta su {casos[escenario_idx][1]}."

respuesta: casos[escenario_idx][1]
tipo: completar

explicacion: |
  Los algoritmos de las redes sociales tienden a mostrarnos contenido similar a lo que ya nos gusta, creando una cámara de eco que refuerza nuestros prejuicios y nos impide ver otros puntos de vista.
```

### 5 — Verdad o Falso: IA Generativa
```
metadata:
  materia: "ciudadania_digital"
  tema: "deepfakes"
  nivel: "basico"
  tags: ["ia", "tecnologia"]

enunciado: "La tecnología de Deepfake requiere obligatoriamente que una persona real haya grabado el video original para luego ser manipulada por IA."

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: vf

explicacion: |
  Aunque existen modelos que pueden generar rostros desde cero, la mayoría de los deepfakes conocidos se basan en la técnica de 'face-swapping' (intercambio de rostros) sobre un video de una persona real para lograr un realismo extremo.
```