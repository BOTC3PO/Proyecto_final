# Civica — teoria del poder (cuestionario, 44 preguntas VBLang)

> Tema: `civica/teoria-del-poder`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "basico"
  tags: ["definicion", "concepto"]

variables:
  n: random(1, 5)

respuesta: "capacidad de influir"
tipo: completar

enunciado: "En el contexto de la Cívica, el poder se define fundamentalmente como la {n}-ésima característica clave: la capacidad de influir en el comportamiento de otros o imponer una voluntad."

explicacion: |
  El poder no es solo fuerza, sino la capacidad de influir o imponer voluntad, incluso contra resistencia. Es una herramienta necesaria para la organización social.
```

### 2 — pregunta 2

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["aristoteles", "justicia"]

variables:
  base: random(10, 20)
  incremento: random(1, 5)
  resultado: base + incremento

respuesta: "{resultado}"
tipo: input

enunciado: "Si la justicia ordena las relaciones de poder entre iguales, y consideramos que la 'razón' tiene un peso de {base} puntos y la 'virtud' un peso de {incremento} puntos en la legitimidad aristotélica, ¿cuál es la suma total de estos factores de legitimidad?"

explicacion: |
  Para Aristóteles, gobernar es servir al bien común y la justicia es el criterio que ordena las relaciones de poder. La legitimidad se basa en la razón y la virtud.
```

### 3 — pregunta 3

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["locke", "contrato"]

variables:
  n: random(1, 3)

respuesta: "voluntariamente"
tipo: completar

enunciado: "Las personas crean el Estado mediante un contrato social que acuerdan {n}-ésimamente: de forma voluntaria, no por coacción."

explicacion: |
  El contrato social en Locke es un acuerdo voluntario para salir del estado de naturaleza y proteger los derechos naturales mediante un gobierno.
```

### 4 — pregunta 4

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "avanzado"
  tags: ["locke", "resistencia"]

variables:
  n: random(1, 5)

respuesta: "traiciona"
tipo: completar

enunciado: "El pueblo tiene derecho a resistir si el gobernante {n}-ésimamente: traiciona la confianza depositada en él."

explicacion: |
  La legitimidad del gobierno depende de proteger los derechos. La traición a esta confianza justifica la resistencia o el cambio de gobierno.
```

### 5 — pregunta 5

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["habermas", "esfera_publica"]

variables:
  n: random(1, 3)

respuesta: "debaten"
tipo: completar

enunciado: "En la esfera pública de Habermas, los ciudadanos {n}-ésimamente: debaten libremente para formar una opinión colectiva racional."

explicacion: |
  Habermas enfatiza que la legitimidad del poder surge del diálogo inclusivo y transparente en una esfera pública libre de coerción.
```

### 6 — pregunta 6

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "avanzado"
  tags: ["habermas", "legitimidad"]

variables:
  a: random(1, 10)
  b: random(1, 10)
  resultado: a + b

respuesta: "{resultado}"
tipo: input

enunciado: "Si la calidad de la comunicación pública tiene un peso de {a} y la transparencia tiene un peso de {b} en la legitimidad habermasiana, ¿cuál es la suma de estos factores?"

explicacion: |
  Para Habermas, la legitimidad no depende solo de derechos, sino de la calidad del debate público y la inclusión de todas las voces.
```

### 7 — pregunta 7

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["pluralismo", "diversidad"]

variables:
  n: random(1, 5)

respuesta: "diversidad"
tipo: completar

enunciado: "El pluralismo político reconoce que la sociedad está compuesta por grupos con intereses diferentes, y el poder es el mecanismo para gestionar esta {n}-ésimamente: diversidad."

explicacion: |
  El poder en el pluralismo no es imposición de una verdad, sino gestión de la diversidad de intereses y valores.
