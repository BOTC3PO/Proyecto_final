# Geografia — recursos hidricos y gestion (cuestionario, 25 preguntas VBLang)

> Tema: `geografia/recursos-hidricos-y-gestion`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Geografía"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["agua_dulce", "distribucion"]

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Más del 50% del agua disponible en la Tierra es agua dulce accesible para el ser humano."

explicacion: |
  Falso. La inmensa mayoría del agua en la Tierra es salada (océanos). Solo alrededor del 2.5% es agua dulce, y de esa pequeña fracción, gran parte está inaccesible (congelada o muy profunda).
```

### 2 — pregunta 2

```
metadata:
  materia: "Geografía"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["definicion", "vida"]

respuesta: "agua"
tipo: completar

enunciado: "El ______ es el elemento fundamental que sostiene la vida en nuestro planeta, pero su distribución es desigual."

respuestas_validas:
  - "agua"
  - "El agua"

explicacion: |
  El agua es esencial para la vida y las actividades humanas. Aunque abundante en总量, su disponibilidad como recurso hídrico dulce es limitada y desigual.
```

### 3 — pregunta 3

```
metadata:
  materia: "Geografía"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["conceptos_basicos", "finito"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: El agua es un bien finito y esencial para múltiples actividades económicas y sociales."

explicacion: |
  Verdadero. Aunque el agua se recicla naturalmente, la cantidad total de agua dulce utilizable en una región dada es limitada (finita) y crítica para la agricultura, industria y vida humana.
```

### 4 — pregunta 4

```
metadata:
  materia: "Geografía"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["agua_subterranea", "definicion"]

respuesta: "acuíferos"
tipo: completar

enunciado: "Las reservas de agua dulce subterráneas que pueden ser captadas se denominan ______."

respuestas_validas:
  - "acuíferos"
  - "acuífero"

explicacion: |
  Los acuíferos son formaciones geológicas subterráneas que almacenan y transmiten agua dulce, constituyendo una reserva estratégica importante para el suministro humano.
```

### 5 — pregunta 5

```
metadata:
  materia: "Geografía"
  tema: "recursos_hidricos_y_gestion"
  nivel: "intermedio"
  tags: ["gestion", "mitos"]

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Gestionar el agua ya es solo cuestión de construir represas para asegurar su sostenibilidad."

explicacion: |
  Falso. La gestión moderna del agua va más allá de la infraestructura física (represas) e incluye la protección de fuentes naturales, la conservación de ecosistemas y la regulación de usos para asegurar la sostenibilidad a largo plazo.
```

### 6 — pregunta 6

```
metadata:
  materia: "Geografía"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["definicion", "agua_dulce"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Los recursos hídricos incluyen tanto aguas superficiales (ríos, lagos) como subterráneas (acuíferos)."

explicacion: |
  Verdadero. La definición de recursos hídricos abarca todas las reservas de agua dulce accesibles, independientemente de si están en la superficie o bajo tierra.
```

### 7 — pregunta 7

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "intermedio"
  tags: ["contaminacion", "agroquímicos"]

variables:
  region: uno_de(["norte de Córdoba", "región pampeana"])

respuesta: "degradación"
tipo: mc

enunciado: "En {region}, el uso excesivo de agroquímicos provoca la _____ de la calidad del agua."

opciones_explicitas: ["mejora", "degradación", "purificación", "aumento"]

explicacion: |
  La intensa actividad agrícola en zonas como el norte de Córdoba o la región pampeana ha provocado la degradación de la calidad del agua por agroquímicos.
```

### 8 — pregunta 8

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["energia", "hidroelectricidad"]

variables:
  fuente: "agua"

respuesta: "energía"
tipo: completar

enunciado: "El agua es la base para la generación de _____ hidroeléctrica."

respuestas_validas:
  - "energía"
  - "electricidad"

explicacion: |
  El agua es fundamental para la generación de energía hidroeléctrica, una fuente importante de poder en muchos países.
```

### 9 — pregunta 9

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["finito", "gestión"]

variables:
  bien: "agua"

respuesta: "finito"
tipo: completar

enunciado: "El agua es un bien _____ y esencial para la vida."

respuestas_validas:
  - "finito"
  - "limitado"

explicacion: |
  Aunque abundante en la Tierra, el agua dulce utilizable es un bien finito que requiere gestión cuidadosa.
```

### 10 — pregunta 10

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "intermedio"
  tags: ["cuenca", "paraná"]

variables:
  rio: "Paraná"

respuesta: "Paraná"
tipo: completar

enunciado: "El caso práctico de gestión incluye la cuenca del río _____ y el Río de la Plata."

respuestas_validas:
  - "Paraná"
  - "paraná"

explicacion: |
  La cuenca del río Paraná es un ejemplo clave de aplicación práctica en la gestión de recursos hídricos en Argentina.
```

### 11 — pregunta 11

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "avanzado"
  tags: ["sostenibilidad", "futuro"]

variables:
  objetivo: "sostenibilidad"

respuesta: "sostenibilidad"
tipo: completar

enunciado: "Gestionar el agua implica asegurar su _____ para las futuras generaciones."

respuestas_validas:
  - "sostenibilidad"
  - "sostenible"

explicacion: |
  La gestión moderna del agua busca proteger las fuentes naturales para garantizar su sostenibilidad a largo plazo.
```

### 12 — pregunta 12

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "intermedio"
  tags: ["sobreexplotación", "napas"]

variables:
  accion: "extracción intensiva"

respuesta: "disminución"
tipo: mc

enunciado: "La {accion} de napas subterráneas provoca la _____ de sus niveles."

opciones_explicitas: ["aumento", "disminución", "estabilización", "purificación"]

explicacion: |
  La extracción intensiva de napas subterráneas ha provocado la disminución de sus niveles en varias regiones agrícolas.
```

### 13 — pregunta 13

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["ecosistemas", "preservación"]

variables:
  funcion: "preservación"

respuesta: "preservación"
tipo: completar

enunciado: "El agua es vital para la _____ de los ecosistemas."

respuestas_validas:
  - "preservación"
  - "conservación"

explicacion: |
  Más allá del uso humano, el agua es esencial para mantener y preservar los ecosistemas naturales.
```

### 14 — pregunta 14

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["uso_basico", "hidratación"]

variables:
  uso: "hidratación"

respuesta: "hidratación"
tipo: completar

enunciado: "El agua es vital para la _____ y la higiene humana."

respuestas_validas:
  - "hidratación"

explicacion: |
  La hidratación y la higiene son usos básicos e insustituibles del agua para la supervivencia humana.
```

### 15 — pregunta 15

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "intermedio"
  tags: ["ejemplo", "córdoba"]

variables:
  lugar: "norte de Córdoba"

respuesta: "contaminación"
tipo: mc

enunciado: "En {lugar}, la intensa actividad agrícola genera problemas de _____ del agua."

opciones_explicitas: ["limpieza", "contaminación", "abundancia", "claridad"]

explicacion: |
  El norte de Córdoba es un ejemplo de zona donde la actividad agrícola intensa provoca contaminación del agua por agroquímicos.
```

### 16 — pregunta 16

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "avanzado"
  tags: ["patagonia", "glaciares"]

variables:
  region: "Patagonia"

respuesta: "deshielo"
tipo: completar

enunciado: "En {region}, el deshielo de los glaciares altera los caudales."

respuestas_validas:
  - "deshielo"
  - "descongelamiento"

explicacion: |
  La Patagonia enfrenta cambios en sus caudales debido al deshielo de sus glaciares, afectado por el cambio climático.
```

### 17 — pregunta 17

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "avanzado"
  tags: ["geopolítica", "desafío"]

variables:
  desafio: "geopolítico"

respuesta: "geopolítico"
tipo: completar

enunciado: "La gestión del agua en Argentina es un desafío _____ y ambiental constante."

respuestas_validas:
  - "geopolítico"
  - "geopolitico"

explicacion: |
  La desigual distribución del agua convierte su gestión en un desafío geopolítico constante debido a las disputas entre provincias.
```

### 18 — pregunta 18

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "intermedio"
  tags: ["clima", "lluvia"]

variables:
  elemento: "patrones de lluvia"

respuesta: "alterar"
tipo: mc

enunciado: "El cambio climático está tendiendo a _____ los patrones de lluvia."

opciones_explicitas: ["estabilizar", "alterar", "eliminar", "aumentar uniformemente"]

explicacion: |
  El cambio climático altera los patrones de lluvia, haciendo más impredecible la disponibilidad de agua.
```

### 19 — pregunta 19

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["agricultura", "consumo"]

variables:
  sector: "agricultura"

respuesta: "mayor"
tipo: mc

enunciado: "La agricultura consume la _____ parte del agua dulce."

opciones_explicitas: ["menor", "mayor", "igual", "ninguna"]

explicacion: |
  La agricultura es el sector que consume la mayor parte del agua dulce disponible para las sociedades humanas.
```

### 20 — pregunta 20

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "intermedio"
  tags: ["conflictos", "caudal"]

variables:
  aspecto: "derecho a usar el agua"

respuesta: "disputas"
tipo: completar

enunciado: "Las cuencas que atraviesan múltiples provincias generan _____ sobre el derecho a usar el agua."

respuestas_validas:
  - "disputas"
  - "conflictos"

explicacion: |
  La transfronteridad de las cuencas genera disputas entre provincias sobre quién tiene derecho a usar el agua.
```

### 21 — pregunta 21

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["disponibilidad", "fracción"]

variables:
  cantidad: "minúscula"

respuesta: "minúscula"
tipo: mc

enunciado: "Solo una fracción _____ de agua es dulce y accesible."

opciones_explicitas: ["grande", "minúscula", "igual", "infinita"]

explicacion: |
  Aunque la Tierra está cubierta de agua, solo una minúscula fracción es agua dulce accesible.
```

### 22 — pregunta 22

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "intermedio"
  tags: ["pampeana", "extracción"]

variables:
  region: "región pampeana"

respuesta: "extracción"
tipo: completar

enunciado: "En {region}, la _____ intensiva de napas es un problema."

respuestas_validas:
  - "extracción"
  - "extraccion"

explicacion: |
  La región pampeana enfrenta problemas de degradación del agua debido a la extracción intensiva de napas subterráneas.
```

### 23 — pregunta 23

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "intermedio"
  tags: ["gestión", "marco_legal"]

variables:
  elemento: "políticas"

respuesta: "políticas"
tipo: completar

enunciado: "La gestión incluye {elemento}, leyes y acciones técnicas."

respuestas_validas:
  - "políticas"
  - "politicas"

explicacion: |
  La gestión de los recursos hídricos se refiere al conjunto de políticas, leyes y acciones técnicas para su planificación.
```

### 24 — pregunta 24

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["geografía_argentina", "selvas"]

variables:
  zona: "selvas subtropicales"

respuesta: "abundante"
tipo: mc

enunciado: "En las {zona}, la disponibilidad de agua es generalmente abundante."

opciones_explicitas: ["abundante", "escasa", "nula", "salada"]

explicacion: |
  Las selvas subtropicales en el norte de Argentina tienen una disponibilidad de agua generalmente abundante.
```

### 25 — pregunta 25

```
metadata:
  materia: "geografia"
  tema: "recursos_hidricos_y_gestion"
  nivel: "basico"
  tags: ["geografía_argentina", "desiertos"]

variables:
  zona: "desiertos áridos"

respuesta: "escasa"
tipo: mc

enunciado: "En los {zona}, la disponibilidad de agua es escasa."

opciones_explicitas: ["abundante", "escasa", "neutral", "variable"]

explicacion: |
  Los desiertos áridos en Argentina presentan una disponibilidad de agua muy escasa, contrastando con otras regiones.
```
