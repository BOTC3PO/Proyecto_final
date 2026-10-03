# Examen jefe — [PENDIENTE #905]

> Logro #905. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **123 preguntas totales** en 5/5 secciones.

---

## Sección: ritmo-compas-pulso-figuras-musicales (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["ritmo", "pulso", "musica"]

respuesta: verdadero
tipo: vf

enunciado: "El pulso es la unidad básica de tiempo en la música, similar al latido del corazón, que nos permite sentir el ritmo de una obra."

explicacion: |
  Efectivamente, el pulso es la sensación constante de regularidad que percibimos en la música.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["figuras_musicales", "duracion"]

variables:
  escenario: uno_de([["blanca", "redonda"], ["negra", "blanca"], ["corchea", "negra"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Si comparamos la duración de una {escenario[0]} con la de una {escenario[1]}, ¿cuál de las dos es la que tiene el doble de duración?"

explicacion: |
  En la jerarquía de las figuras, la {escenario[1]} equivale a dos {escenario[0]}.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["figuras_musicales", "calculo"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Si una nota negra equivale a 1 tiempo, ¿cuántas corcheas caben en el espacio de una sola nota negra?"

pasos:
  - "Identificar que una negra es igual a dos corcheas."

explicacion: |
  Una negra contiene 2 corcheas. Por lo tanto, en una negra caben 2 corcheas.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["orden", "figuras_musicales"]

respuesta_orden: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración (de la más larga a la más corta):"

explicacion: |
  El orden correcto de mayor a menor es: Redonda (4 tiempos), Blanca (2 tiempos), Negra (1 tiempo) y Corchea (1/2 tiempo).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["compas", "terminologia"]

respuesta: "compás"
tipo: completar
respuestas_validas:
  - "compás"
  - "compas"

enunciado: "La división de un tiempo musical en partes iguales, que agrupa pulsos, se denomina ___."

explicacion: |
  El compás es la unidad que organiza los pulsos en grupos regulares.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

variables:
  valor_blanca: 2
  valor_negra: 1

respuesta: valor_negra * 2
tipo: completar
tolerancia_abs: 0

enunciado: "Si una blanca equivale a {valor_blanca} pulsos, ¿cuántos pulsos equivalen a una negra?"

pasos:
  - "Identificamos que una blanca tiene 2 pulsos."
  - "Sabemos que una negra es la mitad de una blanca."
  - "Calculamos: 2 / 2 = 1."

explicacion: |
  En la música, la relación entre figuras es constante. La negra es la mitad de la blanca, por lo tanto, si la blanca vale 2, la negra vale 1.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

variables:
  idx: uno_de([0, 1])
  escenario: [[4, "4"], [8, "8"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["2", "4", "8", "16"]

enunciado: "En un compás de 4/4, ¿cuántas corcheas caben en una blanca?"

pasos:
  - "Una blanca equivale a 2 pulsos (negras)."
  - "Cada pulso (negra) se divide en 2 corcheas."
  - "Entonces, 2 negras * 2 corcheas/negra = 4 corcheas."

explicacion: |
  La relación es: 1 blanca = 2 negras = 4 corcheas.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

respuesta: falso
tipo: vf

enunciado: "¿Una redonda equivale a la duración de 3 negras?"

explicacion: |
  Falso. Una redonda equivale a 4 negras (o 2 blancas).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["musica", "figuras_musicales"]

respuesta: "2"
respuestas_validas:
  - "2"
tipo: completar

enunciado: "En términos de duración de pulsos, una blanca equivale a ___ negras (y una negra equivale a 2 corcheas)."

explicacion: |
  La jerarquía es: Redonda (4) -> Blanca (2) -> Negra (1) -> Corchea (0.5).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

respuesta_orden: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración:"

explicacion: |
  La redonda es la más larga (4 pulsos), seguida de la blanca (2), la negra (1) y finalmente la corchea (0.5).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["figuras_musicales", "duracion"]

enunciado: "Si una negra tiene una duración de 1 unidad de tiempo, ¿cuántas unidades de tiempo dura una blanca?"

respuesta: 2
tipo: completar
tolerancia_abs: 0

explicacion: |
  La blanca es el doble de una negra. Si la negra es 1, la blanca es 2.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["figuras_musicales", "equivalencias"]

variables:
  escenario: uno_de([["blanca", "2"], ["negra", "4"]])

enunciado: "Considerando que una negra equivale a 1 tiempo, ¿cuántas {escenario[0]}s caben en una redonda?"

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["2", "4", "8", "16"]

explicacion: |
  Una redonda equivale a 4 negras y a 2 blancas.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["figuras_musicales", "corchea"]

enunciado: "¿Es verdadero que una corchea dura la mitad que una negra?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. En la subdivisión binaria estándar, la corchea es la mitad de la negra.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["figuras_musicales", "orden"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración:"

opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]
respuesta_orden: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar

explicacion: |
  La jerarquía de duración es: Redonda (4) > Blanca (2) > Negra (1) > Corchea (0.5).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["figuras_musicales", "calculo"]

enunciado: "Si tenemos una blanca y una negra, nos falta una ___ para completar un compás de 4/4."

respuestas_validas:
  - "negra"
respuesta: "negra"
tipo: completar

explicacion: |
  Una blanca (2) + una negra (1) = 3 tiempos. Para llegar a 4, falta una negra (1).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_pulso"
  nivel: "basico"
  tags: ["musica", "teoria_musical"]

respuesta: "ritmo"
tipo: mc
opciones_explicitas: ["pulso", "ritmo", "acento", "tempo"]

enunciado: "Mientras que el pulso es la unidad de medida constante que sentimos al aplaudir de forma regular, el ___ es la combinación de duraciones de los sonidos que crea una estructura variada."

explicacion: |
  El pulso es la pulsación constante (como el latido del corazón), mientras que el ritmo es la sucesión de duraciones (largas y cortas) que se asientan sobre ese pulso.
```

```
metadata:
  materia: "arte"
  tema: "figuras_musicales"
  nivel: "basico"
  tags: ["figuras_musicales", "duracion"]

respuesta: verdadero
tipo: vf
enunciado: "Si comparamos la duración de una negra con la de una corchea, ¿es cierto que la negra dura el doble de tiempo que una corchea?"

explicacion: |
  En la música estándar, una negra equivale a dos corcheas. Por lo tanto, la relación es de 2 a 1.
```

```
metadata:
  materia: "arte"
  tema: "figuras_musicales"
  nivel: "basico"
  tags: ["figuras_musicales", "redonda"]

respuesta: "4"
tipo: completar
respuestas_validas:
  - "4"

enunciado: "En un compás de 4/4, si una blanca tiene un valor de 2 pulsos (negras), una redonda tendrá un valor de ___ pulsos."

pasos:
  - "Identificar el valor de la blanca en pulsos."
  - "Multiplicar el valor de la blanca por 2 para obtener el valor de la redonda."

explicacion: |
  La redonda es la figura más larga; equivale a dos blancas o cuatro negras.
```

```
metadata:
  materia: "arte"
  tema: "figuras_musicales"
  nivel: "basico"
  tags: ["ordenar", "figuras_musicales"]

respuesta_orden: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración (de la más larga a la más corta):"

explicacion: |
  La jerarquía de duración es: Redonda (4) > Blanca (2) > Negra (1) > Corchea (0.5).
```

```
metadata:
  materia: "arte"
  tema: "compas_musical"
  nivel: "intermedio"
  tags: ["compas", "pulsos"]

variables:
  compas_idx: uno_de([0, 1, 2])
  tipo_compas: ["3/4", "4/4", "2/4"][compas_idx]
  total_pulsos: [3, 4, 2][compas_idx]

respuesta: total_pulsos
tipo: completar
tolerancia_abs: 0

enunciado: "Si estamos en un compás de {tipo_compas}, ¿cuántos pulsos (negras) contiene cada compás?"

explicacion: |
  El número superior del compás indica cuántos pulsos (en la figura de la base, normalmente la negra) caben en cada unidad de compás.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["pulso", "figuras_musicales"]

variables:
  datos: [["negra", "1"], ["blanca", "2"], ["redonda", "4"], ["corchea", "0.5"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Un baterista marca el pulso de una canción. Si la figura musical que está tocando es una {datos[idx][0]}, ¿cuántos pulsos (negras) dura dicha figura?"

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0.5", "1", "2", "4"]

explicacion: |
  En la música, la duración de las figuras es relativa: la negra equivale a 1 pulso, la blanca a 2 y la redonda a 4. La corchea es la mitad de una negra (0.5).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["compas", "conteo"]

variables:
  idx: uno_de([0, 1])
  datos: [["4/4", "4"], ["3/4", "3"]]

enunciado: "Estamos en un compás de {datos[idx][0]}. ¿Cuántos pulsos (negras) caben en cada compás?"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  El número superior del compás indica cuántos pulsos de la unidad de medida (generalmente la negra) caben en cada compás.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["comparacion", "figuras"]

variables:
  datos: [["blanca", "negra", "verdadero"], ["corchea", "blanca", "falso"]]
  idx: uno_de([0, 1])

enunciado: "Si comparamos la duración de una {datos[idx][0]} con una {datos[idx][1]}, ¿es la primera figura más larga que la segunda?"

respuestas_validas:
  - datos[idx][2]
respuesta: datos[idx][2]
tipo: completar
explicacion: |
  La blanca dura 2 pulsos y la negra 1 (Verdadero). La corchea dura 0.5 y la blanca 2 (Falso).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["orden", "figuras"]

variables:
  orden_correcta: ["corchea", "negra", "blanca", "redonda"]

enunciado: "Ordena las siguientes figuras musicales de la más corta a la más larga:"

opciones_explicitas: ["corchea", "negra", "blanca", "redonda"]
respuesta_orden: ["corchea", "negra", "blanca", "redonda"]
tipo: ordenar

explicacion: |
  La duración aumenta así: Corchea (1/2 negra) < Negra (1) < Blanca (2) < Redonda (4).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["calculo", "compas"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["blanca", "2"], ["negra", "4"], ["corchea", "8"]]

enunciado: "En un compás de 4/4, ¿cuántas {datos[idx][0]} caben exactamente para completar el compás?"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  En un compás de 4/4 hay 4 pulsos. Si la figura es blanca (2 pulsos), caben 2. Si es negra (1 pulso), caben 4. Si es corchea (0.5), caben 8.
```

## Sección: narrativa-audiovisual/plano (24 preguntas)

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué es un plano, en narrativa audiovisual?"
tipo: mc
opciones_explicitas:
  - "La porción continua de imagen filmada entre un corte de edición y el siguiente"
  - "El guion completo de una película"
  - "El lugar físico donde se filma una escena"
respuesta: "La porción continua de imagen filmada entre un corte de edición y el siguiente"

explicacion: |
  Es la unidad básica con la que se construye cualquier escena.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un plano general (PG)?"
tipo: mc
opciones_explicitas:
  - "El escenario completo, con el sujeto pequeño dentro del espacio"
  - "Sólo la cara del sujeto"
  - "Un objeto muy específico, sin el sujeto"
respuesta: "El escenario completo, con el sujeto pequeño dentro del espacio"

explicacion: |
  Es el plano más abierto: ubica al espectador en el lugar de la
  escena.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un plano entero?"
tipo: mc
opciones_explicitas:
  - "Al sujeto de cuerpo completo, de la cabeza a los pies"
  - "Sólo el rostro del sujeto"
  - "El escenario, sin ningún sujeto visible"
respuesta: "Al sujeto de cuerpo completo, de la cabeza a los pies"

explicacion: |
  Muestra todo el cuerpo, pero ya centrado en el sujeto, no tanto en el
  escenario.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano", "vocabulario"]

enunciado: "¿A qué altura corta al sujeto el plano americano, y de dónde viene su nombre?"
tipo: mc
opciones_explicitas:
  - "A la altura del muslo; el nombre viene del western clásico, que así dejaba ver el arma en el cinturón"
  - "A la altura de la cabeza; el nombre viene del cine independiente estadounidense"
  - "A la altura del tobillo; el nombre no tiene relación con el cine"
respuesta: "A la altura del muslo; el nombre viene del western clásico, que así dejaba ver el arma en el cinturón"

explicacion: |
  Es un ejemplo de cómo la historia del cine dejó nombres específicos
  para ciertos encuadres.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿A qué altura corta al sujeto el plano medio?"
tipo: mc
opciones_explicitas:
  - "A la altura de la cintura"
  - "A la altura de la rodilla"
  - "Justo en el cuello"
respuesta: "A la altura de la cintura"

explicacion: |
  Es uno de los planos más usados en diálogos.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un primer plano?"
tipo: mc
opciones_explicitas:
  - "La cara del sujeto, con foco en la expresión"
  - "El escenario completo"
  - "El cuerpo entero del sujeto"
respuesta: "La cara del sujeto, con foco en la expresión"

explicacion: |
  Es de los planos más cerrados, usado para mostrar emoción.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un primerísimo primer plano?"
tipo: mc
opciones_explicitas:
  - "Un detalle muy cercano de la cara, como los ojos o la boca"
  - "Todo el cuerpo del sujeto, sin recortar nada"
  - "Un objeto sin relación con el sujeto"
respuesta: "Un detalle muy cercano de la cara, como los ojos o la boca"

explicacion: |
  Es el plano más cerrado de la escala, usado para máxima intimidad o
  tensión emocional.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un plano detalle?"
tipo: mc
opciones_explicitas:
  - "Un objeto o una parte muy específica, sin necesariamente mostrar al sujeto completo"
  - "El escenario completo desde muy lejos"
  - "Sólo se usa para mostrar paisajes"
respuesta: "Un objeto o una parte muy específica, sin necesariamente mostrar al sujeto completo"

explicacion: |
  Por ejemplo, una mano, un reloj o un arma.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Los planos abiertos (general, entero) dan contexto: ubican al espectador en dónde y en qué situación transcurre la escena."

explicacion: |
  Es su función narrativa principal.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Los planos cerrados (primer plano, primerísimo primer plano) suelen usarse para transmitir la emoción o intimidad del personaje."

explicacion: |
  Al acercarse al rostro, la expresión se vuelve el foco central.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano", "vocabulario"]

enunciado: "¿Cuál es la función narrativa típica de un plano general al abrir una escena?"
tipo: mc
opciones_explicitas:
  - "Ubicar al espectador: mostrar dónde pasa la acción antes de acercarse a los personajes"
  - "Mostrar la reacción emocional de un personaje"
  - "Ocultar información sobre el lugar de la escena"
respuesta: "Ubicar al espectador: mostrar dónde pasa la acción antes de acercarse a los personajes"

explicacion: |
  Por eso muchas escenas arrancan con un plano general.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano", "vocabulario"]

enunciado: "¿Cuál es la función narrativa típica de un primer plano en un momento clave de la trama?"
tipo: mc
opciones_explicitas:
  - "Mostrar con claridad la expresión y la emoción del personaje en ese momento"
  - "Mostrar el escenario completo donde transcurre la escena"
  - "Distraer al espectador del personaje principal"
respuesta: "Mostrar con claridad la expresión y la emoción del personaje en ese momento"

explicacion: |
  Es el plano cerrado por excelencia para momentos emocionalmente
  intensos.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "avanzado"
  tags: ["plano", "ordenar"]

enunciado: "Ordená estos planos de MÁS abierto a MÁS cerrado."
tipo: ordenar
opciones_explicitas:
  - "Plano medio"
  - "Primer plano"
  - "Plano general"
  - "Plano entero"
respuesta_orden: ["Plano general", "Plano entero", "Plano medio", "Primer plano"]
explicacion: |
  Son cuatro paradas de la escala completa (que además incluye, entre
  medio, el plano americano, y como cierre más cerrado el primerísimo
  primer plano y el plano detalle).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "avanzado"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué es un plano secuencia?"
tipo: mc
opciones_explicitas:
  - "Un plano único, sin ningún corte de edición, que se extiende durante una escena entera o más"
  - "Una secuencia de varios planos muy cortos, editados rápido"
  - "El primer plano que se filma de una película, en orden cronológico"
respuesta: "Un plano único, sin ningún corte de edición, que se extiende durante una escena entera o más"

explicacion: |
  Exige una coreografía muy precisa de cámara y actores, porque no hay
  forma de "arreglar" un error con edición después.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Un plano secuencia, por definición, no tiene ningún corte de edición en su interior."

explicacion: |
  Si tuviera un corte, dejaría de ser un solo plano.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Filmar un plano no es sólo encender la cámara: ya implica decisiones de composición, como equilibrio y regla de tercios."

explicacion: |
  Por eso este módulo depende de `../../principios-de-diseno/`.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "El plano medio es de los más usados en escenas de diálogo, porque muestra expresión facial y algo de lenguaje corporal a la vez."

explicacion: |
  Es un punto intermedio entre mostrar demasiado contexto y perder el
  lenguaje corporal.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿A qué altura del cuerpo corta el plano medio?"
tipo: mc
opciones_explicitas:
  - "A la altura de la cintura"
  - "A la altura del tobillo"
  - "Justo debajo de los ojos"
respuesta: "A la altura de la cintura"

explicacion: |
  Es distinto del plano americano (a la altura del muslo).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿A qué altura del cuerpo corta el plano americano?"
tipo: mc
opciones_explicitas:
  - "A la altura del muslo"
  - "A la altura del pecho"
  - "A la altura de los pies"
respuesta: "A la altura del muslo"

explicacion: |
  Distinto del plano medio (a la altura de la cintura).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Un plano detalle puede mostrar sólo un objeto (como un reloj o un arma), sin necesidad de que el sujeto completo esté en cuadro."

explicacion: |
  Es el plano más específico de todos, enfocado en un elemento puntual.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "avanzado"
  tags: ["plano", "vocabulario"]

enunciado: "¿Cómo se relaciona un plano con el montaje (edición)?"
tipo: mc
opciones_explicitas:
  - "Un plano es la unidad que queda delimitada entre dos cortes de edición sucesivos"
  - "El montaje ocurre antes de filmar cualquier plano"
  - "No tienen ninguna relación entre sí"
respuesta: "Un plano es la unidad que queda delimitada entre dos cortes de edición sucesivos"

explicacion: |
  Es la conexión directa con `../montaje/`, el módulo siguiente.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: falso
tipo: vf

enunciado: "Elegir el tamaño de un plano (general, medio, primer plano...) es una elección estética completamente al azar, sin relación con lo que se quiere narrar."

explicacion: |
  Al contrario: cada tamaño cumple una función narrativa distinta
  (contexto vs. emoción).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Una escena bien filmada suele alternar entre planos abiertos y cerrados, según lo que necesite contar en cada momento."

explicacion: |
  Por ejemplo: plano general para ubicar, después primeros planos para
  la emoción del diálogo.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve elegir bien el tamaño de un plano al filmar una escena?"
tipo: mc
opciones_explicitas:
  - "Es la primera decisión narrativa: define cuánto contexto o cuánta emoción se muestra en ese momento de la historia"
  - "Sólo afecta el tiempo que tarda en filmarse la escena"
  - "No tiene ningún efecto real sobre cómo se percibe la escena"
respuesta: "Es la primera decisión narrativa: define cuánto contexto o cuánta emoción se muestra en ese momento de la historia"

explicacion: |
  Antes de pensar en el encuadre concreto o en el montaje, hay que
  decidir qué tan cerca o lejos va a estar la cámara.
```

## Sección: danza-ritmo-tiempo-expresion-corporal (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["ritmo", "definicion"]

tipo: mc
opciones_explicitas: ["La repetición de movimientos en el tiempo", "La velocidad constante de un bailarín", "La expresión de sentimientos mediante gestos", "El uso de música para acompañar un baile"]

respuesta: "La repetición de movimientos en el tiempo"

enunciado: "En el contexto de la danza, el ritmo se define fundamentalmente como:"

explicacion: |
  El ritmo es la organización de los movimientos en el tiempo, creando patrones de acentos y pausas que estructuran la danza.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["tiempo", "duracion"]

tipo: vf

enunciado: "¿El tiempo en la danza se refiere exclusivamente a la duración de una pieza musical?"

respuesta: falso

explicacion: |
  Falso. El tiempo en la danza involucra la duración, el tempo, el ritmo y la relación del cuerpo con la temporalidad de la acción.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["expresion_corporal", "lenguaje"]

tipo: completar
respuestas_validas:
  - "gesto"

enunciado: "La expresión corporal utiliza el ________ como unidad mínima de comunicación para transmitir significados."

respuesta: "gesto"

explicacion: |
  El gesto es la unidad básica de la expresión corporal que permite comunicar estados de ánimo o ideas sin necesidad de palabras.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["secuencia", "orden"]

tipo: ordenar
opciones_explicitas: ["Inspiración", "Movimiento", "Expresión", "Postura"]

respuesta_orden: ["Inspiración", "Movimiento", "Postura", "Expresión"]

enunciado: "Ordene los elementos según la progresión lógica de una acción corporal expresiva, desde la preparación hasta el resultado final:"

explicacion: |
  La danza comienza con la preparación (inspiración), sigue con la ejecución (movimiento), la estabilización (postura) y culmina en la intención comunicativa (expresión).
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["ritmo", "pulso"]

tipo: completar
respuestas_validas:
  - "pulso"

enunciado: "Si el ________ es la unidad básica y constante de la música, el ritmo es la organización de acentos sobre esa base."

respuesta: "pulso"

explicacion: |
  El pulso es la unidad de medida constante, mientras que el ritmo es la combinación de duraciones que crea un patrón sobre ese pulso.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["ritmo", "tempo", "pulso"]

variables:
  bpm: 120

respuesta: 0.5
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una pieza musical tiene un tempo de {bpm} pulsos por minuto (BPM), ¿cuántos segundos transcurren entre cada pulso?"

pasos:
  - "Convertir BPM a pulsos por segundo: 120 / 60 = 2 pulsos por segundo."
  - "Calcular el tiempo de un pulso (periodo): 1 / 2 = 0.5 segundos."

explicacion: |
  El tempo indica la velocidad de los pulsos. Para hallar el tiempo en segundos de un solo pulso, dividimos 60 segundos por la cantidad de pulsos por minuto. 60 / 120 = 0.5 segundos.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "intermedio"
  tags: ["compas", "ritmo"]

variables:
  idx: uno_de([0, 1])
  escenario: [[4, "cuaternario"], [3, "ternario"]]

respuesta: "cuaternario"
tipo: mc
opciones_explicitas: ["cuaternario", "ternario", "binario"]

enunciado: "Un bailarín ejecuta una secuencia rítmica basada en un compás de {escenario[idx][1]}. ¿Cuál es la estructura métrica predominante?"

explicacion: |
  El compás determina la organización de los pulsos. Un compás de 4/4 es cuaternario, mientras que uno de 3/4 es ternario.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "intermedio"
  tags: ["ritmo", "compas"]

variables:
  compases: 8
  bpm: 60

respuesta: "32"
tipo: completar
respuestas_validas:
  - "32"

enunciado: "Si una coreografía dura exactamente {compases} compases de 4/4 y el tempo es de {bpm} BPM, ¿cuántos pulsos totales ha ejecutado el bailarín?"

pasos:
  - "Cada compás de 4/4 tiene 4 pulsos."
  - "Multiplicar el número de compases por los pulsos por compás: 8 * 4 = 32."

explicacion: |
  En un compás de 4/4, cada unidad de tiempo (pulso) se repite 4 veces. Por lo tanto, 8 compases * 4 pulsos/compás = 32 pulsos.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "avanzado"
  tags: ["subdivision", "ritmo"]

variables:
  tempo: 100

respuesta: verdadero
tipo: vf

enunciado: "Si el tempo es de {tempo} BPM, una subdivisión de corcheas (dos notas por pulso) implica que el bailarín realiza 200 movimientos por minuto."

explicacion: |
  Verdadero. Si hay 100 pulsos por minuto y cada pulso se divide en 2 corcheas, el total de movimientos es 100 * 2 = 200.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["expresion", "lenguaje"]

respuesta_orden: ["Respiración", "Gesto", "Movimiento", "Danza"]
tipo: ordenar
opciones_explicitas: ["Respiración", "Gesto", "Movimiento", "Danza"]

enunciado: "Ordene los elementos desde la unidad mínima de expresión corporal hasta la unidad artística completa:"

explicacion: |
  La danza comienza con la respiración, que desencadena el gesto, el cual se expande en el movimiento corporal, conformando finalmente la danza como lenguaje artístico.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["ritmo", "pulso", "conceptos_basicos"]

respuesta: falso
tipo: vf

enunciado: "En la danza, el ritmo y el pulso son conceptos idénticos que se mueven siempre de la misma manera en el tiempo."

explicacion: |
  Falso. El pulso es la unidad básica de tiempo (el latido constante), mientras que el ritmo es la organización de acentos y silencios sobre ese pulso. El ritmo puede ser complejo y cambiar, mientras que el pulso suele ser la referencia constante.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["expresion_corporal", "lenguaje_artistico"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un bailarín que solo mueve los brazos sin mirar al público", "una expresión mecánica"], ["Un bailarín que utiliza todo su cuerpo para transmitir una emoción", "una comunicación efectiva"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["una comunicación efectiva", "una expresión mecánica", "un error de coordinación", "una falta de técnica"]

enunciado: "Si un bailarín realiza el siguiente movimiento: {escenarios[escenario_idx][0]}, esto se considera ___."

explicacion: |
  La expresión corporal requiere la integración de todo el cuerpo y la intención comunicativa para ser considerada un lenguaje artístico completo.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["secuencia", "percepcion", "ritmo"]

opciones_explicitas: ["Escuchar el sonido", "Sentir el pulso", "Ejecutar el movimiento rítmico"]
respuesta_orden: ["Escuchar el sonido", "Sentir el pulso", "Ejecutar el movimiento rítmico"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que sigue un bailarín para interpretar una pieza musical de forma rítmica:"

explicacion: |
  Primero se debe percibir el estímulo sonoro, luego internalizar la pulsación (pulso) para luego poder traducir eso en movimiento coordinado.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "avanzado"
  tags: ["tiempo_musical", "acento", "ritmo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["El acento cae en el tiempo débil", "un ritmo irregular"], ["El acento cae en el tiempo fuerte", "un ritmo regular"]]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas:
  - casos[caso_idx][1]

enunciado: "Si en una danza {casos[caso_idx][0]}, estamos ante ___."

explicacion: |
  La regularidad rítmica depende de la consistencia de los acentos en los tiempos fuertes. Si el acento se desplaza, la percepción del tiempo cambia.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["expresion_corporal", "lenguaje"]

respuesta: "lenguaje"
tipo: completar
respuestas_validas:
  - "lenguaje"
  - "ruido"
  - "movimiento"
  - "instinto"

enunciado: "Cuando la danza utiliza el cuerpo para transmitir ideas, emociones o conceptos sin necesidad de palabras, el cuerpo actúa como un ___ artístico."

explicacion: |
  La expresión corporal es la capacidad del cuerpo para funcionar como un sistema de comunicación no verbal, transformando el movimiento en lenguaje.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["ritmo", "danza", "musica"]

tipo: abierta
enunciado: "En la danza, ¿cuál es la diferencia fundamental entre el ritmo y la melodía?"

explicacion: |
  El ritmo se refiere a la duración y acentuación de los sonidos en el tiempo, mientras que la melodía es la sucesión de notas con diferentes alturas que forman una frase musical.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["tiempo", "ritmo"]

tipo: vf
respuesta: verdadero

enunciado: "Si un bailarín mantiene un movimiento con una duración de pulsos idéntica y regular, ¿se dice que está siguiendo un ritmo constante?"

explicacion: |
  Un ritmo constante implica una regularidad en la subdivisión del tiempo, permitiendo una estructura predecible para el movimiento.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "avanzado"
  tags: ["expresion_corporal", "mimo"]

tipo: completar
respuestas_validas:
  - "gestualidad"
  - "mimo"

enunciado: "Mientras que el ___ se basa principalmente en la pantomima y la ausencia de palabras para narrar, la expresión corporal en la danza utiliza el movimiento total del cuerpo para comunicar estados emocionales."

explicacion: |
  El mimo es una disciplina técnica de gestualidad específica, mientras que la expresión corporal es un lenguaje más amplio que integra la intención emocional con el movimiento.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["ritmo", "estructura"]

opciones_explicitas: ["Pulso", "Acento", "Ritmo"]

tipo: ordenar
respuesta_orden: ["Pulso", "Acento", "Ritmo"]

enunciado: "Ordene los elementos de la estructura rítmica desde la unidad más básica y constante hasta la organización compleja que genera el movimiento:"

explicacion: |
  El pulso es la unidad básica, el acento es el énfasis en ciertos pulsos y el ritmo es la combinación de duraciones y acentos.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["espacio", "movimiento"]

tipo: abierta
enunciado: "¿Cuál es la distinción principal entre movimiento y espacio en la danza?"

explicacion: |
  El movimiento es la acción dinámica del cuerpo, mientras que el espacio es el entorno (kinesférico o escénico) que el bailarín ocupa y recorre.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["ritmo", "compas", "tiempo"]

variables:
  datos: [["un vals en 3/4", "3/4"], ["un tango en 4/4", "4/4"], ["un reggaetón en 4/4", "4/4"]]
  idx: uno_de([0, 1, 2])

enunciado: "Un coreógrafo está preparando una pieza basada en {datos[idx][0]}. Para que el movimiento sea armónico, el bailarín debe seguir la métrica de {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  El ritmo en la danza está determinado por la métrica musical. El vals se caracteriza por un compás ternario (3/4), mientras que el tango y el reggaetón usan compases binarios/cuaternarios (4/4).
```

```
metadata:
  materia: "arte"
  tema: "danza_expresion_corporal"
  nivel: "intermedio"
  tags: ["expresion", "lenguaje", "cuerpo"]

variables:
  datos: [["un movimiento fluido y continuo", "fluidez"], ["un movimiento cortado y seco", "staccato"]]
  idx: uno_de([0, 1])

enunciado: "Si un bailarín de danza contemporánea utiliza {datos[idx][0]}, está trabajando la calidad de movimiento tipo {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["fluidez", "staccato"]

explicacion: |
  La expresión corporal utiliza la calidad del movimiento (fluidez vs. staccato) para comunicar emociones y estados de ánimo sin necesidad de palabras.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "intermedio"
  tags: ["secuencia", "orden", "tiempo"]

enunciado: "Para realizar una secuencia coreográfica de improvisación guiada, el bailarín debe seguir un orden lógico de desarrollo temporal para mantener la coherencia narrativa:"

pasos:
  - "Exploración del espacio y el ritmo base"
  - "Desarrollo de frases de movimiento"
  - "Clímax de la expresión corporal"
  - "Resolución o cierre de la secuencia"

respuesta_orden: ["Exploración del espacio y el ritmo base", "Desarrollo de frases de movimiento", "Clímax de la expresión corporal", "Resolución o cierre de la secuencia"]
tipo: ordenar
opciones_explicitas: ["Exploración del espacio y el ritmo base", "Desarrollo de frases de movimiento", "Clímax de la expresión corporal", "Resolución o cierre de la secuencia"]

explicacion: |
  Una estructura coreográfica requiere una progresión temporal: desde la preparación (exploración), pasando por el desarrollo, el punto de mayor intensidad (clímax) y el cierre.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["tempo", "velocidad", "percepcion"]

variables:
  datos: [["un adagio lento", "lento"], ["un allegro rápido", "rápido"]]
  idx: uno_de([0, 1])

enunciado: "Si la música de la pieza es {datos[idx][0]}, el tempo de la danza será percibido como {datos[idx][1]}."

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
explicacion: |
  El tempo es la velocidad del pulso musical. Un 'adagio' es una indicación de tempo lento, mientras que un 'allegro' indica un tempo rápido.
```

```
metadata:
  materia: "arte"
  tema: "danza_expresion_corporal"
  nivel: "avanzado"
  tags: ["elementos", "espacio", "cuerpo"]

variables:
  datos: [["el uso de niveles (alto, medio, bajo)", "espacio"], ["la tensión muscular", "energía"], ["el ritmo del pulso", "tiempo"]]
  idx: uno_de([0, 1, 2])

enunciado: "En la danza, el concepto de {datos[idx][0]} se clasifica fundamentalmente como un elemento del ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  Los elementos de la danza incluyen el cuerpo, el espacio (niveles, direcciones), el tiempo (ritmo, duración) y la energía (tensión, peso).
```

## Sección: lenguaje-musical-pentagrama-escalas-intervalos (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["pentagrama", "lineas", "espacios"]

respuesta: 5
tipo: completar
tolerancia_abs: 0

enunciado: "El pentagrama está compuesto por ___ líneas horizontales (y 4 espacios entre ellas)."

explicacion: |
  El pentagrama es el conjunto de 5 líneas y 4 espacios donde se escribe la música.
```

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["notas", "orden"]

opciones_explicitas: ["Do, Re, Mi, Fa, Sol, La, Si", "Do, Mi, Sol, Si, Re", "Fa, Sol, La, Si, Do, Re, Mi"]
respuesta: "Do, Re, Mi, Fa, Sol, La, Si"
tipo: mc

enunciado: "¿Cuál es el orden ascendente natural de las notas musicales?"

explicacion: |
  El orden estándar de la escala diatónica es Do, Re, Mi, Fa, Sol, La, Si.
```

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["claves", "sol"]

respuesta: "Sol"
tipo: completar
respuestas_validas:
  - "Sol"

enunciado: "La clave que se utiliza para indicar que la nota situada en la segunda línea del pentagrama es la nota ___."

explicacion: |
  La clave de Sol se dibuja partiendo desde la segunda línea, asignándole ese nombre.
```

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["lineas_adicionales"]

respuesta: verdadero
tipo: vf

enunciado: "¿Se utilizan líneas adicionales para representar notas que están por encima o por debajo del pentagrama?"

explicacion: |
  Correcto. Cuando las notas se salen del rango de las 5 líneas, se usan líneas adicionales.
```

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["silencios"]

opciones_explicitas: ["Negra", "Corchea", "Fusa"]
respuesta: "Negra"
tipo: mc

enunciado: "En un pentagrama, el símbolo que representa un silencio de un tiempo (en compás de 4/4) es la ___."

explicacion: |
  El símbolo de la negra representa un tiempo de duración en la música occidental.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_mayor", "tonos", "semitonos"]

respuesta: "Semitono"
tipo: completar
respuestas_validas:
  - "Semitono"

enunciado: "La estructura de intervalos de una escala mayor sigue el patrón Tono, Tono, Semitono, Tono, Tono, Tono, ____. ¿Cuál es el último intervalo?"

explicacion: |
  La escala mayor sigue el patrón: T-T-S-T-T-T-S (donde T=Tono y S=Semitono).
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_mayor"]

respuesta: "Sol mayor"
tipo: mc
opciones_explicitas: ["Sol mayor", "Do mayor"]

enunciado: "Si una escala mayor tiene exactamente un sostenido, ubicado en su séptima nota (Fa#), esa escala es ___."

explicacion: |
  La escala de Sol mayor tiene un Fa# para cumplir el patrón de la escala mayor; Do mayor no tiene ningún sostenido.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_menor"]

opciones_explicitas: ["Menor", "Mayor", "Aumentada"]
respuesta: "Menor"
tipo: mc

enunciado: "Si comparamos una escala mayor con una escala que tiene la tercera nota disminuida (un semitono más abajo), estamos ante una escala ___."

explicacion: |
  La diferencia fundamental entre escala mayor y menor es la tercera nota.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["armadura", "sostenidos"]

opciones_explicitas: ["Fa, Do, Sol, Re, La, Mi, Si", "Si, Mi, La, Re, Sol, Do, Fa", "Do, Re, Mi, Fa, Sol, La, Si"]
respuesta: "Fa, Do, Sol, Re, La, Mi, Si"
tipo: mc

enunciado: "¿Cuál es el orden estándar de aparición de las alteraciones sostenidos en una armadura?"

explicacion: |
  El orden de los sostenidos es siempre Fa, Do, Sol, Re, La, Mi, Si.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["ciclo_quintas"]

respuesta: 1
tipo: completar
tolerancia_abs: 0

enunciado: "Si subimos una quinta justa desde Do, llegamos a Sol. Si subimos otra quinta desde Sol, ¿cuántos sostenidos tiene la nueva escala (Re mayor)?"

explicacion: |
  La escala de Re mayor tiene un sostenido (Fa#).
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["unisono"]

respuesta: "Igual"
tipo: completar
respuestas_validas:
  - "Igual"

enunciado: "Un intervalo de unísono ocurre cuando dos notas son ___."

explicacion: |
  El unísono es la distancia entre dos notas con la misma frecuencia.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["octava"]

opciones_explicitas: ["Do - Do", "Do - Re", "Do - Mi"]
respuesta: "Do - Do"
tipo: mc

enunciado: "¿Cuál de estos pares representa una octava?"

explicacion: |
  La octava es el intervalo entre dos notas con el mismo nombre pero diferente altura.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["semitonos", "segunda"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Una segunda mayor (por ejemplo de Do a Re) contiene ___ semitonos."

explicacion: |
  La segunda mayor está compuesta por dos semitonos.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["quinta_justa"]

respuesta: "5"
tipo: completar
tolerancia_abs: 0

enunciado: "Un intervalo de quinta justa abarca ___ grados de la escala."

explicacion: |
  Se cuenta la nota inicial como el primer grado (Do=1, Re=2, Mi=3, Fa=4, Sol=5).
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["tercera"]

opciones_explicitas: ["Mayor", "Menor"]
respuesta: "Mayor"
tipo: mc

enunciado: "Un intervalo de Do a Mi es una tercera ___, mientras que de Do a Mi bemol es una tercera menor."

explicacion: |
  La tercera mayor tiene 4 semitonos y la menor tiene 3.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["error_comun"]

respuesta: falso
tipo: vf
enunciado: "¿Es cierto que entre cualquier par de notas consecutivas en un piano siempre hay un semitono?"

explicacion: |
  Falso. Entre Mi y Fa, o entre Si y Do, hay un semitono, pero entre Do y Re hay un tono.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "avanzado"
  tags: ["tritono"]

opciones_explicitas: ["Aumentado", "Disminuido"]
respuesta: "Aumentado"
tipo: mc

enunciado: "Un intervalo de cuarta justa que se aumenta en un semitono se convierte en un tritono o cuarta ___."

explicacion: |
  El tritono es un intervalo inestable que puede ser cuarta aumentada o quinta disminuida.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["tono"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Un tono musical equivale a ___ semitonos."

explicacion: |
  La unidad básica de la escala cromática es el semitono; dos de ellos forman un tono.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["sexta"]

respuesta: 9
tipo: completar
tolerancia_abs: 0

enunciado: "Una sexta mayor contiene exactamente ___ semitonos."

explicacion: |
  La sexta mayor (ej. Do a La) tiene 9 semitonos.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["octava"]

opciones_explicitas: ["7", "8", "9"]
respuesta: "8"
tipo: mc

enunciado: "Si contamos los grados de una octava (incluyendo la nota inicial y la final), ¿cuántos grados hay?"

explicacion: |
  Aunque la distancia es de 7 tonos, el intervalo se llama octava porque abarca 8 notas de la escala.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["transposicion"]

variables:
  idx: uno_de([0, 1])
  datos: [["Do mayor", "Do"], ["Sol mayor", "Sol"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Do", "Sol"]

enunciado: "Si transponemos una escala de Do mayor una quinta justa hacia arriba, la nueva tónica será ___."

explicacion: |
  Una quinta justa desde Do es Sol.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["armadura"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Si una partitura tiene dos sostenidos en la armadura (Fa# y Do#), ¿en qué escala mayor nos encontramos?"

explicacion: |
  La escala de Re mayor tiene dos sostenidos: Fa# y Do#.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "avanzado"
  tags: ["progresion"]

opciones_explicitas: ["Tono", "Semitono"]
respuesta: "Tono"
tipo: mc

enunciado: "Si una nota sube un semitono y luego vuelve a subir otro semitono, ¿qué intervalo ha recorrido en total?"

explicacion: |
  Dos semitonos equivalen a un tono.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["escala_menor_armonica"]

respuesta: "La"
tipo: completar
respuestas_validas:
  - "La"

enunciado: "En la escala de Do mayor, la nota que está a una sexta mayor es ___."

explicacion: |
  Do(1), Re(2), Mi(3), Fa(4), Sol(5), La(6).
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_mayor"]

respuesta: falso
tipo: vf
enunciado: "En una escala mayor, el intervalo entre el IV y el V grado es siempre un semitono."

explicacion: |
  Falso, el intervalo entre el IV y el V grado es un tono.
```

## Sección: narrativa-audiovisual/encuadre (24 preguntas)

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "basico"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es el encuadre, a diferencia del plano?"
tipo: mc
opciones_explicitas:
  - "Cómo se organiza lo que entra dentro de los límites del plano ya elegido"
  - "Qué tan cerca o lejos está la cámara del sujeto"
  - "El guion técnico completo de la escena"
respuesta: "Cómo se organiza lo que entra dentro de los límites del plano ya elegido"

explicacion: |
  El plano (ver `../plano/`) define la distancia; el encuadre define la
  organización dentro de esa distancia.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "basico"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es el ángulo de cámara 'a nivel' o 'normal'?"
tipo: mc
opciones_explicitas:
  - "La cámara a la altura de los ojos del sujeto"
  - "La cámara mirando desde muy arriba"
  - "La cámara inclinada, con el horizonte torcido"
respuesta: "La cámara a la altura de los ojos del sujeto"

explicacion: |
  Es el punto de vista más neutral, el que menos condiciona la lectura
  emocional.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es un ángulo picado?"
tipo: mc
opciones_explicitas:
  - "La cámara mira hacia abajo, desde arriba del sujeto"
  - "La cámara mira hacia arriba, desde abajo del sujeto"
  - "La cámara está inclinada de costado"
respuesta: "La cámara mira hacia abajo, desde arriba del sujeto"

explicacion: |
  Suele hacer que el sujeto se vea más pequeño o vulnerable.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué efecto suele transmitir un ángulo picado sobre el sujeto?"
tipo: mc
opciones_explicitas:
  - "Que se vea más pequeño, débil o vulnerable"
  - "Que se vea más grande y poderoso"
  - "No tiene ningún efecto sobre cómo se percibe el sujeto"
respuesta: "Que se vea más pequeño, débil o vulnerable"

explicacion: |
  Es el efecto opuesto al contrapicado.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es un ángulo contrapicado?"
tipo: mc
opciones_explicitas:
  - "La cámara mira hacia arriba, desde abajo del sujeto"
  - "La cámara mira hacia abajo, desde arriba del sujeto"
  - "La cámara filma en cámara lenta"
respuesta: "La cámara mira hacia arriba, desde abajo del sujeto"

explicacion: |
  Suele hacer que el sujeto se vea más grande, poderoso o imponente.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué efecto suele transmitir un ángulo contrapicado sobre el sujeto?"
tipo: mc
opciones_explicitas:
  - "Que se vea más grande, poderoso o imponente"
  - "Que se vea más pequeño y vulnerable"
  - "No cambia en nada la percepción del sujeto"
respuesta: "Que se vea más grande, poderoso o imponente"

explicacion: |
  Es un recurso típico para presentar a un personaje dominante o
  amenazante.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es un ángulo aberrante (u 'holandés')?"
tipo: mc
opciones_explicitas:
  - "La cámara está inclinada, con el horizonte torcido"
  - "La cámara filmando desde un dron"
  - "La cámara a la altura exacta de los ojos"
respuesta: "La cámara está inclinada, con el horizonte torcido"

explicacion: |
  Genera una sensación de inestabilidad, desorientación o tensión.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "El ángulo aberrante (con el horizonte torcido) suele usarse para generar una sensación de inestabilidad o desorientación."

explicacion: |
  Rompe la referencia horizontal "normal" que el ojo espera ver.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es el 'espacio de mirada' (look room) en un encuadre?"
tipo: mc
opciones_explicitas:
  - "El espacio extra que se deja del lado hacia donde mira o se mueve el sujeto"
  - "El tiempo que dura un plano en pantalla"
  - "La distancia entre la cámara y el micrófono"
respuesta: "El espacio extra que se deja del lado hacia donde mira o se mueve el sujeto"

explicacion: |
  Sin ese espacio, la composición se siente apretada o incómoda.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "Si un sujeto mira hacia un lado y no se le deja espacio de ese lado en el cuadro, la composición suele sentirse apretada o incómoda."

explicacion: |
  Es como si el sujeto estuviera "chocando" contra el borde del
  encuadre.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es el headroom, en un encuadre?"
tipo: mc
opciones_explicitas:
  - "El espacio entre la parte superior de la cabeza del sujeto y el borde superior del cuadro"
  - "La altura total del sujeto en la escena"
  - "El espacio entre dos sujetos distintos en el mismo plano"
respuesta: "El espacio entre la parte superior de la cabeza del sujeto y el borde superior del cuadro"

explicacion: |
  Ni mucho (se ve "flotando" abajo) ni poco (se ve apretado o cortado).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "Demasiado espacio entre la cabeza del sujeto y el borde superior del cuadro (headroom excesivo) hace que el sujeto se vea como flotando en la parte baja del encuadre."

explicacion: |
  Es uno de los dos extremos a evitar; el otro es muy poco headroom, que
  corta o aprieta la cabeza.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de tercios, ya vista en composición, también se aplica al encuadre cinematográfico: por ejemplo, ubicando los ojos del sujeto sobre una línea de tercios en vez de en el centro exacto."

explicacion: |
  Es la misma herramienta de `../../composicion-y-proporcion/`, aplicada
  a un fotograma en movimiento.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es un encuadre cerrado?"
tipo: mc
opciones_explicitas:
  - "Aquel que contiene dentro del cuadro todo lo que el espectador necesita para entender la escena"
  - "Aquel filmado con la cámara muy cerca del sujeto"
  - "Aquel que sólo se usa en primeros planos"
respuesta: "Aquel que contiene dentro del cuadro todo lo que el espectador necesita para entender la escena"

explicacion: |
  No deja nada relevante fuera de cuadro.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es un encuadre abierto?"
tipo: mc
opciones_explicitas:
  - "Aquel que deja intuir que hay más espacio o acción fuera de cuadro (fuera de campo)"
  - "Aquel filmado siempre en plano general"
  - "Aquel sin ningún tipo de composición planificada"
respuesta: "Aquel que deja intuir que hay más espacio o acción fuera de cuadro (fuera de campo)"

explicacion: |
  Genera expectativa, o hace que el espectador complete mentalmente lo
  que no se ve.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "Sugerir que hay algo fuera de cuadro (fuera de campo), sin mostrarlo, es un recurso que puede generar expectativa en el espectador."

explicacion: |
  El espectador completa mentalmente lo que no se ve directamente.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre", "ordenar"]

enunciado: "Ordená estas decisiones típicas al encuadrar un plano ya elegido (el tamaño de plano ya está decidido de antemano)."
tipo: ordenar
opciones_explicitas:
  - "Ubicar el punto de interés sobre una línea de la regla de tercios"
  - "Elegir el ángulo de cámara (a nivel, picado, contrapicado)"
  - "Dejar el espacio de mirada y el headroom adecuados"
respuesta_orden: ["Elegir el ángulo de cámara (a nivel, picado, contrapicado)", "Dejar el espacio de mirada y el headroom adecuados", "Ubicar el punto de interés sobre una línea de la regla de tercios"]
explicacion: |
  El ángulo es una decisión estructural; el espacio de mirada, el
  headroom y la regla de tercios son ajustes finos de esa composición.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "El ángulo de cámara 'a nivel' es el que menos condiciona la lectura emocional de una escena, en comparación con el picado o el contrapicado."

explicacion: |
  Por eso se usa como punto de vista "neutral" por defecto.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué ángulo de cámara conviene usar para mostrar a un personaje como especialmente poderoso o amenazante?"
tipo: mc
opciones_explicitas:
  - "Contrapicado"
  - "Picado"
  - "A nivel"
respuesta: "Contrapicado"

explicacion: |
  Mirar hacia arriba, desde abajo del personaje, lo hace ver más grande
  e imponente.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué ángulo de cámara conviene usar para mostrar a un personaje como especialmente pequeño o vulnerable?"
tipo: mc
opciones_explicitas:
  - "Picado"
  - "Contrapicado"
  - "Aberrante"
respuesta: "Picado"

explicacion: |
  Mirar hacia abajo, desde arriba del personaje, lo empequeñece.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "basico"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "El encuadre es lo que convierte una simple elección de distancia (el plano) en una composición con intención narrativa."

explicacion: |
  El ángulo, el espacio de mirada y el headroom no son detalles
  técnicos menores: cambian cómo se interpreta la escena.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "El headroom 'correcto' no es un número fijo: depende del tamaño de plano que se esté usando (un primer plano y un plano entero no necesitan el mismo headroom)."

explicacion: |
  No es una regla matemática rígida, sino un balance visual a ojo.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre"]

respuesta: falso
tipo: vf

enunciado: "Un ángulo aberrante (u 'holandés') mantiene el horizonte perfectamente recto, sin ninguna inclinación."

explicacion: |
  Al contrario: la característica que define al ángulo aberrante es
  justamente la inclinación de la cámara, que tuerce el horizonte.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve dominar las herramientas de encuadre (ángulo, espacio de mirada, headroom, regla de tercios)?"
tipo: mc
opciones_explicitas:
  - "Para tomar decisiones deliberadas sobre cómo el espectador va a interpretar cada escena, no dejarlo al azar"
  - "Sólo sirve para que la imagen se vea más prolija técnicamente"
  - "Sólo aplica en cine, nunca en fotografía o video"
respuesta: "Para tomar decisiones deliberadas sobre cómo el espectador va a interpretar cada escena, no dejarlo al azar"

explicacion: |
  El encuadre es lenguaje visual: comunica algo, aunque no haya
  diálogo.
```