```

### 8 — pregunta 8

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "basico"
  tags: ["aplicacion", "escuela"]

variables:
  n: random(1, 3)

respuesta: "convivencia"
tipo: completar

enunciado: "El debate en la escuela es una aplicación práctica del poder para mejorar la {n}-ésimamente: convivencia."

explicacion: |
  El debate escolar permite practicar la deliberación, el respeto a la diversidad y la gestión pacífica de conflictos, esenciales para la convivencia.
```

### 9 — pregunta 9

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["locke", "estado"]

variables:
  n: random(1, 5)

respuesta: "proteger"
tipo: completar

enunciado: "El Estado, según Locke, existe principalmente para {n}-ésimamente: proteger los derechos naturales de los ciudadanos."

explicacion: |
  La función principal del gobierno lockeano es la protección de la vida, libertad y propiedad.
```

### 10 — pregunta 10

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["habermas", "debate"]

variables:
  a: random(1, 10)
  b: random(1, 10)
  resultado: a * b

respuesta: "{resultado}"
tipo: input

enunciado: "Si la libertad de expresión tiene un valor de {a} y la ausencia de coerción tiene un valor de {b} en la esfera pública, ¿cuál es el producto de estos valores en la legitimidad?"

explicacion: |
  La esfera pública requiere libertad y ausencia de coerción para que el debate sea racional y la legitimidad sea válida.
```

### 11 — pregunta 11

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["pluralismo", "minorías"]

variables:
  n: random(1, 3)

respuesta: "espacio"
tipo: completar

enunciado: "La democracia pluralista busca que todas las voces tengan {n}-ésimamente: espacio en la deliberación."

explicacion: |
  El pluralismo garantiza que las minorías tengan representación y voz, evitando la tiranía de la mayoría.
```

### 12 — pregunta 12

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "basico"
  tags: ["locke", "acuerdo"]

variables:
  n: random(1, 5)

respuesta: "voluntario"
tipo: completar

enunciado: "El contrato social es un acuerdo {n}-ésimamente: voluntario entre individuos para crear un Estado."

explicacion: |
  El contrato social es voluntario, basado en la necesidad de seguridad y protección de derechos, no en la fuerza.
```

### 13 — pregunta 13

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "avanzado"
  tags: ["habermas", "razon"]

variables:
  n: random(1, 3)

respuesta: "racional"
tipo: completar

enunciado: "La opinión colectiva en la esfera pública debe ser {n}-ésimamente: racional, formada mediante el debate libre."

explicacion: |
  Habermas insiste en que la legitimidad surge de un proceso de formación de opinión racional y libre de coerción.
```

### 14 — pregunta 14

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["pluralismo", "gestion"]

variables:
  a: random(1, 10)
  b: random(1, 10)
  resultado: a + b

respuesta: "{resultado}"
tipo: input

enunciado: "Si el poder gestiona la diversidad de intereses (valor {a}) y la diversidad de valores (valor {b}), ¿cuál es la suma total de factores gestionados?"

explicacion: |
  El poder político en el pluralismo gestiona la diversidad de intereses, valores e identidades para mantener la cohesión social.
```

### 15 — pregunta 15

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "avanzado"
  tags: ["locke", "resistencia"]

variables:
  n: random(1, 5)

respuesta: "derecho"
tipo: completar

enunciado: "El pueblo tiene el {n}-ésimamente: derecho a resistir o cambiar el gobierno si este viola los derechos naturales."

explicacion: |
  La violación de los derechos naturales por parte del gobernante rompe el contrato social, legitimando la resistencia del pueblo.
```

### 16 — pregunta 16

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "basico"
  tags: ["aristoteles", "polis"]

variables:
  n: random(1, 3)

respuesta: "deliberar"
tipo: completar

enunciado: "En la polis, los ciudadanos se reúnen para {n}-ésimamente: deliberar sobre lo común."

explicacion: |
  La polis es el espacio donde los ciudadanos deliberan. El poder legitimo surge de este proceso deliberativo basado en la razón.
```

### 17 — pregunta 17

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "basico"
  tags: ["aplicacion", "escuela"]

