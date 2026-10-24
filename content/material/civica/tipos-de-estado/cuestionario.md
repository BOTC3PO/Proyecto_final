# Civica — tipos de estado (cuestionario, 22 preguntas VBLang)

> Tema: `civica/tipos-de-estado`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "basico"
  tags: ["estado_liberal", "libertad"]

variables:
  clave: uno_de(["libertad", "propiedad", "seguridad"])

respuesta: "libertad"
tipo: completar

enunciado: "Según el pensamiento liberal clásico, el Estado existe principalmente para proteger la {clave} del individuo."

explicacion: |
  El Estado Liberal, influenciado por pensadores como John Locke, prioriza la protección de las libertades individuales (vida, libertad y propiedad) y la intervención mínima del gobierno.
```

### 2 — pregunta 2

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "intermedio"
  tags: ["estado_bienestar", "igualdad"]

variables:
  objetivo: uno_de(["igualdad real", "libertad formal", "crecimiento económico"])

respuesta: "igualdad real"
tipo: completar

enunciado: "A diferencia del liberalismo clásico, el Estado de Bienestar busca garantizar la {objetivo} de oportunidades mediante servicios públicos universales."

explicacion: |
  El Estado de Bienestar interviene activamente para corregir desigualdades, asegurando que la libertad individual tenga condiciones materiales básicas para ejercerse plenamente.
```

### 3 — pregunta 3

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "intermedio"
  tags: ["economia", "mercado"]

variables:
  rol: uno_de(["interviene", "no interfiere", "controla"])

respuesta: "no interfiere"
tipo: completar

enunciado: "En el modelo de Estado Liberal, se considera que el mercado funciona mejor cuando el gobierno {rol} en la economía."

explicacion: |
  El liberalismo clásico sostiene que la libertad económica y la no interferencia estatal permiten que el mercado asigne recursos de manera más eficiente.
```

### 4 — pregunta 4

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "intermedio"
  tags: ["igualdad", "comparación"]

variables:
  modelo: uno_de(["liberal", "bienestar"])

respuesta: "liberal"
tipo: completar

enunciado: "El modelo {modelo} prioriza la igualdad ante la ley (formal) sobre la igualdad de resultados."

explicacion: |
  El Estado Liberal se centra en la igualdad jurídica, mientras que el Estado de Bienestar busca la igualdad real de oportunidades y resultados sociales.
```

### 5 — pregunta 5

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "basico"
  tags: ["estado_liberal", "libertad", "historia"]

variables:
  clave: "libertad"

respuesta: "libertad"
tipo: completar

enunciado: "El Estado Liberal, surgido con la Revolución Francesa, tiene como premisa central que el individuo es {clave} por naturaleza."

explicacion: |
  El Estado Liberal se fundamenta en la idea de la libertad natural del individuo. Su rol principal es proteger esa libertad interviniendo lo mínimo posible en la economía y la vida privada, basándose en la confianza en el mercado y la igualdad ante la ley.
```

### 6 — pregunta 6

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "intermedio"
  tags: ["estado_liberal", "john_locke", "rol_estatal"]

variables:
  rol: "minimo"

respuesta: "minimo"
tipo: completar

enunciado: "Para el liberalismo clásico, representado por pensadores como John Locke, el Estado debía tener un rol {rol}."

explicacion: |
  John Locke y otros teóricos del liberalismo clásico argumentaban que el Estado debía ser mínimo, limitándose a garantizar la vida, la libertad y la propiedad privada, sin interferir en las dinámicas sociales o económicas.
```

### 7 — pregunta 7

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "basico"
  tags: ["estado_bienestar", "historia", "siglo_xx"]

variables:
  momento: "siglo_xx"

respuesta: "siglo xx"
tipo: completar

enunciado: "El Estado de Bienestar emerge como respuesta a las desigualdades del liberalismo clásico durante el {momento}, especialmente tras la Segunda Guerra Mundial."

explicacion: |
  El Estado de Bienestar nace en el siglo XX para corregir los desequilibrios sociales generados por el liberalismo clásico. Su objetivo es garantizar la igualdad real de oportunidades mediante la provisión de servicios públicos universales.
