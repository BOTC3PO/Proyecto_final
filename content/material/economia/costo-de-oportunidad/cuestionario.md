# Economia — costo de oportunidad (cuestionario, 30 preguntas VBLang)

> Tema: `economia/costo-de-oportunidad`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad se define como el valor de la mejor alternativa a la que se renuncia al tomar una decisión."

explicacion: |
  Esta es la definición fundamental. El costo no es lo que se gasta, sino lo que se deja de obtener por elegir otra opción.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["intangibles", "tiempo"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad puede incluir factores intangibles como el tiempo o la satisfacción personal, no solo dinero."

explicacion: |
  Correcto. El tiempo dedicado a una actividad es tiempo que no se puede usar en otra, generando un costo de oportunidad.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["escasez", "fundamento"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad existe porque los recursos son limitados y los deseos humanos son prácticamente ilimitados."

explicacion: |
  La escasez es la condición necesaria para que exista el costo de oportunidad. Si todo fuera abundante, no habría que renunciar a nada.
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["mitos", "confusion_comun"]

respuesta: falso
tipo: vf

enunciado: "El costo de oportunidad es igual al dinero que se gasta en la opción elegida."

explicacion: |
  Falso. El dinero gastado es el costo contable o explícito. El costo de oportunidad es el valor de la alternativa renuncada.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["frontera_posibilidades", "grafico"]

respuesta: verdadero
tipo: vf

enunciado: "En la Frontera de Posibilidades de Producción (FPP), el costo de oportunidad se representa por la pendiente de la curva."

explicacion: |
  La pendiente de la FPP indica cuánto de un bien hay que dejar de producir para obtener una unidad adicional del otro bien.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["tiempo_libre", "satisfaccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si elegís leer un libro en lugar de dormir la siesta, el costo de oportunidad es la satisfacción del descanso perdido."

explicacion: |
  Correcto. El costo de oportunidad es el beneficio de la mejor alternativa no elegida, en este caso, el descanso.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["costos_ocultos", "contabilidad"]

respuesta: falso
tipo: vf

enunciado: "El costo de oportunidad siempre es un costo explícito que aparece en los libros contables."

explicacion: |
  Falso. El costo de oportunidad es un costo implícito (no monetario directo) que no aparece en la contabilidad tradicional.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["consumo", "decision_financiera"]

respuesta: "el valor del auto usado"
tipo: completar

enunciado: "Si comprás un auto nuevo, el costo de oportunidad es el valor del auto usado que podrías haber comprado con ese mismo dinero."

explicacion: |
  El dinero gastado en el auto nuevo no puede usarse para comprar el auto usado. Ese es el sacrificio realizado.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["analisis_marginal", "decision_limite"]

respuesta: verdadero
tipo: vf

enunciado: "Las decisiones marginales se toman comparando el beneficio marginal con el costo de oportunidad marginal."

explicacion: |
  Correcto. Una decisión racional se toma hasta que el beneficio marginal es igual al costo marginal (que incluye el costo de oportunidad).
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["subjetividad", "valor_personal"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad es subjetivo porque depende del valor que el individuo asigna a las alternativas."

explicacion: |
  Correcto. Dos personas pueden tener diferentes costos de oportunidad para la misma decisión según sus preferencias y circunstancias.
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["politica_publica", "bien_comun"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad de mantener la paz es la infraestructura militar que no se puede construir con esos recursos."

explicacion: |
  Correcto. Los recursos destinados a la paz (o a otros bienes civiles) no pueden usarse para fines militares.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["condicion_necesaria", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Si no existe ninguna alternativa viable, el costo de oportunidad de la decisión es cero."

explicacion: |
  Correcto. Sin alternativas, no hay nada que renunciar, por lo tanto, el costo de oportunidad es nulo.
```

### 13 — pregunta 13

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["costo_explicito", "costo_implicito"]

variables:
  costo_alquiler: random(50000, 100000)
  ganancia_potencial: random(120000, 200000)

respuesta: "{ganancia_potencial}"
tipo: input

enunciado: "Un empresario deja de ganar {ganancia_potencial} pesos por su sueldo anterior para abrir su negocio. El alquiler del local cuesta {costo_alquiler}. ¿Cuál es el costo de oportunidad de la primera decisión (abrir el negocio) respecto a su empleo anterior?"

explicacion: |
  El costo de oportunidad de la decisión principal es la mejor alternativa renunciada (el sueldo), no el costo contable del alquiler.
```

### 14 — pregunta 14

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["ejemplo_cotidiano", "mc"]

variables:
  opcion_a: "El dinero gastado en la comida"
  opcion_b: "El tiempo y disfrute de ver la película"
  opcion_c: "El precio del transporte"
  opcion_d: "El ahorro que dejaste de tener"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "Si decidís ver una película en casa en lugar de ir al trabajo, el costo de oportunidad es:"

explicacion: |
  El costo de oportunidad es el beneficio de la mejor alternativa no elegida, en este caso, el salario del trabajo.
```

### 15 — pregunta 15

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["inversiones", "intereses"]

variables:
  capital: random(100000, 500000)
  tasa_otro_banco: random(5, 15)
  tasa_actual: 0

respuesta: "{capital * tasa_otro_banco / 100}"
tipo: input

enunciado: "Tenés {capital} pesos. Si los dejás en tu cuenta corriente (0% interés) en lugar de invertirlos en un bono que paga {tasa_otro_banco}% anual, ¿cuánto dinero dejás de ganar en un año?"

explicacion: |
  El costo de oportunidad es el rendimiento perdido al no elegir la mejor alternativa de inversión.
```

### 16 — pregunta 16

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["comparacion", "racionalidad"]

variables:
  valor_opcion_a: random(100, 500)
  valor_opcion_b: random(200, 600)
  valor_opcion_c: random(50, 300)

respuesta: uno_de(["opcion_b", "opcion_a", "opcion_c"])
opciones_explicitas: ["opcion_b", "opcion_a", "opcion_c"]
tipo: mc

enunciado: "Si elegís la opción A (valor 100) en lugar de la B (valor 200) y la C (valor 50), ¿cuál fue el costo de oportunidad de tu decisión?"

explicacion: |
  El costo de oportunidad es el valor de la MEJOR alternativa no elegida. Entre B y C, la mejor es B.
```

### 17 — pregunta 17

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["educacion", "tiempo"]

variables:
  horas_estudio: random(2, 5)
  salario_hora: random(800, 1200)

respuesta: "{horas_estudio * salario_hora}"
tipo: input

enunciado: "Si dedicas {horas_estudio} horas a estudiar y podrías haber trabajado a {salario_hora} pesos/hora, tu costo de oportunidad monetario es:"

explicacion: |
  Multiplicamos el tiempo dedicado a la actividad no remunerada por el salario de la mejor alternativa laboral.
```

### 18 — pregunta 18

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["definicion_tecnica", "mc"]

variables:
  opcion_a: "El costo total de producción"
  opcion_b: "El beneficio de la mejor alternativa renunciada"
  opcion_c: "El gasto fijo"
  opcion_d: "El ingreso marginal"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "En economía, el costo de oportunidad es:"

explicacion: |
  Es el beneficio de la mejor alternativa a la que se renuncia.
```

### 19 — pregunta 19

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["politica_publica", "presupuesto"]

variables:
  presupuesto: random(1000000000, 5000000000)
  hospitales: 5
  escuelas: 10

respuesta: "{presuesto / escuelas}"
tipo: input

enunciado: "Con un presupuesto de {presupuesto}, un gobierno puede construir {escuelas} escuelas o {hospitales} hospitales. ¿Cuál es el costo de oportunidad de construir una escuela en términos de hospitales?"

explicacion: |
  Primero calculamos el costo de una escuela (presupuesto/escuelas) y luego cuántos hospitales se pueden construir con ese monto (costo escuela / costo hospital). Nota: La respuesta correcta requiere calcular el valor relativo. Aquí simplificamos a la proporción directa si los costos unitarios fueran iguales, pero en realidad es (Presupuesto/Escuelas) / (Presupuesto/Hospitales) = Hospitales/Escuelas. Corrigiendo lógica: Costo 1 escuela = P/E. Costo 1 hospital = P/H. Cuántos hospitales con P/E? (P/E) / (P/H) = H/E.
```

### 20 — pregunta 20

```
variables:
  presupuesto: random(1000000000, 5000000000)
  hospitales: 5
  escuelas: 10

respuesta: "{hospitales / escuelas}"
tipo: input

enunciado: "Con un presupuesto de {presupuesto}, un gobierno puede construir {escuelas} escuelas o {hospitales} hospitales. ¿Cuántos hospitales se dejan de construir por cada escuela construida?"

explicacion: |
  La proporción de intercambio es Hospitales/Escuelas. Por cada escuela, renunciamos a 0.5 hospitales.
```

### 21 — pregunta 21

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["distractor", "relevancia"]

variables:
  costo_pasaje: random(200, 500)
  tiempo_viaje: 1
  salario_hora: 1000

respuesta: "{costo_pasaje}"
tipo: input

enunciado: "Si vas al trabajo, gastas {costo_pasaje} en pasaje y tardas {tiempo_viaje} hora. Si quedás en casa, ahorrás el pasaje pero perdés el salario de {salario_hora}. Si tu decisión es ir al trabajo, ¿cuál es el costo de oportunidad de QUEDARTE en casa?"

explicacion: |
  Si te quedás en casa, el costo es el salario perdido. El pasaje es un costo de ir al trabajo, no de quedarte.
```

### 22 — pregunta 22

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["distractor", "relevancia"]

variables:
  costo_pasaje: random(200, 500)
  tiempo_viaje: 1
  salario_hora: 1000

respuesta: "{salario_hora}"
tipo: input

enunciado: "Si vas al trabajo, gastas {costo_pasaje} en pasaje. Si quedás en casa, ahorrás el pasaje pero perdés el salario de {salario_hora}. Si tu opción elegida es 'quedarse en casa', ¿cuál es el costo de oportunidad monetario?"

explicacion: |
  El costo de oportunidad de quedarse en casa es el ingreso que dejás de ganar trabajando.
```

### 23 — pregunta 23

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["tiempo", "mc"]

variables:
  opcion_a: "El sueño perdido"
  opcion_b: "El salario de la hora no trabajada"
  opcion_c: "El precio del café"
  opcion_d: "El tiempo de preparación del café"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "Si te tomás un café de 15 minutos en lugar de trabajar, el costo de oportunidad es:"

explicacion: |
  El costo de oportunidad es el valor de la mejor alternativa, es decir, el salario que dejás de ganar en esos 15 minutos.
```

### 24 — pregunta 24

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["educacion_superior", "costo_total"]

variables:
  matricula: random(10000, 50000)
  mensualidad: random(5000, 20000)
  salario_anual: random(2000000, 4000000)
  anos: 4

respuesta: "{matricula + (mensualidad * 12 * anos) + (salario_anual * anos)}"
tipo: input

enunciado: "Para estudiar una carrera de {anos} años, pagás {matricula} de matrícula y {mensualidad} mensuales. Además, dejás de ganar {salario_anual} anuales. ¿Cuál es el costo de oportunidad total de la carrera?"

explicacion: |
  El costo de oportunidad total incluye los costos directos (matrícula y mensualidades) más el ingreso perdido (salario).
```

### 25 — pregunta 25

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["definicion", "mc"]

variables:
  opcion_a: "Cualquier alternativa"
  opcion_b: "La alternativa con menor costo monetario"
  opcion_c: "La mejor alternativa disponible"
  opcion_d: "La primera alternativa pensada"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "El costo de oportunidad se calcula considerando:"

explicacion: |
  Solo la MEJOR alternativa disponible. Las otras opciones no elegidas no cuentan.
```

### 26 — pregunta 26

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["tiempo_libre", "ejemplo"]

variables:
  horas_libres: random(2, 4)
  valor_hora_diversion: random(500, 1000)

respuesta: "{horas_libres * valor_hora_diversion}"
tipo: input

enunciado: "Si valorás tu hora de diversión en {valor_hora_diversion} pesos y decidís trabajar por {horas_libres} horas en lugar de divertirte, ¿cuál es el costo de oportunidad de trabajar?"

explicacion: |
  El costo de oportunidad es el valor subjetivo de la diversión perdida.
```

### 27 — pregunta 27

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["costo_implicito", "mc"]

variables:
  opcion_a: "El alquiler del local"
  opcion_b: "El salario que el dueño deja de ganar"
  opcion_c: "La luz del negocio"
  opcion_d: "El sueldo de los empleados"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "En un negocio propio, ¿cuál de estos es un costo de oportunidad implícito?"

explicacion: |
  El salario que el dueño deja de ganar trabajando en otra parte es un costo implícito. Los otros son costos explícitos.
```

### 28 — pregunta 28

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["tierra", "uso_suelo"]

variables:
  opcion_a: "El precio de venta de la tierra"
  opcion_b: "El cultivo que se deja de sembrar"
  opcion_c: "El costo de la maquinaria"
  opcion_d: "El salario del agricultor"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "Si usás una tierra para construir casas en lugar de sembrar trigo, el costo de oportunidad es:"

explicacion: |
  El beneficio que hubieras obtenido con la siembra de trigo.
```

### 29 — pregunta 29

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["transporte", "tiempo"]

variables:
  tiempo_auto: 60
  tiempo_bus: 90
  salario_hora: 1000

respuesta: "{(tiempo_bus - tiempo_auto) * salario_hora / 60}"
tipo: input

enunciado: "El auto tarda {tiempo_auto} minutos y el bus {tiempo_bus} minutos. Si tu hora vale {salario_hora} pesos, ¿cuánto dinero perdés de tiempo si elegís el bus en lugar del auto?"

explicacion: |
  La diferencia de tiempo multiplicada por el valor de tu hora.
```

### 30 — pregunta 30

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["naturaleza", "subjetivo"]

variables:
  opcion_a: "Objetivo y contable"
  opcion_b: "Subjetivo y basado en preferencias"
  opcion_c: "Fijo e inmutable"
  opcion_d: "Irrelevante para la decisión"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "El costo de oportunidad es fundamentalmente:"

explicacion: |
  Subjetivo, ya que depende de las preferencias y valoraciones individuales de la mejor alternativa.
```
