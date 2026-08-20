### 1 — El despertar de la pubertad
```
metadata:
  materia: "psicologia"
  tema: "cambios_fisicos_pubertad"
  nivel: "basico"
  tags: ["desarrollo", "pubertad"]

variables:
  escenario: uno_de([["Mateo experimenta un cambio en su voz y un aumento de estatura repentino", "pubertad"], ["Lucía siente una mayor sensibilidad emocional y cambios en su ciclo menstrual", "pubertad"], ["Santi nota un crecimiento acelerado y la aparición de acné", "pubertad"]])
  idx: uno_de([0,1,2])

enunciado: "Un adolescente presenta el siguiente caso: {escenario[idx][0]}. Este conjunto de cambios biológicos caracteriza la etapa de la {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["pubertad"]

explicacion: |
  La pubertad es la etapa de transición donde ocurren cambios hormonales significativos que derivan en el desarrollo de caracteres sexuales secundarios.
```

### 2 — Identidad en construcción
```
metadata:
  materia: "psicologia"
  tema: "identidad_adolescencia"
  nivel: "intermedio"
  tags: ["identidad", "psicologia_evolutiva"]

variables:
  caso: uno_de([["Busca grupos sociales con intereses similares para reafirmar quién es", "identidad"], ["Se siente confundido sobre su rol en el mundo y sus valores", "identidad"], ["Experimenta crisis de pertenencia y prueba diferentes estilos de vestimenta", "identidad"]])
  idx: uno_de([0,1,2])

enunciado: "En el desarrollo de la personalidad, cuando un individuo se encuentra en el proceso de {caso[idx][0]}, está trabajando activamente en la formación de su ________."

respuesta: "identidad"
tipo: completar
respuestas_validas: ["identidad"]

explicacion: |
  Según Erikson, la búsqueda de identidad es la tarea central de la adolescencia, donde el individuo integra sus experiencias para formar un sentido del 'yo'.
```

### 3 — Hitos del desarrollo infantil
```
metadata:
  materia: "psicologia"
  tema: "etapas_desarrollo_infantil"
  nivel: "basico"
  tags: ["niñez", "hitos"]

enunciado: "¿Es correcto afirmar que durante la niñez temprana el pensamiento es predominantemente egocéntrico y centrado en el 'aquí y ahora'?"

respuesta: verdadero
tipo: vf

explicacion: |
  En la etapa de la niñez temprana (según Piaget), el niño tiene dificultades para ver las perspectivas de los demás, centrando su percepción en su propia experiencia.
```

### 4 — Secuencia del desarrollo físico
```
metadata:
  materia: "psicologia"
  tema: "secuencia_crecimiento"
  nivel: "intermedio"
  tags: ["crecimiento", "desarrollo"]

opciones_explicitas: ["Crecimiento cefalocaudal", "Crecimiento proximodistal", "Maduración de la identidad"]

enunciado: "Ordena los procesos de desarrollo físico y psicológico en el orden cronológico/direccional correcto para un ser humano en desarrollo:"

pasos:
  - "El desarrollo ocurre de la cabeza hacia los pies."
  - "El desarrollo ocurre del centro del cuerpo hacia las extremidades."
  - "La consolidación de la personalidad adulta."

respuesta: ["Crecimiento cefalocaudal", "Crecimiento proximodistal", "Maduración de la identidad"]
tipo: ordenar

explicacion: |
  El desarrollo humano sigue patrones biológicos (cefalocaudal y proximodistal) antes de llegar a la maduración psicológica compleja.
```

### 5 — El cambio en la percepción social
```
metadata:
  materia: "psicologia"
  tema: "socializacion_adolescencia"
  nivel: "intermedio"
  tags: ["socializacion", "grupo_pares"]

variables:
  situacion: uno_de([["El grupo de amigos se vuelve el referente principal de normas", "amigos"], ["La familia sigue siendo el núcleo de valores absolutos", "familia"], ["El individuo se aísla de toda influencia externa", "aislamiento"]])
  idx: uno_de([0,1,2])

enunciado: "En la transición de la niñez a la adolescencia, el foco de influencia social suele cambiar. Si observamos que {situacion[idx][0]}, esto indica un desplazamiento hacia el grupo de ________."

respuesta: "amigos"
tipo: completar
respuestas_validas: ["amigos"]

explicacion: |
  Durante la adolescencia, el grupo de pares (amigos) adquiere una relevancia crucial para la socialización, compitiendo con la autoridad familiar en la formación de la identidad.
```