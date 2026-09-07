# Oficios — seguridad cerrajeria (cuestionario, 21 preguntas VBLang)

> Tema: `oficios/cerrajero/seguridad-cerrajeria`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["EPP", "definicion"]

variables:
  respuesta_correcta: "Equipo de Protección Personal"

respuesta: "Equipo de Protección Personal"
tipo: completar

enunciado: "El acrónimo EPP se refiere al {respuesta_correcta}, fundamental para la seguridad del cerrajero."

explicacion: |
  EPP son las siglas de Equipo de Protección Personal. Es el conjunto de dispositivos que protege al trabajador contra riesgos laborales.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["EPP", "funcion"]

variables:
  funcion: "ultima linea de defensa"

respuesta: "ultima linea de defensa"
tipo: completar

enunciado: "Aunque existan medidas de control en el entorno, el EPP actúa como la {funcion} contra los riesgos residuales."

explicacion: |
  El EPP no elimina el riesgo, pero sí actúa como la última barrera entre el trabajador y el peligro cuando las otras medidas fallan o son insuficientes.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "intermedio"
  tags: ["quimicos", "guantes"]

variables:
  material_guante: uno_de(["nitrilo", "neopreno"])

respuesta: material_guante
tipo: completar

enunciado: "Para protegerse de disolventes y aceites, se recomiendan guantes resistentes a químicos, como los de {material_guante}."

explicacion: |
  Los guantes de nitrilo o neopreno ofrecen resistencia adecuada contra grasas, aceites y disolventes comunes en la cerrajería.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "intermedio"
  tags: ["quimicos", "respiracion"]

variables:
  proteccion: "mascarillas con filtros"

respuesta: "mascarillas con filtros"
tipo: completar

enunciado: "En espacios mal ventilados con vapores nocivos, es indispensable usar {proteccion} adecuados."

explicacion: |
  Los vapores de productos químicos pueden ser inhalados. Las mascarillas con filtros específicos protegen las vías respiratorias de estos agentes.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["mecanicos", "ojos"]

variables:
  proteccion_ocular: "gafas de seguridad con protección lateral"

respuesta: "gafas de seguridad con protección lateral"
tipo: completar

enunciado: "Para evitar lesiones por astillas o herramientas resbaladas, se deben usar {proteccion_ocular}."

explicacion: |
  Las gafas con protección lateral evitan que partículas o objetos entren por los costados, protegiendo los ojos de accidentes mecánicos.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["mecanicos", "pies"]

variables:
  proteccion_pies: "calzado de seguridad con puntera reforzada"

respuesta: "calzado de seguridad con puntera reforzada"
tipo: completar

enunciado: "Para proteger los pies ante la caída de objetos pesados como cilindros, se usa {proteccion_pies}."

explicacion: |
  La puntera reforzada (generalmente de acero o composite) absorbe el impacto y protege los dedos ante objetos que caen desde alturas.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "intermedio"
  tags: ["auditivo", "taladrado"]

variables:
  proteccion_auditiva: "tapones auditivos o orejeras"

respuesta: "tapones auditivos o orejeras"
tipo: completar

enunciado: "Ante el ruido prolongado del taladrado o corte de metales, se previene la hipoacusia usando {proteccion_auditiva}."

explicacion: |
  La exposición constante a altos niveles de ruido causa pérdida auditiva irreversible. Los tapones o orejeras atenúan el sonido alcanzado por el oído.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["quimicos", "identificacion"]

variables:
  riesgo: "exposición a productos químicos"
  sintoma: "quemaduras químicas"

respuesta: riesgo
tipo: completar

enunciado: "Trabajar con disolventes sin guantes expone al cerrajero principalmente a {riesgo}, pudiendo causar {sintoma}."

explicacion: |
  Los disolventes y grasas pueden penetrar la piel o causar irritación severa. El riesgo principal es la exposición química directa.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "intermedio"
  tags: ["entorno", "ventilacion"]

variables:
  problema: "iluminación deficiente y vapores"
  solucion: "mascarillas y iluminación adecuada"

respuesta: solucion
tipo: completar

enunciado: "En espacios reducidos con mala ventilación, el cerrajero debe priorizar {solucion} para evitar intoxicaciones."

