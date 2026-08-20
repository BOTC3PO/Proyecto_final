# Civica — discriminacion y organismos de proteccion (cuestionario, 30 preguntas VBLang)

> Tema: `civica/discriminacion-y-organismos-de-proteccion`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "basico"
  tags: ["motivos", "identidad"]

respuesta: verdadero
tipo: vf

enunciado: "La discriminación puede ocurrir por motivos como la religión, la etnia, la discapacidad o la orientación sexual."

explicacion: |
  Estos son ejemplos clásicos de características inherentes a la identidad que no deben ser base para un trato excluyente.
```

### 2 — pregunta 2

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "basico"
  tags: ["leyes", "identidad_genero"]

respuesta: 26370
tipo: input

enunciado: "¿Cuál es el número de la Ley que reconoce el derecho a la identidad de género en Argentina?"

explicacion: |
  La Ley 26.370 permite el cambio de nombre y sexo en documentos oficiales sin necesidad de autorización judicial compleja.
```

### 3 — pregunta 3

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["inadi", "prevencion"]

respuesta: verdadero
tipo: vf

enunciado: "El INADI no solo recibe denuncias, sino que también trabaja en la prevención a través de campañas educativas."

explicacion: |
  Su función es transversal: prevención, asistencia legal y recepción de denuncias.
```

### 4 — pregunta 4

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "basico"
  tags: ["inadi", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El INADI es un organismo público estatal."

explicacion: |
  Es una entidad del Estado argentino dedicada a la lucha contra la discriminación.
```

### 5 — pregunta 5

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "basico"
  tags: ["conceptos", "merito"]

respuesta: verdadero
tipo: vf

enunciado: "La discriminación se basa en características inherentes, no en capacidades o méritos."

explicacion: |
  El trato desigual injustificado es la esencia de la discriminación.
```

### 6 — pregunta 6

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["sociedad", "consecuencias"]

variables:
  efecto: uno_de(["debilita", "fortalece", "neutraliza", "ignora"])

respuesta: "debilita"
tipo: completar

enunciado: "En el contexto de la convivencia social, la discriminación profundiza las brechas de desigualdad y {efecto} la cohesión del tejido social."

explicacion: |
  La discriminación debilita la cohesión social al excluir a grupos enteros, impidiendo la integración y el bienestar común.
```

### 7 — pregunta 7

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["estereotipos", "microagresiones"]

variables:
  forma: uno_de(["estereotipos", "leyes", "impuestos", "contratos"])

respuesta: "estereotipos"
tipo: completar

enunciado: "La discriminación no siempre es explícita; muchas veces se manifiesta a través de {forma}, prejuicios o microagresiones cotidianas."

explicacion: |
  Los estereotipos son generalizaciones simplistas que invisibilizan a ciertos grupos y perpetúan la discriminación estructural.
```

### 8 — pregunta 8

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["leyes", "identidad_genero"]

variables:
  numero_ley: 26370

respuesta: "26.370"
tipo: completar

enunciado: "La normativa que reconoce el derecho de todas las personas a ser identificadas con el género que sienten y viven es la Ley {numero_ley}."

explicacion: |
  La Ley 26.370, conocida como Ley de Identidad de Género, permite el cambio de nombre y sexo en documentos oficiales sin intervenciones quirúrgicas complejas.
```

### 9 — pregunta 9

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "basico"
  tags: ["inadi", "funcion"]

variables:
  accion: uno_de(["promover", "castigar", "ignorar", "crear"])

respuesta: "promover"
tipo: completar

enunciado: "El INADI es un organismo público creado para {accion}, proteger y difundir los derechos de las personas que sufren discriminación."

explicacion: |
  El Instituto Nacional contra la Discriminación (INADI) tiene como misión promover los derechos humanos y prevenir la discriminación.
```

### 10 — pregunta 10

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["leyes", "input"]

variables:
  ley_num: 26370

respuesta: "26370"
tipo: input

enunciado: "Escribe el número de la Ley de Identidad de Género (sin puntos ni guiones): {ley_num}."

explicacion: |
  La Ley de Identidad de Género es la número 26.370.
```

### 11 — pregunta 11

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "basico"
  tags: ["inadi", "input"]

respuesta: "inadi"
tipo: input

enunciado: "Escribe el acrónimo del Instituto Nacional contra la Discriminación en minúsculas."

explicacion: |
  El acrónimo es INADI.
```

### 12 — pregunta 12

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "basico"
  tags: ["concepto", "input"]

variables:
  caracteristica: "capacidad"

respuesta: "capacidad"
tipo: input

enunciado: "Escribe una característica que NO debe ser base para la discriminación (ej: {caracteristica})."

explicacion: |
  Las capacidades o méritos no deben ser base para la discriminación.
```

### 13 — pregunta 13

```
metadata:
  materia: "Cívica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "basico"
  tags: ["motivos", "completar"]

variables:
  motivo: "religión"

respuesta: "religión"
tipo: completar

enunciado: "Escribe un motivo inherente a la identidad que puede ser base de discriminación (ej: {motivo})."

explicacion: |
  La religión es un motivo inherente que no debe ser base para la discriminación.
```

### 14 — pregunta 14

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "basico"
  tags: ["definicion", "conceptos_basicos"]

respuesta: falso
tipo: vf

enunciado: "La discriminación siempre se manifiesta como un acto físico violento y explícito."

explicacion: |
  La discriminación no siempre es un acto violento o explícito. Muchas veces se manifiesta a través de estereotipos, prejuicios o microagresiones cotidianas que invisibilizan a ciertos grupos.