variables:
  n: random(1, 5)

respuesta: "influir"
tipo: completar

enunciado: "En el debate escolar, los estudiantes practican el poder como la capacidad de {n}-ésimamente: influir en otros mediante argumentos."

explicacion: |
  El debate escolar es una práctica de poder civilizado: influir en otros mediante la razón y el respeto, no la fuerza.
```

### 18 — pregunta 18

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["habermas", "legitimidad"]

variables:
  n: random(1, 3)

respuesta: "inclusivo"
tipo: completar

enunciado: "El poder político es justo si surge de un diálogo {n}-ésimamente: inclusivo y transparente."

explicacion: |
  Para Habermas, la legitimidad requiere inclusión de todas las voces y transparencia en el proceso deliberativo.
```

### 19 — pregunta 19

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "basico"
  tags: ["definicion", "poder"]

variables:
  poder: "random(1, 100)"

respuesta: "capacidad de influir o imponer voluntad"
tipo: completar

enunciado: "Según la teoría del poder, este se define fundamentalmente como la {poder} para influir en el comportamiento de otros o imponer una voluntad, incluso contra su resistencia."

explicacion: |
  El poder no es solo fuerza bruta, sino la capacidad general de influir o imponer voluntad en la convivencia social.
```

### 20 — pregunta 20

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "basico"
  tags: ["aristoteles", "animal_politico"]

variables:
  frase: "uno_de(['animal político', 'ser social'])"

respuesta: "animal político"
tipo: completar

enunciado: "Aristóteles definió al ser humano como un '{frase}', sugiriendo que el poder y la política son naturales a la vida en comunidad."

explicacion: |
  Para Aristóteles, la política no es una imposición externa, sino una expresión natural de la condición humana en la polis.
```

### 21 — pregunta 21

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["legitimidad", "aristoteles"]

variables:
  origen: "uno_de(['razón y virtud', 'fuerza bruta', 'dinero'])"

respuesta: "razón y virtud"
tipo: completar

enunciado: "En la visión aristotélica, el poder legítimo no proviene de la {origen}, sino de la razón y la virtud al servicio del bien común."

explicacion: |
  La justicia y la virtud son los criterios que ordenan las relaciones de poder entre iguales en la polis.
```

### 22 — pregunta 22

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["locke", "derechos_naturales"]

variables:
  derecho: "uno_de(['vida', 'libertad', 'propiedad'])"

respuesta: "derecho inalienable"
tipo: completar

enunciado: "Para John Locke, los seres humanos nacen con derechos inalienables como la {derecho}, la libertad y la propiedad."

explicacion: |
  Locke argumenta que estos derechos existen antes del Estado y son la base del contrato social.
```

### 23 — pregunta 23

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["contrato_social", "locke"]

variables:
  motivo: "random(1, 50)"

respuesta: "inseguridad"
tipo: completar

enunciado: "Las personas acuerdan crear un Estado mediante un contrato social para superar la {motivo} de vivir sin reglas claras en el estado de naturaleza."

explicacion: |
  El Estado surge voluntariamente para proteger los derechos naturales que eran vulnerables en la ausencia de gobierno.
```

### 24 — pregunta 24

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["limitacion_poder", "locke"]

variables:
  tipo_poder: "uno_de(['absoluto', 'divino', 'delegado'])"

respuesta: "delegado"
tipo: completar

enunciado: "Para Locke, el poder del gobierno no es absoluto ni divino, sino {tipo_poder} por el pueblo para proteger sus derechos."

explicacion: |
  El poder estatal tiene un propósito específico: la protección de derechos. Si falla, el contrato se rompe.
```

### 25 — pregunta 25

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "avanzado"
  tags: ["resistencia", "locke"]

variables:
  condicion: "random(1, 10)"

respuesta: "romper"
tipo: completar

enunciado: "Si el gobernante traiciona la confianza y viola los derechos, el contrato se {condicion} y el pueblo tiene derecho a resistir."