explicacion: |
  La acumulación de vapores nocivos en espacios cerrados requiere filtración respiratoria y buena visibilidad para trabajar con seguridad.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["mecanicos", "ojos"]

variables:
  herramienta: "martillos o sierras"
  riesgo: "proyectiles"

respuesta: riesgo
tipo: completar

enunciado: "Al usar martillos o sierras, el riesgo principal de proyección son {riesgo} de metal o fragmentos."

explicacion: |
  Las herramientas de impacto o corte pueden generar astillas o fragmentos que viajan a gran velocidad, requiriendo protección ocular.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["mecanicos", "pies"]

variables:
  objeto: "cilindros de cerradura"
  proteccion: "puntera reforzada"

respuesta: proteccion
tipo: completar

enunciado: "Para proteger los pies de la caída de {objeto} u herramientas grandes, se requiere calzado con {proteccion}."

explicacion: |
  Los cilindros y herramientas pesadas pueden romper los dedos si caen sobre ellos. La puntera reforzada distribuye la fuerza del impacto.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["EPP", "conceptos"]

variables:
  riesgo_alto: 1
  riesgo_bajo: 0

respuesta: riesgo_alto
tipo: input

enunciado: "Si un cerrajero trabaja con disolventes en un espacio cerrado sin ventilación, ¿cuánto (1 o 0) representa el riesgo de intoxicación si NO usa mascarilla? (1 = Riesgo presente, 0 = Sin riesgo)"

explicacion: |
  El valor es 1. Sin mascarilla y sin ventilación, el riesgo de inhalar vapores nocivos es alto y presente.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "intermedio"
  tags: ["auditivo", "salud"]

variables:
  sintoma: "pérdida de audición"

respuesta: sintoma
tipo: completar

enunciado: "La hipoacusia ocupacional se manifiesta principalmente como {sintoma} progresiva."

explicacion: |
  La exposición al ruido daña el oído interno, causando una disminución gradual de la capacidad de escuchar.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["mecanicos", "ojos"]

variables:
  proteccion: "gafas de seguridad"

respuesta: proteccion
tipo: completar

enunciado: "Para trabajar con llaves maestras y punzones, la {proteccion} es obligatoria para evitar lesiones oculares."

explicacion: |
  El uso de herramientas de impacto puede generar proyecciones. Las gafas de seguridad son la barrera principal para los ojos.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["epp", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "El EPP actúa como la última línea de defensa cuando no se pueden eliminar los riesgos del entorno."

explicacion: |
  El EPP es crucial porque siempre hay situaciones donde el riesgo no se puede eliminar completamente.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["calzado", "proteccion"]

respuesta: verdadero
tipo: vf

enunciado: "El calzado con puntera reforzada protege los pies ante la caída de objetos pesados como cilindros de cerradura."

explicacion: |
  Las puntas de acero o composite son esenciales para proteger contra impactos verticales.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["espacios", "iluminacion"]

respuesta: verdadero
tipo: vf

enunciado: "En espacios reducidos con iluminación deficiente, el riesgo de accidentes se multiplica."

explicacion: |
  La falta de visibilidad aumenta el riesgo de golpes, cortes y tropiezos.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "intermedio"
  tags: ["epp", "defensa"]

respuesta: verdadero
tipo: vf

enunciado: "El EPP es considerado la última línea de defensa en la jerarquía de controles de riesgo."

explicacion: |
  Primero se eliminan los riesgos, luego se controlan, y el EPP es la barrera final.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["iluminacion", "riesgos"]

respuesta: verdadero
tipo: vf

enunciado: "Trabajar con iluminación deficiente aumenta la probabilidad de accidentes."

explicacion: |
  La mala visibilidad impide identificar correctamente los riesgos del entorno.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "intermedio"
  tags: ["auditivo", "salud"]

respuesta: verdadero
tipo: vf

enunciado: "La hipoacusia ocupacional es una pérdida de audición irreversible causada por ruido prolongado."

explicacion: |
  La exposición crónica a altos niveles de ruido daña las células ciliadas del oído.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_seguridad_cerrajeria"
  nivel: "basico"
  tags: ["epp", "integridad"]

respuesta: verdadero
tipo: vf

enunciado: "El uso correcto del EPP garantiza la integridad física del cerrajero."

explicacion: |
  El EPP es fundamental para prevenir lesiones y permitir el ejercicio saludable del oficio.
```