```

### 15 — pregunta 15

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["ley_26370", "derechos"]

respuesta: verdadero
tipo: vf

enunciado: "La Ley de Identidad de Género permite el cambio de nombre en documentos oficiales sin necesidad de autorizaciones judiciales complejas."

explicacion: |
  Sí, la Ley 26.370 asegura el respeto a la autodeterminación, permitiendo cambios administrativos sin requisitos médicos o judiciales invasivos.
```

### 16 — pregunta 16

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["conceptos", "manifestaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Los estereotipos y las microagresiones son formas sutiles de discriminación que invisibilizan a ciertos grupos."

explicacion: |
  Correcto. La discriminación no solo es violencia física; las microagresiones y estereotipos son manifestaciones cotidianas que dañan la dignidad.
```

### 17 — pregunta 17

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["inadi", "alcance"]

respuesta: verdadero
tipo: vf

enunciado: "El INADI aborda todas las formas de discriminación, desde el racismo hasta la homofobia."

explicacion: |
  Su función es transversal, cubriendo cualquier motivo de discriminación, actuando como puente entre la sociedad y las políticas públicas.
```

### 18 — pregunta 18

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["inadi", "rol"]

respuesta: verdadero
tipo: vf

enunciado: "El INADI actúa como un puente entre la sociedad civil y las políticas públicas."

explicacion: |
  Sí, conecta a las víctimas y organizaciones civiles con el Estado para generar cambios en las políticas públicas.
```

### 19 — pregunta 19

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["ley_26370", "mitos"]

respuesta: falso
tipo: vf

enunciado: "Para cambiar el sexo en los documentos oficiales según la Ley 26.370, es necesario realizar intervenciones quirúrgicas previas."

explicacion: |
  Falso. La ley permite el cambio sin necesidad de intervenciones quirúrgicas, respetando la autodeterminación.
```

### 20 — pregunta 20

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "basico"
  tags: ["inadi", "denuncias"]

respuesta: verdadero
tipo: vf

enunciado: "El INADI recibe denuncias de personas que sufren o pueden sufrir discriminación."

explicacion: |
  Sí, recibir denuncias es una de sus funciones clave para asistir a las víctimas.
```

### 21 — pregunta 21

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["sociedad", "impacto"]

respuesta: verdadero
tipo: vf

enunciado: "La discriminación debilita la cohesión del tejido social."

explicacion: |
  Correcto. Al excluir a grupos, se fractura la convivencia y la confianza social.
```

### 22 — pregunta 22

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["inadi", "asistencia"]

respuesta: verdadero
tipo: vf

enunciado: "El INADI brinda asistencia legal a las víctimas de discriminación."

explicacion: |
  Sí, junto con la prevención y la recepción de denuncias, ofrece apoyo legal a quienes son discriminados.
```

### 23 — pregunta 23

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["ley_26370", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "La Ley de Identidad de Género reconoce el derecho a ser identificado con el género que se siente y vive, independientemente del sexo biológico."

explicacion: |
  Exactamente. La ley se basa en la autodeterminación y la vivencia del género, no en el sexo biológico asignado al nacer.
```

### 24 — pregunta 24

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "basico"
  tags: ["conceptos", "prejuicios"]

respuesta: verdadero
tipo: vf

enunciado: "Los prejuicios pueden manifestarse como formas de discriminación cotidiana."

explicacion: |
  Sí, los prejuicios son la base de estereotipos y microagresiones que constituyen discriminación diaria.
```

### 25 — pregunta 25

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["ley_26370", "memoria"]

variables:
  digito1: random(1, 9)
  digito2: random(1, 9)
  # Generamos un número falso aleatorio para distracción, pero la respuesta es fija en la explicación si fuera mc, aquí es input
  # Para input, la respuesta es fija 26370

respuesta: 26370
tipo: input

enunciado: "Escribe el número de la Ley de Identidad de Género: {random(10000, 99999)}"

explicacion: |
  La ley es la 26.370. El número en el enunciado es solo un marcador de posición visual.
```

### 26 — pregunta 26

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["inadi", "enfoque"]

respuesta: verdadero
tipo: vf

enunciado: "El enfoque del INADI es transversal, abarcando todas las formas de discriminación."

explicacion: |
  Correcto. No se limita a un solo tipo de prejuicio, sino que aborda la discriminación en general.
```

### 27 — pregunta 27

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "avanzado"
  tags: ["constitucion", "etica"]

respuesta: verdadero
tipo: vf

enunciado: "Combatir la discriminación es solo una cuestión de moralidad, sin relevancia constitucional."

explicacion: |
  Falso. Es tanto una cuestión moral como un requisito constitucional para garantizar la igualdad real de oportunidades.
```

### 28 — pregunta 28

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["ley_26370", "tramites"]

respuesta: verdadero
tipo: vf

enunciado: "Según la Ley de Identidad de Género, es posible cambiar el nombre en documentos oficiales."

explicacion: |
  Sí, la ley garantiza este derecho como parte de la autodeterminación de la identidad de género.
```

### 29 — pregunta 29

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "intermedio"
  tags: ["conceptos", "consecuencias"]

respuesta: verdadero
tipo: vf

enunciado: "Las microagresiones pueden invisibilizar a ciertos grupos sociales."

explicacion: |
  Correcto. Al ignorar o menospreciar sutilmente a una persona, se la hace invisible socialmente.
```

### 30 — pregunta 30

```
metadata:
  materia: "civica"
  tema: "discriminacion_y_organismos_de_proteccion"
  nivel: "basico"
  tags: ["inadi", "objetivos"]

respuesta: verdadero
tipo: vf

enunciado: "El INADI tiene como objetivo promover y difundir los derechos de las personas."

explicacion: |
  Sí, la promoción y difusión son pilares de su labor educativa y preventiva.
```