explicacion: |
  La legitimidad depende del cumplimiento del contrato. La traición justifica la resistencia o el cambio de gobierno.
```

### 26 — pregunta 26

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "avanzado"
  tags: ["habermas", "esfera_publica"]

variables:
  espacio: "random(1, 20)"

respuesta: "esfera pública"
tipo: completar

enunciado: "Habermas propone que la legitimidad del poder surge del debate libre en la '{espacio}', sin coerción."

explicacion: |
  La opinión colectiva racional se forma en un espacio de comunicación inclusiva y transparente.
```

### 27 — pregunta 27

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "avanzado"
  tags: ["legitimidad", "habermas"]

variables:
  criterio: "uno_de(['calidad de la comunicación', 'fuerza militar', 'riqueza'])"

respuesta: "calidad de la comunicación"
tipo: completar

enunciado: "Para Habermas, la legitimidad del poder no depende solo de proteger la vida, sino de la {criterio} en la deliberación pública."

explicacion: |
  El poder solo es justo si surge de un diálogo inclusivo y racional entre los ciudadanos.
```

### 28 — pregunta 28

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["pluralismo", "sociedad"]

variables:
  naturaleza: "random(1, 100)"

respuesta: "heterogénea"
tipo: completar

enunciado: "El pluralismo reconoce que la sociedad no es homogénea, sino {naturaleza}, compuesta por grupos con intereses diversos."

explicacion: |
  El poder debe gestionar esta diversidad, no imponer una única verdad o identidad.
```

### 29 — pregunta 29

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["pluralismo", "democracia"]

variables:
  mecanismo: "random(1, 5)"

respuesta: "mecanismo"
tipo: completar

enunciado: "En el contexto pluralista, el poder es el {mecanismo} para gestionar la diversidad de valores e identidades."

explicacion: |
  La democracia pluralista busca incluir todas las voces, evitando que la mayoría aplaste a las minorías.
```

### 30 — pregunta 30

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["democracia", "minorías"]

variables:
  riesgo: "random(1, 10)"

respuesta: "aplastar"
tipo: completar

enunciado: "La democracia pluralista busca evitar que una mayoría {riesgo} a las minorías en la deliberación."

explicacion: |
  La protección de las minorías es clave para que la diversidad sea un recurso y no un conflicto.
```

### 31 — pregunta 31

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["justicia", "aristoteles"]

variables:
  rol: "random(1, 10)"

respuesta: "ordenar"
tipo: completar

enunciado: "Para Aristóteles, la justicia es el criterio que {rol} las relaciones de poder entre los iguales."

explicacion: |
  La justicia no es solo igualdad formal, sino dar a cada uno lo que corresponde según su virtud y mérito.
```

### 32 — pregunta 32

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "basico"
  tags: ["estado_naturaleza", "locke"]

variables:
  caracteristica: "uno_de(['libertad', 'caos', 'pobreza'])"

respuesta: "libertad"
tipo: completar

enunciado: "En el estado de naturaleza lockeano, los seres humanos son {caracteristica} e iguales."

explicacion: |
  Locke no ve el estado de naturaleza como una guerra constante (como Hobbes), sino como un estado de libertad con derechos naturales.
```

### 33 — pregunta 33

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["propiedad", "locke"]

variables:
  importancia: "random(1, 5)"

respuesta: "inalienable"
tipo: completar

enunciado: "La {importancia} es un derecho inalienable que el Estado debe proteger, no crear."

explicacion: |
  La propiedad es un derecho natural previo al contrato social, fundamental para la libertad individual.
```

### 34 — pregunta 34

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "avanzado"
  tags: ["habermas", "debate"]

variables:
  calidad: "random(1, 100)"

respuesta: "sin coerción"
tipo: completar

enunciado: "En la esfera pública de Habermas, los ciudadanos debaten libremente, {calidad}, para formar opinión colectiva."

explicacion: |
  La ausencia de coerción es esencial para que la fuerza del argumento prevalezca sobre la fuerza de la imposición.
```