```

### 8 — pregunta 8

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "intermedio"
  tags: ["estado_bienestar", "igualdad", "justicia_social"]

variables:
  objetivo: "igualdad_real"

respuesta: "igualdad real"
tipo: completar

enunciado: "A diferencia del liberalismo que busca igualdad ante la ley, el Estado de Bienestar busca garantizar la {objetivo} de oportunidades."

explicacion: |
  El Estado de Bienestar no se conforma con la igualdad formal (legal), sino que busca la igualdad real de oportunidades. Esto implica que los ciudadanos deben tener condiciones materiales básicas para ejercer plenamente su libertad.
```

### 9 — pregunta 9

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "intermedio"
  tags: ["estado_bienestar", "impuestos", "financiamiento"]

variables:
  mecanismo: "impuestos_progresivos"

respuesta: "impuestos progresivos"
tipo: completar

enunciado: "Los servicios públicos universales del Estado de Bienestar suelen financiarse a través de {mecanismo}."

explicacion: |
  Para sostener la provisión de salud, educación y jubilaciones, el Estado de Bienestar utiliza mecanismos de redistribución de la riqueza, siendo los impuestos progresivos una herramienta clave para garantizar la justicia social.
```

### 10 — pregunta 10

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "avanzado"
  tags: ["estado_bienestar", "justicia_social", "deber_estatal"]

variables:
  concepto: "justicia_social"

respuesta: "justicia social"
tipo: completar

enunciado: "En el modelo de Estado de Bienestar, la {concepto} se convierte en un deber del gobierno, no solo en un derecho individual."

explicacion: |
  En este modelo, el gobierno asume la responsabilidad activa de promover la justicia social. Se reconoce que la libertad individual no puede ejercerse plenamente sin condiciones materiales básicas, por lo que el Estado debe intervenir para garantizarlas.
```

### 11 — pregunta 11

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "intermedio"
  tags: ["estado_neoliberal", "privatizacion", "gasto_publico"]

variables:
  caracteristica: "reduccion_gasto"

respuesta: "reducción drástica del gasto público"
tipo: completar

enunciado: "El Estado Neoliberal, que ganó fuerza en los años 80 y 90, propone una {caracteristica} y la privatización de empresas estatales."

explicacion: |
  El Estado Neoliberal retoma parcialmente ideas del liberalismo clásico pero con matices modernos. Defiende la reducción drástica del gasto público y la apertura de mercados, creyendo que el Estado debe limitarse a garantizar la propiedad y la libertad económica sin intervenir en la distribución.
```

### 12 — pregunta 12

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "intermedio"
  tags: ["estado_neoliberal", "mercado", "libre_competencia"]

variables:
  vision: "apertura_mercados"

respuesta: "apertura de mercados"
tipo: completar

enunciado: "Según la visión neoliberal, la {vision} es esencial para que el mercado funcione eficientemente sin interferencias estatales."

explicacion: |
  El neoliberalismo confía en que la libre competencia y la apertura de mercados generan el bienestar óptimo. Considera que las intervenciones estatales suelen ser ineficientes y distorsionan los precios naturales de los bienes y servicios.
```

### 13 — pregunta 13

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "avanzado"
  tags: ["comparacion", "igualdad", "liberalismo", "bienestar"]

variables:
  tipo_liberal: "igualdad_legal"
  tipo_bienestar: "igualdad_real"

respuesta: "igualdad real"
tipo: completar

enunciado: "Mientras el Estado Liberal prioriza la {tipo_liberal}, el Estado de Bienestar busca la {tipo_bienestar}."

explicacion: |
  Esta es una distinción fundamental. El liberalismo clásico se satisface con que la ley trate a todos por igual (formal), mientras que el Estado de Bienestar entiende que sin condiciones materiales mínimas, esa igualdad formal es insuficiente para garantizar la libertad efectiva.
```

### 14 — pregunta 14

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "basico"
  tags: ["aristoteles", "historia", "animal_politico"]

variables:
  definicion: "animal_politico"

respuesta: "animal político"
tipo: completar

enunciado: "Aristóteles definía al hombre como un '{definicion}', sugiriendo que el Estado es un marco necesario para la convivencia."

explicacion: |
  La definición aristotélica subraya la naturaleza social del ser humano. El Estado no es una imposición externa, sino el marco natural donde los seres humanos desarrollan su potencial político y conviven, independientemente del tipo de Estado que se implemente.
```

