### 1 — El motor eléctrico en la industria
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["revolucion_industrial", "energia"]

respuesta: "motor eléctrico"
tipo: completar
respuestas_validas: ["motor eléctrico"]

enunciado: "A finales del siglo XIX, la transición de la energía de vapor a la energía eléctrica en las fábricas fue posible gracias a la invención y adopción masiva del ___."

explicacion: |
  El motor eléctrico permitió que la energía no tuviera que transmitirse mediante complejos sistemas de correas y ejes conectados a una única máquina de vapor central, permitiendo una distribución más flexible de la fuerza motriz.
```

### 2 — El impacto de la iluminación eléctrica
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["iluminacion", "hogar"]

variables:
  escenario: uno_de([["luz de gas", "luz de gas"], ["luz eléctrica", "luz eléctrica"], ["luz de vela", "luz de vela"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["luz de gas", "luz eléctrica", "luz de vela"]

enunciado: "Antes de la llegada de la red eléctrica doméstica, ¿cuál era la fuente de iluminación principal en los hogares urbanos de finales del siglo XIX?"

explicacion: |
  La llegada de la luz eléctrica en los hogares cambió drásticamente los hábitos de vida, permitiendo actividades nocturnas seguras y eliminando el riesgo de incendios por llamas abiertas.
```

### 3 — Secuencia de la electrificación
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["secuencia", "desarrollo"]

respuesta: ["máquinas de vapor", "motores eléctricos industriales", "iluminación doméstica", "electrodomésticos"]
tipo: ordenar
opciones_explicitas: ["máquinas de vapor", "motores eléctricos industriales", "iluminación doméstica", "electrodomésticos"]

enunciado: "Ordene cronológicamente la evolución del uso de la energía en la sociedad desde la Primera Revolución Industrial hasta la consolidación del hogar moderno:"

explicacion: |
  La electrificación comenzó en la industria para optimizar la producción, luego se extendió a la iluminación urbana y doméstica, y finalmente permitió la aparición de los electrodomésticos que definieron la vida moderna.
```

### 4 — El debate de las corrientes
```
metadata:
  materia: "historia_profucha"
  tema: "electrificacion_fabrica_hogar"
  nivel: "avanzado"
  tags: ["corrientes", "tesla", "edison"]

variables:
  duelo: uno_de([[0, "Corriente Continua (DC"], [1, "Corriente Alterna (AC"]])

respuesta: duelo[0] == duelo[1]

tipo: mc
opciones_explicitas: ["Corriente Continua (DC", "Corriente Alterna (AC"]

enunciado: "En la 'Guerra de las Corrientes', ¿qué tipo de corriente defendía Thomas Edison para su sistema de distribución?"

explicacion: |
  Edison promovía la Corriente Continua (DC), mientras que Tesla y Westinghouse impulsaban la Corriente Alterna (AC), que permitía transportar electricidad a largas distancias con menos pérdida de energía.
```

### 5 — La llegada de la luz al hogar
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["hogar", "tecnologia"]

respuesta: "iluminación"
tipo: completar
respuestas_validas: ["iluminación"]

enunciado: "El primer gran cambio que experimentaron los hogares con la llegada de la red eléctrica fue la ___."

explicacion: |
  Aunque hoy asociamos la electricidad con la cocina o el lavado, el primer uso masivo y transformador en las viviendas fue la sustitución de la luz de gas o aceite por la luz eléctrica.
```