### 35 — pregunta 35

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "avanzado"
  tags: ["habermas", "razon"]

variables:
  proceso: "random(1, 10)"

respuesta: "racional"
tipo: completar

enunciado: "El objetivo del debate en la esfera pública es formar una {proceso} opinión colectiva."

explicacion: |
  La racionalidad en el debate legitima las decisiones políticas y el poder que emana de ellas.
```

### 36 — pregunta 36

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["habermas", "inclusión"]

variables:
  requisito: "random(1, 5)"

respuesta: "inclusivo"
tipo: completar

enunciado: "El poder político es justo si surge de un diálogo {requisito} y transparente."

explicacion: |
  La inclusión de todas las voces relevantes es un requisito de legitimidad para Habermas.
```

### 37 — pregunta 37

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["pluralismo", "identidad"]

variables:
  elemento: "random(1, 20)"

respuesta: "identidades"
tipo: completar

enunciado: "El pluralismo reconoce grupos con diferentes intereses, valores e {elemento}."

explicacion: |
  La diversidad identitaria es un hecho social que el poder político debe reconocer y gestionar.
```

### 38 — pregunta 38

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "basico"
  tags: ["aristoteles", "servicio"]

variables:
  objetivo: "random(1, 5)"

respuesta: "bien común"
tipo: completar

enunciado: "Para Aristóteles, gobernar es servir al {objetivo}, no al interés propio del gobernante."

explicacion: |
  La virtud del gobernante se mide por su capacidad de promover el bien común de la polis.
```

### 39 — pregunta 39

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "basico"
  tags: ["contrato", "voluntad"]

variables:
  accion: "random(1, 10)"

respuesta: "voluntariamente"
tipo: completar

enunciado: "Las personas {accion} acuerdan crear un Estado para proteger sus derechos."

explicacion: |
  La legitimidad del Estado liberal deriva del consentimiento de los gobernados.
```

### 40 — pregunta 40

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["locke", "traicion"]

variables:
  consecuencia: "random(1, 5)"

respuesta: "romper"
tipo: completar

enunciado: "Si el gobernante viola los derechos, el contrato se {consecuencia}."

explicacion: |
  El contrato social es condicional al respeto de los derechos naturales.
```

### 41 — pregunta 41

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["locke", "resistencia"]

variables:
  derecho: "random(1, 10)"

respuesta: "resistir"
tipo: completar

enunciado: "El pueblo tiene derecho a {derecho} o cambiar al gobierno si este traiciona la confianza."

explicacion: |
  La resistencia es un mecanismo de defensa de los derechos naturales ante la tiranía.
```

### 42 — pregunta 42

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["pluralismo", "sociedad"]

variables:
  contraste: "random(1, 20)"

respuesta: "heterogénea"
tipo: completar

enunciado: "A diferencia de la visión homogénea, el pluralismo ve la sociedad como {contraste}."

explicacion: |
  El pluralismo acepta y valora la diversidad como constitutiva de la democracia moderna.
```

### 43 — pregunta 43

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "intermedio"
  tags: ["pluralismo", "gestión"]

variables:
  rol: "random(1, 5)"

respuesta: "mecanismo"
tipo: completar

enunciado: "El poder es el {rol} para gestionar la diversidad, no para eliminarla."

explicacion: |
  El objetivo no es la uniformidad, sino la coexistencia pacífica de diferencias.
```

### 44 — pregunta 44

```
metadata:
  materia: "Cívica"
  tema: "teoria_del_poder"
  nivel: "basico"
  tags: ["aplicacion", "escuela"]

variables:
  contexto: "random(1, 10)"

respuesta: "deliberación"
tipo: completar

enunciado: "El debate en la escuela es una aplicación práctica de la {contexto} pública y la gestión del poder."

explicacion: |
  La escuela es un microcosmos donde se aprenden las prácticas de la democracia y el poder legítimo.
```
