# Examen jefe — Diseñador de Experiencias Digitales

> Logro #970. Completaste el parcial dominando el análisis de datos de uso y métricas UX, la arquitectura de información y la navegación, el color en interfaces, el diseño para voz y conversación y el diseño responsive y mobile-first. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **111 preguntas totales** en 5/5 secciones.

---

## Sección: analisis-de-datos-de-uso-y-metricas-ux (22 preguntas)

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un dato cualitativo es, por ejemplo..."
tipo: mc
opciones_explicitas:
  - "Lo que dijo la persona y dónde dudó"
  - "El porcentaje de éxito"
  - "El tiempo en segundos"
respuesta: "Lo que dijo la persona y dónde dudó"

explicacion: |
  Explica el porqué.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un dato cuantitativo es, por ejemplo..."
tipo: mc
opciones_explicitas:
  - "Cuántas personas completaron la tarea"
  - "Una cita textual"
  - "Un gesto de duda"
respuesta: "Cuántas personas completaron la tarea"

explicacion: |
  Muestra cuánto y dónde.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

variables:
  total: random(8, 20)
  ok: random(3, total)

respuesta: redondear(ok / total * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "{ok} de {total} participantes completaron una tarea. ¿Cuál es la tasa de éxito, en %? (un decimal)"

pasos:
  - "{ok} / {total} × 100"

explicacion: |
  Se divide los éxitos por el total y se multiplica por 100.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

variables:
  total: uno_de([5, 8, 10, 20, 25])
  ok: random(1, total)

respuesta: redondear(ok / total * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "En una prueba, {ok} de {total} personas lograron terminar la tarea. ¿Qué porcentaje es? (un decimal)"

pasos:
  - "{ok} / {total} × 100"

explicacion: |
  Éxito = completaron / total.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Para el tiempo en tarea conviene la mediana porque..."
tipo: mc
opciones_explicitas:
  - "Unos pocos casos muy lentos distorsionan el promedio"
  - "Es más difícil de calcular"
  - "Siempre es menor"
respuesta: "Unos pocos casos muy lentos distorsionan el promedio"

explicacion: |
  La mediana es robusta.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

variables:
  a: random(20, 40)
  b: random(41, 60)
  c: random(61, 90)
  d: random(91, 300)
  e: random(301, 600)

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "Cinco participantes tardaron {a}, {b}, {c}, {d} y {e} segundos en una tarea (ya ordenados). ¿Cuál es la mediana, en segundos?"

pasos:
  - "La mediana es el valor central"

explicacion: |
  Con cinco datos ordenados, es el tercero.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

enunciado: "SUS es..."
tipo: mc
opciones_explicitas:
  - "Un cuestionario de diez afirmaciones sobre usabilidad"
  - "Una herramienta de dibujo"
  - "Un tipo de prueba A/B"
respuesta: "Un cuestionario de diez afirmaciones sobre usabilidad"

explicacion: |
  Se responde de 1 a 5.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

tipo: completar
enunciado: "El resultado del SUS va de 0 a ___."
respuestas_validas:
  - "100"

explicacion: |
  No es un porcentaje.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Un SUS de 68 significa que el 68 % de las personas aprobó el producto."

explicacion: |
  No es un porcentaje; se interpreta comparando.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "El promedio aproximado de muchos estudios con SUS ronda..."
tipo: mc
opciones_explicitas:
  - "68 puntos"
  - "10 puntos"
  - "100 puntos"
respuesta: "68 puntos"

explicacion: |
  Se compara con ese valor y con versiones previas.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "avanzado"
  tags: ["ux"]

variables:
  suma: random(10, 40)

respuesta: suma * 2.5
tipo: input
tolerancia_abs: 0.1

enunciado: "Tras restar 1 a las respuestas impares y restar a 5 las pares, los diez valores suman {suma}. ¿Cuál es el puntaje SUS?"

pasos:
  - "SUS = suma × 2,5"

explicacion: |
  El puntaje final se obtiene multiplicando por 2,5.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

enunciado: "La tasa de conversión es..."
tipo: mc
opciones_explicitas:
  - "La proporción que completa una acción deseada"
  - "El tamaño de la página"
  - "El número de colores"
respuesta: "La proporción que completa una acción deseada"

explicacion: |
  Por ejemplo, registrarse.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

variables:
  visitas: uno_de([200, 400, 500, 1000, 2000])
  compras: random(5, 60)

respuesta: redondear(compras / visitas * 100, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un sitio tuvo {visitas} visitas y {compras} compras. ¿Cuál es la tasa de conversión, en %? (dos decimales)"

pasos:
  - "{compras} / {visitas} × 100"

explicacion: |
  Conversión = acciones / visitas × 100.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El abandono en un paso de un flujo indica..."
tipo: mc
opciones_explicitas:
  - "Dónde se pierde gente"
  - "Cuánto cuesta el producto"
  - "Qué color eligió la persona"
respuesta: "Dónde se pierde gente"

explicacion: |
  Pero no explica por qué.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Una prueba A/B consiste en..."
tipo: mc
opciones_explicitas:
  - "Mostrar dos versiones a grupos elegidos al azar y comparar una métrica"
  - "Probar una versión con una sola persona"
  - "Elegir la versión que más le gusta al diseñador"
respuesta: "Mostrar dos versiones a grupos elegidos al azar y comparar una métrica"

explicacion: |
  Mide qué versión rinde más.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "En una prueba A/B conviene cambiar..."
tipo: mc
opciones_explicitas:
  - "Una sola cosa a la vez"
  - "Todo a la vez"
  - "Nada"
respuesta: "Una sola cosa a la vez"

explicacion: |
  Así se sabe qué produjo el efecto.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Conviene frenar una prueba A/B apenas una versión parece ganar."

explicacion: |
  Genera falsas conclusiones; hay que dejar correr el tiempo necesario.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Una prueba A/B explica por qué una versión funciona mejor."

explicacion: |
  Solo muestra cuál rinde más; el porqué requiere investigación.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Antes de un cambio conviene definir..."
tipo: mc
opciones_explicitas:
  - "Qué métrica debería mejorar"
  - "Quién se llevará el crédito"
  - "Cuánto durará la reunión"
respuesta: "Qué métrica debería mejorar"

explicacion: |
  Sin hipótesis cualquier resultado parece una confirmación.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Los hallazgos se priorizan por..."
tipo: mc
opciones_explicitas:
  - "Gravedad y frecuencia"
  - "Orden alfabético"
  - "Antigüedad del código"
respuesta: "Gravedad y frecuencia"

explicacion: |
  Luego se formulan acciones concretas.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Los datos cualitativos y cuantitativos se complementan."

explicacion: |
  Las cifras muestran dónde; las observaciones, por qué.
```

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

enunciado: "El tiempo en tarea mide..."
tipo: mc
opciones_explicitas:
  - "Cuánto tarda alguien en completarla"
  - "Cuánto pesa la página"
  - "Cuántos colores hay"
respuesta: "Cuánto tarda alguien en completarla"

explicacion: |
  Suele resumirse con la mediana.
```

## Sección: arquitectura-de-informacion-y-navegacion (22 preguntas)

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "La arquitectura de información se ocupa de..."
tipo: mc
opciones_explicitas:
  - "Organizar, estructurar y etiquetar el contenido para que se encuentre"
  - "Elegir la paleta de colores"
  - "Programar la base de datos"
respuesta: "Organizar, estructurar y etiquetar el contenido para que se encuentre"

explicacion: |
  Es el qué y dónde antes del cómo se ve.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "basico"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Un sitio con diseño visual impecable siempre es fácil de usar, aunque su contenido esté mal organizado."

explicacion: |
  Si nadie encuentra lo que busca, el diseño visual no alcanza.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "¿Qué criterio conviene para ordenar el contenido?"
tipo: mc
opciones_explicitas:
  - "El de las personas que lo usan"
  - "El organigrama interno de la organización"
  - "El orden en que se escribió"
respuesta: "El de las personas que lo usan"

explicacion: |
  Obligar a conocer la estructura interna es un error común.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una web municipal ordenada por secretarías perjudica al vecino porque..."
tipo: mc
opciones_explicitas:
  - "Debe saber qué secretaría atiende su trámite"
  - "Es demasiado corta"
  - "Usa muchos colores"
respuesta: "Debe saber qué secretaría atiende su trámite"

explicacion: |
  La estructura refleja la organización, no las tareas.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "¿Cuál es una etiqueta de menú poco clara?"
tipo: mc
opciones_explicitas:
  - "'Soluciones'"
  - "'Contacto'"
  - "'Mis pedidos'"
respuesta: "'Soluciones'"

explicacion: |
  Es vaga y se confunde con otras como 'Servicios'.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Las etiquetas de un menú deben ser claras y distintas entre sí."

explicacion: |
  Si se superponen, la persona no sabe dónde buscar.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una estructura demasiado profunda tiene como problema..."
tipo: mc
opciones_explicitas:
  - "Obliga a muchos clics para llegar al contenido"
  - "Muestra demasiadas opciones a la vez"
  - "Es imposible de dibujar"
respuesta: "Obliga a muchos clics para llegar al contenido"

explicacion: |
  Y una demasiado ancha muestra demasiadas opciones al mismo nivel.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un mapa de sitio es..."
tipo: mc
opciones_explicitas:
  - "Un diagrama de árbol de las páginas y sus conexiones"
  - "Un plano de la oficina"
  - "Una lista de colores"
respuesta: "Un diagrama de árbol de las páginas y sus conexiones"

explicacion: |
  Sirve para planificar la estructura.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "El card sorting sirve para..."
tipo: mc
opciones_explicitas:
  - "Descubrir cómo agrupa y nombra el contenido la gente"
  - "Probar la velocidad de carga"
  - "Elegir el logotipo"
respuesta: "Descubrir cómo agrupa y nombra el contenido la gente"

explicacion: |
  Los participantes agrupan tarjetas.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "En un card sorting abierto..."
tipo: mc
opciones_explicitas:
  - "Las personas inventan los grupos y sus nombres"
  - "Los grupos están definidos de antemano"
  - "No se usan tarjetas"
respuesta: "Las personas inventan los grupos y sus nombres"

explicacion: |
  En el cerrado se usan categorías ya definidas.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "En un card sorting cerrado..."
tipo: mc
opciones_explicitas:
  - "Se agrupa en categorías ya definidas"
  - "Se inventan los grupos"
  - "Se cobra por participar"
respuesta: "Se agrupa en categorías ya definidas"

explicacion: |
  Sirve para validar una estructura.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Si muchas personas agrupan las tarjetas de manera parecida, esa estructura probablemente sea intuitiva."

explicacion: |
  El acuerdo indica un modelo mental compartido.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Para comprobar una estructura ya armada se pide a las personas que..."
tipo: mc
opciones_explicitas:
  - "Encuentren algo en el árbol de navegación"
  - "Agrupen tarjetas de cero"
  - "Diseñen el logotipo"
respuesta: "Encuentren algo en el árbol de navegación"

explicacion: |
  Es una prueba sobre la estructura, sin diseño visual.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Las migas de pan ('Inicio > Tienda > Zapatillas') muestran..."
tipo: mc
opciones_explicitas:
  - "La ruta recorrida y permiten volver a niveles superiores"
  - "El historial de compras"
  - "Las ofertas del día"
respuesta: "La ruta recorrida y permiten volver a niveles superiores"

explicacion: |
  Ayudan a saber dónde se está.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El menú hamburguesa tiene como ventaja y desventaja..."
tipo: mc
opciones_explicitas:
  - "Ahorra espacio, pero vuelve menos visibles las opciones"
  - "Muestra todo, pero ocupa mucho espacio"
  - "Es obligatorio en computadoras"
respuesta: "Ahorra espacio, pero vuelve menos visibles las opciones"

explicacion: |
  Útil en pantallas chicas.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "El buscador reemplaza por completo la necesidad de una buena navegación."

explicacion: |
  Complementa la navegación cuando hay mucho contenido.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una buena navegación responde: dónde estoy, adónde puedo ir y..."
tipo: mc
opciones_explicitas:
  - "Cómo vuelvo"
  - "Cuánto cuesta"
  - "Quién lo diseñó"
respuesta: "Cómo vuelvo"

explicacion: |
  Es el criterio de orientación.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Resaltar la sección actual en el menú ayuda a orientarse."

explicacion: |
  Indica dónde está la persona.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Mantener la navegación siempre en el mismo lugar favorece..."
tipo: mc
opciones_explicitas:
  - "La orientación, por consistencia"
  - "La sorpresa"
  - "El minimalismo extremo"
respuesta: "La orientación, por consistencia"

explicacion: |
  Es la heurística de consistencia aplicada a la navegación.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Las pestañas se usan para..."
tipo: mc
opciones_explicitas:
  - "Alternar vistas de un mismo nivel"
  - "Mostrar la ruta recorrida"
  - "Ocultar el menú"
respuesta: "Alternar vistas de un mismo nivel"

explicacion: |
  Evitan cambiar de página.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "basico"
  tags: ["ux"]

tipo: completar
enunciado: "La sigla AI en UX significa arquitectura de ___."
respuestas_validas:
  - "información"

explicacion: |
  Organiza y etiqueta el contenido.
```

```
metadata:
  materia: "diseño"
  tema: "arquitectura_de_informacion_y_navegacion"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "¿Qué suele venir después de definir la estructura?"
tipo: mc
opciones_explicitas:
  - "Los wireframes"
  - "El logotipo"
  - "La campaña publicitaria"
respuesta: "Los wireframes"

explicacion: |
  La estructura se traduce en pantallas esquemáticas.
```

## Sección: color-en-interfaces (22 preguntas)

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "En una interfaz, el color sirve para..."
tipo: mc
opciones_explicitas:
  - "Dirigir la atención, agrupar y marcar estados"
  - "Solo decorar"
  - "Reemplazar al texto"
respuesta: "Dirigir la atención, agrupar y marcar estados"

explicacion: |
  Comunica además de embellecer.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "En una paleta de interfaz, los colores que más se usan son..."
tipo: mc
opciones_explicitas:
  - "Los neutros"
  - "Los semánticos"
  - "Los de acento"
respuesta: "Los neutros"

explicacion: |
  Fondos, textos y bordes.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Los colores semánticos sirven para..."
tipo: mc
opciones_explicitas:
  - "Comunicar estados como éxito o error"
  - "Decorar el logotipo"
  - "Elegir la tipografía"
respuesta: "Comunicar estados como éxito o error"

explicacion: |
  Se apoyan en convenciones.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Si todos los elementos son de colores llamativos, la jerarquía visual mejora."

explicacion: |
  Si todo es de color, nada destaca.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El color de acento conviene reservarlo para..."
tipo: mc
opciones_explicitas:
  - "Lo que más importa, como la acción principal"
  - "Todos los textos"
  - "Los fondos de página"
respuesta: "Lo que más importa, como la acción principal"

explicacion: |
  Así conserva su fuerza.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Los significados de los colores son universales y no cambian de cultura en cultura."

explicacion: |
  Dependen de la cultura y del contexto.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "El contraste mínimo que piden las pautas WCAG (nivel AA) para texto normal es..."
tipo: mc
opciones_explicitas:
  - "4,5 a 1"
  - "2 a 1"
  - "10 a 1"
respuesta: "4,5 a 1"

explicacion: |
  El texto grande requiere 3 a 1.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El contraste mínimo WCAG AA para texto grande es..."
tipo: mc
opciones_explicitas:
  - "3 a 1"
  - "4,5 a 1"
  - "1 a 1"
respuesta: "3 a 1"

explicacion: |
  También se aplica a componentes de interfaz.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

variables:
  c: uno_de([2.5, 3.5, 4.0, 4.5, 5.2, 6.0])

respuesta: min(1, floor(c / 4.5))
tipo: input
tolerancia_abs: 0

enunciado: "Un texto normal tiene un contraste de {c} a 1 con su fondo. ¿Cumple el mínimo de 4,5 a 1? (escribí 1 si cumple, 0 si no)"

pasos:
  - "Comparar {c} con 4,5"

explicacion: |
  Se compara la razón con el umbral de 4,5.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El daltonismo más frecuente dificulta distinguir principalmente..."
tipo: mc
opciones_explicitas:
  - "Rojo y verde"
  - "Azul y celeste"
  - "Blanco y negro"
respuesta: "Rojo y verde"

explicacion: |
  Afecta a una proporción importante de varones.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Aproximadamente 1 de cada 12 varones tiene alguna forma de daltonismo."

explicacion: |
  Es un orden de magnitud habitual en la bibliografía.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Para señalar un error sin depender solo del color conviene..."
tipo: mc
opciones_explicitas:
  - "Sumar un ícono o un texto"
  - "Usar un rojo más fuerte"
  - "Ocultar el mensaje"
respuesta: "Sumar un ícono o un texto"

explicacion: |
  Así lo percibe quien no distingue el color.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una forma de comprobar que no dependés solo del color es..."
tipo: mc
opciones_explicitas:
  - "Ver la pantalla en escala de grises"
  - "Imprimirla en color"
  - "Aumentar el brillo"
respuesta: "Ver la pantalla en escala de grises"

explicacion: |
  Si la información se entiende, no depende solo del color.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "El modo oscuro consiste simplemente en invertir todos los colores."

explicacion: |
  Hay que revisar contrastes y ajustar colores saturados.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "En modo oscuro, el blanco puro sobre negro puro..."
tipo: mc
opciones_explicitas:
  - "Puede cansar la vista"
  - "Siempre es lo ideal"
  - "Es obligatorio por norma"
respuesta: "Puede cansar la vista"

explicacion: |
  Se suelen usar grises muy oscuros y claros.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Las variaciones de un color (más claros y oscuros) se usan para..."
tipo: mc
opciones_explicitas:
  - "Fondos, bordes y estados del cursor"
  - "Cambiar el idioma"
  - "Elegir la fuente"
respuesta: "Fondos, bordes y estados del cursor"

explicacion: |
  Amplían la paleta sin sumar colores nuevos.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un botón desactivado suele mostrarse con..."
tipo: mc
opciones_explicitas:
  - "Menor contraste o tono apagado, sin ser la única señal"
  - "El mismo aspecto que uno activo"
  - "Un parpadeo"
respuesta: "Menor contraste o tono apagado, sin ser la única señal"

explicacion: |
  Otras señales ayudan a entenderlo.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

tipo: completar
enunciado: "El color que identifica a la marca y se usa en las acciones principales es el color ___."
respuestas_validas:
  - "primario"

explicacion: |
  Se complementa con neutros y semánticos.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "La percepción del color cambia con la pantalla y el ambiente de uso."

explicacion: |
  Por eso hay que dejar margen de contraste.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "En un gráfico con varias series, ¿qué ayuda a quien no distingue colores?"
tipo: mc
opciones_explicitas:
  - "Sumar patrones o etiquetas directas"
  - "Usar más tonos parecidos"
  - "Quitar la leyenda"
respuesta: "Sumar patrones o etiquetas directas"

explicacion: |
  No depender solo del color.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Los bordes de los campos y los botones también necesitan un contraste mínimo de 3 a 1 con lo que los rodea."

explicacion: |
  WCAG lo pide para componentes de interfaz.
```

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "En un sistema de diseño conviene nombrar los colores por..."
tipo: mc
opciones_explicitas:
  - "Su función (por ejemplo, error)"
  - "Su valor hexadecimal"
  - "Su fecha de creación"
respuesta: "Su función (por ejemplo, error)"

explicacion: |
  Permite cambiar el valor sin romper el significado.
```

## Sección: diseno-de-interfaces-para-voz-y-conversacion (23 preguntas)

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Una interfaz conversacional es aquella en que la interacción se da..."
tipo: mc
opciones_explicitas:
  - "Con lenguaje hablado o escrito"
  - "Solo con botones"
  - "Con luces de colores"
respuesta: "Con lenguaje hablado o escrito"

explicacion: |
  Incluye asistentes de voz y chatbots.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Las heurísticas de usabilidad dejan de valer en interfaces de voz."

explicacion: |
  Siguen valiendo, aunque cambian las dificultades.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "En una interfaz de voz, ¿qué dificulta 'reconocer en lugar de recordar'?"
tipo: mc
opciones_explicitas:
  - "La persona no ve qué puede pedir"
  - "Hay demasiadas pantallas"
  - "Hay mucha luz"
respuesta: "La persona no ve qué puede pedir"

explicacion: |
  Por eso el asistente sugiere opciones.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "La voz es 'efímera', lo que significa que..."
tipo: mc
opciones_explicitas:
  - "Desaparece apenas se dice y es difícil retener listas largas"
  - "Dura mucho"
  - "Se guarda para siempre"
respuesta: "Desaparece apenas se dice y es difícil retener listas largas"

explicacion: |
  Conviene dar pocas opciones por vez.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "¿Cuántas opciones conviene leer por vez en voz alta?"
tipo: mc
opciones_explicitas:
  - "Tres o cuatro"
  - "Veinte"
  - "Una sola siempre"
respuesta: "Tres o cuatro"

explicacion: |
  Y repetirlas si se piden.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un error típico de reconocimiento de voz se debe a..."
tipo: mc
opciones_explicitas:
  - "Ruido, acentos o nombres propios"
  - "El color de la carcasa"
  - "La hora"
respuesta: "Ruido, acentos o nombres propios"

explicacion: |
  Hay que prever cómo se corrige.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un buen asistente al comenzar debería..."
tipo: mc
opciones_explicitas:
  - "Presentarse y decir qué puede hacer"
  - "Hablar lo más rápido posible"
  - "Pedir datos sensibles"
respuesta: "Presentarse y decir qué puede hacer"

explicacion: |
  Fija expectativas.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Conviene que un chatbot finja ser una persona real."

explicacion: |
  Debe avisar que es un sistema automático.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "El lenguaje de un asistente debería ser..."
tipo: mc
opciones_explicitas:
  - "Natural, breve y cotidiano"
  - "Técnico y largo"
  - "En código"
respuesta: "Natural, breve y cotidiano"

explicacion: |
  Sin jerga.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Antes de cancelar un turno, el asistente debería..."
tipo: mc
opciones_explicitas:
  - "Confirmar la acción con la persona"
  - "Cancelar de inmediato"
  - "Preguntar el nombre del programador"
respuesta: "Confirmar la acción con la persona"

explicacion: |
  Evita errores irreversibles.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Si el asistente no entiende, lo mejor es..."
tipo: mc
opciones_explicitas:
  - "Reformular o dar opciones, y tras dos fallos ofrecer otra vía"
  - "Repetir 'No entendí' indefinidamente"
  - "Cortar la comunicación"
respuesta: "Reformular o dar opciones, y tras dos fallos ofrecer otra vía"

explicacion: |
  Por ejemplo, derivar a una persona.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "La persona debería poder cancelar o pedir ayuda en cualquier momento."

explicacion: |
  Es la heurística de control y libertad.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Mantener el contexto significa..."
tipo: mc
opciones_explicitas:
  - "Recordar lo dicho para no repetir preguntas"
  - "Olvidar todo en cada turno"
  - "Cambiar de tema"
respuesta: "Recordar lo dicho para no repetir preguntas"

explicacion: |
  Hace la conversación más natural.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El tono de un asistente debería ser..."
tipo: mc
opciones_explicitas:
  - "Coherente a lo largo de la conversación"
  - "Distinto en cada frase"
  - "Agresivo"
respuesta: "Coherente a lo largo de la conversación"

explicacion: |
  Una personalidad consistente.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "La voz como interfaz puede ayudar a personas con discapacidad..."
tipo: mc
opciones_explicitas:
  - "Visual o motora"
  - "Ninguna"
  - "Solo auditiva"
respuesta: "Visual o motora"

explicacion: |
  Pero deja afuera a quienes no pueden hablar o escuchar.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Una interfaz de voz debería ofrecer alternativas como texto o subtítulos."

explicacion: |
  Para no excluir a quienes no pueden hablar o escuchar.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Un diseño inclusivo de voz debe considerar..."
tipo: mc
opciones_explicitas:
  - "Acentos, voces atípicas y distintos tiempos para responder"
  - "Solo un acento estándar"
  - "Que todos hablen rápido"
respuesta: "Acentos, voces atípicas y distintos tiempos para responder"

explicacion: |
  Para no discriminar.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un dispositivo de voz debería informar..."
tipo: mc
opciones_explicitas:
  - "Cuándo escucha, qué guarda y por cuánto tiempo"
  - "Solo su precio"
  - "El color de su luz"
respuesta: "Cuándo escucha, qué guarda y por cuánto tiempo"

explicacion: |
  Y permitir borrar el historial.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Pedir un dato sensible en voz alta puede ser un problema porque..."
tipo: mc
opciones_explicitas:
  - "Otras personas cerca pueden oírlo"
  - "Es más lento"
  - "Es ilegal siempre"
respuesta: "Otras personas cerca pueden oírlo"

explicacion: |
  Conviene ofrecer otra vía.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "La técnica del Mago de Oz consiste en..."
tipo: mc
opciones_explicitas:
  - "Una persona simula el sistema mientras otra conversa creyendo que habla con una máquina"
  - "Hacer magia en la pantalla"
  - "Usar un asistente real sin probar"
respuesta: "Una persona simula el sistema mientras otra conversa creyendo que habla con una máquina"

explicacion: |
  Permite probar diálogos antes de construir.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

tipo: completar
enunciado: "En una conversación, el sistema debe respetar los ___ de habla, sin interrumpir."
respuestas_validas:
  - "turnos"

explicacion: |
  Dejar hablar a la persona.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Repetir 'No entendí' en bucle es una buena estrategia de error."

explicacion: |
  Frustra; hay que reformular u ofrecer opciones.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un sistema telefónico por menú ('Para ventas, marque 1') es un ejemplo de..."
tipo: mc
opciones_explicitas:
  - "Interfaz conversacional por voz"
  - "Interfaz gráfica"
  - "Interfaz táctil"
respuesta: "Interfaz conversacional por voz"

explicacion: |
  Con opciones habladas.
```

## Sección: diseno-responsive-y-mobile-first (22 preguntas)

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "El diseño responsive es el enfoque en que..."
tipo: mc
opciones_explicitas:
  - "La interfaz se ajusta a cada tamaño de pantalla"
  - "Se hace una versión distinta por dispositivo"
  - "Se bloquea el zoom"
respuesta: "La interfaz se ajusta a cada tamaño de pantalla"

explicacion: |
  Se basa en grillas fluidas, imágenes flexibles y reglas según el ancho.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El término 'diseño web responsive' fue propuesto por..."
tipo: mc
opciones_explicitas:
  - "Ethan Marcotte"
  - "Jakob Nielsen"
  - "Tim Berners-Lee"
respuesta: "Ethan Marcotte"

explicacion: |
  En 2010.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Una grilla fluida expresa el ancho de las columnas en..."
tipo: mc
opciones_explicitas:
  - "Proporciones del espacio disponible"
  - "Píxeles fijos"
  - "Colores"
respuesta: "Proporciones del espacio disponible"

explicacion: |
  Se estira y se encoge de manera continua.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un punto de quiebre (breakpoint) es..."
tipo: mc
opciones_explicitas:
  - "Un ancho de pantalla en el que el diseño cambia de forma"
  - "Un error de programación"
  - "Un tipo de imagen"
respuesta: "Un ancho de pantalla en el que el diseño cambia de forma"

explicacion: |
  Por ejemplo, de tres columnas a una.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Los puntos de quiebre conviene elegirlos según el contenido y no según modelos de dispositivos puntuales."

explicacion: |
  Los dispositivos cambian todos los años.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Mobile first significa..."
tipo: mc
opciones_explicitas:
  - "Empezar a diseñar por la pantalla más chica"
  - "Diseñar solo para celulares"
  - "Diseñar primero para pantallas grandes"
respuesta: "Empezar a diseñar por la pantalla más chica"

explicacion: |
  Y sumar complejidad con más espacio.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una ventaja de mobile first es que..."
tipo: mc
opciones_explicitas:
  - "Obliga a decidir qué es realmente importante"
  - "Evita probar el diseño"
  - "Elimina la necesidad de imágenes"
respuesta: "Obliga a decidir qué es realmente importante"

explicacion: |
  En una pantalla chica no entra todo.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Empezar por el escritorio y recortar para el celular suele dejar partes ocultas sin criterio."

explicacion: |
  Es más fácil ampliar uno simple que recortar uno complejo.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Una diferencia clave entre cursor y dedo es que el dedo..."
tipo: mc
opciones_explicitas:
  - "Es menos preciso"
  - "Es más preciso"
  - "Puede hacer hover"
respuesta: "Es menos preciso"

explicacion: |
  Los objetivos tocables necesitan buen tamaño.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "El tamaño mínimo de objetivo táctil que pide WCAG 2.2 en nivel AA es de..."
tipo: mc
opciones_explicitas:
  - "24 por 24 píxeles CSS (con excepciones)"
  - "4 por 4 píxeles"
  - "200 por 200 píxeles"
respuesta: "24 por 24 píxeles CSS (con excepciones)"

explicacion: |
  Se recomiendan tamaños mayores, del orden de 44 por 44.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "La información que aparece solo al pasar el cursor por encima..."
tipo: mc
opciones_explicitas:
  - "No existe en una pantalla táctil"
  - "Funciona igual en un celular"
  - "Es obligatoria"
respuesta: "No existe en una pantalla táctil"

explicacion: |
  No hay hover en táctil.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Las acciones frecuentes en celular conviene ubicarlas..."
tipo: mc
opciones_explicitas:
  - "Al alcance del pulgar"
  - "En la esquina superior más lejana"
  - "Ocultas en un menú profundo"
respuesta: "Al alcance del pulgar"

explicacion: |
  Mejora la comodidad de uso.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "En una pantalla chica, ¿qué se prioriza?"
tipo: mc
opciones_explicitas:
  - "Lo que la persona vino a hacer"
  - "Los banners publicitarios"
  - "La información legal"
respuesta: "Lo que la persona vino a hacer"

explicacion: |
  El resto pasa a un segundo plano.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Conviene evitar el desplazamiento horizontal en pantallas chicas."

explicacion: |
  Obliga a mover la pantalla en dos direcciones.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Bloquear el zoom del navegador es una buena práctica de diseño móvil."

explicacion: |
  Perjudica a quien necesita agrandar el contenido.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "En una pantalla angosta suele pasarse de varias columnas a..."
tipo: mc
opciones_explicitas:
  - "Una sola columna"
  - "Seis columnas"
  - "Ninguna columna"
respuesta: "Una sola columna"

explicacion: |
  Se apilan los bloques.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una imagen flexible se caracteriza por..."
tipo: mc
opciones_explicitas:
  - "Escalar según el espacio disponible"
  - "Tener siempre el mismo tamaño"
  - "Ocultarse en pantallas chicas"
respuesta: "Escalar según el espacio disponible"

explicacion: |
  Es una de las tres ideas del diseño responsive.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Para probar un diseño responsive conviene..."
tipo: mc
opciones_explicitas:
  - "Usar simuladores y también dispositivos reales"
  - "Mirarlo solo en una pantalla"
  - "No probarlo"
respuesta: "Usar simuladores y también dispositivos reales"

explicacion: |
  Hay condiciones reales que no se simulan bien.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Mobile first tiende a producir una versión base..."
tipo: mc
opciones_explicitas:
  - "Más liviana y rápida"
  - "Más pesada"
  - "Sin texto"
respuesta: "Más liviana y rápida"

explicacion: |
  Se agrega lo extra solo cuando hay espacio.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

tipo: completar
enunciado: "Otro nombre para punto de quiebre es ___."
respuestas_validas:
  - "breakpoint"

explicacion: |
  Palabra en inglés usada en el desarrollo web.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "El diseño responsive combina grillas fluidas, imágenes flexibles y reglas según el ancho de pantalla."

explicacion: |
  Es la definición clásica.
```

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "En pantallas chicas, esconder las opciones secundarias detrás de un menú es razonable si..."
tipo: mc
opciones_explicitas:
  - "No se esconde lo esencial"
  - "Se esconde todo"
  - "Se quita el buscador"
respuesta: "No se esconde lo esencial"

explicacion: |
  La prioridad debe seguir siendo clara.
```