### 15 — pregunta 15

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "avanzado"
  tags: ["habermas", "legitimidad", "esfera_publica"]

variables:
  mecanismo: "dialogo_racional"

respuesta: "dialogo racional"
tipo: completar

enunciado: "Jürgen Habermas exploró cómo la esfera pública y el {mecanismo} pueden legitimar el poder estatal en sociedades complejas."

explicacion: |
  Habermas propone que la legitimidad del poder no viene solo de la fuerza o la tradición, sino de la capacidad de los ciudadanos para participar en un debate público racional. Esto es crucial para entender cómo los Estados modernos buscan aprobación ciudadana.
```

### 16 — pregunta 16

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "avanzado"
  tags: ["habermas", "democracia", "esfera_publica"]

variables:
  concepto: "esfera_publica"

respuesta: "esfera pública"
tipo: completar

enunciado: "Jürgen Habermas enfatizó la importancia de la {concepto} para la legitimidad del poder en sociedades complejas."

explicacion: |
  La esfera pública es el espacio donde los ciudadanos debaten libremente los asuntos de interés común. Para Habermas, es fundamental para la legitimidad democrática, ya que permite que el poder estatal sea cuestionado y validado mediante el diálogo racional.
```

### 17 — pregunta 17

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "intermedio"
  tags: ["estado_neoliberal", "limites", "rol_estatal"]

variables:
  limite: "limitarse_a_garantizar"

respuesta: "limitarse a garantizar"
tipo: completar

enunciado: "El Estado Neoliberal propone que el gobierno debe {limite} la propiedad y la libertad, sin intervenir en la economía."

explicacion: |
  El neoliberalismo aboga por un Estado mínimo que se limite a garantizar los derechos básicos (como la propiedad) y el marco legal para el comercio, evitando la regulación económica y la provisión directa de servicios que considere ineficientes.
```

### 18 — pregunta 18

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "basico"
  tags: ["estado_liberal", "igualdad", "ley"]

variables:
  principio: "igualdad_ante_la_ley"

respuesta: "igualdad ante la ley"
tipo: completar

enunciado: "El Estado Liberal se basa en la idea de que la {principio} es suficiente para garantizar la justicia."

explicacion: |
  Para el liberalismo clásico, si la ley trata a todos por igual sin distinciones, se ha alcanzado la justicia. No se considera necesario intervenir para equilibrar las desigualdades económicas resultantes de la competencia libre.
```

### 19 — pregunta 19

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "basico"
  tags: ["historia", "estado_bienestar"]

respuesta: falso
tipo: vf

enunciado: "El Estado de Bienestar surgió inmediatamente después de la Revolución Francesa como respuesta al feudalismo."

explicacion: |
  El Estado de Bienestar emerge en el siglo XX, especialmente después de la Segunda Guerra Mundial, no tras la Revolución Francesa.
```

### 20 — pregunta 20

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "basico"
  tags: ["historia", "cronologia"]

respuesta: falso
tipo: vf

enunciado: "El Estado de Bienestar es un modelo que surgió en la Edad Media para proteger a los campesinos."

explicacion: |
  El Estado de Bienestar es un modelo moderno, surgido en el siglo XX, no en la Edad Media.
```

### 21 — pregunta 21

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "basico"
  tags: ["verdad_falsa", "liberalismo"]

respuesta: verdadero
tipo: vf

enunciado: "El Estado Liberal busca garantizar la vida, la libertad y la propiedad del individuo."

explicacion: |
  Esta es la definición central del Estado Liberal según el pensamiento de John Locke y otros pensadores clásicos.
```

### 22 — pregunta 22

```
metadata:
  materia: "Cívica"
  tema: "tipos_de_estado"
  nivel: "basico"
  tags: ["verdad_falsa", "bienestar"]

respuesta: verdadero
tipo: vf

enunciado: "El Estado de Bienestar financia sus servicios a través de impuestos progresivos."

explicacion: |
  Los impuestos progresivos permiten redistribuir la riqueza y financiar los servicios públicos universales del Estado de Bienestar.
```
